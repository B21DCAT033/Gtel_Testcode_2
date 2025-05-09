import { U as h } from "./constants-CCLuR4UJ.js";
import { a as K } from "./constants-CCLuR4UJ.js";
import { property as u, state as p } from "@umbraco-cms/backoffice/external/lit";
import { observeMultiple as y } from "@umbraco-cms/backoffice/observable-api";
import { UmbBlockRteManagerContext as v, UmbBlockRteEntriesContext as c } from "@umbraco-cms/backoffice/block-rte";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as b } from "@umbraco-cms/backoffice/property-editor";
import { UMB_PROPERTY_CONTEXT as f, UMB_PROPERTY_DATASET_CONTEXT as g } from "@umbraco-cms/backoffice/property";
import { UmbFormControlMixin as d, UmbValidationContext as k, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as C } from "@umbraco-cms/backoffice/validation";
import { UmbBlockElementDataValidationPathTranslator as m } from "@umbraco-cms/backoffice/block";
var E = Object.defineProperty, D = Object.getOwnPropertyDescriptor, r = (n, t, e, a) => {
  for (var o = a > 1 ? void 0 : a ? D(t, e) : t, s = n.length - 1, l; s >= 0; s--)
    (l = n[s]) && (o = (a ? l(t, e, o) : l(o)) || o);
  return a && o && E(t, e, o), o;
};
class i extends d(_) {
  constructor() {
    super(), this.readonly = !1, this._markup = "", this.#t = new v(this), this.#e = new c(this), this.#s = new k(this), this.consumeContext(f, (t) => {
      this.#r(t);
    }), this.consumeContext(g, (t) => {
      this.#t.setVariantId(t.getVariantId());
    }), this.observe(
      this.#e.layoutEntries,
      (t) => {
        this.#t.setLayouts(t);
      },
      null
    ), this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? C,
      () => !!this.mandatory && this.value === void 0
    );
  }
  set config(t) {
    if (!t) return;
    this._config = t;
    const e = t.getValueByAlias("blocks") ?? [];
    this.#t.setBlockTypes(e), this.#t.setEditorConfiguration(t);
  }
  set value(t) {
    if (!t) {
      super.value = void 0, this._markup = "", this.#t.setLayouts([]), this.#t.setContents([]), this.#t.setSettings([]), this.#t.setExposes([]);
      return;
    }
    const e = t ? { ...t } : {};
    e.markup ??= "", e.blocks ??= { layout: {}, contentData: [], settingsData: [], expose: [] }, e.blocks.layout ??= {}, e.blocks.contentData ??= [], e.blocks.settingsData ??= [], e.blocks.expose ??= [], super.value = e, this._markup !== super.value.markup && (this._markup = super.value.markup), this.#t.setLayouts(e.blocks.layout[h] ?? []), this.#t.setContents(e.blocks.contentData), this.#t.setSettings(e.blocks.settingsData), this.#t.setExposes(e.blocks.expose);
  }
  get value() {
    return super.value;
  }
  get _value() {
    return super.value;
  }
  set _value(t) {
    super.value = t;
  }
  #t;
  #e;
  #s;
  #o;
  #a;
  #r(t) {
    this.observe(
      t.dataPath,
      (e) => {
        this.#o?.destroy(), this.#a?.destroy(), e && (this.#s.setDataPath(e + ".blocks"), this.#o = new m(this, "contentData"), this.#a = new m(this, "settingsData"));
      },
      "observeDataPath"
    ), this.observe(
      t?.alias,
      (e) => {
        this.#t.setPropertyAlias(e);
      },
      "observePropertyAlias"
    ), this.observe(
      y([
        this.#t.layouts,
        this.#t.contents,
        this.#t.settings,
        this.#t.exposes
      ]),
      ([e, a, o, s]) => {
        e.length === 0 ? super.value?.markup === void 0 ? super.value = void 0 : super.value = {
          ...super.value,
          blocks: {
            layout: {},
            contentData: [],
            settingsData: [],
            expose: []
          }
        } : super.value = {
          markup: this._markup,
          blocks: {
            layout: { [h]: e },
            contentData: a,
            settingsData: o,
            expose: s
          }
        }, super.value?.markup !== void 0 && t.setValue(super.value);
      },
      "motherObserver"
    );
  }
  _filterUnusedBlocks(t) {
    const e = this.#t.getLayouts().filter((s) => t.indexOf(s.contentKey) === -1), a = e.map((s) => s.contentKey), o = e.map((s) => s.settingsKey).filter((s) => typeof s == "string");
    this.#t.removeManyContent(a), this.#t.removeManySettings(o), this.#t.removeManyLayouts(a);
  }
  _fireChangeEvent() {
    this.dispatchEvent(new b());
  }
}
r([
  u({
    attribute: !1,
    type: Object,
    hasChanged(n, t) {
      return n?.markup !== t?.markup;
    }
  })
], i.prototype, "value", 1);
r([
  u({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
r([
  u({ type: Boolean })
], i.prototype, "mandatory", 2);
r([
  u({ type: String })
], i.prototype, "mandatoryMessage", 2);
r([
  p()
], i.prototype, "_config", 2);
r([
  p()
], i.prototype, "_value", 1);
r([
  p()
], i.prototype, "_markup", 2);
export {
  K as UMB_BLOCK_RTE_DATA_CONTENT_KEY,
  h as UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS,
  i as UmbPropertyEditorUiRteElementBase
};
//# sourceMappingURL=index.js.map
