import { UmbMediaTypeDetailRepository as p } from "./media-type-detail.repository-C1YWBdOX.js";
import { UmbContentPropertyDatasetContext as l, UmbContentDetailWorkspaceContextBase as c } from "@umbraco-cms/backoffice/content";
import { h as m, A as u, B as T } from "./input-upload-field.element-DpMbvzUB.js";
import { x as y, o as h, w as d, U as _ } from "./dropzone.element-DyItP5Bd.js";
import "./media-url.repository-DUerHiJb.js";
import { UmbMediaValidationRepository as A } from "./media-validation.repository-3oFTDjyn.js";
import { UmbWorkspaceIsNewRedirectController as C, UmbWorkspaceIsNewRedirectControllerAlias as s } from "@umbraco-cms/backoffice/workspace";
import { UmbIsTrashedEntityContext as U } from "@umbraco-cms/backoffice/recycle-bin";
class E extends l {
}
class f extends c {
  constructor(a) {
    super(a, {
      entityType: m,
      workspaceAlias: d,
      detailRepositoryAlias: h,
      contentTypeDetailRepository: p,
      contentValidationRepository: A,
      contentVariantScaffold: y,
      contentTypePropertyName: "mediaType"
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((t) => t?.mediaType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent((t) => !!t?.mediaType.collection), this.urls = this._data.createObservablePartOfCurrent((t) => t?.urls || []), this.#t = new U(this), this.observe(this.contentTypeUnique, (t) => this.structure.loadType(t), null), this.routes.setRoutes([
      {
        path: u.toString(),
        component: () => import("./media-workspace-editor.element-CGqb9sdw.js"),
        setup: async (t, e) => {
          const r = e.match.params.parentEntityType, n = e.match.params.parentUnique === "null" ? null : e.match.params.parentUnique, i = e.match.params.mediaTypeUnique;
          await this.createScaffold({
            parent: { entityType: r, unique: n },
            preset: { mediaType: { unique: i, collection: null } }
          }), new C(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: T.toString(),
        component: () => import("./media-workspace-editor.element-CGqb9sdw.js"),
        setup: (t, e) => {
          this.removeUmbControllerByAlias(s);
          const r = e.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  #t;
  resetState() {
    super.resetState(), this.#t.setIsTrashed(!1), this.removeUmbControllerByAlias(s);
  }
  async load(a) {
    const t = await super.load(a);
    return t?.data && this.#t.setIsTrashed(t.data.isTrashed), t;
  }
  /*
   * @deprecated Use `createScaffold` instead.
   */
  async create(a, t) {
    const e = {
      parent: a,
      preset: { mediaType: { unique: t, collection: null } }
    };
    return this.createScaffold(e);
  }
  getCollectionAlias() {
    return _;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMediaWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMediaWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.mediaType.unique;
  }
  createPropertyDatasetContext(a, t) {
    return new E(a, this, t);
  }
}
export {
  f as UmbMediaWorkspaceContext,
  f as api
};
//# sourceMappingURL=media-workspace.context-BE7jE5T5.js.map
