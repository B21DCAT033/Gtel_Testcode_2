import { UmbMediaReferenceRepository as W } from "./media-reference.repository-CcP6oL9P.js";
import { y as C } from "./input-upload-field.element-DpMbvzUB.js";
import { nothing as P, when as x, html as u, repeat as $, css as O, state as g, customElement as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
var S = Object.defineProperty, D = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, f = (e, t, i, c) => {
  for (var n = c > 1 ? void 0 : c ? D(t, i) : t, y = e.length - 1, w; y >= 0; y--)
    (w = e[y]) && (n = (c ? w(t, i, n) : w(n)) || n);
  return c && n && S(t, i, n), n;
}, M = (e, t, i) => t.has(e) || b("Cannot " + i), s = (e, t, i) => (M(e, t, "read from private field"), t.get(e)), p = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), _ = (e, t, i, c) => (M(e, t, "write to private field"), t.set(e, i), i), o = (e, t, i) => (M(e, t, "access private method"), i), l, m, d, h, r, U, v, E, k, R;
let a = class extends A {
  constructor() {
    super(), p(this, r), p(this, l, 10), p(this, m), this._currentPage = 1, this._total = 0, this._items = [], this._loading = !0, p(this, d), p(this, h), _(this, m, new W(this)), this.consumeContext(C, (e) => {
      _(this, d, e), o(this, r, U).call(this);
    });
  }
  firstUpdated() {
    o(this, r, v).call(this);
  }
  render() {
    return this._items?.length ? u`
			<umb-workspace-info-app-layout headline="#references_labelUsedByItems">
				${x(
      this._loading,
      () => u`<uui-loader></uui-loader>`,
      () => u`${o(this, r, k).call(this)} ${o(this, r, R).call(this)}`
    )}
			</umb-workspace-info-app-layout>
		` : P;
  }
};
l = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
U = function() {
  this.observe(
    s(this, d)?.unique,
    (e) => {
      if (!e) {
        _(this, h, void 0), this._items = [];
        return;
      }
      s(this, h) !== e && (_(this, h, e), o(this, r, v).call(this));
    },
    "umbReferencesDocumentUniqueObserver"
  );
};
v = async function() {
  if (!s(this, h))
    throw new Error("Media unique is required");
  this._loading = !0;
  const { data: e } = await s(this, m).requestReferencedBy(
    s(this, h),
    (this._currentPage - 1) * s(this, l),
    s(this, l)
  );
  e && (this._total = e.total, this._items = e.items, this._loading = !1);
};
E = function(e) {
  this._currentPage !== e.target.current && (this._currentPage = e.target.current, o(this, r, v).call(this));
};
k = function() {
  if (this._items)
    return u`
			<uui-ref-list>
				${$(
      this._items,
      (e) => e.unique,
      (e) => u`<umb-entity-item-ref .item=${e}></umb-entity-item-ref>`
    )}
			</uui-ref-list>
		`;
};
R = function() {
  if (!this._total) return P;
  const e = Math.ceil(this._total / s(this, l));
  return e <= 1 ? P : u`
			<div class="pagination">
				<uui-pagination .total=${e} @change=${o(this, r, E)}></uui-pagination>
			</div>
		`;
};
a.styles = [
  I,
  O`
			:host {
				display: contents;
			}

			uui-table-cell {
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
f([
  g()
], a.prototype, "_currentPage", 2);
f([
  g()
], a.prototype, "_total", 2);
f([
  g()
], a.prototype, "_items", 2);
f([
  g()
], a.prototype, "_loading", 2);
a = f([
  q("umb-media-references-workspace-info-app")
], a);
const L = a;
export {
  a as UmbMediaReferencesWorkspaceInfoAppElement,
  L as default
};
//# sourceMappingURL=media-references-workspace-info-app.element-DRYixYUW.js.map
