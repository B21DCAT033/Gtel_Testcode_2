import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as E } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as o, UMB_WORKSPACE_MODAL as s } from "@umbraco-cms/backoffice/workspace";
import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
const O = "document-type", C = "document-type-root", c = "template", a = "element", U = o.generateAbsolute({
  sectionName: t,
  entityType: O
}), p = new E("create/parent/:parentEntityType/:parentUnique/:presetAlias", U), S = new E(
  "edit/:unique",
  U
), r = new e(
  "Umb.Modal.DocumentTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), I = "Umb.Repository.DocumentType.Duplicate", N = "Umb.Repository.DocumentType.Export", y = new e("Umb.Modal.DocumentType.Import", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), Y = "Umb.Repository.DocumentType.Import", i = "Umb.Repository.DocumentType.Move", L = "Umb.SearchProvider.DocumentType", B = "Umb.Repository.DocumentType.Composition", u = new T(
  "UmbDocumentTypeDetailStore"
), b = "Umb.Repository.DocumentType.Detail", l = "Umb.Store.DocumentType.Detail", d = new T(
  "UmbDocumentTypeItemStore"
), W = "Umb.Repository.DocumentType.Item", K = "Umb.Store.DocumentType.Item", w = new T(
  "UmbDocumentTypeTreeStore"
), F = new T(
  "UmbDocumentTypeFolderStore"
), H = "Umb.Repository.DocumentType.Folder", k = "Umb.Store.DocumentType.Folder", n = "document-type-folder", M = o.generateAbsolute({
  sectionName: t,
  entityType: n
}), f = new E(
  "edit/:unique",
  M
), X = new T(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.getEntityType?.() === n
), g = "Umb.Workspace.DocumentType.Folder", x = "Umb.Repository.DocumentType.TreeItemChildrenCollection", h = "Umb.Collection.DocumentType.TreeItemChildren", v = "Umb.Repository.DocumentType.Tree", q = "Umb.Store.DocumentType.Tree", z = "Umb.Tree.DocumentType", G = new e("Umb.Modal.Workspace", {
  modal: s.getDefaultModal(),
  data: { entityType: O, preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), V = new T(
  "UmbWorkspaceContext",
  void 0,
  (_) => _.getEntityType?.() === "document-type"
), j = "Umb.Workspace.DocumentType", J = "Umb.Workspace.DocumentType.Root";
export {
  L as A,
  B,
  l as C,
  K as D,
  q as E,
  z as F,
  k as G,
  X as H,
  M as I,
  h as J,
  x as K,
  J as L,
  v as U,
  w as a,
  p as b,
  c,
  a as d,
  y as e,
  u as f,
  d as g,
  V as h,
  F as i,
  S as j,
  f as k,
  O as l,
  n as m,
  C as n,
  b as o,
  j as p,
  H as q,
  g as r,
  W as s,
  G as t,
  U as u,
  r as v,
  I as w,
  N as x,
  Y as y,
  i as z
};
//# sourceMappingURL=constants-DpZUosyT.js.map
