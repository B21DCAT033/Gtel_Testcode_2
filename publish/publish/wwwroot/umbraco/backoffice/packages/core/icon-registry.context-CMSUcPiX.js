import { loadManifestPlainJs as r } from "@umbraco-cms/backoffice/extension-api";
import { UUIIconRegistry as c } from "@umbraco-cms/backoffice/external/uui";
import { UmbContextToken as h } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as l } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as d } from "@umbraco-cms/backoffice/observable-api";
import { umbExtensionsRegistry as f } from "@umbraco-cms/backoffice/extension-registry";
const p = new h("UmbIconRegistryContext");
class m extends c {
  #s;
  #e = new Promise((t) => {
    this.#s = t;
  });
  #t = [];
  #i = /* @__PURE__ */ new Map();
  setIcons(t) {
    const s = this.#t;
    this.#t = t, this.#s && (this.#s(), this.#s = void 0), this.#t.filter((e) => !s.find((o) => o.name === e.name)).forEach((e) => {
      const o = this.#i.get(e.name);
      o && this.#o(e.name, o).then(() => {
        this.#i.delete(e.name);
      });
    });
  }
  appendIcons(t) {
    this.#t = [...this.#t, ...t];
  }
  /**
   * @param {string} iconName
   * @returns {*}  {boolean}
   * @memberof UmbIconStore
   */
  acceptIcon(t) {
    const s = this.provideIcon(t);
    return this.#o(t, s), !0;
  }
  async #o(t, s) {
    await this.#e;
    const i = this.#t.find((e) => e.name === t);
    if (!i)
      return this.#i.set(t, s), !1;
    try {
      const e = await r(i.path);
      if (!e) throw new Error(`Failed to load icon ${t}`);
      if (!e.default) throw new Error(`Icon ${t} is missing a default export`);
      s.svg = e.default;
    } catch (e) {
      console.error(`Failed to load icon ${t}`, e.message);
    }
    return !0;
  }
}
class n extends l {
  constructor(t) {
    super(t, p), this.#e = /* @__PURE__ */ new Map(), this.#t = new d([], (s) => s.name), this.icons = this.#t.asObservable(), this.approvedIcons = this.#t.asObservablePart((s) => s.filter((i) => i.hidden !== !0)), this.#s = new m(), this.#s.attach(t.getHostElement()), this.observe(this.icons, (s) => {
      this.#s.setIcons(s);
    }), this.observe(f.byType("icons"), (s) => {
      s.forEach((i) => {
        this.#e.has(i.alias) || (this.#e.set(i.alias, i), this.instantiateIcons(i));
      });
    });
  }
  #s;
  #e;
  #t;
  async instantiateIcons(t) {
    if (t.js) {
      const s = await r(t.js);
      if (!s || !s.default || !Array.isArray(s.default))
        throw new Error("Icon manifest JS-file must export an array of icons as the default export.");
      this.#t.append(s.default);
    }
  }
}
const x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbIconRegistryContext: n,
  api: n
}, Symbol.toStringTag, { value: "Module" }));
export {
  p as U,
  n as a,
  m as b,
  x as i
};
//# sourceMappingURL=icon-registry.context-CMSUcPiX.js.map
