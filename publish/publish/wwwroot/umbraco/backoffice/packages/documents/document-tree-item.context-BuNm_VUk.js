import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/repository";
import "./manifests-ByHRH93l.js";
import { U as s } from "./document-item-data-resolver-CCvZ1xDq.js";
import { UmbDefaultTreeItemContext as i } from "@umbraco-cms/backoffice/tree";
import { UmbIsTrashedEntityContext as r } from "@umbraco-cms/backoffice/recycle-bin";
class b extends i {
  constructor(t) {
    super(t), this.#e = new r(this), this.#t = new s(this), this.name = this.#t.name, this.icon = this.#t.icon, this.isDraft = this.#t.isDraft, this.isTrashed = this._treeItem.asObservablePart((e) => e?.isTrashed ?? !1), this.observe(this.isTrashed, (e) => {
      this.#e.setIsTrashed(e);
    });
  }
  #e;
  #t;
  setTreeItem(t) {
    super.setTreeItem(t), this.#t.setData(t);
  }
}
export {
  b as UmbDocumentTreeItemContext,
  b as api
};
//# sourceMappingURL=document-tree-item.context-BuNm_VUk.js.map
