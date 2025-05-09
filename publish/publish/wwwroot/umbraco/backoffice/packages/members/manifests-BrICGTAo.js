import { d as b, e as f, c as E, a as p, i as _, f as T, b as A, g as I, j as k, l as c, n as M } from "./member-group-picker-modal.element-CPMPuZSG.js";
import { UMB_COLLECTION_ALIAS_CONDITION as d } from "@umbraco-cms/backoffice/collection";
import { UMB_WORKSPACE_CONDITION_ALIAS as e, UmbSubmitWorkspaceAction as R } from "@umbraco-cms/backoffice/workspace";
import { g as l, m as S, p as O, f as i, x as P, y as B, z as h, s as C, v as y, a as $, A as G, B as w } from "./manifests-C4T1daBS.js";
import { b as u, j as n, f as L, c as g, l as U, t as Y, u as W, v as N, k as D, m, i as V } from "./input-member-type.element-9xTb0eJi.js";
import { a as o, U as a } from "./entity-B4xreSYr.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/picker-input";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as v } from "@umbraco-cms/backoffice/section";
import "@umbraco-cms/backoffice/content";
const H = [
  {
    type: "repository",
    alias: b,
    name: "Member Group Collection Repository",
    api: () => import("./member-group-picker-modal.element-CPMPuZSG.js").then((t) => t.u)
  }
], x = [
  {
    type: "collectionView",
    alias: f,
    name: "Member Group Table Collection View",
    element: () => import("./member-group-table-collection-view.element-DlXhvYA0.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: d,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], K = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Member Group Collection Action",
    alias: "Umb.CollectionAction.MemberGroup.Create",
    weight: 200,
    meta: {
      label: "#general_create",
      href: "section/member-management/workspace/member-group/create"
    },
    conditions: [
      {
        alias: d,
        match: "Umb.Collection.MemberGroup"
      }
    ]
  }
], j = [
  {
    type: "collection",
    kind: "default",
    alias: E,
    name: "Member Group Collection",
    meta: {
      repositoryAlias: b
    }
  },
  ...H,
  ...x,
  ...K
], F = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MemberGroup.Create",
    name: "Create Member Group Entity Action",
    weight: 1200,
    api: () => import("./create-member-group.action-DnqwfOWq.js"),
    forEntityTypes: [p],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberGroup.Delete",
    name: "Delete Member Group Entity Action ",
    forEntityTypes: [A],
    meta: {
      detailRepositoryAlias: T,
      itemRepositoryAlias: _
    }
  }
], z = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberGroupPicker",
    name: "Member Group Picker Modal",
    element: () => import("./member-group-picker-modal.element-CPMPuZSG.js").then((t) => t.v)
  }
], r = "Umb.Menu.MemberManagement", q = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.MemberGroups",
    name: "Member Groups Menu Item",
    weight: 100,
    meta: {
      label: "#treeHeaders_memberGroups",
      icon: "icon-users",
      entityType: p,
      menus: [r]
    }
  }
], J = {
  type: "propertyEditorSchema",
  name: "Member Group Picker",
  alias: "Umbraco.MemberGroupPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberGroupPicker"
  }
}, Q = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MemberGroupPicker",
    name: "Member Group Picker Property Editor UI",
    element: () => import("./property-editor-ui-member-group-picker.element-Dwt1GJOr.js"),
    meta: {
      label: "Member Group Picker",
      propertyEditorSchemaAlias: "Umbraco.MemberGroupPicker",
      icon: "icon-users-alt",
      group: "people",
      supportsReadOnly: !0
    }
  },
  J
], X = [...Q], Z = [
  {
    type: "repository",
    alias: T,
    name: "Member Group Detail Repository",
    api: () => import("./member-group-detail.repository-Du7a43co.js")
  },
  {
    type: "store",
    alias: I,
    name: "Member Group Detail Store",
    api: () => import("./member-group-detail.store-CBHvEui1.js")
  }
], ee = [
  {
    type: "repository",
    alias: _,
    name: "Member Group Item Repository",
    api: () => import("./member-group-item.repository-BvGElBvI.js")
  },
  {
    type: "itemStore",
    alias: k,
    name: "Member Group Item Store",
    api: () => import("./member-group-item.store-v7b0cpXD.js")
  }
], te = [...Z, ...ee], ae = {
  type: "workspace",
  kind: "routable",
  alias: c,
  name: "MemberGroup Workspace",
  api: () => import("./member-group-workspace.context-C0jvF_T7.js"),
  meta: {
    entityType: A
  }
}, ie = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberGroup.Save",
    name: "Save Member Group Workspace Action",
    api: R,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: c
      }
    ]
  }
], oe = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Member.Info",
    name: "Member Workspace info View",
    js: () => import("./member-type-workspace-view-info.element-BFteonyD.js"),
    weight: 300,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "icon-document"
    },
    conditions: [
      {
        alias: e,
        match: c
      }
    ]
  }
], re = [ae, ...ie, ...oe], me = [
  {
    type: "workspace",
    kind: "default",
    alias: M,
    name: "Member Group Root Workspace View",
    meta: {
      entityType: p,
      headline: "#treeHeaders_memberGroups"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberGroupRoot.Collection",
    name: "Member Group Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: E
    },
    conditions: [
      {
        alias: e,
        match: M
      }
    ]
  }
], ne = [
  ...re,
  ...me
], se = [
  ...j,
  ...F,
  ...z,
  ...q,
  ...X,
  ...te,
  ...ne
], pe = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Member.Create",
    name: "Create Member Entity Action",
    weight: 1200,
    api: () => import("./create.action-DKjvJJ79.js"),
    forEntityTypes: [l],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Member.CreateOptions",
    name: "Member Create Options Modal",
    element: () => import("./member-create-options-modal.element-CL7wXzWF.js")
  }
], ce = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.Member.Delete",
    name: "Delete Member Entity Action",
    forEntityTypes: [i],
    meta: {
      detailRepositoryAlias: O,
      itemRepositoryAlias: S
    }
  },
  ...pe
], le = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Member",
    name: "Member Entity Item Reference",
    element: () => import("./member-item-ref.element-B2iRS_Tt.js"),
    forEntityTypes: [i]
  },
  ...P
], Me = [
  {
    type: "modal",
    alias: "Umb.Modal.MemberPicker",
    name: "Member Picker Modal",
    element: () => import("./manifests-C4T1daBS.js").then((t) => t.C)
  }
], ye = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Members",
    name: "Members Menu Item",
    weight: 200,
    meta: {
      label: "#treeHeaders_member",
      icon: "icon-user",
      entityType: l,
      menus: [r]
    }
  }
], be = [
  {
    type: "pickerSearchResultItem",
    kind: "default",
    alias: "Umb.PickerSearchResultItem.Member",
    name: "Member Picker Search Result Item",
    element: () => import("./member-picker-search-result-item.element-DWQBSA4e.js"),
    forEntityTypes: [i]
  }
], Ee = {
  type: "propertyEditorSchema",
  name: "Member Picker",
  alias: "Umbraco.MemberPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MemberPicker"
  }
}, _e = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MemberPicker",
    name: "Member Picker Property Editor UI",
    element: () => import("./property-editor-ui-member-picker.element-BTbXuKbw.js"),
    meta: {
      label: "Member Picker",
      propertyEditorSchemaAlias: "Umbraco.MemberPicker",
      icon: "icon-user",
      group: "people",
      supportsReadOnly: !0
    }
  },
  Ee
], Te = [..._e], Ae = [...B, ...h], de = [
  {
    name: "Member Search Provider",
    alias: C,
    type: "searchProvider",
    api: () => import("./member.search-provider-DjzJRdaV.js"),
    weight: 300,
    meta: {
      label: "Members"
    }
  },
  {
    name: "Member Search Result Item ",
    alias: "Umb.SearchResultItem.Member",
    type: "searchResultItem",
    forEntityTypes: [i]
  }
], Re = [
  {
    type: "workspace",
    kind: "default",
    alias: y,
    name: "Member Root Workspace",
    meta: {
      entityType: l,
      headline: "#treeHeaders_member"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MemberRoot.Collection",
    name: "Member Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: $
    },
    conditions: [
      {
        alias: e,
        match: y
      }
    ]
  }
], ue = [
  ...G,
  ...Re
], Ue = [
  ...w,
  ...ce,
  ...le,
  ...Me,
  ...ye,
  ...be,
  ...Te,
  ...Ae,
  ...de,
  ...ue
], fe = [
  {
    type: "repository",
    alias: u,
    name: "Duplicate Member Type Repository",
    api: () => import("./member-type-duplicate.repository-UYT7xbbV.js")
  }
], Ie = [
  {
    type: "entityAction",
    kind: "duplicate",
    alias: "Umb.EntityAction.MemberType.Duplicate",
    name: "Duplicate Member Type Entity Action",
    forEntityTypes: [o],
    meta: {
      duplicateRepositoryAlias: u,
      treeRepositoryAlias: n
    }
  },
  ...fe
], ke = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MemberType.Default",
    name: "Default Member Type Entity Create Option Action",
    weight: 1e3,
    api: () => import("./default-member-type-create-option-action-BQ0vl9q4.js"),
    forEntityTypes: [a],
    meta: {
      icon: "icon-user",
      label: "#content_membertype"
    }
  }
], Se = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MemberType.Create",
    name: "Create Member Type Entity Action",
    forEntityTypes: [a]
  },
  ...ke
], Oe = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MemberType.Delete",
    name: "Delete Member Type Entity Action",
    forEntityTypes: [o],
    meta: {
      detailRepositoryAlias: g,
      itemRepositoryAlias: L
    }
  },
  ...Se,
  ...Ie
], Pe = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.MemberTypes",
    name: "Member Type Menu Item",
    weight: 700,
    meta: {
      label: "Member Types",
      treeAlias: U,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Member Type Menu Structure Workspace Context",
    alias: "Umb.Context.MemberType.Menu.Structure",
    api: () => import("./member-type-menu-structure.context-Cm6TKZoT.js"),
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.MemberType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.MemberType.Breadcrumb",
    name: "Member Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: e,
        match: "Umb.Workspace.MemberType"
      }
    ]
  }
], Be = [...Y, ...W, ...N], he = [
  {
    name: "Member Type Search Provider",
    alias: "Umb.SearchProvider.MemberType",
    type: "searchProvider",
    api: () => import("./member-type.search-provider-DNjHsddj.js"),
    weight: 200,
    meta: {
      label: "Member Types"
    }
  },
  {
    name: "Member Type Search Result Item ",
    alias: "Umb.SearchResultItem.MemberType",
    type: "searchResultItem",
    forEntityTypes: [o]
  }
], Ce = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MemberType.Tree.ReloadChildrenOf",
    name: "Reload Member Type Tree Item Children Entity Action",
    forEntityTypes: [a]
  }
], $e = [
  {
    type: "repository",
    alias: n,
    name: "Member Type Tree Repository",
    api: () => import("./member-type-tree.repository-mbrFAckE.js")
  },
  {
    type: "treeStore",
    alias: D,
    name: "Member Type Tree Store",
    api: () => import("./member-type-tree.store-BBl6x2F1.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: U,
    name: "Member Type Tree",
    meta: {
      repositoryAlias: n
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MemberType",
    name: "Member Type Tree Item",
    forEntityTypes: [a, o]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MemberType.Root",
    name: "Member Type Root Workspace",
    meta: {
      entityType: a,
      headline: "#treeHeaders_memberTypes"
    }
  },
  ...Ce
], Ge = [
  {
    type: "workspace",
    kind: "routable",
    alias: m,
    name: "Member Type Workspace",
    api: () => import("./member-type-workspace.context-lcA_RxRI.js"),
    meta: {
      entityType: "member-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.MemberType.Design",
    name: "Member Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-member-dashed-line",
      compositionRepositoryAlias: V
    },
    conditions: [
      {
        alias: e,
        match: m
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MemberType.Save",
    name: "Save Member Type Workspace Action",
    api: R,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: e,
        match: m
      }
    ]
  }
], we = [
  ...Oe,
  ...Pe,
  ...Be,
  ...he,
  ...$e,
  ...Ge
], s = "Umb.Section.Members", Le = [
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarApp.Menu.MemberManagement",
    name: "Member Management Menu Sidebar App",
    weight: 100,
    meta: {
      label: "#treeHeaders_member",
      menu: r
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: s
      }
    ]
  }
], ge = [
  {
    type: "menu",
    alias: r,
    name: "Member Management Menu"
  }
], Ye = {
  type: "section",
  alias: s,
  name: "Members Section",
  weight: 500,
  meta: {
    label: "#sections_member",
    pathname: "member-management"
  },
  conditions: [
    {
      alias: v,
      match: s
    }
  ]
}, We = [
  Ye,
  ...Le,
  ...ge
], Xe = [
  ...se,
  ...Ue,
  ...we,
  ...We
];
export {
  s as U,
  Xe as m
};
//# sourceMappingURL=manifests-BrICGTAo.js.map
