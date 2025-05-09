import { UMB_SETTINGS_SECTION_ALIAS as i } from "@umbraco-cms/backoffice/settings";
import { a, U as s, b as m, j as n, m as o, l as r, n as p, o as l, p as c } from "./manifests-H0KeU9t1.js";
import { c as t, b as T } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as e } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/tree";
import "@umbraco-cms/backoffice/external/backend-api";
import { g as E, c as A, q as _, r as S, s as d, t as y } from "./manifests-CYOZ__fg.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/resources";
import { d as I, g as u } from "./stylesheet-rule-settings-modal.token-5NdpIj8O.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import "@umbraco-cms/backoffice/id";
import { a as M, b as U, U as b } from "./entity-CA4W0tlV.js";
import { U as f, c as P, m as k, g as R, h as L } from "./manifests-ChE0t90n.js";
import { f as O, p as h, q as B, o as $, r as C } from "./partial-view-workspace.context-token-BPSaKQI9.js";
import { k as w, d as g, U as Y, e as W, f as V, x as D, y as F, z as N } from "./manifests-DuLlkyg0.js";
const x = [
  {
    type: "menu",
    alias: "Umb.Menu.Templating",
    name: "Templating Menu"
  },
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarMenu.Templating",
    name: "Templating Section Sidebar Menu",
    weight: 200,
    meta: {
      label: "#treeHeaders_templatingGroup",
      menu: "Umb.Menu.Templating"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: i
      }
    ]
  }
], H = [
  {
    type: "condition",
    name: "Template Allow Delete Action Condition",
    alias: a,
    api: () => import("./template-allow-delete-action.condition-DPpX9JOR.js")
  }
], q = [...H], v = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Template.Create",
    name: "Create Template Entity Action",
    weight: 1200,
    api: () => import("./create.action-CDGJniyn.js"),
    forEntityTypes: [t, T],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Template.Delete",
    name: "Delete Template Entity Action",
    forEntityTypes: [t],
    meta: {
      detailRepositoryAlias: m,
      itemRepositoryAlias: s
    },
    conditions: [{ alias: a }]
  }
], j = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Templates",
    name: "Templates Menu Item",
    weight: 40,
    meta: {
      label: "Templates",
      entityType: "template",
      treeAlias: n,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Template Menu Structure Workspace Context",
    alias: "Umb.Context.Template.Menu.Structure",
    api: () => import("./template-menu-structure.context-CglVV856.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Template"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Template.Breadcrumb",
    name: "Template Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Template"
      }
    ]
  }
], z = [
  {
    type: "modal",
    alias: "Umb.Modal.Template.QueryBuilder",
    name: "Template query builder",
    element: () => import("./query-builder-modal.element-CF2zlWAv.js")
  }
], G = [...o, ...r, ...p], K = [
  {
    name: "Template Search Provider",
    alias: "Umb.SearchProvider.Template",
    type: "searchProvider",
    api: () => import("./template.search-provider-DfEfPOT2.js"),
    weight: 100,
    meta: {
      label: "Templates"
    }
  },
  {
    name: "Template Search Result Item ",
    alias: "Umb.SearchResultItem.Template",
    type: "searchResultItem",
    forEntityTypes: [t]
  }
], Q = [
  ...q,
  ...v,
  ...j,
  ...z,
  ...G,
  ...K,
  ...l,
  ...c
], J = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Stylesheets",
    name: "Stylesheets Menu Item",
    weight: 20,
    meta: {
      label: "Stylesheets",
      treeAlias: E,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Stylesheet Menu Structure Workspace Context",
    alias: "Umb.Context.Stylesheet.Menu.Structure",
    api: () => import("./stylesheet-menu-structure.context-C2pdkLuQ.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Stylesheet"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Stylesheet.Breadcrumb",
    name: "Stylesheet Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Stylesheet"
      }
    ]
  }
], X = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Stylesheet.CreateOptions",
    name: "Stylesheet Create Options Entity Action",
    weight: 1200,
    api: () => import("./create.action-BFhLz0M_.js"),
    forEntityTypes: [M, U],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Stylesheet.CreateOptions",
    name: "Stylesheet Create Options Modal",
    element: () => import("./stylesheet-create-options-modal.element-5hBayS6N.js")
  }
], Z = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Stylesheet.Delete",
    name: "Delete Stylesheet Entity Action",
    forEntityTypes: [b],
    meta: {
      detailRepositoryAlias: A,
      itemRepositoryAlias: I
    }
  },
  ...X,
  ..._
], ee = [...u], te = [
  ...S,
  ...J,
  ...d,
  ...y,
  ...Z,
  ...ee
], ae = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.PartialView",
    name: "Partial View Menu Item",
    weight: 40,
    meta: {
      label: "Partial Views",
      treeAlias: O,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Partial View Menu Structure Workspace Context",
    alias: "Umb.Context.PartialView.Menu.Structure",
    api: () => import("./partial-view-menu-structure.context-C4OJCyJg.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.PartialView"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.PartialView.Breadcrumb",
    name: "Partial View Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.PartialView"
      }
    ]
  }
], ie = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.PartialView.CreateOptions",
    name: "Partial View Create Options Entity Action",
    weight: 1200,
    api: () => import("./create.action-DKwm5AQL.js"),
    forEntityTypes: [h, B],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.PartialView.CreateOptions",
    name: "Partial View Create Options Modal",
    element: () => import("./partial-view-create-options-modal.element-Cw93YSdz.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.PartialView.CreateFromSnippet",
    name: "Create Partial View From Snippet Modal",
    js: () => import("./create-from-snippet-modal-DaOVphKu.js")
  }
], se = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.PartialView.Delete",
    name: "Delete Partial View Entity Action",
    forEntityTypes: [$],
    meta: {
      detailRepositoryAlias: P,
      itemRepositoryAlias: f
    }
  },
  ...ie,
  ...k
], me = [
  ...R,
  ...ae,
  ...C,
  ...se,
  ...L
], ne = [
  {
    type: "menuItem",
    kind: "tree",
    alias: g,
    name: "Scripts Menu Item",
    weight: 10,
    meta: {
      label: "Scripts",
      treeAlias: w,
      menus: ["Umb.Menu.Templating"]
    }
  },
  {
    type: "workspaceContext",
    name: "Script Menu Structure Workspace Context",
    alias: "Umb.Context.Script.Menu.Structure",
    api: () => import("./script-menu-structure.context-DUAhe7Hr.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Script"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Script.Breadcrumb",
    name: "Script Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Script"
      }
    ]
  }
], oe = [
  {
    type: "repository",
    alias: Y,
    name: "Script Item Repository",
    api: () => import("./script-item.repository-BWftqHgp.js")
  },
  {
    type: "itemStore",
    alias: "Umb.ItemStore.Script",
    name: "Script Item Store",
    api: () => import("./script-item.store-B_Fp3Sg6.js")
  }
], re = [
  {
    type: "repository",
    alias: W,
    name: "Script Detail Repository",
    api: () => import("./script-detail.repository-CKzqBSwB.js")
  },
  {
    type: "store",
    alias: V,
    name: "Script Detail Store",
    api: () => import("./script-detail.store-DQapv_qk.js")
  },
  ...oe
], pe = [
  ...D,
  ...ne,
  ...re,
  ...F,
  ...N
], le = [
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingItemPicker",
    name: "Templating Item Picker Modal",
    element: () => import("./templating-item-picker-modal.element-DVIPccZC.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingSectionPicker",
    name: "Templating Section Picker Modal",
    element: () => import("./templating-section-picker-modal.element-Cc34Lc5q.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.TemplatingPageFieldBuilder",
    name: "Templating Page Field Builder Modal",
    element: () => import("./templating-page-field-builder-modal.element-uWRtSSXU.js")
  }
], Le = [
  ...x,
  ...Q,
  ...te,
  ...me,
  ...le,
  ...pe
];
export {
  Le as manifests
};
//# sourceMappingURL=manifests.js.map
