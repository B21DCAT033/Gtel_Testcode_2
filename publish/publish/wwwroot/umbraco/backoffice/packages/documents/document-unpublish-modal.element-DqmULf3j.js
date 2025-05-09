import { DocumentVariantStateModel as g } from "@umbraco-cms/backoffice/external/backend-api";
import "./document-reference-table.element-m5v3yKN0.js";
import { UmbDocumentReferenceRepository as k } from "./document-reference.repository-DvNcYEUQ.js";
import { UMB_DOCUMENT_CONFIGURATION_CONTEXT as I } from "./document-configuration.context-DKcHlT2T.js";
import { nothing as m, html as c, css as C, state as u, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as q } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as D } from "@umbraco-cms/backoffice/utils";
import "./document-variant-language-picker.element-azTXCKTU.js";
var E = Object.defineProperty, x = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, o = (e, i, t, r) => {
  for (var s = r > 1 ? void 0 : r ? x(i, t) : i, a = e.length - 1, p; a >= 0; a--)
    (p = e[a]) && (s = (r ? p(i, t, s) : p(s)) || s);
  return r && s && E(i, t, s), s;
}, y = (e, i, t) => i.has(e) || v("Cannot " + t), b = (e, i, t) => (y(e, i, "read from private field"), t ? t.call(e) : i.get(e)), _ = (e, i, t) => i.has(e) ? v("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), h = (e, i, t) => (y(e, i, "access private method"), t), f, d, l, U, M, w, S;
function R(e) {
  return e.variant?.state === g.PUBLISHED || e.variant?.state === g.PUBLISHED_PENDING_CHANGES;
}
let n = class extends q {
  constructor() {
    super(...arguments), _(this, l), this._selectionManager = new D(this), _(this, f, new k(this)), this._options = [], this._selection = [], this._hasReferences = !1, this._hasUnpublishPermission = !0, this._hasInvalidSelection = !0, this._isInvariant = !1, _(this, d, (e) => e.variant ? this.data?.pickableFilter ? this.data.pickableFilter(e) : !0 : !1), this._requiredFilter = (e) => e.language.isMandatory && !this._selection.includes(e.unique);
  }
  firstUpdated() {
    if (h(this, l, M).call(this), this.data?.options.length === 1 && this.data.options[0].unique === "invariant") {
      this._isInvariant = !0, this._hasInvalidSelection = !1;
      return;
    }
    h(this, l, U).call(this);
  }
  render() {
    return c`<umb-body-layout headline=${this.localize.term("content_unpublish")}>
			${this._isInvariant ? m : c`
						<p id="subtitle">
							<umb-localize key="content_languagesToUnpublish">
								Select the languages to unpublish. Unpublishing a mandatory language will unpublish all languages.
							</umb-localize>
						</p>
						<umb-document-variant-language-picker
							.selectionManager=${this._selectionManager}
							.variantLanguageOptions=${this._options}
							.requiredFilter=${this._hasInvalidSelection ? this._requiredFilter : void 0}
							.pickableFilter=${b(this, d)}></umb-document-variant-language-picker>
					`}

			<p>
				<umb-localize key="prompt_confirmUnpublish">
					Unpublishing will remove this page and all its descendants from the site.
				</umb-localize>
			</p>

			${this.data?.documentUnique ? c`
						<umb-document-reference-table
							id="references"
							unique=${this.data?.documentUnique}></umb-document-reference-table>
					` : m}
			${this._hasReferences ? c`<uui-box id="references-warning">
						<umb-localize key="references_unpublishWarning">
							This item or its descendants is being referenced. Unpublishing can lead to broken links on your website.
							Please take the appropriate actions.
						</umb-localize>
					</uui-box>` : m}

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${h(this, l, S)}></uui-button>
				<uui-button
					label="${this.localize.term("actions_unpublish")}"
					?disabled=${this._hasInvalidSelection || !this._hasUnpublishPermission || !this._isInvariant && this._selection.length === 0}
					look="primary"
					color="warning"
					@click=${h(this, l, w)}></uui-button>
			</div>
		</umb-body-layout> `;
  }
};
f = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
U = async function() {
  this._selectionManager.setMultiple(!0), this._selectionManager.setSelectable(!0), this._options = this.data?.options.filter((t) => t.variant && t.variant.state === null || R(t)) ?? [];
  let e = this.value?.selection ?? [];
  const i = this._options.filter((t) => b(this, d).call(this, t));
  e = e.filter((t) => i.some((r) => r.unique === t)), this._selectionManager.setSelection(e), this.observe(
    this._selectionManager.selection,
    (t) => {
      this._selection = t;
      const r = this._options.some((a) => a.language.isMandatory && t.includes(a.unique)), s = this._options.some(
        (a) => a.language.isMandatory && !t.includes(a.unique)
      );
      this._hasInvalidSelection = r && s;
    },
    "observeSelection"
  );
};
M = async function() {
  if (!this.data?.documentUnique) return;
  const { data: e, error: i } = await b(this, f).requestReferencedBy(this.data?.documentUnique, 0, 1);
  if (i) {
    console.error(i);
    return;
  }
  if (e && (this._hasReferences = e.total > 0, this._hasReferences)) {
    const t = await this.getContext(I);
    this._hasUnpublishPermission = (await t.getDocumentConfiguration())?.disableUnpublishWhenReferenced === !1;
  }
};
w = function() {
  if (this._hasUnpublishPermission) {
    const e = this._isInvariant ? ["invariant"] : this._selection;
    this.value = { selection: e }, this.modalContext?.submit();
    return;
  }
  this.modalContext?.reject();
};
S = function() {
  this.modalContext?.reject();
};
n.styles = [
  P,
  C`
			:host {
				display: block;
				min-width: 600px;
				max-width: 90vw;
			}

			#references {
				--uui-table-cell-padding: 0;
			}

			#references-warning {
				margin-top: 1rem;
				background-color: var(--uui-color-danger);
				color: var(--uui-color-danger-contrast);
			}
		`
];
o([
  u()
], n.prototype, "_options", 2);
o([
  u()
], n.prototype, "_selection", 2);
o([
  u()
], n.prototype, "_hasReferences", 2);
o([
  u()
], n.prototype, "_hasUnpublishPermission", 2);
o([
  u()
], n.prototype, "_hasInvalidSelection", 2);
o([
  u()
], n.prototype, "_isInvariant", 2);
n = o([
  $("umb-document-unpublish-modal")
], n);
const G = n;
export {
  n as UmbDocumentUnpublishModalElement,
  G as default,
  R as isPublished
};
//# sourceMappingURL=document-unpublish-modal.element-DqmULf3j.js.map
