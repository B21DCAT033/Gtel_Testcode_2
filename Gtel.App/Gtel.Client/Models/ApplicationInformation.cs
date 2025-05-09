namespace Gtel.Client.Models
{
    public class ApplicationInformation
    {
        public long? Id { get; set; }
        public Guid? JobPostingKey { get; set; }
        public required string FullName { get; set; }
        public required string Email { get; set; }
        public required string Telephone { get; set; }
        public required string Address { get; set; }
        public string? Message { get; set; }
        public int? FileId { get; set; }
        public Guid? FileKey { get; set; }
        public string? FileUrl { get; set; }
        public string? FileName { get; set; }
        public string? FileType { get; set; }
        public string? FileContentType { get; set; }
        public bool IsDeleted { get; set; } = false;
        public int? DeletedByUserId { get; set; }
        public string? DeletedByUserName { get; set; }
        public DateTime? DeletedDate { get; set; }
        public DateTime CreationDate { get; set; }
        public int? ModifiedByUserId { get; set; }
        public string? ModifiedByUserName { get; set; }
        public DateTime? ModificationDate { get; set; }
    }
}
