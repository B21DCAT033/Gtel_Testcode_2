import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { umbMemberTypeMockDb } from '../member-type/member-type.db.js';
import { UmbMockContentCollectionManager } from '../utils/content/content-collection.manager.js';
import { data } from './member.data.js';
import { UmbId } from '@umbraco-cms/backoffice/id';
import { MemberKindModel, } from '@umbraco-cms/backoffice/external/backend-api';
class UmbMemberMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.item = new UmbMockEntityItemManager(this, itemResponseMapper);
        this.detail = new UmbMockEntityDetailManager(this, createDetailMockMapper, detailResponseMapper);
        this.collection = new UmbMockContentCollectionManager(this, collectionItemResponseMapper);
    }
}
const createDetailMockMapper = (request) => {
    const memberType = umbMemberTypeMockDb.read(request.memberType.id);
    if (!memberType)
        throw new Error(`Member type with id ${request.memberType.id} not found`);
    const now = new Date().toString();
    return {
        email: request.email,
        failedPasswordAttempts: 0,
        groups: request.groups ? request.groups : [],
        id: request.id ? request.id : UmbId.new(),
        isApproved: request.isApproved,
        isLockedOut: false,
        isTwoFactorEnabled: false,
        lastLockoutDate: null,
        lastLoginDate: null,
        lastPasswordChangeDate: null,
        kind: MemberKindModel.DEFAULT,
        memberType: {
            id: memberType.id,
            icon: memberType.icon,
        },
        username: request.username,
        values: request.values,
        variants: request.variants.map((variantRequest) => {
            return {
                culture: variantRequest.culture,
                segment: variantRequest.segment,
                name: variantRequest.name,
                createDate: now,
                updateDate: now,
            };
        }),
    };
};
const detailResponseMapper = (item) => {
    return {
        email: item.email,
        failedPasswordAttempts: item.failedPasswordAttempts,
        groups: item.groups,
        id: item.id,
        isApproved: item.isApproved,
        isLockedOut: item.isLockedOut,
        isTwoFactorEnabled: item.isTwoFactorEnabled,
        kind: item.kind,
        lastLockoutDate: item.lastLockoutDate,
        lastLoginDate: item.lastLoginDate,
        lastPasswordChangeDate: item.lastPasswordChangeDate,
        memberType: item.memberType,
        username: item.username,
        values: item.values,
        variants: item.variants,
    };
};
const itemResponseMapper = (item) => {
    return {
        id: item.id,
        kind: item.kind,
        memberType: item.memberType,
        variants: item.variants,
    };
};
const collectionItemResponseMapper = (item) => {
    return {
        id: item.id,
        email: item.email,
        variants: item.variants,
    };
};
export const umbMemberMockDb = new UmbMemberMockDB(data);
