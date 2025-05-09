using Gtel.Client.ViewModels.Common;

namespace Gtel.Client.ViewModels.NewsComments
{
    public class GetAllNewsCommentsInput : PagedAndSortedResultRequestDto
    {
        public string? Filter { get; set; }
    }
}
