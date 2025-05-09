import { html as y, css as M, state as S, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as w } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as C } from "@umbraco-cms/backoffice/utils";
import "./document-variant-language-picker.element-azTXCKTU.js";
var x = Object.defineProperty, E = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, v = (t, e, a, n) => {
  for (var i = n > 1 ? void 0 : n ? E(e, a) : e, u = t.length - 1, h; u >= 0; u--)
    (h = t[u]) && (i = (n ? h(e, a, i) : h(i)) || i);
  return n && i && x(e, a, i), i;
}, _ = (t, e, a) => e.has(t) || d("Cannot " + a), s = (t, e, a) => (_(t, e, "read from private field"), a ? a.call(t) : e.get(t)), m = (t, e, a) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), p = (t, e, a) => (_(t, e, "access private method"), a), o, c, l, b, f, g;
let r = class extends w {
  constructor() {
    super(...arguments), m(this, l), m(this, o, new C(this)), this._options = [], m(this, c, (t) => t.variant ? this.data?.pickableFilter ? this.data.pickableFilter(t) : !0 : !1);
  }
  firstUpdated() {
    p(this, l, b).call(this);
  }
  render() {
    return y`<umb-body-layout headline=${this.localize.term("content_saveModalTitle")}>
			<p id="subtitle">
				<umb-localize key="content_variantsToSave">Choose which variants to be saved.</umb-localize>
			</p>

			<umb-document-variant-language-picker
				.selectionManager=${s(this, o)}
				.variantLanguageOptions=${this._options}
				.pickableFilter=${s(this, c)}></umb-document-variant-language-picker>

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${p(this, l, g)}></uui-button>
				<uui-button
					label="${this.localize.term("buttons_saveAndClose")}"
					look="primary"
					color="positive"
					@click=${p(this, l, f)}></uui-button>
			</div>
		</umb-body-layout> `;
  }
};
o = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
b = async function() {
  s(this, o).setMultiple(!0), s(this, o).setSelectable(!0), this._options = this.data?.options ?? [];
  let t = this.value?.selection ?? [];
  const e = this._options.filter((a) => s(this, c).call(this, a));
  t = t.filter((a) => e.some((n) => n.unique === a)), s(this, o).setSelection(t);
};
f = function() {
  this.value = { selection: s(this, o).getSelection() }, this.modalContext?.submit();
};
g = function() {
  this.modalContext?.reject();
};
r.styles = [
  $,
  M`
			:host {
				display: block;
				width: 400px;
				max-width: 90vw;
			}
		`
];
v([
  S()
], r.prototype, "_options", 2);
r = v([
  k("umb-document-save-modal")
], r);
const P = r;
export {
  r as UmbDocumentSaveModalElement,
  P as default
};
//# sourceMappingURL=document-save-modal.element-BNi59QF8.js.map
