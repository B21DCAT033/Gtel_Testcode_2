import { css as B, property as I, state as u, customElement as M, html as m, nothing as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { createExtensionApiByAlias as v } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
var C = Object.defineProperty, O = Object.getOwnPropertyDescriptor, W = (e) => {
  throw TypeError(e);
}, l = (e, t, i, r) => {
  for (var o = r > 1 ? void 0 : r ? O(t, i) : t, _ = e.length - 1, y; _ >= 0; _--)
    (y = e[_]) && (o = (r ? y(t, i, o) : y(o)) || o);
  return r && o && C(t, i, o), o;
}, w = (e, t, i) => t.has(e) || W("Cannot " + i), s = (e, t, i) => (w(e, t, "read from private field"), t.get(e)), p = (e, t, i) => t.has(e) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), E = (e, t, i, r) => (w(e, t, "write to private field"), t.set(e, i), i), d = (e, t, i) => (w(e, t, "access private method"), i), f, n, h, c, D, q, A, R;
let a = class extends $ {
  constructor() {
    super(...arguments), p(this, c), this._referencedByItems = [], this._totalReferencedByItems = 0, this._totalDescendantsWithReferences = 0, this._descendantsWithReferences = [], p(this, f), p(this, n), p(this, h, 3);
  }
  firstUpdated(e) {
    super.firstUpdated(e), d(this, c, D).call(this);
  }
  render() {
    return m`
			${d(this, c, R).call(this, "references_labelDependsOnThis", this._referencedByItems, this._totalReferencedByItems)}
			${d(this, c, R).call(this, "references_labelDependentDescendants", this._descendantsWithReferences, this._totalDescendantsWithReferences)}
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
D = async function() {
  if (!this.config) {
    s(this, f)?.destroy(), s(this, n)?.destroy();
    return;
  }
  if (!this.config?.referenceRepositoryAlias)
    throw new Error("Missing referenceRepositoryAlias in config.");
  if (E(this, n, await v(
    this,
    this.config?.referenceRepositoryAlias
  )), !this.config?.itemRepositoryAlias)
    throw new Error("Missing itemRepositoryAlias in config.");
  E(this, f, await v(
    this,
    this.config.itemRepositoryAlias
  )), d(this, c, q).call(this), d(this, c, A).call(this);
};
q = async function() {
  if (!s(this, n))
    throw new Error("Failed to create reference repository.");
  if (!this.config?.unique)
    throw new Error("Missing unique in data.");
  const { data: e } = await s(this, n).requestReferencedBy(this.config.unique, 0, s(this, h));
  e && (this._referencedByItems = [...e.items], this._totalReferencedByItems = e.total);
};
A = async function() {
  if (!s(this, n))
    throw new Error("Failed to create reference repository.");
  if (!s(this, f))
    throw new Error("Failed to create item repository.");
  if (!s(this, n).requestDescendantsWithReferences) return;
  if (!this.config?.unique)
    throw new Error("Missing unique in data.");
  const { data: e } = await s(this, n).requestDescendantsWithReferences(
    this.config.unique,
    0,
    s(this, h)
  );
  if (e) {
    this._totalDescendantsWithReferences = e.total;
    const t = e.items.map((r) => r.unique).filter((r) => r), { data: i } = await s(this, f).requestItems(t);
    this._descendantsWithReferences = i ?? [];
  }
};
R = function(e, t, i) {
  return i === 0 ? g : m`
			<h5 class="uui-h5" id="reference-headline">${this.localize.term(e)}</h5>
			<uui-ref-list>
				${t.map(
    (r) => m`<umb-entity-item-ref .item=${r} readonly ?standalone=${i === 1}></umb-entity-item-ref> `
  )}
			</uui-ref-list>
			${i > s(this, h) ? m`<span>${this.localize.term("references_labelMoreReferences", i - s(this, h))}</span>` : g}
		`;
};
a.styles = [
  b,
  B`
			#reference-headline {
				margin-bottom: var(--uui-size-3);
			}

			uui-ref-list {
				margin-bottom: var(--uui-size-2);
			}
		`
];
l([
  I({ type: Object, attribute: !1 })
], a.prototype, "config", 2);
l([
  u()
], a.prototype, "_referencedByItems", 2);
l([
  u()
], a.prototype, "_totalReferencedByItems", 2);
l([
  u()
], a.prototype, "_totalDescendantsWithReferences", 2);
l([
  u()
], a.prototype, "_descendantsWithReferences", 2);
a = l([
  M("umb-confirm-action-modal-entity-references")
], a);
//# sourceMappingURL=confirm-action-entity-references.element-CahUBeLL.js.map
