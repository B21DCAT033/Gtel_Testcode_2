import { DynamicRootService as C } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as T } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as q } from "@umbraco-cms/backoffice/class-api";
import { html as P, property as E, state as a, customElement as R } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as N } from "@umbraco-cms/backoffice/validation";
import { UmbPropertyValueChangeEvent as $ } from "@umbraco-cms/backoffice/property-editor";
import { UMB_DOCUMENT_ENTITY_TYPE as b } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_ENTITY_TYPE as D } from "@umbraco-cms/backoffice/media";
import { UMB_MEMBER_ENTITY_TYPE as I } from "@umbraco-cms/backoffice/member";
import "./input-content.element-B1BDh2NT.js";
class S {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get dynamic root
   * @param {DynamicRootRequestModel} args
   * @returns {*}  {(Promise<DynamicRootResponseModel | undefined>)}
   * @memberof UmbContentPickerDynamicRootServerDataSource
   */
  async getRoot(t) {
    if (!t.context) throw new Error("Dynamic Root context is missing");
    if (!t.query) throw new Error("Dynamic Root query is missing");
    const i = {
      context: t.context,
      query: t.query
    }, { data: r } = await T(this.#t, C.postDynamicRootQuery({ requestBody: i }));
    return r;
  }
}
const k = "00000000-0000-0000-0000-000000000000";
class O extends q {
  #t;
  constructor(t) {
    super(t), this.#t = new S(t);
  }
  /**
   * Request dynamic root
   * @param {UmbContentPickerDynamicRoot} query
   * @param {string} entityUnique
   * @param {string} [parentUnique]
   * @returns {*}
   * @memberof UmbContentPickerDynamicRootRepository
   */
  async requestRoot(t, i, r) {
    const o = {
      context: {
        id: i,
        parent: { id: r ?? k }
      },
      query: {
        origin: {
          alias: t.originAlias,
          id: t.originKey
        },
        steps: t.querySteps?.map((p) => ({
          alias: p.alias,
          documentTypeIds: p.anyOfDocTypeKeys
        })) || []
      }
    };
    return (await this.#t.getRoot(o))?.roots;
  }
}
var A = Object.defineProperty, W = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, s = (e, t, i, r) => {
  for (var o = r > 1 ? void 0 : r ? W(t, i) : t, m = e.length - 1, p; m >= 0; m--)
    (p = e[m]) && (o = (r ? p(t, i, o) : p(o)) || o);
  return r && o && A(t, i, o), o;
}, v = (e, t, i) => t.has(e) || U("Cannot " + i), h = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), c = (e, t, i) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), x = (e, t, i, r) => (v(e, t, "write to private field"), t.set(e, i), i), y = (e, t, i) => (v(e, t, "access private method"), i), _, l, w, d, u, f, g, M;
const V = "umb-property-editor-ui-content-picker";
let n = class extends N(B, void 0) {
  constructor() {
    super(...arguments), c(this, u), c(this, _, []), this.readonly = !1, this._type = "content", this._min = 0, this._minMessage = "", this._max = 1 / 0, this._maxMessage = "", c(this, l), c(this, w, new O(this)), c(this, d, {
      content: b,
      media: D,
      member: I
    });
  }
  set value(e) {
    x(this, _, e);
  }
  get value() {
    return h(this, _);
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("startNode");
    t && (this._type = t.type, this._rootUnique = t.id, this._rootEntityType = h(this, d)[t.type], x(this, l, t.dynamicRoot)), this._min = y(this, u, f).call(this, e.getValueByAlias("minNumber"), 0), this._max = y(this, u, f).call(this, e.getValueByAlias("maxNumber"), 1 / 0), this._allowedContentTypeUniques = e.getValueByAlias("filter"), this._showOpenButton = e.getValueByAlias("showOpenButton"), this._minMessage = `${this.localize.term("validation_minCount")} ${this._min} ${this.localize.term("validation_items")}`, this._maxMessage = `${this.localize.term("validation_maxCount")} ${this._max} ${this.localize.term("validation_itemsSelected")}`, (this._min > 0 || this._max < 1 / 0) && this.checkValidity();
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-content")), y(this, u, g).call(this), this._min && this._max && this._min > this._max && console.warn(
      "Property (Content Picker) has been misconfigured, 'minNumber' is greater than 'maxNumber'. Please correct your data type configuration.",
      this
    );
  }
  focus() {
    return this.shadowRoot?.querySelector("umb-input-content")?.focus();
  }
  render() {
    const e = this._rootUnique && this._rootEntityType ? { unique: this._rootUnique, entityType: this._rootEntityType } : void 0;
    return P`
			<umb-input-content
				.selection=${this.value ?? []}
				.type=${this._type}
				.min=${this._min}
				.minMessage=${this._minMessage}
				.max=${this._max}
				.maxMessage=${this._maxMessage}
				.startNode=${e}
				.allowedContentTypeIds=${this._allowedContentTypeUniques ?? ""}
				?showOpenButton=${this._showOpenButton}
				?readonly=${this.readonly}
				@change=${y(this, u, M)}></umb-input-content>
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
f = function(e, t) {
  const i = Number(e);
  return !isNaN(i) && i > 0 ? i : t;
};
g = async function() {
  if (this._rootUnique || !h(this, l)) return;
  const e = await this.getContext("UmbMenuStructureWorkspaceContext"), t = await this.observe(e.structure, () => {
  })?.asPromise(), [i, r] = t?.slice(-2).map((m) => m.unique) ?? [];
  if (!r) return;
  const o = await h(this, w).requestRoot(h(this, l), r, i);
  o && o.length > 0 && (this._rootUnique = o[0]);
};
M = function(e) {
  this.value = e.target.selection, this.dispatchEvent(new $());
};
s([
  E({ type: Array })
], n.prototype, "value", 1);
s([
  E({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 2);
s([
  a()
], n.prototype, "_type", 2);
s([
  a()
], n.prototype, "_min", 2);
s([
  a()
], n.prototype, "_minMessage", 2);
s([
  a()
], n.prototype, "_max", 2);
s([
  a()
], n.prototype, "_maxMessage", 2);
s([
  a()
], n.prototype, "_allowedContentTypeUniques", 2);
s([
  a()
], n.prototype, "_showOpenButton", 2);
s([
  a()
], n.prototype, "_rootUnique", 2);
s([
  a()
], n.prototype, "_rootEntityType", 2);
n = s([
  R(V)
], n);
export {
  n as UmbPropertyEditorUIContentPickerElement,
  n as element
};
//# sourceMappingURL=property-editor-ui-content-picker.element-DWmuuQDI.js.map
