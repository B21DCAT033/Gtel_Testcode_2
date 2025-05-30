﻿namespace Gtel.Client.ViewModels.Common
{
    public class PagedResultDto<T> : ListResultDto<T>
    {
        public int TotalCount { get; set; }

        public PagedResultDto()
        {

        }

        public PagedResultDto(int totalCount, IReadOnlyList<T> items) : base(items)
        {
            TotalCount = totalCount;
        }
    }
}
