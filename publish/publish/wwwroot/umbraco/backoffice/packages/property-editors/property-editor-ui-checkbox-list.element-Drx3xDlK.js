import { html as f, property as _, state as m, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as g } from "@umbraco-cms/backoffice/property-editor";
import "./input-checkbox-list.element-Cn5BZGOC.js";
var C = Object.defineProperty, k = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, l = (t, r, e, i) => {
  for (var a = i > 1 ? void 0 : i ? k(r, e) : r, p = t.length - 1, h; p >= 0; p--)
    (h = t[p]) && (a = (i ? h(r, e, a) : h(a)) || a);
  return i && a && C(r, e, a), a;
}, d = (t, r, e) => r.has(t) || v("Cannot " + e), n = (t, r, e) => (d(t, r, "read from private field"), e ? e.call(t) : r.get(t)), u = (t, r, e) => r.has(t) ? v("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), x = (t, r, e, i) => (d(t, r, "write to private field"), r.set(t, e), e), P = (t, r, e) => (d(t, r, "access private method"), e), s, c, y;
let o = class extends b {
  constructor() {
    super(...arguments), u(this, c), u(this, s, []), this.readonly = !1, this._list = [];
  }
  set value(t) {
    x(this, s, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return n(this, s);
  }
  set config(t) {
    if (!t) return;
    const r = t.getValueByAlias("items");
    Array.isArray(r) && r.length && (this._list = typeof r[0] == "string" ? r.map((e) => ({ label: e, value: e, checked: n(this, s).includes(e) })) : r.map((e) => ({
      label: e.name,
      value: e.value,
      checked: n(this, s).includes(e.value)
    })), n(this, s).forEach((e) => {
      this._list.find((i) => i.value === e) || this._list.push({ label: e, value: e, checked: !0, invalid: !0 });
    }));
  }
  render() {
    return f`
			<umb-input-checkbox-list
				.list=${this._list}
				.selection=${n(this, s)}
				?readonly=${this.readonly}
				@change=${P(this, c, y)}></umb-input-checkbox-list>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
y = function(t) {
  this.value = t.target.selection, this.dispatchEvent(new g());
};
l([
  _({ type: Array })
], o.prototype, "value", 1);
l([
  _({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
l([
  m()
], o.prototype, "_list", 2);
o = l([
  E("umb-property-editor-ui-checkbox-list")
], o);
const L = o;
export {
  o as UmbPropertyEditorUICheckboxListElement,
  L as default
};
//# sourceMappingURL=property-editor-ui-checkbox-list.element-Drx3xDlK.js.map
