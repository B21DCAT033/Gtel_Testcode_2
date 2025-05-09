import { UmbDefaultTreeItemContext as s } from "@umbraco-cms/backoffice/tree";
import { UMB_ACTION_EVENT_CONTEXT as n } from "@umbraco-cms/backoffice/action";
import { UmbEntityTrashedEvent as r } from "@umbraco-cms/backoffice/recycle-bin";
import { debounce as o } from "@umbraco-cms/backoffice/utils";
class h extends s {
  #t;
  constructor(e) {
    super(e), this.consumeContext(n, (t) => {
      this.#i(), this.#t = t, this.#t?.addEventListener(r.TYPE, this.#e);
    });
  }
  #r = o(() => this.loadChildren(), 100);
  #e = (e) => {
    const t = e.getEntityType();
    if (!t) throw new Error("Entity type is required");
    const i = this.getManifest()?.meta.supportedEntityTypes;
    if (!i)
      throw new Error("Supported entity types are missing from the manifest. (manifest.meta.supportedEntityTypes)");
    i.includes(t) && this.#r();
  };
  #i = () => {
    this.#t?.removeEventListener(r.TYPE, this.#e);
  };
  destroy() {
    this.#i(), super.destroy();
  }
}
export {
  h as UmbRecycleBinTreeItemContext,
  h as api
};
//# sourceMappingURL=recycle-bin-tree-item.context-CqvmUP-m.js.map
