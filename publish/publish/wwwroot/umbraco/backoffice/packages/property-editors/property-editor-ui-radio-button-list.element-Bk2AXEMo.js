import { html as d, property as p, state as m, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as y } from "@umbraco-cms/backoffice/property-editor";
var f = Object.defineProperty, b = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, o = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? b(t, r) : t, l = e.length - 1, n; l >= 0; l--)
    (n = e[l]) && (a = (i ? n(t, r, a) : n(a)) || a);
  return i && a && f(t, r, a), a;
}, E = (e, t, r) => t.has(e) || h("Cannot " + r), g = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r) => (E(e, t, "access private method"), r), u, v;
let s = class extends c {
  constructor() {
    super(...arguments), g(this, u), this.value = "", this.readonly = !1, this._list = [];
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("items");
    Array.isArray(t) && t.length > 0 && (this._list = typeof t[0] == "string" ? t.map((r) => ({ label: r, value: r })) : t.map((r) => ({ label: r.name, value: r.value })), this.value && !this._list.find((r) => r.value === this.value) && this._list.push({ label: this.value, value: this.value, invalid: !0 }));
  }
  render() {
    return d`
			<umb-input-radio-button-list
				.list=${this._list}
				.value=${this.value ?? ""}
				@change=${P(this, u, v)}
				?readonly=${this.readonly}></umb-input-radio-button-list>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
v = function(e) {
  this.value = e.target.value, this.dispatchEvent(new y());
};
o([
  p()
], s.prototype, "value", 2);
o([
  p({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 2);
o([
  m()
], s.prototype, "_list", 2);
s = o([
  _("umb-property-editor-ui-radio-button-list")
], s);
const B = s;
export {
  s as UmbPropertyEditorUIRadioButtonListElement,
  B as default
};
//# sourceMappingURL=property-editor-ui-radio-button-list.element-Bk2AXEMo.js.map
