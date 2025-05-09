import { UmbMockEntityTreeManager } from '../utils/entity/entity-tree.manager.js';
import { UmbMockEntityItemManager } from '../utils/entity/entity-item.manager.js';
import { UmbMockEntityDetailManager } from '../utils/entity/entity-detail.manager.js';
import { umbDocumentTypeMockDb } from '../document-type/document-type.db.js';
import { UmbEntityMockDbBase } from '../utils/entity/entity-base.js';
import { data } from './document-blueprint.data.js';
import { DocumentVariantStateModel } from '@umbraco-cms/backoffice/external/backend-api';
import { UmbId } from '@umbraco-cms/backoffice/id';
export class UmbDocumentBlueprintMockDB extends UmbEntityMockDbBase {
    constructor(data) {
        super(data);
        this.tree = new UmbMockEntityTreeManager(this, treeItemMapper);
        this.item = new UmbMockEntityItemManager(this, itemMapper);
        this.detail = new UmbMockEntityDetailManager(this, createMockDocumentBlueprintMapper, detailResponseMapper);
    }
}
const treeItemMapper = (model) => {
    const documentType = umbDocumentTypeMockDb.read(model.documentType.id);
    if (!documentType)
        throw new Error(`Document type with id ${model.documentType.id} not found`);
    return {
        documentType: {
            icon: documentType.icon,
            id: documentType.id,
        },
        hasChildren: model.hasChildren,
        id: model.id,
        isProtected: model.isProtected,
        isTrashed: model.isTrashed,
        noAccess: model.noAccess,
        parent: model.parent,
        variants: model.variants,
        createDate: model.createDate,
    };
};
const createMockDocumentBlueprintMapper = (request) => {
    const documentType = umbDocumentTypeMockDb.read(request.documentType.id);
    if (!documentType)
        throw new Error(`Document type with id ${request.documentType.id} not found`);
    const now = new Date().toString();
    return {
        documentType: {
            id: documentType.id,
            icon: documentType.icon,
            collection: undefined, // TODO: get list from doc type when ready
        },
        hasChildren: false,
        id: request.id ? request.id : UmbId.new(),
        createDate: now,
        isProtected: false,
        isTrashed: false,
        noAccess: false,
        parent: request.parent,
        values: request.values,
        variants: request.variants.map((variantRequest) => {
            return {
                culture: variantRequest.culture,
                segment: variantRequest.segment,
                name: variantRequest.name,
                createDate: now,
                updateDate: now,
                state: DocumentVariantStateModel.DRAFT,
                publishDate: null,
            };
        }),
        urls: [],
    };
};
const detailResponseMapper = (model) => {
    return {
        documentType: model.documentType,
        id: model.id,
        isTrashed: model.isTrashed,
        template: model.template,
        urls: model.urls,
        values: model.values,
        variants: model.variants,
    };
};
const itemMapper = (model) => {
    return {
        documentType: {
            collection: model.documentType.collection,
            icon: model.documentType.icon,
            id: model.documentType.id,
        },
        hasChildren: model.hasChildren,
        id: model.id,
        isProtected: model.isProtected,
        isTrashed: model.isTrashed,
        parent: model.parent,
        variants: model.variants,
    };
};
export const umbDocumentBlueprintMockDb = new UmbDocumentBlueprintMockDB(data);
