import { f as i } from "./constants-D-HH3gx6.js";
import { DataTypeService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as p } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class n {
  #e;
  /**
   * Creates an instance of UmbDataTypeSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeSearchServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get a list of versions for a data
   * @param args
   * @returns {*}
   * @memberof UmbDataTypeSearchServerDataSource
   */
  async search(e) {
    const { data: r, error: o } = await p(
      this.#e,
      c.getItemDataTypeSearch({
        query: e.query
      })
    );
    return r ? { data: { items: r.items.map((t) => ({
      href: "/section/settings/workspace/data-type/edit/" + t.id,
      entityType: i,
      unique: t.id,
      name: t.name,
      propertyEditorSchemaAlias: t.editorAlias,
      propertyEditorUiAlias: t.editorUiAlias || ""
    })), total: r.total } } : { error: o };
  }
}
class h extends s {
  #e;
  constructor(e) {
    super(e), this.#e = new n(this);
  }
  search(e) {
    return this.#e.search(e);
  }
}
class T extends s {
  #e = new h(this);
  async search(e) {
    return this.#e.search(e);
  }
  destroy() {
    this.#e.destroy();
  }
}
export {
  T as UmbDataTypeSearchProvider,
  T as api
};
//# sourceMappingURL=data-type.search-provider-BrBPEZCl.js.map
