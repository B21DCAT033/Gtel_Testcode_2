import { k as r, f as o } from "./constants-vViimo-q.js";
import { UmbItemServerDataSourceBase as s, UmbItemRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { MediaTypeService as m } from "@umbraco-cms/backoffice/external/backend-api";
class p extends s {
  /**
   * Creates an instance of UmbMediaTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: i,
      mapper: n
    });
  }
}
const i = (e) => m.getItemMediaType({ id: e }), n = (e) => ({
  entityType: r,
  icon: e.icon || null,
  name: e.name,
  unique: e.id
});
class I extends a {
  constructor(t) {
    super(t, p, o);
  }
}
export {
  I as UmbMediaTypeItemRepository,
  I as default
};
//# sourceMappingURL=media-type-item.repository-B_IcOEo0.js.map
