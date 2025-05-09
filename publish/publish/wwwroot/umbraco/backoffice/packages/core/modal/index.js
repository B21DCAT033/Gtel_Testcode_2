import { U as n } from "../error-viewer-modal.token-wKYkoQeY.js";
import { a as f, c as E, b as x, d as A } from "../error-viewer-modal.token-wKYkoQeY.js";
import { U as a } from "../modal-token-wEQqBBXI.js";
import { UmbControllerBase as m } from "@umbraco-cms/backoffice/class-api";
import { UmbConfirmModalElement as O } from "../confirm-modal.element-COhIMOef.js";
import { a as B, U as R, a as h } from "../discard-changes-modal.element-Ds5HOoV9.js";
import { m as y } from "../manifest-D87W_b9a.js";
const s = new a("Umb.Modal.Confirm", {
  modal: {
    type: "dialog"
  }
});
class r extends m {
  async open(o) {
    const t = (await this.getContext(n)).open(this, s, {
      data: o
    }).onSubmit();
    t.catch(() => {
      this.destroy();
    }), await t, this.destroy();
  }
}
function U(e, o) {
  return new r(e).open(o);
}
const _ = new a("Umb.Modal.DiscardChanges", {
  modal: {
    type: "dialog"
  }
}), b = new a(
  "Umb.Modal.ItemPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
export {
  s as UMB_CONFIRM_MODAL,
  _ as UMB_DISCARD_CHANGES_MODAL,
  f as UMB_ERROR_VIEWER_MODAL,
  b as UMB_ITEM_PICKER_MODAL,
  E as UMB_MODAL_CONTEXT,
  n as UMB_MODAL_MANAGER_CONTEXT,
  r as UmbConfirmModalController,
  O as UmbConfirmModalElement,
  B as UmbDiscardChangesModalElement,
  R as UmbModalBaseElement,
  x as UmbModalElement,
  A as UmbModalManagerContext,
  a as UmbModalToken,
  h as element,
  y as manifests,
  U as umbConfirmModal
};
//# sourceMappingURL=index.js.map
