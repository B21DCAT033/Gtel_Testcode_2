import { styleMap as d, ifDefined as l, html as g, css as c, property as n, state as o, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as f } from "@umbraco-cms/backoffice/property-editor";
import { UmbFormControlMixin as H, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as w } from "@umbraco-cms/backoffice/validation";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
var $ = Object.defineProperty, b = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, a = (e, t, i, h) => {
  for (var s = h > 1 ? void 0 : h ? b(t, i) : t, m = e.length - 1, p; m >= 0; m--)
    (p = e[m]) && (s = (h ? p(t, i, s) : p(s)) || s);
  return h && s && $(t, i, s), s;
}, C = (e, t, i) => t.has(e) || _("Cannot " + i), U = (e, t, i) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), P = (e, t, i) => (C(e, t, "access private method"), i), u, y;
let r = class extends H(v, void 0) {
  constructor() {
    super(...arguments), U(this, u), this.readonly = !1, this.mandatoryMessage = w, this._css = {};
  }
  set config(e) {
    this._maxChars = Number(e?.getValueByAlias("maxChars")) || void 0, this._rows = Number(e?.getValueByAlias("rows")) || void 0, this._minHeight = Number(e?.getValueByAlias("minHeight")) || void 0, this._maxHeight = Number(e?.getValueByAlias("maxHeight")) || void 0, this._css = {
      "--uui-textarea-min-height": this._minHeight ? `${this._minHeight}px` : "reset",
      "--uui-textarea-max-height": this._maxHeight ? `${this._maxHeight}px` : "reset"
    };
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-textarea")), this._minHeight && this._maxHeight && this._minHeight > this._maxHeight && console.warn(
      `Property '${this.name}' (Textarea) has been misconfigured, 'minHeight' is greater than 'maxHeight'. Please correct your data type configuration.`,
      this
    );
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-textarea")?.focus();
  }
  render() {
    return g`
			<uui-textarea
				.label=${this.localize.term("general_fieldFor", [this.name])}
				style=${d(this._css)}
				.autoHeight=${!this._rows}
				maxlength=${l(this._maxChars)}
				rows=${l(this._rows)}
				.value=${this.value ?? ""}
				@input=${P(this, u, y)}
				?required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				?readonly=${this.readonly}></uui-textarea>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
y = function(e) {
  const t = e.target.value;
  t !== this.value && (this.value = t, this.dispatchEvent(new f()));
};
r.styles = [
  E,
  c`
			uui-textarea {
				width: 100%;
			}
		`
];
a([
  n({ type: Boolean, reflect: !0 })
], r.prototype, "readonly", 2);
a([
  n({ type: Boolean })
], r.prototype, "mandatory", 2);
a([
  n({ type: String })
], r.prototype, "mandatoryMessage", 2);
a([
  n({ type: String })
], r.prototype, "name", 2);
a([
  o()
], r.prototype, "_maxChars", 2);
a([
  o()
], r.prototype, "_rows", 2);
a([
  o()
], r.prototype, "_maxHeight", 2);
a([
  o()
], r.prototype, "_minHeight", 2);
a([
  o()
], r.prototype, "_css", 2);
r = a([
  x("umb-property-editor-ui-textarea")
], r);
const O = r;
export {
  r as UmbPropertyEditorUITextareaElement,
  O as default
};
//# sourceMappingURL=property-editor-ui-textarea.element-Be4RFT1x.js.map
