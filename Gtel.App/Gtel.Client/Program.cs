using Gtel.Client.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Serilog.Context;
using System;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddComposers()
    .Build();

builder.Services.AddUmbracoDbContext<GtelPortalDbContext>((serviceProvider, options) =>
{
    options.UseUmbracoDatabaseProvider(serviceProvider);
});

WebApplication app = builder.Build();

// app.Use(async (context, next) =>
// {
//     context.Response.Headers.Append("X-Frame-Options", "SAMEORIGIN");
//     context.Response.Headers.Append("Content-Security-Policy", "frame-ancestors 'self';");
//     await next();
// });

await app.BootUmbracoAsync();


app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

app.UseAuthorization();
app.UseCertificateForwarding();

await app.RunAsync();
