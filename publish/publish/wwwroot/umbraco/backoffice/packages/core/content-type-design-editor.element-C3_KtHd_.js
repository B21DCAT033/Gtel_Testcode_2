import { U as I, a as S, b as D, c as k, d as z } from "./content-type-move-root-containers-into-first-tab-helper.class-BXhoyS1X.js";
import { UmbContextBase as G } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as q } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/extension-registry";
import { html as u, repeat as B, nothing as F, ifDefined as $, css as W, state as v, customElement as L } from "@umbraco-cms/backoffice/external/lit";
import { encodeFolderName as g } from "@umbraco-cms/backoffice/router";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { CompositionTypeModel as X } from "@umbraco-cms/backoffice/external/backend-api";
import { umbConfirmModal as H, UMB_MODAL_MANAGER_CONTEXT as K } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as Y } from "@umbraco-cms/backoffice/style";
import { UmbSorterController as J } from "@umbraco-cms/backoffice/sorter";
class Q extends G {
  constructor(e) {
    super(e, I), this.#t = new q(!1), this.isSorting = this.#t.asObservable();
  }
  #t;
  getIsSorting() {
    return this.#t.getValue();
  }
  setIsSorting(e) {
    this.#t.setValue(e);
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, E = (t) => {
  throw TypeError(t);
}, p = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? j(e, i) : e, n = t.length - 1, m; n >= 0; n--)
    (m = t[n]) && (s = (o ? m(e, i, s) : m(s)) || s);
  return o && s && Z(e, i, s), s;
}, C = (t, e, i) => e.has(t) || E("Cannot " + i), r = (t, e, i) => (C(t, e, "read from private field"), i ? i.call(t) : e.get(t)), f = (t, e, i) => e.has(t) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), tt = (t, e, i, o) => (C(t, e, "write to private field"), e.set(t, i), i), l = (t, e, i) => (C(t, e, "access private method"), i), b, a, y, h, c, O, x, N, P, R, T, w, A, M, U;
let d = class extends V {
  constructor() {
    super(), f(this, c), f(this, b, new J(this, {
      getUniqueOfElement: (t) => t.getAttribute("data-umb-tab-id"),
      getUniqueOfModel: (t) => t.id,
      identifier: "content-type-tabs-sorter",
      itemSelector: "uui-tab",
      containerSelector: "uui-tab-group",
      disabledItemSelector: ":not([sortable])",
      resolvePlacement: (t) => t.relatedRect.left + t.relatedRect.width * 0.5 > t.pointerX,
      onChange: ({ model: t }) => {
        this._tabs = t;
      },
      onEnd: ({ item: t }) => {
        const e = this._tabs ?? [], i = e.findIndex((m) => m.id === t.id);
        if (i === -1) return;
        let o = -1;
        i > 0 && e.length > 0 && (o = e[i - 1].sortOrder), r(this, h).partialUpdateContainer(t.id, {
          sortOrder: ++o
        });
        let s = i + 1, n;
        for (; (n = e[s]) !== void 0 && n.sortOrder <= o; )
          r(this, h).partialUpdateContainer(n.id, {
            sortOrder: ++o
          }), s++;
      }
    })), f(this, a), f(this, y, new Q(this)), f(this, h, new S(this)), this._hasRootGroups = !1, this._routes = [], this._activePath = "", r(this, b).disable(), this.observe(
      r(this, y).isSorting,
      (t) => {
        this._sortModeActive = t, t ? r(this, b).enable() : r(this, b).disable();
      },
      "_observeIsSorting"
    ), r(this, h).setContainerChildType("Tab"), r(this, h).setIsRoot(!0), this.observe(r(this, h).mergedContainers, (t) => {
      this._tabs = t, r(this, b).setModel(t), this._createRoutes();
    }), this.consumeContext(D, (t) => {
      tt(this, a, t), r(this, h).setStructureManager(t.structure), l(this, c, x).call(this);
    });
  }
  set manifest(t) {
    this._compositionRepositoryAlias = t.meta.compositionRepositoryAlias;
  }
  _createRoutes() {
    if (!r(this, a) || !this._tabs || this._hasRootGroups === void 0) return;
    const t = [];
    let e;
    if (this._tabs.length > 0 && this._tabs?.forEach((i) => {
      const o = i.name && i.name !== "" ? i.name : "-";
      i.id === this._activeTabId && (e = o), t.push({
        path: `tab/${g(o)}`,
        component: () => import("./content-type-design-editor-tab.element-Cd4SfdpB.js"),
        setup: (s) => {
          s.containerId = i.id;
        }
      });
    }), this._hasRootGroups || this._tabs.length === 0 ? (t.push({
      path: "root",
      component: () => import("./content-type-design-editor-tab.element-Cd4SfdpB.js"),
      setup: (i) => {
        i.containerId = null;
      }
    }), t.push({
      path: "",
      redirectTo: "root",
      guards: [() => this._activeTabId === void 0]
    })) : t.push({
      path: "",
      redirectTo: t[0]?.path,
      guards: [() => this._activeTabId === void 0]
    }), t.length !== 0 && t.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement,
      guards: [() => this._activeTabId === void 0]
    }), e !== void 0 && this._activePath && this._routerPath) {
      const i = this._activePath.split(this._routerPath)[1], o = "/tab/" + g(e);
      i !== o && (this._activePath = this._routerPath + o, window.history.replaceState(null, "", this._activePath));
    }
    t.push({
      path: "**",
      component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
    }), this._routes = t;
  }
  render() {
    return u`
			<umb-body-layout header-fit-height>
				<div id="header" slot="header">
					<div id="container-list">${this.renderTabsNavigation()} ${this.renderAddButton()}</div>
					${this.renderActions()}
				</div>
				<umb-router-slot
					.routes=${this._routes}
					@init=${(t) => {
      this._routerPath = t.target.absoluteRouterPath;
    }}
					@change=${(t) => {
      this._activePath = t.target.absoluteActiveViewPath ?? "";
    }}>
				</umb-router-slot>
			</umb-body-layout>
		`;
  }
  renderAddButton() {
    if (!this._sortModeActive)
      return u`
			<uui-button id="add-tab" @click="${l(this, c, R)}" label="Add tab">
				<uui-icon name="icon-add"></uui-icon>
				Add tab
			</uui-button>
		`;
  }
  renderActions() {
    const t = this._sortModeActive ? this.localize.term("general_reorderDone") : this.localize.term("general_reorder");
    return u`
			<div id="actions">
				${this._compositionRepositoryAlias ? u`
							<uui-button
								look="outline"
								label=${this.localize.term("contentTypeEditor_compositions")}
								compact
								@click=${l(this, c, M)}>
								<uui-icon name="icon-merge"></uui-icon>
								${this.localize.term("contentTypeEditor_compositions")}
							</uui-button>
						` : ""}
				<uui-button look="outline" label=${t} compact @click=${l(this, c, O)}>
					<uui-icon name="icon-navigation"></uui-icon>
					${t}
				</uui-button>
			</div>
		`;
  }
  renderTabsNavigation() {
    if (!(!this._tabs || this._tabs.length === 0))
      return u`
			<div id="tabs-group">
				<uui-tab-group>
					${this.renderRootTab()}
					${B(
        this._tabs,
        (t) => t.id,
        (t) => this.renderTab(t)
      )}
				</uui-tab-group>
			</div>
		`;
  }
  renderRootTab() {
    const t = this._routerPath + "/root", e = t === this._activePath;
    return !this._hasRootGroups && !this._sortModeActive ? F : u`
			<uui-tab
				id="root-tab"
				class=${this._hasRootGroups || e ? "" : "content-tab-is-empty"}
				label=${this.localize.term("general_generic")}
				.active=${e}
				href=${t}>
				${this.localize.term("general_generic")}
			</uui-tab>
		`;
  }
  renderTab(t) {
    const e = this._routerPath + "/tab/" + g(t.name && t.name !== "" ? t.name : "-"), i = e === this._activePath, o = r(this, h).isOwnerChildContainer(t.id) ?? !1;
    return u`<uui-tab
			label=${t.name && t.name !== "" ? t.name : "Unnamed"}
			.active=${i}
			href=${e}
			data-umb-tab-id=${$(t.id)}
			?sortable=${o}>
			${this.renderTabInner(t, i, o)}
		</uui-tab>`;
  }
  renderTabInner(t, e, i) {
    const o = t.name && t.name !== "", s = o ? t.name : "Unnamed";
    return this._sortModeActive ? u`<div class="tab">
				${i ? u`<uui-icon name="icon-navigation" class="drag-${t.id}"> </uui-icon>${s}
							<uui-input
								label="sort order"
								type="number"
								value=${$(t.sortOrder)}
								style="width:50px"
								@change=${(n) => l(this, c, U).call(this, t, n)}></uui-input>` : u`<uui-icon name="icon-merge"></uui-icon>${t.name}`}
			</div>` : e && i ? u`<div class="tab">
				<uui-input
					id="input"
					look="placeholder"
					placeholder="Unnamed"
					label=${t.name}
					value="${t.name}"
					auto-width
					minlength="1"
					@change=${(n) => l(this, c, w).call(this, n, t)}
					@input=${(n) => l(this, c, w).call(this, n, t)}
					@blur=${(n) => l(this, c, A).call(this, n, t)}>
					${this.renderDeleteFor(t)}
				</uui-input>
			</div>` : i ? u`<div class="not-active">
				<span class=${o ? "" : "invaild"}>${o ? t.name : "Unnamed"}</span> ${this.renderDeleteFor(
      t
    )}
			</div>` : u`<div class="not-active"><uui-icon name="icon-merge"></uui-icon>${t.name}</div>`;
  }
  renderDeleteFor(t) {
    return u`<uui-button
			label=${this.localize.term("actions_remove")}
			class="trash"
			slot="append"
			@click=${(e) => {
      e.stopPropagation(), e.preventDefault(), l(this, c, N).call(this, t);
    }}
			compact>
			<uui-icon name="icon-trash"></uui-icon>
		</uui-button>`;
  }
};
b = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
O = function() {
  r(this, y)?.setIsSorting(!this._sortModeActive);
};
x = async function() {
  r(this, a) && this.observe(
    await r(this, a).structure.hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, this._createRoutes();
    },
    "_observeGroups"
  );
};
N = async function(t) {
  if (!t) return;
  const e = t.name === "" ? "Unnamed" : t.name, i = {
    headline: "Delete tab",
    content: u`<umb-localize key="contentTypeEditor_confirmDeleteTabMessage" .args=${[e]}>
					Are you sure you want to delete the tab <strong>${e}</strong>
				</umb-localize>
				<div style="color:var(--uui-color-danger-emphasis)">
					<umb-localize key="contentTypeEditor_confirmDeleteTabNotice">
						This will delete all items that doesn't belong to a composition.
					</umb-localize>
				</div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  };
  await H(this, i), l(this, c, P).call(this, t?.id);
};
P = function(t) {
  t && (r(this, a)?.structure.removeContainer(null, t), this._activeTabId === t && (this._activeTabId = void 0));
};
R = async function() {
  if (this.shadowRoot?.querySelector("uui-tab[active] uui-input")?.value === "") {
    l(this, c, T).call(this);
    return;
  }
  if (!r(this, a))
    throw new Error("Workspace context has not been found");
  if (!this._tabs) return;
  const e = this._tabs.length, i = e === 0 ? 0 : this._tabs[e - 1].sortOrder + 1, o = await r(this, a).structure.createContainer(null, null, "Tab", i);
  if (e === 0 && new k(this, r(this, a).structure), o) {
    const s = this._routerPath + "/tab/" + g(o.name && o.name !== "" ? o.name : "-");
    window.history.replaceState(null, "", s), l(this, c, T).call(this);
  }
};
T = async function() {
  setTimeout(() => {
    this.shadowRoot?.querySelector("uui-tab[active] uui-input")?.focus();
  }, 100);
};
w = async function(t, e) {
  this._activeTabId = e.id;
  let i = t.target.value;
  const o = r(this, a)?.structure.makeContainerNameUniqueForOwnerContentType(
    e.id,
    i,
    "Tab"
  );
  o != null && (i = o, t.target.value = i), r(this, h).partialUpdateContainer(e.id, {
    name: i
  });
};
A = async function(t, e) {
  if (!this._activeTabId) return;
  if (t.target?.value === "") {
    const o = r(this, a).structure.makeEmptyContainerName(this._activeTabId, "Tab");
    t.target.value = o, r(this, h).partialUpdateContainer(e.id, {
      name: o
    });
  }
  this._activeTabId = void 0;
};
M = async function() {
  if (!r(this, a) || !this._compositionRepositoryAlias) return;
  const t = r(this, a).getUnique();
  if (!t)
    throw new Error("Content Type unique is undefined");
  const e = r(this, a).structure.getContentTypes(), i = r(this, a).structure.getOwnerContentType();
  if (!i)
    throw new Error("Owner Content Type not found");
  const o = {
    compositionRepositoryAlias: this._compositionRepositoryAlias,
    unique: t,
    // Here we use the loaded content types to declare what we already inherit. That puts a pressure on cleaning up, but thats a good thing. [NL]
    selection: e.map((_) => _.unique).filter((_) => _ !== t),
    isElement: i.isElement,
    currentPropertyAliases: [],
    isNew: r(this, a).getIsNew()
  }, n = (await this.getContext(K)).open(this, z, {
    data: o
  });
  if (await n?.onSubmit(), !n?.value) return;
  const m = n.getValue().selection;
  r(this, a)?.setCompositions(
    m.map((_) => ({ contentType: { unique: _ }, compositionType: X.COMPOSITION }))
  );
};
U = function(t, e) {
  if (!e.target.value || !t.id) return;
  const i = Number(e.target.value);
  r(this, h).partialUpdateContainer(t.id, { sortOrder: i });
};
d.styles = [
  Y,
  W`
			:host {
				position: relative;
				display: flex;
				flex-direction: column;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);
			}

			#buttons-wrapper {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				align-items: stretch;
			}

			[drag-placeholder] {
				opacity: 0.5;
			}

			[drag-placeholder] uui-input {
				visibility: hidden;
			}

			/* TODO: This should be replaced with a general workspace bar — naming is hard */

			#header {
				width: 100%;
				min-height: var(--uui-size-16);
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: nowrap;
			}

			#container-list {
				display: flex;
			}

			#tabs-group {
				display: flex;
			}

			#actions {
				display: flex;
				gap: var(--uui-size-space-2);
			}

			uui-tab-group {
				flex-wrap: nowrap;
			}

			uui-tab.content-tab-is-empty {
				align-self: center;
				border-radius: 3px;
				--uui-tab-text: var(--uui-color-text-alt);
				border: dashed 1px var(--uui-color-border-emphasis);
			}

			uui-tab {
				position: relative;
				border-left: 1px hidden transparent;
				border-right: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
			}

			.not-active uui-button {
				pointer-events: auto;
			}

			.not-active {
				pointer-events: none;
				display: inline-flex;
				padding-left: var(--uui-size-space-3);
				border: 1px solid transparent;
				align-items: center;
				gap: var(--uui-size-space-3);
			}

			.invaild {
				color: var(--uui-color-danger, #d42054);
			}

			.trash {
				opacity: 1;
				transition: opacity 100ms;
			}

			uui-tab:not(:hover, :focus) .trash {
				opacity: 0;
				transition: opacity 100ms;
			}

			uui-input:not(:focus, :hover, :invalid) {
				border: 1px solid transparent;
			}

			.inherited {
				vertical-align: sub;
			}

			[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
p([
  v()
], d.prototype, "_compositionRepositoryAlias", 2);
p([
  v()
], d.prototype, "_hasRootGroups", 2);
p([
  v()
], d.prototype, "_routes", 2);
p([
  v()
], d.prototype, "_tabs", 2);
p([
  v()
], d.prototype, "_routerPath", 2);
p([
  v()
], d.prototype, "_activePath", 2);
p([
  v()
], d.prototype, "_sortModeActive", 2);
d = p([
  L("umb-content-type-design-editor")
], d);
const vt = d;
export {
  d as UmbContentTypeDesignEditorElement,
  vt as default
};
//# sourceMappingURL=content-type-design-editor.element-C3_KtHd_.js.map
