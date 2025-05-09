import { u as e } from "./constants-D-HH3gx6.js";
import { UmbDetailStoreBase as i } from "@umbraco-cms/backoffice/store";
class p extends i {
  /**
   * Creates an instance of UmbDataTypeDetailStore.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeDetailStore
   */
  constructor(t) {
    super(t, e.toString());
  }
  withPropertyEditorUiAlias(t) {
    return this._data.asObservablePart((r) => r.filter((a) => a.editorUiAlias === t));
  }
}
export {
  p as UmbDataTypeDetailStore,
  p as api
};
//# sourceMappingURL=data-type-detail.store-Be_YKZmU.js.map
