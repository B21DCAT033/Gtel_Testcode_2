import { l as o, f as c } from "./constants-DpZUosyT.js";
import { UmbId as d } from "@umbraco-cms/backoffice/id";
import { DocumentTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as u } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class T {
  #e;
  /**
   * Creates an instance of UmbDocumentTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Document Type scaffold
   * @param {(string | null)} parentUnique
   * @param preset
   * @returns { CreateDocumentTypeRequestModel }
   * @memberof UmbDocumentTypeServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: o,
      unique: d.new(),
      name: "",
      alias: "",
      description: "",
      icon: "icon-document",
      allowedAtRoot: !1,
      variesByCulture: !1,
      variesBySegment: !1,
      isElement: !1,
      properties: [],
      containers: [],
      allowedContentTypes: [],
      compositions: [],
      allowedTemplates: [],
      defaultTemplate: null,
      cleanup: {
        preventCleanup: !1,
        keepAllVersionsNewerThanDays: null,
        keepLatestVersionPerDayForDays: null
      },
      collection: null,
      ...e
    } };
  }
  /**
   * Fetches a Media Type with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: s } = await u(
      this.#e,
      r.getDocumentTypeById({ id: e })
    );
    return s || !t ? { error: s } : { data: {
      entityType: o,
      unique: t.id,
      name: t.name,
      alias: t.alias,
      description: t.description ?? "",
      icon: t.icon,
      allowedAtRoot: t.allowedAsRoot,
      variesByCulture: t.variesByCulture,
      variesBySegment: t.variesBySegment,
      isElement: t.isElement,
      properties: t.properties.map((a) => ({
        id: a.id,
        container: a.container,
        sortOrder: a.sortOrder,
        alias: a.alias,
        name: a.name,
        description: a.description,
        dataType: { unique: a.dataType.id },
        variesByCulture: a.variesByCulture,
        variesBySegment: a.variesBySegment,
        validation: a.validation,
        appearance: a.appearance
      })),
      containers: t.containers,
      allowedContentTypes: t.allowedDocumentTypes.map((a) => ({
        contentType: { unique: a.documentType.id },
        sortOrder: a.sortOrder
      })),
      compositions: t.compositions.map((a) => ({
        contentType: { unique: a.documentType.id },
        compositionType: a.compositionType
      })),
      allowedTemplates: t.allowedTemplates,
      defaultTemplate: t.defaultTemplate ? { id: t.defaultTemplate.id } : null,
      cleanup: t.cleanup,
      collection: t.collection ? { unique: t.collection?.id } : null
    } };
  }
  /**
   * Inserts a new Media Type on the server
   * @param {UmbDocumentTypeDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async create(e, t = null) {
    if (!e) throw new Error("Media Type is missing");
    if (!e.unique) throw new Error("Media Type unique is missing");
    const s = {
      parent: t ? { id: t } : null,
      alias: e.alias,
      name: e.name,
      description: e.description,
      icon: e.icon,
      allowedAsRoot: e.allowedAtRoot,
      variesByCulture: e.variesByCulture,
      variesBySegment: e.variesBySegment,
      isElement: e.isElement,
      properties: e.properties.map((n) => ({
        id: n.id,
        container: n.container,
        sortOrder: n.sortOrder,
        alias: n.alias,
        name: n.name,
        description: n.description,
        dataType: { id: n.dataType.unique },
        variesByCulture: n.variesByCulture,
        variesBySegment: n.variesBySegment,
        validation: n.validation,
        appearance: n.appearance
      })),
      containers: e.containers,
      allowedDocumentTypes: e.allowedContentTypes.map((n) => ({
        documentType: { id: n.contentType.unique },
        sortOrder: n.sortOrder
      })),
      compositions: e.compositions.map((n) => ({
        documentType: { id: n.contentType.unique },
        compositionType: n.compositionType
      })),
      id: e.unique,
      allowedTemplates: e.allowedTemplates,
      defaultTemplate: e.defaultTemplate ? { id: e.defaultTemplate.id } : null,
      cleanup: e.cleanup,
      collection: e.collection?.unique ? { id: e.collection?.unique } : null
    }, { data: i, error: a } = await u(
      this.#e,
      r.postDocumentType({
        requestBody: s
      })
    );
    return i ? this.read(i) : { error: a };
  }
  /**
   * Updates a DocumentType on the server
   * @param {UmbDocumentTypeDetailModel} DocumentType
   * @param model
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const t = {
      alias: e.alias,
      name: e.name,
      description: e.description,
      icon: e.icon,
      allowedAsRoot: e.allowedAtRoot,
      variesByCulture: e.variesByCulture,
      variesBySegment: e.variesBySegment,
      isElement: e.isElement,
      properties: e.properties.map((i) => ({
        id: i.id,
        container: i.container,
        sortOrder: i.sortOrder,
        alias: i.alias,
        name: i.name,
        description: i.description,
        dataType: { id: i.dataType.unique },
        variesByCulture: i.variesByCulture,
        variesBySegment: i.variesBySegment,
        validation: i.validation,
        appearance: i.appearance
      })),
      containers: e.containers.map((i) => ({
        id: i.id,
        parent: i.parent ? { id: i.parent.id } : null,
        name: i.name ?? "",
        type: i.type,
        // TODO: check if the value is valid
        sortOrder: i.sortOrder
      })),
      allowedDocumentTypes: e.allowedContentTypes.map((i) => ({
        documentType: { id: i.contentType.unique },
        sortOrder: i.sortOrder
      })),
      compositions: e.compositions.map((i) => ({
        documentType: { id: i.contentType.unique },
        compositionType: i.compositionType
      })),
      allowedTemplates: e.allowedTemplates,
      defaultTemplate: e.defaultTemplate ? { id: e.defaultTemplate.id } : null,
      cleanup: e.cleanup,
      collection: e.collection?.unique ? { id: e.collection?.unique } : null
    }, { error: s } = await u(
      this.#e,
      r.putDocumentTypeById({
        id: e.unique,
        requestBody: t
      })
    );
    return s ? { error: s } : this.read(e.unique);
  }
  /**
   * Deletes a Media Type on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return u(
      this.#e,
      r.deleteDocumentTypeById({
        id: e
      })
    );
  }
}
class f extends p {
  constructor(e) {
    super(e, T, c);
  }
}
export {
  f as UmbDocumentTypeDetailRepository,
  f as api
};
//# sourceMappingURL=document-type-detail.repository-Bnfo5Sh4.js.map
