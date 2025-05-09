import { UMB_CONTENT_SECTION_ALIAS as E, UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as ue } from "@umbraco-cms/backoffice/content";
import { U as T, b as r, e as W, n as h, l as P, a as d, f as Y, i as v, j as _e, g as Ee, p as B, q as Te, s as w, m as De, u as C } from "./paths-BF32ZUyU.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as Ue } from "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/notification";
import { UMB_WORKSPACE_CONDITION_ALIAS as t, UmbSubmitWorkspaceAction as A, UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS as N } from "@umbraco-cms/backoffice/workspace";
import { F as n, O as V, P as de, c as Ae, K as p, ak as F, d as e, H, m as K, ar as x, S as Oe, ao as L, aw as be, T as G, ap as O, U as $, b as q, as as j, X as z, aq as X, L as l, W as Re, al as J, ax as fe, aj as u, ac as b, E as Z, Y as Q, Z as ee, _ as Ie, ay as Me, w as _, a3 as Se, a2 as Ce, u as g, G as R, a4 as Pe, a5 as Be, an as f, a6 as ke, a7 as he, a8 as y, f as Ne, y as I, N as Le, ab as te, a9 as ie, aa as $e, ad as ge, at as ne, ae as we, af as We, M as Ye, ag as ve, ah as Ve, au as Fe, ai as He, am as Ke, az as xe, aA as Ge } from "./manifests-ByHRH93l.js";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as i, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as oe } from "@umbraco-cms/backoffice/recycle-bin";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/tree";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as ae } from "@umbraco-cms/backoffice/section";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as qe } from "@umbraco-cms/backoffice/relations";
import { q as D, n as m, m as o, l as a, z as se, F as M, U, w as me, x as je, y as ze, o as ce, s as re, C as Xe, D as Je, B as le, A as Ze, G as Qe, r as k, J as S, K as pe, E as et, L as tt, p as c } from "./constants-DpZUosyT.js";
import { UMB_DOCUMENT_ROOT_ENTITY_TYPE as it, UMB_CONTENT_MENU_ALIAS as nt } from "@umbraco-cms/backoffice/document";
const ot = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.RedirectManagement",
    name: "Redirect Management Dashboard",
    element: () => import("./dashboard-redirect-management.element-BEVsuypv.js"),
    weight: 10,
    meta: {
      label: "#dashboardTabs_contentRedirectManager",
      pathname: "redirect-management"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: E
      }
    ]
  }
], at = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentBlueprint.Create",
    name: "Document Blueprint Options Create Entity Action",
    weight: 1200,
    api: () => import("./create.action-Dr3R8PQT.js"),
    forEntityTypes: [T, r],
    meta: {
      icon: "icon-add",
      label: "#actions_createblueprint",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.DocumentBlueprintOptionsCreate",
    name: "Document Blueprint Options Create Modal",
    element: () => import("./document-blueprint-options-create-modal.element-DWNaBKgj.js")
  }
], st = {
  type: "repository",
  alias: W,
  name: "Move Document Blueprint Repository",
  api: () => import("./document-blueprint-move.repository-r1fzTWj8.js")
}, mt = [st], ct = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentBlueprint.MoveTo",
    name: "Move Document Blueprint Entity Action",
    forEntityTypes: [d],
    meta: {
      treeRepositoryAlias: P,
      moveRepositoryAlias: W,
      treeAlias: h,
      foldersOnly: !0
    }
  },
  ...mt
], rt = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentBlueprintItem.Delete",
    name: "Delete Document Blueprint Item Entity Action",
    forEntityTypes: [d],
    meta: {
      detailRepositoryAlias: v,
      itemRepositoryAlias: Y
    }
  },
  ...at,
  ...ct
], lt = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentBlueprints",
    name: "Document Blueprints Menu Item",
    weight: 100,
    meta: {
      treeAlias: h,
      label: "#treeHeaders_contentBlueprints",
      menus: ["Umb.Menu.StructureSettings"]
    }
  }
], pt = [
  {
    type: "repository",
    alias: v,
    name: "Document Blueprint Detail Repository",
    api: () => import("./document-blueprint-detail.repository-BoSztbN6.js")
  },
  {
    type: "store",
    alias: _e,
    name: "Document Blueprint Detail Store",
    api: () => import("./document-blueprint-detail.store-Ctc14hsK.js")
  }
], yt = [
  {
    type: "repository",
    alias: Y,
    name: "Document Blueprint Item Repository",
    api: () => import("./document-blueprint-item.repository-BIRG_YSq.js")
  },
  {
    type: "itemStore",
    alias: Ee,
    name: "Document Blueprint Item Store",
    api: () => import("./document-blueprint-item.store-D44gA2EQ.js")
  }
], ut = [...pt, ...yt], _t = [
  {
    type: "repository",
    alias: B,
    name: "Document Blueprint Folder Repository",
    api: () => import("./document-blueprint-folder.repository-o99ERsrb.js")
  },
  {
    type: "store",
    alias: Te,
    name: "Document Blueprint Folder Store",
    api: () => import("./document-blueprint-folder.store-B5NoWDzi.js")
  }
], Et = [
  {
    type: "workspace",
    kind: "routable",
    alias: w,
    name: "Document Blueprint Folder Workspace",
    api: () => import("./document-blueprint-folder-workspace.context-V97CfanW.js"),
    meta: {
      entityType: r
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Folder.Submit",
    name: "Submit Document Blueprint Folder Workspace Action",
    api: A,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: w
      }
    ]
  }
], Tt = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Rename",
    name: "Rename Document Blueprint Folder Entity Action",
    forEntityTypes: [r],
    meta: {
      folderRepositoryAlias: B
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentBlueprint.Folder.Delete",
    name: "Delete Document Blueprint Folder Entity Action",
    forEntityTypes: [r],
    meta: {
      folderRepositoryAlias: B
    }
  },
  ..._t,
  ...Et
], Dt = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentBlueprint.Tree.ReloadChildrenOf",
    name: "Reload Document Blueprint Tree Item Children Entity Action",
    forEntityTypes: [T, r],
    meta: {}
  }
], Ut = [
  {
    type: "repository",
    alias: P,
    name: "Document Blueprint Tree Repository",
    api: () => import("./document-blueprint-tree.repository-IrGsVIox.js")
  },
  {
    type: "treeStore",
    alias: De,
    name: "Document Blueprint Tree Store",
    api: () => import("./document-blueprint-tree.store-6h2voZ4z.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: h,
    name: "Document Blueprints Tree",
    meta: {
      repositoryAlias: P
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentBlueprint",
    name: "Document Blueprint Tree Item",
    forEntityTypes: [
      T,
      d,
      r
    ]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DocumentBlueprint.Root",
    name: "Document Blueprint Root Workspace",
    meta: {
      entityType: T,
      headline: "#treeHeaders_contentBlueprints"
    }
  },
  ...Dt,
  ...Tt
], dt = [
  {
    type: "workspace",
    kind: "routable",
    alias: C,
    name: "Document Blueprint Workspace",
    api: () => import("./document-blueprint-workspace.context-GnAnL-lW.js"),
    meta: {
      entityType: d
    }
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.DocumentBlueprint.Edit",
    name: "Document Blueprint Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "document"
    },
    conditions: [
      {
        alias: t,
        match: C
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentBlueprint.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: A,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: C
      }
    ]
  }
], At = [
  ...rt,
  ...lt,
  ...ut,
  ...Ut,
  ...dt
], Ot = [
  {
    type: "workspaceInfoApp",
    name: "Document History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.History",
    element: () => import("./document-history-workspace-info-app.element-C-Wze5J_.js"),
    weight: 80,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], bt = [...Ot], Rt = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Document Collection Action",
    alias: "Umb.CollectionAction.Document.Create",
    element: () => import("./create-document-collection-action.element-OV7CHcsf.js"),
    weight: 100,
    meta: {
      label: "#general_create"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  }
], ft = [
  {
    type: "repository",
    alias: V,
    name: "Document Collection Repository",
    api: () => import("./document-collection.repository-COKnMQHq.js")
  }
], It = [
  {
    type: "collectionView",
    alias: de,
    name: "Document Grid Collection View",
    element: () => import("./document-grid-collection-view.element-BpPpoClv.js"),
    weight: 200,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  },
  {
    type: "collectionView",
    alias: Ae,
    name: "Document Table Collection View",
    element: () => import("./document-table-collection-view.element-C_nOC9CI.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Document"
      }
    ]
  }
], Mt = [
  {
    type: "collection",
    alias: p,
    name: "Document Collection",
    api: () => import("./document-collection.context-WbrgQHFT.js"),
    element: () => import("./document-collection.element-DnGxM0Wz.js"),
    meta: {
      repositoryAlias: V
    }
  },
  ...Rt,
  ...ft,
  ...It
], St = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CreateBlueprint",
    name: "Create Document Blueprint Entity Action",
    weight: 1e3,
    api: () => import("./create-blueprint.action-DwH3Zb66.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-blueprint",
      label: "#actions_createblueprint",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [F]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.CreateBlueprint",
    name: "Create Blueprint Modal",
    element: () => import("./create-blueprint-modal.element-CBJuUJI1.js")
  }
], Ct = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Create",
    name: "Create Document Entity Action",
    weight: 1200,
    api: () => import("./create.action-BL1dwu4G.js"),
    forEntityTypes: [K, e],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [H]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.Document.CreateOptions",
    name: "Document Create Options Modal",
    element: () => import("./document-create-options-modal.element-Cf8J3JoH.js")
  }
], Pt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.CultureAndHostnames",
    name: "Culture And Hostnames Document Entity Action",
    weight: 400,
    api: () => import("./culture-and-hostnames.action-BJr_SRfp.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-home",
      label: "#actions_assigndomain",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [x]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.CultureAndHostnames",
    name: "Culture And Hostnames Modal",
    element: () => import("./culture-and-hostnames-modal.element-BYx6mjLk.js").then((ye) => ye.c)
  }
], Bt = [
  {
    type: "repository",
    alias: Oe,
    name: "Duplicate Document Repository",
    api: () => import("./document-duplicate.repository-BuhffHDq.js")
  }
], kt = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.Document.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [e],
    api: () => import("./duplicate-document.action-BLE7YHX7.js"),
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [L]
      },
      {
        alias: i
      }
    ]
  },
  ...Bt,
  ...be
], ht = [
  {
    type: "repository",
    alias: G,
    name: "Move Document Repository",
    api: () => import("./document-move.repository-DVhnehFO.js")
  }
], Nt = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Document.MoveTo",
    name: "Move Document Entity Action",
    forEntityTypes: [e],
    meta: {
      treeRepositoryAlias: q,
      moveRepositoryAlias: G,
      treeAlias: $
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      },
      {
        alias: i
      }
    ]
  },
  ...ht
], Lt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.PublicAccess",
    name: "Document Public Access Entity Action",
    weight: 200,
    api: () => import("./public-access.action-Cp-Kv8n0.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-lock",
      label: "#actions_protect",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [j]
      },
      {
        alias: i
      },
      {
        alias: ae,
        match: "Umb.Section.Members"
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.PublicAccess",
    name: "Public Access Modal",
    element: () => import("./public-access-modal.element-BEK_-iOD.js")
  }
], $t = [
  {
    type: "repository",
    alias: z,
    name: "Sort Children Of Document Repository",
    api: () => import("./sort-children-of.repository--DUFGghY.js")
  }
], gt = [
  ...$t,
  {
    type: "entityAction",
    kind: "sortChildrenOf",
    alias: "Umb.EntityAction.Document.SortChildrenOf",
    name: "Sort Children Of Document Entity Action",
    forEntityTypes: [K, e],
    meta: {
      itemRepositoryAlias: l,
      sortChildrenOfRepositoryAlias: z,
      treeRepositoryAlias: q,
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [X]
      },
      {
        alias: i
      }
    ]
  }
], wt = [
  {
    type: "repository",
    alias: Re,
    name: "Document Notifications Repository",
    api: () => import("./document-notifications.repository-DuorxlR9.js")
  }
], Wt = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Notifications",
    name: "Notifications",
    weight: 100,
    api: () => import("./document-notifications.action-Dg3KSzja.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-megaphone",
      label: "#actions_notify",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [J]
      },
      {
        alias: i
      }
    ]
  }
], Yt = [...Wt, ...fe, ...wt], vt = [
  {
    type: "entityAction",
    kind: "deleteWithRelation",
    alias: "Umb.EntityAction.Document.Delete",
    name: "Delete Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: l,
      detailRepositoryAlias: Z,
      referenceRepositoryAlias: b
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [u]
      },
      {
        alias: oe
      }
    ]
  }
  /* TODO: Implement Permissions Entity Action
  {
  	type: 'entityAction',
  	kind: 'default',
  	alias: 'Umb.EntityAction.Document.Permissions',
  	name: 'Permissions Document Entity Action',
  	weight: 300,
  	forEntityTypes: [UMB_DOCUMENT_ENTITY_TYPE],
  	api: () => import('./permissions.action.js'),
  	meta: {
  		icon: 'icon-name-badge',
  		label: '#actions_setPermissions',
  	},
  	conditions: [
  		{
  			alias: 'Umb.Condition.UserPermission.Document',
  			allOf: [UMB_USER_PERMISSION_DOCUMENT_PERMISSIONS],
  		},
  		{
  			alias: UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS,
  		},
  	],
  },
  */
], Vt = [
  ...St,
  ...Ct,
  ...Pt,
  ...kt,
  ...Nt,
  ...Lt,
  ...gt,
  ...vt,
  ...Yt
], Ft = [
  {
    type: "repository",
    alias: Q,
    name: "Bulk Duplicate Media Repository",
    api: () => import("./duplicate-to.repository-BVuLjDxm.js")
  }
], Ht = [
  {
    type: "entityBulkAction",
    kind: "duplicateTo",
    alias: "Umb.EntityBulkAction.Document.DuplicateTo",
    name: "Duplicate Document Entity Bulk Action",
    weight: 30,
    forEntityTypes: [e],
    meta: {
      bulkDuplicateRepositoryAlias: Q,
      treeAlias: $
    },
    conditions: [
      {
        alias: s,
        match: p
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [L]
      }
    ]
  },
  ...Ft
], Kt = [
  {
    type: "repository",
    alias: ee,
    name: "Bulk Move Document Repository",
    api: () => import("./move-to.repository-BuRPAgtK.js")
  }
], xt = [
  {
    type: "entityBulkAction",
    kind: "moveTo",
    alias: "Umb.EntityBulkAction.Document.MoveTo",
    name: "Move Document Entity Bulk Action",
    weight: 20,
    forEntityTypes: [e],
    meta: {
      bulkMoveRepositoryAlias: ee,
      treeAlias: $
    },
    conditions: [
      {
        alias: s,
        match: p
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      }
    ]
  },
  ...Kt
], Gt = [...Ht, ...xt], qt = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.DocumentConfiguration",
    name: "Document Configuration Context",
    api: () => import("./document-configuration.context-DKcHlT2T.js")
  }
], jt = [
  {
    type: "repository",
    alias: l,
    name: "Document Item Repository",
    api: () => import("./document-item.repository-DPoT_JcK.js")
  },
  {
    type: "itemStore",
    alias: Ie,
    name: "Document Item Store",
    api: () => import("./document-item.store-BWWZewVn.js")
  }
], zt = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Document",
    name: "Document Entity Item Reference",
    element: () => import("./document-item-ref.element-By7vrol8.js"),
    forEntityTypes: [e]
  },
  ...jt
], Xt = [Me], Jt = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Document",
    name: "Document Picker Search Result Item",
    element: () => import("./document-picker-search-result-item.element-BqIp_dR4.js"),
    forEntityTypes: [e]
  }
], Zt = {
  type: "propertyEditorSchema",
  name: "Content Picker",
  alias: "Umbraco.ContentPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.DocumentPicker",
    settings: {
      properties: [
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore user start nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, Qt = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.DocumentPicker",
    name: "Document Picker Property Editor UI",
    element: () => import("./property-editor-ui-document-picker.element-O0up0EXd.js"),
    meta: {
      label: "Document Picker",
      propertyEditorSchemaAlias: "Umbraco.ContentPicker",
      icon: "icon-document",
      group: "pickers",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "startNodeId",
            label: "Start node",
            description: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.DocumentPicker",
            config: [
              {
                alias: "validationLimit",
                value: { min: 0, max: 1 }
              }
            ]
          },
          {
            alias: "showOpenButton",
            label: "Show open button",
            description: "Opens the node in a dialog",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          }
        ]
      }
    }
  },
  Zt
], ei = [...Qt], ti = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Publish",
    name: "Publish Document Entity Action",
    weight: 600,
    api: () => import("./publish.action-CwOG_BWl.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_publish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      },
      {
        alias: i
      }
    ]
  }
], ii = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Publish",
    name: "Publish Document Entity Bulk Action",
    weight: 50,
    api: () => import("./publish.bulk-action-Cq72SkHk.js"),
    meta: {
      icon: "icon-globe",
      label: "#actions_publish"
    },
    forEntityTypes: [e],
    conditions: [
      {
        alias: s,
        match: p
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [_]
      }
    ]
  }
], ni = [
  {
    type: "modal",
    alias: Se,
    name: "Document Publish Modal",
    element: () => import("./document-publish-modal.element-CZo_df7q.js")
  }
], oi = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPublish",
    name: "Save And Publish Document Workspace Action",
    weight: 70,
    api: () => import("./save-and-publish.action-B_BbMR48.js"),
    meta: {
      label: "#buttons_saveAndPublish",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  }
], ai = [
  ...ti,
  ...ii,
  ...ni,
  ...oi
], si = [
  {
    type: "modal",
    alias: Ce,
    name: "Document Publish With Descendants Modal",
    element: () => import("./document-publish-with-descendants-modal.element-BQeEBqTj.js")
  }
], mi = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.PublishWithDescendants",
    name: "Publish with descendants",
    weight: 10,
    api: () => import("./publish-with-descendants.action-C3wDmuK2.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_publishDescendants",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: R,
        allOf: [g, _]
      },
      {
        alias: i
      },
      {
        alias: N,
        match: !1
      }
    ]
  }
], ci = [...si, ...mi], ri = [
  {
    type: "repository",
    alias: Pe,
    name: "Document Publishing Repository",
    api: () => import("./document-publishing.repository-5llJWdOm.js")
  }
], li = [
  {
    type: "modal",
    alias: Be,
    name: "Document Schedule Modal",
    element: () => import("./document-schedule-modal.element-DlA8b8Bv.js")
  }
], pi = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.SchedulePublishing",
    name: "Schedule publishing",
    weight: 20,
    api: () => import("./save-and-schedule.action-D3kYCOWz.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#buttons_schedulePublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: R,
        allOf: [g, _]
      },
      {
        alias: i
      },
      {
        alias: N,
        match: !1
      }
    ]
  }
], yi = [...li, ...pi], ui = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Unpublish",
    name: "Unpublish Document Entity Action",
    weight: 500,
    api: () => import("./unpublish.action-CxVyMGWI.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-globe",
      label: "#actions_unpublish",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [f]
      },
      {
        alias: i
      }
    ]
  }
], _i = [
  {
    type: "entityBulkAction",
    kind: "default",
    alias: "Umb.EntityBulkAction.Document.Unpublish",
    name: "Unpublish Document Entity Bulk Action",
    weight: 40,
    api: () => import("./unpublish.bulk-action-DfmMY9me.js"),
    meta: {
      icon: "icon-globe",
      label: "#actions_unpublish"
    },
    forEntityTypes: [e],
    conditions: [
      {
        alias: s,
        match: p
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [f]
      }
    ]
  }
], Ei = [
  {
    type: "modal",
    alias: ke,
    name: "Document Unpublish Modal",
    element: () => import("./document-unpublish-modal.element-DqmULf3j.js")
  }
], Ti = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "Umb.Document.WorkspaceActionMenuItem.Unpublish",
    name: "Unpublish",
    weight: 0,
    api: () => import("./unpublish.action-BtO5YlKw.js"),
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    meta: {
      label: "#actions_unpublish",
      icon: "icon-globe"
    },
    conditions: [
      {
        alias: R,
        allOf: [f]
      },
      {
        alias: i
      },
      {
        alias: N,
        match: !1
      }
    ]
  }
], Di = [
  ...ui,
  ..._i,
  ...Ei,
  ...Ti
], Ui = [
  {
    type: "workspaceContext",
    name: "Document Publishing Workspace Context",
    alias: "Umb.WorkspaceContext.Document.Publishing",
    api: () => import("./document-publishing.workspace-context-D0J9Af6l.js"),
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], di = [
  ...ai,
  ...ci,
  ...ri,
  ...yi,
  ...Di,
  ...Ui
], Ai = [
  {
    type: "repository",
    alias: he,
    name: "Bulk Trash Document Repository",
    api: () => import("./trash.repository-2Xp-uM-G.js")
  }
], Oi = [
  {
    type: "entityBulkAction",
    kind: qe,
    alias: "Umb.EntityBulkAction.Document.Trash",
    name: "Trash Document Entity Bulk Action",
    weight: 10,
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: l,
      recycleBinRepositoryAlias: y,
      referenceRepositoryAlias: b
    },
    conditions: [
      {
        alias: s,
        match: p
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [u]
      }
    ]
  },
  ...Ai
], bi = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Document.RecycleBin.Trash",
    name: "Trash Document Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: l,
      recycleBinRepositoryAlias: y,
      referenceRepositoryAlias: b
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [u]
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    alias: "Umb.EntityAction.Document.RecycleBin.Restore",
    name: "Restore Document From Recycle Bin Entity Action",
    forEntityTypes: [e],
    meta: {
      itemRepositoryAlias: l,
      recycleBinRepositoryAlias: y,
      pickerModal: Ne
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [O]
      },
      {
        alias: oe
      }
    ]
  },
  {
    type: "entityAction",
    kind: "emptyRecycleBin",
    alias: "Umb.EntityAction.Document.RecycleBin.Empty",
    name: "Empty Document Recycle Bin Entity Action",
    forEntityTypes: [I],
    meta: {
      recycleBinRepositoryAlias: y
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [u]
      }
    ]
  },
  ...Oi
], Ri = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Document.RecycleBin",
    name: "Document Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: te,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [Le]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin"
      }
    ]
  }
], fi = [
  {
    type: "repository",
    alias: y,
    name: "Document Recycle Bin Repository",
    api: () => import("./document-recycle-bin.repository-yWZ0VJ-Q.js")
  }
], Ii = [
  {
    type: "repository",
    alias: ie,
    name: "Document Recycle Bin Tree Repository",
    api: () => import("./document-recycle-bin-tree.repository-B7RWbMvr.js")
  },
  {
    type: "treeStore",
    alias: $e,
    name: "Document Recycle Bin Tree Store",
    api: () => import("./document-recycle-bin-tree.store-pkStmCHg.js")
  }
], Mi = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.DocumentRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Document Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [I]
  }
], Si = [
  {
    type: "treeItem",
    kind: "recycleBin",
    alias: "Umb.TreeItem.Document.RecycleBin",
    name: "Document Recycle Bin Tree Item",
    forEntityTypes: [I],
    meta: {
      supportedEntityTypes: [e]
    }
  }
], Ci = [
  {
    type: "tree",
    kind: "default",
    alias: te,
    name: "Document Recycle Bin Tree",
    meta: {
      repositoryAlias: ie
    }
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Document.RecycleBin.Root",
    name: "Document Recycle Bin Root Workspace",
    meta: {
      entityType: I,
      headline: "#general_recycleBin"
    }
  },
  ...Ii,
  ...Mi,
  ...Si
], Pi = [
  {
    type: "condition",
    name: "Allow Document Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowDocumentRecycleBin",
    api: () => import("./allow-document-recycle-bin.condition-Co2OIAq4.js")
  },
  ...bi,
  ...Ri,
  ...fi,
  ...Ci
], Bi = [
  {
    type: "repository",
    alias: Z,
    name: "Document Detail Repository",
    api: () => import("./document-detail.repository-Dpi406xc.js")
  },
  {
    type: "store",
    alias: ge,
    name: "Document Detail Store",
    api: () => import("./document-detail.store-BJg2eCKD.js")
  }
], ki = [...Bi], hi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Document.Rollback",
    name: "Rollback Document Entity Action",
    weight: 450,
    api: () => import("./rollback.action-DZrCDJCB.js"),
    forEntityTypes: [e],
    meta: {
      icon: "icon-history",
      label: "#actions_rollback"
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [ne]
      },
      {
        alias: i
      }
    ]
  }
], Ni = [
  {
    type: "modal",
    alias: we,
    name: "Document Rollback Modal",
    element: () => import("./rollback-modal.element-CiBXGHc9.js")
  }
], Li = [
  {
    type: "repository",
    alias: We,
    name: "Rollback Repository",
    api: () => import("./rollback.repository-ClykyB0k.js")
  }
], $i = [
  ...hi,
  ...Ni,
  ...Li
], gi = [
  {
    name: "Document Search Provider",
    alias: Ye,
    type: "searchProvider",
    api: () => import("./document.search-provider-C4qA_yWN.js"),
    weight: 800,
    meta: {
      label: "Documents"
    }
  },
  {
    name: "Document Search Result Item ",
    alias: "Umb.SearchResultItem.Document",
    type: "searchResultItem",
    element: () => import("./document-search-result-item.element-BYVoVkWK.js"),
    forEntityTypes: [e]
  }
], wi = [
  {
    type: "workspaceInfoApp",
    name: "Document References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.References",
    element: () => import("./document-references-workspace-view-info.element-BZAylbe0.js"),
    weight: 90,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], Wi = [
  {
    type: "repository",
    alias: b,
    name: "Document Reference Repository",
    api: () => import("./document-reference.repository-DvNcYEUQ.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.DocumentReferenceResponse",
    name: "Document Reference Response Management Api Data Mapping",
    api: () => import("./document-reference-response.management-api.mapping-DLpS7gdt.js"),
    forDataSource: Ue,
    forDataModel: "DocumentReferenceResponseModel"
  }
], Yi = [...wi, ...Wi], vi = [
  {
    type: "workspaceInfoApp",
    name: "Document Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Document.Links",
    element: () => import("./document-links-workspace-info-app.element-D1uLyDtw.js"),
    weight: 100,
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], Vi = {
  type: "repository",
  alias: ve,
  name: "Document Url Repository",
  api: () => import("./document-url.repository-BASoG_cP.js")
}, Fi = {
  type: "itemStore",
  alias: Ve,
  name: "Document Url Store",
  api: () => import("./document-url.store-Cuexr8va.js")
}, Hi = [Vi, Fi], Ki = [...Hi, ...vi], xi = [
  {
    type: "repository",
    alias: Fe,
    name: "Document Permission Repository",
    api: () => import("./document-permission.repository-CaW-5yFk.js")
  }
], Gi = [
  {
    type: "condition",
    name: "Document User Permission Condition",
    alias: R,
    api: () => import("./document-user-permission.condition-DaCL5Ih_.js")
  }
], qi = [
  {
    type: "entityUserPermission",
    alias: He,
    name: "Read Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Read"],
      label: "#actions_browse",
      description: "#actionDescriptions_browse"
    }
  },
  {
    type: "entityUserPermission",
    alias: F,
    name: "Create Document Blueprint User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.CreateBlueprint"],
      label: "#actions_createblueprint",
      description: "#actionDescriptions_createblueprint"
    }
  },
  {
    type: "entityUserPermission",
    alias: u,
    name: "Delete Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Delete"],
      label: "#actions_delete",
      description: "#actionDescriptions_delete"
    }
  },
  {
    type: "entityUserPermission",
    alias: H,
    name: "Create Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Create"],
      label: "#actions_create",
      description: "#actionDescriptions_create"
    }
  },
  {
    type: "entityUserPermission",
    alias: J,
    name: "Document Notifications User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Notifications"],
      label: "#actions_notify",
      description: "#actionDescriptions_notify"
    }
  },
  {
    type: "entityUserPermission",
    alias: _,
    name: "Publish Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Publish"],
      label: "#actions_publish",
      description: "#actionDescriptions_publish"
    }
  },
  {
    type: "entityUserPermission",
    alias: Ke,
    name: "Document Permissions User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Permissions"],
      label: "#actions_setPermissions",
      description: "#actionDescriptions_rights"
    }
  },
  {
    type: "entityUserPermission",
    alias: f,
    name: "Unpublish Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Unpublish"],
      label: "#actions_unpublish",
      description: "#actionDescriptions_unpublish"
    }
  },
  {
    type: "entityUserPermission",
    alias: g,
    name: "Update Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Update"],
      label: "#actions_update",
      description: "#actionDescriptions_update"
    }
  },
  {
    type: "entityUserPermission",
    alias: L,
    name: "Duplicate Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Duplicate"],
      label: "#actions_copy",
      description: "#actionDescriptions_copy",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: O,
    name: "Move Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Move"],
      label: "#actions_move",
      description: "#actionDescriptions_move",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: X,
    name: "Sort Document User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Sort"],
      label: "#actions_sort",
      description: "#actionDescriptions_sort",
      group: "structure"
    }
  },
  {
    type: "entityUserPermission",
    alias: x,
    name: "Document Culture And Hostnames User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.CultureAndHostnames"],
      label: "#actions_assigndomain",
      description: "#actionDescriptions_assignDomain",
      group: "administration"
    }
  },
  {
    type: "entityUserPermission",
    alias: j,
    name: "Document Public Access User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.PublicAccess"],
      label: "#actions_protect",
      description: "#actionDescriptions_protect",
      group: "administration"
    }
  },
  {
    type: "entityUserPermission",
    alias: ne,
    name: "Document Rollback User Permission",
    forEntityTypes: [e],
    meta: {
      verbs: ["Umb.Document.Rollback"],
      label: "#actions_rollback",
      description: "#actionDescriptions_rollback",
      group: "administration"
    }
  }
], ji = [
  {
    type: "userGranularPermission",
    alias: "Umb.UserGranularPermission.Document",
    name: "Document Granular User Permission",
    element: () => import("./input-document-granular-user-permission.element-pMsuZ6uL.js"),
    meta: {
      schemaType: "DocumentPermissionPresentationModel",
      label: "#user_granularRightsLabel",
      description: "{#user_granularRightsDescription}"
    }
  }
], zi = [
  ...xi,
  ...qi,
  ...ji,
  ...Gi
], Xi = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.Save",
    name: "Save Document Workspace Action",
    weight: 80,
    api: () => import("./save.action-BCfvOMy6.js"),
    meta: {
      label: "#buttons_save",
      look: "secondary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Document.SaveAndPreview",
    name: "Save And Preview Document Workspace Action",
    weight: 90,
    api: () => import("./save-and-preview.action-9AEInSnP.js"),
    meta: {
      label: "#buttons_saveAndPreview"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: i
      }
    ]
  }
], Ji = [
  {
    type: "workspace",
    kind: "routable",
    alias: n,
    name: "Document Workspace",
    api: () => import("./document-workspace.context-Bh3K8ojX.js"),
    meta: {
      entityType: e
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Document.Collection",
    name: "Document Workspace Collection View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: "Umb.Condition.WorkspaceHasCollection"
      }
    ]
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Document.Edit",
    name: "Document Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "document"
    },
    conditions: [
      {
        alias: t,
        match: n
      },
      {
        alias: ue
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Document.Info",
    name: "Document Workspace Info View",
    element: () => import("./document-workspace-view-info.element-D3dGpC-I.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  },
  ...Xi
], Zi = [
  ...bt,
  ...Mt,
  ...Vt,
  ...Gt,
  ...qt,
  ...zt,
  ...xe,
  ...Xt,
  ...Jt,
  ...ei,
  ...di,
  ...Pi,
  ...ki,
  ...$i,
  ...gi,
  ...Yi,
  ...Ge,
  ...Ki,
  ...zi,
  ...Ji
], Qi = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Folder",
    name: "Document Type Folder Entity Create Option Action",
    forEntityTypes: [m, o],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: D
    }
  }
], en = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.DocumentType.Create",
    name: "Create Document Type Entity Action",
    weight: 1200,
    forEntityTypes: [m, o],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0,
      headline: "#create_createUnder #treeHeaders_documentTypes"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.Default",
    name: "Default Document Type Entity Create Option Action",
    weight: 100,
    api: () => import("./default-document-type-create-option-action-C4HvKlR7.js"),
    forEntityTypes: [
      a,
      m,
      o
    ],
    meta: {
      icon: "icon-document",
      label: "#create_documentType",
      description: "#create_documentTypeDescription"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.DocumentWithTemplate",
    name: "Document Type with Template Document Type Entity Create Option Action",
    weight: 90,
    api: () => import("./document-type-with-template-create-option-action-Cnb5ofYk.js"),
    forEntityTypes: [
      a,
      m,
      o
    ],
    meta: {
      icon: "icon-document-html",
      label: "#create_documentTypeWithTemplate",
      description: "#create_documentTypeWithTemplateDescription"
    }
  },
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.DocumentType.ElementType",
    name: "Element Type Document Type Entity Create Option Action",
    weight: 80,
    api: () => import("./element-type-create-option-action-Dt_8ezr_.js"),
    forEntityTypes: [
      a,
      m,
      o
    ],
    meta: {
      icon: "icon-plugin",
      label: "#create_elementType",
      description: "#create_elementTypeDescription"
    }
  },
  ...Qi
], tn = [
  {
    type: "repository",
    alias: se,
    name: "Move Document Type Repository",
    api: () => import("./document-type-move.repository-HAB7XUCk.js")
  }
], nn = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.DocumentType.MoveTo",
    name: "Move Document Type Entity Action",
    forEntityTypes: [a],
    meta: {
      treeRepositoryAlias: U,
      moveRepositoryAlias: se,
      treeAlias: M,
      foldersOnly: !0
    }
  },
  ...tn
], on = [
  {
    type: "repository",
    alias: me,
    name: "Duplicate Document Type Repository",
    api: () => import("./document-type-duplicate.repository-Dzp67f9M.js")
  }
], an = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.DocumentType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [a],
    meta: {
      duplicateRepositoryAlias: me,
      treeAlias: M,
      treeRepositoryAlias: U,
      foldersOnly: !0
    }
  },
  ...on
], sn = [
  {
    type: "repository",
    alias: je,
    name: "Export Document Type Repository",
    api: () => import("./document-type-export.repository-CeuXInYO.js")
  }
], mn = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Export",
    name: "Export Document Type Entity Action",
    forEntityTypes: [a],
    api: () => import("./document-type-export.action-B4Em3Hyt.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...sn
], cn = [
  {
    type: "repository",
    alias: ze,
    name: "Import Document Type Repository",
    api: () => import("./document-type-import.repository-BUGR_PqL.js")
  }
], rn = [
  {
    type: "modal",
    alias: "Umb.Modal.DocumentType.Import",
    name: "Document Type Import Modal",
    element: () => import("./document-type-import-modal.element-B3ELBgZY.js")
  }
], ln = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.DocumentType.Import",
    name: "Export Document Type Entity Action",
    forEntityTypes: [m],
    api: () => import("./document-type-import.action-gPMp1A7y.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...cn,
  ...rn
], pn = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.DocumentType.Delete",
    name: "Delete Document-Type Entity Action",
    forEntityTypes: [a],
    meta: {
      itemRepositoryAlias: re,
      detailRepositoryAlias: ce,
      additionalOptions: !0
    }
  },
  ...en,
  ...nn,
  ...an,
  ...mn,
  ...ln
], yn = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.DocumentTypes",
    name: "Document Types Menu Item",
    weight: 900,
    meta: {
      treeAlias: M,
      label: "Document Types",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Document Type Menu Structure Workspace Context",
    alias: "Umb.Context.DocumentType.Menu.Structure",
    api: () => import("./document-type-menu-structure.context-Q_Maj7f1.js"),
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DocumentType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.DocumentType.Breadcrumb",
    name: "Document Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: t,
        match: "Umb.Workspace.DocumentType"
      }
    ]
  }
], un = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.DocumentTypePicker",
  name: "Document Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-document-type-picker.element-Cno9wNwL.js"),
  meta: {
    label: "Document Type Picker",
    icon: "icon-document-dashed-line",
    group: "advanced",
    settings: {
      properties: [
        {
          alias: "showOpenButton",
          label: "Show open button",
          description: "Opens the node in a dialog",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "onlyPickElementTypes",
          label: "Only Element Types",
          description: "Limit to only pick Element Types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, _n = [un], En = [
  {
    type: "repository",
    alias: ce,
    name: "Document Types Repository",
    api: () => import("./document-type-detail.repository-Bnfo5Sh4.js")
  },
  {
    type: "store",
    alias: Xe,
    name: "Document Type Store",
    api: () => import("./document-type-detail.store-DR99-33X.js")
  }
], Tn = [
  {
    type: "repository",
    alias: re,
    name: "Document Type Item Repository",
    api: () => import("./document-type-item.repository-DTDTiU9b.js")
  },
  {
    type: "itemStore",
    alias: Je,
    name: "Document Type Item Store",
    api: () => import("./document-type-item.store-Bo7E1I5R.js")
  }
], Dn = [
  {
    type: "repository",
    alias: le,
    name: "Document Type Composition Repository",
    api: () => import("./document-type-composition.repository-CCm54jSR.js")
  }
], Un = [...En, ...Tn, ...Dn], dn = [
  {
    name: "Document Type Search Provider",
    alias: Ze,
    type: "searchProvider",
    api: () => import("./document-type.search-provider-38jdSBgZ.js"),
    weight: 600,
    meta: {
      label: "Document Types"
    }
  },
  {
    name: "Document Type Search Result Item ",
    alias: "Umb.SearchResultItem.DocumentType",
    type: "searchResultItem",
    forEntityTypes: [a]
  }
], An = [
  {
    type: "repository",
    alias: D,
    name: "Document Type Folder Repository",
    api: () => import("./document-type-folder.repository-DBQrDges.js")
  },
  {
    type: "store",
    alias: Qe,
    name: "Document Type Folder Store",
    api: () => import("./document-type-folder.store-BVGFlJzG.js")
  }
], On = [
  {
    type: "workspace",
    kind: "routable",
    alias: k,
    name: "Document Type Folder Workspace",
    api: () => import("./document-type-folder-workspace.context-B40Z5Ble.js"),
    meta: {
      entityType: o
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Folder.Submit",
    name: "Submit Document Type Folder Workspace Action",
    api: A,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: k
      }
    ]
  }
], bn = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.DocumentType.Folder.Rename",
    name: "Rename Document Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: D
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.DocumentType.Folder.Delete",
    name: "Delete Document Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: D
    }
  },
  ...An,
  ...On
], Rn = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Document Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.DocumentTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: S
      }
    ]
  }
], fn = [
  {
    type: "repository",
    alias: pe,
    name: "Document Type Tree Item Children Collection Repository",
    api: () => import("./document-type-tree-item-children-collection.repository-Cz2ZTPHR.js")
  }
], In = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.DocumentType.TreeItem.Table",
    name: "Document Type Tree Item Table Collection View",
    element: () => import("./document-type-tree-item-table-collection-view.element-CENu8Q4o.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: S
      }
    ]
  }
], Mn = [
  {
    type: "collection",
    kind: "default",
    alias: S,
    name: "Document Type Tree Item Children Collection",
    meta: {
      repositoryAlias: pe
    }
  },
  ...Rn,
  ...fn,
  ...In
], Sn = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.DocumentType.Tree.ReloadChildrenOf",
    name: "Reload Document Type Tree Item Children Entity Action",
    kind: "reloadTreeItemChildren",
    forEntityTypes: [
      m,
      a,
      o
    ]
  }
], Cn = [...Mn, ...Sn], Pn = [
  {
    type: "repository",
    alias: U,
    name: "Document Type Tree Repository",
    api: () => import("./document-type-tree.repository-DM8PwEA6.js")
  },
  {
    type: "treeStore",
    alias: et,
    name: "Document Type Tree Store",
    api: () => import("./document-type.tree.store-CiNm6Syd.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: M,
    name: "Document Type Tree",
    meta: {
      repositoryAlias: U
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.DocumentType",
    name: "Document Type Tree Item",
    forEntityTypes: [
      m,
      a,
      o
    ]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.DocumentType.TreeItemChildrenCollection",
    name: "Document Type Tree Item Children Collection Workspace View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      collectionAlias: S
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [tt, k]
      }
    ]
  },
  ...bn,
  ...Cn
], Bn = [
  {
    type: "workspace",
    kind: "routable",
    alias: c,
    name: "Document Type Workspace",
    api: () => import("./document-type-workspace.context-C8uQDU1W.js"),
    meta: {
      entityType: "document-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.DocumentType.Design",
    name: "Document Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line",
      compositionRepositoryAlias: le
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Structure",
    name: "Document Type Workspace Structure View",
    element: () => import("./document-type-workspace-view-structure.element-75a3aH5t.js"),
    weight: 800,
    meta: {
      label: "#contentTypeEditor_structure",
      pathname: "structure",
      icon: "icon-mindmap"
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Settings",
    name: "Document Type Workspace Settings View",
    element: () => import("./document-type-workspace-view-settings.element-CtrNM99m.js"),
    weight: 600,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.DocumentType.Templates",
    name: "Document Type Workspace Templates View",
    element: () => import("./document-type-workspace-view-templates.element-Q8EnDzr5.js"),
    weight: 400,
    meta: {
      label: "#treeHeaders_templates",
      pathname: "templates",
      icon: "icon-layout"
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.DocumentType.Save",
    name: "Save Document Type Workspace Action",
    api: A,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        match: c
      }
    ]
  }
], kn = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.DocumentType.Root",
    name: "Document Type Root Workspace",
    meta: {
      entityType: m,
      headline: "#treeHeaders_documentTypes"
    }
  }
], hn = [...Bn, ...kn], Nn = [
  ...pn,
  ...yn,
  ..._n,
  ...Un,
  ...dn,
  ...Pn,
  ...hn
], Ln = [
  {
    type: "section",
    alias: E,
    name: "Content Section",
    weight: 1e3,
    meta: {
      label: "#sections_content",
      pathname: "content"
    },
    conditions: [
      {
        alias: ae,
        match: E
      }
    ]
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SidebarMenu.Content",
    name: "Content Sidebar Menu",
    weight: 100,
    meta: {
      label: "#sections_content",
      menu: nt,
      entityType: it
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: E
      }
    ]
  }
], Zn = [
  ...ot,
  ...At,
  ...Zi,
  ...Nn,
  ...Ln
];
export {
  Zn as manifests
};
//# sourceMappingURL=manifests.js.map
