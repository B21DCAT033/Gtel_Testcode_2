import { h as i } from "./dropzone.element-DyItP5Bd.js";
import { h as a, i as o, q as c } from "./input-upload-field.element-DpMbvzUB.js";
import { MediaService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTreeServerDataSourceBase as u, UmbTreeRepositoryBase as l } from "@umbraco-cms/backoffice/tree";
class d extends u {
  /**
   * Creates an instance of UmbMediaRecycleBinTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaRecycleBinTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: r,
      getChildrenOf: p,
      getAncestorsOf: T,
      mapper: _
    });
  }
}
const r = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getRecycleBinMediaRoot({ skip: e.skip, take: e.take })
), p = (e) => e.parent.unique === null ? r(e) : n.getRecycleBinMediaChildren({
  parentId: e.parent.unique,
  skip: e.skip,
  take: e.take
}), T = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  n.getTreeMediaAncestors({
    descendantId: e.treeItem.unique
  })
), _ = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? a : o
  },
  entityType: a,
  noAccess: !1,
  isTrashed: !0,
  hasChildren: e.hasChildren,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null,
    segment: null
    // TODO: add segment to the backend API?
  })),
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  isFolder: !1,
  createDate: e.createDate
});
class M extends l {
  constructor(t) {
    super(t, d, c);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), s = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: i,
      name: "#treeHeaders_contentRecycleBin",
      icon: "icon-trash",
      hasChildren: s,
      isContainer: !1,
      isFolder: !0
    } };
  }
}
export {
  M as UmbMediaRecycleBinTreeRepository,
  M as api
};
//# sourceMappingURL=media-recycle-bin-tree.repository-wJ_VQJ-h.js.map
