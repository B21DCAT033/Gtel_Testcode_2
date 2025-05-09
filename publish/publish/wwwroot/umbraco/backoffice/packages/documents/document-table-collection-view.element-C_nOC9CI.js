import { g as Y } from "./index-Cw5mP9uC.js";
import { j as F, e as K, d as X } from "./manifests-ByHRH93l.js";
import { css as A, property as I, state as h, customElement as $, nothing as J, html as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as Q } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/repository";
import { U as W } from "./document-item-data-resolver-CCvZ1xDq.js";
import { fromCamelCase as Z } from "@umbraco-cms/backoffice/utils";
var j = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, D = (e, t, s, i) => {
  for (var a = i > 1 ? void 0 : i ? ee(t, s) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (i ? o(t, s, a) : o(a)) || a);
  return i && a && j(t, s, a), a;
}, B = (e, t, s) => t.has(e) || x("Cannot " + s), b = (e, t, s) => (B(e, t, "read from private field"), s ? s.call(e) : t.get(e)), N = (e, t, s) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), te = (e, t, s, i) => (B(e, t, "write to private field"), t.set(e, s), s), y, d;
let f = class extends T {
  constructor() {
    super(), N(this, y), this._name = "", N(this, d, new W(this)), b(this, d).observe(b(this, d).name, (e) => this._name = e || "");
  }
  get value() {
    return b(this, y);
  }
  set value(e) {
    te(this, y, e), e.item && b(this, d).setData(e.item);
  }
  render() {
    return this.value ? p` <uui-button compact href=${this.value.editPath} label=${this._name}></uui-button> ` : J;
  }
};
y = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
f.styles = [
  A`
			uui-button {
				text-align: left;
			}
		`
];
D([
  I({ attribute: !1 })
], f.prototype, "value", 1);
D([
  h()
], f.prototype, "_name", 2);
f = D([
  $("umb-document-table-column-name")
], f);
var se = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, E = (e, t, s, i) => {
  for (var a = i > 1 ? void 0 : i ? ae(t, s) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (i ? o(t, s, a) : o(a)) || a);
  return i && a && se(t, s, a), a;
}, z = (e, t, s) => t.has(e) || k("Cannot " + s), g = (e, t, s) => (z(e, t, "read from private field"), s ? s.call(e) : t.get(e)), M = (e, t, s) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), ie = (e, t, s, i) => (z(e, t, "write to private field"), t.set(e, s), s), C, v;
let w = class extends T {
  constructor() {
    super(), M(this, C), this._state = "", M(this, v, new W(this)), g(this, v).observe(g(this, v).state, (e) => this._state = e || "");
  }
  get value() {
    return g(this, C);
  }
  set value(e) {
    ie(this, C, e), e.item && g(this, v).setData(e.item);
  }
  render() {
    switch (this._state) {
      case "Published":
        return p`<uui-tag color="positive" look="secondary">${this.localize.term("content_published")}</uui-tag>`;
      case "PublishedPendingChanges":
        return p`<uui-tag color="warning" look="secondary"
					>${this.localize.term("content_publishedPendingChanges")}</uui-tag
				>`;
      case "Draft":
        return p`<uui-tag color="default" look="secondary">${this.localize.term("content_unpublished")}</uui-tag>`;
      case "NotCreated":
        return p`<uui-tag color="danger" look="secondary">${this.localize.term("content_notCreated")}</uui-tag>`;
      default:
        return p`<uui-tag color="danger" look="secondary">${Z(this.value.item.state)}</uui-tag>`;
    }
  }
};
C = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
E([
  I({ attribute: !1 })
], w.prototype, "value", 1);
E([
  h()
], w.prototype, "_state", 2);
w = E([
  $("umb-document-table-column-state")
], w);
var re = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, q = (e) => {
  throw TypeError(e);
}, _ = (e, t, s, i) => {
  for (var a = i > 1 ? void 0 : i ? ne(t, s) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (i ? o(t, s, a) : o(a)) || a);
  return i && a && re(t, s, a), a;
}, O = (e, t, s) => t.has(e) || q("Cannot " + s), c = (e, t, s) => (O(e, t, "read from private field"), t.get(e)), P = (e, t, s) => t.has(e) ? q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), oe = (e, t, s, i) => (O(e, t, "write to private field"), t.set(e, s), s), m = (e, t, s) => (O(e, t, "access private method"), s), S, r, u, V, L, U, G, R, H;
let l = class extends T {
  constructor() {
    super(), P(this, u), this._tableConfig = {
      allowSelection: !0
    }, this._tableColumns = [], P(this, S, [
      {
        name: this.localize.term("general_name"),
        alias: "name",
        elementName: "umb-document-table-column-name",
        allowSorting: !0
      },
      {
        name: this.localize.term("content_publishStatus"),
        alias: "state",
        elementName: "umb-document-table-column-state",
        allowSorting: !1
      }
    ]), this._tableItems = [], this._selection = [], P(this, r), this.consumeContext(F, (e) => {
      oe(this, r, e), e.setupView(this), this.observe(
        e.workspacePathBuilder,
        (t) => {
          this._workspacePathBuilder = t, c(this, r) && m(this, u, U).call(this, c(this, r).getItems());
        },
        "observePath"
      ), m(this, u, V).call(this);
    });
  }
  render() {
    return p`
			<umb-table
				.config=${this._tableConfig}
				.columns=${this._tableColumns}
				.items=${this._tableItems}
				.selection=${this._selection}
				@selected=${m(this, u, G)}
				@deselected=${m(this, u, R)}
				@ordered=${m(this, u, H)}></umb-table>
		`;
  }
};
S = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
V = function() {
  c(this, r) && (this.observe(
    c(this, r).userDefinedProperties,
    (e) => {
      this._userDefinedProperties = e, m(this, u, L).call(this);
    },
    "_observeUserDefinedProperties"
  ), this.observe(
    c(this, r).items,
    (e) => {
      this._items = e, m(this, u, U).call(this, this._items);
    },
    "_observeItems"
  ), this.observe(
    c(this, r).selection.selection,
    (e) => {
      this._selection = e;
    },
    "_observeSelection"
  ));
};
L = function() {
  if (this._userDefinedProperties && this._userDefinedProperties.length > 0) {
    const e = this._userDefinedProperties.map((t) => ({
      name: this.localize.string(t.header),
      alias: t.alias,
      elementName: t.elementName,
      labelTemplate: t.nameTemplate,
      allowSorting: !0
    }));
    this._tableColumns = [
      ...c(this, S),
      ...e,
      { name: "", alias: "entityActions", align: "right" }
    ];
  }
};
U = function(e) {
  this._tableItems = e.map((t) => {
    if (!t.unique) throw new Error("Item id is missing.");
    const s = this._tableColumns?.map((i) => {
      if (i.alias === "entityActions")
        return {
          columnAlias: "entityActions",
          value: p`<umb-entity-actions-table-column-view
								.value=${{
            entityType: t.entityType,
            unique: t.unique
          }}></umb-entity-actions-table-column-view>`
        };
      const a = t.unique && this._workspacePathBuilder ? this._workspacePathBuilder({ entityType: t.entityType }) + K.generateLocal({
        unique: t.unique
      }) : "";
      return {
        columnAlias: i.alias,
        value: i.elementName ? { item: t, editPath: a } : Y(t, i.alias)
      };
    }) ?? [];
    return {
      id: t.unique,
      icon: t.documentType.icon,
      entityType: X,
      data: s
    };
  });
};
G = function(e) {
  e.stopPropagation();
  const s = e.target.selection;
  c(this, r)?.selection.setSelection(s);
};
R = function(e) {
  e.stopPropagation();
  const s = e.target.selection;
  c(this, r)?.selection.setSelection(s);
};
H = function(e) {
  const t = e.target, s = t.orderingColumn, i = t.orderingDesc;
  c(this, r)?.setFilter({
    orderBy: s,
    orderDirection: i ? "desc" : "asc"
  });
};
l.styles = [
  Q,
  A`
			:host {
				display: block;
				box-sizing: border-box;
				height: auto;
				width: 100%;
				padding: var(--uui-size-space-3) 0;
			}

			.container {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
_([
  h()
], l.prototype, "_workspacePathBuilder", 2);
_([
  h()
], l.prototype, "_userDefinedProperties", 2);
_([
  h()
], l.prototype, "_items", 2);
_([
  h()
], l.prototype, "_tableConfig", 2);
_([
  h()
], l.prototype, "_tableColumns", 2);
_([
  h()
], l.prototype, "_tableItems", 2);
_([
  h()
], l.prototype, "_selection", 2);
l = _([
  $("umb-document-table-collection-view")
], l);
const fe = l;
export {
  l as UmbDocumentTableCollectionViewElement,
  fe as default
};
//# sourceMappingURL=document-table-collection-view.element-C_nOC9CI.js.map
