import { h as f, o as v, l as A, p as b, b as O, j as P, c as M, d as U } from "./constants-DpZUosyT.js";
import { UmbLitElement as g, umbFocus as N } from "@umbraco-cms/backoffice/lit-element";
import { ifDefined as D, html as R, css as S, state as h, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as k } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as x } from "@umbraco-cms/backoffice/icon";
import { umbBindToValidation as $ } from "@umbraco-cms/backoffice/validation";
import { UmbContentTypeWorkspaceContextBase as B } from "@umbraco-cms/backoffice/content-type";
import { UmbWorkspaceIsNewRedirectController as W, UmbWorkspaceIsNewRedirectControllerAlias as q } from "@umbraco-cms/backoffice/workspace";
import { UmbTemplateDetailRepository as Y } from "@umbraco-cms/backoffice/template";
var z = Object.defineProperty, L = Object.getOwnPropertyDescriptor, T = (t) => {
  throw TypeError(t);
}, p = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? L(e, i) : e, c = t.length - 1, l; c >= 0; c--)
    (l = t[c]) && (s = (o ? l(e, i, s) : l(s)) || s);
  return o && s && z(e, i, s), s;
}, m = (t, e, i) => e.has(t) || T("Cannot " + i), r = (t, e, i) => (m(t, e, "read from private field"), e.get(t)), _ = (t, e, i) => e.has(t) ? T("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), K = (t, e, i, o) => (m(t, e, "write to private field"), e.set(t, i), i), d = (t, e, i) => (m(t, e, "access private method"), i), a, u, E, w, C;
let n = class extends g {
  constructor() {
    super(), _(this, u), _(this, a), this.consumeContext(f, (t) => {
      K(this, a, t), d(this, u, E).call(this);
    });
  }
  async _handleIconClick() {
    const [t, e] = this._icon?.replace("color-", "")?.split(" ") ?? [];
    (await this.getContext(k)).open(this, x, {
      value: {
        icon: t,
        color: e
      }
    })?.onSubmit().then((s) => {
      s.icon && s.color ? r(this, a)?.setIcon(`${s.icon} color-${s.color}`) : s.icon && r(this, a)?.setIcon(s.icon);
    });
  }
  render() {
    return R`
			<umb-entity-detail-workspace-editor>
				<div id="header" slot="header">
					<uui-button id="icon" compact label="icon" look="outline" @click=${this._handleIconClick}>
						<umb-icon name=${D(this._icon)}></umb-icon>
					</uui-button>

					<div id="editors">
						<umb-input-with-alias
							id="name"
							label=${this.localize.term("placeholders_entername")}
							.value=${this._name}
							.alias=${this._alias}
							?auto-generate-alias=${this._isNew}
							@change=${d(this, u, w)}
							required
							${$(this, "$.name", this._name)}
							${N()}>
						</umb-input-with-alias>

						<uui-input
							id="description"
							.label=${this.localize.term("placeholders_enterDescription")}
							.value=${this._description}
							.placeholder=${this.localize.term("placeholders_enterDescription")}
							@input=${d(this, u, C)}></uui-input>
					</div>
				</div>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
E = function() {
  r(this, a) && (this.observe(r(this, a).name, (t) => this._name = t, "_observeName"), this.observe(r(this, a).alias, (t) => this._alias = t, "_observeAlias"), this.observe(
    r(this, a).description,
    (t) => this._description = t,
    "_observeDescription"
  ), this.observe(r(this, a).icon, (t) => this._icon = t, "_observeIcon"), this.observe(r(this, a).isNew, (t) => this._isNew = t, "_observeIsNew"));
};
w = function(t) {
  r(this, a)?.setName(t.target.value ?? ""), r(this, a)?.setAlias(t.target.alias ?? "");
};
C = function(t) {
  r(this, a)?.setDescription(t.target.value.toString() ?? "");
};
n.styles = [
  S`
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
  h()
], n.prototype, "_name", 2);
p([
  h()
], n.prototype, "_alias", 2);
p([
  h()
], n.prototype, "_description", 2);
p([
  h()
], n.prototype, "_icon", 2);
p([
  h()
], n.prototype, "_isNew", 2);
n = p([
  I("umb-document-type-workspace-editor")
], n);
class ee extends B {
  constructor(e) {
    super(e, {
      workspaceAlias: b,
      entityType: A,
      detailRepositoryAlias: v
    }), this.createTemplateMode = !1, this.#e = new Y(this), this.allowedTemplateIds = this.structure.ownerContentTypeObservablePart((i) => i?.allowedTemplates), this.defaultTemplate = this.structure.ownerContentTypeObservablePart((i) => i?.defaultTemplate), this.cleanup = this.structure.ownerContentTypeObservablePart((i) => i?.cleanup), this.routes.setRoutes([
      {
        path: O.toString(),
        component: n,
        setup: async (i, o) => {
          const s = o.match.params, c = s.parentEntityType, l = s.parentUnique === "null" ? null : s.parentUnique, y = s.presetAlias === "null" ? null : s.presetAlias ?? null;
          if (l === void 0)
            throw new Error("ParentUnique url parameter is required to create a document type");
          await this.#t({ entityType: c, unique: l }, y), new W(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: P.toString(),
        component: n,
        setup: (i, o) => {
          this.removeUmbControllerByAlias(q);
          const s = o.match.params.unique;
          this.load(s);
        }
      }
    ]);
  }
  #e;
  setAllowedAtRoot(e) {
    this.structure.updateOwnerContentType({ allowedAtRoot: e });
  }
  setVariesByCulture(e) {
    this.structure.updateOwnerContentType({ variesByCulture: e });
  }
  setVariesBySegment(e) {
    this.structure.updateOwnerContentType({ variesBySegment: e });
  }
  setIsElement(e) {
    this.structure.updateOwnerContentType({ isElement: e });
  }
  setAllowedContentTypes(e) {
    this.structure.updateOwnerContentType({ allowedContentTypes: e });
  }
  setCleanup(e) {
    this.structure.updateOwnerContentType({ cleanup: e });
  }
  setCollection(e) {
    this.structure.updateOwnerContentType({ collection: e });
  }
  // Document type specific:
  getAllowedTemplateIds() {
    return this.structure.getOwnerContentType()?.allowedTemplates;
  }
  setAllowedTemplateIds(e) {
    this.structure.updateOwnerContentType({ allowedTemplates: e });
  }
  setDefaultTemplate(e) {
    this.structure.updateOwnerContentType({ defaultTemplate: e });
  }
  async #t(e, i) {
    let o;
    switch (i) {
      case M: {
        o = {
          icon: "icon-document-html"
        }, this.createTemplateMode = !0;
        break;
      }
      case U: {
        o = {
          icon: "icon-plugin",
          isElement: !0
        };
        break;
      }
    }
    this.createScaffold({ parent: e, preset: o });
  }
  async _create(e, i) {
    this.createTemplateMode && await this.#i();
    try {
      super._create(e, i), this.createTemplateMode = !1;
    } catch (o) {
      console.log(o);
    }
  }
  // TODO: move this responsibility to the template package
  async #i() {
    const { data: e } = await this.#e.createScaffold({
      name: this.getName(),
      alias: this.getName()
      // NOTE: Uses "name" over alias, as the server handle the template filename. [LK]
    });
    if (!e) throw new Error("Could not create template scaffold");
    const { data: i } = await this.#e.create(e, null);
    if (!i) throw new Error("Could not create template");
    const o = { id: i.unique }, s = this.getAllowedTemplateIds() ?? [];
    this.setAllowedTemplateIds([o, ...s]), this.setDefaultTemplate(o);
  }
  /**
   * @deprecated Use the createScaffold method instead. Will be removed in 17.
   * @param presetAlias
   * @param {UmbEntityModel} parent
   * @memberof UmbMediaTypeWorkspaceContext
   */
  async create(e, i) {
    this.#t(e, i);
  }
}
export {
  ee as UmbDocumentTypeWorkspaceContext,
  ee as api
};
//# sourceMappingURL=document-type-workspace.context-C8uQDU1W.js.map
