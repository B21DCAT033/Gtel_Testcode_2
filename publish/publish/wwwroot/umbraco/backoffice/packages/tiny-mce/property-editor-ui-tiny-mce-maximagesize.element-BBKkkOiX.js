import { html as l, property as v, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as d } from "@umbraco-cms/backoffice/property-editor";
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, u = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? f(t, r) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, r, a) : s(a)) || a);
  return n && a && y(t, r, a), a;
}, E = (e, t, r) => t.has(e) || m("Cannot " + r), g = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r) => (E(e, t, "access private method"), r), p, c;
let i = class extends _ {
  constructor() {
    super(...arguments), g(this, p), this.value = 0;
  }
  render() {
    return l`
			<uui-input
				type="number"
				min="0"
				label="Max size"
				placeholder="Max size"
				.value=${this.value}
				@change=${M(this, p, c)}>
			</uui-input>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = Number(e.target.value), this.dispatchEvent(new d());
};
u([
  v({ type: Number })
], i.prototype, "value", 2);
i = u([
  h("umb-property-editor-ui-tiny-mce-maximagesize")
], i);
const U = i;
export {
  i as UmbPropertyEditorUITinyMceMaxImageSizeElement,
  U as default
};
//# sourceMappingURL=property-editor-ui-tiny-mce-maximagesize.element-BBKkkOiX.js.map
