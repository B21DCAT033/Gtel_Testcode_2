import { t as M } from "./manifests-C4T1daBS.js";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { css as S, state as s, customElement as A, ifDefined as K, html as l, when as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { U as B } from "./index-L-35ogTa.js";
import { UMB_WORKSPACE_MODAL as G } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as V } from "@umbraco-cms/backoffice/router";
import { UmbMemberTypeItemRepository as X } from "@umbraco-cms/backoffice/member-type";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as H } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as J } from "@umbraco-cms/backoffice/settings";
import { createExtensionApiByAlias as Q } from "@umbraco-cms/backoffice/extension-registry";
const f = { dateStyle: "long", timeStyle: "short" };
var Y = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, u = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? Z(t, r) : t, h = e.length - 1, c; h >= 0; h--)
    (c = e[h]) && (a = (n ? c(t, r, a) : c(a)) || a);
  return n && a && Y(t, r, a), a;
}, T = (e, t, r) => t.has(e) || U("Cannot " + r), _ = (e, t, r) => (T(e, t, "read from private field"), r ? r.call(e) : t.get(e)), $ = (e, t, r) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), j = (e, t, r, n) => (T(e, t, "write to private field"), t.set(e, r), r), C = (e, t, r) => (T(e, t, "access private method"), r), m, z, v, x, I;
let o = class extends O {
  constructor() {
    super(), $(this, v), this._memberTypeUnique = "", this._memberTypeName = "", this._memberTypeIcon = "", this._editMemberTypePath = "", this._createDate = this.localize.term("general_unknown"), this._updateDate = this.localize.term("general_unknown"), this._unique = "", this._hasSettingsAccess = !1, $(this, m), $(this, z, new X(this)), new V(this, G).addAdditionalPath("member-type").onSetup(() => ({ data: { entityType: "member-type", preset: {} } })).observeRouteBuilder((e) => {
      this._editMemberTypePath = e({});
    }), this.consumeContext(M, async (e) => {
      j(this, m, e), this.observe(_(this, m).contentTypeUnique, (r) => this._memberTypeUnique = r || ""), this.observe(_(this, m).createDate, (r) => this._createDate = C(this, v, x).call(this, r)), this.observe(_(this, m).updateDate, (r) => this._updateDate = C(this, v, x).call(this, r)), this.observe(_(this, m).unique, (r) => this._unique = r || ""), this.observe(_(this, m).kind, (r) => this._memberKind = r);
      const t = (await _(this, z).requestItems([this._memberTypeUnique])).data?.[0];
      t && (this._memberTypeName = t.name, this._memberTypeIcon = t.icon);
    }), Q(this, H, [
      {
        config: {
          match: J
        },
        onChange: (e) => {
          this._hasSettingsAccess = e;
        }
      }
    ]);
  }
  render() {
    return C(this, v, I).call(this);
  }
};
m = /* @__PURE__ */ new WeakMap();
z = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
x = function(e) {
  return e ? this.localize.date(e, f) : this.localize.term("general_unknown");
};
I = function() {
  return l`
			<umb-stack look="compact">
				<div>
					<h4><umb-localize key="content_createDate">Created</umb-localize></h4>
					<span> ${this._createDate} </span>
				</div>
				<div>
					<h4><umb-localize key="content_updateDate">Last edited</umb-localize></h4>
					<span> ${this._updateDate} </span>
				</div>
				<div>
					<h4><umb-localize key="content_membertype">Member Type</umb-localize></h4>
					<uui-ref-node
						standalone
						.name=${this._memberTypeName}
						href=${K(
    this._hasSettingsAccess ? this._editMemberTypePath + "edit/" + this._memberTypeUnique : void 0
  )}
						?readonly=${!this._hasSettingsAccess}>
						<umb-icon slot="icon" .name=${this._memberTypeIcon}></umb-icon>
					</uui-ref-node>
				</div>
				<div>
					<h4><umb-localize key="member_kind"></umb-localize></h4>
					<span
						>${this._memberKind === B.API ? this.localize.term("member_memberKindApi") : this.localize.term("member_memberKindDefault")}</span
					>
				</div>
				<div>
					<h4><umb-localize key="template_id">Id</umb-localize></h4>
					<span>${this._unique}</span>
				</div>
			</umb-stack>
		`;
};
o.styles = [
  D,
  S`
			h4 {
				margin: 0;
			}

			uui-ref-node[readonly] {
				padding-top: 7px;
				padding-bottom: 7px;
			}
		`
];
u([
  s()
], o.prototype, "_memberTypeUnique", 2);
u([
  s()
], o.prototype, "_memberTypeName", 2);
u([
  s()
], o.prototype, "_memberTypeIcon", 2);
u([
  s()
], o.prototype, "_editMemberTypePath", 2);
u([
  s()
], o.prototype, "_createDate", 2);
u([
  s()
], o.prototype, "_updateDate", 2);
u([
  s()
], o.prototype, "_unique", 2);
u([
  s()
], o.prototype, "_memberKind", 2);
u([
  s()
], o.prototype, "_hasSettingsAccess", 2);
o = u([
  A("umb-member-workspace-view-member-info")
], o);
var ee = Object.defineProperty, te = Object.getOwnPropertyDescriptor, N = (e) => {
  throw TypeError(e);
}, g = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? te(t, r) : t, h = e.length - 1, c; h >= 0; h--)
    (c = e[h]) && (a = (n ? c(t, r, a) : c(a)) || a);
  return n && a && ee(t, r, a), a;
}, q = (e, t, r) => t.has(e) || N("Cannot " + r), y = (e, t, r) => (q(e, t, "read from private field"), r ? r.call(e) : t.get(e)), P = (e, t, r) => t.has(e) ? N("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), p = (e, t, r) => (q(e, t, "access private method"), r), i, b, L, w, E, R, W, F;
let d = class extends O {
  constructor() {
    super(), P(this, i), this._showChangePasswordForm = !1, this._newPasswordError = "", this._isNew = !0, P(this, w, () => {
      const e = this.shadowRoot?.querySelector('uui-input[name="newPassword"]')?.value, t = this.shadowRoot?.querySelector(
        'uui-input[name="confirmPassword"]'
      )?.value;
      if (e !== t) {
        this._newPasswordError = "Passwords do not match";
        return;
      }
      this._newPasswordError = "", this._workspaceContext?.set("newPassword", e);
    }), P(this, E, () => {
      this._workspaceContext?.set("newPassword", ""), this._showChangePasswordForm = !1, this._newPasswordError = "";
    }), this.consumeContext(M, (e) => {
      this._workspaceContext = e, this.observe(this._workspaceContext.isNew, (t) => {
        this._isNew = !!t;
      });
    });
  }
  render() {
    return l`
			<umb-body-layout header-fit-height>
				<div id="main">${p(this, i, W).call(this)} ${p(this, i, F).call(this)}</div>
			</umb-body-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
b = function(e, t) {
  this._workspaceContext && this._workspaceContext.set(e, t);
};
L = function(e) {
  const t = e.target.selection;
  this._workspaceContext?.set("groups", t);
};
w = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
R = function() {
  return this._isNew ? l`
				<umb-property-layout label=${this.localize.term("user_password")} mandatory>
					<uui-input
						slot="editor"
						name="newPassword"
						label=${this.localize.term("user_passwordEnterNew")}
						type="password"
						@input=${() => y(this, w).call(this)}></uui-input>
				</umb-property-layout>

				<umb-property-layout label="Confirm password" mandatory>
					<uui-input
						slot="editor"
						name="confirmPassword"
						label="Confirm password"
						type="password"
						@input=${() => y(this, w).call(this)}></uui-input>
				</umb-property-layout>

				${k(this._newPasswordError, () => l`<p class="validation-error">${this._newPasswordError}</p>`)}
			` : l`
			<umb-property-layout label=${this.localize.term("general_changePassword")}>
				${k(
    this._showChangePasswordForm,
    () => l`
						<div slot="editor">
							<umb-property-layout label=${this.localize.term("user_newPassword")} mandatory>
								<uui-input
									slot="editor"
									name="newPassword"
									label=${this.localize.term("user_newPassword")}
									type="password"
									@input=${() => y(this, w).call(this)}></uui-input>
							</umb-property-layout>
							<umb-property-layout label=${this.localize.term("user_confirmNewPassword")} mandatory>
								<uui-input
									slot="editor"
									name="confirmPassword"
									label=${this.localize.term("user_confirmNewPassword")}
									type="password"
									@input=${() => y(this, w).call(this)}></uui-input>
							</umb-property-layout>
							${k(this._newPasswordError, () => l`<p class="validation-error">${this._newPasswordError}</p>`)}
							<uui-button
								label=${this.localize.term("general_cancel")}
								look="secondary"
								@click=${y(this, E)}></uui-button>
						</div>
					`,
    () => l`
						<uui-button
							slot="editor"
							label=${this.localize.term("general_changePassword")}
							look="secondary"
							@click=${() => this._showChangePasswordForm = !0}></uui-button>
					`
  )}
			</umb-property-layout>
		`;
};
W = function() {
  if (this._workspaceContext)
    return l`
			<div id="left-column">
				<uui-box>
					<umb-property-layout label=${this.localize.term("general_username")} mandatory>
						<uui-input
							slot="editor"
							name="login"
							label=${this.localize.term("general_username")}
							value=${this._workspaceContext.username}
							required
							required-message=${this.localize.term("user_loginnameRequired")}
							@input=${(e) => p(this, i, b).call(this, "username", e.target.value)}></uui-input>
					</umb-property-layout>

					<umb-property-layout label=${this.localize.term("general_email")} mandatory>
						<uui-input
							slot="editor"
							name="email"
							label=${this.localize.term("general_email")}
							value=${this._workspaceContext.email}
							required
							required-message=${this.localize.term("user_emailRequired")}
							@input=${(e) => p(this, i, b).call(this, "email", e.target.value)}></uui-input>
					</umb-property-layout>

					${p(this, i, R).call(this)}

					<umb-property-layout label=${this.localize.term("content_membergroup")}>
						<umb-input-member-group
							slot="editor"
							@change=${p(this, i, L)}
							.selection=${this._workspaceContext.memberGroups}></umb-input-member-group>
					</umb-property-layout>

					<umb-property-layout label=${this.localize.term("user_stateApproved")}>
						<uui-toggle
							slot="editor"
							.checked=${this._workspaceContext.isApproved}
							@change=${(e) => p(this, i, b).call(this, "isApproved", e.target.checked)}>
						</uui-toggle>
					</umb-property-layout>

					<umb-property-layout label=${this.localize.term("user_stateLockedOut")}>
						<uui-toggle
							slot="editor"
							?disabled=${this._isNew || !this._workspaceContext.isLockedOut}
							.checked=${this._workspaceContext.isLockedOut}
							@change=${(e) => p(this, i, b).call(this, "isLockedOut", e.target.checked)}>
						</uui-toggle>
					</umb-property-layout>

					<umb-property-layout label=${this.localize.term("member_2fa")}>
						<uui-toggle
							slot="editor"
							?disabled=${this._isNew || !this._workspaceContext.isTwoFactorEnabled}
							.checked=${this._workspaceContext.isTwoFactorEnabled}
							@change=${(e) => p(this, i, b).call(this, "isTwoFactorEnabled", e.target.checked)}>
						</uui-toggle>
					</umb-property-layout>
				</uui-box>
			</div>
		`;
};
F = function() {
  if (this._workspaceContext)
    return l`
			<div id="right-column">
				<uui-box>
					<umb-stack look="compact">
						<div>
							<h4><umb-localize key="user_failedPasswordAttempts">Failed login attempts</umb-localize></h4>
							<span>${this._workspaceContext.failedPasswordAttempts}</span>
						</div>
						<div>
							<h4><umb-localize key="user_lastLockoutDate">Last lockout date</umb-localize></h4>
							<span>
								${this._workspaceContext.lastLockOutDate ? this.localize.date(this._workspaceContext.lastLockOutDate, f) : this.localize.term("general_never")}
							</span>
						</div>
						<div>
							<h4><umb-localize key="user_lastLogin">Last login</umb-localize></h4>
							<span>
								${this._workspaceContext.lastLoginDate ? this.localize.date(this._workspaceContext.lastLoginDate, f) : this.localize.term("general_never")}
							</span>
						</div>
						<div>
							<h4><umb-localize key="user_passwordChangedGeneric">Password changed</umb-localize></h4>
							<span>
								${this._workspaceContext.lastPasswordChangeDate ? this.localize.date(this._workspaceContext.lastPasswordChangeDate, f) : this.localize.term("general_never")}
							</span>
						</div>
					</umb-stack>
				</uui-box>

				<uui-box>
					<umb-member-workspace-view-member-info></umb-member-workspace-view-member-info>
				</uui-box>
			</div>
		`;
};
d.styles = [
  D,
  S`
			uui-input {
				width: 100%;
			}
			#main {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-space-4);
			}
			#left-column {
				/* Is there a way to make the wrapped right column grow only when wrapped? */
				flex: 9999 1 500px;
			}
			#right-column {
				flex: 1 1 350px;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}
			uui-box {
				height: fit-content;
			}
			umb-property-layout {
				padding-block: var(--uui-size-space-4);
			}
			umb-property-layout:first-child {
				padding-top: 0;
			}
			umb-property-layout:last-child {
				padding-bottom: 0;
			}
			.validation-error {
				margin-top: 0;
				color: var(--uui-color-danger);
			}

			h4 {
				margin: 0;
			}
		`
];
g([
  s()
], d.prototype, "_showChangePasswordForm", 2);
g([
  s()
], d.prototype, "_newPasswordError", 2);
g([
  s()
], d.prototype, "_isNew", 2);
d = g([
  A("umb-member-workspace-view-member")
], d);
const ce = d;
export {
  d as UmbMemberWorkspaceViewMemberElement,
  ce as default
};
//# sourceMappingURL=member-workspace-view-member.element-Dq_IwQxI.js.map
