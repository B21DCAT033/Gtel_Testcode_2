namespace Gtel.Client.ViewModels.Common
{
    [Serializable]
    public class PagedAndSortedResultRequestDto : PagedResultRequestDto
    {
        public string? Sorting { get; set; }
    }
}
