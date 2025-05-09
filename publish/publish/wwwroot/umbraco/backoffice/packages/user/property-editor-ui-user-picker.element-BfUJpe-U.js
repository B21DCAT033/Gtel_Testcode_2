import { html as h, property as c, customElement as l } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as d } from "@umbraco-cms/backoffice/property-editor";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, u = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? E(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (a = (o ? i(t, r, a) : i(a)) || a);
  return o && a && f(t, r, a), a;
}, P = (e, t, r) => t.has(e) || m("Cannot " + r), U = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r) => (P(e, t, "access private method"), r), p, v;
let n = class extends _ {
  constructor() {
    super(...arguments), U(this, p), this.value = "";
  }
  render() {
    return h`
			<umb-user-input min="0" max="1" .value=${this.value ?? ""} @change=${y(this, p, v)}></umb-user-input>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
v = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
u([
  c()
], n.prototype, "value", 2);
u([
  c({ attribute: !1 })
], n.prototype, "config", 2);
n = u([
  l("umb-property-editor-ui-user-picker")
], n);
const w = n;
export {
  n as UmbPropertyEditorUIUserPickerElement,
  w as default
};
//# sourceMappingURL=property-editor-ui-user-picker.element-BfUJpe-U.js.map
