import { b as n } from "./constants-DpZUosyT.js";
import { UmbEntityCreateOptionActionBase as r } from "@umbraco-cms/backoffice/entity-create-option-action";
class s extends r {
  async getHref() {
    const t = this.args.entityType;
    if (!t) throw new Error("Entity type is required to create a document type");
    const e = this.args.unique ?? null;
    return n.generateAbsolute({
      parentEntityType: t,
      parentUnique: e,
      presetAlias: null
    });
  }
}
export {
  s as UmbDefaultDocumentTypeCreateOptionAction,
  s as api
};
//# sourceMappingURL=default-document-type-create-option-action-C4HvKlR7.js.map
