import { U as a } from "./user-repository-base-BaW7q1y8.js";
import { UserService as n, UserStateModel as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as U } from "@umbraco-cms/backoffice/resources";
class m {
  #t;
  /**
   * Creates an instance of UmbUnlockUserServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUnlockUserServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Unlock users
   * @param {string[]} userIds
   * @returns {Promise<void>}
   * @memberof UmbUnlockUserServerDataSource
   */
  async unlock(t) {
    if (!t) throw new Error("User ids are missing");
    return U(
      this.#t,
      n.postUserUnlock({
        requestBody: {
          userIds: t.map((e) => ({ id: e }))
        }
      })
    );
  }
}
class f extends a {
  #t;
  constructor(t) {
    super(t), this.#t = new m(t);
  }
  async unlock(t) {
    if (t.length === 0) throw new Error("User ids are missing");
    await this.init;
    const { data: e, error: r } = await this.#t.unlock(t);
    if (!r) {
      t.forEach((i) => {
        this.detailStore?.updateItem(i, { state: c.ACTIVE, failedLoginAttempts: 0 });
      });
      const o = { data: { message: "User unlocked" } };
      this.notificationContext?.peek("positive", o);
    }
    return { data: e, error: r };
  }
}
export {
  f as UmbUnlockUserRepository,
  f as default
};
//# sourceMappingURL=unlock-user.repository-B_8SNkuA.js.map
