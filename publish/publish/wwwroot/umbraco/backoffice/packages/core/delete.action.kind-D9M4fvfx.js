import { UmbModalToken as t } from "@umbraco-cms/backoffice/modal";
import { U as i } from "./default.action.kind-B00NCT7z.js";
const n = new t("Umb.Modal.Entity.CreateOptionActionList", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), s = "Umb.Modal.Entity.CreateOptionActionList", e = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Delete",
  matchKind: "delete",
  matchType: "entityAction",
  manifest: {
    ...i.manifest,
    type: "entityAction",
    kind: "delete",
    api: () => import("./delete.action-DXp0Xn_o.js"),
    weight: 1100,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "#actions_delete",
      additionalOptions: !0,
      itemRepositoryAlias: "",
      detailRepositoryAlias: ""
    }
  }
}, T = e;
export {
  n as U,
  s as a,
  e as b,
  T as m
};
//# sourceMappingURL=delete.action.kind-D9M4fvfx.js.map
