import { a as Dt, b as Mt, U as qt } from "../property-type-based-property.element-B_7ZydA1.js";
import { U as xt } from "../content-collection-workspace.context-token-BliQa7Cu.js";
import { U as Ft } from "../content-workspace.context-token-BMs4lY7q.js";
import { UmbControllerBase as b, UmbContextBase as T } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as E } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as S } from "@umbraco-cms/backoffice/extension-registry";
import { UmbVariantId as l, umbVariantObjectCompare as y, UMB_INVARIANT_CULTURE as P } from "@umbraco-cms/backoffice/variant";
import { UmbEntityWorkspaceDataManager as U, UmbEntityDetailWorkspaceContextBase as I, UmbWorkspaceSplitViewManager as B } from "@umbraco-cms/backoffice/workspace";
import { appendToFrozenArray as V, jsonStringComparison as v, UmbBasicState as A, UmbBooleanState as N, mergeObservables as f, createObservablePart as D, classEqualMemoization as M, UmbObjectState as q, UmbArrayState as R } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextToken as x } from "@umbraco-cms/backoffice/context-api";
import { UMB_PROPERTY_DATASET_CONTEXT as k, UmbPropertyValuePresetVariantBuilderController as F } from "@umbraco-cms/backoffice/property";
import { UmbRoutePathAddendumContext as L } from "@umbraco-cms/backoffice/router";
import { UmbContentTypeStructureManager as W } from "@umbraco-cms/backoffice/content-type";
import { UmbReadOnlyVariantStateManager as X, UmbDeprecation as j } from "@umbraco-cms/backoffice/utils";
import { UmbDataTypeItemRepositoryManager as $, UmbDataTypeDetailRepository as K } from "@umbraco-cms/backoffice/data-type";
import { UmbLanguageCollectionRepository as Y } from "@umbraco-cms/backoffice/language";
import { firstValueFrom as H } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbServerModelValidatorContext as z, UmbVariantValuesValidationPathTranslator as G, UmbVariantsValidationPathTranslator as Q, UMB_VALIDATION_CONTEXT as Z, UmbDataPathVariantQuery as J, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as tt } from "@umbraco-cms/backoffice/validation";
import { UMB_MODAL_MANAGER_CONTEXT as et } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as g } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as at, UmbRequestReloadStructureForEntityEvent as rt, UmbEntityUpdatedEvent as st } from "@umbraco-cms/backoffice/entity-action";
const St = "Umb.Condition.Workspace.ContentHasProperties", Pt = "Umb.Section.Content";
function w(d, t) {
  return d.culture === t.culture && d.segment === t.segment;
}
class p extends b {
  /**
   * Merges content variant data based on selected variants and variants to store.
   * @param {UmbContentLikeDetailModel | undefined} persistedData - The persisted content variant data.
   * @param {UmbContentLikeDetailModel} currentData - The current content variant data.
   * @param {Array<UmbVariantId>} selectedVariants - The selected variants.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to store, we sometimes have additional variants that we like to process. This is typically the invariant variant, which we do not want to have as part of the variants data therefore a difference.
   * @returns {Promise<UmbContentLikeDetailModel>} - A promise that resolves to the merged content variant data.
   */
  async process(t, e, r, a) {
    const s = { ...e };
    return s.values = await this.#t(
      t?.values,
      e.values,
      a
    ), e.variants && (s.variants = this.#a(
      t?.variants,
      e.variants,
      r,
      w
    )), this.destroy(), s;
  }
  /**
   * Builds and saves values based on selected variants and variants to store.
   * @param {Array<UmbPotentialContentValueModel> | undefined} persistedValues - The persisted values.
   * @param {Array<UmbPotentialContentValueModel> | undefined} draftValues - The draft values.
   * @param {Array<UmbVariantId>}variantsToStore - The variants to store.
   * @returns {Promise<Array<UmbPotentialContentValueModel>>} - A promise that resolves to the saved values.
   */
  async #t(t, e, r) {
    const a = [...t ?? [], ...e ?? []].filter(
      (s, i, n) => i === n.findIndex((o) => o.alias === s.alias && o.culture === s.culture && o.segment === s.segment)
    );
    return (await Promise.all(
      a.map((s) => {
        const i = t?.find(
          (n) => n.alias === s.alias && n.culture === s.culture && n.segment === s.segment
        );
        if (r.some((n) => n.equal(l.CreateFromPartial(s)))) {
          const n = e?.find(
            (o) => o.alias === s.alias && o.culture === s.culture && o.segment === s.segment
          );
          return this.#e(i, n, r);
        } else
          return Promise.resolve(i);
      })
    )).filter((s) => s !== void 0);
  }
  /**
   * Builds and saves a value based on selected variants and variants to store.
   * @param {UmbPotentialContentValueModel | undefined} persistedValue - The persisted value.
   * @param {UmbPotentialContentValueModel | undefined} draftValue - The draft value.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to store.
   * @returns {Promise<UmbPotentialContentValueModel | undefined>} A promise that resolves to the saved value.
   */
  async #e(t, e, r) {
    const a = e?.editorAlias ?? t?.editorAlias;
    if (!a)
      return console.error(`Editor alias not found for ${a}`), e;
    if (!e)
      return;
    const s = S.getByTypeAndFilter(
      "propertyValueResolver",
      // TODO: Remove depcrated filter in v.17 [NL]
      (o) => o.forEditorAlias === a || o.meta?.editorAlias === a
    )[0];
    if (!s)
      return e;
    const i = await E(this, s);
    if (!i)
      return e;
    let n = e;
    if (i.processValues) {
      const o = [];
      t && await i.processValues(t, async (h) => {
        o.push(h);
      });
      let u = 0;
      n = await i.processValues(n, async (h) => {
        const c = o[u++];
        return await this.#t(c, h, r);
      }) ?? n;
    }
    if (i.processVariants) {
      const o = [];
      t && await i.processVariants(t, async (h) => {
        o.push(h);
      });
      let u = 0;
      n = await i.processVariants(n, async (h) => {
        const c = o[u++];
        return await this.#a(
          c,
          h,
          r,
          i.compareVariants ?? w
        );
      }) ?? n;
    }
    return n;
  }
  /**
   * Construct variants property of model.
   * @param {Array<UmbVariantDataModel> | undefined} persistedVariants - The persisted value.
   * @param {Array<UmbVariantDataModel>} draftVariants - The draft value.
   * @param {Array<UmbVariantId>} variantsToStore - The variants to be stored.
   * @param {(UmbVariantDataModel, UmbVariantDataModel) => boolean} compare - The compare method, which compares the unique properties of the variants.
   * @returns {UmbVariantDataModel[]} A new array of variants.
   */
  #a(t, e, r, a) {
    return [...t ?? [], ...e ?? []].filter(
      (i, n, o) => n === o.findIndex((u) => a(u, i))
    ).map((i) => {
      const n = t?.find((o) => a(o, i));
      return r.some((o) => o.compare(i)) ? e?.find((u) => a(u, i)) : n;
    }).filter((i) => i !== void 0);
  }
}
function C(d, t) {
  return d.alias === t.alias && y(d, t);
}
class it extends U {
  constructor() {
    super(...arguments), this.#t = 0, this.finishPropertyValueChange = () => {
      this.#t--, this.#e();
    };
  }
  //#variesByCulture?: boolean;
  //#variesBySegment?: boolean;
  _sortCurrentData(t, e) {
    e = super._sortCurrentData(t, e);
    const r = t.values;
    return r && e.values ? {
      ...e,
      values: [...e.values].sort(function(a, s) {
        return r.findIndex((i) => C(i, a)) - r.findIndex((i) => C(i, s));
      })
    } : e;
  }
  #t;
  initiatePropertyValueChange() {
    this.#t++, this._current.mute();
  }
  #e() {
    this.#t === 0 && this._current.unmute();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setVariesByCulture(t) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setVariesBySegment(t) {
  }
  setVaries(t) {
    this._varies = t;
  }
  async constructData(t) {
    const e = l.CreateInvariant();
    let r = [e];
    this._varies === !1 ? t = [e] : r = [...t, e];
    const a = this.getCurrent();
    if (!a) throw new Error("Current data is missing");
    const s = this.getPersisted();
    return await new p(this).process(
      s,
      a,
      t,
      r
    );
  }
}
class nt extends it {
  //
  //#repository;
  #t;
  constructor(t, e) {
    super(t), this.#t = e;
  }
  _sortCurrentData(t, e) {
    e = super._sortCurrentData(t, e);
    const r = t.variants;
    return r && e.variants ? {
      ...e,
      variants: [...e.variants].sort(function(a, s) {
        return r.findIndex((i) => y(i, a)) - r.findIndex((i) => y(i, s));
      })
    } : e;
  }
  /**
   * Sets the variant scaffold data
   * @param {ModelVariantType} variantScaffold The variant scaffold data
   * @memberof UmbContentWorkspaceDataManager
   */
  setVariantScaffold(t) {
    this.#t = t;
  }
  ensureVariantData(t) {
    this.updateVariantData(t);
  }
  updateVariantData(t, e) {
    const r = this.getCurrent();
    if (!r) throw new Error("Data is missing");
    if (!this.#t) throw new Error("Variant scaffold data is missing");
    if (this._varies === !0) {
      if (t.isInvariant()) return;
      const a = r.variants.find((i) => t.compare(i)), s = V(
        r.variants,
        {
          ...this.#t,
          ...t.toObject(),
          ...a,
          ...e
        },
        (i) => t.compare(i)
      );
      this.updateCurrent({ variants: s });
    } else if (this._varies === !1) {
      const a = l.CreateInvariant(), s = r.variants.find((n) => a.compare(n)), i = [
        {
          ...this.#t,
          ...a.toObject(),
          ...s,
          ...e
        }
      ];
      this.updateCurrent({ variants: i });
    } else
      throw new Error("Varies by culture is missing");
  }
  getChangedVariants() {
    const t = this.getPersisted(), e = this.getCurrent();
    if (!e) throw new Error("Current data is missing");
    const r = e?.variants.map((s) => {
      const i = t?.variants.find((n) => l.Create(s).compare(n));
      return {
        culture: s.culture,
        segment: s.segment,
        equal: i ? v(s, i) : !1
      };
    }), a = e?.values.map((s) => {
      const i = t?.values.find((n) => l.Create(s).compare(n));
      return {
        culture: s.culture,
        segment: s.segment,
        equal: i ? v(s, i) : !1
      };
    });
    return r?.concat(a ?? []).filter((s) => s.equal === !1).map((s) => new l(s.culture, s.segment)) ?? [];
  }
}
const ot = (d) => d.IS_CONTENT === !0, Ut = new x("UmbPropertyDatasetContext", void 0, ot);
class ut extends T {
  constructor(t, e, r) {
    super(t, k), this.#r = new A([]), this._propertyVariantIdMap = this.#r.asObservable(), this.#s = new N(!1), this.readOnly = this.#s.asObservable(), this._dataOwner = e, this.#t = r ?? l.CreateInvariant(), this.#e = new Promise((a) => {
      this.#a = a;
    }), this.observe(
      this._dataOwner.readOnlyState.states,
      (a) => {
        const s = a.some((i) => i.variantId.equal(this.#t));
        this.#s.setValue(s);
      },
      null
    ), this.observe(
      this._dataOwner.structure.contentTypeProperties,
      (a) => {
        const s = a.map((i) => ({ alias: i.alias, variantId: this.#i(i) }));
        this.#r.setValue(s), this.#a && (this.#a(), this.#a = void 0, this.#e = void 0);
      },
      null
    );
  }
  #t;
  getVariantId() {
    return this.#t;
  }
  #e;
  #a;
  #r;
  #s;
  getEntityType() {
    return this._dataOwner.getEntityType();
  }
  getUnique() {
    return this._dataOwner.getUnique();
  }
  getReadOnly() {
    return this.#s.getValue();
  }
  #i(t) {
    return l.Create({
      culture: t.variesByCulture ? this.#t.culture : null,
      segment: t.variesBySegment ? this.#t.segment : null
    });
  }
  #n;
  // Should it be possible to get the properties as a list of property aliases?
  get properties() {
    return this.#n || (this.#n = f(
      [this._propertyVariantIdMap, this._dataOwner.values],
      this.#o
    )), this.#n;
  }
  #o([t, e]) {
    const r = [];
    if (e)
      for (const a of t) {
        const s = e.find((i) => a.alias === i.alias && a.variantId.compare(i));
        s && r.push(s);
      }
    return r;
  }
  async getProperties() {
    return await this.#e, this.#o([
      this.#r.getValue(),
      this._dataOwner.getValues()
    ]);
  }
  /**
   * @function propertyVariantId
   * @param {string} propertyAlias - The property alias to observe the variantId of.
   * @returns {Promise<Observable<UmbVariantId | undefined> | undefined>} - The observable for this properties variantId.
   * @description Get an Observable for the variant id of this property.
   */
  async propertyVariantId(t) {
    return D(
      this._propertyVariantIdMap,
      (e) => e.find((r) => r.alias === t)?.variantId,
      M
    );
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias  The alias of the property
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable of the property value
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this._dataOwner.isLoaded(), await this.#e, f(
      [await this.propertyVariantId(t), this._dataOwner.values],
      ([e, r]) => e ? r?.find((a) => a?.alias === t && e.compare(a))?.value : void 0
    );
  }
  // TODO: Refactor: Not used currently, but should investigate if we can implement this, to spare some energy.
  async propertyValueByAliasAndVariantId(t, e) {
    return this._dataOwner.propertyValueByAlias(t, e);
  }
  /**
   * @function setPropertyValueByVariant
   * @param {string} propertyAlias - The alias of the property
   * @param {unknown} value - value can be a promise resolving into the actual value or the raw value it self.
   * @param {UmbVariantId} propertyVariantId - The variant id for the value to be set for.
   * @returns {Promise<unknown>} - A promise that resolves once the value has been set.
   * @description Get the value of this property.
   */
  setPropertyValueByVariant(t, e, r) {
    return this._dataOwner.setPropertyValue(t, e, r);
  }
  /**
   * @function setPropertyValue
   * @param {string} propertyAlias - The alias for the value to be set
   * @param {PromiseLike<unknown>} value - value can be a promise resolving into the actual value or the raw value it self.
   * @returns {Promise<void>}
   * @description Set the value of this property.
   */
  async setPropertyValue(t, e) {
    this._dataOwner.initiatePropertyValueChange(), await this.#e;
    const r = this.#r.getValue().find((a) => a.alias === t)?.variantId;
    r && await this._dataOwner.setPropertyValue(t, await e, r), this._dataOwner.finishPropertyValueChange();
  }
  destroy() {
    super.destroy(), this.#r?.destroy(), this.#r = void 0;
  }
}
class It extends ut {
  constructor(t, e, r) {
    super(t, e, r), this.#t = new L(this), this.#e = new q(void 0), this.currentVariant = this.#e.asObservable(), this.name = this.#e.asObservablePart((a) => a?.name), this.culture = this.#e.asObservablePart((a) => a?.culture), this.segment = this.#e.asObservablePart((a) => a?.segment), this.IS_CONTENT = !0, this.#t.setAddendum(r ? r.toString() : ""), this.observe(
      this._dataOwner.variantById(this.getVariantId()),
      async (a) => {
        a && this.#e.setValue(a);
      },
      null
    );
  }
  #t;
  #e;
  getName() {
    return this._dataOwner.getName(this.getVariantId());
  }
  setName(t) {
    this._dataOwner.setName(t, this.getVariantId());
  }
  /**
   * @deprecated Its not clear why we have this. We should either document the need better or get rid of it.
   * @returns {UmbEntityVariantModel | undefined} - gives information about the current variant.
   */
  getVariantInfo() {
    return this._dataOwner.getVariant(this.getVariantId());
  }
}
class Bt extends I {
  constructor(t, e) {
    super(t, e), this.IS_CONTENT_WORKSPACE_CONTEXT = !0, this.readOnlyState = new X(this), this._data = new nt(this), this.data = this._data.current, this.values = this._data.createObservablePartOfCurrent((a) => a?.values), this.variants = this._data.createObservablePartOfCurrent((a) => a?.variants ?? []), this.persistedData = this._data.persisted, this.#t = new $(this), this.splitView = new B(), this.#s = new Y(this), this.#i = new R([], (a) => a.unique), this.languages = this.#i.asObservable(), this.#o = new z(this), this.finishPropertyValueChange = () => {
      this._data.finishPropertyValueChange();
    }, this._saveableVariantsFilter = (a) => this.readOnlyState.getStates().map((i) => i.variantId.culture).includes(a.culture) === !1, this._data.setVariantScaffold(e.contentVariantScaffold), this.#h = e.saveModalToken, this.#d = e.contentTypePropertyName;
    const r = new e.contentTypeDetailRepository(this);
    this.#u = e.contentValidationRepository, this.#n = e.skipValidationOnSubmit ? !e.skipValidationOnSubmit : !0, this.structure = new W(this, r), this.variesByCulture = this.structure.ownerContentTypeObservablePart((a) => a?.variesByCulture), this.variesBySegment = this.structure.ownerContentTypeObservablePart((a) => a?.variesBySegment), this.varies = this.structure.ownerContentTypeObservablePart(
      (a) => a ? a.variesByCulture || a.variesBySegment : void 0
    ), this.variantOptions = f(
      [this.varies, this.variants, this.languages],
      ([a, s, i]) => a === !0 ? i.map((n) => ({
        variant: s.find((o) => o.culture === n.unique),
        language: n,
        // TODO: When including segments, this object should be updated to include a object for the segment. [NL]
        // TODO: When including segments, the unique should be updated to include the segment as well. [NL]
        unique: n.unique,
        // This must be a variantId string!
        culture: n.unique,
        segment: null
      })) : a === !1 ? [
        {
          variant: s.find((n) => n.culture === null),
          language: i.find((n) => n.isDefault),
          culture: null,
          segment: null,
          unique: P
          // This must be a variantId string!
        }
      ] : []
    ), new G(this), new Q(this), this.observe(
      this.varies,
      (a) => {
        this._data.setVaries(a), this.#e = a;
      },
      null
    ), this.observe(
      this.variesByCulture,
      (a) => {
        this._data.setVariesByCulture(a), this.#a = a;
      },
      null
    ), this.observe(
      this.variesBySegment,
      (a) => {
        this._data.setVariesBySegment(a), this.#r = a;
      },
      null
    ), this.observe(
      this.structure.contentTypeDataTypeUniques,
      (a) => {
        this.#t.setUniques(a);
      },
      null
    ), this.loadLanguages();
  }
  #t;
  #e;
  #a;
  #r;
  #s;
  #i;
  #n;
  #o;
  #u;
  #l;
  #h;
  #d;
  async loadLanguages() {
    const { data: t } = await this.#s.requestCollection({});
    this.#i.setValue(t?.items ?? []);
  }
  async _scaffoldProcessData(t) {
    await this.structure.loadType(t[this.#d].unique);
    const e = this.#i.getValue().map((o) => o.unique);
    this.structure.variesBySegment && console.warn("Segments are not yet implemented for preset");
    const r = this.structure.variesBySegment ? [] : void 0, a = new K(this), s = await this.structure.getContentTypeProperties(), i = await Promise.all(
      s.map(async (o) => {
        const u = (await a.requestByUnique(o.dataType.unique)).data;
        if (!u)
          throw new Error(`DataType of "${o.dataType.unique}" not found.`);
        if (!u.editorUiAlias)
          throw new Error(`DataType of "${o.dataType.unique}" did not have a editorUiAlias.`);
        return {
          alias: o.alias,
          propertyEditorUiAlias: u.editorUiAlias,
          propertyEditorSchemaAlias: u.editorAlias,
          config: u.values,
          typeArgs: {
            variesByCulture: o.variesByCulture,
            variesBySegment: o.variesBySegment
          }
        };
      })
    ), n = new F(this);
    return n.setCultures(e), r && n.setSegments(r), t.values = await n.create(i), t;
  }
  /**
   * Get the name of a variant
   * @param {UmbVariantId } [variantId] - The variant id
   * @returns { string | undefined} - The name of the variant
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getName(t) {
    const e = this._data.getCurrent()?.variants;
    if (e)
      return t ? e.find((r) => t.compare(r))?.name : e[0]?.name;
  }
  /**
   * Set the name of a variant
   * @param {string} name - The name of the variant
   * @param {UmbVariantId} [variantId] - The variant id
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  setName(t, e) {
    this._data.updateVariantData(e ?? l.CreateInvariant(), { name: t });
  }
  /**
   * Get an observable for the name of a variant
   * @param {UmbVariantId} [variantId] - The variant id
   * @returns {Observable<string>} - The name of the variant
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  name(t) {
    return this._data.createObservablePartOfCurrent(
      (e) => e?.variants?.find((r) => t?.compare(r))?.name ?? ""
    );
  }
  /* Variants */
  /**
   * Get whether the content varies by culture
   * @returns { boolean | undefined } - If the content varies by culture
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariesByCulture() {
    return this.#a;
  }
  /**
   * Get whether the content varies by segment
   * @returns {boolean | undefined} - If the content varies by segment
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariesBySegment() {
    return this.#r;
  }
  /**
   * Get whether the content varies
   * @returns { boolean | undefined } - If the content varies
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVaries() {
    return this.#e;
  }
  /**
   * Get the variant by the given variantId
   * @param {UmbVariantId} variantId - The variant id
   * @returns { Observable<VariantModelType | undefined> } - The variant or undefined if not found
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  variantById(t) {
    return this._data.createObservablePartOfCurrent((e) => e?.variants?.find((r) => t.compare(r)));
  }
  /**
   * Get the variant by the given variantId
   * @param {UmbVariantId} variantId - The variant id
   * @returns { VariantModelType | undefined } - The variant or undefined if not found
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getVariant(t) {
    return this._data.getCurrent()?.variants?.find((e) => t.compare(e));
  }
  getVariants() {
    return this._data.getCurrent()?.variants;
  }
  /**
   * Observe the property type
   * @param {string} propertyId - The id of the property
   * @returns {Promise<Observable<UmbPropertyTypeModel | undefined>>} - An observable for the property type
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async propertyStructureById(t) {
    return this.structure.propertyStructureById(t);
  }
  /* Values */
  /**
   * Get the values of the content
   * @returns {Array<UmbElementValueModel> | undefined} - The values of the content
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getValues() {
    return this._data.getCurrent()?.values;
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias - The alias of the property
   * @param {UmbVariantId} variantId - The variant
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>} - An observable for the value of the property
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t, e) {
    return this._data.createObservablePartOfCurrent(
      (r) => r?.values?.find((a) => a?.alias === t && (e ? e.compare(a) : !0))?.value
    );
  }
  /**
   * Get the current value of the property with the given alias and variantId.
   * @param {string} alias - The alias of the property
   * @param {UmbVariantId | undefined} variantId - The variant id of the property
   * @returns {ReturnType | undefined} The value or undefined if not set or found.
   */
  getPropertyValue(t, e) {
    const r = this._data.getCurrent();
    if (r)
      return r.values?.find(
        (s) => s.alias === t && (e ? e.compare(s) : !0)
      )?.value;
  }
  /**
   * Set the value of the property with the given alias and variantId.
   * @template ValueType
   * @param {string} alias - The alias of the property
   * @param {ValueType} value - The value to set
   * @param {UmbVariantId} [variantId] - The variant id of the property
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async setPropertyValue(t, e, r) {
    this.initiatePropertyValueChange(), r ??= l.CreateInvariant();
    const a = await this.structure.getPropertyStructureByAlias(t);
    if (!a)
      throw new Error(`Property alias "${t}" not found.`);
    const s = (await this.#t.getItemByUnique(a.dataType.unique)).propertyEditorSchemaAlias;
    if (!s)
      throw new Error(`Editor Alias of "${a.dataType.unique}" not found.`);
    const i = { editorAlias: s, ...r.toObject(), alias: t, value: e }, n = this.getData();
    if (n) {
      const o = V(
        n.values ?? [],
        i,
        (u) => u.alias === t && r.compare(u)
      );
      this._data.updateCurrent({ values: o }), this._data.ensureVariantData(r);
    }
    this.finishPropertyValueChange();
  }
  initiatePropertyValueChange() {
    this._data.initiatePropertyValueChange();
  }
  /**
   * Gets the changed variant ids
   * @returns {Array<UmbVariantId>} - The changed variant ids
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  getChangedVariants() {
    return this._data.getChangedVariants();
  }
  async _determineVariantOptions() {
    const t = await H(this.variantOptions), r = this.splitView.getActiveVariants().map((o) => l.Create(o)), a = this._data.getChangedVariants(), s = r.concat(a), i = this.readOnlyState.getStates().map((o) => o.variantId.culture);
    let n = s.map((o) => o.toString()).filter((o, u, h) => h.indexOf(o) === u);
    return n = n.filter((o) => i.includes(o) === !1), {
      options: t,
      selected: n
    };
  }
  /* validation */
  /**
   * Run the mandatory validation for the save data
   * @deprecated Use the public runMandatoryValidationForSaveData instead. Will be removed in v. 17.
   * @protected
   * @param {DetailModelType} saveData - The data to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async _runMandatoryValidationForSaveData(t, e = []) {
    new j({
      removeInVersion: "17",
      deprecated: "_runMandatoryValidationForSaveData",
      solution: "Use the public runMandatoryValidationForSaveData instead."
    }).warn(), this.runMandatoryValidationForSaveData(t, e);
  }
  /**
   * Run the mandatory validation for the save data
   * @param {DetailModelType} saveData - The data to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async runMandatoryValidationForSaveData(t, e = []) {
    if (e.filter((s) => !t.variants.some((i) => s.compare(i))).length > 0)
      throw new Error("One or more selected variants have not been created");
    const a = t.variants.filter((s) => !s.name);
    if (a.length > 0) {
      const s = await this.getContext(Z);
      throw a.forEach((i) => {
        s.messages.addMessage(
          "client",
          `$.variants[${J(i)}].name`,
          tt
        );
      }), new Error("All variants must have a name");
    }
  }
  /**
   * Ask the server to validate the save data
   * @param {DetailModelType} saveData - The data to validate
   * @param {Array<UmbVariantId>} variantIds - The variant ids to validate
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async askServerToValidate(t, e) {
    if (this.#u)
      if (this.#l ??= new this.#u(this), this.getIsNew()) {
        const r = this.getParent();
        if (!r) throw new Error("Parent is not set");
        await this.#o.askServerForValidation(
          t,
          this.#l.validateCreate(t, r.unique)
        );
      } else
        await this.#o.askServerForValidation(
          t,
          this.#l.validateSave(t, e)
        );
  }
  /**
   * Request a submit of the workspace, in the case of Document Workspaces the validation does not need to be valid for this to be submitted.
   * @returns {Promise<void>} a promise which resolves once it has been completed.
   */
  requestSubmit() {
    return this._handleSubmit();
  }
  submit() {
    return this._handleSubmit();
  }
  /**
   * Get the data to save
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @returns {Promise<DetailModelType>}  {Promise<DetailModelType>}
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  constructSaveData(t) {
    return this._data.constructData(t);
  }
  async _handleSubmit() {
    if (!this.getData())
      throw new Error("Data is missing");
    const { options: e, selected: r } = await this._determineVariantOptions();
    let a = [];
    if (e.length === 0)
      throw new Error("No variants are available");
    if (e.length === 1)
      a.push(l.Create(e[0]));
    else if (this.#h) {
      const n = await (await this.getContext(et)).open(this, this.#h, {
        data: {
          options: e,
          pickableFilter: this._saveableVariantsFilter
        },
        value: { selection: r }
      }).onSubmit().catch(() => {
      });
      if (!n?.selection.length) return;
      a = n?.selection.map((o) => l.FromString(o)) ?? [];
    } else
      throw new Error("No variant picker modal token is set. There are multiple variants to save. Cannot proceed.");
    const s = await this.constructSaveData(a);
    if (await this.runMandatoryValidationForSaveData(s, a), this.#n)
      return await this.askServerToValidate(s, a), this.validateAndSubmit(
        async () => this.performCreateOrUpdate(a, s),
        async () => this.invalidSubmit()
      );
    await this.performCreateOrUpdate(a, s);
  }
  /**
   * Perform the create or update of the content
   * @deprecated Use the public performCreateOrUpdate instead. Will be removed in v. 17.
   * @protected
   * @param {Array<UmbVariantId>} variantIds
   * @param {DetailModelType} saveData
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async _performCreateOrUpdate(t, e) {
    await this.performCreateOrUpdate(t, e);
  }
  /**
   * Perform the create or update of the content
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @param {DetailModelType} saveData - The data to save
   * @memberof UmbContentDetailWorkspaceContextBase
   */
  async performCreateOrUpdate(t, e) {
    this.getIsNew() ? await this.#c(t, e) : await this.#p(t, e);
  }
  async #c(t, e) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const r = this.getParent();
    if (!r) throw new Error("Parent is not set");
    const { data: a, error: s } = await this._detailRepository.create(e, r.unique);
    if (!a || s)
      throw new Error("Error creating content");
    const i = [...t, l.CreateInvariant()], n = this._data.getCurrent(), o = await new p(this).process(
      n,
      a,
      t,
      i
    );
    this._data.setPersisted(o);
    const u = this._data.getCurrent(), h = await new p(this).process(
      u,
      a,
      t,
      i
    );
    this._data.setCurrent(h);
    const c = await this.getContext(g), m = new at({
      entityType: r.entityType,
      unique: r.unique
    });
    c.dispatchEvent(m), this.setIsNew(!1), this._closeModal();
  }
  async #p(t, e) {
    if (!this._detailRepository) throw new Error("Detail repository is not set");
    const { data: r, error: a } = await this._detailRepository.save(e);
    if (!r || a)
      throw new Error("Error saving content");
    const s = [...t, l.CreateInvariant()], i = this._data.getCurrent(), n = await new p(this).process(
      i,
      r,
      t,
      s
    );
    this._data.setPersisted(n);
    const o = this._data.getCurrent(), u = await new p(this).process(
      o,
      r,
      t,
      s
    );
    this._data.setCurrent(u);
    const h = this.getUnique(), c = this.getEntityType(), m = await this.getContext(g), _ = new rt({ unique: h, entityType: c });
    m.dispatchEvent(_);
    const O = new st({
      unique: h,
      entityType: c,
      eventUnique: this._workspaceEventUnique
    });
    m.dispatchEvent(O), this._closeModal();
  }
  resetState() {
    super.resetState(), this.readOnlyState.clear();
  }
  destroy() {
    this.structure.destroy(), this.#s.destroy(), super.destroy();
  }
}
export {
  ot as IsContentPropertyDatasetContext,
  xt as UMB_CONTENT_COLLECTION_WORKSPACE_CONTEXT,
  St as UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION,
  Dt as UMB_CONTENT_PROPERTY_CONTEXT,
  Ut as UMB_CONTENT_PROPERTY_DATASET_CONTEXT,
  Pt as UMB_CONTENT_SECTION_ALIAS,
  Ft as UMB_CONTENT_WORKSPACE_CONTEXT,
  Bt as UmbContentDetailWorkspaceContextBase,
  Mt as UmbContentPropertyContext,
  It as UmbContentPropertyDatasetContext,
  nt as UmbContentWorkspaceDataManager,
  ut as UmbElementPropertyDatasetContext,
  it as UmbElementWorkspaceDataManager,
  p as UmbMergeContentVariantDataController,
  qt as UmbPropertyTypeBasedPropertyElement
};
//# sourceMappingURL=index.js.map
