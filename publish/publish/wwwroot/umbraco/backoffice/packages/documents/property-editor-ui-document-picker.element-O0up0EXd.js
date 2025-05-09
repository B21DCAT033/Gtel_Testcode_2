import { d as l } from "./manifests-ByHRH93l.js";
import { html as c, property as h, state as i, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as f } from "@umbraco-cms/backoffice/property-editor";
var E = Object.defineProperty, P = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, n = (t, e, r, s) => {
  for (var a = s > 1 ? void 0 : s ? P(e, r) : e, p = t.length - 1, m; p >= 0; p--)
    (m = t[p]) && (a = (s ? m(e, r, a) : m(a)) || a);
  return s && a && E(e, r, a), a;
}, x = (t, e, r) => e.has(t) || d("Cannot " + r), w = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), B = (t, e, r) => (x(t, e, "access private method"), r), u, _;
let o = class extends y {
  constructor() {
    super(...arguments), w(this, u), this.readonly = !1, this._min = 0, this._max = 1;
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("validationLimit");
    e && (this._min = e.min && e.min > 0 ? e.min : 0, this._max = e.max && e.max > 0 ? e.max : 1), this._startNodeId = t.getValueByAlias("startNodeId"), this._showOpenButton = t.getValueByAlias("showOpenButton") ?? !1;
  }
  render() {
    const t = this._startNodeId ? { unique: this._startNodeId, entityType: l } : void 0;
    return c`
			<umb-input-document
				.min=${this._min}
				.max=${this._max}
				.startNode=${t}
				.value=${this.value}
				?showOpenButton=${this._showOpenButton}
				@change=${B(this, u, _)}
				?readonly=${this.readonly}>
			</umb-input-document>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  this.value = t.target.value, this.dispatchEvent(new f());
};
n([
  h()
], o.prototype, "value", 2);
n([
  h({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
n([
  i()
], o.prototype, "_min", 2);
n([
  i()
], o.prototype, "_max", 2);
n([
  i()
], o.prototype, "_startNodeId", 2);
n([
  i()
], o.prototype, "_showOpenButton", 2);
o = n([
  v("umb-property-editor-ui-document-picker")
], o);
const $ = o;
export {
  o as UmbPropertyEditorUIDocumentPickerElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-document-picker.element-O0up0EXd.js.map
