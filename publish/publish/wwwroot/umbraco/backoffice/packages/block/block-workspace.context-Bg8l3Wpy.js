import { U as f } from "./block-workspace.modal-token-N1xnaaIe.js";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { html as C, css as w, state as O, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { observeMultiple as h, createObservablePart as m, UmbClassState as y, mergeObservables as T, appendToFrozenArray as V, UmbObjectState as P, UmbStringState as U, UmbBooleanState as k } from "@umbraco-cms/backoffice/observable-api";
import { U as B } from "./block-element-values-validation-path-translator.controller-NJPWqeR9.js";
import { UmbElementPropertyDatasetContext as D, UmbElementWorkspaceDataManager as I } from "@umbraco-cms/backoffice/content";
import { UmbContentTypeStructureManager as _ } from "@umbraco-cms/backoffice/content-type";
import { UmbControllerBase as K } from "@umbraco-cms/backoffice/class-api";
import { UmbDocumentTypeDetailRepository as x } from "@umbraco-cms/backoffice/document-type";
import { UmbVariantId as l } from "@umbraco-cms/backoffice/variant";
import { UmbValidationController as N } from "@umbraco-cms/backoffice/validation";
import { UmbReadOnlyVariantStateManager as b, decodeFilePath as M } from "@umbraco-cms/backoffice/utils";
import { UmbDataTypeItemRepositoryManager as A } from "@umbraco-cms/backoffice/data-type";
import { UmbSubmittableWorkspaceContextBase as L, UmbWorkspaceIsNewRedirectController as R, UmbWorkspaceIsNewRedirectControllerAlias as q } from "@umbraco-cms/backoffice/workspace";
import { UMB_MODAL_CONTEXT as z } from "@umbraco-cms/backoffice/modal";
import { UMB_BLOCK_MANAGER_CONTEXT as W, UMB_BLOCK_ENTRIES_CONTEXT as X, UMB_BLOCK_ENTRY_CONTEXT as j } from "@umbraco-cms/backoffice/block";
var $ = Object.defineProperty, F = Object.getOwnPropertyDescriptor, p = (a, e, t, s) => {
  for (var i = s > 1 ? void 0 : s ? F(e, t) : e, r = a.length - 1, n; r >= 0; r--)
    (n = a[r]) && (i = (s ? n(e, t, i) : n(i)) || i);
  return s && i && $(e, t, i), i;
};
let o = class extends S {
  constructor() {
    super(), this._headline = "", this.consumeContext(f, (a) => {
      this.observe(
        h([
          a.isNew,
          a.content.structure.ownerContentTypeObservablePart((e) => e?.name)
        ]),
        ([e, t]) => {
          this._headline = this.localize.term(e ? "general_add" : "general_edit") + " " + this.localize.string(t);
        },
        "observeOwnerContentElementTypeName"
      );
    });
  }
  render() {
    return C`<umb-workspace-editor headline=${this._headline}> </umb-workspace-editor> `;
  }
};
o.styles = [
  g,
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
p([
  O()
], o.prototype, "_headline", 2);
o = p([
  E("umb-block-workspace-editor")
], o);
class H extends D {
  constructor(e, t, s) {
    super(e, t, s), this.name = t.name, this.getName = t.getName, this.culture = m(t.variantId, (i) => i?.culture), this.segment = m(t.variantId, (i) => i?.segment);
  }
}
class d extends K {
  constructor(e, t) {
    super(e), this.#t = new I(this), this.data = this.#t.current, this.#o = new Promise((s) => {
      this.#i = s;
    }), this.readOnlyState = new b(this), this.#r = new y(void 0), this.variantId = this.#r.asObservable(), this.unique = this.#t.createObservablePartOfCurrent((s) => s?.key), this.contentTypeId = this.#t.createObservablePartOfCurrent((s) => s?.contentTypeKey), this.values = this.#t.createObservablePartOfCurrent((s) => s?.values), this.#s = new A(this), this.#n = /* @__PURE__ */ new Map(), this.structure = new _(
      this,
      new x(this)
    ), this.validation = new N(this), this.finishPropertyValueChange = () => {
      this.#t.finishPropertyValueChange();
    }, this.name = e.name, this.getName = e.getName, this.observe(this.contentTypeId, (s) => this.structure.loadType(s)), this.observe(this.unique, (s) => {
      s && this.validation.setDataPath("$." + t + `[?(@.key == '${s}')]`);
    }), this.observe(
      this.structure.contentTypeDataTypeUniques,
      (s) => {
        this.#s.setUniques(s);
      },
      null
    ), this.observe(
      this.#s.items,
      (s) => {
        this.#n = new Map(
          s.map((i) => [i.unique, i.propertyEditorSchemaAlias])
        );
      },
      null
    );
  }
  #t;
  #o;
  #i;
  #r;
  getValues() {
    return this.#t.getCurrent()?.values;
  }
  #s;
  #n;
  isLoaded() {
    return this.#o;
  }
  resetState() {
    this.#t.clear();
  }
  setVariantId(e) {
    this.#r.setValue(e);
  }
  getVariantId() {
    return this.#r.getValue() ?? l.CreateInvariant();
  }
  // TODO: rename to currentData:
  setData(e) {
    this.#t.setPersisted(e), this.#t.setCurrent(e), this.#i();
  }
  getData() {
    return this.#t.getCurrent();
  }
  getUnique() {
    return this.getData()?.key;
  }
  getEntityType() {
    return "element";
  }
  getContentTypeId() {
    return this.getData()?.contentTypeKey;
  }
  #c(e, t) {
    return t.toVariant(e.variesByCulture, e.variesBySegment);
  }
  // We will implement propertyAlias in the future, when implementing Varying Blocks. [NL]
  async propertyVariantId(e) {
    return T(
      [await this.structure.propertyStructureByAlias(e), this.variantId],
      ([t, s]) => t && s ? this.#c(t, s) : void 0
    );
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property
   * @param {UmbVariantId} variantId - The variant
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable for the value of the property
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(e, t) {
    return this.#t.createObservablePartOfCurrent(
      (s) => s?.values?.find((i) => i?.alias === e && (t ? t.compare(i) : !0))?.value
    );
  }
  /**
   * Get the current value of the property with the given alias and variantId.
   * @param {string} alias - The alias of the property
   * @param {UmbVariantId | undefined} variantId - The variant id of the property
   * @returns {ReturnType | undefined} The value or undefined if not set or found.
   */
  getPropertyValue(e, t) {
    const s = this.#t.getCurrent();
    if (s)
      return s.values?.find(
        (r) => r.alias === e && (t ? t.compare(r) : !0)
      )?.value;
  }
  async setPropertyValue(e, t, s) {
    this.initiatePropertyValueChange(), s ??= l.CreateInvariant();
    const i = await this.structure.getPropertyStructureByAlias(e);
    if (!i)
      throw new Error(`Property alias "${e}" not found.`);
    const r = this.#n.get(i.dataType.unique);
    if (!r)
      throw new Error(`Editor Alias of "${i.dataType.unique}" not found.`);
    const n = { editorAlias: r, ...s.toObject(), alias: e, value: t }, u = this.getData();
    if (u) {
      const v = V(
        u.values ?? [],
        n,
        (c) => c.alias === e && s.compare(c)
      );
      this.#t.updateCurrent({ values: v });
    }
    this.finishPropertyValueChange();
  }
  initiatePropertyValueChange() {
    this.#t.initiatePropertyValueChange();
  }
  createPropertyDatasetContext(e, t) {
    return new H(e, this, t);
  }
  setup(e, t) {
    this.createPropertyDatasetContext(e, t), this.validation.provideAt(e), new B(e);
  }
  destroy() {
    this.structure.destroy(), super.destroy();
  }
}
class mt extends L {
  constructor(e, t) {
    super(e, t.manifest.alias), this.IS_BLOCK_WORKSPACE_CONTEXT = !0, this.#e = new P(void 0), this.layout = this.#e.asObservable(), this.unique = this.#e.asObservablePart((i) => i?.contentKey), this.contentKey = this.#e.asObservablePart((i) => i?.contentKey), this.content = new d(this, "contentData"), this.settings = new d(this, "settingsData"), this.#a = new U(void 0), this.name = this.#a.asObservable(), this.#d = new y(void 0), this.variantId = this.#d.asObservable(), this.#y = new k(void 0), this.exposed = this.#y.asObservable(), this.readOnlyState = new b(this), this.#f = () => {
      if (this.#h)
        if (this.getIsNew() === !0) {
          const i = this.#e.value?.contentKey;
          i && this.#i?.delete(i);
        } else
          this.#m && this.#t?.setOneLayout(this.#m, this.#s), this.#l && this.#t?.setOneContent(this.#l), this.#u && this.#t?.setOneContent(this.#u);
    };
    const s = t.manifest;
    this.#b = s.meta?.entityType, this.addValidationContext(this.content.validation), this.addValidationContext(this.settings.validation), this.#c = this.consumeContext(z, (i) => {
      this.#n = i, this.#s = i?.data.originData, i.onSubmit().catch(this.#f);
    }).asPromise(), this.#o = this.consumeContext(W, (i) => {
      this.#t = i, this.#g();
    }), this.#r = this.consumeContext(X, (i) => {
      this.#i = i;
    }).asPromise(), this.consumeContext(j, (i) => {
      this.#a.setValue(i.getName());
    }), this.observe(this.variantId, (i) => {
      this.content.setVariantId(i), this.settings.setVariantId(i);
    }), this.routes.setRoutes([
      {
        path: "create/:elementTypeKey",
        component: o,
        setup: async (i, r) => {
          const n = r.match.params.elementTypeKey;
          await this.create(n), new R(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:key",
        component: o,
        setup: (i, r) => {
          const n = M(r.match.params.key);
          this.load(n);
        }
      }
    ]);
  }
  //
  #t;
  #o;
  #i;
  #r;
  #s;
  // Set the origin data for this workspace. Example used by inline editing which setups the workspace context it self.
  setOriginData(e) {
    this.#s = e;
  }
  #n;
  #c;
  #b;
  #h;
  #m;
  #l;
  #u;
  #e;
  #a;
  #d;
  #y;
  #g() {
    if (!this.#t) return;
    const e = this.#t;
    this.observe(
      e.liveEditingMode,
      (t) => {
        this.#h = t ?? !1;
      },
      "observeLiveEditingMode"
    ), this.observe(
      h([
        e.variantId,
        this.content.structure.variesByCulture,
        this.content.structure.variesBySegment
      ]),
      ([t, s, i]) => {
        !t || s === void 0 || i === void 0 || (!i && !s ? t = l.CreateInvariant() : i ? s || (t = t.toCultureInvariant()) : t = t.toSegmentInvariant(), this.#d.setValue(t));
      },
      "observeVariantIds"
    ), this.removeUmbControllerByAlias("observeHasExpose"), this.observe(
      h([this.contentKey, this.variantId]),
      ([t, s]) => {
        !t || !s || this.observe(
          e.hasExposeOf(t, s),
          (i) => {
            this.#y.setValue(i);
          },
          "observeHasExpose"
        );
      },
      "observeContentKeyAndVariantId"
    ), this.observe(
      h([e.readOnlyState.isReadOnly, this.variantId]),
      ([t, s]) => {
        const i = "UMB_BLOCK_MANAGER_CONTEXT";
        if (s !== void 0)
          if (t) {
            const r = {
              unique: i,
              variantId: s,
              message: ""
            };
            this.readOnlyState?.addState(r);
          } else
            this.readOnlyState?.removeState(i);
      },
      "observeIsReadOnly"
    ), this.observe(
      this.content.contentTypeId,
      (t) => {
        this.observe(
          t ? e.blockTypeOf(t) : void 0,
          (s) => {
            s?.editorSize && this.setEditorSize(s.editorSize);
          },
          "observeBlockType"
        );
      },
      "observeContentTypeId"
    );
  }
  setEditorSize(e) {
    this.#n?.setModalSize(e);
  }
  resetState() {
    super.resetState(), this.#a.setValue(void 0), this.#e.setValue(void 0), this.#m = void 0, this.#l = void 0, this.#u = void 0, this.content.resetState(), this.settings.resetState(), this.removeUmbControllerByAlias(q);
  }
  async load(e) {
    if (await this.#o, await this.#r, !this.#t || !this.#i)
      throw new Error("Block manager not found");
    this.observe(
      this.#i.layoutOf(e),
      (t) => {
        this.#m ??= t, this.removeUmbControllerByAlias("observeLayoutInitially");
      },
      "observeLayoutInitially"
    ), this.#p(e), this.#h && this.establishLiveSync();
  }
  async create(e) {
    if (await this.#r, await this.#c, !this.#i)
      throw new Error("Block Entries not found");
    if (!this.#s)
      throw new Error("Origin data not defined");
    this.setIsNew(!0);
    const t = await this.#i.create(e, {}, this.#s);
    if (!t)
      throw new Error("Block Entries could not create block");
    if (this.#h) {
      if (!await this.#i.insert(
        t.layout,
        t.content,
        t.settings,
        this.#s
      ))
        throw new Error("Block Entries could not insert block");
      const i = t.layout.contentKey;
      this.#p(i), this.establishLiveSync();
    } else
      this.#e.setValue(t.layout), this.content.setData(t.content), t.settings && this.settings.setData(t.settings);
  }
  #p(e) {
    if (!this.#i)
      throw new Error("Block Entries not found");
    this.observe(
      this.#i.layoutOf(e),
      (t) => {
        this.#e.setValue(t);
        const s = t?.contentKey;
        if (!s)
          return;
        this.observe(
          this.#t.contentOf(s),
          (r) => {
            this.content.setData(r);
          },
          "observeContent"
        ), this.#l || this.observe(
          this.#t.contentOf(s),
          (r) => {
            this.#l ??= r, this.removeUmbControllerByAlias("observeContentInitially");
          },
          "observeContentInitially"
        );
        const i = t?.settingsKey;
        i && (this.observe(
          this.#t.settingsOf(i),
          (r) => {
            this.settings.setData(r);
          },
          "observeSettings"
        ), this.#u || this.observe(
          this.#t.settingsOf(i),
          (r) => {
            this.#u ??= r, this.removeUmbControllerByAlias("observeSettingsInitially");
          },
          "observeSettingsInitially"
        ));
      },
      "observeLayout"
    );
  }
  /**
   * Establishes live synchronization of the block's layout, content, and settings data.
   * This method observes local changes in the layout, content, and settings data and pushes those updates to the block manager.
   * This method is used in live editing mode to ensure that changes made to the block's data are immediately reflected
   * in the backoffice UI.
   */
  establishLiveSync() {
    let e = !0;
    this.observe(
      this.layout,
      (t) => {
        if (t) {
          if (e) {
            e = !1;
            return;
          }
          this.#t?.setOneLayout(t, this.#s);
        }
      },
      "observeThisLayout"
    ), this.observe(
      this.content.data,
      (t) => {
        t && this.#t?.setOneContent(t);
      },
      "observeThisContent"
    ), this.observe(
      this.settings.data,
      (t) => {
        t && this.#t?.setOneSettings(t);
      },
      "observeThisSettings"
    );
  }
  getData() {
    return this.#e.getValue();
  }
  getUnique() {
    return this.getData().contentKey;
  }
  getEntityType() {
    return this.#b;
  }
  getName() {
    return "block name content element type here...";
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property to get the value of.
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - The value of the property.
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(e) {
    return this.#e.asObservablePart(
      (t) => t?.[e]
    );
  }
  getPropertyValue(e) {
    return this.#e.getValue()?.[e];
  }
  /**
   * @function setPropertyValue
   * @param {string} alias - The alias of the property to set the value of.
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(e, t) {
    const s = this.#e.value;
    s && this.#e.update({ ...s, [e]: await t });
  }
  async submit() {
    const e = this.#e.value, t = this.content.getData();
    if (!e || !this.#t || !this.#i || !t || !this.#s)
      throw new Error("Missing data");
    const s = this.settings.getData();
    if (!this.#h)
      if (this.getIsNew() === !0) {
        if (!await this.#i.insert(e, t, s, this.#s))
          throw new Error("Block Entries could not insert block");
      } else
        this.#t.setOneLayout(e, this.#s), t && this.#t.setOneContent(t), s && this.#t.setOneSettings(s);
    this.#v(e.contentKey), this.setIsNew(!1);
  }
  expose() {
    const e = this.#e.value?.contentKey;
    if (!e) throw new Error("Failed to expose block, missing content key.");
    this.#v(e);
  }
  #v(e) {
    const t = this.#d.getValue();
    if (!t) throw new Error("Failed to expose block, missing variant id.");
    this.#t?.setOneExpose(e, t);
  }
  #f;
  destroy() {
    super.destroy(), this.#e?.destroy(), this.#a?.destroy(), this.#e = void 0, this.#a = void 0, this.#t = void 0, this.#s = void 0;
  }
}
export {
  mt as UmbBlockWorkspaceContext,
  mt as api
};
//# sourceMappingURL=block-workspace.context-Bg8l3Wpy.js.map
