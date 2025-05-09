import { UmbContextToken as s } from "@umbraco-cms/backoffice/context-api";
import { UmbDeepState as e } from "@umbraco-cms/backoffice/observable-api";
class n {
  constructor() {
    this.#t = new e(void 0), this.manifest = this.#t.asObservable(), this.alias = this.#t.asObservablePart((t) => t?.alias);
  }
  #t;
  setManifest(t) {
    this.#t.setValue(t);
  }
}
const r = new s("UMB_MENU_CONTEXT");
export {
  n as U,
  r as a
};
//# sourceMappingURL=menu.context-DgF1nM0C.js.map
