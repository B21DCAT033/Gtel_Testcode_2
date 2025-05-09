import { css as z, property as h, customElement as S, when as nt, html as c, state as v, nothing as K } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as B } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/ufm";
import { UmbContextToken as W } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as j } from "@umbraco-cms/backoffice/class-api";
import { UmbStringState as g, UmbArrayState as H, UmbBooleanState as J, UmbObjectState as X, UmbDeepState as lt, UmbClassState as Y, UmbBasicState as F } from "@umbraco-cms/backoffice/observable-api";
import { UmbVariantId as ht } from "@umbraco-cms/backoffice/variant";
import { UmbChangeEvent as pt } from "@umbraco-cms/backoffice/event";
import { UmbPropertyEditorConfigCollection as dt } from "@umbraco-cms/backoffice/property-editor";
import { createExtensionElement as ut, UmbExtensionsApiInitializer as ct } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbObserveValidationStateController as vt, UmbFormControlValidator as yt, UmbBindServerValidationToFormControl as mt } from "@umbraco-cms/backoffice/validation";
import { UMB_MARK_ATTRIBUTE_NAME as bt } from "@umbraco-cms/backoffice/const";
import { UmbRoutePathAddendumContext as _t } from "@umbraco-cms/backoffice/router";
var gt = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, Z = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ft(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (a = (s ? d(e, i, a) : d(a)) || a);
  return s && a && gt(e, i, a), a;
}, Vt = (t, e, i) => e.has(t) || Z("Cannot " + i), Et = (t, e, i) => e.has(t) ? Z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Pt = (t, e, i) => (Vt(t, e, "access private method"), i), R, tt;
let m = class extends D {
  constructor() {
    super(...arguments), Et(this, R), this.alias = "", this.label = "", this.orientation = "horizontal", this.description = "";
  }
  render() {
    return c`
			<div id="headerColumn">
				<uui-label id="label" title=${this.alias} ?required=${this.mandatory}>
					${this.localize.string(this.label)}
					${nt(this.invalid, () => c`<uui-badge color="danger" attention>!</uui-badge>`)}
				</uui-label>
				<slot name="action-menu"></slot>
				${Pt(this, R, tt).call(this)}
				<slot name="description"></slot>
			</div>
			<div id="editorColumn">
				<umb-form-validation-message>
					<slot name="editor"></slot>
				</umb-form-validation-message>
			</div>
		`;
  }
};
R = /* @__PURE__ */ new WeakSet();
tt = function() {
  if (!this.description) return;
  const t = { alias: this.alias, label: this.label, description: this.description };
  return c`<umb-ufm-render id="description" .markdown=${this.description} .value=${t}></umb-ufm-render>`;
};
m.styles = [
  B,
  z`
			:host {
				display: grid;
				grid-template-columns: 200px minmax(0, 1fr);
				column-gap: var(--uui-size-layout-2);
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-layout-1) 0;
			}

			:host(:last-of-type) {
				border-bottom: none;
			}

			:host > div {
				grid-column: span 2;
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) > div {
				grid-column: span 1;
			}
			/*}*/

			#headerColumn {
				position: relative;
				height: min-content;
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) #headerColumn {
				position: sticky;
				top: calc(var(--uui-size-space-2) * -1);
			}
			/*}*/

			#label {
				position: relative;
				word-break: break-word;
			}
			:host([invalid]) #label {
				color: var(--uui-color-danger);
			}
			uui-badge {
				right: -30px;
			}

			#description {
				color: var(--uui-color-text-alt);
			}

			#editorColumn {
				margin-top: var(--uui-size-space-3);
			}
			/*@container (width > 600px) {*/
			:host(:not([orientation='vertical'])) #editorColumn {
				margin-top: 0;
			}
			/*}*/
		`
];
_([
  h({ type: String })
], m.prototype, "alias", 2);
_([
  h({ type: String })
], m.prototype, "label", 2);
_([
  h({ type: String, reflect: !0 })
], m.prototype, "orientation", 2);
_([
  h({ type: String })
], m.prototype, "description", 2);
_([
  h({ type: Boolean, reflect: !0 })
], m.prototype, "invalid", 2);
_([
  h({ type: Boolean, reflect: !0 })
], m.prototype, "mandatory", 2);
m = _([
  S("umb-property-layout")
], m);
const k = new W("UmbPropertyDatasetContext"), Ot = (t) => "setName" in t, jt = new W(k.toString(), void 0, Ot);
class wt extends j {
  // variant id for a specific property?
  constructor(e) {
    super(e, k), this.#e = new g(void 0), this.name = this.#e.asObservable(), this.#t = new H([], (i) => i.alias), this.properties = this.#t.asObservable(), this.values = this.properties, this.#s = new J(!1), this.readOnly = this.#s.asObservable();
  }
  #e;
  #t;
  #s;
  getEntityType() {
    return this._entityType;
  }
  getUnique() {
    return this._unique;
  }
  getName() {
    return this.#e.getValue();
  }
  setName(e) {
    this.#e.setValue(e);
  }
  getVariantId() {
    return ht.CreateInvariant();
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - the alias to observe
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - an Observable for the value of this property.
   */
  async propertyValueByAlias(e) {
    return this.#t.asObservablePart((i) => {
      const s = i.find((a) => a.alias === e);
      return s ? s.value : void 0;
    });
  }
  /**
   * @function setPropertyValue
   * @param {string} alias - The alias to set this value for
   * @param {PromiseLike<unknown>} value - value can be a promise resolving into the actual value or the raw value it self.
   * @description Set the value of this property.
   */
  setPropertyValue(e, i) {
    this.#t.appendOne({ alias: e, value: i });
  }
  /**
   * @deprecated Use `getProperties`
   * @returns {Array<UmbPropertyValueData>} - Array of properties as objects with alias and value properties.
   */
  getValues() {
    return this.#t.getValue();
  }
  /**
   * @param {Array<UmbPropertyValueData>} properties - Properties array with alias and value properties.
   * @deprecated Use `setProperties`
   */
  setValues(e) {
    this.#t.setValue(e);
  }
  /**
   * @returns {Array<UmbPropertyValueData>} - Array of properties as objects with alias and value properties.
   */
  async getProperties() {
    return this.#t.getValue();
  }
  /**
   * @param {Array<UmbPropertyValueData>} properties - Properties array with alias and value properties.
   */
  setProperties(e) {
    this.#t.setValue(e);
  }
  /**
   * Gets the read-only state of the current variant culture.
   * @returns {*}  {boolean}
   */
  getReadOnly() {
    return this.#s.getValue();
  }
}
var Ct = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, et = (t) => {
  throw TypeError(t);
}, L = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ut(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (a = (s ? d(e, i, a) : d(a)) || a);
  return s && a && Ct(e, i, a), a;
}, it = (t, e, i) => e.has(t) || et("Cannot " + i), M = (t, e, i) => (it(t, e, "read from private field"), i ? i.call(t) : e.get(t)), G = (t, e, i) => e.has(t) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), b = (t, e, i, s) => (it(t, e, "write to private field"), e.set(t, i), i), u, w;
let $ = class extends D {
  constructor() {
    super(), G(this, u, !1), G(this, w, () => {
      M(this, u) ? this.dispatchEvent(new pt()) : b(this, u, !0);
    }), this.addEventListener("change", (t) => {
      t.target !== this && t.stopImmediatePropagation();
    }), this.context = new wt(this), b(this, u, !1), this.observe(this.context.name, M(this, w)), b(this, u, !1), this.observe(this.context.properties, M(this, w));
  }
  /**
   * The value of the dataset.
   * @returns {Array<UmbPropertyValueData>} - The value of the dataset
   * @example
   * ```ts
   * const dataSet = [
   * 	{
   * 		alias: 'testAlias',
   * 		value: 'value as a string',
   * 	},
   *  {
   * 		alias: 'anotherAlias',
   * 		value: 123,
   * 	}
   * ]
   *
   * html`
   * <umb-property-dataset .value="${dataSet}">
   * 	<umb-property
   * 		label="My label for this property"
   * 		description="The description to show on the property"
   * 		alias="testAlias"
   * 		property-editor-ui-alias="Umb.PropertyEditorUi.TextBox"
   * 		.config=${...}>
   * 	</umb-property>
   * </umb-property-dataset>
   * `
   * ```
   */
  set value(t) {
    b(this, u, !1), this.context.setValues(t), b(this, u, !0);
  }
  get value() {
    return this.context.getValues();
  }
  /**
   * The name of the dataset, this name varies depending on the use-case. But this is either
   * @property name
   * @type {string}
   * @returns {string}
   * @example
   * ```ts
   * html`
   * <umb-property-dataset name="My variant name">
   * 	...
   * </umb-property-dataset>
   * `
   */
  set name(t) {
    b(this, u, !1), this.context.setName(t), b(this, u, !0);
  }
  get name() {
    return this.context.getName();
  }
  render() {
    return c`<slot></slot>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
L([
  h({ attribute: !1 })
], $.prototype, "value", 1);
L([
  h({ attribute: !1 })
], $.prototype, "name", 1);
$ = L([
  S("umb-property-dataset")
], $);
class At extends j {
  constructor(e) {
    super(e, xt), this.#e = new g(void 0), this.alias = this.#e.asObservable(), this.#t = new g(void 0), this.label = this.#t.asObservable(), this.#s = new g(void 0), this.description = this.#s.asObservable(), this.#o = new X(void 0), this.appearance = this.#o.asObservable(), this.#n = new lt(void 0), this.value = this.#n.asObservable(), this.#l = new H([], (i) => i.alias), this.configValues = this.#l.asObservable(), this.#p = new Y(void 0), this.config = this.#p.asObservable(), this.#r = new X(void 0), this.validation = this.#r.asObservable(), this.validationMandatory = this.#r.asObservablePart((i) => i?.mandatory), this.validationMandatoryMessage = this.#r.asObservablePart((i) => i?.mandatoryMessage), this.#d = new g(void 0), this.dataPath = this.#d.asObservable(), this.#u = new F(void 0), this.editor = this.#u.asObservable(), this.#c = new F(void 0), this.editorManifest = this.#c.asObservable(), this.#h = new J(!1), this.isReadOnly = this.#h.asObservable(), this.#a = new Y(void 0), this.variantId = this.#a.asObservable(), this.#v = new g(void 0), this.variantDifference = this.#v.asObservable(), this.consumeContext(k, (i) => {
      this.#i = i, this.setVariantId(i.getVariantId?.()), this._generateVariantDifferenceString(), this._observeProperty();
    }), this.observe(
      this.alias,
      () => {
        this._observeProperty();
      },
      null
    ), this.observe(
      this.configValues,
      (i) => {
        this.#p.setValue(i ? new dt(i) : void 0);
      },
      null
    ), this.observe(
      this.variantId,
      () => {
        this._generateVariantDifferenceString();
      },
      null
    );
  }
  #e;
  #t;
  #s;
  #o;
  #n;
  #l;
  #p;
  #r;
  #d;
  #u;
  #c;
  #h;
  /**
   * Set the property editor UI element for this property.
   * @param {UmbPropertyEditorUiElement | undefined} editorElement The property editor UI element
   */
  setEditor(e) {
    this.#u.setValue(e ?? void 0);
  }
  /**
   * Get the property editor UI element for this property.
   * @returns {UmbPropertyEditorUiElement | undefined} The property editor UI element
   */
  getEditor() {
    return this.#u.getValue();
  }
  /**
   * Set the property editor manifest for this property.
   * @param {ManifestPropertyEditorUi | undefined} manifest The property editor manifest
   */
  setEditorManifest(e) {
    this.#c.setValue(e ?? void 0);
  }
  /**
   * Get the property editor manifest for this property.
   * @returns {UmbPropertyEditorUiElement | undefined} The property editor manifest
   */
  getEditorManifest() {
    return this.#c.getValue();
  }
  #a;
  #v;
  #i;
  async _observeProperty() {
    const e = this.#e.getValue();
    !this.#i || !e || (this.observe(
      await this.#i.propertyVariantId?.(e),
      (i) => {
        this.#a.setValue(i);
      },
      "observeVariantId"
    ), this.observe(
      await this.#i.propertyValueByAlias(e),
      (i) => {
        this.#n.setValue(i);
      },
      "observeValue"
    ), this.observe(this.#i.readOnly, (i) => {
      this.#h.setValue(i);
    }));
  }
  _generateVariantDifferenceString() {
    if (!this.#i) return;
    const e = this.#i.getVariantId?.() ?? void 0, i = this.#a.getValue();
    let s;
    e && i && (e.segment !== i.segment && (s = "Shared across culture"), e.culture !== i.culture && (s = "Shared")), this.#v.setValue(s);
  }
  /**
   * Set the alias of this property.
   * @param {string | undefined} alias - The alias of the property
   * @memberof UmbPropertyContext
   */
  setAlias(e) {
    this.#e.setValue(e);
  }
  /**
   * Get the alias of this property.
   * @returns {*}  {(string | undefined)}
   * @memberof UmbPropertyContext
   */
  getAlias() {
    return this.#e.getValue();
  }
  /**
   * Set the label of this property.
   * @param {(string | undefined)} label - The label of the property
   * @memberof UmbPropertyContext
   */
  setLabel(e) {
    this.#t.setValue(e);
  }
  /**
   * Get the label of this property.
   * @returns {(string | undefined)} - the label
   * @memberof UmbPropertyContext
   */
  getLabel() {
    return this.#t.getValue();
  }
  /**
   * Set the description of this property.
   * @param {(string | undefined)} description
   * @memberof UmbPropertyContext
   */
  setDescription(e) {
    this.#s.setValue(e);
  }
  /**
   * Get the description of this property.
   * @returns {*}  {(string | undefined)}
   * @memberof UmbPropertyContext
   */
  getDescription() {
    return this.#s.getValue();
  }
  /**
   * Set the appearance of this property.
   * @param {UmbPropertyTypeAppearanceModel | undefined} appearance - the appearance properties of this property
   * @memberof UmbPropertyContext
   */
  setAppearance(e) {
    this.#o.setValue(e);
  }
  /**
   * Get the appearance of this property.
   * @returns {UmbPropertyTypeAppearanceModel | undefined}- the appearance properties of this property
   * @memberof UmbPropertyContext
   */
  getAppearance() {
    return this.#o.getValue();
  }
  /**
   * Set the value of this property.
   * @param {unknown} value - the whole value to be set
   */
  setValue(e) {
    const i = this.#e.getValue();
    !this.#i || !i || this.#i?.setPropertyValue(i, e);
  }
  /**
   * Gets the current value of this property.
   * Notice this is not reactive, you should us the `value` observable for that.
   * @returns {unknown} - the current value of this property
   */
  getValue() {
    return this.#n.getValue();
  }
  /**
   * Set the config of this property.
   * @param {Array<UmbPropertyEditorConfigProperty> | undefined} config - Array of configurations for this property
   * @memberof UmbPropertyContext
   */
  setConfig(e) {
    this.#l.setValue(e ?? []);
  }
  /**
   * Get the config of this property.
   * @returns {Array<UmbPropertyEditorConfigProperty> | undefined} - Array of configurations for this property
   * @memberof UmbPropertyContext
   */
  getConfig() {
    return this.#l.getValue();
  }
  /**
   * Set the variant ID of this property.
   * @param {UmbVariantId | undefined} variantId - The property Variant ID, not necessary the same as the Property Dataset Context VariantId.
   * @memberof UmbPropertyContext
   */
  setVariantId(e) {
    this.#a.setValue(e);
  }
  /**
   * Get the variant ID of this property.
   * @returns {UmbVariantId | undefined} - The property Variant ID, not necessary the same as the Property Dataset Context VariantId.
   * @memberof UmbPropertyContext
   */
  getVariantId() {
    return this.#a.getValue();
  }
  /**
   * Set the validation of this property.
   * @param {UmbPropertyTypeValidationModel | undefined} validation - Object holding the Validation Properties.
   * @memberof UmbPropertyContext
   */
  setValidation(e) {
    this.#r.setValue(e);
  }
  /**
   * Get the validation of this property.
   * @returns {UmbPropertyTypeValidationModel | undefined} - Object holding the Validation Properties.
   * @memberof UmbPropertyContext
   */
  getValidation() {
    return this.#r.getValue();
  }
  /**
   * Get the read only state of this property
   * @returns {boolean} - If property is in read-only mode.
   * @memberof UmbPropertyContext
   */
  getIsReadOnly() {
    return this.#h.getValue();
  }
  setDataPath(e) {
    this.#d.setValue(e);
  }
  getDataPath() {
    return this.#d.getValue();
  }
  /**
   * Reset the value of this property.
   * @memberof UmbPropertyContext
   */
  resetValue() {
    this.setValue(void 0);
  }
  /**
   * Clear the value of this property.
   * @memberof UmbPropertyContext
   */
  clearValue() {
    this.setValue(void 0);
  }
  destroy() {
    super.destroy(), this.#e.destroy(), this.#t.destroy(), this.#s.destroy(), this.#o.destroy(), this.#l.destroy(), this.#n.destroy(), this.#p.destroy(), this.#h.destroy(), this.#i = void 0;
  }
}
const xt = new W("UmbPropertyContext");
var $t = Object.defineProperty, St = Object.getOwnPropertyDescriptor, st = (t) => {
  throw TypeError(t);
}, l = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? St(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (a = (s ? d(e, i, a) : d(a)) || a);
  return s && a && $t(e, i, a), a;
}, N = (t, e, i) => e.has(t) || st("Cannot " + i), r = (t, e, i) => (N(t, e, "read from private field"), i ? i.call(t) : e.get(t)), y = (t, e, i) => e.has(t) ? st("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), f = (t, e, i, s) => (N(t, e, "write to private field"), e.set(t, i), i), T = (t, e, i) => (N(t, e, "access private method"), i), o, I, C, V, U, A, x, E, P, rt, at, ot;
let n = class extends D {
  constructor() {
    super(), y(this, P), this._orientation = "horizontal", this._supportsReadOnly = !1, this._isReadOnly = !1, y(this, o, new At(this)), y(this, I, new _t(this)), y(this, C), y(this, V), y(this, U), y(this, A), y(this, x), y(this, E), this._onPropertyEditorChange = (t) => {
      const e = t.composedPath()[0];
      if (this._element !== e) {
        console.error(
          "Property Editor received a Change Event who's target is not the Property Editor Element. Do not make bubble and composed change events."
        );
        return;
      }
      r(this, o).setValue(e.value), t.stopPropagation();
    }, this.observe(
      r(this, o).alias,
      (t) => {
        this._alias = t, r(this, I).setAddendum(t);
      },
      null
    ), this.observe(
      r(this, o).label,
      (t) => {
        this._label = t, this._element && (this._element.name = t);
      },
      null
    ), this.observe(
      r(this, o).description,
      (t) => {
        this._description = t;
      },
      null
    ), this.observe(
      r(this, o).variantDifference,
      (t) => {
        this._variantDifference = t;
      },
      null
    ), this.observe(
      r(this, o).appearance,
      (t) => {
        this._orientation = t?.labelOnTop ? "vertical" : "horizontal";
      },
      null
    ), this.observe(
      r(this, o).validationMandatory,
      (t) => {
        this._mandatory = t, this._element && (this._element.mandatory = t);
      },
      null
    ), this.observe(
      r(this, o).isReadOnly,
      (t) => {
        this._isReadOnly = t, this._element?.toggleAttribute("readonly", t);
      },
      null
    );
  }
  set label(t) {
    r(this, o).setLabel(t);
  }
  get label() {
    return r(this, o).getLabel();
  }
  set description(t) {
    r(this, o).setDescription(t);
  }
  get description() {
    return r(this, o).getDescription();
  }
  set appearance(t) {
    r(this, o).setAppearance(t);
  }
  get appearance() {
    return r(this, o).getAppearance();
  }
  set alias(t) {
    this.setAttribute(bt, "property:" + t), r(this, o).setAlias(t);
  }
  get alias() {
    return r(this, o).getAlias() ?? "";
  }
  set propertyEditorUiAlias(t) {
    this._propertyEditorUiAlias = t, this._observePropertyEditorUI();
  }
  get propertyEditorUiAlias() {
    return this._propertyEditorUiAlias ?? "";
  }
  set config(t) {
    r(this, o).setConfig(t);
  }
  get config() {
    return r(this, o).getConfig();
  }
  set validation(t) {
    r(this, o).setValidation(t);
  }
  get validation() {
    return r(this, o).getValidation();
  }
  set dataPath(t) {
    r(this, o).setDataPath(t), new vt(this, t, (e) => {
      this._invalid = e;
    });
  }
  get dataPath() {
    return r(this, o).getDataPath();
  }
  _observePropertyEditorUI() {
    this._propertyEditorUiAlias && this.observe(
      Q.byTypeAndAlias("propertyEditorUi", this._propertyEditorUiAlias),
      (t) => {
        this._gotEditorUI(t);
      },
      "_observePropertyEditorUI"
    );
  }
  async _gotEditorUI(t) {
    if (r(this, E)?.destroy(), r(this, o).setEditor(void 0), r(this, o).setEditorManifest(t ?? void 0), !t)
      return;
    const e = await ut(t);
    if (this._supportsReadOnly = t.meta.supportsReadOnly || !1, e) {
      const i = this._element;
      if (r(this, U)?.destroy(), r(this, A)?.destroy(), r(this, x)?.destroy(), r(this, C)?.destroy(), i?.removeEventListener("change", this._onPropertyEditorChange), i?.removeEventListener("property-value-change", this._onPropertyEditorChange), i?.destroy?.(), this._element = e, r(this, o).setEditor(this._element), this._element) {
        if (this._element.addEventListener("change", this._onPropertyEditorChange), this._element.addEventListener("property-value-change", this._onPropertyEditorChange), this._element.mandatory = this._mandatory, this._element.name = this._label, f(this, U, this.observe(
          r(this, o).value,
          (s) => {
            this._element.value = s, r(this, V) && (r(this, V).value = s);
          },
          null
        )), f(this, A, this.observe(
          r(this, o).config,
          (s) => {
            s && (this._element.config = s);
          },
          null
        )), f(this, x, this.observe(
          r(this, o).validationMandatoryMessage,
          (s) => {
            s && (this._element.mandatoryMessage = s ?? void 0);
          },
          null
        )), "checkValidity" in this._element) {
          const s = this.dataPath;
          f(this, C, new yt(this, this._element, s)), s && (f(this, V, new mt(
            this,
            this._element,
            s
          )), r(this, V).value = r(this, o).getValue());
        }
        this._element.toggleAttribute("readonly", this._isReadOnly), T(this, P, rt).call(this, t);
      }
      this.requestUpdate("element", i);
    }
  }
  render() {
    return c`
			<umb-property-layout
				id="layout"
				.alias=${this._alias ?? ""}
				.label=${this._label ?? ""}
				.description=${this._description ?? ""}
				.orientation=${this._orientation ?? "horizontal"}
				?mandatory=${this._mandatory}
				?invalid=${this._invalid}>
				${T(this, P, at).call(this)}
				${this._variantDifference ? c`<div id="variant-info" slot="description">
							<uui-tag look="secondary">${this._variantDifference}</uui-tag>
						</div> ` : ""}
				${T(this, P, ot).call(this)}
			</umb-property-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakSet();
rt = function(t) {
  r(this, E) && r(this, E).destroy(), f(this, E, new ct(
    this,
    Q,
    "propertyContext",
    [],
    (e) => e.forPropertyEditorUis.includes(t.alias)
  ));
};
at = function() {
  return this._propertyEditorUiAlias ? c`
			<umb-property-action-menu
				slot="action-menu"
				id="action-menu"
				.propertyEditorUiAlias=${this._propertyEditorUiAlias}>
			</umb-property-action-menu>
		` : K;
};
ot = function() {
  return c`
			<div id="editor" slot="editor">
				${this._isReadOnly && this._supportsReadOnly === !1 ? c`<div id="overlay"></div>` : K}
				${this._element}
			</div>
		`;
};
n.styles = [
  B,
  z`
			:host {
				display: block;
			}

			p {
				color: var(--uui-color-text-alt);
			}

			#action-menu {
				opacity: 0;
				transition: opacity 90ms;
			}

			#layout:focus-within #action-menu,
			#layout:hover #action-menu,
			#action-menu[open] {
				opacity: 1;
			}

			#variant-info {
				opacity: 0;
				transition: opacity 90ms;
				margin-top: var(--uui-size-space-2);
				margin-left: calc(var(--uui-size-space-1) * -1);
			}

			#layout:focus-within #variant-info,
			#layout:hover #variant-info {
				opacity: 1;
			}

			#editor {
				position: relative;
			}

			#overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: white;
				opacity: 0.5;
				z-index: 1000;
			}
		`
];
l([
  h({ type: String })
], n.prototype, "label", 1);
l([
  h({ type: String })
], n.prototype, "description", 1);
l([
  h({ type: Object, attribute: !1 })
], n.prototype, "appearance", 1);
l([
  h({ type: String })
], n.prototype, "alias", 1);
l([
  h({ type: String, attribute: "property-editor-ui-alias" })
], n.prototype, "propertyEditorUiAlias", 1);
l([
  h({ type: Array, attribute: !1 })
], n.prototype, "config", 1);
l([
  h({ type: Object, attribute: !1 })
], n.prototype, "validation", 1);
l([
  h({ type: String, attribute: "data-path" })
], n.prototype, "dataPath", 1);
l([
  v()
], n.prototype, "_variantDifference", 2);
l([
  v()
], n.prototype, "_element", 2);
l([
  v()
], n.prototype, "_invalid", 2);
l([
  v()
], n.prototype, "_alias", 2);
l([
  v()
], n.prototype, "_label", 2);
l([
  v()
], n.prototype, "_description", 2);
l([
  v()
], n.prototype, "_orientation", 2);
l([
  v()
], n.prototype, "_mandatory", 2);
l([
  v()
], n.prototype, "_supportsReadOnly", 2);
l([
  v()
], n.prototype, "_isReadOnly", 2);
n = l([
  S("umb-property")
], n);
var Dt = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, q = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Mt(e, i) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (a = (s ? d(e, i, a) : d(a)) || a);
  return s && a && Dt(e, i, a), a;
};
let O = class extends D {
  constructor() {
    super(...arguments), this.alias = "", this.schema = "";
  }
  render() {
    return c`<div id="not-supported">
			<umb-localize key="blockEditor_propertyEditorNotSupported" .args=${[this.alias, this.schema]}></umb-localize>
		</div>`;
  }
};
O.styles = [
  B,
  z`
			:host {
				display: block;
				padding: var(--uui-size-layout-1) 0;
			}

			#not-supported {
				background-color: var(--uui-color-danger);
				color: var(--uui-color-surface);
				padding: var(--uui-size-space-4);
				border-radius: var(--uui-border-radius);
			}
		`
];
q([
  h({ type: String })
], O.prototype, "alias", 2);
q([
  h({ type: String })
], O.prototype, "schema", 2);
O = q([
  S("umb-unsupported-property")
], O);
export {
  xt as U,
  m as a,
  At as b,
  n as c,
  O as d,
  jt as e,
  wt as f,
  k as g,
  $ as h,
  Ot as i
};
//# sourceMappingURL=unsupported-property.element-BLTHB_ZJ.js.map
