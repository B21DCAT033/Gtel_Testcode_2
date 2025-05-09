import { UmbDocumentUserPermissionCondition as i } from "./document-user-permission.condition-DaCL5Ih_.js";
import { u as n, w as o, g as a, i as r } from "./manifests-ByHRH93l.js";
import { UmbWorkspaceActionBase as c } from "@umbraco-cms/backoffice/workspace";
class O extends c {
  constructor(t, s) {
    super(t, s), this.disable();
    const e = new i(t, {
      host: t,
      config: {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [n, o]
      },
      onChange: () => {
        e.permitted ? this.enable() : this.disable();
      }
    });
  }
  async hasAdditionalOptions() {
    const t = await this.getContext(a);
    return (await this.observe(t.variantOptions).asPromise())?.length > 1;
  }
  async execute() {
    return (await this.getContext(r)).saveAndPublish();
  }
}
export {
  O as UmbDocumentSaveAndPublishWorkspaceAction,
  O as api
};
//# sourceMappingURL=save-and-publish.action-B_BbMR48.js.map
