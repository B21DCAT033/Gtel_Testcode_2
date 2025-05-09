import { CMS_ENTITY_TYPE_APPLICATIONINFORMATION, CMS_WORKSPACE_APPLICATIONINFORMATION_ALIAS } from "../../constants.js";
const workspace = {
  type: "workspace",
  alias: CMS_WORKSPACE_APPLICATIONINFORMATION_ALIAS,
  name: "Application information Workspace",
  element: () => import("./application-information-workspace.element.js"),
  api: () => import("./application-information-workspace.context.js"),
  meta: {
    entityType: CMS_ENTITY_TYPE_APPLICATIONINFORMATION
  }
};
const manifests = [workspace];
export {
  manifests
};
//# sourceMappingURL=manifests.js.map
