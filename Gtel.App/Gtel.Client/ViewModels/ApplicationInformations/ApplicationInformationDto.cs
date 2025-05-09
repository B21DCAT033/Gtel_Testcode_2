namespace Gtel.Client.ViewModels.ApplicationInformations
{
    public class ApplicationInformationDto
    {
        public long? Id { get; set; }
        public Guid? JobPostingKey { get; set; }
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? Telephone { get; set; }
        public string? Address { get; set; }
        public string? Message { get; set; }
        public int? FileId { get; set; }
        public Guid? FileKey { get; set; }
        public string? FileUrl { get; set; }
        public string? FileName { get; set; }
        public string? FileType { get; set; }
        public string? FileContentType { get; set; }
    }
}
