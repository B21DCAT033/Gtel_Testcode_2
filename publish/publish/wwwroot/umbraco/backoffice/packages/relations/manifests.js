import { m as i, c as a, U as o } from "./bulk-trash-with-relation.action.kind-KJodVnkL.js";
import { UMB_ENTITY_ACTION_DELETE_KIND_MANIFEST as n } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ENTITY_ACTION_TRASH_KIND_MANIFEST as s } from "@umbraco-cms/backoffice/recycle-bin";
import { m as l, e as m, a as t, U as c } from "./manifests-CSolryi_.js";
import { UMB_COLLECTION_ALIAS_CONDITION as p } from "@umbraco-cms/backoffice/collection";
import { UMB_RELATION_TYPE_COLLECTION_ALIAS as r } from "@umbraco-cms/backoffice/relation-type";
import { UMB_WORKSPACE_CONDITION_ALIAS as R } from "@umbraco-cms/backoffice/workspace";
const T = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Relations",
    name: "Relations Menu Item",
    weight: 800,
    meta: {
      label: "#treeHeaders_relations",
      icon: "icon-trafic",
      entityType: "relations-root",
      menus: ["Umb.Menu.AdvancedSettings"]
    }
  }
], f = [
  {
    type: "modal",
    alias: "Umb.Modal.BulkDeleteWithRelation",
    name: "Bulk Delete With Relation Modal",
    element: () => import("./bulk-delete-with-relation-modal.element-CaVeILeG.js")
  }
], y = [
  i,
  ...f
], _ = [
  {
    type: "modal",
    alias: "Umb.Modal.BulkTrashWithRelation",
    name: "Bulk Trash With Relation Modal",
    element: () => import("./bulk-trash-with-relation-modal.element-C0fmqYN2.js")
  }
], I = [a, ..._], d = [
  {
    type: "repository",
    alias: o,
    name: "Relation Collection Repository",
    api: () => import("./relation-collection.repository-C2TUl7kE.js").then((e) => e.r)
  }
], A = [...d], h = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.DeleteWithRelation",
  matchKind: "deleteWithRelation",
  matchType: "entityAction",
  manifest: {
    ...n.manifest,
    type: "entityAction",
    kind: "deleteWithRelation",
    api: () => import("./delete-with-relation.action-CHTmwXQB.js")
  }
}, O = [
  {
    type: "modal",
    alias: "Umb.Modal.DeleteWithRelation",
    name: "Delete With Relation Modal",
    element: () => import("./delete-with-relation-modal.element-CHcgDb_D.js")
  }
], E = [
  h,
  ...O
], C = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.TrashWithRelation",
  matchKind: "trashWithRelation",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "trashWithRelation",
    api: () => import("./trash-with-relation.action-I5ZBtNVZ.js")
  }
}, L = [
  {
    type: "modal",
    alias: "Umb.Modal.TrashWithRelation",
    name: "Trash With Relation Modal",
    element: () => import("./trash-with-relation-modal.element-BjmdUoO3.js")
  }
], $ = [C, ...L], N = [
  ...y,
  ...I,
  ...A,
  ...E,
  ...$
], U = [...l], M = [...m], b = [
  {
    type: "repository",
    alias: t,
    name: "Relation Type Collection Repository",
    api: () => import("./relation-type-collection.repository-BoynEkFv.js")
  }
], W = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.RelationType.Table",
    name: "Relation Type Table Collection View",
    js: () => import("./relation-type-table-collection-view.element-CHF2kPCW.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: p,
        match: "Umb.Collection.RelationType"
      }
    ]
  }
], k = [
  {
    type: "collection",
    kind: "default",
    alias: c,
    name: "Relation Type Collection",
    element: () => import("./relation-type-collection.element-Dun8iPQa.js"),
    meta: {
      repositoryAlias: t
    }
  },
  ...b,
  ...W
], S = [
  ...U,
  ...M,
  ...k
], B = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.RelationsRoot",
    name: "Relations Root Workspace",
    meta: {
      entityType: "relations-root",
      headline: "Relations"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.Workspace.RelationsRoot.Collection",
    name: "Relations Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: r
    },
    conditions: [
      {
        alias: R,
        match: "Umb.Workspace.RelationsRoot"
      }
    ]
  }
], g = [
  ...T,
  ...N,
  ...S,
  ...B
];
export {
  g as manifests
};
//# sourceMappingURL=manifests.js.map
