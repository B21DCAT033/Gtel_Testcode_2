import { html as g, property as m, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as P } from "@umbraco-cms/backoffice/property-editor";
import { UmbServerFilePathUniqueSerializer as S } from "@umbraco-cms/backoffice/server-file-system";
var w = Object.defineProperty, C = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, v = (e, t, r, n) => {
  for (var i = n > 1 ? void 0 : n ? C(t, r) : t, h = e.length - 1, l; h >= 0; h--)
    (l = e[h]) && (i = (n ? l(t, r, i) : l(i)) || i);
  return n && i && w(t, r, i), i;
}, f = (e, t, r) => t.has(e) || y("Cannot " + r), s = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), c = (e, t, r) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _ = (e, t, r, n) => (f(e, t, "write to private field"), t.set(e, r), r), M = (e, t, r) => (f(e, t, "access private method"), r), p, a, u, d;
let o = class extends U {
  constructor() {
    super(...arguments), c(this, u), c(this, p, new S()), c(this, a, []);
  }
  set value(e) {
    e && _(this, a, e.map((t) => s(this, p).toUnique(t)));
  }
  get value() {
    return s(this, a) ? s(this, a).map((e) => s(this, p).toServerPath(e)) : [];
  }
  render() {
    return g`<umb-stylesheet-input @change=${M(this, u, d)} .selection=${s(this, a)}></umb-stylesheet-input>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
d = function(e) {
  const t = e.target;
  _(this, a, t.selection ?? []), this.dispatchEvent(new P());
};
v([
  m({ type: Array })
], o.prototype, "value", 1);
v([
  m({ type: Object, attribute: !1 })
], o.prototype, "config", 2);
o = v([
  E("umb-property-editor-ui-tiny-mce-stylesheets-configuration")
], o);
const q = o;
export {
  o as UmbPropertyEditorUITinyMceStylesheetsConfigurationElement,
  q as default
};
//# sourceMappingURL=property-editor-ui-tiny-mce-stylesheets-configuration.element-CI2Cpllo.js.map
