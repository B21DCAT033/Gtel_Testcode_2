import { UMB_PROPERTY_CONTEXT as c } from "@umbraco-cms/backoffice/property";
import { ifDefined as m, html as y, property as h, state as l, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as d } from "@umbraco-cms/backoffice/property-editor";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import "./tags-input.element-DrOuVmGf.js";
var E = Object.defineProperty, P = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, s = (e, t, r, p) => {
  for (var o = p > 1 ? void 0 : p ? P(t, r) : t, u = e.length - 1, i; u >= 0; u--)
    (i = e[u]) && (o = (p ? i(t, r, o) : i(o)) || o);
  return p && o && E(t, r, o), o;
}, T = (e, t, r) => t.has(e) || _("Cannot " + r), U = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r) => (T(e, t, "access private method"), r), n, v;
let a = class extends f {
  constructor() {
    super(), U(this, n), this._value = [], this.readonly = !1, this.consumeContext(c, (e) => {
      this.observe(e.variantId, (t) => {
        t && t.culture !== void 0 && (this._culture = t.culture);
      });
    });
  }
  set value(e) {
    this._value = e || [];
  }
  get value() {
    return this._value;
  }
  //TODO: Use type from VariantID
  set config(e) {
    this._group = e?.getValueByAlias("group"), this._storageType = e?.getValueByAlias("storageType");
  }
  render() {
    return y`<umb-tags-input
			group=${m(this._group)}
			.culture=${this._culture}
			.items=${this.value}
			@change=${C(this, n, v)}
			?readonly=${this.readonly}></umb-tags-input>`;
  }
};
n = /* @__PURE__ */ new WeakSet();
v = function(e) {
  this.value = e.target.value.split(","), this.dispatchEvent(new d());
};
s([
  h({ type: Array })
], a.prototype, "value", 1);
s([
  h({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
s([
  l()
], a.prototype, "_group", 2);
s([
  l()
], a.prototype, "_storageType", 2);
s([
  l()
], a.prototype, "_culture", 2);
a = s([
  g("umb-property-editor-ui-tags")
], a);
const B = a;
export {
  a as UmbPropertyEditorUITagsElement,
  B as default
};
//# sourceMappingURL=property-editor-ui-tags.element-CpXFqu3_.js.map
