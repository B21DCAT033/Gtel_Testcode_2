import { UmbTextStyles as h } from "@umbraco-cms/backoffice/style";
import { nothing as y, html as m, css as _, state as p, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as v } from "@umbraco-cms/backoffice/modal";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, u = (e, t, i, o) => {
  for (var s = o > 1 ? void 0 : o ? g(t, i) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (s = (o ? a(t, i, s) : a(s)) || s);
  return o && s && f(t, i, s), s;
}, E = (e, t, i) => t.has(e) || d("Cannot " + i), w = (e, t, i) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), C = (e, t, i) => (E(e, t, "access private method"), i), l, c;
let n = class extends v {
  constructor() {
    super(...arguments), w(this, l), this._headline = "Set permissions";
  }
  set data(e) {
    super.data = e, this._entityType = e?.entityType, this._headline = e?.headline ?? this._headline;
  }
  render() {
    return m`
			<umb-body-layout headline=${this._headline}>
				<uui-box>
					${this._entityType ? m` <umb-input-entity-user-permission
								.entityType=${this._entityType}
								.allowedVerbs=${this.value?.allowedVerbs ?? []}
								@change=${C(this, l, c)}></umb-input-entity-user-permission>` : y}
				</uui-box>

				<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}">Cancel</uui-button>
				<uui-button
					slot="actions"
					id="confirm"
					color="positive"
					look="primary"
					label="Confirm"
					@click=${this._submitModal}></uui-button>
			</umb-body-layout>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
c = function(e) {
  const t = e.target;
  this.updateValue({ allowedVerbs: t.allowedVerbs });
};
n.styles = [
  h,
  _`
			.permission-toggle {
				display: flex;
				align-items: center;
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-space-3) 0 var(--uui-size-space-4) 0;
			}

			.permission-meta {
				margin-left: var(--uui-size-space-4);
				line-height: 1.2em;
			}

			.permission-name {
				font-weight: bold;
			}
		`
];
u([
  p()
], n.prototype, "_headline", 2);
u([
  p()
], n.prototype, "_entityType", 2);
n = u([
  b("umb-entity-user-permission-settings-modal")
], n);
const $ = n;
export {
  n as UmbEntityUserPermissionSettingsModalElement,
  $ as default
};
//# sourceMappingURL=entity-user-permission-settings-modal.element-BvDTf6lK.js.map
