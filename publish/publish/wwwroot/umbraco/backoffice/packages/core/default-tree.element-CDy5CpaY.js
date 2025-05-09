import { U as E } from "./default-tree.context-token-C7a9fWg9.js";
import { property as l, state as _, customElement as I, html as p, nothing as b, repeat as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as w } from "@umbraco-cms/backoffice/lit-element";
var S = Object.defineProperty, A = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, a = (t, e, o, h) => {
  for (var n = h > 1 ? void 0 : h ? A(e, o) : e, m = t.length - 1, d; m >= 0; m--)
    (d = t[m]) && (n = (h ? d(e, o, n) : d(n)) || n);
  return h && n && S(e, o, n), n;
}, g = (t, e, o) => e.has(t) || C("Cannot " + o), s = (t, e, o) => (g(t, e, "read from private field"), o ? o.call(t) : e.get(t)), c = (t, e, o) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), T = (t, e, o, h) => (g(t, e, "write to private field"), e.set(t, o), o), y = (t, e, o) => (g(t, e, "access private method"), o), i, f, u, P, R, v, O;
let r = class extends w {
  constructor() {
    super(), c(this, u), this._selectionConfiguration = {
      multiple: !1,
      selectable: !0,
      selection: []
    }, this.selectionConfiguration = this._selectionConfiguration, this.hideTreeItemActions = !1, this.hideTreeRoot = !1, this.foldersOnly = !1, this.selectableFilter = () => !0, this.filter = () => !0, this._rootItems = [], this._currentPage = 1, this._totalPages = 1, c(this, i), c(this, f), c(this, v, (t) => {
      t.stopPropagation();
      const e = this._currentPage = this._currentPage + 1;
      s(this, i)?.pagination.setCurrentPageNumber(e);
    }), T(this, f, Promise.all([
      // TODO: Notice this can be retrieve via a api property. [NL]
      this.consumeContext(E, (t) => {
        T(this, i, t), this.observe(s(this, i).treeRoot, (e) => this._treeRoot = e), this.observe(s(this, i).rootItems, (e) => this._rootItems = e), this.observe(s(this, i).pagination.currentPage, (e) => this._currentPage = e), this.observe(s(this, i).pagination.totalPages, (e) => this._totalPages = e);
      }).asPromise()
    ]));
  }
  async updated(t) {
    super.updated(t), await s(this, f), t.has("selectionConfiguration") && (this._selectionConfiguration = this.selectionConfiguration, s(this, i).selection.setMultiple(this._selectionConfiguration.multiple ?? !1), s(this, i).selection.setSelectable(this._selectionConfiguration.selectable ?? !0), s(this, i).selection.setSelection(this._selectionConfiguration.selection ?? [])), t.has("startNode") && s(this, i).setStartNode(this.startNode), t.has("hideTreeRoot") && s(this, i).setHideTreeRoot(this.hideTreeRoot), t.has("foldersOnly") && s(this, i).setFoldersOnly(this.foldersOnly ?? !1), t.has("selectableFilter") && (s(this, i).selectableFilter = this.selectableFilter), t.has("filter") && (s(this, i).filter = this.filter);
  }
  getSelection() {
    return s(this, i)?.selection.getSelection();
  }
  render() {
    return p` ${y(this, u, P).call(this)} ${y(this, u, R).call(this)}`;
  }
};
i = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
P = function() {
  return this.hideTreeRoot || this._treeRoot === void 0 ? b : p`
			<umb-tree-item
				.entityType=${this._treeRoot.entityType}
				.props=${{ hideActions: this.hideTreeItemActions, item: this._treeRoot }}></umb-tree-item>
		`;
};
R = function() {
  return this.hideTreeRoot === !0 ? p`
				${$(
    this._rootItems,
    (t, e) => t.name + "___" + e,
    (t) => p`<umb-tree-item
							.entityType=${t.entityType}
							.props=${{ hideActions: this.hideTreeItemActions, item: t }}></umb-tree-item>`
  )}
				${y(this, u, O).call(this)}
			` : b;
};
v = /* @__PURE__ */ new WeakMap();
O = function() {
  return this._totalPages <= 1 || this._currentPage === this._totalPages ? b : p` <uui-button @click=${s(this, v)} label="Load more"></uui-button> `;
};
a([
  l({ type: Object, attribute: !1 })
], r.prototype, "selectionConfiguration", 2);
a([
  l({ type: Boolean, attribute: !1 })
], r.prototype, "hideTreeItemActions", 2);
a([
  l({ type: Boolean, attribute: !1 })
], r.prototype, "hideTreeRoot", 2);
a([
  l({ type: Object, attribute: !1 })
], r.prototype, "startNode", 2);
a([
  l({ type: Boolean, attribute: !1 })
], r.prototype, "foldersOnly", 2);
a([
  l({ attribute: !1 })
], r.prototype, "selectableFilter", 2);
a([
  l({ attribute: !1 })
], r.prototype, "filter", 2);
a([
  _()
], r.prototype, "_rootItems", 2);
a([
  _()
], r.prototype, "_treeRoot", 2);
a([
  _()
], r.prototype, "_currentPage", 2);
a([
  _()
], r.prototype, "_totalPages", 2);
r = a([
  I("umb-default-tree")
], r);
const U = r;
export {
  r as UmbDefaultTreeElement,
  U as default
};
//# sourceMappingURL=default-tree.element-CDy5CpaY.js.map
