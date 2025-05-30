import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { queryFilter } from '../utils.js';
import { pagedResult } from '../utils/paged-result.js';
import { data } from './member-group.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
const memberGroupQueryFilter = (filterOptions, item) => queryFilter(filterOptions.filter, item.name);
class UmbMemberGroupMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.item = new UmbMockEntityItemManager(this, itemResponseMapper);
        this.detail = new UmbMockEntityDetailManager(this, createDetailMockMapper, detailResponseMapper);
    }
    filter(options) {
        const allItems = this.getAll();
        const filterOptions = {
            skip: options.skip || 0,
            take: options.take || 25,
            filter: options.filter,
        };
        const filteredItems = allItems.filter((item) => memberGroupQueryFilter(filterOptions, item));
        const paginatedResult = pagedResult(filteredItems, filterOptions.skip, filterOptions.take);
        return { items: paginatedResult.items, total: paginatedResult.total };
    }
}
const createDetailMockMapper = (request) => {
    return {
        id: request.id ? request.id : UmbId.new(),
        name: request.name,
    };
};
const detailResponseMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
    };
};
const itemResponseMapper = (item) => {
    return {
        id: item.id,
        name: item.name,
    };
};
export const umbMemberGroupMockDb = new UmbMemberGroupMockDB(data);
