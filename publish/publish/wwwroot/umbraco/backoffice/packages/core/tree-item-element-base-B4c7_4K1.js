import "./default-tree.element-CDy5CpaY.js";
import { U as v } from "./default-tree.context-token-C7a9fWg9.js";
import { UMB_ACTION_EVENT_CONTEXT as T } from "@umbraco-cms/backoffice/action";
import { umbExtensionsRegistry as E } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextBase as S } from "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/extension-api";
import { UmbPaginationManager as x, debounce as I } from "@umbraco-cms/backoffice/utils";
import { UmbEntityActionEvent as w, UmbRequestReloadChildrenOfEntityEvent as b, UmbRequestReloadStructureForEntityEvent as f } from "@umbraco-cms/backoffice/entity-action";
import { UmbObjectState as q, UmbArrayState as P, UmbBooleanState as a, UmbStringState as O } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as $ } from "@umbraco-cms/backoffice/event";
import { map as g } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbContextToken as A } from "@umbraco-cms/backoffice/context-api";
import { UMB_SECTION_CONTEXT as U, UMB_SECTION_SIDEBAR_CONTEXT as L } from "@umbraco-cms/backoffice/section";
import { property as p, state as r, ifDefined as V, html as h, nothing as _, repeat as R } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
class m extends w {
  static {
    this.TYPE = "request-reload-tree-item-children";
  }
  constructor(e) {
    super(m.TYPE, e);
  }
}
class te extends S {
  constructor(e) {
    super(e, y), this.pagination = new x(), this._treeItem = new q(void 0), this.treeItem = this._treeItem.asObservable(), this.#t = new P([], (t) => t.unique), this.childItems = this.#t.asObservable(), this.#i = new a(!1), this.hasChildren = this.#i.asObservable(), this.#s = new a(!1), this.isLoading = this.#s.asObservable(), this.#o = new a(!1), this.isSelectable = this.#o.asObservable(), this.#a = new a(!1), this.isSelectableContext = this.#a.asObservable(), this.#l = new a(!1), this.isSelected = this.#l.asObservable(), this.#r = new a(!1), this.isActive = this.#r.asObservable(), this.#m = new a(!1), this.hasActions = this.#m.asObservable(), this.#u = new O(""), this.path = this.#u.asObservable(), this.#d = new a(!1), this.foldersOnly = this.#d.asObservable(), this.#h = {
      skip: 0,
      take: 50
    }, this.loadChildren = () => this.#C(), this.loadMore = () => this.#C(!0), this.#c = (t) => {
      t.getUnique() === this.unique && t.getEntityType() === this.entityType && this.loadChildren();
    }, this.#b = async (t) => {
      this.unique && t.getUnique() === this.unique && t.getEntityType() === this.entityType && (this.parentTreeItemContext ? this.parentTreeItemContext.loadChildren() : this.treeContext?.loadTree());
    }, this.#S = (t) => {
      const i = t.target;
      this.#h.skip = i.getSkip(), this.loadMore();
    }, this.#f = I(() => this.#g(), 100), this.#_ = () => {
      this.#n?.removeEventListener(
        m.TYPE,
        this.#c
      ), this.#n?.removeEventListener(
        b.TYPE,
        this.#c
      ), this.#n?.removeEventListener(
        f.TYPE,
        this.#b
      );
    }, this.pagination.setPageSize(this.#h.take), this.#x(), this.pagination.addEventListener($.TYPE, this.#S), window.addEventListener("navigationend", this.#f);
  }
  #e;
  #t;
  #i;
  #s;
  #o;
  #a;
  #l;
  #r;
  #m;
  #u;
  #d;
  #p;
  #y;
  #n;
  #h;
  /**
   * Sets the manifest
   * @param {ManifestCollection} manifest
   * @memberof UmbCollectionContext
   */
  set manifest(e) {
    this.#e !== e && (this.#e = e);
  }
  get manifest() {
    return this.#e;
  }
  // TODO: Be aware that this method, could be removed and we can use the getter method instead [NL]
  /**
   * Returns the manifest.
   * @returns {ManifestCollection}
   * @memberof UmbCollectionContext
   */
  getManifest() {
    return this.#e;
  }
  setTreeItem(e) {
    if (!e) {
      this._treeItem.setValue(void 0);
      return;
    }
    if (e.unique === void 0) throw new Error("Could not create tree item context, unique is missing");
    if (this.unique = e.unique, !e.entityType) throw new Error("Could not create tree item context, tree item type is missing");
    this.entityType = e.entityType, this.#i.setValue(e.hasChildren || !1), this._treeItem.setValue(e), this.#w(), this.#v(), this.#T(), this.#E();
  }
  async #C(e = !1) {
    if (this.unique === void 0) throw new Error("Could not request children, unique key is missing");
    if (this.entityType === void 0) throw new Error("Could not request children, entity type is missing");
    const t = this.treeContext?.getRepository();
    if (!t) throw new Error("Could not request children, repository is missing");
    this.#s.setValue(!0);
    const i = e ? this.#h.skip : 0, o = e ? this.#h.take : this.pagination.getCurrentPageNumber() * this.#h.take, l = this.#d.getValue(), c = this.treeContext?.getAdditionalRequestArgs(), { data: u } = await t.requestTreeItemsOf({
      parent: {
        unique: this.unique,
        entityType: this.entityType
      },
      foldersOnly: l,
      skip: i,
      take: o,
      ...c
    });
    if (u) {
      if (e) {
        const C = this.#t.getValue();
        this.#t.setValue([...C, ...u.items]);
      } else
        this.#t.setValue(u.items);
      this.#i.setValue(u.total > 0), this.pagination.setTotalItems(u.total);
    }
    this.#s.setValue(!1);
  }
  toggleContextMenu() {
    if (!this.getTreeItem() || !this.entityType || this.unique === void 0)
      throw new Error("Could not request children, tree item is not set");
    this.#y?.toggleContextMenu(this.getHostElement(), {
      entityType: this.entityType,
      unique: this.unique,
      headline: this.getTreeItem()?.name || ""
    });
  }
  select() {
    if (this.unique === void 0) throw new Error("Could not select. Unique is missing");
    this.treeContext?.selection.select(this.unique);
  }
  deselect() {
    if (this.unique === void 0) throw new Error("Could not deselect. Unique is missing");
    this.treeContext?.selection.deselect(this.unique);
  }
  async #x() {
    this.consumeContext(U, (e) => {
      this.#p = e, this.#E();
    }), this.consumeContext(L, (e) => {
      this.#y = e;
    }), this.consumeContext(v, (e) => {
      this.treeContext = e, this.#v(), this.#T(), this.#I();
    }), this.consumeContext(y, (e) => {
      this.parentTreeItemContext = e;
    }).skipHost(), this.consumeContext(T, (e) => {
      this.#_(), this.#n = e, this.#n.addEventListener(
        m.TYPE,
        this.#c
      ), this.#n.addEventListener(
        b.TYPE,
        this.#c
      ), this.#n.addEventListener(
        f.TYPE,
        this.#b
      );
    });
  }
  getTreeItem() {
    return this._treeItem.getValue();
  }
  #v() {
    this.treeContext && this.observe(
      this.treeContext.selection.selectable,
      (e) => {
        if (this.#a.setValue(e), e === !0) {
          const t = this.treeContext?.selectableFilter?.(this.getTreeItem()) ?? !0;
          this.#o.setValue(t), this.#g();
        }
      },
      "observeIsSelectable"
    );
  }
  #T() {
    !this.treeContext || !this.unique || this.observe(
      this.treeContext.selection.selection.pipe(g((e) => e.includes(this.unique))),
      (e) => {
        this.#l.setValue(e);
      },
      "observeIsSelected"
    );
  }
  #I() {
    !this.treeContext || this.unique === void 0 || this.observe(
      this.treeContext.foldersOnly,
      (e) => {
        this.#d.setValue(e);
      },
      "observeFoldersOnly"
    );
  }
  #E() {
    this.#p && this.observe(
      this.#p.pathname,
      (e) => {
        if (!e || !this.entityType || this.unique === void 0) return;
        const t = this.constructPath(e, this.entityType, this.unique);
        this.#u.setValue(t), this.#g();
      },
      "observeSectionPath"
    );
  }
  #w() {
    this.observe(
      E.byType("entityAction").pipe(g((e) => e.filter((t) => t.forEntityTypes.includes(this.entityType)))),
      (e) => {
        this.#m.setValue(e.length > 0);
      },
      "observeActions"
    );
  }
  #c;
  #b;
  #S;
  #f;
  #g() {
    if (this.#o.getValue()) {
      this.#r.setValue(!1);
      return;
    }
    const t = this.#u.getValue(), o = window.location.pathname.includes(t);
    this.#r.setValue(o);
  }
  // TODO: use router context
  constructPath(e, t, i) {
    return `section/${e}/workspace/${t}/edit/${i}`;
  }
  #_;
  destroy() {
    this.#_(), window.removeEventListener("navigationend", this.#f), super.destroy();
  }
}
const y = new A("UmbTreeItemContext");
var N = Object.defineProperty, B = Object.getOwnPropertyDescriptor, s = (d, e, t, i) => {
  for (var o = i > 1 ? void 0 : i ? B(e, t) : e, l = d.length - 1, c; l >= 0; l--)
    (c = d[l]) && (o = (i ? c(e, t, o) : c(o)) || o);
  return i && o && N(e, t, o), o;
};
class n extends k {
  constructor() {
    super(...arguments), this.hideActions = !1, this._isActive = !1, this._isLoading = !1, this._isSelectableContext = !1, this._isSelectable = !1, this._isSelected = !1, this._hasChildren = !1, this._iconSlotHasChildren = !1, this._totalPages = 1, this._currentPage = 1, this.#i = (e) => {
      e.stopPropagation();
      const t = this._currentPage = this._currentPage + 1;
      this.#e?.pagination.setCurrentPageNumber(t);
    }, this.#s = (e) => e.target.assignedNodes({ flatten: !0 }).length > 0;
  }
  get item() {
    return this._item;
  }
  set item(e) {
    this._item = e, this._item && this.#t();
  }
  #e;
  get api() {
    return this.#e;
  }
  set api(e) {
    this.#e = e, this.#e && (this.observe(this.#e.childItems, (t) => this._childItems = t), this.observe(this.#e.hasChildren, (t) => this._hasChildren = t), this.observe(this.#e.isActive, (t) => this._isActive = t), this.observe(this.#e.isLoading, (t) => this._isLoading = t), this.observe(this.#e.isSelectableContext, (t) => this._isSelectableContext = t), this.observe(this.#e.isSelectable, (t) => this._isSelectable = t), this.observe(this.#e.isSelected, (t) => this._isSelected = t), this.observe(this.#e.path, (t) => this._href = t), this.observe(this.#e.pagination.currentPage, (t) => this._currentPage = t), this.observe(this.#e.pagination.totalPages, (t) => this._totalPages = t), this.#t());
  }
  #t() {
    this.#e && this._item && this.#e.setTreeItem(this._item);
  }
  _handleSelectedItem(e) {
    e.stopPropagation(), this.#e?.select();
  }
  _handleDeselectedItem(e) {
    e.stopPropagation(), this.#e?.deselect();
  }
  // TODO: do we want to catch and emit a backoffice event here?
  _onShowChildren() {
    this.#e?.loadChildren();
  }
  #i;
  // Note: Currently we want to prevent opening when the item is in a selectable context, but this might change in the future.
  // If we like to be able to open items in selectable context, then we might want to make it as a menu item action, so you have to click ... and chose an action called 'Edit'
  render() {
    const e = this.localize.string(this._item?.name ?? "");
    return h`
			<uui-menu-item
				@show-children=${this._onShowChildren}
				@selected=${this._handleSelectedItem}
				@deselected=${this._handleDeselectedItem}
				?active=${this._isActive}
				?disabled=${this._isSelectableContext && !this._isSelectable}
				?selectable=${this._isSelectable}
				?selected=${this._isSelected}
				.loading=${this._isLoading}
				.hasChildren=${this._hasChildren}
				.caretLabel=${this.localize.term("visuallyHiddenTexts_expandChildItems") + " " + e}
				label=${e}
				href="${V(this._isSelectableContext ? void 0 : this._href)}">
				${this.renderIconContainer()} ${this.renderLabel()} ${this.#a()} ${this.#l()}
				<slot></slot>
				${this.#r()}
			</uui-menu-item>
		`;
  }
  #s;
  renderIconContainer() {
    return h`
			<slot
				name="icon"
				slot="icon"
				@slotchange=${(e) => {
      this._iconSlotHasChildren = this.#s(e);
    }}></slot>
			${this._iconSlotHasChildren ? _ : this.#o()}
		`;
  }
  #o() {
    const e = this._item?.icon, t = this._item?.isFolder, i = e?.split(" ")[0];
    return e && i ? h`<umb-icon slot="icon" name="${this._isActive ? i : e}"></umb-icon>` : t ? h`<umb-icon slot="icon" name="icon-folder"></umb-icon>` : h`<umb-icon slot="icon" name="icon-circle-dotted"></umb-icon>`;
  }
  renderLabel() {
    return h`<slot name="label" slot="label"></slot>`;
  }
  #a() {
    if (!this.hideActions)
      return this.#e && this._item ? h`<umb-entity-actions-bundle
					slot="actions"
					.entityType=${this.#e.entityType}
					.unique=${this.#e.unique}
					.label=${this._item.name}>
				</umb-entity-actions-bundle>` : "";
  }
  #l() {
    return h`
			${this._childItems ? R(
      this._childItems,
      (e, t) => e.name + "___" + t,
      (e) => h`<umb-tree-item
								.entityType=${e.entityType}
								.props=${{ hideActions: this.hideActions, item: e }}></umb-tree-item>`
    ) : ""}
		`;
  }
  #r() {
    return this._totalPages <= 1 || this._currentPage === this._totalPages ? _ : h` <uui-button @click=${this.#i} label="Load more"></uui-button> `;
  }
}
s([
  p({ type: Object, attribute: !1 })
], n.prototype, "item", 1);
s([
  p({ type: Object, attribute: !1 })
], n.prototype, "api", 1);
s([
  p({ type: Boolean, attribute: !1 })
], n.prototype, "hideActions", 2);
s([
  r()
], n.prototype, "_isActive", 2);
s([
  r()
], n.prototype, "_childItems", 2);
s([
  r()
], n.prototype, "_href", 2);
s([
  r()
], n.prototype, "_isLoading", 2);
s([
  r()
], n.prototype, "_isSelectableContext", 2);
s([
  r()
], n.prototype, "_isSelectable", 2);
s([
  r()
], n.prototype, "_isSelected", 2);
s([
  r()
], n.prototype, "_hasChildren", 2);
s([
  r()
], n.prototype, "_iconSlotHasChildren", 2);
s([
  r()
], n.prototype, "_totalPages", 2);
s([
  r()
], n.prototype, "_currentPage", 2);
export {
  te as U,
  n as a,
  m as b,
  y as c
};
//# sourceMappingURL=tree-item-element-base-B4c7_4K1.js.map
