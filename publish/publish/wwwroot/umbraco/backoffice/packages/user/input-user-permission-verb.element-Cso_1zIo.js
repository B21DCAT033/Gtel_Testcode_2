import { UmbTextStyles as h } from "@umbraco-cms/backoffice/style";
import { css as u, property as d, customElement as v, html as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
var f = Object.defineProperty, y = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, o = (e, t, r, a) => {
  for (var i = a > 1 ? void 0 : a ? y(t, r) : t, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (i = (a ? l(t, r, i) : l(i)) || i);
  return a && i && f(t, r, i), i;
}, w = (e, t, r) => t.has(e) || m("Cannot " + r), E = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r) => (w(e, t, "access private method"), r), p, c;
let s = class extends b {
  constructor() {
    super(...arguments), E(this, p), this.label = "", this.description = "", this.allowed = !1;
  }
  render() {
    return g`<div id="setting">
			<uui-toggle label=${this.label} ?checked=${this.allowed} @change=${U(this, p, c)}>
				<div id="meta">
					<div id="name">${this.label}</div>
					<small>${this.description}</small>
				</div>
			</uui-toggle>
		</div>`;
  }
};
p = /* @__PURE__ */ new WeakSet();
c = function(e) {
  e.stopPropagation(), this.allowed = e.target.checked, this.dispatchEvent(new _());
};
s.styles = [
  h,
  u`
			#setting {
				display: flex;
				align-items: center;
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-space-3) 0 var(--uui-size-space-4) 0;
			}

			#meta {
				margin-left: var(--uui-size-space-4);
				line-height: 1.2em;
			}

			#name {
				font-weight: bold;
			}
		`
];
o([
  d({ type: String, attribute: !0 })
], s.prototype, "label", 2);
o([
  d({ type: String, attribute: !0 })
], s.prototype, "description", 2);
o([
  d({ type: Boolean, attribute: !0 })
], s.prototype, "allowed", 2);
s = o([
  v("umb-input-user-permission-verb")
], s);
export {
  s as U
};
//# sourceMappingURL=input-user-permission-verb.element-Cso_1zIo.js.map
