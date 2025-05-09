namespace Gtel.Client.ViewModels.ApplicationInformations
{
    public class GetApplicationInformationForViewDto
    {
        public required ApplicationInformationDto ApplicationInformation { get; set; }
        public string? JobPostingTitle { get; set; }
        public string? JobPostingUrl { get; set; }
    }
}
