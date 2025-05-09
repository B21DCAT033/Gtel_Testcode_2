namespace Gtel.Client.ViewModels.NewsComments
{
    public class RejectNewsCommentInput
    {
        public required long Id { get; set; }
        public string? CurrentUserName { get; set; }
        public int? CurrentUserId { get; set; }
    }
}
