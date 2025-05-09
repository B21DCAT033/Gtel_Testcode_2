import { property as T, state as h, customElement as U, nothing as g, html as b, css as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbCreateEntityAction as G } from "../create.action-BJxdKw6w.js";
import { UmbDeleteEntityAction as j } from "../delete.action-DXp0Xn_o.js";
import { UmbDuplicateEntityAction as H } from "../duplicate.action-CJqMCMIH.js";
import { b as Q, U as X, a as Z } from "../delete.action.kind-D9M4fvfx.js";
import { U as tt } from "../entity-action-base-C1FfYSbT.js";
import { UmbEntityContext as N } from "@umbraco-cms/backoffice/entity";
import { a as E } from "../request-reload-structure-for-entity.event-CHtdC9hO.js";
import { U as rt } from "../request-reload-structure-for-entity.event-CHtdC9hO.js";
import { U as st } from "../default.action.kind-B00NCT7z.js";
var S = Object.defineProperty, D = Object.getOwnPropertyDescriptor, d = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? D(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (i = (s ? p(e, r, i) : p(i)) || i);
  return s && i && S(e, r, i), i;
};
const M = "umb-entity-actions-table-column-view";
let y = class extends O {
  constructor() {
    super(...arguments), this._isOpen = !1;
  }
  render() {
    return this.value ? b`
			<umb-entity-actions-bundle .entityType=${this.value.entityType} .unique=${this.value.unique}>
			</umb-entity-actions-bundle>
		` : g;
  }
};
d([
  T({ attribute: !1 })
], y.prototype, "value", 2);
d([
  h()
], y.prototype, "_isOpen", 2);
y = d([
  U(M)
], y);
var L = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, q = (t) => {
  throw TypeError(t);
}, a = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Y(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (i = (s ? p(e, r, i) : p(i)) || i);
  return s && i && L(e, r, i), i;
}, v = (t, e, r) => e.has(t) || q("Cannot " + r), m = (t, e, r) => (v(t, e, "read from private field"), e.get(t)), l = (t, e, r) => e.has(t) ? q("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), C = (t, e, r, s) => (v(t, e, "write to private field"), e.set(t, r), r), A = (t, e, r) => (v(t, e, "access private method"), r), c, _, f, u;
let n = class extends O {
  constructor() {
    super(...arguments), l(this, _), this._props = {}, l(this, c, new N(this)), l(this, u);
  }
  get entityType() {
    return this._props.entityType;
  }
  set entityType(t) {
    t === void 0 || t === this._props.entityType || (this._props.entityType = t, A(this, _, f).call(this), this.requestUpdate("_props"), this._filter = (e) => e.forEntityTypes.includes(t));
  }
  get unique() {
    return this._props.unique;
  }
  set unique(t) {
    t !== this._props.unique && (this._props.unique = t, A(this, _, f).call(this), this.requestUpdate("_props"));
  }
  render() {
    return this._filter ? b`
					<umb-extension-with-api-slot
						type="entityAction"
						.filter=${this._filter}
						.elementProps=${this._props}
						.apiArgs=${this._apiArgs}
						.renderMethod=${(t, e) => (!m(this, u) && e === 0 && (t.component?.updateComplete.then(async () => {
      const r = t.component?.shadowRoot?.querySelector("uui-menu-item");
      r?.updateComplete.then(async () => {
        r?.shadowRoot?.querySelector("#label-button")?.focus?.();
      });
    }), C(this, u, !0)), t.component)}></umb-extension-with-api-slot>
				` : "";
  }
};
c = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
f = function() {
  !this._props.entityType || this._props.unique === void 0 || (m(this, c).setEntityType(this._props.entityType), m(this, c).setUnique(this._props.unique), C(this, u, !1), this._apiArgs = (t) => [{ entityType: this._props.entityType, unique: this._props.unique, meta: t.meta }]);
};
u = /* @__PURE__ */ new WeakMap();
n.styles = [
  x`
			:host {
				--uui-menu-item-flat-structure: 1;
			}
		`
];
a([
  T({ type: String, attribute: "entity-type" })
], n.prototype, "entityType", 1);
a([
  h()
], n.prototype, "_filter", 2);
a([
  T({ type: String })
], n.prototype, "unique", 1);
a([
  h()
], n.prototype, "_props", 2);
a([
  h()
], n.prototype, "_apiArgs", 2);
n = a([
  U("umb-entity-action-list")
], n);
class I extends E {
  static {
    this.TYPE = "entity-updated";
  }
  constructor(e) {
    super(I.TYPE, e);
  }
}
class P extends E {
  static {
    this.TYPE = "entity-deleted";
  }
  constructor(e) {
    super(P.TYPE, e);
  }
}
class w extends E {
  static {
    this.TYPE = "request-reload-children-of-entity";
  }
  constructor(e) {
    super(w.TYPE, e);
  }
}
export {
  st as UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST,
  Q as UMB_ENTITY_ACTION_DELETE_KIND_MANIFEST,
  X as UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL,
  Z as UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL_ALIAS,
  G as UmbCreateEntityAction,
  j as UmbDeleteEntityAction,
  H as UmbDuplicateEntityAction,
  tt as UmbEntityActionBase,
  E as UmbEntityActionEvent,
  n as UmbEntityActionListElement,
  P as UmbEntityDeletedEvent,
  I as UmbEntityUpdatedEvent,
  w as UmbRequestReloadChildrenOfEntityEvent,
  rt as UmbRequestReloadStructureForEntityEvent
};
//# sourceMappingURL=index.js.map
