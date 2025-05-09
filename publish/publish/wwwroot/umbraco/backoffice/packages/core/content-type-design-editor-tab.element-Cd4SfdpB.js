import { U as pt, b as ut, a as Ut } from "./content-type-move-root-containers-into-first-tab-helper.class-BXhoyS1X.js";
import { UmbContextBase as It } from "@umbraco-cms/backoffice/class-api";
import { UmbStringState as ot } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/id";
import { generateAlias as Mt } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/extension-registry";
import { css as L, property as y, state as d, customElement as F, nothing as _, html as n, repeat as Z, when as q, ifDefined as At } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y, umbFocus as zt } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as K } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as dt } from "@umbraco-cms/backoffice/sorter";
import { UMB_WORKSPACE_MODAL as kt } from "@umbraco-cms/backoffice/workspace";
import { U as xt, a as Ht } from "./content-type-property-structure-helper.class-CrCAJBRs.js";
import { UmbTextStyles as j } from "@umbraco-cms/backoffice/style";
import { UMB_EDIT_PROPERTY_TYPE_WORKSPACE_PATH_PATTERN as qt, UMB_PROPERTY_TYPE_WORKSPACE_MODAL as nt, UMB_CREATE_PROPERTY_TYPE_WORKSPACE_PATH_PATTERN as Rt } from "@umbraco-cms/backoffice/property-type";
import { umbConfirmModal as ht } from "@umbraco-cms/backoffice/modal";
import { UmbDataTypeDetailRepository as Dt } from "@umbraco-cms/backoffice/data-type";
import { UUIBlinkKeyframes as Wt, UUIBlinkAnimationValue as Nt } from "@umbraco-cms/backoffice/external/uui";
class Bt extends It {
  constructor(e) {
    super(e, xt), this.#t = new ot(void 0), this.alias = this.#t.asObservable(), this.#e = new ot(void 0), this.label = this.#e.asObservable();
  }
  #t;
  #e;
  setAlias(e) {
    this.#t.setValue(e);
  }
  getAlias() {
    return this.#t.getValue();
  }
  setLabel(e) {
    this.#e.setValue(e);
  }
  getLabel() {
    return this.#e.getValue();
  }
  destroy() {
    super.destroy(), this.#t.destroy(), this.#e.destroy();
  }
}
var Gt = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, lt = (t) => {
  throw TypeError(t);
}, m = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Vt(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Gt(e, r, i), i;
}, tt = (t, e, r) => e.has(t) || lt("Cannot " + r), S = (t, e, r) => (tt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), E = (t, e, r) => e.has(t) ? lt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), k = (t, e, r, o) => (tt(t, e, "write to private field"), e.set(t, r), r), l = (t, e, r) => (tt(t, e, "access private method"), r), D, et, W, V, x, h, ct, X, yt, N, _t, gt, mt, vt, ft;
let c = class extends Y {
  constructor() {
    super(...arguments), E(this, h), E(this, D, new Bt(this)), E(this, et, new Dt(this)), E(this, W), E(this, V), this.sortModeActive = !1, this._aliasLocked = !0, E(this, x, !0);
  }
  set propertyStructureHelper(t) {
    t !== this._propertyStructureHelper && (this._propertyStructureHelper = t, l(this, h, X).call(this));
  }
  get propertyStructureHelper() {
    return this._propertyStructureHelper;
  }
  get property() {
    return this._property;
  }
  set property(t) {
    const e = this._property;
    t !== e && (this._property = t, S(this, D).setAlias(t?.alias), S(this, D).setLabel(t?.name), l(this, h, ct).call(this, this._property?.id), l(this, h, X).call(this), l(this, h, gt).call(this, this._property?.dataType?.unique), this.requestUpdate("property", e));
  }
  render() {
    return this._inherited ? this.renderInheritedProperty() : this.renderEditableProperty();
  }
  renderInheritedProperty() {
    if (this.property)
      return this.sortModeActive ? this.renderSortableProperty() : n`
				<div id="header">
					<b>${this.property.name}</b>
					<i>${this.property.alias}</i>
					<p>${this.property.description}</p>
				</div>
				<div id="editor">
					${this.renderPropertyTags()}
					${this._inherited ? n`<uui-tag look="default" class="inherited">
								<uui-icon name="icon-merge"></uui-icon>
								<span
									>${this.localize.term("contentTypeEditor_inheritedFrom")}
									<a href=${this.editContentTypePath + "edit/" + this._inheritedContentTypeId}>
										${this._inheritedContentTypeName ?? "??"}
									</a>
								</span>
							</uui-tag>` : _}
				</div>
			`;
  }
  renderEditableProperty() {
    if (!(!this.property || !this.editPropertyTypePath))
      return this.sortModeActive ? this.renderSortableProperty() : n`
				<div id="header">
					<uui-input
						name="label"
						id="label-input"
						placeholder=${this.localize.term("placeholders_label")}
						label="label"
						.value=${this.property.name}
						@input=${l(this, h, ft)}></uui-input>
					${this.renderPropertyAlias()}
					<slot name="action-menu"></slot>
					<p>
						<uui-textarea
							label="description"
							name="description"
							id="description-input"
							placeholder=${this.localize.term("placeholders_enterDescription")}
							.value=${this.property.description}
							@input=${(t) => {
        t.target && l(this, h, N).call(this, "description", t.target.value);
      }}
							auto-height></uui-textarea>
					</p>
				</div>
				<uui-button
					id="editor"
					look="secondary"
					label=${this.localize.term("contentTypeEditor_editorSettings")}
					href=${this.editPropertyTypePath + qt.generateLocal({ unique: this.property.id })}>
					${this.renderPropertyTags()}
					<uui-action-bar>
						<uui-button label="${this.localize.term("actions_delete")}" @click="${l(this, h, mt)}">
							<uui-icon name="delete"></uui-icon>
						</uui-button>
					</uui-action-bar>
				</uui-button>
			`;
  }
  renderSortableProperty() {
    if (this.property)
      return n`
			<div class="sortable">
				<uui-icon name="icon-navigation"></uui-icon>
				<span>${this.property.name}</span>
				<span style="color: var(--uui-color-disabled-contrast)">(${this.property.alias})</span>
			</div>
			<uui-input
				type="number"
				?disabled=${this._inherited}
				label="sort order"
				@change=${(t) => l(this, h, yt).call(this, { sortOrder: parseInt(t.target.value) ?? 0 })}
				.value=${this.property.sortOrder ?? 0}></uui-input>
		`;
  }
  renderPropertyAlias() {
    if (this.property)
      return n`
			<uui-input-lock
				name="alias"
				id="alias-input"
				label=${this.localize.term("placeholders_enterAlias")}
				placeholder=${this.localize.term("placeholders_enterAlias")}
				.value=${this.property.alias}
				?locked=${this._aliasLocked}
				@input=${l(this, h, vt)}
				@lock-change=${l(this, h, _t)}>
			</uui-input-lock>
		`;
  }
  renderPropertyTags() {
    return this.property ? n`<div class="types">
					${this.property.dataType?.unique ? n`<uui-tag look="default">${this._dataTypeName}</uui-tag>` : _}
					${this.property.variesByCulture ? n`<uui-tag look="default">
								<uui-icon name="icon-shuffle"></uui-icon> ${this.localize.term("contentTypeEditor_cultureVariantLabel")}
							</uui-tag>` : _}
					${this.property.appearance?.labelOnTop == !0 ? n`<uui-tag look="default">
								<span>${this.localize.term("contentTypeEditor_displaySettingsLabelOnTop")}</span>
							</uui-tag>` : _}
					${this.property.validation.mandatory === !0 ? n`<uui-tag look="default">
								<span>* ${this.localize.term("general_mandatory")}</span>
							</uui-tag>` : _}
					${this.property.visibility?.memberCanView === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-eye"></uui-icon> ${this.localize.term("contentTypeEditor_showOnMemberProfile")}
							</uui-tag>` : _}
					${this.property.visibility?.memberCanEdit === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-edit"></uui-icon> ${this.localize.term("contentTypeEditor_memberCanEdit")}
							</uui-tag>` : _}
					${this.property.isSensitive === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-lock"></uui-icon> ${this.localize.term("contentTypeEditor_isSensitiveData")}
							</uui-tag>` : _}
				</div>` : _;
  }
};
D = /* @__PURE__ */ new WeakMap();
et = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
ct = function(t) {
  t !== S(this, V) && (k(this, V, t), S(this, D).getAlias() && k(this, x, !1));
};
X = async function() {
  this._propertyStructureHelper && this._property && this.observe(
    await this._propertyStructureHelper.contentTypeOfProperty(this._property.id),
    (t) => {
      this._inherited = this._propertyStructureHelper?.getStructureManager()?.getOwnerContentTypeUnique() !== t?.unique, this._inheritedContentTypeId = t?.unique, this._inheritedContentTypeName = t?.name;
    },
    "observeIsOwnerProperty"
  );
};
yt = function(t) {
  !this._property || !this._propertyStructureHelper || this._propertyStructureHelper.partialUpdateProperty(this._property.id, t);
};
N = function(t, e) {
  if (!this._property || !this._propertyStructureHelper) return;
  const r = {};
  r[t] = e === null ? void 0 : e, this._propertyStructureHelper.partialUpdateProperty(this._property.id, r);
};
_t = function(t) {
  !this.property?.alias && t.target.locked ? k(this, x, !0) : k(this, x, !1), this._aliasLocked = !this._aliasLocked, this._aliasLocked || t.target?.focus();
};
gt = async function(t) {
  if (!t) {
    this._dataTypeName = void 0, k(this, W, void 0);
    return;
  }
  t !== S(this, W) && (k(this, W, t), S(this, et).requestByUnique(t).then((e) => this._dataTypeName = e?.data?.name));
};
mt = async function(t) {
  t.preventDefault(), t.stopImmediatePropagation(), !(!this._property || !this._property.id) && (await ht(this, {
    headline: `${this.localize.term("actions_delete")} property`,
    content: n`<umb-localize key="contentTypeEditor_confirmDeletePropertyMessage" .args=${[this._property.name ?? this._property.id]}>Are you sure you want to delete the property <strong>${this._property.name ?? this._property.id}</strong></umb-localize></div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  }), this._propertyStructureHelper?.removeProperty(this._property.id));
};
vt = function(t) {
  l(this, h, N).call(this, "alias", t.target.value.toString());
};
ft = function(t) {
  const e = t.target.value.toString();
  S(this, x) && l(this, h, N).call(this, "alias", Mt(e ?? "")), l(this, h, N).call(this, "name", e);
};
c.styles = [
  j,
  L`
			:host(:not([sort-mode-active])) {
				display: grid;
				grid-template-columns: 200px auto;
				column-gap: var(--uui-size-layout-2);
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-layout-1) 0;
				container-type: inline-size;
			}

			:host > div {
				grid-column: span 2;
			}

			@container (width > 600px) {
				:host(:not([orientation='vertical'])) > div {
					grid-column: span 1;
				}
			}

			:host(:first-of-type) {
				padding-top: 0;
			}
			:host(:last-of-type) {
				border-bottom: none;
			}

			:host([sort-mode-active]) {
				position: relative;
				display: flex;
				padding: 0;
				margin-bottom: var(--uui-size-3);
			}

			:host([sort-mode-active]:last-of-type) {
				margin-bottom: 0;
			}

			:host([sort-mode-active]:not([_inherited])) {
				cursor: grab;
			}

			:host([sort-mode-active]) .sortable {
				flex: 1;
				display: flex;
				align-items: center;
				padding: 0 var(--uui-size-3);
				gap: var(--uui-size-3);
			}
			:host([sort-mode-active][_inherited]) .sortable {
				color: var(--uui-color-disabled-contrast);
			}
			:host([sort-mode-active]:not([_inherited])) .sortable {
				background-color: var(--uui-color-divider);
			}

			:host([sort-mode-active]) uui-input {
				max-width: 75px;
			}

			/* Placeholder style, used when property is being dragged.*/
			:host(.--umb-sorter-placeholder) > * {
				visibility: hidden;
			}

			:host(.--umb-sorter-placeholder)::after {
				content: '';
				inset: 0;
				position: absolute;
				border: 1px dashed var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
			}

			p {
				margin-bottom: 0;
			}

			#header {
				position: sticky;
				top: var(--uui-size-space-4);
				height: min-content;
			}

			#editor {
				position: relative;
			}
			#alias-input,
			#label-input,
			#description-input {
				width: 100%;
			}

			#alias-input {
				border-color: transparent;
				background: var(--uui-color-surface);
			}

			#label-input {
				font-weight: bold; /* TODO: UUI Input does not support bold text yet */
				--uui-input-border-color: transparent;
			}
			#label-input input {
				font-weight: bold;
				--uui-input-border-color: transparent;
			}

			#description-input {
				--uui-textarea-border-color: transparent;
				font-weight: 0.5rem; /* TODO: Cant change font size of UUI textarea yet */
			}

			.types > div uui-icon,
			.inherited uui-icon {
				vertical-align: sub;
				margin-right: var(--uui-size-space-1);
			}

			.inherited {
				position: absolute;
				top: var(--uui-size-space-2);
				right: var(--uui-size-space-2);
			}

			.types {
				position: absolute;
				top: var(--uui-size-space-2);
				left: var(--uui-size-space-2);
				display: flex;
				flex-flow: wrap;
				gap: var(--uui-size-space-2);
			}

			#editor uui-action-bar {
				position: absolute;
				top: var(--uui-size-space-2);
				right: var(--uui-size-space-2);
				opacity: 0;
			}

			#editor:hover uui-action-bar,
			#editor:focus uui-action-bar,
			#editor:focus-within uui-action-bar {
				opacity: 1;
			}

			a {
				color: inherit;
			}

			:host([drag-placeholder]) {
				opacity: 0.5;
			}
			:host([drag-placeholder]) uui-input {
				visibility: hidden;
			}
		`
];
m([
  y({ attribute: !1 })
], c.prototype, "propertyStructureHelper", 1);
m([
  y({ type: Object })
], c.prototype, "property", 1);
m([
  y({ type: Boolean, reflect: !0, attribute: "sort-mode-active" })
], c.prototype, "sortModeActive", 2);
m([
  y({ attribute: !1 })
], c.prototype, "editContentTypePath", 2);
m([
  y({ type: Boolean, reflect: !0, attribute: "_inherited" })
], c.prototype, "_inherited", 2);
m([
  d()
], c.prototype, "_inheritedContentTypeId", 2);
m([
  d()
], c.prototype, "_inheritedContentTypeName", 2);
m([
  y({ type: String, reflect: !1 })
], c.prototype, "editPropertyTypePath", 2);
m([
  d()
], c.prototype, "_dataTypeName", 2);
m([
  d()
], c.prototype, "_aliasLocked", 2);
c = m([
  F("umb-content-type-design-editor-property")
], c);
var Lt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, bt = (t) => {
  throw TypeError(t);
}, w = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Ft(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Lt(e, r, i), i;
}, $t = (t, e, r) => e.has(t) || bt("Cannot " + r), u = (t, e, r) => ($t(t, e, "read from private field"), r ? r.call(t) : e.get(t)), B = (t, e, r) => e.has(t) ? bt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), st = (t, e, r, o) => ($t(t, e, "write to private field"), e.set(t, r), r), I, M, A, b;
const Yt = {
  getUniqueOfElement: (t) => t.getAttribute("data-umb-property-id"),
  getUniqueOfModel: (t) => t.id,
  identifier: "content-type-property-sorter",
  itemSelector: "umb-content-type-design-editor-property",
  //disabledItemSelector: '[inherited]',
  //TODO: Set the property list (sorter wrapper) to inherited, if its inherited
  // This is because we don't want to move local properties into an inherited group container.
  // Or maybe we do, but we still need to check if the group exists locally, if not, then it needs to be created before we move a property into it.
  // TODO: Fix bug where a local property turn into an inherited when moved to a new group container.
  containerSelector: "#property-list"
};
let f = class extends Y {
  constructor() {
    super(), B(this, I, new dt(this, {
      ...Yt,
      onChange: ({ model: t }) => {
        this._properties = t;
      },
      onContainerChange: ({ item: t }) => {
        if (this._containerId === void 0)
          throw new Error("ContainerId is not set");
        u(this, b).partialUpdateProperty(t.id, {
          container: this._containerId ? { id: this._containerId } : null
        });
      },
      onEnd: ({ item: t }) => {
        if (this._containerId === void 0)
          throw new Error("ContainerId is not set.");
        const e = this._properties, r = e.findIndex((a) => a.id === t.id);
        if (r === -1) return;
        let o = -1;
        r > 0 && e.length > 0 && (o = e[r - 1].sortOrder), u(this, b).partialUpdateProperty(t.id, {
          sortOrder: ++o
        });
        let i = r + 1, s;
        for (; (s = e[i]) !== void 0 && s.sortOrder <= o; )
          u(this, b).partialUpdateProperty(s.id, {
            sortOrder: ++o
          }), i++;
      }
    })), B(this, M), B(this, A), B(this, b, new Ht(this)), this._properties = [], u(this, I).disable(), this.consumeContext(pt, (t) => {
      this.observe(
        t.isSorting,
        (e) => {
          this._sortModeActive = e, e ? u(this, I).enable() : u(this, I).disable();
        },
        "_observeIsSorting"
      );
    }), this.consumeContext(ut, async (t) => {
      u(this, b).setStructureManager(t.structure), this._ownerContentTypeUnique = t.structure.getOwnerContentTypeUnique(), this.createPropertyTypeWorkspaceRoutes();
    }), this.observe(u(this, b).propertyStructure, (t) => {
      this._properties = t, u(this, I).setModel(this._properties);
    });
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(t) {
    t !== this._containerId && (this._containerId = t, this.createPropertyTypeWorkspaceRoutes(), u(this, b).setContainerId(t), u(this, M)?.setUniquePathValue("container-id", t === null ? "root" : t), u(this, A)?.setUniquePathValue("container-id", t === null ? "root" : t));
  }
  createPropertyTypeWorkspaceRoutes() {
    !this._ownerContentTypeUnique || this._containerId === void 0 || (u(this, M)?.destroy(), st(this, M, new K(
      this,
      nt,
      "addPropertyModal"
    ).addUniquePaths(["container-id"]).addAdditionalPath("add-property/:sortOrder").onSetup(async (t) => {
      if (!this._ownerContentTypeUnique || this._containerId === void 0) return !1;
      const e = {};
      if (t.sortOrder !== void 0) {
        let r = parseInt(t.sortOrder);
        r === -1 && (r = Math.max(...this._properties.map((o) => o.sortOrder), -1) + 1), e.sortOrder = r;
      }
      return { data: { contentTypeUnique: this._ownerContentTypeUnique, preset: e } };
    }).observeRouteBuilder((t) => {
      this._newPropertyPath = t({ sortOrder: "-1" }) + Rt.generateLocal({
        containerUnique: this._containerId
      });
    })), this._containerId !== void 0 && u(this, M)?.setUniquePathValue(
      "container-id",
      this._containerId === null ? "root" : this._containerId
    ), u(this, A)?.destroy(), st(this, A, new K(
      this,
      nt,
      "editPropertyModal"
    ).addUniquePaths(["container-id"]).addAdditionalPath("edit-property").onSetup(async () => !this._ownerContentTypeUnique || this._containerId === void 0 ? !1 : { data: { contentTypeUnique: this._ownerContentTypeUnique, preset: void 0 } }).observeRouteBuilder((t) => {
      this._editPropertyTypePath = t(null);
    })), this._containerId !== void 0 && u(this, A)?.setUniquePathValue(
      "container-id",
      this._containerId === null ? "root" : this._containerId
    ));
  }
  render() {
    return this._ownerContentTypeUnique ? n`
					<div id="property-list" ?sort-mode-active=${this._sortModeActive}>
						${Z(
      this._properties,
      (t) => t.id,
      (t) => n`
									<umb-content-type-design-editor-property
										data-umb-property-id=${t.id}
										.editContentTypePath=${this.editContentTypePath}
										.editPropertyTypePath=${this._editPropertyTypePath}
										?sort-mode-active=${this._sortModeActive}
										.propertyStructureHelper=${u(this, b)}
										.property=${t}>
									</umb-content-type-design-editor-property>
								`
    )}
					</div>

					${q(
      !this._sortModeActive,
      () => n`
							<uui-button
								id="btn-add"
								href=${At(this._newPropertyPath)}
								label=${this.localize.term("contentTypeEditor_addProperty")}
								look="placeholder"></uui-button>
						`
    )}
				` : "";
  }
};
I = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
f.styles = [
  j,
  L`
			#btn-add {
				width: 100%;
				--uui-button-height: var(--uui-size-14);
			}

			#property-list[sort-mode-active]:not(:has(umb-content-type-design-editor-property)) {
				/* Some height so that the sorter can target the area if the group is empty*/
				min-height: var(--uui-size-layout-1);
			}
		`
];
w([
  y({ type: String, attribute: "container-id", reflect: !1 })
], f.prototype, "containerId", 1);
w([
  y({ attribute: !1 })
], f.prototype, "editContentTypePath", 2);
w([
  d()
], f.prototype, "_properties", 2);
w([
  d()
], f.prototype, "_ownerContentTypeUnique", 2);
w([
  d()
], f.prototype, "_newPropertyPath", 2);
w([
  d()
], f.prototype, "_editPropertyTypePath", 2);
w([
  d()
], f.prototype, "_sortModeActive", 2);
f = w([
  F("umb-content-type-design-editor-properties")
], f);
var Kt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, Pt = (t) => {
  throw TypeError(t);
}, P = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Xt(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Kt(e, r, i), i;
}, Jt = (t, e, r) => e.has(t) || Pt("Cannot " + r), Qt = (t, e, r) => e.has(t) ? Pt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), z = (t, e, r) => (Jt(t, e, "access private method"), r), C, J, Tt, Ct, wt, Ot;
let g = class extends Y {
  constructor() {
    super(...arguments), Qt(this, C), this.sortModeActive = !1;
  }
  set group(t) {
    t !== this._group && (this._group = t, this._groupId = t?.id, z(this, C, J).call(this));
  }
  get group() {
    return this._group;
  }
  set groupStructureHelper(t) {
    t !== this._groupStructureHelper && (this._groupStructureHelper = t, z(this, C, J).call(this));
  }
  get groupStructureHelper() {
    return this._groupStructureHelper;
  }
  _singleValueUpdate(t, e) {
    if (!this._groupStructureHelper || !this.group) return;
    const r = {};
    r[t] = e, this._groupStructureHelper.partialUpdateContainer(this.group.id, r);
  }
  render() {
    return this._inherited === void 0 || !this._groupId ? _ : n`
			<uui-box>
				${z(this, C, Ot).call(this)}
				<umb-content-type-design-editor-properties
					.editContentTypePath=${this.editContentTypePath}
					.containerId=${this._groupId}></umb-content-type-design-editor-properties>
			</uui-box>
		`;
  }
};
C = /* @__PURE__ */ new WeakSet();
J = function() {
  this.groupStructureHelper && this.group && (this.group.name ? this.observe(
    this.groupStructureHelper.containersByNameAndType(this.group.name, "Group"),
    (t) => {
      const e = t.find((O) => this.groupStructureHelper.isOwnerChildContainer(O.id)), r = !!e, o = r && t.length === 1, i = this._hasOwnerContainer, s = this._inherited, a = this._inheritedFrom;
      this._hasOwnerContainer = r, this._inherited = !o, this._inheritedFrom = t.filter((O) => O.id !== e?.id).map((O) => this.groupStructureHelper.getContentTypeOfContainer(O.id)).filter((O) => O !== void 0), this.requestUpdate("_hasOwnerContainer", i), this.requestUpdate("_inherited", s), this.requestUpdate("_inheritedFrom", a);
    },
    "observeGroupContainers"
  ) : (this._inherited = !1, this._hasOwnerContainer = !0, this.removeUmbControllerByAlias("observeGroupContainers")));
};
Tt = function(t) {
  if (!this.groupStructureHelper || !this._group) return;
  let e = t.target.value;
  const r = this.groupStructureHelper.getStructureManager().makeContainerNameUniqueForOwnerContentType(this._group.id, e, "Group", this._group.parent?.id ?? null);
  r && (e = r), this._singleValueUpdate("name", e), t.target.value = e;
};
Ct = function(t) {
  if (!this.groupStructureHelper || !this._group) return;
  if (t.target.value === "") {
    const r = this.groupStructureHelper.getStructureManager().makeEmptyContainerName(this._group.id, "Group", this._group.parent?.id ?? null);
    this._singleValueUpdate("name", r), t.target.value = r;
  }
};
wt = async function(t) {
  t.preventDefault(), t.stopImmediatePropagation(), !(!this.groupStructureHelper || !this._group) && (await ht(this, {
    headline: `${this.localize.term("actions_delete")} group`,
    content: n`<umb-localize key="contentTypeEditor_confirmDeleteGroupMessage" .args=${[
      this._group.name ?? this._group.id
    ]}>
					Are you sure you want to delete the group <strong>${this._group.name ?? this._group.id}</strong>
				</umb-localize>
				</div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  }), this.groupStructureHelper.removeContainer(this._group.id));
};
Ot = function() {
  return n`
			<div slot="header" class="drag-handle">
				<div>
					${q(
    this.sortModeActive && this._hasOwnerContainer,
    () => n`<uui-icon name="icon-navigation"></uui-icon>`
  )}
					<uui-input
						id="group-name"
						label=${this.localize.term("contentTypeEditor_group")}
						placeholder=${this.localize.term("placeholders_entername")}
						.value=${this._group.name}
						?disabled=${!this._hasOwnerContainer}
						@blur=${z(this, C, Ct)}
						@change=${z(this, C, Tt)}
						${this._group.name === "" ? zt() : _}
						auto-width></uui-input>
				</div>
			</div>
			<div slot="header-actions">
				${q(
    this._hasOwnerContainer === !1 && this._inheritedFrom,
    () => n`
						<uui-tag look="default" class="inherited">
							<uui-icon name="icon-merge"></uui-icon>
							<span
								>${this.localize.term("contentTypeEditor_inheritedFrom")}
								${Z(
      this._inheritedFrom,
      (t) => t.unique,
      (t) => n`
										<a href=${this.editContentTypePath + "edit/" + t.unique}>${t.name}</a>
									`
    )}
							</span>
						</uui-tag>
					`
  )}
				${q(
    !this._inherited && !this.sortModeActive,
    () => n`
						<uui-button compact label=${this.localize.term("actions_delete")} @click=${z(this, C, wt)}>
							<uui-icon name="delete"></uui-icon>
						</uui-button>
					`
  )}
				${q(
    this.sortModeActive,
    () => n`
						<uui-input
							type="number"
							label=${this.localize.term("sort_sortOrder")}
							.value=${this.group.sortOrder.toString()}
							?disabled=${!this._hasOwnerContainer}
							@change=${(t) => this._singleValueUpdate("sortOrder", parseInt(t.target.value) ?? 0)}></uui-input>
					`
  )}
			</div>
		`;
};
g.styles = [
  j,
  Wt,
  L`
			:host {
				position: relative;
			}

			:host([drag-placeholder]) {
				opacity: 0.5;
			}

			:host::before,
			:host::after {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: var(--uui-border-radius);
				opacity: 0;
				transition:
					opacity 60ms linear 1ms,
					border-color,
					10ms;
			}

			:host::after {
				display: block;
				z-index: 1;
				border: 2px solid transparent;
			}

			:host([drag-placeholder])::after {
				opacity: 1;
				border-color: var(--uui-color-interactive-emphasis);
				animation: ${Nt};
			}
			:host([drag-placeholder])::before {
				background-color: var(--uui-color-interactive-emphasis);
				opacity: 0.12;
			}

			:host([drag-placeholder]) uui-box {
				--uui-box-default-padding: 0;
			}
			:host([drag-placeholder]) div[slot='header'],
			:host([drag-placeholder]) div[slot='header-actions'] {
				transition: opacity 60ms linear 1ms;
				opacity: 0;
			}
			:host([drag-placeholder]) umb-content-type-design-editor-properties {
				visibility: hidden;
				display: none;
			}

			uui-box {
				--uui-box-header-padding: 0;
			}

			div[slot='header'] {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				cursor: grab;
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
			}

			div[slot='header'] > div {
				display: flex;
				align-items: center;
				gap: var(--uui-size-3);
				width: 100%;
			}

			#group-name {
				--uui-input-border-color: transparent;
				min-width: 200px;
			}

			uui-input[type='number'] {
				max-width: 75px;
			}

			.inherited uui-icon {
				vertical-align: sub;
			}

			div[slot='header-actions'] {
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
			}
		`
];
P([
  y({ attribute: !1 })
], g.prototype, "group", 1);
P([
  y({ attribute: !1 })
], g.prototype, "groupStructureHelper", 1);
P([
  y({ type: Boolean, attribute: "sort-mode-active", reflect: !0 })
], g.prototype, "sortModeActive", 2);
P([
  y({ attribute: !1 })
], g.prototype, "editContentTypePath", 2);
P([
  d()
], g.prototype, "_groupId", 2);
P([
  d()
], g.prototype, "_hasOwnerContainer", 2);
P([
  d()
], g.prototype, "_inherited", 2);
P([
  d()
], g.prototype, "_inheritedFrom", 2);
g = P([
  F("umb-content-type-design-editor-group")
], g);
var Zt = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, St = (t) => {
  throw TypeError(t);
}, H = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? jt(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (o ? a(e, r, i) : a(i)) || i);
  return o && i && Zt(e, r, i), i;
}, rt = (t, e, r) => e.has(t) || St("Cannot " + r), p = (t, e, r) => (rt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), U = (t, e, r) => e.has(t) ? St("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), at = (t, e, r, o) => (rt(t, e, "write to private field"), e.set(t, r), r), te = (t, e, r) => (rt(t, e, "access private method"), r), R, G, T, v, it, Q, Et;
const ee = {
  getUniqueOfElement: (t) => t.group?.id,
  getUniqueOfModel: (t) => t.id,
  // TODO: Make specific to the current owner document. [NL]
  identifier: "content-type-container-sorter",
  itemSelector: "umb-content-type-design-editor-group",
  handleSelector: ".drag-handle",
  containerSelector: ".container-list"
};
let $ = class extends Y {
  constructor() {
    super(), U(this, Q), U(this, R, new dt(this, {
      ...ee,
      onChange: ({ model: t }) => {
        this._groups = t;
      },
      onEnd: ({ item: t }) => {
        const e = this._groups, r = e.findIndex((a) => a.id === t.id);
        if (r === -1) return;
        let o = -1;
        r > 0 && e.length > 0 && (o = e[r - 1].sortOrder), p(this, v).partialUpdateContainer(t.id, {
          sortOrder: ++o
        });
        let i = r + 1, s;
        for (; (s = e[i]) !== void 0 && s.sortOrder <= o; )
          p(this, v).partialUpdateContainer(s.id, {
            sortOrder: ++o
          }), i++;
      }
    })), U(this, G), U(this, T), this._groups = [], this._hasProperties = !1, U(this, v, new Ut(this)), U(this, it, () => {
      const t = this._groups.length, e = t === 0 ? 0 : this._groups[t - 1].sortOrder + 1;
      p(this, v).addContainer(p(this, T), e);
    }), this.consumeContext(ut, (t) => {
      p(this, v).setStructureManager(t.structure);
      const e = t.getEntityType();
      p(this, G)?.destroy(), at(this, G, new K(this, kt).addAdditionalPath(e).onSetup(async () => ({ data: { entityType: e, preset: {} } })).observeRouteBuilder((r) => {
        this._editContentTypePath = r({});
      }));
    }), this.consumeContext(pt, (t) => {
      this.observe(
        t.isSorting,
        (e) => {
          this._sortModeActive = e, e ? p(this, R).enable() : p(this, R).disable();
        },
        "_observeIsSorting"
      );
    }), this.observe(
      p(this, v).mergedContainers,
      (t) => {
        this._groups = t, p(this, R).setModel(this._groups);
      },
      null
    ), this.observe(
      p(this, v).hasProperties,
      (t) => {
        this._hasProperties = t, this.requestUpdate("_hasProperties");
      },
      null
    );
  }
  get containerId() {
    return p(this, T);
  }
  set containerId(t) {
    const e = p(this, T);
    t !== p(this, T) && (at(this, T, t), p(this, v).setContainerId(t), this.requestUpdate("containerId", e));
  }
  render() {
    return n`
			${p(this, T) ? n`
							<uui-box class="${this._hasProperties ? "" : "opaque"}">
								<umb-content-type-design-editor-properties
									.containerId=${this.containerId}></umb-content-type-design-editor-properties>
							</uui-box>
						` : _}

				<div class="container-list" ?sort-mode-active=${this._sortModeActive}>
					${Z(
      this._groups,
      (t) => t.id,
      (t) => n`
							<umb-content-type-design-editor-group
								?sort-mode-active=${this._sortModeActive}
								.editContentTypePath=${this._editContentTypePath}
								.group=${t}
								.groupStructureHelper=${p(this, v)}>
							</umb-content-type-design-editor-group>
						`
    )}
				</div>
				${te(this, Q, Et).call(this)}
			</div>
		`;
  }
};
R = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
Q = /* @__PURE__ */ new WeakSet();
Et = function() {
  if (!this._sortModeActive)
    return n`
			<uui-button
				id="btn-add"
				label=${this.localize.term("contentTypeEditor_addGroup")}
				look="placeholder"
				@click=${p(this, it)}></uui-button>
		`;
};
$.styles = [
  L`
			#btn-add {
				width: 100%;
				--uui-button-height: var(--uui-size-24);
			}

			uui-box,
			umb-content-type-design-editor-group {
				margin-bottom: var(--uui-size-layout-1);
			}
			uui-box.opaque {
				background-color: transparent;
				border-color: transparent;
			}

			.container-list {
				display: grid;
				gap: 10px;
			}

			#convert-to-tab {
				margin-bottom: var(--uui-size-layout-1);
				display: flex;
			}
		`
];
H([
  y({ type: String })
], $.prototype, "containerId", 1);
H([
  d()
], $.prototype, "_groups", 2);
H([
  d()
], $.prototype, "_hasProperties", 2);
H([
  d()
], $.prototype, "_sortModeActive", 2);
H([
  d()
], $.prototype, "_editContentTypePath", 2);
$ = H([
  F("umb-content-type-design-editor-tab")
], $);
const be = $;
export {
  $ as UmbContentTypeDesignEditorTabElement,
  be as default
};
//# sourceMappingURL=content-type-design-editor-tab.element-Cd4SfdpB.js.map
