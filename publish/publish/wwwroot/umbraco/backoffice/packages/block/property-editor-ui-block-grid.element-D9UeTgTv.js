import { U as D } from "./constants-U4qMfj-5.js";
import { UmbBooleanState as S, UmbArrayState as V, pushAtToUniqueArray as x, appendToFrozenArray as b, observeMultiple as A } from "@umbraco-cms/backoffice/observable-api";
import { transformServerPathToClientPath as I } from "@umbraco-cms/backoffice/utils";
import { UmbBlockManagerContext as R, UmbBlockElementDataValidationPathTranslator as B } from "@umbraco-cms/backoffice/block";
import { UMB_APP_CONTEXT as G } from "@umbraco-cms/backoffice/app";
import { j as T } from "./index-Cc47Hgez.js";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { ref as K, html as W, css as Y, state as F, property as q, customElement as H } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { UMB_PROPERTY_CONTEXT as O, UMB_PROPERTY_DATASET_CONTEXT as $ } from "@umbraco-cms/backoffice/property";
import { UmbFormControlMixin as X, UmbValidationContext as z } from "@umbraco-cms/backoffice/validation";
import { debounceTime as J } from "@umbraco-cms/backoffice/external/rxjs";
import "./block-grid-block.element-DQICgvM8.js";
class Q extends R {
  constructor(t) {
    super(t), this.#e = new S(void 0), this.inlineEditingMode = this.#e.asObservable(), this.#t = new V([], (s) => s.key), this.blockGroups = this.#t.asObservable(), this.layoutStylesheet = this._editorConfiguration.asObservablePart((s) => {
      if (!s) return;
      const r = s.getValueByAlias("layoutStylesheet");
      if (!r) return D;
      if (r)
        return new URL(I(r), this.#r).href;
    }), this.gridColumns = this._editorConfiguration.asObservablePart((s) => {
      const r = s?.getValueByAlias("gridColumns");
      return parseInt(r && r !== "" ? r : "12");
    }), this.#s = this.getContext(G).then((s) => {
      this.#r = s.getServerUrl();
    });
  }
  #e;
  setInlineEditingMode(t) {
    this.#e.setValue(t ?? !1);
  }
  getInlineEditingMode() {
    return this.#e.getValue();
  }
  #s;
  #r;
  #t;
  getMinAllowed() {
    return this._editorConfiguration.getValue()?.getValueByAlias("validationLimit")?.min ?? 0;
  }
  getMaxAllowed() {
    return this._editorConfiguration.getValue()?.getValueByAlias("validationLimit")?.max ?? 1 / 0;
  }
  setEditorConfiguration(t) {
    this.#s.then(() => {
      super.setEditorConfiguration(t);
    });
  }
  setBlockGroups(t) {
    this.#t.setValue(t);
  }
  getBlockGroups() {
    return this.#t.value;
  }
  getBlockGroupName(t) {
    return this.#t.getValue().find((s) => s.key === t)?.name;
  }
  /**
   * @deprecated Use createWithPresets instead. Will be removed in v.17.
   */
  create(t, s, r) {
    throw new Error("Method deparecated use createWithPresets");
  }
  async createWithPresets(t, s, r) {
    return await super._createBlockData(t, s);
  }
  /**
   * Inserts a layout entry into an area of a layout entry.
   * @param layoutEntry The layout entry to insert.
   * @param insert
   * @param entries The layout entries to search within.
   * @param parentUnique The parentUnique to search for.
   * @param parentId
   * @param areaKey The areaKey to insert the layout entry into.
   * @param index The index to insert the layout entry at.
   * @returns a updated layout entries array if the insert was successful.
   * @remarks
   * This method is recursive and will search for the parentUnique in the layout entries.
   * If the parentUnique is found, the layout entry will be inserted into the items of the area that matches the areaKey.
   * This returns a new array of layout entries with the updated layout entry inserted.
   * Because the layout entries are frozen, the affected parts is replaced with a new. Only updating/unfreezing the affected part of the structure.
   */
  #i(t, s, r, a, h) {
    let p = s.length;
    for (; p--; ) {
      const n = s[p];
      if (n.contentKey === r) {
        const m = n.areas?.map(
          (l) => l.key === a ? {
            ...l,
            items: x([...l.items], t, (y) => y.contentKey === t.contentKey, h)
          } : l
        ) ?? [];
        return b(
          s,
          {
            ...n,
            areas: m
          },
          (l) => l.contentKey === n.contentKey
        );
      }
      if (n.areas) {
        let m = n.areas.length;
        for (; m--; ) {
          const l = this.#i(
            t,
            n.areas[m].items,
            r,
            a,
            h
          );
          if (l) {
            const y = n.areas[m];
            return b(
              s,
              {
                ...n,
                areas: b(
                  n.areas,
                  { ...y, items: l },
                  (E) => E.key === y.key
                )
              },
              (E) => E.contentKey === n.contentKey
            );
          }
        }
      }
    }
  }
  insert(t, s, r, a) {
    return this.setOneLayout(t, a), this.insertBlockData(t, s, r, a), !0;
  }
  setOneLayout(t, s) {
    const r = s?.index ?? -1;
    if (s?.parentUnique && s?.areaKey) {
      const a = this.#i(
        t,
        this._layouts.getValue(),
        s?.parentUnique,
        s?.areaKey,
        r
      );
      a && this._layouts.setValue(a);
    } else
      this._layouts.appendOneAt(t, r);
  }
  onDragStart() {
    this.getHostElement().style.setProperty("--umb-block-grid--is-dragging", " ");
  }
  onDragEnd() {
    this.getHostElement().style.removeProperty("--umb-block-grid--is-dragging");
  }
}
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, P = (e, t, s, r) => {
  for (var a = r > 1 ? void 0 : r ? j(t, s) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (a = (r ? p(t, s, a) : p(a)) || a);
  return r && a && Z(t, s, a), a;
}, C = (e, t, s) => t.has(e) || M("Cannot " + s), i = (e, t, s) => (C(e, t, "read from private field"), t.get(e)), u = (e, t, s) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), g = (e, t, s, r) => (C(e, t, "write to private field"), t.set(e, s), s), tt = (e, t, s) => (C(e, t, "access private method"), s), U, v, f, o, _, d, k, w;
let c = class extends X(L) {
  constructor() {
    super(), u(this, k), u(this, U, new z(this)), u(this, v), u(this, f), u(this, o, new Q(this)), u(this, _), u(this, d), this.consumeContext(O, (e) => {
      this.observe(
        e.dataPath,
        (t) => {
          i(this, v)?.destroy(), i(this, f)?.destroy(), t && (i(this, U).setDataPath(t), g(this, v, new B(this, "contentData")), g(this, f, new B(this, "settingsData")));
        },
        "observeDataPath"
      );
    }), this.consumeContext(O, (e) => {
      this.observe(
        A([
          i(this, o).layouts,
          i(this, o).contents,
          i(this, o).settings,
          i(this, o).exposes
        ]).pipe(J(20)),
        ([t, s, r, a]) => {
          t.length === 0 ? super.value = void 0 : super.value = {
            ...super.value,
            layout: { [T]: t },
            contentData: s,
            settingsData: r,
            expose: a
          }, !(i(this, _) === void 0 && super.value === void 0) && e.setValue(super.value);
        },
        "motherObserver"
      ), this.observe(
        e?.alias,
        (t) => {
          i(this, o).setPropertyAlias(t);
        },
        "observePropertyAlias"
      ), this.observe(
        A([e.isReadOnly, e.variantId]),
        ([t, s]) => {
          const r = "UMB_PROPERTY_EDITOR_UI";
          if (s !== void 0)
            if (t) {
              const a = {
                unique: r,
                variantId: s,
                message: ""
              };
              i(this, o).readOnlyState.addState(a);
            } else
              i(this, o).readOnlyState.removeState(r);
        },
        "observeIsReadOnly"
      );
    }), this.consumeContext($, (e) => {
      i(this, o).setVariantId(e.getVariantId());
    });
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("blocks") ?? [];
    i(this, o).setBlockTypes(t);
    const s = e.getValueByAlias("blockGroups") ?? [];
    i(this, o).setBlockGroups(s);
    const r = e.getValueByAlias("useInlineEditingAsDefault");
    i(this, o).setInlineEditingMode(r), this.style.maxWidth = e.getValueByAlias("maxPropertyWidth") ?? "", i(this, o).setEditorConfiguration(e);
  }
  set value(e) {
    if (g(this, _, e), !e) {
      super.value = void 0;
      return;
    }
    const t = e ? { ...e } : {};
    t.layout ??= {}, t.contentData ??= [], t.settingsData ??= [], t.expose ??= [], super.value = t, i(this, o).setLayouts(super.value.layout[T] ?? []), i(this, o).setContents(super.value.contentData), i(this, o).setSettings(super.value.settingsData), i(this, o).setExposes(super.value.expose);
  }
  get value() {
    return super.value;
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.observe(i(this, o).gridColumns, (t) => {
      t && (this._layoutColumns = t, this.style.setProperty("--umb-block-grid--grid-columns", t.toString()));
    });
  }
  render() {
    return W` <umb-block-grid-entries
			${K(tt(this, k, w))}
			.areaKey=${null}
			.layoutColumns=${this._layoutColumns}></umb-block-grid-entries>`;
  }
};
U = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakSet();
w = function(e) {
  i(this, d) !== e && (i(this, d) && this.removeFormControlElement(i(this, d)), g(this, d, e), e && this.addFormControlElement(e));
};
c.styles = [
  N,
  Y`
			:host {
				display: grid;
				gap: 1px;
			}
			> div {
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}

			uui-button-group {
				padding-top: 1px;
				display: grid;
				grid-template-columns: 1fr auto;
			}
		`
];
P([
  F()
], c.prototype, "_layoutColumns", 2);
P([
  q({ attribute: !1 })
], c.prototype, "value", 1);
c = P([
  H("umb-property-editor-ui-block-grid")
], c);
const mt = c;
export {
  c as UmbPropertyEditorUIBlockGridElement,
  mt as default
};
//# sourceMappingURL=property-editor-ui-block-grid.element-D9UeTgTv.js.map
