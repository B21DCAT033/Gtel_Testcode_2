using System.ComponentModel.DataAnnotations;

namespace Gtel.Client.ViewModels.Common
{
    [Serializable]
    public class PagedResultRequestDto : LimitedResultRequestDto
    {
        [Range(0, int.MaxValue)]
        public virtual int SkipCount { get; set; }
    }
}
