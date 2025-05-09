import { UmbActionExecutedEvent as x } from "@umbraco-cms/backoffice/event";
import { when as D, html as w, property as y, state as f, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as U } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsElementAndApiInitializer as C } from "@umbraco-cms/backoffice/extension-api";
import "./workspace.element-eIsSWjJt.js";
var P = Object.defineProperty, I = Object.getOwnPropertyDescriptor, A = (t) => {
  throw TypeError(t);
}, h = (t, e, a, c) => {
  for (var l = c > 1 ? void 0 : c ? I(e, a) : e, m = t.length - 1, _; m >= 0; m--)
    (_ = t[m]) && (l = (c ? _(e, a, l) : _(l)) || l);
  return c && l && P(e, a, l), l;
}, k = (t, e, a) => e.has(t) || A("Cannot " + a), i = (t, e, a) => (k(t, e, "read from private field"), a ? a.call(t) : e.get(t)), d = (t, e, a) => e.has(t) ? A("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), b = (t, e, a, c) => (k(t, e, "write to private field"), e.set(t, a), a), p = (t, e, a) => (k(t, e, "access private method"), a), s, r, u, n, E, O, $, g, v, W;
let o = class extends M {
  constructor() {
    super(...arguments), d(this, n), d(this, s), d(this, r), d(this, u), this._isDisabled = !1, this._items = [];
  }
  set manifest(t) {
    if (!t) return;
    const e = i(this, s);
    e !== t && (b(this, s, t), this._href = t?.meta.href, this._additionalOptions = t?.meta.additionalOptions, p(this, n, E).call(this), this.requestUpdate("manifest", e));
  }
  get manifest() {
    return i(this, s);
  }
  set api(t) {
    b(this, r, t), i(this, r)?.getHref?.().then((e) => {
      this._href = e ?? this.manifest?.meta.href;
    }), i(this, r)?.hasAdditionalOptions?.().then((e) => {
      this._additionalOptions = e ?? this.manifest?.meta.additionalOptions;
    }), p(this, n, $).call(this);
  }
  get api() {
    return i(this, r);
  }
  render() {
    return D(
      this._items.length,
      () => w` <uui-button-group> ${p(this, n, v).call(this)} ${p(this, n, W).call(this)} </uui-button-group> `,
      () => p(this, n, v).call(this)
    );
  }
};
s = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
E = async function() {
  if (!i(this, s)) return;
  const t = /* @__PURE__ */ new Set();
  if (i(this, s) && (t.add(i(this, s).alias), i(this, s).overwrites))
    for (const e of i(this, s).overwrites)
      t.add(e);
  p(this, n, g).call(this, Array.from(t));
};
O = async function(t) {
  if (this._href && t.stopPropagation(), !this._href) {
    this._additionalOptions || (this._buttonState = "waiting");
    try {
      if (!i(this, r)) throw new Error("No api defined");
      await i(this, r).execute(), this._additionalOptions || (this._buttonState = "success");
    } catch {
      this._additionalOptions || (this._buttonState = "failed");
    }
  }
  this.dispatchEvent(new x());
};
$ = function() {
  this.observe(
    i(this, r)?.isDisabled,
    (t) => {
      this._isDisabled = t || !1;
    },
    "isDisabledObserver"
  );
};
g = function(t) {
  i(this, u)?.destroy(), b(this, u, new C(
    this,
    U,
    "workspaceActionMenuItem",
    z,
    (e) => Array.isArray(e.forWorkspaceActions) ? e.forWorkspaceActions.some((a) => t.includes(a)) : t.includes(e.forWorkspaceActions),
    (e) => {
      this._items = e;
    },
    void 0
    // We can leave the alias to undefined, as we destroy this our selfs.
  ));
};
v = function() {
  const t = i(this, s)?.meta.label ? this.localize.string(i(this, s).meta.label) : i(this, s)?.name ?? "";
  return w`
			<uui-button
				data-mark="workspace-action:${i(this, s)?.alias}"
				.href=${this._href}
				look=${i(this, s)?.meta.look ?? "default"}
				color=${i(this, s)?.meta.color ?? "default"}
				label=${this._additionalOptions ? t + "…" : t}
				.disabled=${this._isDisabled}
				.state=${this._buttonState}
				@click=${p(this, n, O)}></uui-button>
		`;
};
W = function() {
  return w`
			<umb-workspace-action-menu
				.items=${this._items}
				color="${i(this, s)?.meta.color ?? "default"}"
				look="${i(this, s)?.meta.look ?? "default"}"></umb-workspace-action-menu>
		`;
};
h([
  y({ type: Object, attribute: !1 })
], o.prototype, "manifest", 1);
h([
  y({ attribute: !1 })
], o.prototype, "api", 1);
h([
  f()
], o.prototype, "_buttonState", 2);
h([
  f()
], o.prototype, "_additionalOptions", 2);
h([
  f()
], o.prototype, "_href", 2);
h([
  f()
], o.prototype, "_isDisabled", 2);
h([
  f()
], o.prototype, "_items", 2);
o = h([
  S("umb-workspace-action")
], o);
const R = o;
function z(t) {
  return [{ meta: t.meta }];
}
export {
  o as UmbWorkspaceActionElement,
  R as default
};
//# sourceMappingURL=workspace-action-default-kind.element-aKJXgxIo.js.map
