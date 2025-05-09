using Gtel.Client.DataTransfers;
using SixLabors.ImageSharp.Web.Commands;
using SixLabors.ImageSharp.Web.DependencyInjection;
using SixLabors.ImageSharp.Web.Middleware;
using SixLabors.ImageSharp.Web.Processors;
using Umbraco.Cms.Core.Composing;

namespace Gtel.Client.Composers;

public class AutoImageOptimizeComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        // Đăng ký và cấu hình dịch vụ
        ConfigureSettings(builder);

        // Thêm ImageSharp với cấu hình tùy chỉnh
        AddImageSharpWithCustomConfiguration(builder);
    }

    private static void ConfigureSettings(IUmbracoBuilder builder)
    {
        builder.Services.AddOptions<AutoImageOptimizerSettings>()
            .Bind(builder.Config.GetSection(AutoImageOptimizerSettings.ConfigurationName));
    }

    private static void AddImageSharpWithCustomConfiguration(IUmbracoBuilder builder)
    {
        var settings = builder.Config.GetSection(AutoImageOptimizerSettings.ConfigurationName)
            .Get<AutoImageOptimizerSettings>() ?? new AutoImageOptimizerSettings();

        builder.Services.AddImageSharp(options =>
        {
            options.OnParseCommandsAsync = c => ProcessImageCommands(c, settings);
        });
    }

    private static Task ProcessImageCommands(SixLabors.ImageSharp.Web.Middleware.ImageCommandContext c, AutoImageOptimizerSettings settings)
    {
        if (!settings.Enabled)
            return Task.CompletedTask;

        var httpContext = c.Context;
        if (httpContext is null)
            return Task.CompletedTask;

        var path = httpContext.Request.Path.Value;
        if (string.IsNullOrEmpty(path))
            return Task.CompletedTask;

        // Xử lý các tham số query string
        HandleQueryStringParameters(c, httpContext);

        // Kiểm tra và áp dụng tối ưu hóa WebP
        ApplyWebPOptimizationIfApplicable(c, httpContext, path, settings);

        // Áp dụng các ràng buộc an toàn cho kích thước
        ApplySafetySizeConstraints(c);

        // Xử lý cờ noformat
        HandleNoFormatFlag(c);

        return Task.CompletedTask;
    }

    private static void HandleQueryStringParameters(SixLabors.ImageSharp.Web.Middleware.ImageCommandContext c, Microsoft.AspNetCore.Http.HttpContext httpContext)
    {
        var queryString = httpContext.Request.QueryString.Value;
        if (queryString == null)
            return;

        // Xử lý tham số noformat
        if (queryString.Contains("noformat"))
            c.Commands.Add("noformat", "1");

        // Xử lý tham số optimize
        if (queryString.Contains("optimize"))
            c.Commands.Add("noformat", "1");
    }

    private static void ApplyWebPOptimizationIfApplicable(SixLabors.ImageSharp.Web.Middleware.ImageCommandContext c, Microsoft.AspNetCore.Http.HttpContext httpContext, string path, AutoImageOptimizerSettings settings)
    {
        // Kiểm tra xem path có nằm trong danh sách loại trừ không
        var excludePath = settings.ExcludedFolderPaths.Any(x => path.Contains(x));
        if (excludePath)
            return;

        // Kiểm tra trình duyệt có hỗ trợ WebP không
        var supportsWebP = httpContext.Request.GetTypedHeaders().Accept
            .Any(x => x.MediaType.Value == "image/webp");
        if (!supportsWebP)
            return;

        // Kiểm tra các điều kiện để áp dụng định dạng WebP
        var shouldApplyWebP = !c.Commands.Contains("webp") &&
                              !c.Commands.Contains("noformat") &&
                              path.EndsWithOneOf(settings.AllowedExtensions);

        if (shouldApplyWebP)
        {
            // Áp dụng chuyển đổi sang WebP
            ApplyWebPConversion(c, httpContext, settings);
        }
    }

    private static void ApplyWebPConversion(SixLabors.ImageSharp.Web.Middleware.ImageCommandContext c, Microsoft.AspNetCore.Http.HttpContext httpContext, AutoImageOptimizerSettings settings)
    {
        c.Commands.Remove("format");
        c.Commands.Add("format", "webp");

        // Thêm tham số chất lượng nếu chưa có
        if (!c.Commands.Contains("quality"))
            c.Commands.Add("quality", settings.Quality?.ToString() ?? "92");

        httpContext.Response.Headers.Append("Vary", "Accept");
    }

    private static void ApplySafetySizeConstraints(SixLabors.ImageSharp.Web.Middleware.ImageCommandContext c)
    {
        if (c.Commands.Count == 0)
            return;

        const uint maxAllowedDimension = 2400;

        // Kiểm tra và giới hạn chiều rộng
        if (c.Commands.TryGetValue(ResizeWebProcessor.Width, out var widthStr))
        {
            var width = c.Parser.ParseValue<uint>(widthStr, c.Culture);
            if (width > maxAllowedDimension)
                c.Commands.Remove(ResizeWebProcessor.Width);
        }

        // Kiểm tra và giới hạn chiều cao
        if (c.Commands.TryGetValue(ResizeWebProcessor.Height, out var heightStr))
        {
            var height = c.Parser.ParseValue<uint>(heightStr, c.Culture);
            if (height > maxAllowedDimension)
                c.Commands.Remove(ResizeWebProcessor.Height);
        }
    }

    private static void HandleNoFormatFlag(SixLabors.ImageSharp.Web.Middleware.ImageCommandContext c)
    {
        // Nếu có cờ noformat, loại bỏ tham số format
        if (c.Commands.TryGetValue("noformat", out _))
        {
            c.Commands.Remove("format");
        }
    }
}

public static class StringExtensions
{
    public static bool EndsWithOneOf(this string source, IEnumerable<string> extensions)
    {
        return extensions.Any(ext => source.EndsWith(ext, StringComparison.OrdinalIgnoreCase));
    }
}