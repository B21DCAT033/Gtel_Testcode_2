import { a, k as c } from "./paths-BF32ZUyU.js";
import { UmbId as l } from "@umbraco-cms/backoffice/id";
import { DocumentBlueprintService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as i } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class p {
  #e;
  /**
   * Creates an instance of UmbDocumentBlueprintServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Document scaffold
   * @param preset
   * @returns { UmbDocumentBlueprintDetailModel }
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: a,
      unique: l.new(),
      documentType: {
        unique: "",
        collection: null
      },
      values: [],
      variants: [],
      ...e
    } };
  }
  /**
   * Creates a new variant scaffold.
   * @returns A new variant scaffold.
   */
  /*
  // TDOD: remove if not used
  createVariantScaffold(): UmbDocumentBlueprintVariantModel {
  	return {
  		state: null,
  		culture: null,
  		segment: null,
  		name: '',
  		publishDate: null,
  		createDate: null,
  		updateDate: null,
  	};
  }
  */
  /**
   * Fetches a Document with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: n, error: r } = await i(
      this.#e,
      u.getDocumentBlueprintById({ id: e })
    );
    return r || !n ? { error: r } : { data: {
      entityType: a,
      unique: n.id,
      values: n.values.map((t) => ({
        editorAlias: t.editorAlias,
        culture: t.culture || null,
        segment: t.segment || null,
        alias: t.alias,
        value: t.value
      })),
      variants: n.variants.map((t) => ({
        state: t.state,
        culture: t.culture || null,
        segment: t.segment || null,
        name: t.name,
        publishDate: t.publishDate || null,
        createDate: t.createDate,
        updateDate: t.updateDate
      })),
      documentType: {
        unique: n.documentType.id,
        collection: n.documentType.collection ? { unique: n.documentType.collection.id } : null
      }
    } };
  }
  /**
   * Inserts a new Document on the server
   * @param {UmbDocumentBlueprintDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async create(e, n = null) {
    if (!e) throw new Error("Document is missing");
    if (!e.unique) throw new Error("Document unique is missing");
    const r = {
      id: e.unique,
      parent: n ? { id: n } : null,
      documentType: { id: e.documentType.unique },
      values: e.values,
      variants: e.variants
    }, { data: s, error: t } = await i(
      this.#e,
      u.postDocumentBlueprint({
        requestBody: r
      })
    );
    return s ? this.read(s) : { error: t };
  }
  /**
   * Updates a Document on the server
   * @param {UmbDocumentBlueprintDetailModel} Document
   * @param model
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const n = {
      values: e.values,
      variants: e.variants
    }, { error: r } = await i(
      this.#e,
      u.putDocumentBlueprintById({
        id: e.unique,
        requestBody: n
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a Document on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return i(this.#e, u.deleteDocumentBlueprintById({ id: e }));
  }
}
class f extends m {
  constructor(e) {
    super(e, p, c);
  }
}
export {
  f as UmbDocumentBlueprintDetailRepository,
  f as api
};
//# sourceMappingURL=document-blueprint-detail.repository-BoSztbN6.js.map
