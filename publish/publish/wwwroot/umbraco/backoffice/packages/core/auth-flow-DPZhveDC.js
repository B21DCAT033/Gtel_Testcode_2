import { css as R, property as m, customElement as S, html as E, nothing as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import { FetchRequestor as P, AuthorizationServiceConfiguration as O, AuthorizationNotifier as $, BaseTokenRequestHandler as N, LocalStorageBackend as L, RedirectRequestHandler as U, TokenResponse as x, AuthorizationRequest as _, RevokeTokenRequest as v, TokenRequest as g, GRANT_TYPE_AUTHORIZATION_CODE as C, GRANT_TYPE_REFRESH_TOKEN as F, BasicQueryStringUtils as I } from "@umbraco-cms/backoffice/external/openid";
import { Subject as B } from "@umbraco-cms/backoffice/external/rxjs";
var W = Object.defineProperty, D = Object.getOwnPropertyDescriptor, b = (s) => {
  throw TypeError(s);
}, h = (s, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? D(e, t) : e, n = s.length - 1, r; n >= 0; n--)
    (r = s[n]) && (o = (i ? r(e, t, o) : r(o)) || o);
  return i && o && W(e, t, o), o;
}, w = (s, e, t) => e.has(s) || b("Cannot " + t), y = (s, e, t) => (w(s, e, "read from private field"), t ? t.call(s) : e.get(s)), H = (s, e, t) => e.has(s) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), j = (s, e, t) => (w(s, e, "access private method"), t), c, p, T;
let a = class extends A {
  constructor() {
    super(...arguments), H(this, c);
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("part", "auth-provider-default");
  }
  render() {
    return E`
			<uui-button
				type="button"
				@click=${() => this.onSubmit(this.manifest)}
				id="auth-provider-button"
				.label=${y(this, c, p)}
				.look=${this.manifest.meta?.defaultView?.look ?? "outline"}
				.color=${this.manifest.meta?.defaultView?.color ?? "default"}
				style="transition: all .3s ease-in-out;">
				${j(this, c, T).call(this)} ${y(this, c, p)}
			</uui-button>
		`;
  }
};
c = /* @__PURE__ */ new WeakSet();
p = function() {
  const s = this.manifest.meta?.label ?? this.manifest.forProviderName;
  if (s == "Umbraco")
    return this.localize.term("login_signIn");
  const e = this.localize.string(s);
  return this.localize.term("login_signInWith", e);
};
T = function() {
  return q;
};
a.styles = [
  z,
  R`
			:host {
				display: block;

				--uui-color-default: var(--uui-color-interactive);
				--uui-color-default-emphasis: var(--uui-color-interactive-emphasis);
				--uui-color-interactive: var(--gtel-logout-primary-color, #035ded);
				--uui-color-interactive-emphasis: var(--gtel-logout-emphasis-color, #004bc3);
			}

			#auth-provider-button {
				width: 100%;

				--uui-button-height: var(--gtel-logout-content-button-height, 42px);
			}

			#icon {
				margin-right: var(--uui-size-space-1);
			}
		`
];
h([
  m({ attribute: !1 })
], a.prototype, "userLoginState", 2);
h([
  m({ attribute: !1 })
], a.prototype, "manifest", 2);
h([
  m({ attribute: !1 })
], a.prototype, "onSubmit", 2);
a = h([
  S("umb-auth-provider-default")
], a);
const f = "umb:userAuthTokenResponse", J = new P();
class K extends I {
  parse(e) {
    return super.parse(e, !1);
  }
}
class Z {
  constructor(e, t, i, o, n = "umbraco-back-office", r = "offline_access") {
    this.authorizationSignal = new B(), this.#s = t, this.#c = i, this.#u = o, this.#i = n, this.#h = r, this.#t = new O({
      authorization_endpoint: `${e}/umbraco/management/api/v1/security/back-office/authorize`,
      token_endpoint: `${e}/umbraco/management/api/v1/security/back-office/token`,
      revocation_endpoint: `${e}/umbraco/management/api/v1/security/back-office/revoke`,
      end_session_endpoint: `${e}/umbraco/management/api/v1/security/back-office/signout`
    }), this.#l = `${e}/umbraco/management/api/v1/security/back-office/link-login`, this.#f = `${e}/umbraco/management/api/v1/security/back-office/link-login-key`, this.#p = `${e}/umbraco/management/api/v1/security/back-office/unlink-login`, this.#a = new $(), this.#r = new N(J), this.#o = new L(), this.#n = new U(this.#o, new K()), this.#n.setAuthorizationNotifier(this.#a), this.#a.setAuthorizationListener(async (u, d, l) => {
      if (l)
        throw console.error("Authorization error", l), this.authorizationSignal.next(), l;
      if (d) {
        let k;
        u.internal && u.internal.code_verifier && (k = u.internal.code_verifier), await this.#k(d.code, k), await this.performWithFreshTokens(), await this.#m();
      }
      this.authorizationSignal.next();
    });
  }
  // handlers
  #a;
  #n;
  #r;
  #o;
  // state
  #t;
  #s;
  #c;
  #i;
  #h;
  #u;
  // tokens
  #e;
  // external login
  #l;
  #f;
  #p;
  /**
   * This method will initialize all the state needed for the auth flow.
   *
   * It will:
   * - Check if there is a token response in local storage
   * - If there is a token response, check if it is valid
   * - If it is not valid, check if there is a new authorization to be made
   * - If there is a new authorization to be made, complete it
   * - If there is no token response, check if there is a new authorization to be made
   * - If there is a new authorization to be made, complete it
   */
  async setInitialState() {
    const e = await this.#o.getItem(f);
    if (e) {
      const t = new x(JSON.parse(e));
      this.#e = t;
    }
  }
  /**
   * This method will check if there is a new authorization to be made and complete it if there is.
   * This method will be called on initialization to check if there is a new authorization to be made.
   * It is useful if there is a ?code query string parameter in the URL from the server or if the auth flow
   * saved the state in local storage before redirecting the user to the login page.
   */
  completeAuthorizationIfPossible() {
    return this.#n.completeAuthorizationRequestIfPossible();
  }
  /**
   * Make an authorization request to the server using the specified identity provider.
   * This method will redirect the user to the authorization endpoint of the server.
   * @param identityProvider The identity provider to use for the authorization request.
   * @param usernameHint (Optional) The username to use for the authorization request. It will be provided to the OpenID server as a hint.
   */
  makeAuthorizationRequest(e, t) {
    const i = { prompt: "consent", access_type: "offline" };
    e !== "Umbraco" && (i.identity_provider = e), t && (i.login_hint = t);
    const o = new _(
      {
        client_id: this.#i,
        redirect_uri: this.#s,
        scope: this.#h,
        response_type: _.RESPONSE_TYPE_CODE,
        state: void 0,
        extras: i
      },
      void 0,
      !0
    );
    return this.#n.performAuthorizationRequest(this.#t, o);
  }
  /**
   * This method will check if the user is logged in by validating if there is a token stored.
   * If no token is stored, it will return false.
   * @returns true if the user is logged in, false otherwise.
   */
  isAuthorized() {
    return !!this.#e;
  }
  /**
   * Forget all cached token state
   */
  async clearTokenStorage() {
    await this.#o.removeItem(f), this.#e = void 0;
  }
  /**
   * This method will sign the user out of the application.
   */
  async signOut() {
    const e = [];
    if (this.#e) {
      const n = new v({
        token: this.#e.accessToken,
        client_id: this.#i,
        token_type_hint: "access_token"
      });
      if (e.push(this.#r.performRevokeTokenRequest(this.#t, n)), this.#e.refreshToken) {
        const r = new v({
          token: this.#e.refreshToken,
          client_id: this.#i,
          token_type_hint: "refresh_token"
        });
        e.push(
          this.#r.performRevokeTokenRequest(this.#t, r)
        );
      }
    }
    e.push(this.clearTokenStorage()), await Promise.allSettled(e);
    const t = new URL(this.#c, window.origin), i = this.#t.endSessionEndpoint;
    if (!i) {
      location.href = t.href;
      return;
    }
    const o = new URL(i, this.#s);
    o.searchParams.set("post_logout_redirect_uri", t.href), location.href = o.href;
  }
  /**
   * This method will check if the token needs to be refreshed and if so, it will refresh it and return the new access token.
   * If the token does not need to be refreshed, it will return the current access token.
   * @returns The access token for the user.
   */
  async performWithFreshTokens() {
    return this.#e?.isValid() ? Promise.resolve(this.#e.accessToken) : await this.makeRefreshTokenRequest() ? this.#e ? Promise.resolve(this.#e.accessToken) : Promise.reject("Missing tokenResponse.") : (this.clearTokenStorage(), this.#u.next(), Promise.reject("Missing tokenResponse."));
  }
  /**
   * This method will link the current user to the specified provider by redirecting the user to the link endpoint.
   * @param provider The provider to link to.
   */
  async linkLogin(e) {
    const t = await this.#_(e), i = document.createElement("form");
    i.method = "POST", i.action = this.#l, i.style.display = "none";
    const o = document.createElement("input");
    o.name = "provider", o.value = e, i.appendChild(o);
    const n = document.createElement("input");
    n.name = "linkKey", n.value = t, i.appendChild(n), document.body.appendChild(i), i.submit();
  }
  /**
   * This method will unlink the current user from the specified provider.
   * @param loginProvider
   * @param providerKey
   */
  async unlinkLogin(e, t) {
    const i = await this.performWithFreshTokens(), o = new Request(this.#p, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${i}` },
      body: JSON.stringify({ loginProvider: e, providerKey: t })
    }), n = await fetch(o);
    if (!n.ok)
      throw await n.json();
    return await this.signOut(), !0;
  }
  /**
   * Save the current token response to local storage.
   */
  async #m() {
    this.#e && await this.#o.setItem(f, JSON.stringify(this.#e.toJson()));
  }
  /**
   * This method will make a token request to the server using the authorization code.
   * @param code
   * @param codeVerifier
   */
  async #k(e, t) {
    const i = {};
    t && (i.code_verifier = t);
    const o = new g({
      client_id: this.#i,
      redirect_uri: this.#s,
      grant_type: C,
      code: e,
      refresh_token: void 0,
      extras: i
    });
    await this.#d(o);
  }
  async makeRefreshTokenRequest() {
    if (!this.#e?.refreshToken)
      return !1;
    const e = new g({
      client_id: this.#i,
      redirect_uri: this.#s,
      grant_type: F,
      code: void 0,
      refresh_token: this.#e.refreshToken,
      extras: void 0
    });
    return this.#d(e);
  }
  /**
   * This method will make a token request to the server using the refresh token.
   * If the request fails, it will sign the user out (clear the token state).
   * @param request
   */
  async #d(e) {
    try {
      return this.#e = await this.#r.performTokenRequest(this.#t, e), this.#m(), !0;
    } catch (t) {
      return console.error("Token request error", t), this.clearTokenStorage(), !1;
    }
  }
  async #_(e) {
    const t = await this.performWithFreshTokens(), i = await fetch(`${this.#f}?provider=${e}`, {
      headers: {
        Authorization: `Bearer ${t}`,
        "Content-Type": "application/json"
      }
    });
    if (!i.ok)
      throw new Error("Failed to link login");
    return i.json();
  }
}
export {
  Z as U,
  f as a,
  a as b
};
//# sourceMappingURL=auth-flow-DPZhveDC.js.map
