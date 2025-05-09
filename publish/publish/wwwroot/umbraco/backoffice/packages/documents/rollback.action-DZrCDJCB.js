import { s as t } from "./manifests-ByHRH93l.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as e } from "@umbraco-cms/backoffice/modal";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as i } from "@umbraco-cms/backoffice/localization-api";
class d extends o {
  #t = new i(this);
  async execute() {
    await (await this.getContext(e)).open(this, t, {}).onSubmit(), (await this.getContext(a)).peek("positive", {
      data: { message: this.#t.term("rollback_documentRolledBack") }
    });
  }
}
export {
  d as UmbRollbackDocumentEntityAction,
  d as api
};
//# sourceMappingURL=rollback.action-DZrCDJCB.js.map
