import { html as u, property as v, state as h, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as l } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as y } from "@umbraco-cms/backoffice/property-editor";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, o = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? E(t, r) : t, p = e.length - 1, s; p >= 0; p--)
    (s = e[p]) && (a = (n ? s(t, r, a) : s(a)) || a);
  return n && a && f(t, r, a), a;
}, P = (e, t, r) => t.has(e) || _("Cannot " + r), x = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r) => (P(e, t, "access private method"), r), m, c;
let i = class extends l {
  constructor() {
    super(...arguments), x(this, m), this._min = 0, this._max = 1 / 0;
  }
  set config(e) {
    if (!e) return;
    const t = e?.getValueByAlias("validationLimit");
    this._min = t?.min ?? 0, this._max = t?.max ?? 1 / 0;
  }
  render() {
    return u`
			<umb-input-media-type .min=${this._min} .max=${this._max} .value=${this.value} @change=${U(this, m, c)}>
			</umb-input-media-type>
		`;
  }
};
m = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = e.target.value, this.dispatchEvent(new y());
};
o([
  v()
], i.prototype, "value", 2);
o([
  h()
], i.prototype, "_min", 2);
o([
  h()
], i.prototype, "_max", 2);
i = o([
  d("umb-property-editor-ui-media-type-picker")
], i);
const w = i;
export {
  i as UmbPropertyEditorUIMediaTypePickerElement,
  w as default
};
//# sourceMappingURL=property-editor-ui-media-type-picker.element-_qq7DpxF.js.map
