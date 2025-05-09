import { j as m, i as E, g as a, h as e, B as o, e as y, z as r, x as n, f as s, m as T, U as c, s as A, t as f, v as I, E as p, C as R, k, I as l, J as D, y as U, K as i } from "./constants-D-HH3gx6.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import { UMB_WORKSPACE_CONDITION_ALIAS as t, UmbSubmitWorkspaceAction as _ } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/id";
import { UMB_COLLECTION_ALIAS_CONDITION as d } from "@umbraco-cms/backoffice/collection";
const O = [
  {
    type: "repository",
    alias: m,
    name: "Data Type Collection Repository",
    api: () => import("./data-type-collection.repository-DBtNEZNs.js")
  }
], b = [
  {
    type: "collection",
    kind: "default",
    alias: E,
    name: "Data Type Collection",
    meta: {
      repositoryAlias: m
    }
  },
  ...O
], C = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DataType.Root",
    name: "Data Type Root Workspace",
    meta: {
      entityType: a,
      headline: "#treeHeaders_dataTypes"
    }
  }
], S = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DataType.Default",
    name: "Default Data Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-data-type-create-option-action-Xd5XjklA.js"),
    forEntityTypes: [a, e],
    meta: {
      icon: "icon-autofill",
      label: "#create_newDataType",
      description: "#create_newDataTypeDescription"
    }
  }
], P = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.DataType.Folder",
    name: "Data Type Folder Entity Create Option Action",
    forEntityTypes: [a, e],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: o
    }
  }
], u = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.DataType.Create",
    name: "Create Data Type Entity Action",
    weight: 1200,
    forEntityTypes: [a, e]
  },
  // TODO: Deprecated: Will be removed in 17.0.0
  {
    type: "modal",
    alias: "Umb.Modal.DataTypeCreateOptions",
    name: "Data Type Create Options Modal",
    element: () => import("./data-type-create-options-modal.element-djthMkyF.js")
  },
  ...S,
  ...P
], M = [
  {
    type: "repository",
    alias: y,
    name: "Move Data Type Repository",
    api: () => import("./data-type-move.repository-BnrvJqf1.js")
  }
], L = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DataType.MoveTo",
    name: "Move Data Type Entity Action",
    forEntityTypes: [s],
    meta: {
      treeRepositoryAlias: n,
      moveRepositoryAlias: y,
      treeAlias: r,
      foldersOnly: !0
    }
  },
  ...M
], h = [
  {
    type: "repository",
    alias: T,
    name: "Duplicate Data Type Repository",
    api: () => import("./data-type-duplicate.repository-3siU-n8D.js")
  }
], w = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DataType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [s],
    meta: {
      duplicateRepositoryAlias: T,
      treeAlias: r,
      treeRepositoryAlias: n,
      foldersOnly: !0
    }
  },
  ...h
], Y = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DataType.Delete",
    name: "Delete Data Type Entity Action",
    forEntityTypes: [s],
    meta: {
      detailRepositoryAlias: A,
      itemRepositoryAlias: c
    }
  },
  ...u,
  ...L,
  ...w
], B = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DataTypes",
    name: "Data Types Menu Item",
    weight: 600,
    meta: {
      label: "Data Types",
      entityType: "data-type",
      treeAlias: "Umb.Tree.DataType",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Data Type Menu Structure Workspace Context",
    alias: "Umb.Context.DataType.Menu.Structure",
    api: () => import("./data-type-menu-structure.context-CB4d3LsF.js"),
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DataType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.DataType.Breadcrumb",
    name: "Data Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DataType"
      }
    ]
  }
], $ = [
  {
    type: "modal",
    alias: "Umb.Modal.DataTypePickerFlow",
    name: "Data Type Picker Flow Modal",
    element: () => import("./data-type-picker-flow-modal.element-7iuPzRzO.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.DataTypePickerFlowDataTypePicker",
    name: "Data Type Picker Flow UI Picker Modal",
    element: () => import("./data-type-picker-flow-data-type-picker-modal.element-DUVGt28w.js")
  }
], W = [
  {
    type: "repository",
    alias: A,
    name: "Data Type Detail Repository",
    api: () => import("./data-type-detail.repository-CkmK-I2A.js")
  },
  {
    type: "store",
    alias: f,
    name: "Data Type Detail Store",
    api: () => import("./data-type-detail.store-Be_YKZmU.js")
  }
], F = [
  {
    type: "repository",
    alias: c,
    name: "Data Type Item Repository",
    api: () => import("./data-type-item.repository-C4QzZtT3.js")
  },
  {
    type: "itemStore",
    alias: I,
    name: "Data Type Item Store",
    api: () => import("./data-type-item.store-DCBKYIgk.js")
  }
], v = [...W, ...F], N = [
  {
    name: "Data Type Search Provider",
    alias: "Umb.SearchProvider.DataType",
    type: "searchProvider",
    api: () => import("./data-type.search-provider-BrBPEZCl.js"),
    weight: 400,
    meta: {
      label: "Data Types"
    }
  },
  {
    name: "Data Type Search Result Item ",
    alias: "Umb.SearchResultItem.DataType",
    type: "searchResultItem",
    forEntityTypes: [s]
  }
], V = [
  {
    type: "workspace",
    kind: "routable",
    alias: p,
    name: "Data Type Folder Workspace",
    api: () => import("./data-type-folder-workspace.context-CtWQFCIx.js"),
    meta: {
      entityType: e
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DataType.Folder.Submit",
    name: "Submit Media Type Folder Workspace Action",
    api: _,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: p
      }
    ]
  }
], g = [
  {
    type: "repository",
    alias: o,
    name: "Data Type Folder Repository",
    api: () => import("./data-type-folder.repository-BFy19U6C.js")
  },
  {
    type: "store",
    alias: R,
    name: "Data Type Folder Store",
    api: () => import("./data-type-folder.store-jXk7VRPK.js")
  }
], x = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DataType.Folder.Rename",
    name: "Rename Data Type Folder Entity Action",
    forEntityTypes: [e],
    meta: {
      folderRepositoryAlias: o
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DataType.Folder.Delete",
    name: "Delete Data Type Folder Entity Action",
    forEntityTypes: [e],
    meta: {
      folderRepositoryAlias: o
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.DataType.TreeItemChildrenCollection",
    name: "Data Type Tree Item Children Collection Workspace View",
    meta: {
      label: "Folder",
      pathname: "folder",
      icon: "icon-folder",
      collectionAlias: "Umb.Collection.DataType.TreeItemChildren"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [k, p]
      }
    ]
  },
  ...g,
  ...V
], K = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DataType.TreeItem.Table",
    name: "Data Type Tree Item Table Collection View",
    element: () => import("./data-type-tree-item-table-collection-view.element-DhtjbT3a.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: d,
        match: l
      }
    ]
  }
], H = [
  {
    type: "repository",
    alias: D,
    name: "Data Type Tree Item Children Collection Repository",
    api: () => import("./data-type-tree-item-children-collection.repository-BQqZlRlt.js")
  }
], j = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Data Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DataTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: d,
        match: l
      }
    ]
  }
], q = [
  {
    type: "collection",
    kind: "default",
    alias: l,
    name: "Data Type Tree Item Children Collection",
    meta: {
      repositoryAlias: D
    }
  },
  ...j,
  ...K,
  ...H
], z = [
  ...q,
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DataType.Tree.ReloadChildrenOf",
    name: "Reload Data Type Tree Item Children Entity Action",
    forEntityTypes: [a, e]
  }
], J = [
  {
    type: "repository",
    alias: n,
    name: "Data Type Tree Repository",
    api: () => import("./data-type-tree.repository-DuAmNW2m.js")
  },
  {
    type: "treeStore",
    alias: U,
    name: "Data Type Tree Store",
    api: () => import("./data-type-tree.store-CQqmNWpK.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: r,
    name: "Data Types Tree",
    meta: {
      repositoryAlias: n
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DataType",
    name: "Data Type Tree Item",
    forEntityTypes: ["data-type-root", "data-type", "data-type-folder"]
  },
  ...x,
  ...z
], G = [
  {
    type: "workspace",
    kind: "routable",
    alias: i,
    name: "Data Type Workspace",
    api: () => import("./data-type-workspace.context-Bc95mSxg.js"),
    meta: {
      entityType: "data-type"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DataType.Edit",
    name: "Data Type Workspace Edit View",
    element: () => import("./data-type-details-workspace-view.element-DESe3-rB.js"),
    weight: 90,
    meta: {
      label: "#general_details",
      pathname: "details",
      icon: "edit"
    },
    conditions: [
      {
        alias: t,
        match: i
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DataType.Info",
    name: "Data Type Workspace Info View",
    element: () => import("./workspace-view-data-type-info.element-BQb23YGE.js"),
    weight: 90,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: t,
        match: i
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DataType.Save",
    name: "Save Data Type Workspace Action",
    api: _,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: i
      }
    ]
  }
], ne = [
  ...b,
  ...C,
  ...Y,
  ...B,
  ...$,
  ...v,
  ...N,
  ...J,
  ...G
];
export {
  ne as manifests
};
//# sourceMappingURL=manifests.js.map
