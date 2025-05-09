import { UmbTiptapToolbarElementApiBase as s } from "@umbraco-cms/backoffice/tiptap";
import { UMB_BLOCK_RTE_MANAGER_CONTEXT as i, UMB_BLOCK_RTE_ENTRIES_CONTEXT as r } from "@umbraco-cms/backoffice/block-rte";
class a extends s {
  #t;
  #e;
  constructor(e) {
    super(e), this.consumeContext(i, (t) => {
      this.observe(
        t.blockTypes,
        (o) => {
          this.#t = o;
        },
        "blockType"
      );
    }), this.consumeContext(r, (t) => {
      this.#e = t;
    });
  }
  isActive(e) {
    return e?.isActive("umbRteBlock") === !0 || e?.isActive("umbRteBlockInline") === !0;
  }
  async execute() {
    return this.#o();
  }
  #o() {
    if (!this.#e) {
      console.error("[Block Picker] No entries context available.");
      return;
    }
    let e;
    if (this.#t?.length === 1) {
      const t = this.#t[0].contentElementTypeKey;
      e = this.#e.getPathForCreateBlock() + "modal/umb-modal-workspace/create/" + t;
    } else
      e = this.#e.getPathForCreateBlock();
    e && window.history.pushState({}, "", e);
  }
}
export {
  a as default
};
//# sourceMappingURL=block.tiptap-toolbar-api-C5mUw7f6.js.map
