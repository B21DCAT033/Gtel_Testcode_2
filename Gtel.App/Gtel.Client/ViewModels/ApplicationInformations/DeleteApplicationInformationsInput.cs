namespace Gtel.Client.ViewModels.ApplicationInformations
{
    public class DeleteApplicationInformationsInput
    {
        public required List<long> Ids { get; set; }
        public string? CurrentUserName { get; set; }
        public int? CurrentUserId { get; set; }
    }
}
