import { i as t } from "./manifests-ByHRH93l.js";
import { UmbWorkspaceActionBase as e } from "@umbraco-cms/backoffice/workspace";
class c extends e {
  async execute() {
    return (await this.getContext(t)).publishWithDescendants();
  }
}
export {
  c as UmbDocumentPublishWithDescendantsWorkspaceAction,
  c as api
};
//# sourceMappingURL=publish-with-descendants.action-C3wDmuK2.js.map
