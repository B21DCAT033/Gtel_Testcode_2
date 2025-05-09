using Gtel.Client.ViewModels.Common;

namespace Gtel.Client.ViewModels.ApplicationInformations
{
    public class GetAllApplicationInformationsInput : PagedAndSortedResultRequestDto
    {
        public string? Filter { get; set; }
    }
}
