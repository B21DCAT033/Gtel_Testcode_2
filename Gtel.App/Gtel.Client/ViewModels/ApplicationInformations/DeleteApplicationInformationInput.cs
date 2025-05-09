namespace Gtel.Client.ViewModels.ApplicationInformations
{
    public class DeleteApplicationInformationInput
    {
        public required long Id { get; set; }
        public string? CurrentUserName { get; set; }
        public int? CurrentUserId { get; set; }
    }
}
