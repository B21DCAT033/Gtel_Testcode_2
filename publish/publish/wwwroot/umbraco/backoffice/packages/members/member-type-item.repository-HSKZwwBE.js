import { a as t } from "./entity-B4xreSYr.js";
import { UmbItemServerDataSourceBase as m, UmbItemRepositoryBase as o } from "@umbraco-cms/backoffice/repository";
import { MemberTypeService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { h as a } from "./input-member-type.element-9xTb0eJi.js";
class p extends m {
  /**
   * Creates an instance of UmbMemberTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeItemServerDataSource
   */
  constructor(r) {
    super(r, {
      getItems: T,
      mapper: c
    });
  }
}
const T = (e) => s.getItemMemberType({ id: e }), c = (e) => ({
  entityType: t,
  unique: e.id,
  name: e.name,
  icon: e.icon || ""
});
class u extends o {
  constructor(r) {
    super(r, p, a);
  }
}
export {
  u as UmbMemberTypeItemRepository,
  u as default
};
//# sourceMappingURL=member-type-item.repository-HSKZwwBE.js.map
