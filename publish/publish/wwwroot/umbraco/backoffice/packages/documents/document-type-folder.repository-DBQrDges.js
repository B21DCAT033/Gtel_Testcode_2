import { m as o, i as u } from "./constants-DpZUosyT.js";
import { DocumentTypeService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbId as m } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class d {
  #e;
  /**
   * Creates an instance of UmbDocumentTypeFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a scaffold for a Document Type folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  async createScaffold(e) {
    return { data: {
      entityType: o,
      unique: m.new(),
      name: "",
      ...e
    } };
  }
  /**
   * Fetches a Document Type folder from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: n } = await i(
      this.#e,
      t.getDocumentTypeFolderById({
        id: e
      })
    );
    return r ? { data: {
      entityType: o,
      unique: r.id,
      name: r.name
    } } : { error: n };
  }
  /**
   * Creates a Document Type folder on the server
   * @param {UmbCreateFolderModel} model
   * @returns {*}
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  async create(e, r) {
    if (!e) throw new Error("Model is missing");
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Name is missing");
    const n = {
      id: e.unique,
      parent: r ? { id: r } : null,
      name: e.name
    }, { error: s } = await i(
      this.#e,
      t.postDocumentTypeFolder({
        requestBody: n
      })
    );
    return s ? { error: s } : this.read(e.unique);
  }
  /**
   * Updates a Document Type folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Folder name is missing");
    const { error: r } = await i(
      this.#e,
      t.putDocumentTypeFolderById({
        id: e.unique,
        requestBody: { name: e.name }
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a Document Type folder on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return i(
      this.#e,
      t.deleteDocumentTypeFolderById({
        id: e
      })
    );
  }
}
class E extends c {
  constructor(e) {
    super(e, d, u);
  }
}
export {
  E as UmbDocumentTypeFolderRepository,
  E as api
};
//# sourceMappingURL=document-type-folder.repository-DBQrDges.js.map
