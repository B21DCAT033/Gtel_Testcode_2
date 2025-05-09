import { UserService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as c, tryExecute as f } from "@umbraco-cms/backoffice/resources";
import { U as h } from "./user-repository-base-BaW7q1y8.js";
import { of as m } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbLocalizationController as U } from "@umbraco-cms/backoffice/localization-api";
class u {
  #r;
  /**
   * Creates an instance of UmbMfaServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMfaServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Request the MFA providers for a user
   * @param unique The unique id of the user
   * @memberof UmbMfaServerDataSource
   */
  requestMfaProviders(r) {
    if (!r) throw new Error("User id is missing");
    return c(
      this.#r,
      i.getUserById2Fa({
        id: r
      })
    );
  }
  /**
   * Disables a MFA provider for a user
   * @param unique The unique id of the user
   * @param providerName The name of the provider
   * @memberof UmbMfaServerDataSource
   */
  disableMfaProvider(r, s) {
    if (!r) throw new Error("User id is missing");
    if (!s) throw new Error("Provider is missing");
    return f(
      i.deleteUserById2FaByProviderName({
        id: r,
        providerName: s
      })
    );
  }
}
class w {
  #r;
  /**
   * Creates an instance of UmbUserSetGroupsServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserSetGroupsServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Set groups for users
   * @param {Array<string>} id
   * @param userIds
   * @param userGroupIds
   * @returns {*}
   * @memberof UmbUserSetGroupsServerDataSource
   */
  async setGroups(r, s) {
    if (!r) throw new Error("User ids are missing");
    if (!s) throw new Error("User group ids are missing");
    return c(
      this.#r,
      i.postUserSetUserGroups({
        requestBody: {
          userIds: r.map((e) => ({ id: e })),
          userGroupIds: s.map((e) => ({ id: e }))
        }
      })
    );
  }
}
class y extends h {
  #r = new w(this._host);
  #s = new u(this._host);
  async setUserGroups(r, s) {
    if (s.length === 0) throw new Error("User group ids are missing");
    if (r.length === 0) throw new Error("User ids are missing");
    const { error: e } = await this.#r.setGroups(r, s);
    return { error: e };
  }
  /**
   * Request the MFA providers for a user
   * @param unique The unique id of the user
   * @memberof UmbUserRepository
   */
  async requestMfaProviders(r) {
    const { data: s, error: e } = await this.#s.requestMfaProviders(r);
    return { data: s, error: e, asObservable: () => m(s ?? []) };
  }
  /**
   * Disables a MFA provider for a user
   * @param unique The unique id of the user
   * @param providerName The name of the provider
   * @param displayName The display name of the provider to show in the notification (optional)
   * @memberof UmbUserRepository
   */
  async disableMfaProvider(r, s, e) {
    const { data: d, error: t } = await this.#s.disableMfaProvider(r, s), n = new U(this._host);
    if (t) {
      console.error("Failed to disable MFA provider", t);
      const o = {
        data: { message: n.term("user_2faProviderIsNotDisabledMsg", e ?? s) }
      };
      this.notificationContext?.peek("warning", o);
    } else {
      const o = {
        data: { message: n.term("user_2faProviderIsDisabledMsg", e ?? s) }
      };
      this.notificationContext?.peek("positive", o);
    }
    return { data: d, error: t };
  }
}
export {
  y as U
};
//# sourceMappingURL=user.repository-DPg1CndI.js.map
