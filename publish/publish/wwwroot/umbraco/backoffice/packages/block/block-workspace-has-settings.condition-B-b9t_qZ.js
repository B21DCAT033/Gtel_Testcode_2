import { U as i } from "./block-workspace.modal-token-N1xnaaIe.js";
import { UmbConditionBase as n } from "@umbraco-cms/backoffice/extension-registry";
class p extends n {
  constructor(t, e) {
    super(t, e), this.consumeContext(i, (s) => {
      this.observe(
        s.settings.contentTypeId,
        (o) => {
          this.permitted = o !== void 0;
        },
        "observeSettingsElementTypeId"
      );
    });
  }
}
export {
  p as UmbBlockWorkspaceHasSettingsCondition,
  p as default
};
//# sourceMappingURL=block-workspace-has-settings.condition-B-b9t_qZ.js.map
