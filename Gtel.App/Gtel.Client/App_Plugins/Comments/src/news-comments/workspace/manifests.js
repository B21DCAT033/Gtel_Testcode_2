import { CMS_ENTITY_TYPE_NEWSCOMMENT, CMS_WORKSPACE_NEWSCOMMENT_ALIAS } from "../../constants.js";
const workspace = {
  type: "workspace",
  alias: CMS_WORKSPACE_NEWSCOMMENT_ALIAS,
  name: "News comment Workspace",
  element: () => import("./news-comment-workspace.element.js"),
  api: () => import("./news-comment-workspace.context.js"),
  meta: {
    entityType: CMS_ENTITY_TYPE_NEWSCOMMENT
  }
};
const manifests = [workspace];
export {
  manifests
};
//# sourceMappingURL=manifests.js.map
