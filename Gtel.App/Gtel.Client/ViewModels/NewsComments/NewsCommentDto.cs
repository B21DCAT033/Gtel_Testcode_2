namespace Gtel.Client.ViewModels.NewsComments
{
    public class NewsCommentDto
    {
        public long? Id { get; set; }
        public Guid? NewsUmbracoKey { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Message { get; set; }
        public bool? IsApproved { get; set; }
        public string? ApprovedBy { get; set; }
        public DateTime? ApprovedDate { get; set; }
    }
}
