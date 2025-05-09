import { d as l } from "./manifests-ByHRH93l.js";
import { DocumentService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as u } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { UMB_NOTIFICATION_CONTEXT as c } from "@umbraco-cms/backoffice/notification";
class h {
  #t;
  /**
   * Creates an instance of UmbDocumentPublishingServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentPublishingServerDataSource
   */
  constructor(s) {
    this.#t = s;
  }
  /**
   * Publish one or more variants of a Document
   * @param {string} unique
   * @param {Array<UmbVariantId>} variantIds
   * @param variants
   * @returns {*}
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async publish(s, e) {
    if (!s) throw new Error("Id is missing");
    const n = {
      publishSchedules: e.map(
        (t) => ({
          culture: t.variantId.isCultureInvariant() ? null : t.variantId.toCultureString(),
          schedule: t.schedule
        })
      )
    };
    return u(this.#t, r.putDocumentByIdPublish({ id: s, requestBody: n }));
  }
  /**
   * Unpublish one or more variants of a Document
   * @param {string} unique
   * @param {Array<UmbVariantId>} variantIds
   * @returns {*}
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async unpublish(s, e) {
    if (!s) throw new Error("Id is missing");
    if (e.some((t) => t.isCultureInvariant())) {
      const t = {
        cultures: null
      };
      return u(this.#t, r.putDocumentByIdUnpublish({ id: s, requestBody: t }));
    }
    const n = {
      cultures: e.map((t) => t.toCultureString())
    };
    return u(this.#t, r.putDocumentByIdUnpublish({ id: s, requestBody: n }));
  }
  /**
   * Publish variants of a document and all its descendants
   * @param unique
   * @param variantIds
   * @param includeUnpublishedDescendants
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async publishWithDescendants(s, e, i) {
    if (!s) throw new Error("Id is missing");
    const n = {
      cultures: e.map((t) => t.toCultureString()),
      includeUnpublishedDescendants: i
    };
    return u(
      this.#t,
      r.putDocumentByIdPublishWithDescendants({ id: s, requestBody: n })
    );
  }
  /**
   * Get the published Document by its unique
   * @param {string} unique - Document unique
   * @returns {Promise<UmbDataSourceResponse<UmbDocumentDetailModel>>} Published document
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async published(s) {
    if (!s) throw new Error("Unique is missing");
    const { data: e, error: i } = await u(
      this.#t,
      r.getDocumentByIdPublished({ id: s })
    );
    return i || !e ? { error: i } : { data: {
      entityType: l,
      unique: e.id,
      values: e.values.map((t) => ({
        editorAlias: t.editorAlias,
        culture: t.culture || null,
        segment: t.segment || null,
        alias: t.alias,
        value: t.value
      })),
      variants: e.variants.map((t) => ({
        culture: t.culture || null,
        segment: t.segment || null,
        state: t.state,
        name: t.name,
        publishDate: t.publishDate || null,
        createDate: t.createDate,
        updateDate: t.updateDate,
        scheduledPublishDate: t.scheduledPublishDate || null,
        scheduledUnpublishDate: t.scheduledUnpublishDate || null
      })),
      urls: e.urls.map((t) => ({
        culture: t.culture || null,
        url: t.url
      })),
      template: e.template ? { unique: e.template.id } : null,
      documentType: {
        unique: e.documentType.id,
        collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null,
        icon: e.documentType.icon
      },
      isTrashed: e.isTrashed
    } };
  }
}
class y extends a {
  #t;
  #e;
  /**
   * @deprecated The calling workspace context should be used instead to show notifications
   */
  #s;
  constructor(s) {
    super(s), this.#e = new h(this), this.#t = Promise.all([
      this.consumeContext(c, (e) => {
        this.#s = e;
      }).asPromise()
    ]);
  }
  /**
   * Publish one or more variants of a Document
   * @param {string} id
   * @param {Array<UmbVariantId>} variantIds
   * @param unique
   * @param variants
   * @returns {*}
   * @memberof UmbDocumentPublishingRepository
   */
  async publish(s, e) {
    if (!s) throw new Error("id is missing");
    if (!e.length) throw new Error("variant IDs are missing");
    return await this.#t, this.#e.publish(s, e);
  }
  /**
   * Unpublish one or more variants of a Document
   * @param {string} id
   * @param {Array<UmbVariantId>} variantIds
   * @returns {*}
   * @memberof UmbDocumentPublishingRepository
   */
  async unpublish(s, e) {
    if (!s) throw new Error("id is missing");
    if (!e) throw new Error("variant IDs are missing");
    await this.#t;
    const { error: i } = await this.#e.unpublish(s, e);
    if (!i) {
      const n = { data: { message: "Document unpublished" } };
      this.#s?.peek("positive", n);
    }
    return { error: i };
  }
  /**
   * Publish variants of a document including its descendants
   * @param id
   * @param variantIds
   * @param includeUnpublishedDescendants
   * @memberof UmbDocumentPublishingRepository
   */
  async publishWithDescendants(s, e, i) {
    if (!s) throw new Error("id is missing");
    if (!e) throw new Error("variant IDs are missing");
    await this.#t;
    const { error: n } = await this.#e.publishWithDescendants(
      s,
      e,
      i
    );
    if (!n) {
      const t = { data: { message: "Document published with descendants" } };
      this.#s?.peek("positive", t);
    }
    return { error: n };
  }
  /**
   * Get the published data of a document
   * @param {string} unique Document unique
   * @returns { Promise<UmbRepositoryResponse<UmbDocumentDetailModel>>} Published document
   * @memberof UmbDocumentPublishingRepository
   */
  async published(s) {
    return this.#e.published(s);
  }
}
export {
  y as UmbDocumentPublishingRepository,
  y as api
};
//# sourceMappingURL=document-publishing.repository-5llJWdOm.js.map
