import { a as I, U as O } from "./entity-B4xreSYr.js";
import { UmbModalToken as g } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as v } from "@umbraco-cms/backoffice/tree";
import { UmbContextToken as c } from "@umbraco-cms/backoffice/context-api";
import { UMB_WORKSPACE_PATH_PATTERN as h } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as y } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as b } from "@umbraco-cms/backoffice/router";
import { UmbPickerInputContext as Y } from "@umbraco-cms/backoffice/picker-input";
import { html as _, repeat as C, when as x, css as L, property as p, state as w, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as D } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as k } from "@umbraco-cms/backoffice/validation";
const W = new g(v, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.MemberType"
  }
}), ae = "Umb.Repository.MemberType.Duplicate", K = "Umb.Repository.MemberType.Detail", q = "Umb.Store.MemberType.Detail", me = [
  {
    type: "repository",
    alias: K,
    name: "Member Type Detail Repository",
    api: () => import("./member-type-detail.repository-DGOrgJJe.js")
  },
  {
    type: "store",
    alias: q,
    name: "Member Type Detail Store",
    api: () => import("./member-type-detail.store-D-HFrCuh.js")
  }
], _e = new c(
  "UmbMemberTypeDetailStore"
), R = "Umb.Repository.MemberTypeItem", H = "Umb.Store.MemberTypeItem", pe = [
  {
    type: "repository",
    alias: R,
    name: "Member Type Item Repository",
    api: () => import("./member-type-item.repository-HSKZwwBE.js")
  },
  {
    type: "itemStore",
    alias: H,
    name: "Member Type Item Store",
    api: () => import("./member-type-item.store-DHI6A6V8.js")
  }
], Ee = new c("UmbMemberTypeItemStore"), z = "Umb.Repository.MemberType.Composition", Te = [
  {
    type: "repository",
    alias: z,
    name: "Member Type Composition Repository",
    api: () => import("./member-type-composition.repository-BAMbNde6.js")
  }
], Me = "Umb.Repository.MemberType.Tree", le = "Umb.Store.MemberType.Tree", ce = "Umb.Tree.MemberType", ue = new c(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "member-type"
), he = "Umb.Workspace.MemberType", P = h.generateAbsolute({
  sectionName: y,
  entityType: I
}), ye = h.generateAbsolute({
  sectionName: y,
  entityType: O
}), be = new b("create/parent/:parentEntityType/:parentUnique", P), Re = new b(
  "edit/:unique",
  P
);
class X extends Y {
  constructor(t) {
    super(t, R, W);
  }
}
var F = Object.defineProperty, G = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, a = (e, t, s, E) => {
  for (var n = E > 1 ? void 0 : E ? G(t, s) : t, M = e.length - 1, l; M >= 0; M--)
    (l = e[M]) && (n = (E ? l(t, s, n) : l(n)) || n);
  return E && n && F(t, s, n), n;
}, U = (e, t, s) => t.has(e) || A("Cannot " + s), r = (e, t, s) => (U(e, t, "read from private field"), s ? s.call(e) : t.get(e)), u = (e, t, s) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), T = (e, t, s) => (U(e, t, "access private method"), s), i, m, d, S, f, B;
let o = class extends k(
  $
) {
  constructor() {
    super(), u(this, m), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", u(this, i, new X(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && r(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && r(this, i).getSelection().length > this.max
    ), this.observe(r(this, i).selection, (e) => this.value = e.join(",")), this.observe(r(this, i).selectedItems, (e) => this._items = e);
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
    r(this, i).setSelection(e);
  }
  get selection() {
    return r(this, i).getSelection();
  }
  set value(e) {
    this.selection = D(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return _` ${T(this, m, S).call(this)} ${T(this, m, f).call(this)} `;
  }
};
i = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
d = function() {
  r(this, i).openPicker({
    hideTreeRoot: !0
  });
};
S = function() {
  if (this._items)
    return _`
			<uui-ref-list>
				${C(
      this._items,
      (e) => e.unique,
      (e) => T(this, m, B).call(this, e)
    )}
			</uui-ref-list>
		`;
};
f = function() {
  if (!(this.max === 1 && this.selection.length >= this.max))
    return _`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${T(this, m, d)}
				label="${this.localize.term("general_choose")}"
				>${this.localize.term("general_choose")}</uui-button
			>
		`;
};
B = function(e) {
  if (e.unique)
    return _`
			<uui-ref-node-document-type name=${this.localize.string(e.name)}>
				${x(e.icon, () => _`<umb-icon slot="icon" name=${e.icon}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => r(this, i).requestRemoveItem(e.unique)}
						label="Remove Member Type ${e.name}"
						>${this.localize.term("general_remove")}</uui-button
					>
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
o.styles = [
  L`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  p({ type: Number })
], o.prototype, "min", 1);
a([
  p({ type: String, attribute: "min-message" })
], o.prototype, "minMessage", 2);
a([
  p({ type: Number })
], o.prototype, "max", 1);
a([
  p({ type: String, attribute: "min-message" })
], o.prototype, "maxMessage", 2);
a([
  p({ type: String })
], o.prototype, "value", 1);
a([
  w()
], o.prototype, "_items", 2);
o = a([
  N("umb-input-member-type")
], o);
export {
  X as U,
  o as a,
  ae as b,
  K as c,
  q as d,
  _e as e,
  R as f,
  H as g,
  Ee as h,
  z as i,
  Me as j,
  le as k,
  ce as l,
  he as m,
  ue as n,
  P as o,
  ye as p,
  be as q,
  Re as r,
  W as s,
  me as t,
  pe as u,
  Te as v
};
//# sourceMappingURL=input-member-type.element-9xTb0eJi.js.map
