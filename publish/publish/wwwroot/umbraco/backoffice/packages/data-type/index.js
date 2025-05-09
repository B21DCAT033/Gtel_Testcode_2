import { U as w, a as rt, b as it, c as at, d as st } from "./constants-D-HH3gx6.js";
import { q as te, i as ee, j as re, l as ie, s as ae, t as se, u as oe, f as ne, h as _e, B as le, C as pe, D as ue, E as he, F as Te, G as Ee, w as Ae, n as de, g as ce, k as me, p as fe, v as ve, z as ye, I as Pe, J as Oe, x as Ue, y as De, A as Re, K as Ie, o as Se, m as Me, H as be, r as Ce, e as ge } from "./constants-D-HH3gx6.js";
import { UmbPickerInputContext as ot } from "@umbraco-cms/backoffice/picker-input";
import { html as p, nothing as B, repeat as $, css as S, property as u, state as A, customElement as O, ifDefined as nt } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as _t } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as x } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as lt } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as pt, UUIRefNodeElement as W, UUIIconRequestEvent as C } from "@umbraco-cms/backoffice/external/uui";
import { UmbModalRouteRegistrationController as g } from "@umbraco-cms/backoffice/router";
import { UmbFormControlMixin as ut, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as ht, UmbDataPathPropertyValueQuery as Tt } from "@umbraco-cms/backoffice/validation";
import { UmbDataTypeDetailRepository as Et } from "./data-type-detail.repository-CkmK-I2A.js";
import { UmbElementMixin as At } from "@umbraco-cms/backoffice/element-api";
import { umbExtensionsRegistry as dt } from "@umbraco-cms/backoffice/extension-registry";
import { UmbTextStyles as ct } from "@umbraco-cms/backoffice/style";
import { UmbDataTypeItemRepository as Le } from "./data-type-item.repository-C4QzZtT3.js";
import { UmbRepositoryItemsManager as mt } from "@umbraco-cms/backoffice/repository";
import { UmbMoveDataTypeRepository as Be } from "./data-type-move.repository-BnrvJqf1.js";
const Qt = "Umb.Repository.DataType.Reference";
class ft extends ot {
  constructor(e) {
    super(e, w, rt);
  }
}
var vt = Object.defineProperty, yt = Object.getOwnPropertyDescriptor, N = (t) => {
  throw TypeError(t);
}, h = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? yt(e, r) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (a ? o(e, r, i) : o(i)) || i);
  return a && i && vt(e, r, i), i;
}, z = (t, e, r) => e.has(t) || N("Cannot " + r), _ = (t, e, r) => (z(t, e, "read from private field"), r ? r.call(t) : e.get(t)), D = (t, e, r) => e.has(t) ? N("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), c = (t, e, r) => (z(t, e, "access private method"), r), R, n, T, K, F, k, q, H;
let l = class extends pt(M, "") {
  constructor() {
    super(), D(this, T), D(this, R, new lt(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => t,
      identifier: "Umb.SorterIdentifier.InputDataType",
      itemSelector: "uui-ref-node-data-type",
      containerSelector: "uui-ref-list",
      onChange: ({ model: t }) => {
        this.selection = t, this.dispatchEvent(new x());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", D(this, n, new ft(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && _(this, n).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && _(this, n).getSelection().length > this.max
    ), this.observe(_(this, n).selection, (t) => this.value = t.join(","), "_observeSelection"), this.observe(_(this, n).selectedItems, (t) => this._items = t, "_observerItems");
  }
  set min(t) {
    _(this, n).min = t;
  }
  get min() {
    return _(this, n).min;
  }
  set max(t) {
    _(this, n).max = t;
  }
  get max() {
    return _(this, n).max;
  }
  set selection(t) {
    _(this, n).setSelection(t ?? []), _(this, R).setModel(t);
  }
  get selection() {
    return _(this, n).getSelection();
  }
  set value(t) {
    this.selection = _t(t);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return p`${c(this, T, q).call(this)} ${c(this, T, k).call(this)}`;
  }
};
R = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakSet();
K = function() {
  _(this, n).openPicker({
    hideTreeRoot: !0
  });
};
F = function(t) {
  _(this, n).requestRemoveItem(t.unique);
};
k = function() {
  return this.max > 0 && this.selection.length >= this.max ? B : p`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${c(this, T, K)}
				label="${this.localize.term("general_choose")}"></uui-button>
		`;
};
q = function() {
  return this._items ? p`
			<uui-ref-list>
				${$(
    this._items,
    (t) => t.unique,
    (t) => c(this, T, H).call(this, t)
  )}
			</uui-ref-list>
		` : B;
};
H = function(t) {
  if (t.unique)
    return p`
			<uui-ref-node-data-type name=${t.name} id=${t.unique}>
				<uui-action-bar slot="actions">
					<uui-button @click=${() => c(this, T, F).call(this, t)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node-data-type>
		`;
};
l.styles = [
  S`
			#btn-add {
				width: 100%;
			}
		`
];
h([
  u({ type: Number })
], l.prototype, "min", 1);
h([
  u({ type: String, attribute: "min-message" })
], l.prototype, "minMessage", 2);
h([
  u({ type: Number })
], l.prototype, "max", 1);
h([
  u({ type: String, attribute: "min-message" })
], l.prototype, "maxMessage", 2);
h([
  u({ type: Array })
], l.prototype, "selection", 1);
h([
  u()
], l.prototype, "value", 1);
h([
  A()
], l.prototype, "_items", 2);
l = h([
  O("umb-data-type-input")
], l);
var Pt = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, V = (t) => {
  throw TypeError(t);
}, U = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Ot(e, r) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (a ? o(e, r, i) : o(i)) || i);
  return a && i && Pt(e, r, i), i;
}, X = (t, e, r) => e.has(t) || V("Cannot " + r), Ut = (t, e, r) => (X(t, e, "read from private field"), e.get(t)), Dt = (t, e, r) => e.has(t) ? V("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Rt = (t, e, r, a) => (X(t, e, "write to private field"), e.set(t, r), r), v;
let d = class extends ut(M, "") {
  constructor() {
    super(), Dt(this, v), Rt(this, v, new g(this, it)), new g(this, at).onSetup(() => ({
      data: {},
      value: { selection: this._ids ?? [] }
    })).onSubmit((t) => {
      this.value = t?.selection.join(",") ?? "", this.dispatchEvent(new x());
    }).observeRouteBuilder((t) => {
      this._createRoute = t(null);
    });
  }
  getFormElement() {
  }
  set value(t) {
    super.value = t ?? "", this._ids = super.value.split(",").map((e) => e.trim()).filter((e) => e.length !== 0);
  }
  get value() {
    return super.value?.toString() ?? "";
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.addValidator(
      "valueMissing",
      () => ht,
      () => this.hasAttribute("required") && !this.value
    );
  }
  focus() {
    this.shadowRoot?.querySelector("umb-ref-data-type")?.focus();
  }
  render() {
    return this._ids && this._ids.length > 0 ? p`
					<umb-ref-data-type
						data-type-id=${this._ids[0]}
						@open=${() => {
      Ut(this, v)?.open({}, "edit/" + this._ids[0]);
    }}
						standalone>
						<uui-action-bar slot="actions">
							<uui-button label="Change" .href=${this._createRoute}></uui-button>
						</uui-action-bar>
					</umb-ref-data-type>
				` : p`
					<uui-button
						id="empty-state-button"
						label="Select Property Editor"
						look="placeholder"
						color="default"
						@blur=${() => {
      this.pristine = !1;
    }}
						.href=${this._createRoute}></uui-button>
				`;
  }
};
v = /* @__PURE__ */ new WeakMap();
d.styles = [
  S`
			#empty-state-button {
				width: 100%;
				--uui-button-padding-top-factor: 4;
				--uui-button-padding-bottom-factor: 4;
			}
			:host(:invalid:not([pristine])) #empty-state-button {
				--uui-button-border-color: var(--uui-color-danger);
				--uui-button-border-width: 2px;
				--uui-button-contrast: var(--uui-color-danger);
			}
		`
];
U([
  A()
], d.prototype, "_ids", 2);
U([
  u({ type: String, attribute: !1 })
], d.prototype, "value", 1);
U([
  A()
], d.prototype, "_createRoute", 2);
d = U([
  O("umb-data-type-flow-input")
], d);
var It = Object.defineProperty, St = Object.getOwnPropertyDescriptor, G = (t) => {
  throw TypeError(t);
}, f = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? St(e, r) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (a ? o(e, r, i) : o(i)) || i);
  return a && i && It(e, r, i), i;
}, Mt = (t, e, r) => e.has(t) || G("Cannot " + r), bt = (t, e, r) => e.has(t) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Q = (t, e, r) => (Mt(t, e, "access private method"), r), y, J, Z;
let E = class extends At(W) {
  constructor() {
    super(...arguments), bt(this, y), this.fallbackIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M255.981 440.734c-4.422 0-8.895-.159-13.293-.471l1.682-23.62c15.395 1.095 31.076-.014 46.053-3.277l5.039 23.137a185.943 185.943 0 0 1-39.481 4.231zm-43.253-5.094a183.61 183.61 0 0 1-49.174-19.657l11.864-20.49a159.927 159.927 0 0 0 42.833 17.123l-5.523 23.024zm111.734-8.02l-8.781-21.991a160.553 160.553 0 0 0 39.949-23.097l14.666 18.593a184.376 184.376 0 0 1-45.834 26.495zm-185.815-28.926a185.575 185.575 0 0 1-35.652-39.114l19.596-13.293a161.956 161.956 0 0 0 31.105 34.125l-15.049 18.282zm253.834-18.216l-17.492-15.96a161.321 161.321 0 0 0 25.924-38.192l21.297 10.353a184.986 184.986 0 0 1-29.729 43.799zM88.097 333.183a183.381 183.381 0 0 1-14.977-50.791l23.438-3.355a159.869 159.869 0 0 0 13.047 44.243l-21.508 9.903zm345.082-24.798l-22.711-6.705c4.355-14.761 6.566-30.131 6.566-45.679h23.678c0 17.818-2.533 35.444-7.533 52.384zM94.96 252.634l-23.672-.483c.365-17.809 3.266-35.378 8.625-52.224l22.566 7.181c-4.671 14.677-7.203 29.996-7.519 45.526zm320.881-16.346a159.854 159.854 0 0 0-12.115-44.503l21.713-9.45a183.696 183.696 0 0 1 13.908 51.088l-23.506 2.865zM112.546 182.67l-21.072-10.798a184.915 184.915 0 0 1 30.633-43.168l17.154 16.319a161.599 161.599 0 0 0-26.715 37.647zm278.68-14.155a161.801 161.801 0 0 0-30.389-34.763l15.426-17.966a185.512 185.512 0 0 1 34.832 39.846l-19.869 12.883zm-232.239-41.101l-14.273-18.894a184.318 184.318 0 0 1 46.375-25.533l8.322 22.169a160.705 160.705 0 0 0-40.424 22.258zm180.444-9.19a160.053 160.053 0 0 0-42.466-18.02l6.009-22.903a183.633 183.633 0 0 1 48.748 20.684l-12.291 20.239zM224.825 97.956l-4.553-23.239a186.147 186.147 0 0 1 35.705-3.45h.004c5.711 0 11.473.266 17.129.786l-2.174 23.58c-15.306-1.414-31.072-.624-46.111 2.323z"/></svg>', this.repository = new Et(this), this.propertyEditorUiAlias = "", this.propertyEditorSchemaAlias = "";
  }
  get dataTypeId() {
  }
  set dataTypeId(t) {
    this.setDataTypeId(t);
  }
  async setDataTypeId(t) {
    t ? this.observe(
      (await this.repository.requestByUnique(t)).asObservable(),
      (e) => {
        e && (this.name = e.name ?? "", this.propertyEditorSchemaAlias = e.editorAlias ?? "", (e.editorUiAlias ?? this.propertyEditorUiAlias !== "") && (this.propertyEditorUiAlias = e.editorUiAlias ?? "", Q(this, y, J).call(this)));
      },
      "dataType"
    ) : this.removeUmbControllerByAlias("dataType");
  }
  renderDetail() {
    const t = [];
    return this.propertyEditorUiAlias !== "" ? t.push(this.propertyEditorUiAlias) : t.push("Property Editor UI Missing"), this.detail !== "" && t.push(this.detail), p`<small id="detail">${t.join(" | ")}<slot name="detail"></slot></small>`;
  }
};
y = /* @__PURE__ */ new WeakSet();
J = async function() {
  this.propertyEditorUiAlias && this.observe(
    dt.byTypeAndAlias("propertyEditorUi", this.propertyEditorUiAlias),
    async (t) => {
      const e = t?.meta.icon;
      e && Q(this, y, Z).call(this, e);
    },
    "_observeIcon"
  );
};
Z = function(t) {
  if (t !== "" && t !== null) {
    const e = new C(C.ICON_REQUEST, {
      detail: { iconName: t }
    });
    this.dispatchEvent(e), e.icon !== null && e.icon.then((r) => {
      this.fallbackIcon = r;
    });
  }
};
E.styles = [
  ...W.styles,
  S`
			#detail {
				word-break: break-all;
			}
		`
];
f([
  A()
], E.prototype, "fallbackIcon", 2);
f([
  u({ type: String, attribute: "data-type-id" })
], E.prototype, "dataTypeId", 1);
f([
  A()
], E.prototype, "propertyEditorUiAlias", 2);
f([
  A()
], E.prototype, "propertyEditorSchemaAlias", 2);
E = f([
  O("umb-ref-data-type")
], E);
var Ct = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, j = (t) => {
  throw TypeError(t);
}, tt = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? gt(e, r) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (a ? o(e, r, i) : o(i)) || i);
  return a && i && Ct(e, r, i), i;
}, b = (t, e, r) => e.has(t) || j("Cannot " + r), Y = (t, e, r) => (b(t, e, "read from private field"), e.get(t)), L = (t, e, r) => e.has(t) ? j("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Yt = (t, e, r, a) => (b(t, e, "write to private field"), e.set(t, r), r), Lt = (t, e, r) => (b(t, e, "access private method"), r), m, I, et;
let P = class extends M {
  constructor() {
    super(), L(this, I), L(this, m), this._properties = [], this.consumeContext(st, (t) => {
      Yt(this, m, t), Lt(this, I, et).call(this);
    });
  }
  render() {
    return this._properties?.length > 0 ? $(
      this._properties,
      (t) => t.alias,
      (t) => p`<umb-property
							data-path="$.values[${Tt(t)}].value"
							label=${t.label}
							description=${nt(t.description)}
							alias=${t.alias}
							property-editor-ui-alias=${t.propertyEditorUiAlias}
							.config=${t.config}></umb-property>`
    ) : p`<umb-localize key="editdatatype_noConfiguration"
					>There is no configuration for this property editor.</umb-localize
				>`;
  }
};
m = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
et = function() {
  Y(this, m) && this.observe(
    Y(this, m).properties,
    (t) => {
      this._properties = t;
    },
    "observeProperties"
  );
};
P.styles = [ct];
tt([
  A()
], P.prototype, "_properties", 2);
P = tt([
  O("umb-property-editor-config")
], P);
class Jt extends mt {
  constructor(e) {
    super(e, w);
  }
}
export {
  te as UMB_CREATE_DATA_TYPE_WORKSPACE_PATH_PATTERN,
  it as UMB_DATATYPE_WORKSPACE_MODAL,
  ee as UMB_DATA_TYPE_COLLECTION_ALIAS,
  re as UMB_DATA_TYPE_COLLECTION_REPOSITORY_ALIAS,
  ie as UMB_DATA_TYPE_CREATE_OPTIONS_MODAL,
  ae as UMB_DATA_TYPE_DETAIL_REPOSITORY_ALIAS,
  se as UMB_DATA_TYPE_DETAIL_STORE_ALIAS,
  oe as UMB_DATA_TYPE_DETAIL_STORE_CONTEXT,
  ne as UMB_DATA_TYPE_ENTITY_TYPE,
  _e as UMB_DATA_TYPE_FOLDER_ENTITY_TYPE,
  le as UMB_DATA_TYPE_FOLDER_REPOSITORY_ALIAS,
  pe as UMB_DATA_TYPE_FOLDER_STORE_ALIAS,
  ue as UMB_DATA_TYPE_FOLDER_STORE_CONTEXT,
  he as UMB_DATA_TYPE_FOLDER_WORKSPACE_ALIAS,
  Te as UMB_DATA_TYPE_FOLDER_WORKSPACE_CONTEXT,
  Ee as UMB_DATA_TYPE_FOLDER_WORKSPACE_PATH,
  w as UMB_DATA_TYPE_ITEM_REPOSITORY_ALIAS,
  Ae as UMB_DATA_TYPE_ITEM_STORE_CONTEXT,
  de as UMB_DATA_TYPE_PICKER_FLOW_DATA_TYPE_PICKER_MODAL,
  at as UMB_DATA_TYPE_PICKER_FLOW_MODAL,
  rt as UMB_DATA_TYPE_PICKER_MODAL,
  Qt as UMB_DATA_TYPE_REFERENCE_REPOSITORY_ALIAS,
  ce as UMB_DATA_TYPE_ROOT_ENTITY_TYPE,
  me as UMB_DATA_TYPE_ROOT_WORKSPACE_ALIAS,
  fe as UMB_DATA_TYPE_ROOT_WORKSPACE_PATH,
  ve as UMB_DATA_TYPE_STORE_ALIAS,
  ye as UMB_DATA_TYPE_TREE_ALIAS,
  Pe as UMB_DATA_TYPE_TREE_ITEM_CHILDREN_COLLECTION_ALIAS,
  Oe as UMB_DATA_TYPE_TREE_ITEM_CHILDREN_COLLECTION_REPOSITORY_ALIAS,
  Ue as UMB_DATA_TYPE_TREE_REPOSITORY_ALIAS,
  De as UMB_DATA_TYPE_TREE_STORE_ALIAS,
  Re as UMB_DATA_TYPE_TREE_STORE_CONTEXT,
  Ie as UMB_DATA_TYPE_WORKSPACE_ALIAS,
  st as UMB_DATA_TYPE_WORKSPACE_CONTEXT,
  Se as UMB_DATA_TYPE_WORKSPACE_PATH,
  Me as UMB_DUPLICATE_DATA_TYPE_REPOSITORY_ALIAS,
  be as UMB_EDIT_DATA_TYPE_FOLDER_WORKSPACE_PATH_PATTERN,
  Ce as UMB_EDIT_DATA_TYPE_WORKSPACE_PATH_PATTERN,
  ge as UMB_MOVE_DATA_TYPE_REPOSITORY_ALIAS,
  Et as UmbDataTypeDetailRepository,
  l as UmbDataTypeInputElement,
  Le as UmbDataTypeItemRepository,
  Jt as UmbDataTypeItemRepositoryManager,
  ft as UmbDataTypePickerContext,
  ft as UmbDataTypePickerInputContext,
  Be as UmbMoveDataTypeRepository
};
//# sourceMappingURL=index.js.map
