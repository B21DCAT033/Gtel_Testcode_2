import { html as y, property as v, state as l, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as m } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as d } from "@umbraco-cms/backoffice/property-editor";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, p = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? E(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (a = (s ? n(t, r, a) : n(a)) || a);
  return s && a && f(t, r, a), a;
}, P = (e, t, r) => t.has(e) || u("Cannot " + r), w = (e, t, r) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r) => (P(e, t, "access private method"), r), h, _;
let o = class extends m {
  constructor() {
    super(...arguments), w(this, h), this.value = "", this._opacity = !1, this._showPalette = !1;
  }
  set config(e) {
    e && (this._opacity = e.getValueByAlias("showAlpha") ?? !1, this._showPalette = e.getValueByAlias("showPalette") ?? !1);
  }
  render() {
    return y`
			<umb-input-eye-dropper
				.opacity=${this._opacity}
				.showPalette=${this._showPalette}
				value=${this.value}
				@change=${U(this, h, _)}></umb-input-eye-dropper>
		`;
  }
};
h = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
p([
  v()
], o.prototype, "value", 2);
p([
  l()
], o.prototype, "_opacity", 2);
p([
  l()
], o.prototype, "_showPalette", 2);
o = p([
  c("umb-property-editor-ui-eye-dropper")
], o);
const D = o;
export {
  o as UmbPropertyEditorUIEyeDropperElement,
  D as default
};
//# sourceMappingURL=property-editor-ui-eye-dropper.element-DBGROwul.js.map
