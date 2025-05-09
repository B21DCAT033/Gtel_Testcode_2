import "./constants-vWMF1ODp.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { U as t } from "./resend-invite-to-user-modal.token-SCmTZoXA.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as i } from "@umbraco-cms/backoffice/modal";
class l extends o {
  async execute() {
    await (await this.getContext(i)).open(this, t)?.onSubmit();
  }
}
export {
  l as UmbCreateUserEntityAction,
  l as api
};
//# sourceMappingURL=invite-user-entity-action-CXrQ4abD.js.map
