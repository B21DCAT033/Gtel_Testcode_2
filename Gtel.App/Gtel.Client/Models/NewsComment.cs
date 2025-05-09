namespace Gtel.Client.Models
{
    public class NewsComment
    {
        public required long Id { get; set; }
        public required Guid NewsUmbracoKey { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Message { get; set; }
        public bool IsApproved { get; set; } = false;
        public int? ApprovedByUserId { get; set; }
        public string? ApprovedByUserName { get; set; }
        public DateTime? ApprovedDate { get; set; }
        public bool IsDeleted { get; set; } = false;
        public int? DeletedByUserId { get; set; }
        public string? DeletedByUserName { get; set; }
        public DateTime? DeletedDate { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? ModifiedByUserId { get; set; }
        public string? ModifiedByUserName { get; set; }
        public DateTime? ModificationDate { get; set; }
    }
}
