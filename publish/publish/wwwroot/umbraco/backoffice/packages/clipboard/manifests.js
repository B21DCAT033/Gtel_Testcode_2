import { k as a, e as t, l as n, U as i, f as s, a as e, b as r, h as l, j as m, d as c, c as o } from "./entity-B4DsEs7O.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/current-user";
import "@umbraco-cms/backoffice/repository";
import { UMB_COLLECTION_ALIAS_CONDITION as _ } from "@umbraco-cms/backoffice/collection";
import { UMB_PROPERTY_ACTION_DEFAULT_KIND_MANIFEST as p } from "@umbraco-cms/backoffice/property-action";
import { UMB_WORKSPACE_CONDITION_ALIAS as C } from "@umbraco-cms/backoffice/workspace";
const d = [
  {
    type: "repository",
    alias: a,
    name: "Clipboard Collection Repository",
    api: () => import("./clipboard-collection.repository-Dll4uWAf.js")
  }
], y = [
  {
    type: "collectionView",
    alias: n,
    name: "Clipboard Table Collection View",
    js: () => import("./clipboard-table-collection-view.element-DGUcRRex.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: _,
        match: t
      }
    ]
  }
], A = [
  {
    type: "collection",
    kind: "default",
    alias: t,
    name: "Clipboard Collection",
    meta: {
      repositoryAlias: a
    }
  },
  ...d,
  ...y
], I = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.Clipboard",
    name: "Clipboard Context",
    api: () => import("./clipboard.context-DPuzpKeP.js")
  }
], b = [
  {
    type: "repository",
    alias: i,
    name: "Clipboard Detail Repository",
    api: () => import("./clipboard-entry-detail.repository-1VkIBpID.js")
  },
  {
    type: "store",
    alias: s,
    name: "Clipboard Detail Store",
    api: () => import("./clipboard-entry-detail.store-BNHxhH_u.js")
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.ClipboardEntry.Delete",
    name: "Delete Clipboard Entry Entity Action",
    forEntityTypes: [r],
    meta: {
      itemRepositoryAlias: e,
      detailRepositoryAlias: i,
      confirm: {
        headline: "#clipboard_confirmDeleteHeadline",
        message: "#clipboard_confirmDeleteDescription"
      }
    }
  }
], T = [
  {
    type: "repository",
    alias: e,
    name: "Clipboard Entry Item Repository",
    api: () => import("./clipboard-entry-item.repository-BLSut6DQ.js")
  },
  {
    type: "itemStore",
    alias: l,
    name: "Clipboard Entry Item Store",
    api: () => import("./clipboard-entry-item.store-SoeZGmFP.js")
  }
], R = [
  {
    type: "modal",
    alias: m,
    name: "Clipboard Item Picker Modal",
    js: () => import("./clipboard-entry-picker-modal.element-Bq6KxY9S.js")
  }
], O = [...b, ...T, ...R], E = [
  {
    type: "kind",
    alias: "Umb.Kind.PropertyAction.CopyToClipboard",
    matchKind: "copyToClipboard",
    matchType: "propertyAction",
    manifest: {
      ...p.manifest,
      type: "propertyAction",
      kind: "copyToClipboard",
      api: () => import("./copy-to-clipboard.property-action-PSBhU6G9.js"),
      weight: 1200,
      meta: {
        icon: "icon-clipboard-copy",
        label: "Copy"
      }
    }
  }
], L = [
  {
    type: "kind",
    alias: "Umb.Kind.PropertyAction.pasteFromClipboard",
    matchKind: "pasteFromClipboard",
    matchType: "propertyAction",
    manifest: {
      ...p.manifest,
      type: "propertyAction",
      kind: "pasteFromClipboard",
      api: () => import("./paste-from-clipboard.property-action-CBMiCuXN.js"),
      weight: 1190,
      meta: {
        icon: "icon-clipboard-paste",
        label: "Replace"
      }
    }
  }
], f = [...E, ...L], B = [
  {
    type: "kind",
    alias: "Umb.Kind.PropertyContext.Clipboard",
    matchKind: "clipboard",
    matchType: "propertyContext",
    manifest: {
      type: "propertyContext",
      kind: "clipboard",
      api: () => import("./clipboard.property-context-Do3YAi53.js"),
      weight: 1200
    }
  }
], D = [
  ...f,
  ...B
], P = [
  {
    type: "workspace",
    kind: "default",
    alias: o,
    name: "Clipboard Root Workspace",
    meta: {
      entityType: c,
      headline: "Clipboard"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.ClipboardRoot.Collection",
    name: "Clipboard Root Collection Workspace View",
    meta: {
      label: "Entries",
      pathname: "entries",
      icon: "icon-layers",
      collectionAlias: t
    },
    conditions: [
      {
        alias: C,
        match: o
      }
    ]
  }
], $ = [
  ...A,
  ...I,
  ...O,
  ...D,
  ...P
];
export {
  $ as manifests
};
//# sourceMappingURL=manifests.js.map
