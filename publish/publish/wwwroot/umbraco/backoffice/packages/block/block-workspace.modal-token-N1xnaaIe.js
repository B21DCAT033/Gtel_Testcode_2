import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
const n = new o(
  "UmbPropertyDatasetContext"
), r = new o(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.IS_BLOCK_WORKSPACE_CONTEXT
), s = new e(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    },
    data: { entityType: "block", preset: {}, originData: {}, baseDataPath: void 0 }
  }
  // Recast the type, so the entityType data prop is not required:
);
export {
  r as U,
  s as a,
  n as b
};
//# sourceMappingURL=block-workspace.modal-token-N1xnaaIe.js.map
