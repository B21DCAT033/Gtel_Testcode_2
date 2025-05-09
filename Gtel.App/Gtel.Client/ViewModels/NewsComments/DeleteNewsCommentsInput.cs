namespace Gtel.Client.ViewModels.NewsComments
{
    public class DeleteNewsCommentsInput
    {
        public required List<long> Ids { get; set; }
        public string? CurrentUserName { get; set; }
        public int? CurrentUserId { get; set; }
    }
}
