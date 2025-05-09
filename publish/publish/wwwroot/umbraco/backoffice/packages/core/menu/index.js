import { U as A, a as S, b as g } from "../menu-item-layout.element-CsKQcJJD.js";
import { a as R, U as I } from "../menu.context-DgF1nM0C.js";
import { createExtensionApiByAlias as y } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextBase as l } from "@umbraco-cms/backoffice/class-api";
import { UMB_WORKSPACE_CONTEXT as w, UMB_VARIANT_WORKSPACE_CONTEXT as v } from "@umbraco-cms/backoffice/workspace";
import { UmbArrayState as b, UmbObjectState as T } from "@umbraco-cms/backoffice/observable-api";
class C extends l {
  constructor(t, i) {
    super(t, "UmbMenuStructureWorkspaceContext"), this.#t = new b([], (e) => e.unique), this.structure = this.#t.asObservable(), this.#s = new T(void 0), this.parent = this.#s.asObservable(), this.#i = i, this.consumeContext(w, (e) => {
      this.#e = e, this.#e.observe(this.#e.unique, (s) => {
        s && this.#n();
      });
    });
  }
  #e;
  #i;
  #t;
  #s;
  async #n() {
    let t = [];
    const i = await y(
      this,
      this.#i.treeRepositoryAlias
    ), { data: e } = await i.requestTreeRoot();
    e && (t = [
      {
        unique: e.unique,
        entityType: e.entityType,
        name: e.name,
        isFolder: e.isFolder
      }
    ]);
    const s = this.#e?.getIsNew(), u = s ? this.#e?.parentEntityType : this.#e?.entityType, r = await this.observe(u, () => {
    })?.asPromise();
    if (!r) throw new Error("Entity type is not available");
    if (r !== e?.entityType) {
      const a = s ? this.#e?.parentUnique : this.#e?.unique, o = await this.observe(a, () => {
      })?.asPromise();
      if (!o) throw new Error("Unique is not available");
      const { data: h } = await i.requestTreeItemAncestors({ treeItem: { unique: o, entityType: r } });
      if (h) {
        const p = h.map((n) => ({
          unique: n.unique,
          entityType: n.entityType,
          name: n.name,
          isFolder: n.isFolder
        }));
        t.push(...p);
      }
    }
    const c = t[t.length - 2];
    this.#s.setValue(c), this.#t.setValue(t);
  }
}
class O extends l {
  constructor(t, i) {
    super(t, "UmbMenuStructureWorkspaceContext"), this.#t = new b([], (e) => e.unique), this.structure = this.#t.asObservable(), this.#s = new T(void 0), this.parent = this.#s.asObservable(), this.#i = i, this.consumeContext(v, (e) => {
      this.#e = e, this.#e.observe(this.#e.unique, (s) => {
        s && this.#n();
      });
    });
  }
  // TODO: add correct interface
  #e;
  #i;
  #t;
  #s;
  async #n() {
    const t = this.#e?.getIsNew(), i = t ? this.#e?.parentUnique : this.#e?.unique, e = t ? this.#e?.parentEntityType : this.#e?.entityType;
    let s = [];
    const u = await this.observe(i, () => {
    })?.asPromise();
    if (u === void 0) throw new Error("Unique is not available");
    const r = await this.observe(e, () => {
    })?.asPromise();
    if (!r) throw new Error("Entity type is not available");
    const c = await y(
      this,
      this.#i.treeRepositoryAlias
    ), { data: a } = await c.requestTreeRoot();
    a && (s = [
      {
        unique: a.unique,
        entityType: a.entityType,
        variants: [{ name: a.name, culture: null, segment: null }]
      }
    ]);
    const { data: o } = await c.requestTreeItemAncestors({ treeItem: { unique: u, entityType: r } });
    if (o) {
      const h = o.map((n) => ({
        unique: n.unique,
        entityType: n.entityType,
        variants: n.variants.map((m) => ({
          name: m.name,
          culture: m.culture,
          segment: m.segment
        }))
      }));
      s.push(...h);
      const p = s[s.length - 2];
      this.#s.setValue(p), this.#t.setValue(s);
    }
  }
}
export {
  R as UMB_MENU_CONTEXT,
  I as UmbMenuContext,
  A as UmbMenuElement,
  S as UmbMenuItemDefaultElement,
  g as UmbMenuItemLayoutElement,
  C as UmbMenuTreeStructureWorkspaceContextBase,
  O as UmbMenuVariantTreeStructureWorkspaceContextBase
};
//# sourceMappingURL=index.js.map
