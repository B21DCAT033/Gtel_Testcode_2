import "./clipboard-entry-picker-modal.token-BWZEakh-.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/current-user";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "./entity-B4DsEs7O.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { UmbClipboardEntryItemRepository as s } from "./clipboard-entry-item.repository-BLSut6DQ.js";
import { U as p } from "./clipboard.property-context-token-DMlYzAUk.js";
import { umbConfirmModal as m } from "@umbraco-cms/backoffice/modal";
import { UMB_PROPERTY_CONTEXT as l } from "@umbraco-cms/backoffice/property";
import { UmbPropertyActionBase as c } from "@umbraco-cms/backoffice/property-action";
class v extends c {
  #o;
  #t;
  #r;
  constructor(r, o) {
    super(r, o), this.#o = Promise.all([
      this.consumeContext(l, (t) => {
        this.#t = t;
      }).asPromise(),
      this.consumeContext(p, (t) => {
        this.#r = t;
      }).asPromise()
    ]);
  }
  async execute() {
    if (await this.#o, !this.#r) throw new Error("Clipboard context not found");
    if (!this.#t) throw new Error("Property context not found");
    const r = this.#t.getEditorManifest();
    if (!r)
      throw new Error("Property editor manifest not found");
    const o = await this.#r.pick({
      propertyEditorUiAlias: r.alias,
      multiple: !1
    }), t = o.selection[0], i = o.propertyValues[0];
    if (!t)
      throw new Error("No clipboard entry selected");
    if (!i)
      throw new Error("No property value found");
    if (this.#t.getValue()) {
      const n = new s(this), { data: e } = await n.requestItems([t]);
      if (!e || e.length === 0)
        throw new Error("Clipboard entry not found");
      const a = e[0];
      await m(this, {
        headline: "Paste from clipboard",
        content: `The property already contains a value. Paste from the property action will overwrite the current value. 
				Do you want to replace the current value with ${a.name}?`,
        confirmLabel: "Paste"
      });
    }
    this.#t?.setValue(i);
  }
}
export {
  v as UmbPasteFromClipboardPropertyAction,
  v as api
};
//# sourceMappingURL=paste-from-clipboard.property-action-CBMiCuXN.js.map
