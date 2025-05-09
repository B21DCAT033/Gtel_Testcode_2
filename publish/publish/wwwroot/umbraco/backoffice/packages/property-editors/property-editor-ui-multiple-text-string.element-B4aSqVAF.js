import { html as _, property as p, state as u, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as y, umbBindToValidation as f } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as b } from "@umbraco-cms/backoffice/property-editor";
import { UMB_PROPERTY_CONTEXT as g } from "@umbraco-cms/backoffice/property";
var v = Object.defineProperty, E = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, a = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? E(e, r) : e, s = t.length - 1, l; s >= 0; s--)
    (l = t[s]) && (o = (n ? l(e, r, o) : l(o)) || o);
  return n && o && v(e, r, o), o;
}, P = (t, e, r) => e.has(t) || h("Cannot " + r), U = (t, e, r) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), C = (t, e, r) => (P(t, e, "access private method"), r), m, d;
let i = class extends y(x) {
  constructor() {
    super(), U(this, m), this.disabled = !1, this.readonly = !1, this.required = !1, this._min = 0, this._max = 1 / 0, this.consumeContext(g, (t) => {
      this._label = t.getLabel();
    });
  }
  set config(t) {
    t && (this._min = Number(t.getValueByAlias("min")) || 0, this._max = Number(t.getValueByAlias("max")) || 1 / 0);
  }
  firstUpdated() {
    this._min && this._max && this._min > this._max && console.warn(
      `Property '${this._label}' (Multiple Text String) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
      this
    ), this.addFormControlElement(this.shadowRoot.querySelector("umb-input-multiple-text-string"));
  }
  render() {
    return _`
			<umb-input-multiple-text-string
				max=${this._max}
				min=${this._min}
				.items=${this.value ?? []}
				?disabled=${this.disabled}
				?readonly=${this.readonly}
				?required=${this.required}
				@change=${C(this, m, d)}
				${f(this)}>
			</umb-input-multiple-text-string>
		`;
  }
};
m = /* @__PURE__ */ new WeakSet();
d = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this.value = e.items, this.dispatchEvent(new b());
};
a([
  p({ type: Boolean, reflect: !0 })
], i.prototype, "disabled", 2);
a([
  p({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
a([
  p({ type: Boolean, reflect: !0 })
], i.prototype, "required", 2);
a([
  u()
], i.prototype, "_label", 2);
a([
  u()
], i.prototype, "_min", 2);
a([
  u()
], i.prototype, "_max", 2);
i = a([
  c("umb-property-editor-ui-multiple-text-string")
], i);
const S = i;
export {
  i as UmbPropertyEditorUIMultipleTextStringElement,
  S as default
};
//# sourceMappingURL=property-editor-ui-multiple-text-string.element-B4aSqVAF.js.map
