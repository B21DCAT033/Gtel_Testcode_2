import { UmbItemServerDataSourceBase as t, UmbItemRepositoryBase as o } from "@umbraco-cms/backoffice/repository";
import { LanguageService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { m as s } from "./language-access.workspace.context-token-ChA0uFUc.js";
class m extends t {
  /**
   * Creates an instance of UmbLanguageItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLanguageItemServerDataSource
   */
  constructor(r) {
    super(r, {
      getItems: n,
      mapper: u
    });
  }
}
const n = (e) => a.getItemLanguage({ isoCode: e }), u = (e) => ({
  unique: e.isoCode,
  name: e.name
});
class i extends o {
  constructor(r) {
    super(r, m, s);
  }
}
export {
  i as UmbLanguageItemRepository,
  i as default
};
//# sourceMappingURL=language-item.repository-DgoMlohm.js.map
