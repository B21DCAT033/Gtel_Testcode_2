import { U as d } from "./property-type-workspace.context-token-Cbb8UB1S.js";
import { UmbTextStyles as y } from "@umbraco-cms/backoffice/style";
import { html as v, css as _, state as u, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbSubmittableWorkspaceContextBase as f, umbObjectToPropertyValueArray as l, UmbWorkspaceIsNewRedirectController as P, UmbWorkspaceIsNewRedirectControllerAlias as C, UmbInvariantWorkspacePropertyDatasetContext as T } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as E } from "@umbraco-cms/backoffice/observable-api";
import { UMB_CONTENT_TYPE_WORKSPACE_CONTEXT as O } from "@umbraco-cms/backoffice/content-type";
import { UmbId as U } from "@umbraco-cms/backoffice/id";
import { firstValueFrom as g } from "@umbraco-cms/backoffice/external/rxjs";
var N = Object.defineProperty, x = Object.getOwnPropertyDescriptor, m = (s) => {
  throw TypeError(s);
}, h = (s, t, e, a) => {
  for (var r = a > 1 ? void 0 : a ? x(t, e) : t, i = s.length - 1, o; i >= 0; i--)
    (o = s[i]) && (r = (a ? o(t, e, r) : o(r)) || r);
  return a && r && N(t, e, r), r;
}, c = (s, t, e) => t.has(s) || m("Cannot " + e), S = (s, t, e) => (c(s, t, "read from private field"), t.get(s)), V = (s, t, e) => t.has(s) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), q = (s, t, e, a) => (c(s, t, "write to private field"), t.set(s, e), e), p;
let n = class extends b {
  constructor() {
    super(), V(this, p), this.consumeContext(d, (s) => {
      q(this, p, s), this.observe(s.isNew, (t) => {
        this._isNew = t;
      }), this.observe(s.name, (t) => {
        this._name = t;
      }), S(this, p)?.createPropertyDatasetContext(this);
    });
  }
  render() {
    return this._isNew !== void 0 ? v`
					<umb-workspace-editor
						headline=${this.localize.term(
      this._isNew ? "contentTypeEditor_addProperty" : "contentTypeEditor_editProperty",
      [this._name]
    )}>
					</umb-workspace-editor>
				` : "";
  }
};
p = /* @__PURE__ */ new WeakMap();
n.styles = [
  y,
  _`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
h([
  u()
], n.prototype, "_isNew", 2);
h([
  u()
], n.prototype, "_name", 2);
n = h([
  w("umb-property-type-workspace-editor")
], n);
class K extends f {
  constructor(t, e) {
    super(t, e.manifest.alias), this.IS_PROPERTY_TYPE_WORKSPACE_CONTEXT = !0, this.#t = new E(void 0), this.data = this.#t.asObservable(), this.name = this.#t.asObservablePart((r) => r?.name), this.unique = this.#t.asObservablePart((r) => r?.id), this.values = this.#t.asObservablePart((r) => l(r));
    const a = e.manifest;
    this.#r = a.meta?.entityType, this.#s = this.consumeContext(O, (r) => {
      this.#e = r;
    }).skipHost().asPromise(), this.routes.setRoutes([
      {
        // Would it make more sense to have groupKey before elementTypeKey?
        path: "create/:containerUnique",
        component: n,
        setup: async (r, i) => {
          const o = i.match.params.containerUnique === "null" ? null : i.match.params.containerUnique;
          await this.create(o), new P(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: n,
        setup: (r, i) => {
          const o = i.match.params.unique;
          this.load(o);
        }
      }
    ]);
  }
  #s;
  #e;
  #r;
  #t;
  async getValues() {
    return l(await g(this.data));
  }
  resetState() {
    super.resetState(), this.#t.setValue(void 0), this.removeUmbControllerByAlias(C), this.removeUmbControllerByAlias("observePropertyTypeData");
  }
  createPropertyDatasetContext(t) {
    return new T(t, this);
  }
  async load(t) {
    this.resetState(), await this.#s, this.observe(
      await this.#e?.structure.propertyStructureById(t),
      (e) => {
        e ? (this.#t.setValue(e), this.setIsNew(!1)) : this.#t.setValue(void 0);
      },
      "observePropertyTypeData"
    );
  }
  async create(t) {
    this.resetState();
    let e = {
      id: U.new(),
      container: t ? { id: t } : null,
      alias: "",
      name: "",
      description: "",
      variesByCulture: !1,
      variesBySegment: !1,
      validation: {
        mandatory: !1,
        mandatoryMessage: null,
        regEx: null,
        regExMessage: null
      },
      appearance: {
        labelOnTop: !1
      },
      sortOrder: 0
    };
    this.modalContext && (e = { ...e, ...this.modalContext.data.preset }), this.#t.setValue(e), this.setIsNew(!0);
  }
  getData() {
    return this.#t.getValue();
  }
  updateData(t) {
    this.#t?.update(t);
  }
  getUnique() {
    return this.getData().id;
  }
  getEntityType() {
    return this.#r;
  }
  getName() {
    return this.#t.getValue()?.name;
  }
  setName(t) {
    this.updateData({ name: t });
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return this.#t.asObservablePart((e) => e?.[t]);
  }
  getPropertyValue(t) {
    return this.#t.getValue()?.[t];
  }
  /**
   * @function setPropertyValue
   * @param {string} propertyAlias
   * @param alias
   * @param {PromiseLike<unknown>} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(t, e) {
    const a = this.#t.value;
    a && this.#t.update({ ...a, [t]: e });
  }
  async submit() {
    if (!this.modalContext)
      throw new Error("Needs to be in a modal to submit.");
    const t = this.modalContext.data.contentTypeUnique, e = this.#t.getValue();
    if (!e)
      throw new Error("No data to submit.");
    if (await this.#s, this.#e)
      await this.#e.structure.insertProperty(t, e), this.setIsNew(!1);
    else
      throw new Error("Failed to find content type context.");
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
export {
  K as UmbPropertyTypeWorkspaceContext,
  K as api
};
//# sourceMappingURL=property-type-workspace.context-CybvOaRY.js.map
