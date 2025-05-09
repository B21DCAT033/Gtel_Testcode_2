import { property as u, customElement as m, html as n, ifDefined as R, css as P, query as Me, state as l, nothing as S, queryAssignedElements as gt, when as _e, unsafeHTML as vt, until as wt } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as Z, UmbAppEntryPointExtensionInitializer as bt } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRepositoryBase as yt } from "@umbraco-cms/backoffice/repository";
import { UmbLocalizationController as _t } from "@umbraco-cms/backoffice/localization-api";
import { SecurityService as se, UserService as Ce, ApiError as Ct, CancelError as xt } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as q } from "@umbraco-cms/backoffice/resources";
import { UmbContextBase as Pt, UmbControllerBase as $t } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as zt } from "@umbraco-cms/backoffice/context-api";
import { UmbBundleExtensionInitializer as Et, UmbServerExtensionRegistrator as kt } from "@umbraco-cms/backoffice/extension-api";
import { UUIIconRegistryEssential as Lt } from "@umbraco-cms/backoffice/external/uui";
import "@umbraco-cms/backoffice/localization";
class It extends yt {
  #e = new _t(this);
  async login(e) {
    try {
      const r = new Request("management/api/v1/security/back-office/login", {
        method: "POST",
        body: JSON.stringify({
          username: e.username,
          password: e.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }), o = await fetch(r);
      if (!o.ok) {
        if (o.status === 402) {
          const i = await o.json();
          return {
            status: o.status,
            twoFactorView: i.twoFactorLoginView ?? "",
            twoFactorProviders: i.enabledTwoFactorProviderNames ?? []
          };
        }
        return {
          status: o.status,
          error: await this.#r(o)
        };
      }
      return {
        status: o.status,
        data: {
          username: e.username
        }
      };
    } catch (r) {
      return {
        status: 500,
        error: r instanceof Error ? r.message : this.#e.term("auth_receivedErrorFromServer")
      };
    }
  }
  async validateMfaCode(e, r) {
    try {
      const o = new Request("management/api/v1/security/back-office/verify-2fa", {
        method: "POST",
        body: JSON.stringify({
          code: e,
          provider: r
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }), i = await fetch(o);
      return i.ok ? {} : {
        error: i.status === 400 ? this.#e.term("auth_mfaInvalidCode") : await this.#r(i)
      };
    } catch (o) {
      return {
        error: o instanceof Error ? o.message : this.#e.term("auth_receivedErrorFromServer")
      };
    }
  }
  async resetPassword(e) {
    const r = await q(se.postSecurityForgotPassword({
      requestBody: {
        email: e
      }
    }));
    return r.error ? {
      error: this.#t(r.error, "Could not reset the password")
    } : {};
  }
  async validatePasswordResetCode(e, r) {
    const { data: o, error: i } = await q(se.postSecurityForgotPasswordVerify({
      requestBody: {
        user: {
          id: e
        },
        resetCode: r
      }
    }));
    return i || !o ? {
      error: this.#t(i, "Could not validate the password reset code")
    } : {
      passwordConfiguration: o.passwordConfiguration
      // TODO: Fix this when the API schema has been updated
    };
  }
  async newPassword(e, r, o) {
    const i = await q(se.postSecurityForgotPasswordReset({
      requestBody: {
        password: e,
        resetCode: r,
        user: {
          id: o
        }
      }
    }));
    return i.error ? {
      error: this.#t(i.error, "Could not reset the password")
    } : {};
  }
  async validateInviteCode(e, r) {
    const { data: o, error: i } = await q(Ce.postUserInviteVerify({
      requestBody: {
        token: e,
        user: {
          id: r
        }
      }
    }));
    return i || !o ? {
      error: this.#t(i, "Could not validate the invite code")
    } : {
      passwordConfiguration: o.passwordConfiguration
      // TODO: Fix this when the API schema has been updated
    };
  }
  async newInvitedUserPassword(e, r, o) {
    const i = await q(Ce.postUserInviteCreatePassword({
      requestBody: {
        password: e,
        token: r,
        user: {
          id: o
        }
      }
    }));
    return i.error ? {
      error: this.#t(i.error, "Could not create a password for the invited user")
    } : {};
  }
  #t(e, r) {
    if (e instanceof Ct)
      return typeof e.body == "object" ? e.body.title ?? r : r ?? "An unknown error occurred.";
    if (!(e instanceof xt))
      return r ?? "An unknown error occurred.";
  }
  async #r(e) {
    switch (e.status) {
      case 400:
      case 401:
        return this.#e.term("auth_userFailedLogin");
      case 402:
        return this.#e.term("auth_mfaText");
      case 403:
        return this.#e.term("auth_userLockedOut");
      default:
        return this.#e.term("auth_receivedErrorFromServer");
    }
  }
}
class St extends Pt {
  constructor() {
    super(...arguments), this.supportsPersistLogin = !1, this.twoFactorView = "", this.isMfaEnabled = !1, this.mfaProviders = [], this.#e = new It(this), this.#t = "";
  }
  #e;
  #t;
  set returnPath(e) {
    this.#t = e;
  }
  /**
   * Gets the return path from the query string.
   *
   * It will first look for a `ReturnUrl` parameter, then a `returnPath` parameter, and finally the `returnPath` property.
   *
   * @returns The return path from the query string.
   */
  get returnPath() {
    const e = new URLSearchParams(window.location.search);
    let r = e.get("ReturnUrl") ?? e.get("returnPath") ?? this.#t;
    if (!r)
      return "";
    const o = new URL(r, window.location.origin);
    return o.origin !== window.location.origin ? "" : o.toString();
  }
  login(e) {
    return this.#e.login(e);
  }
  resetPassword(e) {
    return this.#e.resetPassword(e);
  }
  validatePasswordResetCode(e, r) {
    return this.#e.validatePasswordResetCode(e, r);
  }
  newPassword(e, r, o) {
    return this.#e.newPassword(e, r, o);
  }
  newInvitedUserPassword(e, r, o) {
    return this.#e.newInvitedUserPassword(e, r, o);
  }
  validateInviteCode(e, r) {
    return this.#e.validateInviteCode(e, r);
  }
  validateMfaCode(e, r) {
    return this.#e.validateMfaCode(e, r);
  }
}
const k = new zt("UmbAuthContext");
class Ot extends $t {
  #e = new Lt();
  constructor(e) {
    super(e), new Et(e, Z), new bt(e, Z), new kt(e, Z).registerPublicExtensions(), this.#e.attach(e), e.classList.add("uui-text"), e.classList.add("uui-font");
  }
}
const Ut = "#umb-login-form input{width:100%;height:var(--input-height);box-sizing:border-box;display:block;border:1px solid var(--uui-color-border);border-radius:var(--uui-border-radius);background-color:var(--uui-color-surface);padding:var(--uui-size-1, 3px) var(--uui-size-space-4, 9px)}#umb-login-form uui-form-layout-item{margin-top:var(--uui-size-space-4);margin-bottom:var(--uui-size-space-4)}#umb-login-form input:focus-within{border-color:var(--uui-input-border-color-focus, var(--uui-color-border-emphasis, #a1a1a1));outline:calc(2px * var(--uui-show-focus-outline, 1)) solid var(--uui-color-focus)}#umb-login-form input:hover:not(:focus-within){border-color:var(--uui-input-border-color-hover, var(--uui-color-border-standalone, #c2c2c2))}#umb-login-form input::-ms-reveal{display:none}#umb-login-form input span{position:absolute;right:1px;top:50%;transform:translateY(-50%);z-index:100}#umb-login-form input span svg{background-color:#fff;display:block;padding:.2em;width:1.3em;height:1.3em}", Dt = [
  {
    name: "Auth Bundle",
    alias: "Umb.Auth.Bundle",
    type: "bundle",
    js: () => import("./manifests-D1h2bCQB.js")
  }
];
var Mt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, Te = (t) => {
  throw TypeError(t);
}, w = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Tt(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Mt(e, r, i), i;
}, qe = (t, e, r) => e.has(t) || Te("Cannot " + r), ne = (t, e, r) => (qe(t, e, "read from private field"), r ? r.call(t) : e.get(t)), xe = (t, e, r) => e.has(t) ? Te("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Pe = (t, e, r) => (qe(t, e, "access private method"), r), A, Y, Fe, Ae;
const $e = (t) => {
  const e = document.createElement("input");
  return e.type = t.type, e.name = t.name, e.autocomplete = t.autocomplete, e.id = t.id, e.required = !0, e.inputMode = t.inputmode, e.ariaLabel = t.label, e.autofocus = t.autofocus || !1, e;
}, ze = (t) => {
  const e = document.createElement("label"), r = document.createElement("umb-localize");
  r.key = t.localizeAlias, r.innerHTML = t.localizeFallback, e.htmlFor = t.forId, e.appendChild(r);
  const o = document.createElement("span");
  return o.innerHTML = "*", o.style.color = "red", o.style.marginLeft = "0.25rem", e.appendChild(o), e;
}, Ee = (t, e) => {
  const r = document.createElement("uui-form-layout-item");
  return r.appendChild(t), r.appendChild(e), r;
}, qt = (t) => {
  const e = document.createElement("style");
  e.innerHTML = Ut;
  const r = document.createElement("form");
  return r.id = "umb-login-form", r.name = "login-form", r.spellcheck = !1, t.push(e), t.forEach((o) => r.appendChild(o)), r;
};
let h = class extends f {
  constructor() {
    super(), xe(this, Y), this.disableLocalLogin = !1, this.usernameIsEmail = !1, this.allowPasswordReset = !1, this.allowUserInvite = !1, xe(this, A, new St(this, k)), this.addEventListener("umb-login-flow", (t) => {
      t instanceof CustomEvent && (this.flow = t.detail.flow || void 0), this.requestUpdate();
    }), new Ot(this), Z.registerMany(Dt);
  }
  set returnPath(t) {
    ne(this, A).returnPath = t;
  }
  get returnPath() {
    return ne(this, A).returnPath;
  }
  firstUpdated() {
    setTimeout(() => {
      requestAnimationFrame(() => {
        Pe(this, Y, Fe).call(this), Pe(this, Y, Ae).call(this);
      });
    }, 100);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._usernameLayoutItem?.remove(), this._passwordLayoutItem?.remove(), this._usernameLabel?.remove(), this._usernameInput?.remove(), this._passwordLabel?.remove(), this._passwordInput?.remove();
  }
  render() {
    return n`
      <umb-auth-layout background-image=${R(this.backgroundImage)}>
        ${this._renderFlowAndStatus()}
      </umb-auth-layout>
    `;
  }
  _renderFlowAndStatus() {
    if (this.disableLocalLogin)
      return n`
        <umb-error-layout no-back-link>
          <umb-localize key="auth_localLoginDisabled">Unfortunately, it is not possible to log in directly. It has been disabled by a login provider.</umb-localize>
        </umb-error-layout>
      `;
    const t = new URLSearchParams(window.location.search);
    let e = this.flow || t.get("flow")?.toLowerCase();
    const r = t.get("status");
    if (r === "resetCodeExpired")
      return n`
        <umb-error-layout
          message=${this.localize.term("auth_resetCodeExpired")}>
        </umb-error-layout>`;
    if (e === "invite-user" && r === "false")
      return n`
        <umb-error-layout
          message=${this.localize.term("auth_userInviteExpiredMessage")}>
        </umb-error-layout>`;
    switch (e && e === "mfa" && !ne(this, A).isMfaEnabled && (e = void 0), e) {
      case "mfa":
        return n`
          <umb-mfa-page></umb-mfa-page>`;
      case "reset":
        return n`
          <umb-reset-password-page gtel-logo-image=${R(this.gtelLogoImage)}></umb-reset-password-page>`;
      case "reset-password":
        return n`
          <umb-new-password-page></umb-new-password-page>`;
      case "invite-user":
        return n`
          <umb-invite-page></umb-invite-page>`;
      default:
        return n`
          <umb-login-page
            logo-image=${R(this.gtelLogoImage)}
            ?allow-password-reset=${this.allowPasswordReset}
            ?username-is-email=${this.usernameIsEmail}>
            <slot></slot>
            <slot name="subheadline" slot="subheadline"></slot>
          </umb-login-page>
        `;
    }
  }
};
A = /* @__PURE__ */ new WeakMap();
Y = /* @__PURE__ */ new WeakSet();
Fe = function() {
  this.classList.remove("uui-text"), this.classList.remove("uui-font");
};
Ae = function() {
  const t = this.usernameIsEmail ? this.localize.term("auth_email") : this.localize.term("auth_username"), e = this.localize.term("auth_password");
  this._usernameInput = $e({
    id: "username-input",
    type: "text",
    name: "username",
    autocomplete: "username",
    label: t,
    inputmode: this.usernameIsEmail ? "email" : "",
    autofocus: !0
  }), this._passwordInput = $e({
    id: "password-input",
    type: "password",
    name: "password",
    autocomplete: "current-password",
    label: e,
    inputmode: ""
  }), this._usernameLabel = ze({
    forId: "username-input",
    localizeAlias: this.usernameIsEmail ? "auth_email" : "auth_username",
    localizeFallback: this.usernameIsEmail ? "Email" : "Username"
  }), this._passwordLabel = ze({ forId: "password-input", localizeAlias: "auth_password", localizeFallback: "Password" }), this._usernameLayoutItem = Ee(this._usernameLabel, this._usernameInput), this._passwordLayoutItem = Ee(this._passwordLabel, this._passwordInput), this._form = qt([this._usernameLayoutItem, this._passwordLayoutItem]), this.insertAdjacentElement("beforeend", this._form);
};
w([
  u({ type: Boolean, attribute: "disable-local-login" })
], h.prototype, "disableLocalLogin", 2);
w([
  u({ attribute: "background-image" })
], h.prototype, "backgroundImage", 2);
w([
  u({ attribute: "logo-image" })
], h.prototype, "logoImage", 2);
w([
  u({ attribute: "logo-image-alternative" })
], h.prototype, "logoImageAlternative", 2);
w([
  u({ type: Boolean, attribute: "username-is-email" })
], h.prototype, "usernameIsEmail", 2);
w([
  u({ type: Boolean, attribute: "allow-password-reset" })
], h.prototype, "allowPasswordReset", 2);
w([
  u({ type: Boolean, attribute: "allow-user-invite" })
], h.prototype, "allowUserInvite", 2);
w([
  u({ attribute: "return-url" })
], h.prototype, "returnPath", 1);
w([
  u({ attribute: "gtel-logo-image" })
], h.prototype, "gtelLogoImage", 2);
h = w([
  m("umb-auth")
], h);
var Ft = Object.defineProperty, At = Object.getOwnPropertyDescriptor, Re = (t) => {
  throw TypeError(t);
}, We = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? At(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Ft(e, r, i), i;
}, Rt = (t, e, r) => e.has(t) || Re("Cannot " + r), Wt = (t, e, r) => e.has(t) ? Re("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ke = (t, e, r) => (Rt(t, e, "access private method"), r), K, Be, Ve;
let ee = class extends f {
  constructor() {
    super(...arguments), Wt(this, K);
  }
  updated(t) {
    super.updated(t), t.has("backgroundImage") && this.style.setProperty("--image", `url('${this.backgroundImage}')`);
  }
  render() {
    return n`
      <div id="main">
        ${ke(this, K, Be).call(this)} ${ke(this, K, Ve).call(this)}
      </div>
      <div id="background-main"></div>
    `;
  }
};
K = /* @__PURE__ */ new WeakSet();
Be = function() {
  return n`
      <div id="intro-container">
        <div id="intro">
          <h1 id="intro-title">${this.localize.term("auth_introTitle")}</h1>
          <div id="intro-content">${this.localize.term("auth_introContent")}</div>
          <div id="intro-actions">
            <uui-button look="outline" color="light" size="lg" href="/"
              .label=${this.localize.term("auth_introBackToMainPage")}></uui-button>
          </div>
        </div>
      </div>
    `;
};
Ve = function() {
  return n`
      <div id="login-container">
        <div id="login-form">
          <slot></slot>
        </div>
      </div>
    `;
};
ee.styles = [
  P`
      :host {
        --uui-color-interactive: var(--gtel-login-primary-color, #035ded);
        --uui-color-interactive-emphasis: var(--gtel-login-primary-emphasis-color, #031974);
        --uui-color-text-alt: var(--gtel-login-primary-color, #035ded);
        --uui-button-background-color-hover: var(--gtel-login-emphasis-color, #004bc3);
        --uui-button-border-radius: var(--gtel-login-form-button-border-radius, 0.25rem);
        --uui-button-font-weight: var(--gtel-login-form-button-font-weight, 500);
        --uui-button-transition: var(--gtel-login-form-button-transition, all .3s ease-in-out);
        --uui-color-default: var(--uui-color-interactive);
        --uui-show-focus-outline: var(--gtel-login-form-input-outline, 0);
        --uui-input-border-color-focus: var(--gtel-login-form-input-border-color-focus, #80bdff);
        --uui-button-height: 42px;
        --uui-select-height: 38px;

        --input-height: 40px;
        --header-secondary-font-size: var(--umb-login-header-secondary-font-size, 2.4rem);

        display: block;
        background: var(--umb-login-background, #f4f4f4);
        color: var(--umb-login-text-color, #000);
      }

      :host uui-button[look="outline"][color="light"] {
        --uui-button-background-color-hover: #035ded;
        /* --uui-button-border-color: ; */
        --uui-button-border-color-hover: #fff;
        --uui-button-contrast: #fff;
        --uui-button-contrast-hover: #fff;
      }

      :host uui-button[size="lg"] {
        --uui-button-padding-left-factor: 5;
        --uui-button-padding-right-factor: 5;
        --uui-button-padding-top-factor: 2.5;
        --uui-button-padding-bottom-factor: 2.5;
      }

      #main {
        position: relative;
        display: flex;
        height: 100vh;
        z-index: 1;
      }

      #intro-container {
        background: linear-gradient(to right, rgb(23 23 23 / 78%), rgb(0 0 0 / 34%));
        background: rgb(0 0 0 / 38%);
        display: none;
        width: 100%;
      }

      #intro {
        max-width: 408px;
        margin: auto;
      }

      #intro #intro-title {
        color: var(--gtel-intro-title-color, #fff);
        font-size: var(--gtel-intro-title-font-size, 2rem);
        line-height: var(--gtel-intro-title-line-height, 1.2);
        text-align: center;
        white-space: pre-line;
      }

      #intro #intro-content {
        color: var(--gtel-intro-content-color, #fff);
        font-size: var(--gtel-intro-content-font-size, 1.125rem);
        line-height: var(--gtel-intro-content-line-height, 28px);
        text-align: justify;

        border-radius: var(--gtel-intro-content-border-radius, 0.25rem);
        padding: var(--gtel-intro-content-padding, 1rem);
        opacity: var(--gtel-intro-content-opacity, 0.85);
        background-color: var(--gtel-intro-content-background-color, #001d46);
        box-shadow: var(--gtel-intro-content-box-shadow, -7px -7px 8px #052248, 7px 7px 8px #07346c);
      }

      #intro #intro-content:hover {
        box-shadow: var(--gtel-intro-content-hover-box-shadow, 7px 7px 8px #052248, -7px -7px 8px #07346c);
      }

      #intro #intro-actions {
        margin-top: 1.5rem;
        text-align: center;
      }

      #login-container {
        background: linear-gradient(to left, rgb(23 23 23 / 78%), rgb(0 0 0 / 34%));
        background: rgb(0 0 0 / 38%);
        display: flex;
        width: 100%;
      }

      #login-form {
        background-color: #fff;
        border-radius: 1rem;
        margin: auto;
        padding: 2.5rem;
        width: 66%;
        max-width: 416px;
        opacity: 0.9;
      }

      #background-main {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: var(--gtel-login-background-image, var(--image, url('/backoffice/img/cloud-services.jpg')));
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      @media only screen and (min-width: 992px) {
        #intro-container {
          display: flex;
        }

        #intro {
          margin-right: var(--gtel-intro-content-margin-right, 20%);
        }

        #login-form {
          margin-left: var(--gtel-login-form-margin-left, 3%);
        }
      }
    `
];
We([
  u({ attribute: "background-image" })
], ee.prototype, "backgroundImage", 2);
ee = We([
  m("umb-auth-layout")
], ee);
var Bt = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, me = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Vt(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Bt(e, r, i), i;
};
let N = class extends f {
  constructor() {
    super(...arguments), this.header = "", this.message = "";
  }
  render() {
    return n`
      <header id="header">
        <h1>${this.header}</h1>
        <span>${this.message}</span>
      </header>

      <umb-back-to-login-button></umb-back-to-login-button>

      <slot></slot>
    `;
  }
};
N.styles = [
  P`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `
];
me([
  u({ type: String })
], N.prototype, "header", 2);
me([
  u({ type: String })
], N.prototype, "message", 2);
N = me([
  m("umb-confirmation-layout")
], N);
var Nt = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, re = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Ht(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Nt(e, r, i), i;
};
let O = class extends f {
  constructor() {
    super(...arguments), this.header = "", this.message = "", this.noBackLink = !1;
  }
  render() {
    return n`
      <header id="header">
        <h1>${this.header?.length ? this.header : n`<umb-localize key="auth_friendlyGreeting">Hi there</umb-localize>`}</h1>
        <span>${this.message}</span>
      </header>
      <slot></slot>
      ${this.noBackLink ? "" : n`<umb-back-to-login-button></umb-back-to-login-button>`}
    `;
  }
};
O.styles = [
  P`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      ::slotted(uui-button) {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `
];
re([
  u({ type: String })
], O.prototype, "header", 2);
re([
  u({ type: String })
], O.prototype, "message", 2);
re([
  u({ type: Boolean, attribute: "no-back-link" })
], O.prototype, "noBackLink", 2);
O = re([
  m("umb-error-layout")
], O);
var Gt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, Ne = (t) => {
  throw TypeError(t);
}, _ = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Jt(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Gt(e, r, i), i;
}, Zt = (t, e, r) => e.has(t) || Ne("Cannot " + r), Yt = (t, e, r) => e.has(t) ? Ne("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Le = (t, e, r) => (Zt(t, e, "access private method"), r), X, He, Ge;
let p = class extends f {
  constructor() {
    super(), Yt(this, X), this.state = void 0, this.error = "", this.userId = "", this.isInvite = !1, this._passwordPattern = "", this.consumeContext(k, (t) => {
      this._passwordConfiguration = t.passwordConfiguration;
      let e = "";
      this._passwordConfiguration?.requireDigit && (e += "(?=.*\\d)"), this._passwordConfiguration?.requireLowercase && (e += "(?=.*[a-z])"), this._passwordConfiguration?.requireUppercase && (e += "(?=.*[A-Z])"), this._passwordConfiguration?.requireNonLetterOrDigit && (e += "(?=.*\\W)"), e += `.{${this._passwordConfiguration?.minimumPasswordLength ?? 10},}`, this._passwordPattern = e;
    });
  }
  renderHeader() {
    return this.isInvite ? n`
        <h1>Hi!</h1>
        <span>
          <umb-localize key="auth_userInviteWelcomeMessage">
            Welcome to Umbraco! Just need to get your password setup and then you're good to go
          </umb-localize>
        </span>
      ` : n`
        <h1>
          <umb-localize key="auth_newPassword">New password</umb-localize>
        </h1>
        <span>
            <umb-localize key="auth_setPasswordInstruction">Please provide a new password.</umb-localize>
        </span>
      `;
  }
  render() {
    return n`
      <uui-form>
        <form id="LoginForm" name="login" @submit=${Le(this, X, He)}>
          <header id="header">${this.renderHeader()}</header>
          <uui-form-layout-item>
            <uui-label id="passwordLabel" for="password" slot="label" required>
              <umb-localize key="auth_newPassword">New password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="password"
              name="password"
              autocomplete="new-password"
              pattern="${this._passwordPattern}"
              .minlength=${this._passwordConfiguration?.minimumPasswordLength}
              .minlengthMessage=${this.localize.term("auth_passwordMinLength", this._passwordConfiguration?.minimumPasswordLength ?? 10)}
              .label=${this.localize.term("auth_newPassword")}
              required
              required-message=${this.localize.term("auth_passwordIsBlank")}>
            </uui-input-password>
          </uui-form-layout-item>

          <uui-form-layout-item>
            <uui-label id="confirmPasswordLabel" for="confirmPassword" slot="label" required>
              <umb-localize key="auth_confirmNewPassword">Confirm new password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autocomplete="new-password"
              pattern="${this._passwordPattern}"
              .minlength=${this._passwordConfiguration?.minimumPasswordLength}
              .minlengthMessage=${this.localize.term("auth_passwordMinLength", this._passwordConfiguration?.minimumPasswordLength ?? 10)}
              .label=${this.localize.term("auth_confirmNewPassword")}
              required
              required-message=${this.localize.term("auth_required")}></uui-input-password>
          </uui-form-layout-item>

          ${Le(this, X, Ge).call(this)}

          <uui-button
            type="submit"
            label=${this.localize.term("auth_continue")}
            look="primary"
            color="default"
            .state=${this.state}></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `;
  }
};
X = /* @__PURE__ */ new WeakSet();
He = function(t) {
  if (t.preventDefault(), !this._passwordConfiguration) return;
  const e = t.target;
  if (this.passwordElement.setCustomValidity(""), this.confirmPasswordElement.setCustomValidity(""), !e || !e.checkValidity()) return;
  const r = new FormData(e), o = r.get("password"), i = r.get("confirmPassword");
  let s = !1;
  if (this._passwordConfiguration.minimumPasswordLength > 0 && o.length < this._passwordConfiguration.minimumPasswordLength && (s = !0), this._passwordConfiguration.requireNonLetterOrDigit && (/\W/.test(o) || (s = !0)), this._passwordConfiguration.requireDigit && (/\d/.test(o) || (s = !0)), this._passwordConfiguration.requireLowercase && (/[a-z]/.test(o) || (s = !0)), this._passwordConfiguration.requireUppercase && (/[A-Z]/.test(o) || (s = !0)), s) {
    const a = this.localize.term(
      "auth_errorInPasswordFormat",
      this._passwordConfiguration.minimumPasswordLength,
      this._passwordConfiguration.requireNonLetterOrDigit ? 1 : 0
    ) ?? "The password does not meet the minimum requirements!";
    this.passwordElement.setCustomValidity(a);
    return;
  }
  if (o !== i) {
    const a = this.localize.term(
      "auth_passwordMismatch"
    ) ?? "The confirmed password doesn't match the new password!";
    this.confirmPasswordElement.setCustomValidity(a);
    return;
  }
  this.dispatchEvent(new CustomEvent("submit", { detail: { password: o } }));
};
Ge = function() {
  return !this.error || this.state !== "failed" ? S : n`<span class="text-danger">${this.error}</span>`;
};
p.styles = [
  P`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `
];
_([
  Me("#password")
], p.prototype, "passwordElement", 2);
_([
  Me("#confirmPassword")
], p.prototype, "confirmPasswordElement", 2);
_([
  u()
], p.prototype, "state", 2);
_([
  u()
], p.prototype, "error", 2);
_([
  u()
], p.prototype, "userId", 2);
_([
  u({ type: Boolean, attribute: "is-invite" })
], p.prototype, "isInvite", 2);
_([
  l()
], p.prototype, "_passwordConfiguration", 2);
_([
  l()
], p.prototype, "_passwordPattern", 2);
p = _([
  m("umb-new-password-layout")
], p);
var Kt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, Je = (t) => {
  throw TypeError(t);
}, oe = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Xt(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Kt(e, r, i), i;
}, fe = (t, e, r) => e.has(t) || Je("Cannot " + r), c = (t, e, r) => (fe(t, e, "read from private field"), r ? r.call(t) : e.get(t)), J = (t, e, r) => e.has(t) ? Je("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), le = (t, e, r, o) => (fe(t, e, "write to private field"), e.set(t, r), r), Ie = (t, e, r) => (fe(t, e, "access private method"), r), H, U, y, Q, Ze, Ye;
let G = class extends f {
  constructor() {
    super(), J(this, Q), J(this, H, ""), J(this, U, ""), this.state = void 0, this.error = "", this.loading = !0, J(this, y), this.consumeContext(k, (t) => {
      le(this, y, t), Ie(this, Q, Ze).call(this);
    });
  }
  render() {
    return this.loading ? n`<uui-loader-bar></uui-loader-bar>` : this.error ? n`
          <umb-error-layout
            header=${this.localize.term("auth_error")}
            message=${this.error ?? this.localize.term("auth_defaultError")}>
          </umb-error-layout>` : n`
        <umb-new-password-layout
          @submit=${Ie(this, Q, Ye)}
          is-invite
          .userId=${c(this, U)}
          .state=${this.state}
          .error=${this.error}></umb-new-password-layout>`;
  }
};
H = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
Q = /* @__PURE__ */ new WeakSet();
Ze = async function() {
  const t = new URLSearchParams(window.location.search), e = t.get("inviteCode"), r = t.get("userId");
  if (!e || !r) {
    this.error = "The invite has expired or is invalid", this.loading = !1;
    return;
  }
  if (!c(this, y)) return;
  le(this, H, e), le(this, U, r);
  const o = await c(this, y).validateInviteCode(c(this, H), c(this, U));
  if (o.error) {
    this.error = o.error, this.loading = !1;
    return;
  }
  if (!o.passwordConfiguration) {
    this.error = "There is no password configuration for the invite code. Please contact the administrator.", this.loading = !1;
    return;
  }
  c(this, y).passwordConfiguration = o.passwordConfiguration, this.loading = !1;
};
Ye = async function(t) {
  t.preventDefault();
  const e = t.detail.password;
  if (!e || !c(this, y)) return;
  this.state = "waiting";
  const r = await c(this, y).newInvitedUserPassword(e, c(this, H), c(this, U));
  if (r.error) {
    this.error = r.error, this.state = "failed";
    return;
  }
  this.state = "success", window.location.href = c(this, y).returnPath;
};
oe([
  l()
], G.prototype, "state", 2);
oe([
  l()
], G.prototype, "error", 2);
oe([
  l()
], G.prototype, "loading", 2);
G = oe([
  m("umb-invite-page")
], G);
var Qt = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, Ke = (t) => {
  throw TypeError(t);
}, $ = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? jt(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Qt(e, r, i), i;
}, ge = (t, e, r) => e.has(t) || Ke("Cannot " + r), d = (t, e, r) => (ge(t, e, "read from private field"), r ? r.call(t) : e.get(t)), F = (t, e, r) => e.has(t) ? Ke("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Xe = (t, e, r, o) => (ge(t, e, "write to private field"), e.set(t, r), r), ue = (t, e, r) => (ge(t, e, "access private method"), r), z, b, I, Qe, ve, je, te, et, tt;
let v = class extends f {
  constructor() {
    super(), F(this, I), this.usernameIsEmail = !1, this.allowPasswordReset = !1, this._loginError = "", this.supportPersistLogin = !1, F(this, z), F(this, b), F(this, ve, async (t) => {
      if (t.preventDefault(), !d(this, b)) return;
      const e = t.target;
      if (!e) return;
      const r = new FormData(e), o = r.get("username"), i = r.get("password"), s = r.has("persist");
      if (!o || !i) {
        this._loginError = this.localize.term("auth_userFailedLogin"), this._loginState = "failed";
        return;
      }
      this._loginState = "waiting";
      const a = await d(this, b).login({
        username: o,
        password: i,
        persist: s
      });
      if (this._loginError = a.error || "", this._loginState = a.error ? "failed" : "success", a.status === 402) {
        d(this, b).isMfaEnabled = !0, a.twoFactorView && (d(this, b).twoFactorView = a.twoFactorView), a.twoFactorProviders && (d(this, b).mfaProviders = a.twoFactorProviders), this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "mfa" } }));
        return;
      }
      if (a.error)
        return;
      const T = d(this, b).returnPath;
      T && (location.href = T);
    }), F(this, te, () => {
      d(this, z)?.requestSubmit();
    }), this.consumeContext(k, (t) => {
      Xe(this, b, t), this.supportPersistLogin = t.supportsPersistLogin;
    });
  }
  render() {
    return n`
      <header id="header">
        <embed id="app-logo" src=${R(this.logoImage)} />
        <h1 id="greeting">
          <umb-localize .key=${d(this, I, je)}>Welcome</umb-localize>
        </h1>
        <slot name="subheadline"></slot>
      </header>
      <slot @slotchange=${ue(this, I, Qe)}></slot>
      <div id="secondary-actions">
        ${_e(
      this.supportPersistLogin,
      () => n`
            <uui-form-layout-item>
              <uui-checkbox
                name="persist"
                .label=${this.localize.term("auth_rememberMe")}>
                <umb-localize key="auth_rememberMe">Remember me</umb-localize>
              </uui-checkbox>
            </uui-form-layout-item>
          `
    )}
        ${_e(
      this.allowPasswordReset,
      () => n`
            <button type="button" id="forgot-password" style="font-size: 1rem" @click=${ue(this, I, tt)}>
              <umb-localize key="auth_forgottenPassword">Forgotten password?</umb-localize>
            </button>
          `
    )}
      </div>
      <uui-button
        type="submit"
        id="umb-login-button"
        look="primary"
        @click=${d(this, te)}
        .label=${this.localize.term("auth_login")}
        style="margin-bottom: 1rem; transition: all .3s ease-in-out;"
        color="default"
        .state=${this._loginState}></uui-button>

      ${ue(this, I, et).call(this)}
    `;
  }
};
z = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
Qe = async function() {
  Xe(this, z, this.slottedElements?.find((t) => t.id === "umb-login-form")), d(this, z) && (d(this, z).addEventListener("keypress", (t) => {
    t.key === "Enter" && d(this, te).call(this);
  }), d(this, z).onsubmit = d(this, ve));
};
ve = /* @__PURE__ */ new WeakMap();
je = function() {
  return "auth_login";
};
te = /* @__PURE__ */ new WeakMap();
et = function() {
  return !this._loginError || this._loginState !== "failed" ? S : n`<span class="text-error text-danger">${this._loginError}</span>`;
};
tt = function() {
  this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "reset" } }));
};
v.styles = [
  P`
      :host {
        display: flex;
        flex-direction: column;
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--gtel-login-form-header-gap, 2rem);
      }

      #app-logo {
        align-self: center;
        height: var(--gtel-login-form-logo-height, 48px);
        margin-top: var(--gtel-login-form-logo-margin-y, -1rem);
        margin-bottom: var(--gtel-login-form-logo-margin-y, -1rem);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #greeting {
        color: var(--gtel-login-form-title-color, #0d1536);
        font-size: var(--gtel-login-form-title-font-size, 2rem);
        font-weight: var(--gtel-login-form-title-font-weight, 700);
        margin: 0 0 var(--uui-size-layout-1);
        text-align: center;
      }

      #umb-login-button {
        margin-top: var(--uui-size-space-4);
        width: 100%;
      }

      #forgot-password {
        cursor: pointer;
        background: none;
        border: 0;
        height: 1rem;
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        gap: var(--uui-size-space-1);
        align-self: center;
        text-decoration: none;
        display: inline-flex;
        line-height: 1;
        font-size: 14px;
        font-family: var(--uui-font-family),sans-serif;
        margin-left: auto;
        margin-bottom: var(--uui-size-space-3);
      }

      #forgot-password:hover {
        color: var(--uui-color-interactive-emphasis);
      }

      .text-error {
        margin-top: var(--uui-size-space-4);
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }

      #secondary-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `
];
$([
  u({ attribute: "logo-image" })
], v.prototype, "logoImage", 2);
$([
  u({ type: Boolean, attribute: "username-is-email" })
], v.prototype, "usernameIsEmail", 2);
$([
  gt({ flatten: !0 })
], v.prototype, "slottedElements", 2);
$([
  u({ type: Boolean, attribute: "allow-password-reset" })
], v.prototype, "allowPasswordReset", 2);
$([
  l()
], v.prototype, "_loginState", 2);
$([
  l()
], v.prototype, "_loginError", 2);
$([
  l()
], v.prototype, "supportPersistLogin", 2);
v = $([
  m("umb-login-page")
], v);
async function er(t) {
  if (t.endsWith(".html"))
    return fetch(t).then((r) => r.text());
  const e = await import(
    /* @vite-ignore */
    t
  );
  if (!e.default) throw new Error("No default export found");
  return new e.default();
}
function tr(t) {
  return typeof t == "string" ? n`${vt(t)}` : t;
}
var rr = Object.defineProperty, or = Object.getOwnPropertyDescriptor, rt = (t) => {
  throw TypeError(t);
}, ie = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? or(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && rr(e, r, i), i;
}, we = (t, e, r) => e.has(t) || rt("Cannot " + r), E = (t, e, r) => (we(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Se = (t, e, r) => e.has(t) ? rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ir = (t, e, r, o) => (we(t, e, "write to private field"), e.set(t, r), r), Oe = (t, e, r) => (we(t, e, "access private method"), r), g, j, ot, it;
let D = class extends f {
  constructor() {
    super(), Se(this, j), this.providers = [], this.error = null, Se(this, g), this.consumeContext(k, (t) => {
      ir(this, g, t), Oe(this, j, ot).call(this);
    });
  }
  renderDefaultView() {
    return n`
      <uui-form>
        <form id="LoginForm" @submit=${Oe(this, j, it)} novalidate>
          <header id="header">
            <h1>
              <umb-localize key="auth_mfaTitle">One last step</umb-localize>
            </h1>

            <p>
              <umb-localize key="auth_mfaText">
                You have enabled 2-factor authentication and must verify your identity.
              </umb-localize>
            </p>
          </header>

          <!-- if there's only one provider active, it will skip this step! -->
          ${this.providers.length > 1 ? n`
              <uui-form-layout-item>
                <uui-label id="providerLabel" for="provider" slot="label" required>
                  <umb-localize key="auth_mfaMultipleText">Please choose a 2-factor provider</umb-localize>
                </uui-label>
                <uui-select label=${this.localize.term("auth_mfaMultipleText")} id="provider" name="provider" .options=${this.providers} aria-required="true" required></uui-select>
              </uui-form-layout-item>
            ` : S}

          <uui-form-layout-item>
            <uui-label id="mfacodeLabel" for="mfacode" slot="label" required>
              <umb-localize key="auth_mfaCodeInput">Verification code</umb-localize>
            </uui-label>

            <uui-input
              autofocus
              id="mfacode"
              type="text"
              name="token"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder=${this.localize.term("auth_mfaCodeInputHelp")}
              aria-required="true"
              required
              required-message=${this.localize.term("auth_mfaCodeInputHelp")}
              label=${this.localize.term("auth_mfaCodeInput")}
              style="width:100%;">
            </uui-input>
          </uui-form-layout-item>

          ${this.error ? n` <span class="text-danger">${this.error}</span> ` : S}

          <uui-button
            .state=${this.buttonState}
            button-style="success"
            look="primary"
            color="default"
            label=${this.localize.term("auth_validate")}
            type="submit"></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `;
  }
  async renderCustomView() {
    const t = E(this, g)?.twoFactorView;
    if (!t) return S;
    try {
      const e = await er(t);
      return typeof e == "object" && (e.providers = this.providers.map((r) => r.value), e.returnPath = E(this, g)?.returnPath ?? ""), tr(e);
    } catch (e) {
      const r = e instanceof Error ? e.message : "Unknown error";
      return console.group("[MFA login] Failed to load custom view"), console.log("Element reference", this), console.log("Custom view", t), console.error("Failed to load custom view:", e), console.groupEnd(), n`<span class="text-danger">${r}</span>`;
    }
  }
  render() {
    return E(this, g)?.twoFactorView ? wt(this.renderCustomView(), n`
          <uui-loader-bar></uui-loader-bar>`) : this.renderDefaultView();
  }
};
g = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakSet();
ot = function() {
  this.providers = E(this, g)?.mfaProviders.map((t) => ({ name: t, value: t, selected: !1 })) ?? [], this.providers.length ? this.providers[0].selected = !0 : this.error = "Error: No providers available";
};
it = async function(t) {
  if (t.preventDefault(), !E(this, g)) return;
  this.error = null;
  const e = t.target;
  if (!e) return;
  const r = e.elements.namedItem("mfacode");
  if (r && (r.error = !1, r.errorMessage = "", r.setCustomValidity("")), !e.checkValidity()) return;
  const o = new FormData(e);
  let i = o.get("provider");
  if (!i) {
    if (!this.providers.length) {
      this.error = "No providers available";
      return;
    }
    i = this.providers[0].value;
  }
  if (!i) {
    this.error = "No provider selected";
    return;
  }
  const s = o.get("token");
  this.buttonState = "waiting";
  const a = await E(this, g).validateMfaCode(s, i);
  if (a.error) {
    r ? (r.error = !0, r.errorMessage = a.error) : this.error = a.error, this.buttonState = "failed";
    return;
  }
  this.buttonState = "success";
  const T = E(this, g).returnPath;
  T && (location.href = T);
};
D.styles = [
  P`
      #header {
        text-align: center;
      }

      #header h1 {
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }

      #provider {
        width: 100%;
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-input {
        width: 100%;
      }

      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `
];
ie([
  l()
], D.prototype, "providers", 2);
ie([
  l()
], D.prototype, "buttonState", 2);
ie([
  l()
], D.prototype, "error", 2);
D = ie([
  m("umb-mfa-page")
], D);
var ar = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, at = (t) => {
  throw TypeError(t);
}, L = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? sr(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && ar(e, r, i), i;
}, be = (t, e, r) => e.has(t) || at("Cannot " + r), W = (t, e, r) => (be(t, e, "read from private field"), e.get(t)), Ue = (t, e, r) => e.has(t) ? at("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), nr = (t, e, r, o) => (be(t, e, "write to private field"), e.set(t, r), r), de = (t, e, r) => (be(t, e, "access private method"), r), C, B, st, nt, ut;
let x = class extends f {
  constructor() {
    super(), Ue(this, B), this.state = void 0, this.page = "new", this.error = "", this.userId = "", this.resetCode = "", this.loading = !0, Ue(this, C), this.consumeContext(k, (t) => {
      nr(this, C, t), de(this, B, st).call(this);
    });
  }
  render() {
    return this.loading ? n`<uui-loader-bar></uui-loader-bar>` : de(this, B, ut).call(this);
  }
};
C = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
st = async function() {
  const t = new URLSearchParams(window.location.search), e = t.get("resetCode"), r = t.get("userId");
  if (!r || !e) {
    this.page = "error", this.loading = !1;
    return;
  }
  if (!W(this, C)) return;
  this.resetCode = e, this.userId = r;
  const o = await W(this, C).validatePasswordResetCode(this.userId, this.resetCode);
  if (o.error) {
    this.page = "error", this.error = o.error, this.loading = !1;
    return;
  }
  if (!o.passwordConfiguration) {
    this.page = "error", this.error = "Password configuration is missing", this.loading = !1;
    return;
  }
  W(this, C).passwordConfiguration = o.passwordConfiguration, this.loading = !1;
};
nt = async function(t) {
  if (t.preventDefault(), this.error = "", !W(this, C)) return;
  const e = t.detail.password;
  this.state = "waiting";
  const r = await W(this, C).newPassword(e, this.resetCode, this.userId);
  if (r.error) {
    this.state = "failed", this.error = r.error;
    return;
  }
  this.state = "success", this.page = "done";
};
ut = function() {
  switch (this.page) {
    case "new":
      return n`
          <umb-new-password-layout
            @submit=${de(this, B, nt)}
            .userId=${this.userId}
            .state=${this.state}
            .error=${this.error}></umb-new-password-layout>`;
    case "error":
      return n`
          <umb-error-layout
            header=${this.localize.term("auth_error")}
            message=${this.error ?? this.localize.term("auth_defaultError")}>
          </umb-error-layout>`;
    case "done":
      return n`
          <umb-confirmation-layout
            header=${this.localize.term("auth_success")}
            message=${this.localize.term("auth_setPasswordConfirmation")}>
          </umb-confirmation-layout>`;
  }
};
L([
  l()
], x.prototype, "state", 2);
L([
  l()
], x.prototype, "page", 2);
L([
  l()
], x.prototype, "error", 2);
L([
  l()
], x.prototype, "userId", 2);
L([
  l()
], x.prototype, "resetCode", 2);
L([
  l()
], x.prototype, "loading", 2);
x = L([
  m("umb-new-password-page")
], x);
var ur = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, lt = (t) => {
  throw TypeError(t);
}, ae = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? lr(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && ur(e, r, i), i;
}, dt = (t, e, r) => e.has(t) || lt("Cannot " + r), dr = (t, e, r) => (dt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), De = (t, e, r) => e.has(t) ? lt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ce = (t, e, r) => (dt(t, e, "access private method"), r), ye, V, ct, ht, pt;
let M = class extends f {
  constructor() {
    super(...arguments), De(this, V), this.resetCallState = void 0, this.error = "", De(this, ye, async (t) => {
      t.preventDefault();
      const e = t.target;
      if (!e || !e.checkValidity()) return;
      const o = new FormData(e).get("email");
      this.resetCallState = "waiting";
      const s = await (await this.getContext(k)).resetPassword(o);
      this.resetCallState = s.error ? "failed" : "success", this.error = s.error || "";
    });
  }
  render() {
    return this.resetCallState === "success" ? ce(this, V, pt).call(this) : ce(this, V, ct).call(this);
  }
};
ye = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakSet();
ct = function() {
  return n`
      <uui-form>
        <form id="LoginForm" name="login" @submit="${dr(this, ye)}">
          <header id="header">
            <embed id="app-logo" src=${R(this.logoImage)} />
            <h1>
              <umb-localize key="auth_forgottenPassword">Forgotten password?</umb-localize>
            </h1>
            <span>
              <umb-localize key="auth_forgottenPasswordInstruction">
                An email will be sent to the address specified with a link to reset your password
              </umb-localize>
            </span>
          </header>

          <uui-form-layout-item>
            <uui-label for="email" slot="label" required>
              <umb-localize key="auth_email">Email</umb-localize>
            </uui-label>
            <uui-input
              type="email"
              id="email"
              name="email"
              .label=${this.localize.term("auth_email")}
              required
              required-message=${this.localize.term("auth_required")}>
            </uui-input>
          </uui-form-layout-item>

          ${ce(this, V, ht).call(this)}

          <uui-button
            type="submit"
            .label=${this.localize.term("auth_submit")}
            look="primary"
            color="default"
            .state=${this.resetCallState}></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `;
};
ht = function() {
  return !this.error || this.resetCallState !== "failed" ? S : n`<span class="text-danger">${this.error}</span>`;
};
pt = function() {
  return n`
      <umb-confirmation-layout
        header=${this.localize.term("auth_forgottenPassword")}
        message=${this.localize.term("auth_requestPasswordResetConfirmation")}>
      </umb-confirmation-layout>
    `;
};
M.styles = [
  P`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #app-logo {
        align-self: center;
        height: var(--gtel-login-form-logo-height, 68px);
        margin-top: var(--gtel-login-form-logo-margin-y, -1rem);
        margin-bottom: var(--gtel-login-form-logo-margin-y, -1rem);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: var(--gtel-login-form-title-font-weight, 700);
        font-size: var(--gtel-login-form-title-font-size, 2rem);
        color: var(--gtel-login-form-title-color, #0d1536);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-input {
        width: 100%;
      }

      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      #resend {
        display: inline-flex;
        font-size: 14px;
        align-self: center;
        gap: var(--uui-size-space-1);
      }

      #resend a {
        color: var(--uui-color-selected);
        font-weight: 600;
        text-decoration: none;
      }

      #resend a:hover {
        color: var(--uui-color-interactive-emphasis);
      }
    `
];
ae([
  u({ attribute: "logo-image" })
], M.prototype, "logoImage", 2);
ae([
  l()
], M.prototype, "resetCallState", 2);
ae([
  l()
], M.prototype, "error", 2);
M = ae([
  m("umb-reset-password-page")
], M);
var cr = Object.getOwnPropertyDescriptor, mt = (t) => {
  throw TypeError(t);
}, hr = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? cr(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = a(i) || i);
  return i;
}, pr = (t, e, r) => e.has(t) || mt("Cannot " + r), mr = (t, e, r) => e.has(t) ? mt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), fr = (t, e, r) => (pr(t, e, "access private method"), r), he, ft;
let pe = class extends f {
  constructor() {
    super(...arguments), mr(this, he);
  }
  render() {
    return n`
			<button type="button" @click=${fr(this, he, ft)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
				</svg>
				<span><umb-localize key="auth_returnToLogin">Return to login form</umb-localize></span>
			</button>
		`;
  }
};
he = /* @__PURE__ */ new WeakSet();
ft = function() {
  this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "login" } }));
};
pe.styles = [
  P`
			:host {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			button {
				cursor: pointer;
				background: none;
				border: 0;
				height: 1rem;
				color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
				gap: var(--uui-size-space-1);
				align-self: center;
				text-decoration: none;
				display: inline-flex;
				line-height: 1;
				font-size: 14px;
				font-family: var(--uui-font-family),sans-serif;
			}
			button svg {
				width: 1rem;
			}
			button:hover {
				color: var(--uui-color-interactive-emphasis);
			}
		`
];
pe = hr([
  m("umb-back-to-login-button")
], pe);
export {
  k as UMB_AUTH_CONTEXT,
  St as UmbAuthContext,
  ee as UmbAuthLayoutElement,
  Ot as UmbSlimBackofficeController
};
//# sourceMappingURL=login.js.map
