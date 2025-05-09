import { html as y, property as c, state as i, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as _ } from "@umbraco-cms/backoffice/property-editor";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, s = (e, t, n, a) => {
  for (var o = a > 1 ? void 0 : a ? E(t, n) : t, p = e.length - 1, m; p >= 0; p--)
    (m = e[p]) && (o = (a ? m(t, n, o) : m(o)) || o);
  return a && o && f(t, n, o), o;
}, P = (e, t, n) => t.has(e) || u("Cannot " + n), w = (e, t, n) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), O = (e, t, n) => (P(e, t, "access private method"), n), l, h;
let r = class extends d {
  constructor() {
    super(...arguments), w(this, l), this.min = 0, this.max = 1 / 0;
  }
  set config(e) {
    if (!e) return;
    const t = e?.getValueByAlias("validationLimit");
    this.min = t?.min ?? 0, this.max = t?.max ?? 1 / 0, this.onlyElementTypes = e.getValueByAlias("onlyPickElementTypes") ?? !1, this.showOpenButton = e?.getValueByAlias("showOpenButton") ?? !1;
  }
  render() {
    return y`
			<umb-input-document-type
				.min=${this.min}
				.max=${this.max}
				.value=${this.value}
				.elementTypesOnly=${this.onlyElementTypes ?? !1}
				?showOpenButton=${this.showOpenButton}
				@change=${O(this, l, h)}>
			</umb-input-document-type>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this.value = e.target.value, this.dispatchEvent(new _());
};
s([
  c()
], r.prototype, "value", 2);
s([
  i()
], r.prototype, "min", 2);
s([
  i()
], r.prototype, "max", 2);
s([
  i()
], r.prototype, "showOpenButton", 2);
s([
  i()
], r.prototype, "onlyElementTypes", 2);
r = s([
  v("umb-property-editor-ui-document-type-picker")
], r);
const U = r;
export {
  r as UmbPropertyEditorUIDocumentTypePickerElement,
  U as default
};
//# sourceMappingURL=property-editor-ui-document-type-picker.element-Cno9wNwL.js.map
