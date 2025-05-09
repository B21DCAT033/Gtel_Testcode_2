import { html as v, property as h, state as m, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as _ } from "@umbraco-cms/backoffice/property-editor";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
var E = Object.defineProperty, y = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, p = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? y(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (a = (n ? i(t, r, a) : i(a)) || a);
  return n && a && E(t, r, a), a;
}, U = (e, t, r) => t.has(e) || d("Cannot " + r), P = (e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), b = (e, t, r) => (U(e, t, "access private method"), r), l, u;
let o = class extends c {
  constructor() {
    super(...arguments), P(this, l), this.value = {};
  }
  set config(e) {
    e && (this._fileExtensions = e.getValueByAlias("fileExtensions"));
  }
  render() {
    return v`<umb-input-upload-field
			@change="${b(this, l, u)}"
			.allowedFileExtensions="${this._fileExtensions}"
			.value=${this.value}></umb-input-upload-field>`;
  }
};
l = /* @__PURE__ */ new WeakSet();
u = function(e) {
  this.value = e.target.value, this.dispatchEvent(new _());
};
p([
  h({ type: Object })
], o.prototype, "value", 2);
p([
  m()
], o.prototype, "_fileExtensions", 2);
o = p([
  f("umb-property-editor-ui-upload-field")
], o);
const C = o;
export {
  o as UmbPropertyEditorUIUploadFieldElement,
  C as default
};
//# sourceMappingURL=property-editor-ui-upload-field.element-_yOPOhs6.js.map
