import { html as d, property as f, state as w, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as b } from "@umbraco-cms/backoffice/property-editor";
var C = Object.defineProperty, L = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, h = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? L(t, r) : t, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (a = (o ? p(t, r, a) : p(a)) || a);
  return o && a && C(t, r, a), a;
}, v = (e, t, r) => t.has(e) || m("Cannot " + r), c = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), u = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r) => (v(e, t, "access private method"), r), i, n, _;
let s = class extends y {
  constructor() {
    super(...arguments), u(this, n), u(this, i, !1), this.value = [], this._showLabels = c(this, i);
  }
  set config(e) {
    this._showLabels = e?.getValueByAlias("useLabel") ?? c(this, i);
  }
  render() {
    return d`
			<umb-multiple-color-picker-input
				.items=${this.value}
				?showLabels=${this._showLabels}
				@change=${P(this, n, _)}></umb-multiple-color-picker-input>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  this.value = e.target.items, this.dispatchEvent(new b());
};
h([
  f({ type: Array })
], s.prototype, "value", 2);
h([
  w()
], s.prototype, "_showLabels", 2);
s = h([
  E("umb-property-editor-ui-color-swatches-editor")
], s);
const O = s;
export {
  s as UmbPropertyEditorUIColorSwatchesEditorElement,
  O as default
};
//# sourceMappingURL=property-editor-ui-color-swatches-editor.element-CnDyI4dd.js.map
