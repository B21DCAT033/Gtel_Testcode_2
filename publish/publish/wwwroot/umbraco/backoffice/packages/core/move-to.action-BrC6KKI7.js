import { UmbEntityActionBase as a, UmbRequestReloadStructureForEntityEvent as n } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as r } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as l } from "@umbraco-cms/backoffice/action";
import { UMB_TREE_PICKER_MODAL as u } from "@umbraco-cms/backoffice/tree";
class d extends a {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    const i = (await (await this.getContext(s)).open(this, u, {
      data: {
        treeAlias: this.args.meta.treeAlias,
        foldersOnly: this.args.meta.foldersOnly
      }
    }).onSubmit()).selection[0];
    if (i === void 0) throw new Error("Destination Unique is not available");
    const o = await r(this, this.args.meta.moveRepositoryAlias);
    if (!o) throw new Error("Move Repository is not available");
    await o.requestMoveTo({ unique: this.args.unique, destination: { unique: i } }), this.#t();
  }
  async #t() {
    const t = await this.getContext(l), e = new n({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  d as UmbMoveToEntityAction,
  d as default
};
//# sourceMappingURL=move-to.action-BrC6KKI7.js.map
