import { UmbLitElement as F } from "@umbraco-cms/backoffice/lit-element";
import { css as z, customElement as D, html as a, property as x, state as h, nothing as k, repeat as Dt } from "@umbraco-cms/backoffice/external/lit";
import "@umbraco-cms/backoffice/ufm";
import { h as St, g as Pt, k as et, n as Ee, j as Gt, f as Nt, a as xe } from "./index-Cc47Hgez.js";
import { c as Se } from "./block-catalogue-modal.token-Fmisqeoi.js";
import "./block-entry.context-token-DG6_TzkT.js";
import { UmbControllerBase as Pe } from "@umbraco-cms/backoffice/class-api";
import { UmbNumberState as Wt, UmbObjectState as Mt, UmbArrayState as qt, UmbBooleanState as gt, UmbStringState as Te, mergeObservables as Be, appendToFrozenArray as Oe, observeMultiple as tt } from "@umbraco-cms/backoffice/observable-api";
import { getAccumulatedValueOfIndex as Ft, getInterpolatedIndexOfPositionInWeightMap as it, stringOrStringArrayContains as It, isWithinRect as $e } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import { UmbRoutePathAddendumContext as Ae, UmbModalRouteRegistrationController as Kt } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import { U as Re } from "./block-entries.context-CiWNQmmy.js";
import "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_CONTEXT as Ht, UMB_PROPERTY_DATASET_CONTEXT as Ve } from "@umbraco-cms/backoffice/property";
import { UmbLanguageItemRepository as Me } from "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import "./block-catalogue-modal.element-B2pvOiFo.js";
import { UmbDataPathPropertyValueQuery as Ie, UmbObserveValidationStateController as Xt, UmbFormControlMixin as Ke, UmbFormControlValidator as Ut } from "@umbraco-cms/backoffice/validation";
import "./block-workspace.modal-token-N1xnaaIe.js";
import { UMB_CLIPBOARD_PROPERTY_CONTEXT as yt, UmbClipboardPastePropertyValueTranslatorValueResolver as Ue } from "@umbraco-cms/backoffice/clipboard";
import { UmbTextStyles as Tt } from "@umbraco-cms/backoffice/style";
import { UmbBlockEntryContext as Le, UMB_BLOCK_WORKSPACE_ALIAS as ze, UmbDataPathBlockElementDataQuery as Yt } from "@umbraco-cms/backoffice/block";
import { UUIRefNodeElement as jt, UUIBlinkKeyframes as De, UUIBlinkAnimationValue as Ge } from "@umbraco-cms/backoffice/external/uui";
import { umbExtensionsRegistry as Lt } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionApiInitializer as Ne, UmbExtensionsApiInitializer as We } from "@umbraco-cms/backoffice/extension-api";
import { UmbSorterController as qe } from "@umbraco-cms/backoffice/sorter";
function Qt(e, t, i) {
  if (t.length > 0) {
    const o = t.reduce((n, r) => {
      if (n > i)
        return r;
      const s = Math.abs(n - e), u = Math.abs(r - e);
      return s === u ? n < r ? n : r : u < s ? r : n;
    });
    if (o)
      return o;
  }
}
async function dt(e, t) {
  if (e.areas) {
    const i = e.contentKey;
    await Promise.all(
      e.areas.map(async (o) => {
        const n = o.key;
        await Promise.all(
          o.items.map(async (r) => {
            await t(r, i, n), await dt(r, t);
          })
        );
      })
    );
  }
}
class Fe extends Pe {
  constructor(t) {
    super(t, "blockGridScaleManager"), this.#n = [], this.#i = [], this.#o = 0, this.#t = 0, this.onScaleMouseMove = (i) => {
      const o = this._entries?.getLayoutContainerElement();
      if (!o)
        return;
      const n = o.getBoundingClientRect(), r = this.getHostElement().getBoundingClientRect(), s = r.left - n.left, u = r.top - n.top, d = i.clientX - n.left, m = i.clientY - n.top, c = this.#r(s, u, d, m);
      if (!c) return;
      const P = this._host.getColumnSpan() !== c.columnSpan;
      P && (o.style.gridTemplateRows = ""), cancelAnimationFrame(this.#t), this.#t = requestAnimationFrame(() => {
        this.#e(o, n, r, P);
      }), this._host.setColumnSpan(c.columnSpan), this._host.setRowSpan(c.rowSpan);
    }, this.onScaleMouseUp = (i) => {
      const o = this._entries?.getLayoutContainerElement();
      if (!o)
        return;
      cancelAnimationFrame(this.#t), window.removeEventListener("mousemove", this.onScaleMouseMove), window.removeEventListener("mouseup", this.onScaleMouseUp), window.removeEventListener("mouseleave", this.onScaleMouseUp);
      const n = o.getBoundingClientRect(), r = this.getHostElement().getBoundingClientRect(), s = r.left - n.left, u = r.top - n.top, d = i.clientX - n.left, m = i.clientY - n.top, c = this.#r(s, u, d, m);
      o.style.gridTemplateRows = "", this.#o = 0, c && (this._host.setColumnSpan(c.columnSpan), this._host.setRowSpan(c.rowSpan));
    }, this._host = t;
  }
  #n;
  #i;
  #o;
  setEntriesContext(t) {
    this._entries = t;
  }
  // Scaling feature:
  #e(t, i, o, n) {
    if (!this._entries) return;
    const r = this._entries.getLayoutColumns() ?? 0, s = window.getComputedStyle(t), u = Number(s.columnGap.split("px")[0]) || 0, d = Number(s.rowGap.split("px")[0]) || 0;
    let m = s.gridTemplateColumns.trim().split("px").map((v) => Number(v)), c = s.gridTemplateRows.trim().split("px").map((v) => Number(v));
    m = m.filter((v) => v > 0), c = c.filter((v) => v > 0), (n || c.length > this.#o) && (this.#o = c.length, t.style.gridTemplateRows = s.gridTemplateRows);
    const P = m.length;
    m = m.map((v, S) => P === S ? v : v + u);
    const M = c.length;
    c = c.map((v, S) => M === S ? v : v + d);
    let C = m.length;
    const $ = r - C;
    if ($ > 0) {
      const v = Ft(C, m) || 0, S = (i.width - v) / $;
      for (; C++ < r; )
        m.push(S);
    }
    if (c.length === 0) {
      c.push(o.top - i.top);
      let v = 0;
      const S = o.height;
      for (; v++ < (this._host.getRowSpan() ?? 0); )
        c.push(S);
    }
    c.push(50), c.push(50), c.push(50), c.push(50), c.push(50), this.#n = m, this.#i = c;
  }
  // TODO: Rename to calc something.
  #r(t, i, o, n) {
    const r = this._entries?.getLayoutColumns();
    if (!r) return;
    const s = Math.round(it(t, this.#n)), u = Math.round(it(i, this.#i)), d = it(o, this.#n), m = it(n, this.#i);
    let c = Math.max(d - s, 1);
    const P = this._host.getRelevantColumnSpanOptions();
    if (!P) return;
    c = Qt(c, P, r - s) ?? r;
    const C = this._host.getMinMaxRowSpan();
    if (!C) return;
    const [$, v] = C;
    let S = Math.round(Math.max(m - u, $));
    return v != null && (S = Math.min(S, v)), { columnSpan: c, rowSpan: S, startCol: s, startRow: u };
  }
  onScaleMouseDown(t) {
    const i = this._entries?.getLayoutContainerElement();
    if (!i)
      return;
    t.preventDefault(), window.addEventListener("mousemove", this.onScaleMouseMove), window.addEventListener("mouseup", this.onScaleMouseUp), window.addEventListener("mouseleave", this.onScaleMouseUp);
    const o = this.getHostElement().getBoundingClientRect();
    this.#e(i, i.getBoundingClientRect(), o, !0);
  }
  #t;
}
class He extends Re {
  constructor(t) {
    super(t, St), this.#n = new Ae(this), this.#o = new Wt(void 0), this.layoutColumns = this.#o.asObservable(), this.#e = new Mt(void 0), this.areaType = this.#e.asObservable(), this.areaTypeCreateLabel = this.#e.asObservablePart((i) => i?.createLabel), this.#a = new Mt(void 0), this.rangeLimits = this.#a.asObservable(), this.#s = new qt([], (i) => i.contentElementTypeKey), this.allowedBlockTypes = this.#s.asObservable(), this.amountOfAllowedBlockTypes = this.#s.asObservablePart((i) => i.length), this.canCreate = this.#s.asObservablePart((i) => i.length > 0), this.#l = new gt(void 0), this.hasTypeLimits = this.#l.asObservable(), this.consumeContext(Pt, (i) => {
      this.#i = i, this.#p();
    }), new Kt(this, Se).addAdditionalPath("_catalogue/:view/:index").onSetup(async (i) => {
      if (!this._manager) return !1;
      const o = i.index ? parseInt(i.index) : -1, n = await this.getContext(yt), r = n.getPasteTranslatorManifests(
        et
      ), u = (await this.getContext(Ht)).getConfig(), d = new Ue(this);
      return {
        data: {
          blocks: this.#s.getValue(),
          blockGroups: this._manager.getBlockGroups() ?? [],
          openClipboard: i.view === "clipboard",
          clipboardFilter: async (m) => {
            if (!n.hasSupportedPasteTranslator(
              r,
              m.values
            ))
              return !1;
            const P = await d.getPasteTranslator(
              m.values,
              et
            );
            if (P.isCompatibleValue) {
              const M = await d.resolve(
                m.values,
                et
              );
              return P.isCompatibleValue(M, u);
            }
            return !0;
          },
          originData: {
            index: o,
            areaKey: this.#t,
            parentUnique: this.#r
          },
          createBlockInWorkspace: this._manager.getInlineEditingMode() === !1
        }
      };
    }).onSubmit(async (i, o) => {
      if (i?.create && o) {
        const n = await this.create(
          i.create.contentElementTypeKey,
          // We can parse an empty object, cause the rest will be filled in by others.
          {},
          o.originData
        );
        if (n)
          await this.insert(
            n.layout,
            n.content,
            n.settings,
            o.originData
          );
        else
          throw new Error("Failed to create block");
      } else if (i?.clipboard && i.clipboard.selection?.length && o) {
        const r = await (await this.getContext(yt)).readMultiple(
          i.clipboard.selection,
          et
        );
        this._insertFromPropertyValues(r, o.originData);
      }
    }).observeRouteBuilder((i) => {
      this._catalogueRouteBuilderState.setValue(i);
    }), new Kt(this, Ee).addAdditionalPath("block").onSetup(() => ({
      data: {
        entityType: "block",
        preset: {},
        originData: {
          index: -1,
          areaKey: this.#t,
          parentUnique: this.#r,
          baseDataPath: this._dataPath
        }
      },
      modal: { size: "medium" }
    })).observeRouteBuilder((i) => {
      const o = i({});
      this._workspacePath.setValue(o);
    });
  }
  #n;
  #i;
  #o;
  #e;
  #r;
  #t;
  #a;
  #s;
  #l;
  firstAllowedBlockTypeName() {
    if (!this._manager)
      throw new Error("Manager not ready");
    const t = new Te(void 0);
    return this.observe(this.allowedBlockTypes, (i) => {
      i.length === 1 ? this.observe(
        this._manager.contentTypeNameOf(i[0].contentElementTypeKey),
        (o) => {
          t.setValue(o);
        },
        "getFirstAllowedBlockTypeName"
      ) : this.removeUmbControllerByAlias("getFirstAllowedBlockTypeName");
    }), t.asObservable();
  }
  setParentUnique(t) {
    this.#r = t;
  }
  getParentUnique() {
    return this.#r;
  }
  setAreaKey(t) {
    this.#t = t, this.#n.setAddendum(t ?? ""), this.#m();
  }
  getAreaKey() {
    return this.#t;
  }
  setLayoutColumns(t) {
    this.#o.setValue(t);
  }
  getLayoutColumns() {
    return this.#o.getValue();
  }
  getMinAllowed() {
    return this.#t ? this.#e.getValue()?.minAllowed ?? 0 : this._manager?.getMinAllowed() ?? 0;
  }
  getMaxAllowed() {
    return this.#t ? this.#e.getValue()?.maxAllowed ?? 1 / 0 : this._manager?.getMaxAllowed() ?? 1 / 0;
  }
  getLayoutContainerElement() {
    return this.getHostElement().shadowRoot?.querySelector(".umb-block-grid__layout-container");
  }
  _gotBlockManager() {
    this._manager && (this.#u(), this.#c());
  }
  #m() {
    this.#t !== void 0 && this.#p();
  }
  async #p() {
    if (this.#t !== void 0)
      if (this.#t === null) {
        if (await this._retrieveManager, !this._manager) return;
        this.removeUmbControllerByAlias("observeParentUnique"), this.setParentUnique(null), this.observe(
          this._manager.layouts,
          (i) => {
            this._layoutEntries.setValue(i);
          },
          "observeParentLayouts"
        ), this.observe(
          this.layoutEntries,
          (i) => {
            this._manager?.setLayouts(i);
          },
          "observeThisLayouts"
        );
        const t = this.getHostElement();
        t && (t.removeAttribute("data-area-alias"), t.removeAttribute("data-area-col-span"), t.removeAttribute("data-area-row-span"), t.style.removeProperty("--umb-block-grid--grid-columns"), t.style.removeProperty("--umb-block-grid--area-column-span"), t.style.removeProperty("--umb-block-grid--area-row-span")), this.removeUmbControllerByAlias("observeAreaType"), this.#u(), this.#c();
      } else {
        if (!this.#i) return;
        this.observe(
          this.#i.unique,
          (t) => {
            this.setParentUnique(t ?? null);
          },
          "observeParentUnique"
        ), this.observe(
          this.#i.layoutsOfArea(this.#t),
          (t) => {
            t && this._layoutEntries.setValue(t);
          },
          "observeParentLayouts"
        ), this.observe(
          this.layoutEntries,
          (t) => {
            this.#t && this.#i?.setLayoutsOfArea(this.#t, t);
          },
          "observeThisLayouts"
        ), this.observe(
          this.#i.areaType(this.#t),
          (t) => {
            this.#e.setValue(t);
            const i = this.getHostElement();
            i && (i.setAttribute("data-area-alias", t?.alias ?? ""), i.setAttribute("data-area-col-span", t?.columnSpan?.toString() ?? ""), i.setAttribute("data-area-row-span", t?.rowSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--grid-columns", t?.columnSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--area-column-span", t?.columnSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--area-row-span", t?.rowSpan?.toString() ?? ""), this.#u(), this.#c());
          },
          "observeAreaType"
        );
      }
  }
  #u() {
    this._manager && (this.#s.setValue(this.#b()), this.#g());
  }
  #c() {
    if (this._manager) {
      if (this.#t != null) {
        const t = this.#e.getValue();
        if (this.removeUmbControllerByAlias("observeConfigurationRootLimits"), !t) return;
        this.#a.setValue({
          min: t.minAllowed ?? 0,
          max: t.maxAllowed ?? 1 / 0
        });
      } else if (this.#t === null) {
        if (!this._manager) return;
        this.observe(
          this._manager.editorConfiguration,
          (t) => {
            const i = t?.getValueByAlias("validationLimit")?.min ?? 0, o = t?.getValueByAlias("validationLimit")?.max ?? 1 / 0;
            this.#a.setValue({ min: i, max: o });
          },
          "observeConfigurationRootLimits"
        );
      }
    }
  }
  getPathForCreateBlock(t) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "create", index: t });
  }
  getPathForClipboard(t) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "clipboard", index: t });
  }
  isBlockTypeAllowed(t) {
    return this.#s.asObservablePart(
      (i) => i.some((o) => o.contentElementTypeKey === t)
    );
  }
  /*
  async setLayouts(layouts: Array<UmbBlockGridLayoutModel>) {
  	await this._retrieveManager;
  	if (this.#areaKey === null) {
  		this._manager?.setLayouts(layouts);
  	} else {
  		if (!this.#parentUnique || !this.#areaKey) {
  			throw new Error('ParentUnique or AreaKey not set');
  		}
  		this._manager?.setLayoutsOfArea(this.#parentUnique, this.#areaKey, layouts);
  	}
  }
  */
  async create(t, i, o) {
    return await this._retrieveManager, await this._manager?.createWithPresets(t, i, o);
  }
  // insert Block?
  async insert(t, i, o, n) {
    return await this._retrieveManager, this._manager?.insert(t, i, o, n) ?? !1;
  }
  // create Block?
  async delete(t) {
    const i = this._layoutEntries.getValue().find((o) => o.contentKey === t);
    if (!i)
      throw new Error(`Cannot delete block, missing layout for ${t}`);
    dt(i, async (o) => {
      o.settingsKey && this._manager.removeOneSettings(o.settingsKey), this._manager.removeOneContent(t), this._manager.removeExposesOf(t);
    }), await super.delete(t);
  }
  async _insertFromPropertyValue(t, i) {
    const o = t.layout[Gt];
    if (!o)
      throw new Error("No layout entries found");
    return await Promise.all(
      o.map(async (n) => {
        await this._insertBlockFromPropertyValue(n, t, i), i.index !== -1 && (i = { ...i, index: i.index + 1 });
      })
    ), i;
  }
  async _insertBlockFromPropertyValue(t, i, o) {
    await super._insertBlockFromPropertyValue(t, i, o), await dt(t, async (n, r, s) => {
      const u = { index: -1, parentUnique: r, areaKey: s };
      await this._insertBlockFromPropertyValue(n, i, u);
    });
  }
  /**
   * @internal
   * @returns {Array<UmbBlockGridTypeModel>} an Array of ElementTypeKeys that are allowed in the current area. Or undefined if not ready jet.
   */
  #b() {
    if (!this._manager) return [];
    if (this.#t) {
      const t = this.#e.getValue();
      return t ? t.specifiedAllowance && t.specifiedAllowance?.length > 0 ? t.specifiedAllowance.flatMap((i) => i.groupKey ? this._manager?.getBlockTypes().filter((o) => o.groupKey === i.groupKey) ?? [] : i.elementTypeKey ? this._manager?.getBlockTypes().filter((o) => o.contentElementTypeKey === i.elementTypeKey) ?? [] : []).filter((i, o, n) => n.findIndex((r) => r.contentElementTypeKey === i.contentElementTypeKey) === o) : this._manager.getBlockTypes().filter((i) => i.allowInAreas) : [];
    } else if (this.#t === null)
      return this._manager.getBlockTypes().filter((t) => t.allowAtRoot);
    return [];
  }
  /**
   * @internal
   */
  #g() {
    if (this._manager)
      if (this.#t) {
        const t = this.#e.getValue();
        if (!t) return;
        t.specifiedAllowance && t.specifiedAllowance?.length > 0 && this.#l.setValue(!0);
      } else this.#t;
  }
  // Property to hold the result of the check, used to make a meaningful Validation Message
  #h;
  getInvalidBlockTypeLimits() {
    return this.#h ?? [];
  }
  /**
   * @internal
   * @returns {boolean} - True if the block type limits are valid, otherwise false.
   */
  checkBlockTypeLimitsValidity() {
    const t = this.#e.getValue();
    if (!t || !t.specifiedAllowance) return !1;
    const i = this._layoutEntries.getValue();
    return this.#h = t.specifiedAllowance.map((o) => {
      const n = o.minAllowed || 0, r = o.maxAllowed || 0;
      if (o.groupKey) {
        const s = this._manager?.getBlockTypes().filter((d) => d.groupKey === o.groupKey && d.allowInAreas === !0).map((d) => d.contentElementTypeKey) ?? [], u = i.filter((d) => {
          const m = this._manager.getContentTypeKeyOfContentKey(d.contentKey);
          return m ? s.indexOf(m) !== -1 : !1;
        }).length;
        return u < n || r > 0 && u > r ? {
          groupKey: o.groupKey,
          name: this._manager.getBlockGroupName(o.groupKey) ?? "?",
          amount: u,
          minRequirement: n,
          maxRequirement: r
        } : void 0;
      } else if (o.elementTypeKey) {
        const s = i.filter((u) => this._manager.getContentOf(u.contentKey)?.contentTypeKey === o.elementTypeKey).length;
        return s < n || r > 0 && s > r ? {
          key: o.elementTypeKey,
          name: this._manager.getContentTypeNameOf(o.elementTypeKey) ?? "?",
          amount: s,
          minRequirement: n,
          maxRequirement: r
        } : void 0;
      }
      console.error("Invalid block type limit rule.", o);
    }).filter((o) => o !== void 0), this.#h.length === 0;
  }
  #d;
  getInvalidBlockTypeConfigurations() {
    return this.#d ?? [];
  }
  /**
   * @internal
   * @returns {boolean} - True if the block type limits are valid, otherwise false.
   */
  checkBlockTypeConfigurationValidity() {
    this.#d = [];
    const t = this._layoutEntries.getValue();
    if (t.length === 0) return !0;
    const i = this.#s.getValue();
    if (i.length === 0) return !1;
    const o = i.map((r) => r.contentElementTypeKey);
    return t.filter((r) => {
      const s = this._manager.getContentTypeKeyOfContentKey(r.contentKey);
      if (!s)
        return !1;
      const u = o.indexOf(s) === -1;
      return s && u && this.#d?.push(
        this._manager?.getContentTypeNameOf(s) ?? s
      ), u;
    }).length === 0;
  }
  /**
   * Check if given contentKey is allowed in the current area.
   * @param {string} contentKey - The contentKey of the content to check.
   * @returns {boolean} - True if the content is allowed in the current area, otherwise false.
   */
  allowDrop(t) {
    const i = this._manager?.getContentOf(t), o = this.#s.getValue();
    return !i || !o ? !1 : o.map((n) => n.contentElementTypeKey).indexOf(i.contentTypeKey) !== -1;
  }
  onDragStart() {
    this._manager?.onDragStart();
  }
  onDragEnd() {
    this._manager?.onDragEnd();
  }
}
class Xe extends Le {
  constructor(t) {
    super(t, St, Nt), this.columnSpan = this._layout.asObservablePart((i) => i ? i.columnSpan ?? null : void 0), this.rowSpan = this._layout.asObservablePart((i) => i ? i.rowSpan ?? null : void 0), this.layoutAreas = this._layout.asObservablePart((i) => i?.areas), this.columnSpanOptions = this._blockType.asObservablePart((i) => i?.columnSpanOptions ?? []), this.areaTypeGridColumns = this._blockType.asObservablePart((i) => i?.areaGridColumns), this.areas = this._blockType.asObservablePart((i) => i?.areas ?? []), this.minMaxRowSpan = this._blockType.asObservablePart(
      (i) => i ? [i.rowMinSpan ?? 1, i.rowMaxSpan ?? 1] : void 0
    ), this.forceHideContentEditorInOverlay = this._blockType.asObservablePart(
      (i) => i ? i.forceHideContentEditorInOverlay ?? !1 : void 0
    ), this.inlineEditingMode = this._blockType.asObservablePart((i) => i?.inlineEditing === !0), this.#n = new qt([], (i) => i), this.relevantColumnSpanOptions = this.#n.asObservable(), this.#i = new gt(!1), this.canScale = this.#i.asObservable(), this.#o = new gt(!1), this.isAllowed = this.#o.asObservable(), this.#e = new Wt(void 0), this.areaGridColumns = this.#e.asObservable(), this.showContentEdit = Be(
      [this._contentStructureHasProperties, this.forceHideContentEditorInOverlay],
      ([i, o]) => i === !0 && o === !1
    ), this.scaleManager = new Fe(this);
  }
  getMinMaxRowSpan() {
    const t = this._blockType.getValue();
    if (t)
      return [t.rowMinSpan ?? 1, t.rowMaxSpan ?? 1];
  }
  #n;
  getRelevantColumnSpanOptions() {
    return this.#n.getValue();
  }
  #i;
  #o;
  #e;
  layoutsOfArea(t) {
    return this._layout.asObservablePart((i) => i?.areas?.find((o) => o.key === t)?.items);
  }
  areaType(t) {
    return this._blockType.asObservablePart((i) => i?.areas?.find((o) => o.key === t));
  }
  setLayoutsOfArea(t, i) {
    const o = this._layout.value;
    if (!o) return;
    const n = Oe(
      o?.areas ?? [],
      {
        key: t,
        items: i
      },
      (r) => r.key
    );
    this._layout.update({ areas: n });
  }
  /**
   * Set the column span of this entry.
   * @param columnSpan {number} The new column span.
   */
  setColumnSpan(t) {
    if (!this._entries) return;
    const i = this._entries.getLayoutColumns();
    if (!i || (t = this.#t(t, this.getRelevantColumnSpanOptions(), i), t === this.getColumnSpan())) return;
    const o = this._layout.getValue();
    o && this._layout.setValue({
      ...o,
      columnSpan: t
    });
  }
  /**
   * Get the column span of this entry.
   * @returns {number} The column span.
   */
  getColumnSpan() {
    return this._layout.getValue()?.columnSpan;
  }
  /**
   * Set the row span of this entry.
   * @param rowSpan {number} The new row span.
   */
  setRowSpan(t) {
    const i = this.getMinMaxRowSpan();
    if (!i || (t = Math.max(i[0], Math.min(t, i[1])), t === this.getRowSpan())) return;
    const o = this._layout.getValue();
    o && this._layout.setValue({
      ...o,
      rowSpan: t
    });
  }
  /**
   * Get the row span of this entry.
   * @returns {number} The row span.
   */
  getRowSpan() {
    return this._layout.getValue()?.rowSpan;
  }
  _gotManager() {
    this.#r();
  }
  _gotEntries() {
    this.scaleManager.setEntriesContext(this._entries), this._entries && (this.#r(), this.observe(
      this.contentElementTypeKey,
      (t) => {
        this.observe(
          t ? this._entries?.isBlockTypeAllowed(t) : void 0,
          (i) => {
            i !== void 0 && this.#o.setValue(i);
          },
          "observeIsAllowed"
        );
      },
      "observeContentElementTypeKey"
    ), this.observe(
      tt([this.minMaxRowSpan, this.columnSpanOptions, this._entries.layoutColumns]),
      ([t, i, o]) => {
        if (!o || !t) return;
        const n = i ? i.filter((d) => d.columnSpan <= o).map((d) => d.columnSpan).sort((d, m) => d > m ? 1 : m > d ? -1 : 0) : [];
        this.#n.setValue(n);
        const r = n.length > 1, s = t[0] !== t[1], u = r || s;
        this.#i.setValue(u);
      },
      "observeScaleOptions"
    ), this.observe(
      tt([this.areaTypeGridColumns, this._entries.layoutColumns]),
      ([t, i]) => {
        this.#e.setValue(t ?? i);
      },
      "observeAreaGridColumns"
    ));
  }
  #r() {
    !this._entries || !this._manager || (this.observe(
      tt([this.areas, this.layoutAreas]),
      ([t, i]) => {
        if (!t || !i) return;
        if ((t.length === i.length && t.every((n) => i.some((r) => r.key === n.key))) === !1) {
          const n = this._layout.getValue();
          if (!n) return;
          this._layout.setValue({
            ...n,
            areas: i.map((r) => t.find((s) => s.key === r.key) ? r : { key: r.key, items: [] })
          });
        }
      },
      "observeAreaValidation"
    ), this.observe(
      tt([this.columnSpan, this.relevantColumnSpanOptions, this._entries.layoutColumns]),
      ([t, i, o]) => {
        if (!o || t === void 0) return;
        const n = this.#t(
          t ?? o,
          i,
          o
        );
        if (n !== t) {
          const r = this._layout.getValue();
          if (!r) return;
          this._layout.setValue({
            ...r,
            columnSpan: n
          });
        }
      },
      "observeColumnSpanValidation"
    ), this.observe(
      tt([this.minMaxRowSpan, this.rowSpan]),
      ([t, i]) => {
        if (!t || i === void 0) return;
        const o = Math.max(t[0], Math.min(i ?? 1, t[1]));
        if (o !== i) {
          const n = this._layout.getValue();
          if (!n) return;
          this._layout.setValue({
            ...n,
            rowSpan: o
          });
        }
      },
      "observeRowSpanValidation"
    ));
  }
  _gotContentType() {
  }
  #t(t, i, o) {
    if (i.length > 0) {
      const n = Qt(t, i, o) ?? o;
      if (n !== t)
        return n;
    } else
      return o;
    return t;
  }
  async copyToClipboard() {
    if (!this._manager) return;
    const t = await this.getContext(Ve), i = await this.getContext(Ht), o = await this.getContext(yt), n = t?.getName(), r = i?.getLabel(), s = this.getLabel(), u = n ? `${n} - ${r} - ${s}` : `${r} - ${s}`, d = this.getLayout();
    if (!d)
      throw new Error("No layout found");
    const m = this.getContent(), c = this.getSettings(), P = this.getExpose(), M = m ? [structuredClone(m)] : [], C = c ? [structuredClone(c)] : [], $ = P ? [structuredClone(P)] : [];
    dt(d, async (S) => {
      const Rt = this._manager.getContentOf(S.contentKey);
      if (!Rt)
        throw new Error("No content found");
      if (M.push(structuredClone(Rt)), S.settingsKey) {
        const Vt = this._manager.getSettingsOf(S.settingsKey);
        Vt && C.push(structuredClone(Vt));
      }
    });
    const v = {
      layout: {
        [Gt]: d ? [structuredClone(d)] : void 0
      },
      contentData: M,
      settingsData: C,
      expose: $
    };
    o.write({
      icon: this.getContentElementTypeIcon(),
      name: u,
      propertyValue: v,
      propertyEditorUiAlias: et
    });
  }
}
var Ye = Object.getOwnPropertyDescriptor, je = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? Ye(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = s(n) || n);
  return n;
};
let ft = class extends jt {
  render() {
    return a`
			${super.render()}
			<div class="break"></div>
			<slot name="areas"></slot>
		`;
  }
};
ft.styles = [
  ...jt.styles,
  z`
			:host {
				min-width: 20px; /* Set to something, to overwrite UUI min width. */
				height: 100%; /* Help to fill out the whole layout entry. */
				min-height: var(--uui-size-16);
				flex-flow: row wrap;
				background-color: var(--uui-color-surface);
			}

			.break {
				flex-basis: 100%;
				height: 0;
			}

			#open-part {
				display: flex;
				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			:host([unpublished]) #open-part {
				opacity: 0.6;
			}
		`
];
ft = je([
  D("umb-ref-grid-block")
], ft);
var Qe = Object.defineProperty, Je = Object.getOwnPropertyDescriptor, Jt = (e) => {
  throw TypeError(e);
}, A = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? Je(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = (o ? s(t, i, n) : s(n)) || n);
  return o && n && Qe(t, i, n), n;
}, Bt = (e, t, i) => t.has(e) || Jt("Cannot " + i), E = (e, t, i) => (Bt(e, t, "read from private field"), i ? i.call(e) : t.get(e)), I = (e, t, i) => t.has(e) ? Jt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), H = (e, t, i, o) => (Bt(e, t, "write to private field"), t.set(e, i), i), X = (e, t, i) => (Bt(e, t, "access private method"), i), lt, V, Q, st, ot, nt, K, _t, vt, Ot, Zt, te;
const Ze = (e) => [{ manifest: e }];
let B = class extends F {
  constructor() {
    super(), I(this, K), I(this, lt), I(this, V), I(this, Q), I(this, st), I(this, ot), I(this, nt), I(this, Ot, () => {
      E(this, V)?.expose();
    }), this.consumeContext(Pt, (e) => {
      H(this, lt, e), this.observe(
        E(this, lt).unique,
        (t) => {
          H(this, st, t), X(this, K, _t).call(this);
        },
        "observeContentKey"
      );
    }), this.consumeContext(Nt, (e) => {
      H(this, ot, e.getParentUnique()), H(this, nt, e.getAreaKey());
    }), new Ne(
      this,
      Lt,
      ze,
      Ze,
      (e, t) => {
        const i = t.api;
        if (e && i) {
          if (E(this, ot) === void 0 || E(this, nt) === void 0)
            throw new Error("Parent unique and area key must be defined");
          H(this, V, i), i.setOriginData({
            areaKey: E(this, nt),
            parentUnique: E(this, ot)
          }), E(this, V).establishLiveSync(), X(this, K, _t).call(this), this.observe(
            E(this, V).content.structure.contentTypeProperties,
            (o) => {
              this._inlineProperty = o[0], X(this, K, vt).call(this);
            },
            "observeProperties"
          ), this.observe(
            i.content.structure.ownerContentTypeName,
            (o) => {
              this._ownerContentTypeName = o;
            },
            "observeContentTypeName"
          ), this.observe(
            i.variantId,
            async (o) => {
              if (H(this, Q, o), X(this, K, vt).call(this), o) {
                i.content.setup(this, o);
                const n = o.culture;
                if (n) {
                  const r = new Me(this), { data: s } = await r.requestItems([n]), u = s?.[0].name;
                  this._variantName = u ? this.localize.string(u) : void 0;
                }
              }
            },
            "observeVariant"
          ), new We(this, Lt, "workspaceContext", [E(this, V)]);
        }
      }
    );
  }
  render() {
    return a`
			<div id="host">
				<button id="open-part" tabindex="0">
					${X(this, K, Zt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</button>
				${X(this, K, te).call(this)}
			</div>
		`;
  }
};
lt = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
Q = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakSet();
_t = function() {
  !E(this, V) || !E(this, st) || E(this, V).load(E(this, st));
};
vt = function() {
  if (!E(this, Q) || !this._inlineProperty) return;
  const e = this._inlineProperty;
  this._inlinePropertyDataPath = `$.values[${Ie({
    alias: e.alias,
    culture: e.variesByCulture ? E(this, Q).culture : null,
    segment: e.variesBySegment ? E(this, Q).segment : null
  })}].value`;
};
Ot = /* @__PURE__ */ new WeakMap();
Zt = function() {
  return a`
			<span id="content">
				<span id="icon">
					<umb-icon .name=${this.icon}></umb-icon>
				</span>
				<div id="info">
					<umb-ufm-render id="name" inline .markdown=${this.label} .value=${this.content}></umb-ufm-render>
				</div>
			</span>
			${this.unpublished ? a`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
						><umb-localize key="blockEditor_notExposedLabel"></umb-localize
					></uui-tag>` : k}
		`;
};
te = function() {
  return this.unpublished === !0 ? a`<uui-button id="exposeButton" @click=${E(this, Ot)}
				><uui-icon name="icon-add"></uui-icon>
				<umb-localize
					key="blockEditor_createThisFor"
					.args=${[this._ownerContentTypeName, this._variantName]}></umb-localize
			></uui-button>` : a`<div id="inside" draggable="false">
				<umb-property-type-based-property
					.property=${this._inlineProperty}
					.dataPath=${this._inlinePropertyDataPath ?? ""}
					slot="areas"></umb-property-type-based-property>
				<umb-block-grid-areas-container slot="areas" draggable="false"></umb-block-grid-areas-container>
			</div>`;
};
B.styles = [
  Tt,
  z`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

			#host {
				position: relative;
				display: block;
				width: 100%;

				box-sizing: border-box;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface);

				border: 1px solid var(--uui-color-border);
				transition: border-color 80ms;

				min-width: 250px;
			}
			#open-part + * {
				border-top: 1px solid var(--uui-color-border);
			}
			:host([disabled]) #open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			:host(:not([disabled])) #host:has(#open-part:hover) {
				border-color: var(--uui-color-border-emphasis);
			}
			:host(:not([disabled])) #open-part:hover + * {
				border-color: var(--uui-color-border-emphasis);
			}
			:host([disabled]) #host {
				border-color: var(--uui-color-disabled-standalone);
			}

			:host([unpublished]) #open-part #content {
				opacity: 0.6;
			}

			slot[name='tag'] {
				flex-grow: 1;

				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			button {
				font-size: inherit;
				font-family: inherit;
				border: 0;
				padding: 0;
				background-color: transparent;
				text-align: left;
				color: var(--uui-color-text);
			}

			#content {
				align-self: stretch;
				line-height: normal;
				display: flex;
				position: relative;
				align-items: center;
			}

			#open-part {
				color: inherit;
				text-decoration: none;
				cursor: pointer;

				display: flex;
				text-align: left;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				border: none;
				background: none;

				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			#icon {
				font-size: 1.2em;
				margin-left: var(--uui-size-2);
				margin-right: var(--uui-size-1);
			}

			#info {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				height: 100%;
				padding-left: var(--uui-size-2, 6px);
			}

			#name {
				font-weight: 700;
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}

			:host(:not([disabled])) #open-part:hover #icon {
				color: var(--uui-color-interactive-emphasis);
			}
			:host(:not([disabled])) #open-part:hover #name {
				color: var(--uui-color-interactive-emphasis);
			}

			:host([disabled]) #icon {
				color: var(--uui-color-disabled-contrast);
			}
			:host([disabled]) #name {
				color: var(--uui-color-disabled-contrast);
			}

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
A([
  x({ attribute: !1 })
], B.prototype, "config", 2);
A([
  x({ type: String, reflect: !1 })
], B.prototype, "label", 2);
A([
  x({ type: String, reflect: !1 })
], B.prototype, "icon", 2);
A([
  x({ type: Boolean, reflect: !0 })
], B.prototype, "unpublished", 2);
A([
  x({ attribute: !1 })
], B.prototype, "content", 2);
A([
  h()
], B.prototype, "_inlineProperty", 2);
A([
  h()
], B.prototype, "_inlinePropertyDataPath", 2);
A([
  h()
], B.prototype, "_ownerContentTypeName", 2);
A([
  h()
], B.prototype, "_variantName", 2);
B = A([
  D("umb-block-grid-block-inline")
], B);
var ti = Object.getOwnPropertyDescriptor, ee = (e) => {
  throw TypeError(e);
}, ei = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? ti(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = s(n) || n);
  return n;
}, ii = (e, t, i) => t.has(e) || ee("Cannot " + i), oi = (e, t, i) => t.has(e) ? ee("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), zt = (e, t, i) => (ii(e, t, "access private method"), i), ut, ie, oe;
let wt = class extends F {
  constructor() {
    super(...arguments), oi(this, ut);
  }
  render() {
    return a`
			<div id="host">
				<div id="open-part">
					${zt(this, ut, ie).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</div>
				${zt(this, ut, oe).call(this)}
			</div>
		`;
  }
};
ut = /* @__PURE__ */ new WeakSet();
ie = function() {
  return a`
			<span id="content">
				<span id="icon">
					<umb-icon name="icon-alert"></umb-icon>
				</span>
				<div id="info">
					<span id="name">${this.localize.term("blockEditor_unsupportedBlockName")}</span>
				</div>
			</span>
		`;
};
oe = function() {
  return a`<div id="inside" draggable="false">
			${this.localize.term("blockEditor_unsupportedBlockDescription")}
			<umb-block-grid-areas-container slot="areas"></umb-block-grid-areas-container>
		</div>`;
};
wt.styles = [
  Tt,
  z`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

			#host {
				position: relative;
				display: block;
				width: 100%;

				box-sizing: border-box;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface);

				border: 1px solid var(--uui-color-border);
				transition: border-color 80ms;

				min-width: 250px;
			}
			#open-part + * {
				border-top: 1px solid var(--uui-color-border);
			}
			#open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			#host {
				border-color: var(--uui-color-disabled-standalone);
			}

			:host([unpublished]) #open-part #content {
				opacity: 0.6;
			}

			slot[name='tag'] {
				flex-grow: 1;

				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			#content {
				align-self: stretch;
				line-height: normal;
				display: flex;
				position: relative;
				align-items: center;
			}

			#open-part {
				color: inherit;
				text-decoration: none;

				display: flex;
				text-align: left;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				border: none;
				background: none;

				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			#icon {
				font-size: 1.2em;
				margin-left: var(--uui-size-2);
				margin-right: var(--uui-size-1);
			}

			#info {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				height: 100%;
				padding-left: var(--uui-size-2, 6px);
			}

			#name {
				font-weight: 700;
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
wt = ei([
  D("umb-block-grid-block-unsupported")
], wt);
var ni = Object.getOwnPropertyDescriptor, ri = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? ni(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = s(n) || n);
  return n;
};
let kt = class extends F {
  //
  constructor() {
    super(), this.addEventListener("dragstart", (e) => {
      e.preventDefault();
    }), this.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  }
  render() {
    return a`
			<button aria-label="TODO: Some introduction to keyboard scaling" id="handler"></button>
			<slot id="label"></slot>
		`;
  }
};
kt.styles = [
  z`
			:host {
				position: absolute;
				inset: 0;
				pointer-events: none;
				box-sizing: border-box;
			}
			:host(:focus-within),
			:host(:hover) {
				border: var(--uui-color-interactive) solid 1px;
				border-radius: var(--uui-border-radius);
			}

			#handler {
				position: absolute;
				// TODO: Look at the feature I out-commented here, what was that suppose to do [NL]:
				//display: var(--umb-block-grid--block-ui-display, block);
				display: block;
				z-index: 2;

				pointer-events: all;
				cursor: nwse-resize;

				bottom: -4px;
				right: -4px;
				width: 7px;
				height: 7px;
				padding: 0;
				background-color: var(--uui-color-surface);
				border: var(--uui-color-interactive) solid 1px;
				box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7);
				opacity: 0;
				transition: opacity 120ms;
			}
			#handler:hover,
			#handler:focus {
				opacity: 1;
			}
			#handler:focus {
				outline: 2px solid var(--uui-color-selected);
				outline-offset: 1px;
			}
			#handler::after {
				content: '';
				position: absolute;
				inset: -10px;
				background-color: rgba(0, 0, 0, 0);
			}
			#handler:focus + #label,
			#handler:hover + #label {
				opacity: 1;
			}

			#label {
				position: absolute;
				display: block;
				top: 100%;
				left: 100%;
				margin-left: 6px;
				margin-top: 6px;
				z-index: 2;

				background-color: white;
				color: black;
				font-size: 12px;
				padding: 0px 6px;
				border-radius: 3px;
				opacity: 0;
				transition: opacity 120ms;

				pointer-events: none;
				white-space: nowrap;
			}

			:host([scale-mode]) > #handler {
				opacity: 1;
			}
			:host([scale-mode]) > #label {
				opacity: 1;
			}
		`
];
kt = ri([
  D("umb-block-scale-handler")
], kt);
var si = Object.defineProperty, ai = Object.getOwnPropertyDescriptor, ne = (e) => {
  throw TypeError(e);
}, f = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? ai(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = (o ? s(t, i, n) : s(n)) || n);
  return o && n && si(t, i, n), n;
}, $t = (e, t, i) => t.has(e) || ne("Cannot " + i), l = (e, t, i) => ($t(e, t, "read from private field"), i ? i.call(e) : t.get(e)), G = (e, t, i) => t.has(e) ? ne("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), re = (e, t, i, o) => ($t(e, t, "write to private field"), t.set(e, i), i), _ = (e, t, i) => ($t(e, t, "access private method"), i), p, at, y, T, se, ae, pt, Ct, mt, Et, xt, le, ue, ce, he, de, pe, me, be, ge, ye;
let g = class extends F {
  constructor() {
    super(), G(this, y), G(this, p, new Xe(this)), G(this, at), this._showContentEdit = !1, this._hasSettings = !1, this._label = "", this._blockViewProps = {
      contentKey: void 0,
      config: { showContentEdit: !1, showSettingsEdit: !1 }
    }, this._isReadOnly = !1, G(this, pt, () => {
      l(this, p).expose();
    }), G(this, mt, () => {
      const e = this.parentElement;
      if (!e) return;
      const t = e.getBoundingClientRect();
      if (t.width === 0) {
        this._showInlineCreateBefore = !1, this._showInlineCreateAfter = !1, this._inlineCreateAboveWidth = void 0, re(this, at, setTimeout(l(this, mt), 100));
        return;
      }
      const i = this.getBoundingClientRect();
      i.right > t.right - 5 ? this._showInlineCreateAfter = !1 : this._showInlineCreateAfter = !0, i.left > t.left + 5 ? (this._showInlineCreateBefore = !1, this._inlineCreateAboveWidth = void 0) : (this._inlineCreateAboveWidth = getComputedStyle(e).width, this._showInlineCreateBefore = !0);
    }), G(this, Et, (e) => !(!this._contentTypeAlias || e.forContentTypeAlias && !It(e.forContentTypeAlias, this._contentTypeAlias) || e.forBlockEditor && !It(e.forBlockEditor, xe))), G(this, xt, (e) => (e.component && e.component.classList.add("umb-block-grid__block--view"), this._exposed ? e.component : a`<div>
				${e.component}
				<umb-block-overlay-expose-button
					.contentTypeName=${this._contentTypeName}
					@click=${l(this, pt)}></umb-block-overlay-expose-button>
			</div>`)), _(this, y, se).call(this);
  }
  get index() {
    return l(this, p).getIndex();
  }
  set index(e) {
    l(this, p).setIndex(e);
  }
  get contentKey() {
    return this._contentKey;
  }
  set contentKey(e) {
    !e || e === this._contentKey || (this._contentKey = e, this._blockViewProps.contentKey = e, this.setAttribute("data-element-key", e), l(this, p).setContentKey(e), new Xt(
      this,
      `$.contentData[${Yt({ key: e })}]`,
      (t) => {
        this._contentInvalid = t, this._blockViewProps.contentInvalid = t;
      },
      "observeMessagesForContent"
    ));
  }
  connectedCallback() {
    super.connectedCallback(), this.observe(
      l(this, p).columnSpan,
      (e) => {
        this._columnSpan = e, this.setAttribute("data-col-span", e ? e.toString() : ""), this.style.setProperty("--umb-block-grid--item-column-span", e ? e.toString() : "");
      },
      "columnSpan"
    ), this.observe(
      l(this, p).rowSpan,
      (e) => {
        this._rowSpan = e, this.setAttribute("data-row-span", e ? e.toString() : ""), this.style.setProperty("--umb-block-grid--item-row-span", e ? e.toString() : "");
      },
      "rowSpan"
    ), this.observe(
      l(this, p).contentElementTypeKey,
      (e) => {
        e && this.setAttribute("data-content-element-type-key", e);
      },
      "contentElementTypeKey"
    ), this.observe(
      l(this, p).contentElementTypeAlias,
      (e) => {
        e && (this._contentTypeAlias = e, this.setAttribute("data-content-element-type-alias", e));
      },
      "contentElementTypeAlias"
    ), this.observe(
      l(this, p).contentElementTypeName,
      (e) => {
        this._contentTypeName = e;
      },
      "contentElementTypeName"
    ), _(this, y, Ct).call(this);
  }
  updated(e) {
    super.updated(e), (e.has("_blockViewProps") || e.has("_columnSpan")) && _(this, y, Ct).call(this);
  }
  render() {
    return this.contentKey && (this._contentTypeAlias || this._unsupported) ? a`
					${_(this, y, he).call(this)}
					<div class="umb-block-grid__block" part="umb-block-grid__block">
						<umb-extension-slot
							.filter=${l(this, Et)}
							.renderMethod=${l(this, xt)}
							.props=${this._blockViewProps}
							default-element=${this._inlineEditingMode ? "umb-block-grid-block-inline" : "umb-block-grid-block"}
							type="blockEditorCustomView"
							single
							>${_(this, y, le).call(this)}</umb-extension-slot
						>
						${_(this, y, pe).call(this)}
						${!this._showContentEdit && this._contentInvalid ? a`<uui-badge attention color="danger" label="Invalid content">!</uui-badge>` : k}
						${this._invalidLocation ? a`<uui-tag id="invalidLocation" color="danger"
									><umb-localize key="blockEditor_invalidDropPosition" .args=${[this._label]}></umb-localize
								></uui-tag>` : k}
						${this._canScale ? a` <umb-block-scale-handler
									@mousedown=${(e) => l(this, p).scaleManager.onScaleMouseDown(e)}>
									${this._columnSpan}x${this._rowSpan}
								</umb-block-scale-handler>` : k}
					</div>
					${_(this, y, de).call(this)}
				` : k;
  }
  renderInlineBlock() {
    return a`<umb-block-grid-block-inline
			class="umb-block-grid__block--view"
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block-inline>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
T = function(e) {
  this._blockViewProps = { ...this._blockViewProps, ...e }, this.requestUpdate("_blockViewProps");
};
se = function() {
  this.observe(
    l(this, p).showContentEdit,
    (e) => {
      this._showContentEdit = e, _(this, y, T).call(this, { config: { ...this._blockViewProps.config, showContentEdit: e } });
    },
    null
  ), this.observe(
    l(this, p).settingsElementTypeKey,
    (e) => {
      this._hasSettings = !!e, _(this, y, T).call(this, { config: { ...this._blockViewProps.config, showSettingsEdit: !!e } });
    },
    null
  ), this.observe(
    l(this, p).canScale,
    (e) => {
      this._canScale = e;
    },
    null
  ), this.observe(
    l(this, p).isAllowed,
    (e) => {
      this._invalidLocation = !e;
    },
    null
  ), this.observe(
    l(this, p).blockType,
    (e) => {
      _(this, y, T).call(this, { blockType: e });
    },
    null
  ), this.observe(
    l(this, p).label,
    (e) => {
      _(this, y, T).call(this, { label: e }), this._label = e;
    },
    null
  ), this.observe(
    l(this, p).contentElementTypeIcon,
    (e) => {
      _(this, y, T).call(this, { icon: e }), this._icon = e;
    },
    null
  ), this.observe(
    l(this, p).hasExpose,
    (e) => {
      _(this, y, T).call(this, { unpublished: !e }), this._exposed = e;
    },
    null
  ), this.observe(
    l(this, p).unsupported,
    (e) => {
      e !== void 0 && (_(this, y, T).call(this, { unsupported: e }), this._unsupported = e, this.toggleAttribute("unsupported", e));
    },
    null
  ), this.observe(
    l(this, p).inlineEditingMode,
    (e) => {
      this._inlineEditingMode = e;
    },
    null
  ), this.observe(
    l(this, p).layout,
    (e) => {
      _(this, y, T).call(this, { layout: e });
    },
    null
  ), _(this, y, ae).call(this), this.observe(
    l(this, p).settingsKey,
    (e) => {
      this.removeUmbControllerByAlias("observeMessagesForSettings"), e && new Xt(
        this,
        `$.settingsData[${Yt({ key: e })}]`,
        (t) => {
          this._settingsInvalid = t, this._blockViewProps.settingsInvalid = t;
        },
        "observeMessagesForSettings"
      );
    },
    null
  ), this.observe(
    l(this, p).createBeforePath,
    (e) => {
      this._createBeforePath = e;
    },
    null
  ), this.observe(
    l(this, p).createAfterPath,
    (e) => {
      this._createAfterPath = e;
    },
    null
  ), this.observe(
    l(this, p).workspaceEditContentPath,
    (e) => {
      this._workspaceEditContentPath = e, _(this, y, T).call(this, { config: { ...this._blockViewProps.config, editContentPath: e } });
    },
    null
  ), this.observe(
    l(this, p).workspaceEditSettingsPath,
    (e) => {
      this._workspaceEditSettingsPath = e, _(this, y, T).call(this, { config: { ...this._blockViewProps.config, editSettingsPath: e } });
    },
    null
  ), this.observe(
    l(this, p).readOnlyState.isReadOnly,
    (e) => this._isReadOnly = e,
    "umbReadonlyObserver"
  );
};
ae = async function() {
  this.observe(
    await l(this, p).contentValues(),
    (e) => {
      _(this, y, T).call(this, { content: e });
    },
    null
  ), this.observe(
    await l(this, p).settingsValues(),
    (e) => {
      _(this, y, T).call(this, { settings: e });
    },
    null
  );
};
pt = /* @__PURE__ */ new WeakMap();
Ct = function() {
  clearTimeout(l(this, at)), re(this, at, setTimeout(l(this, mt), 100));
};
mt = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
xt = /* @__PURE__ */ new WeakMap();
le = function() {
  return this._unsupported ? _(this, y, ue).call(this) : this._inlineEditingMode ? this.renderInlineBlock() : _(this, y, ce).call(this);
};
ue = function() {
  return a`<umb-block-grid-block-unsupported
			class="umb-block-grid__block--view"
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block-unsupported>`;
};
ce = function() {
  return a`<umb-block-grid-block
			class="umb-block-grid__block--view"
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block>`;
};
he = function() {
  return this._isReadOnly ? k : this._createBeforePath ? this._showInlineCreateBefore ? a`<uui-button-inline-create
			href=${this._createBeforePath}
			label=${this.localize.term("blockEditor_addBlock")}
			style=${this._inlineCreateAboveWidth ? `width: ${this._inlineCreateAboveWidth}` : ""}></uui-button-inline-create>` : k : k;
};
de = function() {
  return this._isReadOnly ? k : this._createAfterPath ? this._showInlineCreateAfter ? a`
			<uui-button-inline-create
				vertical
				label=${this.localize.term("blockEditor_addBlock")}
				href=${this._createAfterPath}></uui-button-inline-create>
		` : k : k;
};
pe = function() {
  return a`
			<uui-action-bar>
				${_(this, y, me).call(this)} ${_(this, y, be).call(this)} ${_(this, y, ge).call(this)}
				${_(this, y, ye).call(this)}</uui-action-bar
			>
		`;
};
me = function() {
  return this._showContentEdit && this._workspaceEditContentPath ? a`<uui-button
					label="edit"
					look="secondary"
					color=${this._contentInvalid ? "danger" : ""}
					href=${this._workspaceEditContentPath}>
					<uui-icon name=${this._exposed === !1 ? "icon-add" : "icon-edit"}></uui-icon>
					${this._contentInvalid ? a`<uui-badge attention color="danger" label="Invalid content">!</uui-badge>` : k}
				</uui-button>` : this._showContentEdit === !1 && this._exposed === !1 ? a`<uui-button
						@click=${l(this, pt)}
						label=${this.localize.term("blockEditor_createThisFor", this._contentTypeName)}
						look="secondary"
						><uui-icon name="icon-add"></uui-icon
					></uui-button>` : k;
};
be = function() {
  return a`
			${this._hasSettings && this._workspaceEditSettingsPath ? a`<uui-button
						label="Edit settings"
						look="secondary"
						color=${this._settingsInvalid ? "danger" : ""}
						href=${this._workspaceEditSettingsPath}>
						<uui-icon name="icon-settings"></uui-icon>
						${this._settingsInvalid ? a`<uui-badge attention color="danger" label="Invalid settings">!</uui-badge>` : k}
					</uui-button>` : k}
		`;
};
ge = function() {
  return a`<uui-button label="Copy to clipboard" look="secondary" @click=${() => l(this, p).copyToClipboard()}>
			<uui-icon name="icon-clipboard-copy"></uui-icon>
		</uui-button>`;
};
ye = function() {
  return this._isReadOnly ? k : a`
			<uui-button label="delete" look="secondary" @click=${() => l(this, p).requestDelete()}>
				<uui-icon name="icon-remove"></uui-icon>
			</uui-button>
		`;
};
g.styles = [
  De,
  z`
			:host {
				position: relative;
				display: block;
				--umb-block-grid-entry-actions-opacity: 0;
			}

			:host([settings-invalid]),
			:host([content-invalid]),
			:host(:hover),
			:host(:focus-within) {
				--umb-block-grid-entry-actions-opacity: 1;
			}

			:host::after {
				content: '';
				position: absolute;
				z-index: 1;
				pointer-events: none;
				inset: 0;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);

				transition: border-color 240ms ease-in;
			}

			:host([location-invalid])::after,
			:host([settings-invalid])::after,
			:host([content-invalid])::after {
				border-color: var(--uui-color-danger);
			}

			#invalidLocation {
				position: absolute;
				top: -1em;
				left: var(--uui-size-space-2);
				z-index: 2;
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
				opacity: var(--umb-block-grid-entry-actions-opacity, 0);
				transition: opacity 120ms;
			}
			uui-button-inline-create {
				top: 0px;
				position: absolute;

				--umb-block-grid__block--inline-create-button-display--condition: var(--umb-block-grid--dragging-mode) none;
				display: var(--umb-block-grid__block--inline-create-button-display--condition);
			}
			uui-button-inline-create:not([vertical]) {
				left: 0;
				width: var(--umb-block-grid-editor--inline-create-width, 100%);
			}
			:host(:not([index='0'])) uui-button-inline-create:not([vertical]) {
				top: calc(var(--umb-block-grid--row-gap, 0px) * -0.5);
			}
			uui-button-inline-create[vertical] {
				right: calc(1px - (var(--umb-block-grid--column-gap, 0px) * 0.5));
			}

			.umb-block-grid__block {
				height: 100%;
			}

			:host(:hover):not(:drop)::after {
				display: block;
				border-color: var(--uui-color-interactive-emphasis);
				box-shadow:
					0 0 0 1px rgba(255, 255, 255, 0.7),
					inset 0 0 0 1px rgba(255, 255, 255, 0.7);
			}

			:host([drag-placeholder])::after {
				display: block;
				border-width: 2px;
				border-color: var(--uui-color-interactive-emphasis);
				animation: ${Ge};
			}
			:host([drag-placeholder])::before {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-interactive-emphasis);
				opacity: 0.12;
			}
			:host([drag-placeholder]) .umb-block-grid__block {
				transition: opacity 50ms 16ms;
				opacity: 0;
			}

			uui-badge {
				z-index: 2;
			}
		`
];
f([
  x({ type: Number, reflect: !0 })
], g.prototype, "index", 1);
f([
  x({ attribute: !1 })
], g.prototype, "contentKey", 1);
f([
  h()
], g.prototype, "_contentTypeAlias", 2);
f([
  h()
], g.prototype, "_contentTypeName", 2);
f([
  h()
], g.prototype, "_columnSpan", 2);
f([
  h()
], g.prototype, "_rowSpan", 2);
f([
  h()
], g.prototype, "_showContentEdit", 2);
f([
  h()
], g.prototype, "_hasSettings", 2);
f([
  h()
], g.prototype, "_createBeforePath", 2);
f([
  h()
], g.prototype, "_createAfterPath", 2);
f([
  h()
], g.prototype, "_label", 2);
f([
  h()
], g.prototype, "_icon", 2);
f([
  h()
], g.prototype, "_exposed", 2);
f([
  h()
], g.prototype, "_unsupported", 2);
f([
  h()
], g.prototype, "_workspaceEditContentPath", 2);
f([
  h()
], g.prototype, "_workspaceEditSettingsPath", 2);
f([
  h()
], g.prototype, "_inlineEditingMode", 2);
f([
  h()
], g.prototype, "_canScale", 2);
f([
  h()
], g.prototype, "_showInlineCreateBefore", 2);
f([
  h()
], g.prototype, "_showInlineCreateAfter", 2);
f([
  h()
], g.prototype, "_inlineCreateAboveWidth", 2);
f([
  x({ type: Boolean, attribute: "location-invalid", reflect: !0 })
], g.prototype, "_invalidLocation", 2);
f([
  x({ type: Boolean, attribute: "content-invalid", reflect: !0 })
], g.prototype, "_contentInvalid", 2);
f([
  x({ type: Boolean, attribute: "settings-invalid", reflect: !0 })
], g.prototype, "_settingsInvalid", 2);
f([
  h()
], g.prototype, "_blockViewProps", 2);
f([
  h()
], g.prototype, "_isReadOnly", 2);
g = f([
  D("umb-block-grid-entry")
], g);
var li = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, fe = (e) => {
  throw TypeError(e);
}, R = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? ui(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = (o ? s(t, i, n) : s(n)) || n);
  return o && n && li(t, i, n), n;
}, At = (e, t, i) => t.has(e) || fe("Cannot " + i), b = (e, t, i) => (At(e, t, "read from private field"), i ? i.call(e) : t.get(e)), N = (e, t, i) => t.has(e) ? fe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), U = (e, t, i, o) => (At(e, t, "write to private field"), t.set(e, i), i), rt = (e, t, i) => (At(e, t, "access private method"), i), ct, w, ht, W, Y, j, q, _e, ve, we, ke, Ce;
function ci(e) {
  if (e.relatedModel.areas && e.relatedModel.areas.length > 0 && $e(e.pointerX, e.pointerY, e.relatedRect, -10))
    return null;
  const t = getComputedStyle(e.containerElement), i = Number(t.columnGap.split("px")[0]) || 0, o = parseInt(
    t.getPropertyValue("--umb-block-grid--grid-columns"),
    10
  ), n = parseInt(e.relatedElement.dataset.colSpan ?? "", 10), r = e.item.columnSpan;
  if (r >= o)
    return !0;
  const s = t.gridTemplateColumns.trim().split("px").map((C) => Number(C)).filter((C) => C > 0).map((C, $, v) => v.length === $ ? C : C + i);
  let u = s.length;
  const d = o - u;
  if (d > 0) {
    const C = Ft(u, s) || 0, $ = (e.containerRect.width - C) / d;
    if ($ > 0)
      for (; u++ < o; )
        s.push($);
  }
  let m = 0;
  e.placeholderIsInThisRow && e.elementRect.left < e.relatedRect.left && (m = -(e.elementRect.width + i));
  const c = Math.max(e.relatedRect.left - e.containerRect.left + m, 0);
  return Math.round(
    it(c, s)
  ) + n + r > o;
}
const hi = {
  getUniqueOfElement: (e) => e.contentKey,
  getUniqueOfModel: (e) => e.contentKey,
  resolvePlacement: ci,
  identifier: "block-grid-editor",
  itemSelector: "umb-block-grid-entry",
  containerSelector: ".umb-block-grid__layout-container"
};
let O = class extends Ke(F) {
  constructor() {
    super(), N(this, q), N(this, ct, new qe(this, {
      ...hi,
      onStart: () => {
        b(this, w).onDragStart();
      },
      onEnd: () => {
        b(this, w).onDragEnd();
      },
      onChange: ({ model: e }) => {
        b(this, w).setLayouts(e);
      },
      onRequestMove: ({ item: e }) => b(this, w).allowDrop(e.contentKey),
      onDisallowed: () => {
        this.setAttribute("disallow-drop", "");
      },
      onAllowed: () => {
        this.removeAttribute("disallow-drop");
      }
    })), N(this, w, new He(this)), N(this, ht), N(this, W), N(this, Y), N(this, j), this._layoutEntries = [], this._isReadOnly = !1, this.observe(
      b(this, w).layoutEntries,
      (e) => {
        b(this, ct).setModel(e), this._layoutEntries = e;
      },
      null
    ), this.observe(
      b(this, w).amountOfAllowedBlockTypes,
      (e) => {
        this._canCreate = e > 0, e === 1 ? this.observe(
          b(this, w).firstAllowedBlockTypeName(),
          (t) => {
            this._createLabel = this.localize.term("blockEditor_addThis", this.localize.string(t));
          },
          "observeSingleBlockTypeName"
        ) : (this.removeUmbControllerByAlias("observeSingleBlockTypeName"), this._createLabel = this.localize.term("blockEditor_addBlock"));
      },
      null
    ), this.observe(
      b(this, w).rangeLimits,
      (e) => {
        rt(this, q, _e).call(this, e);
      },
      null
    ), this.observe(
      b(this, w).hasTypeLimits,
      (e) => {
        rt(this, q, ve).call(this, e);
      },
      null
    ), b(this, w).getManager().then((e) => {
      this.observe(
        e.layoutStylesheet,
        (t) => {
          !t || this._styleElement?.href === t || (this._styleElement = document.createElement("link"), this._styleElement.rel = "stylesheet", this._styleElement.href = t);
        },
        "observeStylesheet"
      ), this.observe(
        e.readOnlyState.isReadOnly,
        (t) => this._isReadOnly = t,
        "observeIsReadOnly"
      ), this.observe(
        e.variantId,
        (t) => {
          t && (b(this, ct).identifier = "umb-block-grid-" + t.toString());
        },
        "observeVariantId"
      ), this.areaKey ? this.observe(
        b(this, w).areaTypeCreateLabel,
        (t) => this._configCreateLabel = t,
        "observeConfigCreateLabel"
      ) : this.observe(
        e.editorConfigurationPart((t) => t?.find((i) => i.alias === "createLabel")?.value),
        (t) => this._configCreateLabel = t,
        "observeConfigCreateLabel"
      );
    }), new Ut(
      this,
      this
      /*, this.#dataPath*/
    );
  }
  set areaKey(e) {
    this._areaKey = e, b(this, w).setAreaKey(e ?? null), b(this, ht)?.destroy(), this.areaKey && U(this, ht, new Ut(this, this));
  }
  get areaKey() {
    return this._areaKey;
  }
  set layoutColumns(e) {
    b(this, w).setLayoutColumns(e);
  }
  get layoutColumns() {
    return b(this, w).getLayoutColumns();
  }
  // TODO: Missing ability to jump directly to creating a Block, when there is only one Block Type. [NL]
  render() {
    return a`
			${this._styleElement}
			<div class="umb-block-grid__layout-container" data-area-length=${this._layoutEntries.length}>
				${Dt(
      this._layoutEntries,
      (e) => e.contentKey,
      (e, t) => a`<umb-block-grid-entry
							class="umb-block-grid__layout-item"
							index=${t}
							.contentKey=${e.contentKey}
							.layout=${e}>
						</umb-block-grid-entry>`
    )}
			</div>
			${this._canCreate ? rt(this, q, we).call(this) : k}
			${this._areaKey ? a` <uui-form-validation-message .for=${this}></uui-form-validation-message>` : k}
		`;
  }
};
ct = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
Y = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakSet();
_e = async function(e) {
  b(this, Y) && (this.removeValidator(b(this, Y)), U(this, Y, void 0)), e?.min !== 0 && U(this, Y, this.addValidator(
    "rangeUnderflow",
    () => this.localize.term(
      "validation_entriesShort",
      e.min,
      (e.min ?? 0) - this._layoutEntries.length
    ),
    () => this._layoutEntries.length < (e?.min ?? 0)
  )), b(this, j) && (this.removeValidator(b(this, j)), U(this, j, void 0)), e?.max !== 1 / 0 && U(this, j, this.addValidator(
    "rangeOverflow",
    () => this.localize.term(
      "validation_entriesExceed",
      e.max,
      this._layoutEntries.length - (e.max ?? this._layoutEntries.length)
    ),
    () => this._layoutEntries.length > (e?.max ?? 1 / 0)
  ));
};
ve = async function(e) {
  b(this, W) && (this.removeValidator(b(this, W)), U(this, W, void 0)), e ? U(this, W, this.addValidator(
    "customError",
    () => b(this, w).getInvalidBlockTypeLimits().map(
      (i) => this.localize.term(
        i.amount < i.minRequirement ? "blockEditor_areaValidationEntriesShort" : "blockEditor_areaValidationEntriesExceed",
        i.name,
        i.amount,
        i.minRequirement,
        i.maxRequirement
      )
    ).join(", "),
    () => !b(this, w).checkBlockTypeLimitsValidity()
  )) : U(this, W, this.addValidator(
    "customError",
    () => {
      const t = b(this, w).getInvalidBlockTypeConfigurations().filter((i, o, n) => n.indexOf(i) === o).join(", ");
      return this.localize.term(
        this._areaKey ? "blockEditor_areaValidationEntriesNotAllowed" : "blockEditor_rootValidationEntriesNotAllowed",
        t
      );
    },
    () => !b(this, w).checkBlockTypeConfigurationValidity()
  ));
};
we = function() {
  return this._areaKey === null || this._layoutEntries.length === 0 ? a` <uui-button-group id="createButton">
				${rt(this, q, ke).call(this)} ${rt(this, q, Ce).call(this)}
			</uui-button-group>` : this._isReadOnly === !1 ? a`<uui-button-inline-create
				href=${b(this, w).getPathForCreateBlock(-1) ?? ""}
				label=${this.localize.term("blockEditor_addBlock")}></uui-button-inline-create> ` : k;
};
ke = function() {
  return this._isReadOnly && this._layoutEntries.length > 0 ? k : a`
			<uui-button
				look="placeholder"
				label=${this._configCreateLabel ?? this._createLabel ?? ""}
				href=${b(this, w).getPathForCreateBlock(-1) ?? ""}
				?disabled=${this._isReadOnly}></uui-button>
		`;
};
Ce = function() {
  return this._areaKey ? k : this._isReadOnly && this._layoutEntries.length > 0 ? k : a`
			<uui-button
				label=${this.localize.term("content_createFromClipboard")}
				look="placeholder"
				href=${b(this, w).getPathForClipboard(-1) ?? ""}
				?disabled=${this._isReadOnly}>
				<uui-icon name="icon-clipboard-paste"></uui-icon>
			</uui-button>
		`;
};
O.styles = [
  Tt,
  z`
			:host {
				position: relative;
				display: grid;
				gap: 1px;
			}
			:host([disallow-drop])::before {
				content: '';
				position: absolute;
				z-index: 1;
				inset: 0;
				border: 2px solid var(--uui-color-danger);
				border-radius: calc(var(--uui-border-radius) * 2);
				pointer-events: none;
			}
			:host([disallow-drop])::after {
				content: '';
				position: absolute;
				z-index: 1;
				inset: 0;
				border-radius: calc(var(--uui-border-radius) * 2);
				background-color: var(--uui-color-danger);
				opacity: 0.2;
				pointer-events: none;
			}

			> div {
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}

			#createButton {
				grid-template-columns: 1fr auto;
				display: grid;
			}

			/* Only when we are n an area, we like to hide the button on drag */
			:host([area-key]) #createButton {
				--umb-block-grid--create-button--is-dragging--variable: var(--umb-block-grid--is-dragging) none;
				display: var(--umb-block-grid--create-button--is-dragging--variable, grid);
			}
			:host(:not([pristine]):invalid) #createButton {
				--uui-button-contrast: var(--uui-color-danger);
				--uui-button-contrast-hover: var(--uui-color-danger);
				--uui-color-default-emphasis: var(--uui-color-danger);
				--uui-button-border-color: var(--uui-color-danger);
				--uui-button-border-color-hover: var(--uui-color-danger);
			}

			.umb-block-grid__layout-container[data-area-length='0'] {
				--umb-block-grid--layout-container--is-dragging--variable: var(--umb-block-grid--is-dragging) 1;
				min-height: calc(var(--umb-block-grid--layout-container--is-dragging--variable, 0) * var(--uui-size-11));
			}

			.umb-block-grid__layout-container[data-area-length='0']::after {
				content: '';
				position: absolute;
				inset: 0;
				top: 1px;
				border: calc(var(--umb-block-grid--layout-container--is-dragging--variable, 0) * 1px) dashed
					var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}
		`
];
R([
  x({ type: String, attribute: "area-key", reflect: !0 })
], O.prototype, "areaKey", 1);
R([
  x({ attribute: !1 })
], O.prototype, "layoutColumns", 1);
R([
  h()
], O.prototype, "_areaKey", 2);
R([
  h()
], O.prototype, "_canCreate", 2);
R([
  h()
], O.prototype, "_createLabel", 2);
R([
  h()
], O.prototype, "_configCreateLabel", 2);
R([
  h()
], O.prototype, "_styleElement", 2);
R([
  h()
], O.prototype, "_layoutEntries", 2);
R([
  h()
], O.prototype, "_isReadOnly", 2);
O = R([
  D("umb-block-grid-entries")
], O);
var di = Object.defineProperty, pi = Object.getOwnPropertyDescriptor, bt = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? pi(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = (o ? s(t, i, n) : s(n)) || n);
  return o && n && di(t, i, n), n;
};
let J = class extends F {
  constructor() {
    super(), this._areas = [], this.consumeContext(Pt, (e) => {
      this.observe(
        e.areas,
        (t) => {
          this._areas = t;
        },
        "observeAreas"
      ), this.observe(
        e.areaGridColumns,
        (t) => {
          this._areaGridColumns = t;
        },
        "observeAreaGridColumns"
      );
    }), this.consumeContext(St, (e) => {
      this.observe(
        e.layoutStylesheet,
        (t) => {
          !t || this._styleElement?.href === t || (this._styleElement = document.createElement("link"), this._styleElement.rel = "stylesheet", this._styleElement.href = t);
        },
        "observeStylesheet"
      );
    });
  }
  render() {
    return this._areas && this._areas.length > 0 ? a` ${this._styleElement}
					<div
						class="umb-block-grid__area-container"
						part="area-container"
						style="--umb-block-grid--area-grid-columns: ${this._areaGridColumns}">
						${Dt(
      this._areas,
      (e) => e.key,
      (e) => a`<umb-block-grid-entries
									part="area"
									class="umb-block-grid__area"
									.areaKey=${e.key}
									.layoutColumns=${e.columnSpan}></umb-block-grid-entries>`
    )}
					</div>` : "";
  }
};
J.styles = [
  z`
			:host {
				display: block;
				width: 100%;
			}
		`
];
bt([
  h()
], J.prototype, "_styleElement", 2);
bt([
  h()
], J.prototype, "_areas", 2);
bt([
  h()
], J.prototype, "_areaGridColumns", 2);
J = bt([
  D("umb-block-grid-areas-container")
], J);
var mi = Object.defineProperty, bi = Object.getOwnPropertyDescriptor, Z = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? bi(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = (o ? s(t, i, n) : s(n)) || n);
  return o && n && mi(t, i, n), n;
};
let L = class extends F {
  render() {
    return a`<umb-ref-grid-block
			standalone
			href=${(this.config?.showContentEdit ? this.config?.editContentPath : void 0) ?? ""}>
			<umb-icon slot="icon" .name=${this.icon}></umb-icon>
			<umb-ufm-render slot="name" inline .markdown=${this.label} .value=${this.content}></umb-ufm-render>
			${this.unpublished ? a`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
						><umb-localize key="blockEditor_notExposedLabel"></umb-localize
					></uui-tag>` : k}
			<umb-block-grid-areas-container slot="areas" draggable="false"></umb-block-grid-areas-container>
		</umb-ref-grid-block>`;
  }
};
L.styles = [
  z`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}
			:host([unpublished]) umb-icon,
			:host([unpublished]) umb-ufm-render {
				opacity: 0.6;
			}
		`
];
Z([
  x({ attribute: !1 })
], L.prototype, "label", 2);
Z([
  x({ type: String, reflect: !1 })
], L.prototype, "icon", 2);
Z([
  x({ attribute: !1 })
], L.prototype, "config", 2);
Z([
  x({ type: Boolean, reflect: !0 })
], L.prototype, "unpublished", 2);
Z([
  x({ attribute: !1 })
], L.prototype, "content", 2);
L = Z([
  D("umb-block-grid-block")
], L);
export {
  Fe as U
};
//# sourceMappingURL=block-grid-block.element-DQICgvM8.js.map
