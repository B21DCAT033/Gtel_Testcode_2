import { d as q } from "./constants-D-HH3gx6.js";
import { UmbTextStyles as T } from "@umbraco-cms/backoffice/style";
import { css as g, property as k, state as d, customElement as x, when as z, html as o, repeat as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { tryExecuteAndNotify as S } from "@umbraco-cms/backoffice/resources";
import { DataTypeService as W } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as O } from "@umbraco-cms/backoffice/class-api";
import { UMB_WORKSPACE_MODAL as B } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as I } from "@umbraco-cms/backoffice/router";
class M {
  #e;
  /**
   * Creates an instance of UmbDataTypeReferenceServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeReferenceServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Fetches the item for the given unique from the server
   * @param {string} id
   * @returns {*}
   * @memberof UmbDataTypeReferenceServerDataSource
   */
  async getReferencedBy(t) {
    return await S(this.#e, W.getDataTypeByIdReferences({ id: t }));
  }
}
class N extends O {
  #e;
  constructor(t) {
    super(t), this.#e = new M(this);
  }
  async requestReferencedBy(t) {
    if (!t) throw new Error("unique is required");
    const { data: a } = await this.#e.getReferencedBy(t);
    if (a)
      return a.map(V);
  }
}
const V = (e) => ({
  unique: e.contentType.id,
  entityType: e.contentType.type,
  name: e.contentType.name,
  icon: e.contentType.icon,
  properties: e.properties
});
var G = Object.defineProperty, K = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, h = (e, t, a, i) => {
  for (var r = i > 1 ? void 0 : i ? K(t, a) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (r = (i ? s(t, a, r) : s(r)) || r);
  return i && r && G(t, a, r), r;
}, b = (e, t, a) => t.has(e) || E("Cannot " + a), f = (e, t, a) => (b(e, t, "read from private field"), a ? a.call(e) : t.get(e)), _ = (e, t, a) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), L = (e, t, a, i) => (b(e, t, "write to private field"), t.set(e, a), a), m = (e, t, a) => (b(e, t, "access private method"), a), w, p, c, U, A, C;
const X = "umb-data-type-workspace-view-info-reference";
let u = class extends $ {
  constructor() {
    super(), _(this, c), _(this, w, new N(this)), _(this, p), this.dataTypeUnique = "", this._loading = !0, this._items = [], new I(this, B).addAdditionalPath(":entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
      L(this, p, e);
    });
  }
  firstUpdated() {
    m(this, c, U).call(this);
  }
  render() {
    return o`
			<uui-box headline=${this.localize.term("references_tabName")}>
				${z(
      this._loading,
      () => o`<uui-loader></uui-loader>`,
      () => m(this, c, C).call(this)
    )}
			</uui-box>
		`;
  }
};
w = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
U = async function() {
  this._loading = !0;
  const e = await f(this, w).requestReferencedBy(this.dataTypeUnique);
  e && (this._items = e, this._loading = !1);
};
A = function(e) {
  return f(this, p) && e.entityType ? f(this, p).call(this, { entityType: e.entityType }) + `edit/${e.unique}` : "#";
};
C = function() {
  return this._items?.length ? o`
			<uui-table>
				<uui-table-head>
					<uui-table-head-cell><umb-localize key="general_name">Name</umb-localize></uui-table-head-cell>
					<uui-table-head-cell><umb-localize key="general_type">Type</umb-localize></uui-table-head-cell>
					<uui-table-head-cell>
						<umb-localize key="references_usedByProperties">Referenced by</umb-localize>
					</uui-table-head-cell>
				</uui-table-head>
				${P(
    this._items,
    (e) => e.unique,
    (e) => o`
						<uui-table-row>
							<uui-table-cell>
								<uui-ref-node-document-type
									href=${m(this, c, A).call(this, e)}
									name=${this.localize.string(e.name ?? e.unique)}>
									<umb-icon slot="icon" name=${e.icon ?? "icon-document"}></umb-icon>
								</uui-ref-node-document-type>
							</uui-table-cell>
							<uui-table-cell>${e.entityType}</uui-table-cell>
							<uui-table-cell>${e.properties.map((t) => t.name).join(", ")}</uui-table-cell>
						</uui-table-row>
					`
  )}
			</uui-table>
		` : o`<p>${this.localize.term("references_DataTypeNoReferences")}</p>`;
};
u.styles = [
  T,
  g`
			:host {
				display: contents;
			}
			uui-table-cell {
				color: var(--uui-color-text-alt);
			}
		`
];
h([
  k()
], u.prototype, "dataTypeUnique", 2);
h([
  d()
], u.prototype, "_loading", 2);
h([
  d()
], u.prototype, "_items", 2);
u = h([
  x(X)
], u);
var Y = Object.defineProperty, F = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, y = (e, t, a, i) => {
  for (var r = i > 1 ? void 0 : i ? F(t, a) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (r = (i ? s(t, a, r) : s(r)) || r);
  return i && r && Y(t, a, r), r;
}, H = (e, t, a) => t.has(e) || D("Cannot " + a), J = (e, t, a) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), Q = (e, t, a) => (H(e, t, "access private method"), a), v, R;
let l = class extends $ {
  constructor() {
    super(), J(this, v), this._unique = "", this.consumeContext(q, (e) => {
      this._workspaceContext = e, this._observeDataType();
    });
  }
  _observeDataType() {
    this._workspaceContext && (this.observe(this._workspaceContext.unique, (e) => {
      this._unique = e;
    }), this.observe(this._workspaceContext.propertyEditorSchemaAlias, (e) => {
      this._schemaAlias = e;
    }), this.observe(this._workspaceContext.propertyEditorUiAlias, (e) => {
      this._uiAlias = e;
    }));
  }
  render() {
    return o`
			<div class="container">
				<umb-data-type-workspace-view-info-reference
					.dataTypeUnique=${this._unique}></umb-data-type-workspace-view-info-reference>
			</div>
			<div class="container">${Q(this, v, R).call(this)}</div>
		`;
  }
};
v = /* @__PURE__ */ new WeakSet();
R = function() {
  return o`
			<uui-box id="general-section" headline="General">
				<div class="general-item">
					<strong><umb-localize key="template_id">Id</umb-localize></strong>
					<span>${this._unique}</span>
				</div>
				<div class="general-item">
					<strong>Property Editor Schema Alias</strong>
					<span>${this._schemaAlias}</span>
				</div>
				<div class="general-item">
					<strong>Property Editor UI Alias</strong>
					<span>${this._uiAlias}</span>
				</div>
			</uui-box>
		`;
};
l.styles = [
  T,
  g`
			:host {
				display: grid;
				gap: var(--uui-size-layout-1);
				padding: var(--uui-size-layout-1);
				grid-template-columns: 1fr 350px;
			}

			.container {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-layout-1);
			}

			#general-section {
				display: flex;
				flex-direction: column;
			}

			.general-item {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-1);
			}

			.general-item:not(:last-child) {
				margin-bottom: var(--uui-size-space-6);
			}
		`
];
y([
  d()
], l.prototype, "_unique", 2);
y([
  d()
], l.prototype, "_schemaAlias", 2);
y([
  d()
], l.prototype, "_uiAlias", 2);
l = y([
  x("umb-workspace-view-data-type-info")
], l);
const oe = l;
export {
  l as UmbWorkspaceViewDataTypeInfoElement,
  oe as default
};
//# sourceMappingURL=workspace-view-data-type-info.element-BQb23YGE.js.map
