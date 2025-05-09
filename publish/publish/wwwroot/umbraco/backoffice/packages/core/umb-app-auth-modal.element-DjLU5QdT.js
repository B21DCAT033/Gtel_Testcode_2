import "./error-viewer-modal.token-wKYkoQeY.js";
import "@umbraco-cms/backoffice/class-api";
import "./confirm-modal.element-COhIMOef.js";
import { U as b } from "./discard-changes-modal.element-Ds5HOoV9.js";
import { U as x } from "./text-style.style-BXyaVaXp.js";
import { U as w } from "./auth.context.token-CFi72pnR.js";
import { when as _, html as g, css as y, state as d, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UMB_APP_CONTEXT as h } from "@umbraco-cms/backoffice/app";
var z = Object.defineProperty, C = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, u = (t, e, o, n) => {
  for (var r = n > 1 ? void 0 : n ? C(e, o) : e, l = t.length - 1, a; l >= 0; l--)
    (a = t[l]) && (r = (n ? a(e, o, r) : a(r)) || r);
  return n && r && z(e, o, r), r;
}, f = (t, e, o) => e.has(t) || m("Cannot " + o), p = (t, e, o) => (f(t, e, "read from private field"), o ? o.call(t) : e.get(t)), v = (t, e, o) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), L = (t, e, o, n) => (f(t, e, "write to private field"), e.set(t, o), o), s, c;
let i = class extends b {
  constructor() {
    super(), this._serverUrl = "", this._loading = !0, this._allowLocalLogin = !1, v(this, s), v(this, c, (t) => this._allowLocalLogin ? !0 : t.forProviderName.toLowerCase() !== "umbraco"), this.onSubmit = async (t, e) => {
      try {
        const o = await this.getContext(w);
        if (!o)
          throw new Error("Auth context not available");
        const n = typeof t == "string" ? void 0 : t, r = typeof t == "string" ? t : t.forProviderName, l = this.data?.userLoginState === "timedOut";
        await o.makeAuthorizationRequest(r, !l, e, n);
        const a = o.getIsAuthorized();
        this.value = { success: a }, a && this._submitModal();
      } catch (o) {
        console.error("[AuthModal] Error submitting auth request", o), this._error = o instanceof Error ? o.message : "Unknown error (see console)";
      }
    }, this.consumeContext(h, (t) => {
      L(this, s, t);
    });
  }
  get props() {
    return {
      userLoginState: this.data?.userLoginState ?? "loggingIn",
      onSubmit: this.onSubmit.bind(this)
    };
  }
  get headline() {
    return this.data?.userLoginState === "timedOut" ? this.localize.term("login_instruction") : this.localize.term(
      [
        "login_greeting0",
        "login_greeting1",
        "login_greeting2",
        "login_greeting3",
        "login_greeting4",
        "login_greeting5",
        "login_greeting6"
      ][(/* @__PURE__ */ new Date()).getDay()]
    );
  }
  firstUpdated() {
    this.consumeContext(h, (t) => {
      this._serverUrl = t.getServerUrl(), this.style.setProperty(
        "--image",
        `url('${this._serverUrl}/umbraco/management/api/v1/security/back-office/graphics/login-background') no-repeat center center/cover`
      );
      const e = t.getServerConnection();
      this.observe(e.allowLocalLogin, (o) => {
        this._allowLocalLogin = o;
      }), this.observe(e.isConnected, (o) => {
        this._loading = !o;
      });
    });
  }
  render() {
    return g`
			<div id="layout">
				<!-- <img
					id="logo-on-background"
					src="${this._serverUrl}/umbraco/management/api/v1/security/back-office/graphics/login-logo-alternative"
					alt="Logo"
					aria-hidden="true"
					part="auth-logo-background" /> -->
				<!-- <div id="graphic" aria-hidden="true">
					<img
						part="auth-logo"
						id="logo-on-image"
						src="${this._serverUrl}/umbraco/management/api/v1/security/back-office/graphics/login-logo"
						alt="Logo" />
					<svg
						id="curve-top"
						width="1746"
						height="1374"
						viewBox="0 0 1746 1374"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M8 1C61.5 722.5 206.5 1366.5 1745.5 1366.5" stroke="currentColor" stroke-width="15"></path>
					</svg>
					<svg
						id="curve-bottom"
						width="1364"
						height="552"
						viewBox="0 0 1364 552"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M1 8C387 24 1109 11 1357 548" stroke="currentColor" stroke-width="15"></path>
					</svg>
				</div> -->
				<div id="outro-container">
					<div id="outro">
						<h1 id="outro-title">${this.localize.term("gtelPortal_outroTitle")}</h1>
						<div id="outro-content">${this.localize.term("gtelPortal_outroContent")}</div>
						<div id="outro-actions">
							<uui-button
								look="outline"
								color="light"
								size="lg"
								href="/"
								target="_top"
								.label=${this.localize.term("gtelPortal_outroActionBackToMainPage")}></uui-button>
						</div>
					</div>
				</div>
				<div id="content-container">
					<div id="content">
						<header id="header">
							<embed id="app-logo" src=${p(this, s).gtelLogoImage} alt="GTEL logo" />
							<h1 id="greeting">${this.headline}</h1>
						</header>
						${this._error ? g`<p style="margin-top:0;color:red">${this._error}</p>` : ""}
						${this.data?.userLoginState === "timedOut" ? g`<p style="margin-top:0">${this.localize.term("login_timeout")}</p>` : ""}
						${_(
      this._loading,
      () => g`
								<div id="loader">
									<uui-loader></uui-loader>
								</div>
							`,
      () => g` <umb-extension-slot
									id="providers"
									type="authProvider"
									default-element="umb-auth-provider-default"
									.props=${this.props}
									.filter=${p(this, c)}></umb-extension-slot>`
    )}
					</div>
				</div>
			</div>
			<div id="layout-background"></div>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
i.styles = [
  x,
  y`
			:host {
				display: block;
				background: var(--uui-color-surface, #f4f4f4);

				--curves-color: var(--umb-login-curves-color, #f5c1bc);
				--curves-display: var(--umb-login-curves-display, inline);

				--uui-button-font-weight: 500;
				--uui-button-transition: var(--gtel-logout-content-button-transition, all .3s ease-in-out);
			}

			:host uui-button[look='outline'][color='light'] {
				--uui-button-background-color-hover: #035ded;
				/* --uui-button-border-color: ; */
				--uui-button-border-color-hover: #fff;
				--uui-button-contrast: #fff;
				--uui-button-contrast-hover: #fff;
			}

			:host uui-button[size='lg'] {
				--uui-button-padding-left-factor: 5;
				--uui-button-padding-right-factor: 5;
				--uui-button-padding-top-factor: 2.5;
				--uui-button-padding-bottom-factor: 2.5;
			}

			#layout {
				position: relative;
				display: flex;
				/* justify-content: center; */
				/* padding: 32px 0 32px 32px; */
				width: 100vw;
				/* max-width: 1920px; */
				height: 100vh;
				font-family: 'Montserrat', sans-serif;
				z-index: 1;
			}

			#layout-background {
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				background-image: var(--gtel-logout-background-image, url('/backoffice/img/cloud-services.jpg'));
				background-size: var(--gtel-logout-background-size, cover);
				background-position: var(--gtel-logout-background-position, center);
				/* transform: rotateY(180deg); */
			}

			#graphic {
				position: relative;
				width: 100%;
				height: 100%;
				background: var(--umb-login-image, var(--image));
				border-radius: var(--umb-login-image-border-radius, 38px);
				position: relative;
				overflow: hidden;
				color: var(--curves-color);
			}

			#graphic svg {
				position: absolute;
				width: 45%;
				height: fit-content;
				display: var(--curves-display);
			}

			#curve-top {
				top: 0px;
				right: 0px;
			}

			#curve-bottom {
				bottom: 0px;
				left: 0px;
			}

			#outro-container {
				background: linear-gradient(to right, rgb(23 23 23 / 78%), rgb(0 0 0 / 34%));
				background: rgb(0 0 0 / 38%);
				display: none;
				width: 100%;
			}

			#outro {
				max-width: 384px;
				margin: auto;
			}

			#outro #outro-title {
				color: var(--gtel-outro-title-color, #fff);
				font-size: var(--gtel-outro-title-font-size, 2rem);
				line-height: var(--gtel-outro-title-line-height, 1.2);
				text-align: center;
			}

			#outro #outro-content {
				color: var(--gtel-outro-content-color, #fff);
				font-size: var(--gtel-outro-content-font-size, 1.125rem);
				line-height: var(--gtel-outro-content-line-height, 28px);
				text-align: justify;

				border-radius: var(--gtel-outro-content-border-radius, 0.25rem);
				padding: var(--gtel-outro-content-padding, 1rem);
				opacity: var(--gtel-outro-content-opacity, 0.85);
				background-color: var(--gtel-outro-content-background-color, #001d46);
				box-shadow: var(--gtel-outro-content-box-shadow, -7px -7px 8px #052248, 7px 7px 8px #07346c);
			}

			#outro #outro-content:hover {
				box-shadow: var(--gtel-outro-content-hover-box-shadow, 7px 7px 8px #052248, -7px -7px 8px #07346c);
			}

			#outro #outro-actions {
				margin-top: 1.5rem;
				text-align: center;
			}

			#content-container {
				background: var(--umb-login-content-background, rgb(0 0 0 / 38%));
				display: var(--umb-login-content-display, flex);
				width: var(--umb-login-content-width, 100%);
				height: var(--umb-login-content-height, 100%);
				overflow: auto;
				border-radius: var(--umb-login-content-border-radius, 0);
				/* padding: 16px; */
				margin: auto;
			}

			#content {
				background-color: #fff;
				border-radius: 1rem;
				max-width: 416px;
				margin: auto;
				width: 66%;
				padding: 2.5rem;
				opacity: 0.9;
			}

			#logo-on-background {
				display: none;
			}

			#logo-on-image,
			#logo-on-background {
				position: absolute;
				top: 24px;
				left: 24px;
				height: 55px;
			}

			#header {
				text-align: center;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-5);
			}

			#app-logo {
				align-self: center;
				height: calc(var(--gtel-logo-height, 64px) + 4px);
				margin-top: var(--gtel-logo-margin-y, -1rem);
				margin-bottom: var(--gtel-logo-margin-y, -1rem);
			}

			#greeting {
				color: var(--gtel-logout-content-title-color, #0d1536);
				text-align: center;
				font-weight: var(--gtel-logout-content-title-font-weight, 700);
				font-size: var(--gtel-logout-content-title-font-size, 2rem);
				margin: 0 0 var(--uui-size-layout-1);
				line-height: 1.2;
			}

			#providers {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-5);
			}

			#loader {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			@media (max-width: 900px) {
				#graphic {
					display: none;
				}
				#logo-on-background {
					display: block;
				}
			}

			@media only screen and (min-width: 992px) {
				#outro-container {
					display: flex;
				}

				#outro {
					margin-right: var(--gtel-outro-content-margin-right, 20%);
				}

				#content-form {
					margin-left: var(--gtel-logout-content-margin-left, 3%);
				}
			}
		`
];
u([
  d()
], i.prototype, "_error", 2);
u([
  d()
], i.prototype, "_serverUrl", 2);
u([
  d()
], i.prototype, "_loading", 2);
u([
  d()
], i.prototype, "_allowLocalLogin", 2);
i = u([
  k("umb-app-auth-modal")
], i);
const B = i;
export {
  i as UmbAppAuthModalElement,
  B as default
};
//# sourceMappingURL=umb-app-auth-modal.element-DjLU5QdT.js.map
