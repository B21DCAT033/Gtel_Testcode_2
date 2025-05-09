import { U as t } from "./types-CDjdD95-.js";
import { U as e } from "./user-allow-action-base.condition-B1L4o4vE.js";
class a extends e {
  async _onUserDataChange() {
    if (!this.userUnique || await this.isCurrentUser()) {
      this.permitted = !1;
      return;
    }
    this.permitted = this.userState === t.DISABLED;
  }
}
export {
  a as UmbUserAllowEnableActionCondition,
  a as api
};
//# sourceMappingURL=user-allow-enable-action.condition-CyABbn-Z.js.map
