using System;

namespace Gtel.Client.DataTransfers;

public class AutoImageOptimizerSettings
{
    public const string ConfigurationName = "AutoImageOptimizer";
    public int? Quality { get; set; } = 92;
    public int? MaxWidth { get; set; }
    public int? MaxHeight { get; set; }
    public string[] AllowedExtensions { get; set; } = [
            ".png",
            ".jpg",
            ".jpeg"
        ];
    public string[] ExcludedFolderPaths { get; set; } = ["/umbraco/assets/"];
    public bool ConvertWebp { get; set; } = true;
    public bool Enabled { get; set; } = true;
}
