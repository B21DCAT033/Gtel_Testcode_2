import { L as B, f as c, M as p } from "../manifests-ByHRH93l.js";
import { a1 as re, Y as Oe, Z as ie, a7 as Te, N as ne, B as Me, J as Ie, I as Se, Q as Ce, K as Ae, j as Ne, O as Re, k as me, D as De, E as le, ad as Le, r as ue, d as Be, P as ce, p as pe, o as Pe, V as he, W as de, au as fe, h as ye, a4 as be, i as xe, v as ge, a3 as ve, A as Ye, a2 as He, a8 as we, y as We, ab as ke, a9 as Ke, aa as Ve, x as Fe, ac as $e, m as qe, C as Xe, $ as Ge, z as ze, a5 as je, _ as Je, c as Qe, U as Ze, b as et, av as tt, a as _t, q as st, a6 as Et, ag as at, ah as ot, t as Ut, G as rt, F as Ot, g as it, a0 as Tt, l as nt, R as Mt, S as It, e as St, T as Ct, n as At, s as Nt, ae as Rt, af as mt, X as Dt, H as lt, ak as Lt, ar as ut, aj as Bt, ao as ct, ap as pt, al as Pt, am as ht, as as dt, w as ft, ai as yt, at as bt, aq as xt, an as gt, u as vt } from "../manifests-ByHRH93l.js";
import { UmbPickerInputContext as P } from "@umbraco-cms/backoffice/picker-input";
import { html as M, nothing as R, repeat as h, when as d, css as f, property as O, state as y, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as x } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as v } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as H } from "@umbraco-cms/backoffice/sorter";
import { UMB_DOCUMENT_TYPE_ENTITY_TYPE as w } from "@umbraco-cms/backoffice/document-type";
import { U as Ht } from "../document-audit-log.repository-CHm64Rly.js";
import { UmbPublicAccessModalElement as Wt } from "../public-access-modal.element-BEK_-iOD.js";
import { U as Kt, a as Vt } from "../culture-and-hostnames-modal.element-BYx6mjLk.js";
import { UmbSortChildrenOfDocumentRepository as $t } from "../sort-children-of.repository--DUFGghY.js";
import { UMB_DOCUMENT_CONFIGURATION_CONTEXT as Xt, UmbDocumentConfigurationContext as Gt } from "../document-configuration.context-DKcHlT2T.js";
import { UmbDocumentItemRepository as jt } from "../document-item.repository-DPoT_JcK.js";
import { U as Qt } from "../document-item-data-resolver-CCvZ1xDq.js";
import { U as e_ } from "../document-variant-language-picker.element-azTXCKTU.js";
import { UmbDocumentPublishingRepository as __ } from "../document-publishing.repository-5llJWdOm.js";
import { UmbDocumentRecycleBinTreeRepository as E_ } from "../document-recycle-bin-tree.repository-B7RWbMvr.js";
import "@umbraco-cms/backoffice/tree";
import { U as o_ } from "../document-reference-table.element-m5v3yKN0.js";
import { UmbDocumentReferenceRepository as r_ } from "../document-reference.repository-DvNcYEUQ.js";
import { UmbDocumentDetailRepository as i_ } from "../document-detail.repository-Dpi406xc.js";
import { U as n_ } from "../document-preview.repository-Boowp7BD.js";
import { UmbDocumentTreeRepository as I_ } from "../document-tree.repository-B7XrRxsb.js";
import { UmbDocumentUrlRepository as C_ } from "../document-url.repository-BASoG_cP.js";
import { UmbDocumentPermissionRepository as N_ } from "../document-permission.repository-CaW-5yFk.js";
const ee = "Umb.Repository.Document.CreateBlueprint", te = "Umb.Repository.Document.CultureAndHostnames", _e = "Umb.Repository.Document.PublicAccess", se = "Umb.Repository.Document.Validation", Ee = "Umb.Condition.Workspace.DocumentIsNotTrashed", ae = "Umb.Condition.Workspace.DocumentIsTrashed";
class W extends P {
  constructor(t) {
    super(t, B, c);
  }
  async openPicker(t, _) {
    const a = {
      ...t
    };
    a.pickableFilter = (r) => this.#e(r, _?.allowedContentTypes), t?.search || (a.search = {
      providerAlias: p,
      ...t?.search
    }), a.search.queryParams = {
      allowedContentTypes: _?.allowedContentTypes,
      ...t?.search?.queryParams
    }, await super.openPicker(a);
  }
  #e = (t, _) => _ && _.length > 0 ? _.map((a) => a.unique).includes(t.documentType.unique) : !0;
}
var k = Object.defineProperty, K = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, U = (e, t, _, a) => {
  for (var r = a > 1 ? void 0 : a ? K(t, _) : t, C = e.length - 1, A; C >= 0; C--)
    (A = e[C]) && (r = (a ? A(t, _, r) : A(r)) || r);
  return a && r && k(t, _, r), r;
}, N = (e, t, _) => t.has(e) || m("Cannot " + _), s = (e, t, _) => (N(e, t, "read from private field"), _ ? _.call(e) : t.get(e)), I = (e, t, _) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, _), V = (e, t, _, a) => (N(e, t, "write to private field"), t.set(e, _), _), S = (e, t, _) => (N(e, t, "access private method"), _), T, n, o, i, D, l, L, u;
let E = class extends v(
  Y
) {
  constructor() {
    super(), I(this, i), I(this, T, new H(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputDocument",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new g());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", I(this, n, !1), I(this, o, new W(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    ), this.observe(s(this, o).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(s(this, o).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    s(this, o).min = e;
  }
  get min() {
    return s(this, o).min;
  }
  set max(e) {
    s(this, o).max = e;
  }
  get max() {
    return s(this, o).max;
  }
  set selection(e) {
    s(this, o).setSelection(e), s(this, T).setModel(e);
  }
  get selection() {
    return s(this, o).getSelection();
  }
  set value(e) {
    this.selection = x(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return s(this, n);
  }
  set readonly(e) {
    V(this, n, e), s(this, n) ? s(this, T).disable() : s(this, T).enable();
  }
  render() {
    return M`${S(this, i, u).call(this)} ${S(this, i, L).call(this)}`;
  }
};
T = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
D = function() {
  s(this, o).openPicker(
    {
      hideTreeRoot: !0,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: w
      }))
    }
  );
};
l = function(e) {
  s(this, o).requestRemoveItem(e.unique);
};
L = function() {
  return this.selection.length >= this.max ? R : this.readonly && this.selection.length > 0 ? R : M`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${S(this, i, D)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}></uui-button>
			`;
};
u = function() {
  if (this._items)
    return M`
			<uui-ref-list>
				${h(
      this._items,
      (e) => e.unique,
      (e) => M`<umb-entity-item-ref
							id=${e.unique}
							.item=${e}
							?readonly=${this.readonly}
							?standalone=${this.max === 1}>
							${d(
        !this.readonly,
        () => M`
									<uui-action-bar slot="actions">
										<uui-button
											label=${this.localize.term("general_remove")}
											@click=${() => S(this, i, l).call(this, e)}></uui-button>
									</uui-action-bar>
								`
      )}
						</umb-entity-item-ref>`
    )}
			</uui-ref-list>
		`;
};
E.styles = [
  f`
			#btn-add {
				display: block;
			}

			umb-entity-item-ref[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
U([
  O({ type: Number })
], E.prototype, "min", 1);
U([
  O({ type: String, attribute: "min-message" })
], E.prototype, "minMessage", 2);
U([
  O({ type: Number })
], E.prototype, "max", 1);
U([
  O({ type: String, attribute: "max-message" })
], E.prototype, "maxMessage", 2);
U([
  O({ type: Object, attribute: !1 })
], E.prototype, "startNode", 2);
U([
  O({ type: Array })
], E.prototype, "allowedContentTypeIds", 2);
U([
  O({ type: Boolean })
], E.prototype, "showOpenButton", 2);
U([
  O({ type: String })
], E.prototype, "value", 1);
U([
  O({ type: Boolean, reflect: !0 })
], E.prototype, "readonly", 1);
U([
  y()
], E.prototype, "_items", 2);
E = U([
  b("umb-input-document")
], E);
export {
  re as IsDocumentPropertyDatasetContext,
  Oe as UMB_BULK_DUPLICATE_DOCUMENT_REPOSITORY_ALIAS,
  ie as UMB_BULK_MOVE_DOCUMENT_REPOSITORY_ALIAS,
  Te as UMB_BULK_TRASH_DOCUMENT_REPOSITORY_ALIAS,
  ne as UMB_CONTENT_MENU_ALIAS,
  Me as UMB_CREATE_BLUEPRINT_MODAL,
  Ie as UMB_CREATE_DOCUMENT_WORKSPACE_PATH_PATTERN,
  Se as UMB_CREATE_FROM_BLUEPRINT_DOCUMENT_WORKSPACE_PATH_PATTERN,
  Ce as UMB_CULTURE_AND_HOSTNAMES_MODAL,
  Ae as UMB_DOCUMENT_COLLECTION_ALIAS,
  Ne as UMB_DOCUMENT_COLLECTION_CONTEXT,
  Re as UMB_DOCUMENT_COLLECTION_REPOSITORY_ALIAS,
  Xt as UMB_DOCUMENT_CONFIGURATION_CONTEXT,
  ee as UMB_DOCUMENT_CREATE_BLUEPRINT_REPOSITORY_ALIAS,
  me as UMB_DOCUMENT_CREATE_OPTIONS_MODAL,
  te as UMB_DOCUMENT_CULTURE_AND_HOSTNAMES_REPOSITORY_ALIAS,
  De as UMB_DOCUMENT_DETAIL_MODEL_VARIANT_SCAFFOLD,
  le as UMB_DOCUMENT_DETAIL_REPOSITORY_ALIAS,
  Le as UMB_DOCUMENT_DETAIL_STORE_ALIAS,
  ue as UMB_DOCUMENT_DETAIL_STORE_CONTEXT,
  Be as UMB_DOCUMENT_ENTITY_TYPE,
  ce as UMB_DOCUMENT_GRID_COLLECTION_VIEW_ALIAS,
  Ee as UMB_DOCUMENT_IS_NOT_TRASHED_CONDITION_ALIAS,
  ae as UMB_DOCUMENT_IS_TRASHED_CONDITION_ALIAS,
  B as UMB_DOCUMENT_ITEM_REPOSITORY_ALIAS,
  pe as UMB_DOCUMENT_ITEM_STORE_CONTEXT,
  Pe as UMB_DOCUMENT_NOTIFICATIONS_MODAL,
  he as UMB_DOCUMENT_NOTIFICATIONS_MODAL_ALIAS,
  de as UMB_DOCUMENT_NOTIFICATIONS_REPOSITORY_ALIAS,
  fe as UMB_DOCUMENT_PERMISSION_REPOSITORY_ALIAS,
  c as UMB_DOCUMENT_PICKER_MODAL,
  ye as UMB_DOCUMENT_PROPERTY_DATASET_CONTEXT,
  _e as UMB_DOCUMENT_PUBLIC_ACCESS_REPOSITORY_ALIAS,
  be as UMB_DOCUMENT_PUBLISHING_REPOSITORY_ALIAS,
  xe as UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT,
  ge as UMB_DOCUMENT_PUBLISH_MODAL,
  ve as UMB_DOCUMENT_PUBLISH_MODAL_ALIAS,
  Ye as UMB_DOCUMENT_PUBLISH_WITH_DESCENDANTS_MODAL,
  He as UMB_DOCUMENT_PUBLISH_WITH_DESCENDANTS_MODAL_ALIAS,
  we as UMB_DOCUMENT_RECYCLE_BIN_REPOSITORY_ALIAS,
  We as UMB_DOCUMENT_RECYCLE_BIN_ROOT_ENTITY_TYPE,
  ke as UMB_DOCUMENT_RECYCLE_BIN_TREE_ALIAS,
  Ke as UMB_DOCUMENT_RECYCLE_BIN_TREE_REPOSITORY_ALIAS,
  Ve as UMB_DOCUMENT_RECYCLE_BIN_TREE_STORE_ALIAS,
  Fe as UMB_DOCUMENT_RECYCLE_BIN_TREE_STORE_CONTEXT,
  $e as UMB_DOCUMENT_REFERENCE_REPOSITORY_ALIAS,
  qe as UMB_DOCUMENT_ROOT_ENTITY_TYPE,
  Xe as UMB_DOCUMENT_SAVE_MODAL,
  Ge as UMB_DOCUMENT_SAVE_MODAL_ALIAS,
  ze as UMB_DOCUMENT_SCHEDULE_MODAL,
  je as UMB_DOCUMENT_SCHEDULE_MODAL_ALIAS,
  p as UMB_DOCUMENT_SEARCH_PROVIDER_ALIAS,
  Je as UMB_DOCUMENT_STORE_ALIAS,
  Qe as UMB_DOCUMENT_TABLE_COLLECTION_VIEW_ALIAS,
  Ze as UMB_DOCUMENT_TREE_ALIAS,
  et as UMB_DOCUMENT_TREE_REPOSITORY_ALIAS,
  tt as UMB_DOCUMENT_TREE_STORE_ALIAS,
  _t as UMB_DOCUMENT_TREE_STORE_CONTEXT,
  st as UMB_DOCUMENT_UNPUBLISH_MODAL,
  Et as UMB_DOCUMENT_UNPUBLISH_MODAL_ALIAS,
  at as UMB_DOCUMENT_URL_REPOSITORY_ALIAS,
  ot as UMB_DOCUMENT_URL_STORE_ALIAS,
  Ut as UMB_DOCUMENT_URL_STORE_CONTEXT,
  rt as UMB_DOCUMENT_USER_PERMISSION_CONDITION_ALIAS,
  se as UMB_DOCUMENT_VALIDATION_REPOSITORY_ALIAS,
  Ot as UMB_DOCUMENT_WORKSPACE_ALIAS,
  it as UMB_DOCUMENT_WORKSPACE_CONTEXT,
  Tt as UMB_DOCUMENT_WORKSPACE_PATH,
  nt as UMB_DUPLICATE_DOCUMENT_MODAL,
  Mt as UMB_DUPLICATE_DOCUMENT_MODAL_ALIAS,
  It as UMB_DUPLICATE_DOCUMENT_REPOSITORY_ALIAS,
  St as UMB_EDIT_DOCUMENT_WORKSPACE_PATH_PATTERN,
  Ct as UMB_MOVE_DOCUMENT_REPOSITORY_ALIAS,
  At as UMB_PUBLIC_ACCESS_MODAL,
  Nt as UMB_ROLLBACK_MODAL,
  Rt as UMB_ROLLBACK_MODAL_ALIAS,
  mt as UMB_ROLLBACK_REPOSITORY_ALIAS,
  Dt as UMB_SORT_CHILDREN_OF_DOCUMENT_REPOSITORY_ALIAS,
  lt as UMB_USER_PERMISSION_DOCUMENT_CREATE,
  Lt as UMB_USER_PERMISSION_DOCUMENT_CREATE_BLUEPRINT,
  ut as UMB_USER_PERMISSION_DOCUMENT_CULTURE_AND_HOSTNAMES,
  Bt as UMB_USER_PERMISSION_DOCUMENT_DELETE,
  ct as UMB_USER_PERMISSION_DOCUMENT_DUPLICATE,
  pt as UMB_USER_PERMISSION_DOCUMENT_MOVE,
  Pt as UMB_USER_PERMISSION_DOCUMENT_NOTIFICATIONS,
  ht as UMB_USER_PERMISSION_DOCUMENT_PERMISSIONS,
  dt as UMB_USER_PERMISSION_DOCUMENT_PUBLIC_ACCESS,
  ft as UMB_USER_PERMISSION_DOCUMENT_PUBLISH,
  yt as UMB_USER_PERMISSION_DOCUMENT_READ,
  bt as UMB_USER_PERMISSION_DOCUMENT_ROLLBACK,
  xt as UMB_USER_PERMISSION_DOCUMENT_SORT,
  gt as UMB_USER_PERMISSION_DOCUMENT_UNPUBLISH,
  vt as UMB_USER_PERMISSION_DOCUMENT_UPDATE,
  Kt as UmbCultureAndHostnamesModalElement,
  Ht as UmbDocumentAuditLogRepository,
  Gt as UmbDocumentConfigurationContext,
  Vt as UmbDocumentCultureAndHostnamesRepository,
  i_ as UmbDocumentDetailRepository,
  Qt as UmbDocumentItemDataResolver,
  jt as UmbDocumentItemRepository,
  N_ as UmbDocumentPermissionRepository,
  W as UmbDocumentPickerContext,
  W as UmbDocumentPickerInputContext,
  n_ as UmbDocumentPreviewRepository,
  __ as UmbDocumentPublishingRepository,
  E_ as UmbDocumentRecycleBinTreeRepository,
  r_ as UmbDocumentReferenceRepository,
  o_ as UmbDocumentReferenceTableElement,
  I_ as UmbDocumentTreeRepository,
  C_ as UmbDocumentUrlRepository,
  e_ as UmbDocumentVariantLanguagePickerElement,
  E as UmbInputDocumentElement,
  Wt as UmbPublicAccessModalElement,
  $t as UmbSortChildrenOfDocumentRepository,
  E as element
};
//# sourceMappingURL=index.js.map
