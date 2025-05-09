import { i, j as A, U as n, l as u, b as L, c as o, n as a, q as t, f as s, g as m, h as _ } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as b } from "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UMB_CONTENT_SECTION_ALIAS as d } from "@umbraco-cms/backoffice/content";
import { UMB_COLLECTION_ALIAS_CONDITION as c } from "@umbraco-cms/backoffice/collection";
import { UMB_APP_LANGUAGE_CONTEXT as U } from "@umbraco-cms/backoffice/language";
import { UmbConditionBase as y } from "@umbraco-cms/backoffice/extension-registry";
const C = [
  {
    type: "repository",
    alias: i,
    name: "Language Detail Repository",
    api: () => import("./language-detail.repository-a4uWw_br.js")
  },
  {
    type: "store",
    alias: A,
    name: "Language Detail Store",
    api: () => import("./language-detail.store-BCXCQ2cg.js")
  }
], E = [
  {
    type: "repository",
    alias: n,
    name: "Language Item Repository",
    api: () => import("./language-item.repository-DgoMlohm.js")
  },
  {
    type: "itemStore",
    alias: u,
    name: "Language Item Store",
    api: () => import("./language-item.store-Dj3VDBpf.js")
  }
], k = [...C, ...E], S = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Languages",
    name: "Languages Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_languages",
      icon: "icon-globe",
      entityType: "language-root",
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Language Menu Structure Workspace Context",
    alias: "Umb.Context.Language.Menu.Structure",
    api: () => import("./language-menu-structure.context-BntROtzf.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Language"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Language.Breadcrumb",
    name: "Language Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Language"
      }
    ]
  }
], I = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Language.Delete",
    name: "Delete Language Entity Action",
    forEntityTypes: [L],
    meta: {
      itemRepositoryAlias: n,
      detailRepositoryAlias: i
    }
  },
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Language.Create",
    name: "Create Language Entity Action",
    weight: 1200,
    api: () => import("./language-create-entity-action-BW_M0vV5.js"),
    forEntityTypes: [o],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  }
], T = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Language Workspace",
    api: () => import("./language-workspace.context-CkKVUG5a.js"),
    meta: {
      entityType: "language"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Language.Details",
    name: "Language Workspace Details View",
    js: () => import("./language-details-workspace-view.element-9QgyIcEJ.js"),
    weight: 90,
    meta: {
      label: "#general_details",
      pathname: "details",
      icon: "edit"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Language.Save",
    name: "Save Language Workspace Action",
    api: b,
    meta: {
      look: "primary",
      color: "positive",
      label: "#buttons_save"
    },
    conditions: [
      {
        alias: e,
        match: a
      }
    ]
  }
], f = [
  {
    type: "workspace",
    kind: "default",
    alias: t,
    name: "Language Root Workspace",
    meta: {
      entityType: o,
      headline: "#treeHeaders_languages"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.LanguageRoot.Collection",
    name: "Webhook Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: s
    },
    conditions: [
      {
        alias: e,
        match: t
      }
    ]
  }
], O = [...T, ...f], M = [
  {
    type: "sectionSidebarApp",
    alias: "Umb.SectionSidebarItem.LanguageSelect",
    name: "App Language Select Section Sidebar Item",
    js: () => import("./app-language-select.element-BMt2gtqQ.js"),
    weight: 900,
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: d
      },
      {
        alias: "Umb.Condition.MultipleAppLanguages"
      }
    ]
  }
], N = [
  {
    type: "modal",
    alias: "Umb.Modal.LanguagePicker",
    name: "Language Picker Modal",
    js: () => import("./language-picker-modal.element-j786VTpR.js")
  }
], h = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Language Collection Action",
    alias: "Umb.CollectionAction.Language.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: "section/settings/workspace/language/create"
    },
    conditions: [
      {
        alias: c,
        match: "Umb.Collection.Language"
      }
    ]
  }
], G = [
  {
    type: "repository",
    alias: m,
    name: "Language Collection Repository",
    api: () => import("./language-collection.repository-didMva8o.js")
  }
], w = [
  {
    type: "collectionView",
    alias: _,
    name: "Language Table Collection View",
    js: () => import("./language-table-collection-view.element-Htl7xABy.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: c,
        match: "Umb.Collection.Language"
      }
    ]
  }
], W = [
  {
    type: "collection",
    kind: "default",
    alias: s,
    name: "Language Collection",
    meta: {
      repositoryAlias: m
    }
  },
  ...h,
  ...G,
  ...w
], R = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.AppLanguage",
    name: "App Language Context",
    api: () => import("./app-language.context-DP3YAEuZ.js")
  }
];
class B extends y {
  constructor(l, p) {
    super(l, p), this.consumeContext(U, (r) => {
      this.observe(
        r.moreThanOneLanguage,
        (g) => {
          this.permitted = g;
        },
        "observeLanguages"
      );
    });
  }
}
const $ = {
  type: "condition",
  name: "Multiple App Languages Condition",
  alias: "Umb.Condition.MultipleAppLanguages",
  api: B
}, q = [
  ...k,
  ...I,
  ...S,
  ...O,
  ...M,
  ...N,
  ...W,
  ...R,
  $,
  {
    type: "workspaceContext",
    name: "Document Language Access Workspace Context",
    alias: "Umb.WorkspaceContext.DocumentLanguageAccess",
    api: () => import("./language-access.workspace.context-DmoJPkKk.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.Document"
      }
    ]
  }
];
export {
  q as manifests
};
//# sourceMappingURL=manifests.js.map
