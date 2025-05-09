import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as _ } from "@umbraco-cms/backoffice/context-api";
const n = new _(
  "UmbBlockAreaConfigEntryContext"
), E = new e("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: { entityType: "block-grid-area-type", preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), r = new _(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.IS_BLOCK_GRID_AREA_TYPE_WORKSPACE_CONTEXT
), B = "Umb.Workspace.BlockGridAreaType", R = new _("UmbBlockEntriesContext"), C = new _("UmbBlockEntryContext"), A = new _("UmbBlockManagerContext"), O = "Umbraco.BlockGrid", T = "Umb.PropertyEditorUi.BlockGrid", c = new _(
  "UmbBlockGridAreaTypeEntriesContext"
), U = "gridBlock", t = "block-grid-type", i = "block-grid", l = new e(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    },
    data: {
      entityType: "block",
      preset: {},
      originData: { index: -1, parentUnique: null },
      baseDataPath: void 0
    }
  }
  // Recast the type, so the entityType data prop is not required:
), I = new e(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    },
    data: { entityType: t, preset: { allowAtRoot: !0, allowInAreas: !0 } }
  }
  // Recast the type, so the entityType data prop is not required:
), d = "Umb.Workspace.BlockGridType";
export {
  t as U,
  i as a,
  n as b,
  B as c,
  r as d,
  E as e,
  R as f,
  C as g,
  A as h,
  c as i,
  O as j,
  T as k,
  U as l,
  d as m,
  l as n,
  I as o
};
//# sourceMappingURL=index-Cc47Hgez.js.map
