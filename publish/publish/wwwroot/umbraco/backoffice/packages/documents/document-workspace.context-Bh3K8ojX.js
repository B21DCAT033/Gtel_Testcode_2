import { UmbDocumentTypeDetailRepository as C } from "./document-type-detail.repository-Bnfo5Sh4.js";
import { UmbContentPropertyDatasetContext as y, UmbContentDetailWorkspaceContextBase as O } from "@umbraco-cms/backoffice/content";
import { C as w, D as S, E as P, F as D, d as b, i as v, G as c, H as p, u as m, I as N, J as A, e as M, K as R } from "./manifests-ByHRH93l.js";
import "@umbraco-cms/backoffice/id";
import { DocumentService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as d } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as I } from "@umbraco-cms/backoffice/repository";
import { U as f } from "./document-preview.repository-Boowp7BD.js";
import { UmbDocumentPublishingRepository as q } from "./document-publishing.repository-5llJWdOm.js";
import { UmbVariantId as T, UMB_INVARIANT_CULTURE as U } from "@umbraco-cms/backoffice/variant";
import { UmbWorkspaceIsNewRedirectController as _, UmbWorkspaceIsNewRedirectControllerAlias as g } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentBlueprintDetailRepository as B } from "@umbraco-cms/backoffice/document-blueprint";
import { UmbIsTrashedEntityContext as W } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_APP_CONTEXT as x } from "@umbraco-cms/backoffice/app";
import { UmbDeprecation as u } from "@umbraco-cms/backoffice/utils";
import { createExtensionApiByAlias as E } from "@umbraco-cms/backoffice/extension-registry";
class L extends y {
}
class V {
  //#host: UmbControllerHost;
  // TODO: [v15]: ignoring unused var here here to prevent a breaking change
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(e) {
  }
  /**
   * Validate a new Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param parentUnique - Parent Unique
   * @returns {*}
   */
  async validateCreate(e, t = null) {
    if (!e) throw new Error("Document is missing");
    if (!e.unique) throw new Error("Document unique is missing");
    if (t === void 0) throw new Error("Parent unique is missing");
    const s = {
      id: e.unique,
      parent: t ? { id: t } : null,
      documentType: { id: e.documentType.unique },
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    };
    return d(
      //this.#host,
      l.postDocumentValidate({
        requestBody: s
      })
    );
  }
  /**
   * Validate a existing Document
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {*}
   */
  async validateUpdate(e, t) {
    if (!e.unique) throw new Error("Unique is missing");
    const s = t.map((n) => n.culture).filter((n) => n !== null), i = {
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants,
      cultures: s
    };
    return d(
      //this.#host,
      l.putUmbracoManagementApiV11DocumentByIdValidate11({
        id: e.unique,
        requestBody: i
      })
    );
  }
}
class K extends I {
  #e;
  constructor(e) {
    super(e), this.#e = new V(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model
   * @param {string | null} [parentUnique]
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async validateCreate(e, t) {
    if (!e) throw new Error("Data is missing");
    return this.#e.validateCreate(e, t);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model
   * @param variantIds
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async validateSave(e, t) {
    if (!e) throw new Error("Data is missing");
    if (!e.unique) throw new Error("Unique is missing");
    return this.#e.validateUpdate(e, t);
  }
}
class it extends O {
  constructor(e) {
    super(e, {
      entityType: b,
      workspaceAlias: D,
      detailRepositoryAlias: P,
      contentTypeDetailRepository: C,
      contentValidationRepository: K,
      skipValidationOnSubmit: !0,
      contentVariantScaffold: S,
      contentTypePropertyName: "documentType",
      saveModalToken: w
    }), this.publishingRepository = new q(this), this.isTrashed = this._data.createObservablePartOfCurrent((t) => t?.isTrashed), this.contentTypeUnique = this._data.createObservablePartOfCurrent((t) => t?.documentType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent(
      (t) => !!t?.documentType.collection
    ), this.urls = this._data.createObservablePartOfCurrent((t) => t?.urls || []), this.templateId = this._data.createObservablePartOfCurrent((t) => t?.template?.unique || null), this.#e = new W(this), this.#s = !1, this.#n = !1, this.observe(this.contentTypeUnique, (t) => this.structure.loadType(t), null), this.consumeContext(v, (t) => {
      this.#t = t;
    }), E(this, c, [
      {
        config: {
          allOf: [p]
        },
        onChange: (t) => {
          this.#s = t;
        }
      }
    ]), E(this, c, [
      {
        config: {
          allOf: [m]
        },
        onChange: (t) => {
          this.#n = t;
        }
      }
    ]), this.routes.setRoutes([
      {
        path: N.toString(),
        component: () => import("./document-workspace-editor.element-CK5aSAjt.js"),
        setup: async (t, s) => {
          const i = s.match.params.parentEntityType, n = s.match.params.parentUnique === "null" ? null : s.match.params.parentUnique, o = s.match.params.documentTypeUnique, r = s.match.params.blueprintUnique;
          await this.create(
            { entityType: i, unique: n },
            o,
            r
          ), new _(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: A.toString(),
        component: () => import("./document-workspace-editor.element-CK5aSAjt.js"),
        setup: async (t, s) => {
          const i = s.match.params.parentEntityType, n = s.match.params.parentUnique === "null" ? null : s.match.params.parentUnique, o = s.match.params.documentTypeUnique;
          await this.create({ entityType: i, unique: n }, o), this.#i(
            p,
            this.#s,
            "You do not have permission to create documents."
          ), new _(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: M.toString(),
        component: () => import("./document-workspace-editor.element-CK5aSAjt.js"),
        setup: async (t, s) => {
          this.removeUmbControllerByAlias(g);
          const i = s.match.params.unique;
          await this.load(i), this.#i(
            m,
            this.#n,
            "You do not have permission to update documents."
          );
        }
      }
    ]);
  }
  #e;
  #t;
  #s;
  #n;
  resetState() {
    super.resetState(), this.#e.setIsTrashed(!1);
  }
  async load(e) {
    const t = await super.load(e);
    return t?.data && this.#e.setIsTrashed(t.data.isTrashed), t;
  }
  async create(e, t, s) {
    if (s) {
      const i = new B(this), { data: n } = await i.requestByUnique(s);
      return this.createScaffold({
        parent: e,
        preset: {
          documentType: n?.documentType,
          values: n?.values,
          variants: n?.variants
        }
      });
    }
    return this.createScaffold({
      parent: e,
      preset: {
        documentType: {
          unique: t,
          collection: null
        }
      }
    });
  }
  getCollectionAlias() {
    return R;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.documentType.unique;
  }
  /**
   * Set the template
   * @param {string} templateUnique The unique identifier of the template.
   * @memberof UmbDocumentWorkspaceContext
   */
  setTemplate(e) {
    this._data.updateCurrent({ template: { unique: e } });
  }
  /**
   * Request a submit of the workspace, in the case of Document Workspaces the validation does not need to be valid for this to be submitted.
   * @returns {Promise<void>} a promise which resolves once it has been completed.
   */
  requestSubmit() {
    return this._handleSubmit();
  }
  // Because we do not make validation prevent submission this also submits the workspace. [NL]
  invalidSubmit() {
    return this._handleSubmit();
  }
  async saveAndPreview() {
    return this.#a();
  }
  async #a() {
    const e = this.getUnique();
    if (!e) throw new Error("Unique is missing");
    let t = U;
    const { selected: s } = await this._determineVariantOptions();
    if (s.length > 0) {
      t = s[0];
      const r = [T.FromString(t)], a = await this._data.constructData(r);
      await this.runMandatoryValidationForSaveData(a), await this.performCreateOrUpdate(r, a);
    }
    await new f(this).enter();
    const i = await this.getContext(x), n = new URL(i.getBackofficePath() + "/preview", i.getServerUrl());
    n.searchParams.set("id", e), t && t !== U && n.searchParams.set("culture", t), window.open(n.toString(), `umbpreview-${e}`)?.focus();
  }
  async publish() {
    if (new u({
      deprecated: "The Publish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Publish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.publish();
  }
  /**
   * Save the document and publish it.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async saveAndPublish() {
    if (new u({
      deprecated: "The SaveAndPublish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the SaveAndPublish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.saveAndPublish();
  }
  /**
   * Schedule the document to be published at a later date.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async schedule() {
    if (new u({
      deprecated: "The Schedule method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Schedule method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.schedule();
  }
  /**
   * Unpublish the document.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async unpublish() {
    if (new u({
      deprecated: "The Unpublish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Unpublish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.unpublish();
  }
  /**
   * Publish the document and all its descendants.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async publishWithDescendants() {
    if (new u({
      deprecated: "The PublishWithDescendants method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the PublishWithDescendants method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#t) throw new Error("Publishing context is missing");
    this.#t.publishWithDescendants();
  }
  createPropertyDatasetContext(e, t) {
    return new L(e, this, t);
  }
  async #i(e, t, s) {
    const i = this.getVariants(), n = i?.map((a) => e + a.culture) || [];
    if (t) {
      this.readOnlyState?.removeStates(n);
      return;
    }
    const r = (i?.map((a) => new T(a.culture, a.segment)) || []).map((a) => ({
      unique: e + a.culture,
      variantId: a,
      message: s
    }));
    this.readOnlyState?.removeStates(n), this.readOnlyState?.addStates(r);
  }
}
export {
  it as UmbDocumentWorkspaceContext,
  it as default
};
//# sourceMappingURL=document-workspace.context-Bh3K8ojX.js.map
