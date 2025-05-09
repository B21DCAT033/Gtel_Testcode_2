namespace Gtel.Client.Helpers
{
    public class FileCommon
    {
        public required string Extension { get; set; }
        public required string ContentType { get; set; }
        public required byte[] FileSignature { get; set; }
    }
}
