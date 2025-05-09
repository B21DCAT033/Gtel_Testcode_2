import { UmbModalToken as _ } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as s } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_PATH_PATTERN as t } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as A } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as a } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
const y = "Umb.Repository.DataType.Collection", I = "Umb.Collection.DataType", S = "Umb.Workspace.DataType.Root", M = new _(
  "Umb.Modal.DataTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), i = "Umb.Repository.DataType.Duplicate", c = "Umb.Repository.DataType.Move", Y = new _("Umb.Modal.DataTypePickerFlowDataTypePicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), C = new _("Umb.Modal.DataTypePickerFlow", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), L = new _(
  s,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.DataType"
    }
  }
), D = "data-type", P = "data-type-root", E = "data-type-folder", o = t.generateAbsolute({
  sectionName: A,
  entityType: D
}), l = t.generateAbsolute({
  sectionName: A,
  entityType: P
}), B = new a("create/parent/:parentEntityType/:parentUnique", o), b = new a(
  "edit/:unique",
  o
), d = new T("UmbDataTypeDetailStore"), N = "Umb.Repository.DataType.Detail", W = "Umb.Store.DataType.Detail", K = new T("UmbDataTypeItemStore"), w = "Umb.Repository.DataType.Item", F = "Umb.Store.DataType.Item", k = new T("UmbDataTypeTreeStore"), u = new T("UmbDataTypeFolderStore"), H = "Umb.Repository.DataType.Folder", f = "Umb.Store.DataType.Folder", g = new T(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === E
), n = t.generateAbsolute({
  sectionName: A,
  entityType: E
}), z = new a(
  "edit/:unique",
  n
), X = "Umb.Workspace.DataType.Folder", x = "Umb.Repository.DataType.TreeItemChildrenCollection", h = "Umb.Collection.DataType.TreeItemChildren", q = "Umb.Repository.DataType.Tree", v = "Umb.Store.DataType.Tree", G = "Umb.Tree.DataType", j = new T(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "data-type"
), J = new _("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "large"
  },
  data: { entityType: "data-type", preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), V = "Umb.Workspace.DataType";
export {
  k as A,
  H as B,
  f as C,
  u as D,
  X as E,
  g as F,
  n as G,
  z as H,
  h as I,
  x as J,
  V as K,
  w as U,
  L as a,
  J as b,
  C as c,
  j as d,
  c as e,
  D as f,
  P as g,
  E as h,
  I as i,
  y as j,
  S as k,
  M as l,
  i as m,
  Y as n,
  o,
  l as p,
  B as q,
  b as r,
  N as s,
  W as t,
  d as u,
  F as v,
  K as w,
  q as x,
  v as y,
  G as z
};
//# sourceMappingURL=constants-D-HH3gx6.js.map
