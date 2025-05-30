import { css as u, property as c, customElement as m, unsafeHTML as d, html as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as b, umbFocus as p } from "@umbraco-cms/backoffice/lit-element";
var C = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, s = (r, o, l, i) => {
  for (var t = i > 1 ? void 0 : i ? _(o, l) : o, a = r.length - 1, n; a >= 0; a--)
    (n = r[a]) && (t = (i ? n(o, l, t) : n(t)) || t);
  return i && t && C(o, l, t), t;
};
let e = class extends b {
  _handleConfirm() {
    this.modalContext?.submit();
  }
  _handleCancel() {
    this.modalContext?.reject();
  }
  render() {
    return h`
			<uui-dialog-layout class="uui-text" .headline=${this.localize.string(this.data?.headline) ?? null}>
				${typeof this.data?.content == "string" ? d(this.localize.string(this.data?.content)) : this.data?.content}

				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.string(this.data?.cancelLabel ?? "#buttons_confirmActionCancel")}
					@click=${this._handleCancel}></uui-button>
				<uui-button
					slot="actions"
					id="confirm"
					color=${this.data?.color || "positive"}
					look="primary"
					label=${this.localize.string(this.data?.confirmLabel ?? "#buttons_confirmActionConfirm")}
					@click=${this._handleConfirm}
					${p()}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
e.styles = [
  f,
  u`
			uui-dialog-layout {
				max-inline-size: 60ch;
			}
		`
];
s([
  c({ attribute: !1 })
], e.prototype, "modalContext", 2);
s([
  c({ type: Object, attribute: !1 })
], e.prototype, "data", 2);
e = s([
  m("umb-confirm-modal")
], e);
const x = e;
export {
  e as UmbConfirmModalElement,
  x as default
};
//# sourceMappingURL=confirm-modal.element-COhIMOef.js.map
