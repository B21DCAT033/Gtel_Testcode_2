import { UmbDocumentReferenceRepository as x } from "./document-reference.repository-DvNcYEUQ.js";
import { css as E, property as U, state as _, customElement as C, html as n, nothing as b, repeat as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as q } from "@umbraco-cms/backoffice/style";
import { isDocumentReference as y, isMediaReference as g, isDefaultReference as v } from "@umbraco-cms/backoffice/relations";
var N = Object.defineProperty, P = Object.getOwnPropertyDescriptor, R = (e) => {
  throw TypeError(e);
}, o = (e, t, r, c) => {
  for (var a = c > 1 ? void 0 : c ? P(t, r) : t, f = e.length - 1, m; f >= 0; f--)
    (m = e[f]) && (a = (c ? m(t, r, a) : m(a)) || a);
  return c && a && N(t, r, a), a;
}, M = (e, t, r) => t.has(e) || R("Cannot " + r), h = (e, t, r) => (M(e, t, "read from private field"), r ? r.call(e) : t.get(e)), p = (e, t, r) => t.has(e) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), s = (e, t, r) => (M(e, t, "access private method"), r), d, u, i, w, T, $, z, D;
let l = class extends k {
  constructor() {
    super(...arguments), p(this, i), p(this, d, new x(this)), p(this, u, 10), this.unique = "", this._items = [], this._hasMoreReferences = 0, this._errorMessage = "";
  }
  firstUpdated() {
    s(this, i, w).call(this);
  }
  render() {
    return n` ${s(this, i, D).call(this)} ${s(this, i, z).call(this)} `;
  }
};
d = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
w = async function() {
  const { data: e, error: t } = await h(this, d).requestReferencedBy(this.unique, 0, h(this, u));
  if (t) {
    this._errorMessage = t.message;
    return;
  }
  e && (this._items = e.items, this._hasMoreReferences = e.total > h(this, u) ? e.total - h(this, u) : 0);
};
T = function(e) {
  return y(e) ? e.documentType.icon ?? "icon-document" : g(e) ? e.mediaType.icon ?? "icon-picture" : v(e) ? e.icon ?? "icon-document" : "icon-document";
};
$ = function(e) {
  return y(e) ? e.documentType.name : g(e) ? e.mediaType.name : v(e) ? e.type : "";
};
z = function() {
  return this._items?.length === 0 ? b : n`
			<uui-box headline=${this.localize.term("references_labelDependsOnThis")} style="--uui-box-default-padding:0">
				<uui-table>
					<uui-table-head>
						<uui-table-head-cell></uui-table-head-cell>
						<uui-table-head-cell><umb-localize key="general_name">Name</umb-localize></uui-table-head-cell>
						<uui-table-head-cell><umb-localize key="general_typeName">Type Name</umb-localize></uui-table-head-cell>
					</uui-table-head>

					${O(
    this._items,
    (e) => e.id,
    (e) => n`<uui-table-row>
								<uui-table-cell style="text-align:center;">
									<umb-icon name=${s(this, i, T).call(this, e)}></umb-icon>
								</uui-table-cell>
								<uui-table-cell class="link-cell"> ${e.name} </uui-table-cell>
								<uui-table-cell>${s(this, i, $).call(this, e)}</uui-table-cell>
							</uui-table-row>`
  )}
					${this._hasMoreReferences ? n`<uui-table-row>
								<uui-table-cell></uui-table-cell>
								<uui-table-cell>
									<umb-localize key="references_labelMoreReferences" .args="${[this._hasMoreReferences]}">
										...and ${this._hasMoreReferences} more items
									</umb-localize>
								</uui-table-cell>
								<uui-table-cell></uui-table-cell>
							</uui-table-row>` : b}
				</uui-table>
			</uui-box>
		`;
};
D = function() {
  return this._errorMessage ? n`<div id="error"><strong>${this._errorMessage}</strong></div>` : b;
};
l.styles = [
  q,
  E`
			#error {
				color: var(--uui-color-negative);
				margin-bottom: 1rem;
			}
		`
];
o([
  U()
], l.prototype, "unique", 2);
o([
  _()
], l.prototype, "_items", 2);
o([
  _()
], l.prototype, "_hasMoreReferences", 2);
o([
  _()
], l.prototype, "_errorMessage", 2);
l = o([
  C("umb-document-reference-table")
], l);
export {
  l as U
};
//# sourceMappingURL=document-reference-table.element-m5v3yKN0.js.map
