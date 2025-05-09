import { UmbModalToken as E } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_PATH_PATTERN as T } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as o } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as _ } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UMB_TREE_PICKER_MODAL_ALIAS as s } from "@umbraco-cms/backoffice/tree";
const y = new E(
  "Umb.Modal.MediaTypeCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), Y = "Umb.Repository.MediaType.Duplicate", d = "Umb.Repository.MediaType.Export", c = new E(
  "Umb.Modal.MediaType.Import",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), L = "Umb.Repository.MediaType.Import", B = "Umb.Repository.MediaType.Move", C = "Umb.Workspace.MediaType.Root", a = "media-type", I = "media-type-root", M = "media-type-folder", A = T.generateAbsolute({
  sectionName: t,
  entityType: a
}), b = T.generateAbsolute({
  sectionName: t,
  entityType: I
}), l = new o("create/parent/:parentEntityType/:parentUnique", A), N = new o(
  "edit/:unique",
  A
), W = "Umb.Repository.MediaType.Composition", K = new _(
  "UmbMediaTypeDetailStore"
), w = "Umb.Repository.MediaType.Detail", F = "Umb.Store.MediaType.Detail", H = new _("UmbMediaTypeItemStore"), u = "Umb.Repository.MediaType.Item", f = "Umb.Store.MediaType.Item", k = new _(
  "UmbMediaTypeFolderStore"
), X = "Umb.Repository.MediaType.Folder", g = "Umb.Store.MediaType.Folder", x = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === M
), i = T.generateAbsolute({
  sectionName: t,
  entityType: M
}), h = new o(
  "edit/:unique",
  i
), q = "Umb.Workspace.MediaType.Folder", v = "Umb.Repository.MediaType.TreeItemChildrenCollection", z = "Umb.Collection.MediaType.TreeItemChildren", G = new E(
  s,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.MediaType"
    }
  }
), j = new _("UmbMediaTypeTreeStore"), J = "Umb.Repository.MediaType.Tree", V = "Umb.Store.MediaType.Tree", Q = "Umb.Tree.MediaType", Z = new _(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "media-type"
), $ = "Umb.Workspace.MediaType";
export {
  W as A,
  F as B,
  f as C,
  V as D,
  Q as E,
  g as F,
  x as G,
  i as H,
  z as I,
  v as J,
  J as U,
  j as a,
  Z as b,
  X as c,
  c as d,
  K as e,
  H as f,
  l as g,
  k as h,
  N as i,
  h as j,
  a as k,
  M as l,
  I as m,
  w as n,
  $ as o,
  q as p,
  u as q,
  G as r,
  y as s,
  Y as t,
  d as u,
  L as v,
  B as w,
  C as x,
  A as y,
  b as z
};
//# sourceMappingURL=constants-vViimo-q.js.map
