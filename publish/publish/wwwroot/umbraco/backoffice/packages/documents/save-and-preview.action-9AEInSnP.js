import { UmbDocumentUserPermissionCondition as i } from "./document-user-permission.condition-DaCL5Ih_.js";
import { u as s, g as n } from "./manifests-ByHRH93l.js";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/class-api";
import { UmbWorkspaceActionBase as r } from "@umbraco-cms/backoffice/workspace";
class d extends r {
  constructor(e, o) {
    super(e, o), this.disable();
    const t = new i(e, {
      host: e,
      config: {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [s]
      },
      onChange: () => {
        t.permitted ? this.enable() : this.disable();
      }
    });
  }
  async execute() {
    (await this.getContext(n)).saveAndPreview();
  }
}
export {
  d as UmbDocumentSaveAndPreviewWorkspaceAction,
  d as api
};
//# sourceMappingURL=save-and-preview.action-9AEInSnP.js.map
