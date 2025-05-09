import { U as d } from "./default-tree.context-token-C7a9fWg9.js";
import { UMB_ACTION_EVENT_CONTEXT as m } from "@umbraco-cms/backoffice/action";
import { umbExtensionsRegistry as g } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextBase as p } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionApiInitializer as f } from "@umbraco-cms/backoffice/extension-api";
import { UmbSelectionManager as T, UmbPaginationManager as b, debounce as c } from "@umbraco-cms/backoffice/utils";
import { UmbRequestReloadChildrenOfEntityEvent as h } from "@umbraco-cms/backoffice/entity-action";
import { UmbObjectState as r, UmbArrayState as R, UmbBooleanState as l } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
class k extends p {
  constructor(t) {
    super(t, d), this.#t = new r({}), this.additionalRequestArgs = this.#t.asObservable(), this.#o = new r(void 0), this.treeRoot = this.#o.asObservable(), this.#e = new R([], (e) => e.unique), this.rootItems = this.#e.asObservable(), this.selectableFilter = () => !0, this.filter = () => !0, this.selection = new T(this._host), this.pagination = new b(), this.#n = new l(!1), this.hideTreeRoot = this.#n.asObservable(), this.#h = new r(void 0), this.startNode = this.#h.asObservable(), this.#r = new l(!1), this.foldersOnly = this.#r.asObservable(), this.#s = {
      skip: 0,
      take: 50
    }, this.#d = !1, this.#m = new Promise((e) => {
      this.#d ? e() : this.#p = e;
    }), this.loadTree = c(() => this.#f(), 100), this.loadMore = () => this.#f(!0), this.#c = (e) => {
      const i = e.target;
      this.#s.skip = i.getSkip(), this.loadMore();
    }, this.#g = (e) => {
      const i = this.#o.getValue();
      i !== void 0 && e.getUnique() === i.unique && e.getEntityType() === i.entityType && this.loadTree();
    }, this.pagination.setPageSize(this.#s.take), this.#v(), this.pagination.addEventListener(y.TYPE, this.#c), this.#T();
  }
  #t;
  #o;
  #e;
  #n;
  #h;
  #r;
  #a;
  #i;
  #u;
  #s;
  #p;
  #d;
  #m;
  // TODO: find a generic way to do this
  #y() {
    this.#i && (this.#d = !0, this.#p?.());
  }
  /**
   * Sets the manifest
   * @param {ManifestTree} manifest
   * @memberof UmbDefaultTreeContext
   */
  set manifest(t) {
    this.#a !== t && (this.#a = t, this.#E(this.#a?.meta.repositoryAlias));
  }
  get manifest() {
    return this.#a;
  }
  // TODO: getManifest, could be refactored to use the getter method [NL]
  /**
   * Returns the manifest.
   * @returns {ManifestTree}
   * @memberof UmbDefaultTreeContext
   */
  getManifest() {
    return this.#a;
  }
  getRepository() {
    return this.#i;
  }
  #f(t = !1) {
    if (this.getStartNode()) {
      this.#b(t);
      return;
    }
    if (this.getHideTreeRoot()) {
      this.#b(t);
      return;
    }
    this.#T();
  }
  async #T() {
    await this.#m;
    const { data: t } = await this.#i.requestTreeRoot();
    t && (this.#o.setValue(t), this.pagination.setTotalItems(1));
  }
  async #b(t = !1) {
    await this.#m;
    const e = t ? this.#s.skip : 0, i = t ? this.#s.take : this.pagination.getCurrentPageNumber() * this.#s.take, o = this.getStartNode(), a = this.#r.getValue(), n = this.#t.getValue(), { data: s } = o?.unique ? await this.#i.requestTreeItemsOf({
      ...n,
      parent: {
        unique: o.unique,
        entityType: o.entityType
      },
      foldersOnly: a,
      skip: e,
      take: i
    }) : await this.#i.requestTreeRootItems({
      ...n,
      foldersOnly: a,
      skip: e,
      take: i
    });
    if (s) {
      if (t) {
        const u = this.#e.getValue();
        this.#e.setValue([...u, ...s.items]);
      } else
        this.#e.setValue(s.items);
      this.pagination.setTotalItems(s.total);
    }
  }
  /**
   * Sets the hideTreeRoot config
   * @param {boolean} hideTreeRoot - Whether to hide the tree root
   * @memberof UmbDefaultTreeContext
   */
  setHideTreeRoot(t) {
    this.#n.setValue(t), this.#l(), this.loadTree();
  }
  /**
   * Gets the hideTreeRoot config
   * @returns {boolean}
   * @memberof UmbDefaultTreeContext
   */
  getHideTreeRoot() {
    return this.#n.getValue();
  }
  /**
   * Sets the startNode config
   * @param {UmbTreeStartNode} startNode
   * @memberof UmbDefaultTreeContext
   */
  setStartNode(t) {
    this.#h.setValue(t), this.#l(), this.loadTree();
  }
  /**
   * Gets the startNode config
   * @returns {UmbTreeStartNode} - The start node
   * @memberof UmbDefaultTreeContext
   */
  getStartNode() {
    return this.#h.getValue();
  }
  /**
   * Sets the foldersOnly config
   * @param {boolean} foldersOnly - Whether to show only folders
   * @memberof UmbDefaultTreeContext
   */
  setFoldersOnly(t) {
    this.#r.setValue(t), this.#l(), this.loadTree();
  }
  /**
   * Gets the foldersOnly config
   * @returns {boolean} - Whether to show only folders
   * @memberof UmbDefaultTreeContext
   */
  getFoldersOnly() {
    return this.#r.getValue();
  }
  /**
   * Updates the requestArgs config and reloads the tree.
   * @param args
   */
  updateAdditionalRequestArgs(t) {
    this.#t.setValue({ ...this.#t.getValue(), ...t }), this.#l(), this.loadTree();
  }
  getAdditionalRequestArgs() {
    return this.#t.getValue();
  }
  #l() {
    this.#o.setValue(void 0), this.#e.setValue([]), this.pagination.clear();
  }
  #v() {
    this.consumeContext(m, (t) => {
      this.#R(), this.#u = t, this.#u?.addEventListener(
        h.TYPE,
        this.#g
      );
    });
  }
  #c;
  #E(t) {
    if (!t) throw new Error("Tree must have a repository alias.");
    new f(
      this,
      g,
      t,
      [this._host],
      (e, i) => {
        this.#i = e ? i.api : void 0, this.#y();
      }
    );
  }
  #g;
  #R() {
    this.#u?.removeEventListener(
      h.TYPE,
      this.#g
    );
  }
  destroy() {
    this.#R(), super.destroy();
  }
}
export {
  k as UmbDefaultTreeContext,
  k as api
};
//# sourceMappingURL=default-tree.context-BI-3S6zh.js.map
