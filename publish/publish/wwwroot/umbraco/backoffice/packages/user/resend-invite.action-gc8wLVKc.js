import "./constants-vWMF1ODp.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { a as i } from "./resend-invite-to-user-modal.token-SCmTZoXA.js";
import { UmbEntityActionBase as r } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as a } from "@umbraco-cms/backoffice/modal";
class x extends r {
  constructor(t, o) {
    super(t, o);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await (await this.getContext(a)).open(this, i, {
      data: {
        user: {
          unique: this.args.unique
        }
      }
    }).onSubmit();
  }
}
export {
  x as UmbResendInviteToUserEntityAction,
  x as api
};
//# sourceMappingURL=resend-invite.action-gc8wLVKc.js.map
