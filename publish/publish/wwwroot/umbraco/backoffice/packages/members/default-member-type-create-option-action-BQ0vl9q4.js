import { q as r } from "./input-member-type.element-9xTb0eJi.js";
import { UmbEntityCreateOptionActionBase as n } from "@umbraco-cms/backoffice/entity-create-option-action";
class s extends n {
  async getHref() {
    const e = this.args.entityType;
    if (!e) throw new Error("Entity type is required to create a member type");
    const t = this.args.unique ?? null;
    return r.generateAbsolute({
      parentEntityType: e,
      parentUnique: t
    });
  }
}
export {
  s as UmbDefaultMemberTypeCreateOptionAction,
  s as api
};
//# sourceMappingURL=default-member-type-create-option-action-BQ0vl9q4.js.map
