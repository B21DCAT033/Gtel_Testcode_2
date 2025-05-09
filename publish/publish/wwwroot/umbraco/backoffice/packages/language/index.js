import { U as S, a as I } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { d as F, t as J, u as Q, e as Z, f as ee, g as te, i as ie, j as re, k as se, b as ne, m as ae, c as oe, q as _e, r as le, l as ue, h as me, n as Ae, p as he, o as pe, s as Ee } from "./language-access.workspace.context-token-ChA0uFUc.js";
import { UmbPickerInputContext as M } from "@umbraco-cms/backoffice/picker-input";
import { html as A, nothing as U, repeat as C, css as N, property as l, state as v, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as R } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as B } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as y } from "@umbraco-cms/backoffice/external/uui";
import { UmbLanguageDetailRepository as Ue } from "./language-detail.repository-a4uWw_br.js";
import { UmbLanguageItemRepository as ge } from "./language-item.repository-DgoMlohm.js";
import { UmbLanguageCollectionRepository as de } from "./language-collection.repository-didMva8o.js";
import { UmbAppLanguageContext as Oe } from "./app-language.context-DP3YAEuZ.js";
class W extends M {
  constructor(t) {
    super(t, S, I);
  }
}
var w = Object.defineProperty, D = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, a = (e, t, s, m) => {
  for (var o = m > 1 ? void 0 : m ? D(t, s) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (o = (m ? p(t, s, o) : p(o)) || o);
  return m && o && w(t, s, o), o;
}, g = (e, t, s) => t.has(e) || f("Cannot " + s), r = (e, t, s) => (g(e, t, "read from private field"), s ? s.call(e) : t.get(e)), E = (e, t, s) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), u = (e, t, s) => (g(e, t, "access private method"), s), c, i, _, L, d, T, O, G;
let n = class extends y(x, "") {
  constructor() {
    super(), E(this, _), E(this, c, new B(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputLanguage",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new b());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.filter = () => !0, this._items = [], E(this, i, new W(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && r(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && r(this, i).getSelection().length > this.max
    ), this.observe(r(this, i).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(r(this, i).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    r(this, i).min = e;
  }
  get min() {
    return r(this, i).min;
  }
  set max(e) {
    r(this, i).max = e;
  }
  get max() {
    return r(this, i).max;
  }
  set selection(e) {
    r(this, i).setSelection(e), r(this, c).setModel(e);
  }
  get selection() {
    return r(this, i).getSelection();
  }
  set value(e) {
    this.selection = R(e);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return A`${u(this, _, O).call(this)} ${u(this, _, T).call(this)}`;
  }
};
c = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
L = function() {
  r(this, i).openPicker({
    filter: this.filter,
    multiple: this.max > 1
  });
};
d = function(e) {
  r(this, i).requestRemoveItem(e.unique);
};
T = function() {
  return this.max > 0 && this.selection.length >= this.max ? U : A`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${u(this, _, L)}
				label="${this.localize.term("general_choose")}"></uui-button>
		`;
};
O = function() {
  return this._items ? A`
			<uui-ref-list>
				${C(
    this._items,
    (e) => e.unique,
    (e) => u(this, _, G).call(this, e)
  )}
			</uui-ref-list>
		` : U;
};
G = function(e) {
  if (e.unique)
    return A`
			<!-- TODO: add language ref element -->
			<uui-ref-node name=${e.name} id=${e.unique} detail=${e.unique}>
				<uui-action-bar slot="actions">
					<uui-button @click=${() => u(this, _, d).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
n.styles = [
  N`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  l({ type: Number })
], n.prototype, "min", 1);
a([
  l({ type: String, attribute: "min-message" })
], n.prototype, "minMessage", 2);
a([
  l({ type: Number })
], n.prototype, "max", 1);
a([
  l({ type: String, attribute: "min-message" })
], n.prototype, "maxMessage", 2);
a([
  l({ type: Object, attribute: !1 })
], n.prototype, "filter", 2);
a([
  l({ type: Array })
], n.prototype, "selection", 1);
a([
  l()
], n.prototype, "value", 1);
a([
  v()
], n.prototype, "_items", 2);
n = a([
  P("umb-input-language")
], n);
export {
  F as UMB_APP_LANGUAGE_CONTEXT,
  J as UMB_CREATE_LANGUAGE_WORKSPACE_PATH_PATTERN,
  Q as UMB_EDIT_LANGUAGE_WORKSPACE_PATH_PATTERN,
  Z as UMB_LANGUAGE_ACCESS_WORKSPACE_CONTEXT,
  ee as UMB_LANGUAGE_COLLECTION_ALIAS,
  te as UMB_LANGUAGE_COLLECTION_REPOSITORY_ALIAS,
  ie as UMB_LANGUAGE_DETAIL_REPOSITORY_ALIAS,
  re as UMB_LANGUAGE_DETAIL_STORE_ALIAS,
  se as UMB_LANGUAGE_DETAIL_STORE_CONTEXT,
  ne as UMB_LANGUAGE_ENTITY_TYPE,
  S as UMB_LANGUAGE_ITEM_REPOSITORY_ALIAS,
  ae as UMB_LANGUAGE_ITEM_STORE_CONTEXT,
  I as UMB_LANGUAGE_PICKER_MODAL,
  oe as UMB_LANGUAGE_ROOT_ENTITY_TYPE,
  _e as UMB_LANGUAGE_ROOT_WORKSPACE_ALIAS,
  le as UMB_LANGUAGE_ROOT_WORKSPACE_PATH,
  ue as UMB_LANGUAGE_STORE_ALIAS,
  me as UMB_LANGUAGE_TABLE_COLLECTION_VIEW_ALIAS,
  Ae as UMB_LANGUAGE_WORKSPACE_ALIAS,
  he as UMB_LANGUAGE_WORKSPACE_CONTEXT,
  pe as UMB_LANGUAGE_WORKSPACE_MODAL,
  Ee as UMB_LANGUAGE_WORKSPACE_PATH,
  Oe as UmbAppLanguageContext,
  n as UmbInputLanguageElement,
  de as UmbLanguageCollectionRepository,
  Ue as UmbLanguageDetailRepository,
  ge as UmbLanguageItemRepository
};
//# sourceMappingURL=index.js.map
