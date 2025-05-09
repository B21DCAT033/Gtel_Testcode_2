import { UmbDocumentReferenceRepository as D } from "./document-reference.repository-DvNcYEUQ.js";
import { g as W } from "./manifests-ByHRH93l.js";
import { nothing as v, html as l, repeat as x, css as M, state as y, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as q } from "@umbraco-cms/backoffice/style";
var A = Object.defineProperty, I = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, m = (e, t, i, u) => {
  for (var s = u > 1 ? void 0 : u ? I(t, i) : t, _ = e.length - 1, d; _ >= 0; _--)
    (d = e[_]) && (s = (u ? d(t, i, s) : d(s)) || s);
  return u && s && A(t, i, s), s;
}, w = (e, t, i) => t.has(e) || U("Cannot " + i), r = (e, t, i) => (w(e, t, "read from private field"), t.get(e)), p = (e, t, i) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), g = (e, t, i, u) => (w(e, t, "write to private field"), t.set(e, i), i), c = (e, t, i) => (w(e, t, "access private method"), i), h, P, a, f, n, k, b, E, R, C;
let o = class extends $ {
  constructor() {
    super(), p(this, n), this._currentPage = 1, this._total = 0, this._items = [], p(this, h, 10), p(this, P, new D(this)), p(this, a), p(this, f), this.consumeContext(W, (e) => {
      g(this, f, e), c(this, n, k).call(this);
    });
  }
  render() {
    return this._items?.length ? l`
			<umb-workspace-info-app-layout headline="#references_labelUsedByItems">
				${c(this, n, R).call(this)} ${c(this, n, C).call(this)}
			</umb-workspace-info-app-layout>
		` : v;
  }
};
h = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
k = function() {
  this.observe(
    r(this, f)?.unique,
    (e) => {
      if (!e) {
        g(this, a, void 0), this._items = [];
        return;
      }
      r(this, a) !== e && (g(this, a, e), c(this, n, b).call(this));
    },
    "umbReferencesDocumentUniqueObserver"
  );
};
b = async function() {
  if (!r(this, a))
    throw new Error("Document unique is required");
  const { data: e } = await r(this, P).requestReferencedBy(
    r(this, a),
    (this._currentPage - 1) * r(this, h),
    r(this, h)
  );
  e && (this._total = e.total, this._items = e.items);
};
E = function(e) {
  this._currentPage !== e.target.current && (this._currentPage = e.target.current, c(this, n, b).call(this));
};
R = function() {
  if (this._items)
    return l`
			<uui-ref-list>
				${x(
      this._items,
      (e) => e.unique,
      (e) => l`<umb-entity-item-ref .item=${e}></umb-entity-item-ref>`
    )}
			</uui-ref-list>
		`;
};
C = function() {
  if (!this._total) return v;
  const e = Math.ceil(this._total / r(this, h));
  return e <= 1 ? v : l`
			<div class="pagination">
				<uui-pagination .total=${e} @change="${c(this, n, E)}"></uui-pagination>
			</div>
		`;
};
o.styles = [
  q,
  M`
			:host {
				display: contents;
			}

			uui-table-cell:not(.link-cell) {
				color: var(--uui-color-text-alt);
			}

			uui-pagination {
				flex: 1;
				display: inline-block;
			}

			.pagination {
				display: flex;
				justify-content: center;
				margin-top: var(--uui-size-space-4);
			}
		`
];
m([
  y()
], o.prototype, "_currentPage", 2);
m([
  y()
], o.prototype, "_total", 2);
m([
  y()
], o.prototype, "_items", 2);
o = m([
  O("umb-document-references-workspace-info-app")
], o);
const G = o;
export {
  o as UmbDocumentReferencesWorkspaceInfoAppElement,
  G as default
};
//# sourceMappingURL=document-references-workspace-view-info.element-BZAylbe0.js.map
