import { html as v, property as l, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as _ } from "@umbraco-cms/backoffice/property-editor";
var f = Object.defineProperty, y = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, p = (e, r, t, n) => {
  for (var a = n > 1 ? void 0 : n ? y(r, t) : r, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (a = (n ? i(r, t, a) : i(a)) || a);
  return n && a && f(r, t, a), a;
}, b = (e, r, t) => r.has(e) || c("Cannot " + t), E = (e, r, t) => r.has(e) ? c("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), P = (e, r, t) => (b(e, r, "access private method"), t), m, u;
let o = class extends d {
  constructor() {
    super(...arguments), E(this, m), this.readonly = !1;
  }
  render() {
    return v`<umb-input-member
			min="0"
			max="1"
			.value=${this.value}
			@change=${P(this, m, u)}
			?readonly=${this.readonly}></umb-input-member>`;
  }
};
m = /* @__PURE__ */ new WeakSet();
u = function(e) {
  this.value = e.target.value, this.dispatchEvent(new _());
};
p([
  l()
], o.prototype, "value", 2);
p([
  l({ attribute: !1 })
], o.prototype, "config", 2);
p([
  l({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
o = p([
  h("umb-property-editor-ui-member-picker")
], o);
const w = o;
export {
  o as UmbPropertyEditorUIMemberPickerElement,
  w as default
};
//# sourceMappingURL=property-editor-ui-member-picker.element-BTbXuKbw.js.map
