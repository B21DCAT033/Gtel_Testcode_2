using System.ComponentModel.DataAnnotations;

namespace Gtel.Client.ViewModels.Common
{
    public class LimitedResultRequestDto
    {
        [Range(1, int.MaxValue)]
        public virtual int MaxResultCount { get; set; } = 10;
    }
}
