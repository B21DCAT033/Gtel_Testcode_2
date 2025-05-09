import { UmbDocumentItemRepository as x } from "./document-item.repository-DPoT_JcK.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/property";
import { f as A } from "./manifests-ByHRH93l.js";
import { html as u, repeat as G, css as B, state as F, customElement as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as L } from "@umbraco-cms/backoffice/modal";
import { UmbChangeEvent as E, UmbSelectedEvent as J } from "@umbraco-cms/backoffice/event";
import { umbExtensionsRegistry as V } from "@umbraco-cms/backoffice/extension-registry";
import { UUIFormControlMixin as Y } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ENTITY_USER_PERMISSION_MODAL as K } from "@umbraco-cms/backoffice/user-permission";
var X = Object.defineProperty, j = Object.getOwnPropertyDescriptor, P = (t) => {
  throw TypeError(t);
}, g = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? j(e, i) : e, m = t.length - 1, v; m >= 0; m--)
    (v = t[m]) && (o = (s ? v(e, i, o) : v(o)) || o);
  return s && o && X(e, i, o), o;
}, b = (t, e, i) => e.has(t) || P("Cannot " + i), a = (t, e, i) => (b(t, e, "read from private field"), i ? i.call(t) : e.get(t)), l = (t, e, i) => e.has(t) ? P("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), y = (t, e, i, s) => (b(t, e, "write to private field"), e.set(t, i), i), r = (t, e, i) => (b(t, e, "access private method"), i), f, h, c, p, n, U, I, M, $, w, q, D, O, T, C, N, S, R, _, k;
let d = class extends Y(z, "") {
  constructor() {
    super(), l(this, n), this._permissions = [], l(this, f, new x(this)), l(this, h), l(this, c), l(this, p), this.consumeContext(L, (t) => y(this, h, t));
  }
  get permissions() {
    return this._permissions;
  }
  set permissions(t) {
    this._permissions = t;
    const e = t.map((i) => i.document.id);
    r(this, n, U).call(this, e);
  }
  getFormElement() {
  }
  render() {
    return u`${r(this, n, D).call(this)} ${r(this, n, O).call(this)}`;
  }
};
f = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
U = async function(t) {
  const { asObservable: e } = await a(this, f).requestItems(t);
  this.observe(e(), (i) => this._items = i);
};
I = async function(t) {
  const e = r(this, n, _).call(this, t.unique)?.verbs ?? [], i = await r(this, n, w).call(this, t, e);
  JSON.stringify(i) !== JSON.stringify(e) && (this.permissions = this._permissions.map((s) => s.document.id === t.unique ? {
    ...s,
    verbs: i
  } : s), this.dispatchEvent(new E()));
};
M = async function() {
  y(this, c, a(this, h)?.open(this, A, {
    data: {
      hideTreeRoot: !0,
      // prevent already selected items to be picked again
      // TODO: this type is wrong. It should be the tree item type
      pickableFilter: (t) => !this._items?.map((e) => e.unique).includes(t.unique)
    }
  })), a(this, c)?.addEventListener(J.TYPE, async (t) => {
    const i = t.unique;
    if (!i) return;
    const s = await r(this, n, $).call(this, i);
    r(this, n, w).call(this, s).then(
      (o) => {
        a(this, c)?.reject();
        const m = {
          $type: "DocumentPermissionPresentationModel",
          document: { id: i },
          verbs: o
        };
        this.permissions = [...this._permissions, m], this.dispatchEvent(new E());
      },
      () => {
        a(this, c)?.reject();
      }
    );
  });
};
$ = async function(t) {
  if (!t) throw new Error("Could not open permissions modal, no unique was provided");
  const { data: e } = await a(this, f).requestItems([t]), i = e?.[0];
  if (!i) throw new Error("No document item found");
  return i;
};
w = async function(t, e = []) {
  const i = t.variants[0]?.name, s = i ? `Permissions for ${i}` : "Permissions";
  y(this, p, a(this, h)?.open(this, K, {
    data: {
      unique: t.unique,
      entityType: t.entityType,
      headline: s
    },
    value: {
      allowedVerbs: e
    }
  }));
  try {
    return (await a(this, p)?.onSubmit())?.allowedVerbs;
  } catch {
    throw new Error();
  }
};
q = function(t) {
  const e = r(this, n, _).call(this, t.unique);
  e && (this.permissions = this._permissions.filter((i) => JSON.stringify(i) !== JSON.stringify(e)), this.dispatchEvent(new E()));
};
D = function() {
  if (this._items)
    return u`
			<uui-ref-list>
				${G(
      this._items,
      (t) => t.unique,
      (t) => r(this, n, T).call(this, t)
    )}
			</uui-ref-list>
		`;
};
O = function() {
  return u`<uui-button
			id="btn-add"
			look="placeholder"
			@click=${r(this, n, M)}
			label=${this.localize.term("general_add")}></uui-button>`;
};
T = function(t) {
  if (!t.unique) return;
  const e = t.variants[0]?.name, i = r(this, n, k).call(this, t.unique);
  return u`
			<uui-ref-node .name=${e} .detail=${i || ""}>
				${r(this, n, C).call(this, t)} ${r(this, n, N).call(this, t)}
				<uui-action-bar slot="actions">
					${r(this, n, S).call(this, t)} ${r(this, n, R).call(this, t)}
				</uui-action-bar>
			</uui-ref-node>
		`;
};
C = function(t) {
  if (t.documentType.icon)
    return u`<uui-icon slot="icon" name=${t.documentType.icon}></uui-icon>`;
};
N = function(t) {
  if (t.isTrashed)
    return u`<uui-tag size="s" slot="tag" color="danger">Trashed</uui-tag>`;
};
S = function(t) {
  return u`
			<uui-button
				@click=${() => r(this, n, I).call(this, t)}
				label=${this.localize.term("general_edit")}></uui-button>
		`;
};
R = function(t) {
  return u`<uui-button
			@click=${() => r(this, n, q).call(this, t)}
			label=${this.localize.term("general_remove")}></uui-button>`;
};
_ = function(t) {
  return this._permissions?.find((e) => e.document.id === t);
};
k = function(t) {
  const e = r(this, n, _).call(this, t);
  if (e)
    return V.getAllExtensions().filter((i) => i.type === "entityUserPermission").filter(
      (i) => i.meta.verbs.every((s) => e.verbs.includes(s))
    ).map((i) => {
      const s = i;
      return s.meta.label ? this.localize.string(s.meta.label) : s.name;
    }).join(", ");
};
d.styles = [
  B`
			#btn-add {
				width: 100%;
			}
		`
];
g([
  F()
], d.prototype, "_items", 2);
d = g([
  W("umb-input-document-granular-user-permission")
], d);
const lt = d;
export {
  d as UmbInputDocumentGranularUserPermissionElement,
  lt as default
};
//# sourceMappingURL=input-document-granular-user-permission.element-pMsuZ6uL.js.map
