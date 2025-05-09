import { g as k } from "./utils-BEu6TUZg.js";
import { h as q, U as x } from "./constants-vWMF1ODp.js";
import { U as z } from "./paths-9lh36dmS.js";
import { nothing as f, repeat as D, html as u, ifDefined as $, css as O, state as v, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { UserStateModel as A } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbUserGroupCollectionRepository as R } from "@umbraco-cms/backoffice/user-group";
var I = Object.defineProperty, N = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, m = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? N(t, i) : t, p = e.length - 1, _; p >= 0; p--)
    (_ = e[p]) && (n = (r ? _(t, i, n) : _(n)) || n);
  return r && n && I(t, i, n), n;
}, g = (e, t, i) => t.has(e) || C("Cannot " + i), l = (e, t, i) => (g(e, t, "read from private field"), i ? i.call(e) : t.get(e)), d = (e, t, i) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), y = (e, t, i, r) => (g(e, t, "write to private field"), t.set(e, i), i), a = (e, t, i) => (g(e, t, "access private method"), i), h, o, U, s, w, L, b, S, E, T, G;
let c = class extends W {
  constructor() {
    super(), d(this, s), this._users = [], this._selection = [], this._loading = !1, d(this, h, []), d(this, o), d(this, U, new R(this)), this.consumeContext(q, (e) => {
      y(this, o, e), this.observe(
        l(this, o).selection.selection,
        (t) => this._selection = t,
        "umbCollectionSelectionObserver"
      ), this.observe(l(this, o).items, (t) => this._users = t, "umbCollectionItemsObserver");
    }), a(this, s, w).call(this);
  }
  render() {
    return this._loading ? f : u`
			<div id="user-grid">
				${D(
      this._users,
      (e) => e.unique,
      (e) => a(this, s, S).call(this, e)
    )}
			</div>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
w = async function() {
  this._loading = !0;
  const { data: e } = await l(this, U).requestCollection();
  y(this, h, e?.items ?? []), this._loading = !1;
};
L = function(e) {
  l(this, o)?.selection.select(e.unique ?? "");
};
b = function(e) {
  l(this, o)?.selection.deselect(e.unique ?? "");
};
S = function(e) {
  const t = z + "/edit/" + e.unique;
  return u`
			<uui-card-user
				.name=${e.name ?? "Unnamed user"}
				href=${t}
				selectable
				?select-only=${this._selection.length > 0}
				?selected=${l(this, o)?.selection.isSelected(e.unique)}
				@selected=${() => a(this, s, L).call(this, e)}
				@deselected=${() => a(this, s, b).call(this, e)}>
				${a(this, s, E).call(this, e)} ${a(this, s, T).call(this, e)} ${a(this, s, G).call(this, e)}
				<umb-user-avatar
					slot="avatar"
					.name=${e.name}
					.kind=${e.kind}
					.imgUrls=${e.avatarUrls}
					style="font-size: 1.6rem;"></umb-user-avatar>
			</uui-card-user>
		`;
};
E = function(e) {
  if (e.state && e.state === A.ACTIVE)
    return f;
  const t = e.state ? k(e.state) : void 0;
  return u`<uui-tag
			slot="tag"
			size="s"
			look="${$(t?.look)}"
			color="${$(t?.color)}">
			<umb-localize key=${"user_" + t?.key}></umb-localize>
		</uui-tag>`;
};
T = function(e) {
  const t = l(this, h).filter((i) => e.userGroupUniques?.map((r) => r.unique).includes(i.unique)).map((i) => i.name).join(", ");
  return u`<div>${t}</div>`;
};
G = function(e) {
  if (e.kind === x.API) return f;
  if (!e.lastLoginDate)
    return u`<div class="user-login-time">${`${e.name} ${this.localize.term("user_noLogin")}`}</div>`;
  const i = new Date(e.lastLoginDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return u`<div class="user-login-time">
			<umb-localize key="user_lastLogin"></umb-localize>
			${this.localize.date(e.lastLoginDate)} ${i}
		</div>`;
};
c.styles = [
  P,
  O`
			:host {
				display: flex;
				flex-direction: column;
			}

			#user-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
				gap: var(--uui-size-space-4);
			}

			uui-card-user {
				width: 100%;
				height: 180px;
				justify-content: normal;
				padding-top: var(--uui-size-space-5);
			}

			.user-login-time {
				margin-top: auto;
			}
		`
];
m([
  v()
], c.prototype, "_users", 2);
m([
  v()
], c.prototype, "_selection", 2);
m([
  v()
], c.prototype, "_loading", 2);
c = m([
  M("umb-user-grid-collection-view")
], c);
const Y = c;
export {
  c as UmbUserGridCollectionViewElement,
  Y as default
};
//# sourceMappingURL=user-grid-collection-view.element-B0DkE2aD.js.map
