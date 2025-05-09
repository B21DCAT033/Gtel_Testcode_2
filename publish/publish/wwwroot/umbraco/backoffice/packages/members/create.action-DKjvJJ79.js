import { l as a } from "./manifests-C4T1daBS.js";
import { UmbEntityActionBase as e } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as n } from "@umbraco-cms/backoffice/modal";
class M extends e {
  constructor(t, o) {
    super(t, o);
  }
  async execute() {
    await (await this.getContext(n)).open(this, a).onSubmit();
  }
}
export {
  M as UmbCreateMemberEntityAction,
  M as api
};
//# sourceMappingURL=create.action-DKjvJJ79.js.map
