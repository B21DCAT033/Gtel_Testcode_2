import { html as h, property as v, state as c, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as d } from "@umbraco-cms/backoffice/property-editor";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var y = Object.defineProperty, E = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, i = (e, t, r, l) => {
  for (var a = l > 1 ? void 0 : l ? E(t, r) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (l ? n(t, r, a) : n(a)) || a);
  return l && a && y(t, r, a), a;
}, U = (e, t, r) => t.has(e) || p("Cannot " + r), g = (e, t, r) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r) => (U(e, t, "access private method"), r), u, m;
let s = class extends f {
  constructor() {
    super(...arguments), g(this, u), this.value = "", this._list = [
      { value: void 0, name: "Default", selected: !0 },
      { value: "small", name: "Small" },
      { value: "medium", name: "Medium" },
      { value: "large", name: "Large" },
      { value: "full", name: "Full" }
    ];
  }
  firstUpdated() {
    this.value && (this._list = this._list.map((e) => ({
      ...e,
      selected: e.value === this.value
    })));
  }
  render() {
    return h`<uui-select .options=${this._list} @change=${P(this, u, m)}></uui-select>`;
  }
};
u = /* @__PURE__ */ new WeakSet();
m = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
i([
  v()
], s.prototype, "value", 2);
i([
  c()
], s.prototype, "_list", 2);
i([
  v({ attribute: !1 })
], s.prototype, "config", 2);
s = i([
  _("umb-property-editor-ui-overlay-size")
], s);
const b = s;
export {
  s as UmbPropertyEditorUIOverlaySizeElement,
  b as default
};
//# sourceMappingURL=property-editor-ui-overlay-size.element-1ijlsMz9.js.map
