import { b as r, d as n } from "./constants-DpZUosyT.js";
import { UmbEntityCreateOptionActionBase as E } from "@umbraco-cms/backoffice/entity-create-option-action";
class o extends E {
  async getHref() {
    const t = this.args.entityType;
    if (!t) throw new Error("Entity type is required to create a document type");
    const e = this.args.unique ?? null;
    return r.generateAbsolute({
      parentEntityType: t,
      parentUnique: e,
      presetAlias: n
    });
  }
}
export {
  o as UmbElementTypeCreateOptionAction,
  o as api
};
//# sourceMappingURL=element-type-create-option-action-Dt_8ezr_.js.map
