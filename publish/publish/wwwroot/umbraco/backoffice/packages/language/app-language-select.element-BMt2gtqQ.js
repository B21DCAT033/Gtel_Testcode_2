import { UmbLanguageCollectionRepository as O } from "./language-collection.repository-didMva8o.js";
import { d as E } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { nothing as U, css as x, query as C, state as u, customElement as R } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UMB_CURRENT_USER_CONTEXT as S } from "@umbraco-cms/backoffice/current-user";
var T = Object.defineProperty, k = Object.getOwnPropertyDescriptor, L = (e) => {
  throw TypeError(e);
}, o = (e, t, a, p) => {
  for (var r = p > 1 ? void 0 : p ? k(t, a) : t, _ = e.length - 1, d; _ >= 0; _--)
    (d = e[_]) && (r = (p ? d(t, a, r) : d(r)) || r);
  return p && r && T(t, a, r), r;
}, y = (e, t, a) => t.has(e) || L("Cannot " + a), g = (e, t, a) => (y(e, t, "read from private field"), t.get(e)), n = (e, t, a) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), v = (e, t, a, p) => (y(e, t, "write to private field"), t.set(e, a), a), f = (e, t, a) => (y(e, t, "access private method"), a), w, i, b, h, c, l, m, A;
let s = class extends M {
  constructor() {
    super(), n(this, l), this._languages = [], this._appLanguageIsReadOnly = !1, this._isOpen = !1, n(this, w, new O(this)), n(this, i), n(this, b), n(this, h), n(this, c), this._disallowedLanguages = [], this.consumeContext(E, (e) => {
      v(this, i, e), f(this, l, A).call(this);
    }), this.consumeContext(S, (e) => {
      this.observe(e.languages, (t) => {
        v(this, h, t), f(this, l, m).call(this);
      }), this.observe(e.hasAccessToAllLanguages, (t) => {
        v(this, c, t), f(this, l, m).call(this);
      });
    });
  }
  render() {
    return U;
  }
};
w = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
m = function() {
  this._disallowedLanguages = this._languages?.filter((e) => g(this, c) ? !1 : !g(this, h)?.includes(e.unique));
};
A = async function() {
  g(this, i) && (this.observe(g(this, i).appLanguage, (e) => {
    this._appLanguage = e;
  }), this.observe(g(this, i).appLanguageReadOnlyState.isReadOnly, (e) => {
    this._appLanguageIsReadOnly = e;
  }));
};
s.styles = [
  x`
			:host {
				display: block;
				position: relative;
				z-index: 10;
			}

			#toggle {
				color: var(--uui-color-text);
				width: 100%;
				text-align: left;
				background: none;
				border: none;
				height: var(--umb-header-layout-height);
				padding: 0 var(--uui-size-8);
				border-bottom: 1px solid var(--uui-color-border);
				font-size: 14px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				cursor: pointer;
				font-family: inherit;
			}

			#toggle:hover {
				background-color: var(--uui-color-surface-emphasis);
			}

			uui-menu-item {
				color: var(--uui-color-text);
			}
		`
];
o([
  C("#dropdown-popover")
], s.prototype, "_popoverElement", 2);
o([
  u()
], s.prototype, "_languages", 2);
o([
  u()
], s.prototype, "_appLanguage", 2);
o([
  u()
], s.prototype, "_appLanguageIsReadOnly", 2);
o([
  u()
], s.prototype, "_isOpen", 2);
o([
  u()
], s.prototype, "_disallowedLanguages", 2);
s = o([
  R("umb-app-language-select")
], s);
const I = s;
export {
  s as UmbAppLanguageSelectElement,
  I as default
};
//# sourceMappingURL=app-language-select.element-BMt2gtqQ.js.map
