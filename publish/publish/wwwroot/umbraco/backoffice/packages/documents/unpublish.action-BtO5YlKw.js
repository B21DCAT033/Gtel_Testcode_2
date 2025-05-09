import { i as t } from "./manifests-ByHRH93l.js";
import { UmbWorkspaceActionBase as e } from "@umbraco-cms/backoffice/workspace";
class c extends e {
  async execute() {
    return (await this.getContext(t)).unpublish();
  }
}
export {
  c as UmbDocumentUnpublishWorkspaceAction,
  c as api
};
//# sourceMappingURL=unpublish.action-BtO5YlKw.js.map
