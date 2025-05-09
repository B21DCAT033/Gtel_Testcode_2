namespace Gtel.Client.ViewModels.NewsComments
{
    public class GetNewsCommentForViewDto
    {
        public required NewsCommentDto NewsComment { get; set; }
        public string? NewsUrl {  get; set; }
        public string? NewsTitle {  get; set; }
    }
}
