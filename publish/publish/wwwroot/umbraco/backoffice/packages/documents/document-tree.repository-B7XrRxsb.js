import { d as r, m as o, a as u } from "./manifests-ByHRH93l.js";
import { UmbTreeServerDataSourceBase as c, UmbTreeRepositoryBase as d } from "@umbraco-cms/backoffice/tree";
import { DocumentService as n } from "@umbraco-cms/backoffice/external/backend-api";
class T extends c {
  /**
   * Creates an instance of UmbDocumentTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: a,
      getChildrenOf: p,
      getAncestorsOf: i,
      mapper: l
    });
  }
}
const a = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeDocumentRoot({
    dataTypeId: e.dataType?.unique,
    skip: e.skip,
    take: e.take
  })
), p = (e) => e.parent.unique === null ? a(e) : n.getTreeDocumentChildren({
  parentId: e.parent.unique,
  dataTypeId: e.dataType?.unique,
  skip: e.skip,
  take: e.take
}), i = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeDocumentAncestors({
    descendantId: e.treeItem.unique
  })
), l = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? r : o
  },
  entityType: r,
  noAccess: e.noAccess,
  isTrashed: e.isTrashed,
  hasChildren: e.hasChildren,
  isProtected: e.isProtected,
  documentType: {
    unique: e.documentType.id,
    icon: e.documentType.icon,
    collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null
  },
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null,
    segment: null,
    // TODO: add segment to the backend API?
    state: t.state
  })),
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  isFolder: !1,
  createDate: e.createDate
});
class h extends d {
  constructor(t) {
    super(t, T, u);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), s = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: o,
      name: "#treeHeaders_content",
      hasChildren: s,
      isFolder: !0
    } };
  }
}
export {
  h as UmbDocumentTreeRepository,
  h as default
};
//# sourceMappingURL=document-tree.repository-B7XrRxsb.js.map
