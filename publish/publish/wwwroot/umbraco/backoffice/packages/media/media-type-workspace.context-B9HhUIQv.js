import { b as C, n as b, k as E, o as T } from "./constants-vViimo-q.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { ifDefined as A, html as M, css as g, state as c, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O, umbFocus as k } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as x } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as U } from "@umbraco-cms/backoffice/icon";
import { UmbWorkspaceIsNewRedirectController as D } from "@umbraco-cms/backoffice/workspace";
import { UmbContentTypeWorkspaceContextBase as N } from "@umbraco-cms/backoffice/content-type";
var S = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, p = (e, t, o, r) => {
  for (var i = r > 1 ? void 0 : r ? $(t, o) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (i = (r ? u(t, o, i) : u(i)) || i);
  return r && i && S(t, o, i), i;
}, _ = (e, t, o) => t.has(e) || y("Cannot " + o), a = (e, t, o) => (_(e, t, "read from private field"), t.get(e)), m = (e, t, o) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), P = (e, t, o, r) => (_(e, t, "write to private field"), t.set(e, o), o), d = (e, t, o) => (_(e, t, "access private method"), o), s, h, v, f, w;
let n = class extends O {
  constructor() {
    super(), m(this, h), this._aliasLocked = !0, m(this, s), this.consumeContext(C, (e) => {
      P(this, s, e), d(this, h, v).call(this);
    });
  }
  async _handleIconClick() {
    const [e, t] = this._icon?.replace("color-", "")?.split(" ") ?? [];
    (await this.getContext(x)).open(this, U, {
      value: {
        icon: e,
        color: t
      }
    })?.onSubmit().then((i) => {
      i.icon && i.color ? a(this, s)?.setIcon(`${i.icon} color-${i.color}`) : i.icon && a(this, s)?.setIcon(i.icon);
    });
  }
  render() {
    return M`
			<umb-entity-detail-workspace-editor>
				<div id="header" slot="header">
					<uui-button id="icon" compact label="icon" look="outline" @click=${this._handleIconClick}>
						<umb-icon name=${A(this._icon)}></umb-icon>
					</uui-button>

					<div id="editors">
						<umb-input-with-alias
							id="name"
							label=${this.localize.term("placeholders_entername")}
							value=${this._name}
							alias=${this._alias}
							?auto-generate-alias=${this._isNew}
							@change=${d(this, h, f)}
							${k()}>
						</umb-input-with-alias>

						<uui-input
							id="description"
							.label=${this.localize.term("placeholders_enterDescription")}
							.value=${this._description}
							.placeholder=${this.localize.term("placeholders_enterDescription")}
							@input=${d(this, h, w)}></uui-input>
					</div>
				</div>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
v = function() {
  a(this, s) && (this.observe(a(this, s).name, (e) => this._name = e, "_observeName"), this.observe(
    a(this, s).description,
    (e) => this._description = e,
    "_observeDescription"
  ), this.observe(a(this, s).alias, (e) => this._alias = e, "_observeAlias"), this.observe(a(this, s).icon, (e) => this._icon = e, "_observeIcon"), this.observe(a(this, s).isNew, (e) => this._isNew = e, "_observeIsNew"));
};
f = function(e) {
  a(this, s)?.setName(e.target.value ?? ""), a(this, s)?.setAlias(e.target.alias ?? "");
};
w = function(e) {
  a(this, s)?.setDescription(e.target.value.toString() ?? "");
};
n.styles = [
  g`
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
			}

			#description {
				width: 100%;
				--uui-input-height: var(--uui-size-8);
				--uui-input-border-color: transparent;
			}

			#description:hover {
				--uui-input-border-color: var(--uui-color-border);
			}

			#icon {
				font-size: var(--uui-size-8);
				height: 60px;
				width: 60px;
			}
		`
];
p([
  c()
], n.prototype, "_name", 2);
p([
  c()
], n.prototype, "_description", 2);
p([
  c()
], n.prototype, "_alias", 2);
p([
  c()
], n.prototype, "_aliasLocked", 2);
p([
  c()
], n.prototype, "_icon", 2);
p([
  c()
], n.prototype, "_isNew", 2);
n = p([
  I("umb-media-type-workspace-editor")
], n);
class F extends N {
  constructor(t) {
    super(t, {
      workspaceAlias: T,
      entityType: E,
      detailRepositoryAlias: b
    }), this.routes.setRoutes([
      {
        path: "create/parent/:parentEntityType/:parentUnique",
        component: n,
        setup: async (o, r) => {
          const i = r.match.params.parentEntityType, l = r.match.params.parentUnique === "null" ? null : r.match.params.parentUnique, u = { entityType: i, unique: l };
          await this.createScaffold({ parent: u }), new D(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:id",
        component: n,
        setup: (o, r) => {
          const i = r.match.params.id;
          this.load(i);
        }
      }
    ]);
  }
  setAllowedAtRoot(t) {
    this.structure.updateOwnerContentType({ allowedAtRoot: t });
  }
  setVariesByCulture(t) {
    this.structure.updateOwnerContentType({ variesByCulture: t });
  }
  setVariesBySegment(t) {
    this.structure.updateOwnerContentType({ variesBySegment: t });
  }
  setIsElement(t) {
    this.structure.updateOwnerContentType({ isElement: t });
  }
  setAllowedContentTypes(t) {
    this.structure.updateOwnerContentType({ allowedContentTypes: t });
  }
  setCollection(t) {
    this.structure.updateOwnerContentType({ collection: t });
  }
  /**
   * @deprecated Use the createScaffold method instead. Will be removed in 17.
   * @param {UmbEntityModel} parent
   * @memberof UmbMediaTypeWorkspaceContext
   */
  async create(t) {
    this.createScaffold({ parent: t });
  }
}
export {
  F as UmbMediaTypeWorkspaceContext,
  F as api
};
//# sourceMappingURL=media-type-workspace.context-B9HhUIQv.js.map
