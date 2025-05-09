import { U as t } from "./types-CDjdD95-.js";
import { U as e } from "./user-allow-action-base.condition-B1L4o4vE.js";
class a extends e {
  async _onUserDataChange() {
    if (!this.userUnique || await this.isCurrentUser()) {
      this.permitted = !1;
      return;
    }
    this.permitted = this.userState === t.LOCKED_OUT;
  }
}
export {
  a as UmbUserAllowUnlockActionCondition,
  a as api
};
//# sourceMappingURL=user-allow-unlock-action.condition-J3eVDO6b.js.map
