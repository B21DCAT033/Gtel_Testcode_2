import { n as E, c as w, m as M } from "./input-member-type.element-9xTb0eJi.js";
import { a as T } from "./entity-B4xreSYr.js";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/tree";
import { ifDefined as C, html as g, css as x, state as h, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k, umbFocus as U } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as N } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as O } from "@umbraco-cms/backoffice/icon";
import { UmbWorkspaceIsNewRedirectController as R } from "@umbraco-cms/backoffice/workspace";
import { UmbContentTypeWorkspaceContextBase as $ } from "@umbraco-cms/backoffice/content-type";
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, c = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? S(t, i) : t, p = e.length - 1, l; p >= 0; p--)
    (l = e[p]) && (o = (s ? l(t, i, o) : l(o)) || o);
  return s && o && P(t, i, o), o;
}, _ = (e, t, i) => t.has(e) || v("Cannot " + i), a = (e, t, i) => (_(e, t, "read from private field"), t.get(e)), d = (e, t, i) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), I = (e, t, i, s) => (_(e, t, "write to private field"), t.set(e, i), i), m = (e, t, i) => (_(e, t, "access private method"), i), r, u, f, y, b;
let n = class extends k {
  constructor() {
    super(), d(this, u), d(this, r), this.consumeContext(E, (e) => {
      I(this, r, e), m(this, u, f).call(this);
    });
  }
  async _handleIconClick() {
    const [e, t] = this._icon?.replace("color-", "")?.split(" ") ?? [];
    (await this.getContext(N)).open(this, O, {
      value: {
        icon: e,
        color: t
      }
    })?.onSubmit().then((o) => {
      o.icon && o.color ? a(this, r)?.set("icon", `${o.icon} color-${o.color}`) : o.icon && a(this, r)?.set("icon", o.icon);
    });
  }
  render() {
    return g`
			<umb-entity-detail-workspace-editor>
				<div id="header" slot="header">
					<uui-button id="icon" compact label="icon" look="outline" @click=${this._handleIconClick}>
						<umb-icon name=${C(this._icon)}></umb-icon>
					</uui-button>

					<div id="editors">
						<umb-input-with-alias
							id="name"
							label=${this.localize.term("placeholders_entername")}
							value=${this._name}
							alias=${this._alias}
							?auto-generate-alias=${this._isNew}
							@change=${m(this, u, y)}
							${U()}>
						</umb-input-with-alias>

						<uui-input
							id="description"
							.label=${this.localize.term("placeholders_enterDescription")}
							.value=${this._description}
							.placeholder=${this.localize.term("placeholders_enterDescription")}
							@input=${m(this, u, b)}></uui-input>
					</div>
				</div>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
f = function() {
  a(this, r) && (this.observe(a(this, r).name, (e) => this._name = e, "_observeName"), this.observe(
    a(this, r).description,
    (e) => this._description = e,
    "_observeDescription"
  ), this.observe(a(this, r).alias, (e) => this._alias = e, "_observeAlias"), this.observe(a(this, r).icon, (e) => this._icon = e, "_observeIcon"), this.observe(a(this, r).isNew, (e) => this._isNew = e, "_observeIsNew"));
};
y = function(e) {
  a(this, r)?.setName(e.target.value ?? ""), a(this, r)?.setAlias(e.target.alias ?? "");
};
b = function(e) {
  a(this, r)?.setDescription(e.target.value.toString() ?? "");
};
n.styles = [
  x`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}

			#header {
				display: flex;
				flex: 1 1 auto;
				gap: var(--uui-size-space-2);
			}

			#editors {
				display: flex;
				flex: 1 1 auto;
				flex-direction: column;
				gap: var(--uui-size-space-1);
			}

			#name {
				width: 100%;
				flex: 1 1 auto;
				align-items: center;
			}

			#description {
				width: 100%;
				--uui-input-height: var(--uui-size-8);
				--uui-input-border-color: transparent;
			}

			#description:hover {
				--uui-input-border-color: var(--uui-color-border);
			}

			#alias-lock {
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			}
			#alias-lock uui-icon {
				margin-bottom: 2px;
			}

			#icon {
				font-size: var(--uui-size-8);
				height: 60px;
				width: 60px;
			}
		`
];
c([
  h()
], n.prototype, "_name", 2);
c([
  h()
], n.prototype, "_description", 2);
c([
  h()
], n.prototype, "_alias", 2);
c([
  h()
], n.prototype, "_icon", 2);
c([
  h()
], n.prototype, "_isNew", 2);
n = c([
  A("umb-member-type-workspace-editor")
], n);
class V extends $ {
  constructor(t) {
    super(t, {
      workspaceAlias: M,
      entityType: T,
      detailRepositoryAlias: w
    }), this.routes.setRoutes([
      {
        path: "create/parent/:parentEntityType/:parentUnique",
        component: n,
        setup: async (i, s) => {
          const o = s.match.params.parentEntityType, p = s.match.params.parentUnique === "null" ? null : s.match.params.parentUnique, l = { entityType: o, unique: p };
          await this.createScaffold({ parent: l }), new R(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: n,
        setup: (i, s) => {
          const o = s.match.params.unique;
          this.load(o);
        }
      }
    ]);
  }
  /**
   * @deprecated Use the individual set methods instead. Will be removed in 17.
   * @template PropertyName
   * @param {PropertyName} propertyName
   * @param {EntityDetailModel[PropertyName]} value
   * @memberof UmbMemberTypeWorkspaceContext
   */
  set(t, i) {
    this.structure.updateOwnerContentType({ [t]: i });
  }
  /**
   * @deprecated Use the createScaffold method instead. Will be removed in 17.
   * @param {UmbEntityModel} parent
   * @memberof UmbMemberTypeWorkspaceContext
   */
  async create(t) {
    this.createScaffold({ parent: t });
  }
}
export {
  V as UmbMemberTypeWorkspaceContext,
  V as api
};
//# sourceMappingURL=member-type-workspace.context-lcA_RxRI.js.map
