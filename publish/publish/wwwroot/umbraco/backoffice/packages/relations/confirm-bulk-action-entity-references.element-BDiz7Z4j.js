import { css as I, property as b, state as g, customElement as q, nothing as y, html as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { createExtensionApiByAlias as w } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
var O = Object.defineProperty, W = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, m = (e, t, i, r) => {
  for (var o = r > 1 ? void 0 : r ? W(t, i) : t, p = e.length - 1, u; p >= 0; p--)
    (u = e[p]) && (o = (r ? u(t, i, o) : u(o)) || o);
  return r && o && O(t, i, o), o;
}, d = (e, t, i) => t.has(e) || E("Cannot " + i), s = (e, t, i) => (d(e, t, "read from private field"), t.get(e)), c = (e, t, i) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), v = (e, t, i, r) => (d(e, t, "write to private field"), t.set(e, i), i), A = (e, t, i) => (d(e, t, "access private method"), i), n, a, h, l, R, M;
let f = class extends U {
  constructor() {
    super(...arguments), c(this, l), this._items = [], this._totalItems = 0, c(this, n), c(this, a), c(this, h, 5);
  }
  firstUpdated(e) {
    super.firstUpdated(e), A(this, l, R).call(this);
  }
  render() {
    return this._totalItems === 0 ? y : _`
			<h5 id="reference-headline">The following items are used by other content.</h5>
			<uui-ref-list>
				${this._items.map(
      (e) => _`<umb-entity-item-ref
							.item=${e}
							readonly
							?standalone=${this._totalItems === 1}></umb-entity-item-ref> `
    )}
			</uui-ref-list>
			${this._totalItems > s(this, h) ? _`<span
						>${this.localize.term("references_labelMoreReferences", this._totalItems - s(this, h))}</span
					>` : y}
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
R = async function() {
  if (!this.config) {
    s(this, n)?.destroy(), s(this, a)?.destroy();
    return;
  }
  if (!this.config?.referenceRepositoryAlias)
    throw new Error("Missing referenceRepositoryAlias in config.");
  if (v(this, a, await w(
    this,
    this.config?.referenceRepositoryAlias
  )), !this.config?.itemRepositoryAlias)
    throw new Error("Missing itemRepositoryAlias in config.");
  v(this, n, await w(
    this,
    this.config.itemRepositoryAlias
  )), A(this, l, M).call(this);
};
M = async function() {
  if (!s(this, a))
    throw new Error("Failed to create reference repository.");
  if (!s(this, n))
    throw new Error("Failed to create item repository.");
  if (!this.config?.uniques)
    throw new Error("Missing uniques in config.");
  const { data: e } = await s(this, a).requestAreReferenced(this.config.uniques, 0, s(this, h));
  if (e) {
    this._totalItems = e.total;
    const t = e.items.map((r) => r.unique).filter((r) => r), { data: i } = await s(this, n).requestItems(t);
    this._items = i ?? [];
  }
};
f.styles = [
  C,
  I`
			#reference-headline {
				margin-bottom: var(--uui-size-3);
			}

			uui-ref-list {
				margin-bottom: var(--uui-size-2);
			}
		`
];
m([
  b({ type: Object, attribute: !1 })
], f.prototype, "config", 2);
m([
  g()
], f.prototype, "_items", 2);
m([
  g()
], f.prototype, "_totalItems", 2);
f = m([
  q("umb-confirm-bulk-action-modal-entity-references")
], f);
//# sourceMappingURL=confirm-bulk-action-entity-references.element-BDiz7Z4j.js.map
