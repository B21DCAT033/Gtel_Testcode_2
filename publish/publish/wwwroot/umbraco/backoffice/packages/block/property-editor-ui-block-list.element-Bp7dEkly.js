import { UmbBooleanState as gt, mergeObservables as _e, observeMultiple as Tt } from "@umbraco-cms/backoffice/observable-api";
import { UmbBlockManagerContext as me, UmbBlockEntryContext as ve, UMB_BLOCK_WORKSPACE_ALIAS as fe, UmbDataPathBlockElementDataQuery as Ut, UmbBlockElementDataValidationPathTranslator as Bt } from "@umbraco-cms/backoffice/block";
import { c as ge } from "./block-catalogue-modal.token-Fmisqeoi.js";
import "./block-entry.context-token-DG6_TzkT.js";
import "@umbraco-cms/backoffice/class-api";
import { stringOrStringArrayContains as Ot } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import { UmbModalRouteRegistrationController as Mt } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import { U as ye } from "./block-entries.context-CiWNQmmy.js";
import "@umbraco-cms/backoffice/document-type";
import { UmbContentTypeContainerStructureHelper as ke } from "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_CONTEXT as yt, UMB_PROPERTY_DATASET_CONTEXT as Rt } from "@umbraco-cms/backoffice/property";
import { UmbLanguageItemRepository as we } from "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import "./block-catalogue-modal.element-B2pvOiFo.js";
import { UmbObserveValidationStateController as Vt, UmbFormControlMixin as xe, UmbValidationContext as Ee, extractJsonQueryProps as St, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as Ce } from "@umbraco-cms/backoffice/validation";
import { U as $e } from "./block-workspace.modal-token-N1xnaaIe.js";
import { d as At, a as Y, f as Pe, U as rt, b as Te, c as Be } from "./index-BbCqfSen.js";
import { UMB_CLIPBOARD_PROPERTY_CONTEXT as bt, UmbClipboardPastePropertyValueTranslatorValueResolver as Oe } from "@umbraco-cms/backoffice/clipboard";
import { UmbLitElement as D, umbDestroyOnDisconnect as at } from "@umbraco-cms/backoffice/lit-element";
import { css as z, property as f, customElement as N, nothing as g, html as a, state as p, repeat as Dt } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as lt } from "@umbraco-cms/backoffice/style";
import { UmbSorterController as Me } from "@umbraco-cms/backoffice/sorter";
import { a as Se } from "./constants-DzGYudYo.js";
import { UUIBlinkAnimationValue as Ie } from "@umbraco-cms/backoffice/external/uui";
import { UmbExtensionApiInitializer as Le, UmbExtensionsApiInitializer as Ue } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as It } from "@umbraco-cms/backoffice/extension-registry";
import "./block-workspace-view-edit-tab.element-Cma7r_Kj.js";
import { debounceTime as Re } from "@umbraco-cms/backoffice/external/rxjs";
class Ve extends me {
  constructor() {
    super(...arguments), this.#t = new gt(void 0), this.inlineEditingMode = this.#t.asObservable();
  }
  #t;
  setInlineEditingMode(e) {
    this.#t.setValue(e ?? !1);
  }
  getInlineEditingMode() {
    return this.#t.getValue();
  }
  /**
   * @deprecated Use createWithPresets instead. Will be removed in v.17.
   */
  create(e, i, s) {
    throw new Error("Method deparecated use createWithPresets");
  }
  async createWithPresets(e, i, s) {
    return await super._createBlockData(e, i);
  }
  insert(e, i, s, o) {
    return this._layouts.appendOneAt(e, o.index ?? -1), this.insertBlockData(e, i, s, o), !0;
  }
}
class Ae extends ye {
  constructor(e) {
    super(e, At), this.canCreate = new gt(!0).asObservable(), new Mt(this, ge).addAdditionalPath("_catalogue/:view/:index").onSetup(async (i) => {
      if (await this._retrieveManager, !this._manager) return !1;
      const s = i.index ? parseInt(i.index) : -1, o = await this.getContext(bt), n = o.getPasteTranslatorManifests(
        Y
      ), B = (await this.getContext(yt)).getConfig(), W = new Oe(this);
      return {
        data: {
          blocks: this._manager?.getBlockTypes() ?? [],
          blockGroups: [],
          openClipboard: i.view === "clipboard",
          clipboardFilter: async (I) => {
            if (!o.hasSupportedPasteTranslator(
              n,
              I.values
            ))
              return !1;
            const Z = await W.getPasteTranslator(
              I.values,
              Y
            );
            if (Z.isCompatibleValue) {
              const be = await W.resolve(
                I.values,
                Y
              );
              return Z.isCompatibleValue(be, B);
            }
            return !0;
          },
          originData: { index: s },
          createBlockInWorkspace: this._manager.getInlineEditingMode() === !1
        }
      };
    }).onSubmit(async (i, s) => {
      if (i?.create && s) {
        const o = await this.create(
          i.create.contentElementTypeKey,
          {},
          s.originData
        );
        if (o)
          this.insert(
            o.layout,
            o.content,
            o.settings,
            s.originData
          );
        else
          throw new Error("Failed to create block");
      } else if (i?.clipboard && i.clipboard.selection?.length && s) {
        const n = await (await this.getContext(bt)).readMultiple(
          i.clipboard.selection,
          Y
        );
        this._insertFromPropertyValues(n, s.originData);
      }
    }).observeRouteBuilder((i) => {
      this._catalogueRouteBuilderState.setValue(i);
    }), new Mt(this, Pe).addAdditionalPath("block").onSetup(() => ({
      data: { entityType: "block", preset: {}, baseDataPath: this._dataPath },
      modal: { size: "medium" }
    })).observeRouteBuilder((i) => {
      const s = i({});
      this._workspacePath.setValue(s);
    });
  }
  _gotBlockManager() {
    this._manager && (this.observe(
      this._manager.layouts,
      (e) => {
        this._layoutEntries.setValue(e);
      },
      "observeParentLayouts"
    ), this.observe(
      this.layoutEntries,
      (e) => {
        this._manager?.setLayouts(e);
      },
      "observeThisLayouts"
    ));
  }
  getPathForCreateBlock(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "create", index: e });
  }
  getPathForClipboard(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "clipboard", index: e });
  }
  async setLayouts(e) {
    await this._retrieveManager, this._manager?.setLayouts(e);
  }
  async create(e, i, s) {
    return await this._retrieveManager, await this._manager?.createWithPresets(e, i, s);
  }
  // insert Block?
  async insert(e, i, s, o) {
    return await this._retrieveManager, this._manager?.insert(e, i, s, o) ?? !1;
  }
  async _insertFromPropertyValue(e, i) {
    const s = e.layout[rt];
    if (!s)
      throw new Error("No layout entries found");
    return await Promise.all(
      s.map(async (o) => {
        this._insertBlockFromPropertyValue(o, e, i), i.index !== -1 && (i = { ...i, index: i.index + 1 });
      })
    ), i;
  }
}
class De extends ve {
  constructor(e) {
    super(e, At, Te), this.#t = new gt(void 0), this.inlineEditingMode = this.#t.asObservable(), this.forceHideContentEditorInOverlay = this._blockType.asObservablePart(
      (i) => i ? i.forceHideContentEditorInOverlay ?? !1 : void 0
    ), this.showContentEdit = _e(
      [this._contentStructureHasProperties, this.forceHideContentEditorInOverlay, this.inlineEditingMode],
      ([i, s, o]) => i === !0 && s === !1 && o === !1
    );
  }
  #t;
  _gotManager() {
    this.observe(
      this._manager?.inlineEditingMode,
      (e) => {
        this.#t.setValue(e);
      },
      "observeInlineEditingMode"
    );
  }
  _gotEntries() {
  }
  _gotContentType() {
  }
}
var ze = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, K = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Ne(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && ze(e, i, o), o;
};
let T = class extends D {
  render() {
    return a`
			<uui-ref-node standalone href=${(this.config?.showContentEdit ? this.config?.editContentPath : void 0) ?? ""}>
				<umb-icon slot="icon" .name=${this.icon}></umb-icon>
				<umb-ufm-render slot="name" inline .markdown=${this.label} .value=${this.content}></umb-ufm-render>
				${this.unpublished ? a`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
							><umb-localize key="blockEditor_notExposedLabel"></umb-localize
						></uui-tag>` : g}
			</uui-ref-node>
		`;
  }
};
T.styles = [
  z`
			uui-ref-node {
				min-height: var(--uui-size-16);
			}
			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}
			:host([unpublished]) umb-icon,
			:host([unpublished]) umb-ufm-render {
				opacity: 0.6;
			}
		`
];
K([
  f({ type: String, reflect: !1 })
], T.prototype, "label", 2);
K([
  f({ type: String, reflect: !1 })
], T.prototype, "icon", 2);
K([
  f({ type: Boolean, reflect: !0 })
], T.prototype, "unpublished", 2);
K([
  f({ attribute: !1 })
], T.prototype, "content", 2);
K([
  f({ attribute: !1 })
], T.prototype, "config", 2);
T = K([
  N("umb-ref-list-block")
], T);
var Ke = Object.defineProperty, We = Object.getOwnPropertyDescriptor, zt = (t) => {
  throw TypeError(t);
}, ct = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? We(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && Ke(e, i, o), o;
}, kt = (t, e, i) => e.has(t) || zt("Cannot " + i), M = (t, e, i) => (kt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), ht = (t, e, i) => e.has(t) ? zt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ge = (t, e, i, s) => (kt(t, e, "write to private field"), e.set(t, i), i), q = (t, e, i) => (kt(t, e, "access private method"), i), V, L, O, Nt, wt, _t;
let A = class extends D {
  constructor() {
    super(), ht(this, O), this._hasRootGroups = !1, ht(this, V), ht(this, L, new ke(this)), M(this, L).setIsRoot(!0), M(this, L).setContainerChildType("Tab"), this.observe(M(this, L).mergedContainers, (t) => {
      this._tabs = t, q(this, O, wt).call(this);
    }), this.consumeContext($e, (t) => {
      Ge(this, V, t), M(this, L).setStructureManager(t.content.structure), q(this, O, Nt).call(this);
    });
  }
  render() {
    if (this._tabs)
      return a`
			${this._tabs.length > 1 || this._tabs.length === 1 && this._hasRootGroups ? a` <uui-tab-group slot="header">
						${this._hasRootGroups && this._tabs.length > 0 ? a`
									<uui-tab
										label="Content"
										.active=${this._activeTabId === null}
										@click=${() => q(this, O, _t).call(this, null, null)}
										>Content</uui-tab
									>
								` : g}
						${Dt(
        this._tabs,
        (t) => t.name,
        (t) => a`<uui-tab
									label=${t.name ?? "Unnamed"}
									.active=${t.id === this._activeTabId}
									@click=${() => q(this, O, _t).call(this, t.name, t.id)}
									>${t.name}</uui-tab
								>`
      )}
					</uui-tab-group>` : g}
			${this._activeTabId !== void 0 ? a`<umb-block-workspace-view-edit-tab
						.managerName=${"content"}
						.hideSingleGroup=${!0}
						.containerId=${this._activeTabId}>
					</umb-block-workspace-view-edit-tab>` : g}
		`;
  }
};
V = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakSet();
Nt = async function() {
  M(this, V) && this.observe(
    await M(this, V).content.structure.hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, q(this, O, wt).call(this);
    },
    "observeGroups"
  );
};
wt = function() {
  !this._tabs || !M(this, V) || this._activeTabId === void 0 && (this._hasRootGroups ? this._activeTabId = null : this._tabs.length > 0 && (this._activeTabId = this._tabs[0].id));
};
_t = function(t, e) {
  this._activeTabId = e;
};
A.styles = [
  lt,
  z`
			:host {
				position: relative;
				display: block;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);

				padding: calc(var(--uui-size-layout-1));
			}
		`
];
ct([
  p()
], A.prototype, "_hasRootGroups", 2);
ct([
  p()
], A.prototype, "_tabs", 2);
ct([
  p()
], A.prototype, "_activeTabId", 2);
A = ct([
  N("umb-block-workspace-view-edit-content-no-router")
], A);
var Fe = Object.defineProperty, Ye = Object.getOwnPropertyDescriptor, Kt = (t) => {
  throw TypeError(t);
}, P = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Ye(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && Fe(e, i, o), o;
}, xt = (t, e, i) => e.has(t) || Kt("Cannot " + i), E = (t, e, i) => (xt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), G = (t, e, i) => e.has(t) ? Kt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), pt = (t, e, i, s) => (xt(t, e, "write to private field"), e.set(t, i), i), j = (t, e, i) => (xt(t, e, "access private method"), i), tt, $, J, U, mt, Et, Wt, Gt;
const qe = (t) => [{ manifest: t }];
let k = class extends D {
  constructor() {
    super(), G(this, U), G(this, tt), G(this, $), G(this, J), this._isOpen = !1, G(this, Et, () => {
      E(this, $)?.expose();
    }), this.consumeContext(Be, (t) => {
      pt(this, tt, t), this.observe(
        E(this, tt).unique,
        (e) => {
          pt(this, J, e), j(this, U, mt).call(this);
        },
        "observeContentKey"
      );
    }), new Le(
      this,
      It,
      fe,
      qe,
      (t, e) => {
        const i = e.api;
        t && i && (pt(this, $, i), E(this, $).establishLiveSync(), j(this, U, mt).call(this), this.observe(
          E(this, $).exposed,
          (s) => {
            this._exposed = s;
          },
          "observeExposed"
        ), this.observe(
          i.content.structure.ownerContentTypeName,
          (s) => {
            this._ownerContentTypeName = s;
          },
          "observeContentTypeName"
        ), this.observe(
          i.variantId,
          async (s) => {
            if (s) {
              i.content.setup(this, s);
              const o = s.culture;
              if (o) {
                const n = new we(this), { data: u } = await n.requestItems([o]), B = u?.[0].name;
                this._variantName = B ? this.localize.string(B) : void 0;
              }
            }
          },
          "observeVariant"
        ), new Ue(this, It, "workspaceContext", [E(this, $)]));
      }
    );
  }
  render() {
    return a`
			<div id="host">
				<button
					id="open-part"
					tabindex="0"
					@keydown=${(t) => {
      t.key !== " " && t.key !== "Enter" || (t.preventDefault(), t.stopPropagation(), this._isOpen = !this._isOpen);
    }}
					@click=${() => {
      this._isOpen = !this._isOpen;
    }}>
					<uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
					${j(this, U, Wt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</button>
				${this._isOpen === !0 ? j(this, U, Gt).call(this) : g}
			</div>
		`;
  }
};
tt = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakSet();
mt = function() {
  !E(this, $) || !E(this, J) || E(this, $).load(E(this, J));
};
Et = /* @__PURE__ */ new WeakMap();
Wt = function() {
  return a`
			<span id="content">
				<span id="icon">
					<umb-icon .name=${this.icon}></umb-icon>
				</span>
				<div id="info">
					<umb-ufm-render id="name" inline .markdown=${this.label} .value=${this.content}></umb-ufm-render>
				</div>
			</span>
			${this.unpublished ? a`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
						><umb-localize key="blockEditor_notExposedLabel"></umb-localize
					></uui-tag>` : g}
		`;
};
Gt = function() {
  return this._exposed === !1 ? a`<uui-button id="exposeButton" draggable="false" @click=${E(this, Et)}
				><uui-icon name="icon-add"></uui-icon>
				<umb-localize
					key="blockEditor_createThisFor"
					.args=${[this._ownerContentTypeName, this._variantName]}></umb-localize
			></uui-button>` : a`<umb-block-workspace-view-edit-content-no-router
				draggable="false"></umb-block-workspace-view-edit-content-no-router>`;
};
k.styles = [
  lt,
  z`
			#host {
				position: relative;
				display: block;
				width: 100%;

				box-sizing: border-box;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface);

				border: 1px solid var(--uui-color-border);
				transition: border-color 80ms;

				min-width: 250px;
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

			#open-part + * {
				border-top: 1px solid var(--uui-color-border);
			}
			:host([disabled]) #open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			:host(:not([disabled])) #host:has(#open-part:hover) {
				border-color: var(--uui-color-border-emphasis);
			}
			:host(:not([disabled])) #open-part:hover + * {
				border-color: var(--uui-color-border-emphasis);
			}
			:host([disabled]) #host {
				border-color: var(--uui-color-disabled-standalone);
			}

			:host([unpublished]) #open-part #content {
				opacity: 0.6;
			}

			slot[name='tag'] {
				flex-grow: 1;

				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			button {
				font-size: inherit;
				font-family: inherit;
				border: 0;
				padding: 0;
				background-color: transparent;
				text-align: left;
				color: var(--uui-color-text);
			}

			#content {
				align-self: stretch;
				line-height: normal;
				display: flex;
				position: relative;
				align-items: center;
			}

			#open-part {
				color: inherit;
				text-decoration: none;
				cursor: pointer;

				display: flex;
				text-align: left;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				border: none;
				background: none;

				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			#icon {
				font-size: 1.2em;
				margin-left: var(--uui-size-2);
				margin-right: var(--uui-size-1);
			}

			#info {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				height: 100%;
				padding-left: var(--uui-size-2, 6px);
			}

			#name {
				font-weight: 700;
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}

			:host(:not([disabled])) #open-part:hover #icon {
				color: var(--uui-color-interactive-emphasis);
			}
			:host(:not([disabled])) #open-part:hover #name {
				color: var(--uui-color-interactive-emphasis);
			}

			:host([disabled]) #icon {
				color: var(--uui-color-disabled-contrast);
			}
			:host([disabled]) #name {
				color: var(--uui-color-disabled-contrast);
			}
		`
];
P([
  f({ type: String, reflect: !1 })
], k.prototype, "label", 2);
P([
  f({ type: String, reflect: !1 })
], k.prototype, "icon", 2);
P([
  f({ type: Boolean, reflect: !0 })
], k.prototype, "unpublished", 2);
P([
  f({ attribute: !1 })
], k.prototype, "content", 2);
P([
  p()
], k.prototype, "_exposed", 2);
P([
  p()
], k.prototype, "_isOpen", 2);
P([
  p()
], k.prototype, "_ownerContentTypeName", 2);
P([
  p()
], k.prototype, "_variantName", 2);
k = P([
  N("umb-inline-list-block")
], k);
var He = Object.getOwnPropertyDescriptor, Ft = (t) => {
  throw TypeError(t);
}, Xe = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? He(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = u(o) || o);
  return o;
}, Qe = (t, e, i) => e.has(t) || Ft("Cannot " + i), Je = (t, e, i) => e.has(t) ? Ft("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ze = (t, e, i) => (Qe(t, e, "access private method"), i), vt, Yt;
let ft = class extends D {
  constructor() {
    super(...arguments), Je(this, vt);
  }
  render() {
    return a`
			<div id="host">
				<div id="open-part">
					${Ze(this, vt, Yt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</div>
				<div id="inside" draggable="false">${this.localize.term("blockEditor_unsupportedBlockDescription")}</div>
			</div>
		`;
  }
};
vt = /* @__PURE__ */ new WeakSet();
Yt = function() {
  return a`
			<span id="content">
				<span id="icon">
					<umb-icon name="icon-alert"></umb-icon>
				</span>
				<div id="info">
					<span id="name">${this.localize.term("blockEditor_unsupportedBlockName")}</span>
				</div>
			</span>
		`;
};
ft.styles = [
  lt,
  z`
			#host {
				position: relative;
				display: block;
				width: 100%;

				box-sizing: border-box;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface);

				border: 1px solid var(--uui-color-border);
				transition: border-color 80ms;

				min-width: 250px;
			}

			#open-part + * {
				border-top: 1px solid var(--uui-color-border);
			}
			:host([disabled]) #open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			:host([disabled]) #host {
				border-color: var(--uui-color-disabled-standalone);
			}

			:host([unpublished]) #open-part #content {
				opacity: 0.6;
			}

			slot[name='tag'] {
				flex-grow: 1;

				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			button {
				font-size: inherit;
				font-family: inherit;
				border: 0;
				padding: 0;
				background-color: transparent;
				text-align: left;
				color: var(--uui-color-text);
			}

			#content {
				align-self: stretch;
				line-height: normal;
				display: flex;
				position: relative;
				align-items: center;
			}

			#open-part {
				color: inherit;
				text-decoration: none;

				display: flex;
				text-align: left;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				border: none;
				background: none;

				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			#icon {
				font-size: 1.2em;
				margin-left: var(--uui-size-2);
				margin-right: var(--uui-size-1);
			}

			#info {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				height: 100%;
				padding-left: var(--uui-size-2, 6px);
			}

			#name {
				font-weight: 700;
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}

			:host([disabled]) #icon {
				color: var(--uui-color-disabled-contrast);
			}
			:host([disabled]) #name {
				color: var(--uui-color-disabled-contrast);
			}

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
ft = Xe([
  N("umb-unsupported-list-block")
], ft);
var je = Object.defineProperty, ti = Object.getOwnPropertyDescriptor, qt = (t) => {
  throw TypeError(t);
}, v = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? ti(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && je(e, i, o), o;
}, Ht = (t, e, i) => e.has(t) || qt("Cannot " + i), l = (t, e, i) => (Ht(t, e, "read from private field"), i ? i.call(t) : e.get(t)), F = (t, e, i) => e.has(t) ? qt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), d = (t, e, i) => (Ht(t, e, "access private method"), i), c, h, y, Xt, Qt, et, Jt, Ct, $t, Zt, jt, te, ee, ie, oe, se, ne, re;
let _ = class extends D {
  constructor() {
    super(), F(this, h), F(this, c, new De(this)), this._showContentEdit = !1, this._hasSettings = !1, this._label = "", this._blockViewProps = {
      contentKey: void 0,
      config: { showContentEdit: !1, showSettingsEdit: !1 }
    }, this._isReadOnly = !1, F(this, et, () => {
      l(this, c).expose();
    }), F(this, Ct, (t) => !(this._unsupported || t.forContentTypeAlias && !Ot(t.forContentTypeAlias, this._contentTypeAlias) || t.forBlockEditor && !Ot(t.forBlockEditor, Se))), F(this, $t, (t) => this._exposed ? t.component : a`<div>
				${t.component}
				<umb-block-overlay-expose-button
					.contentTypeName=${this._contentTypeName}
					@click=${l(this, et)}></umb-block-overlay-expose-button>
			</div>`), d(this, h, Xt).call(this);
  }
  get index() {
    return l(this, c).getIndex();
  }
  set index(t) {
    l(this, c).setIndex(t);
  }
  get contentKey() {
    return this._contentKey;
  }
  set contentKey(t) {
    t && (this._contentKey = t, l(this, c).setContentKey(t), new Vt(
      this,
      `$.contentData[${Ut({ key: t })}]`,
      (e) => {
        this._contentInvalid = e, this._blockViewProps.contentInvalid = e;
      },
      "observeMessagesForContent"
    ));
  }
  connectedCallback() {
    super.connectedCallback(), this.observe(
      l(this, c).contentElementTypeKey,
      (t) => {
        t && this.setAttribute("data-content-element-type-key", t);
      },
      "contentElementTypeKey"
    ), this.observe(
      l(this, c).contentElementTypeAlias,
      (t) => {
        t && (this._contentTypeAlias = t, this.setAttribute("data-content-element-type-alias", t));
      },
      "contentElementTypeAlias"
    ), this.observe(
      l(this, c).contentElementTypeName,
      (t) => {
        this._contentTypeName = t;
      },
      "contentElementTypeName"
    );
  }
  render() {
    return d(this, h, ie).call(this);
  }
};
c = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
y = function(t) {
  this._blockViewProps = { ...this._blockViewProps, ...t }, this.requestUpdate("_blockViewProps");
};
Xt = function() {
  this.observe(
    l(this, c).showContentEdit,
    (t) => {
      this._showContentEdit = t, d(this, h, y).call(this, { config: { ...this._blockViewProps.config, showContentEdit: t } });
    },
    null
  ), this.observe(
    l(this, c).settingsElementTypeKey,
    (t) => {
      this._hasSettings = !!t, d(this, h, y).call(this, { config: { ...this._blockViewProps.config, showSettingsEdit: !!t } });
    },
    null
  ), this.observe(
    l(this, c).blockType,
    (t) => {
      d(this, h, y).call(this, { blockType: t });
    },
    null
  ), this.observe(
    l(this, c).label,
    (t) => {
      d(this, h, y).call(this, { label: t }), this._label = t;
    },
    null
  ), this.observe(
    l(this, c).contentElementTypeIcon,
    (t) => {
      d(this, h, y).call(this, { icon: t }), this._icon = t;
    },
    null
  ), this.observe(
    l(this, c).hasExpose,
    (t) => {
      d(this, h, y).call(this, { unpublished: !t }), this._exposed = t;
    },
    null
  ), this.observe(
    l(this, c).unsupported,
    (t) => {
      t !== void 0 && (d(this, h, y).call(this, { unsupported: t }), this._unsupported = t, this.toggleAttribute("unsupported", t));
    },
    null
  ), this.observe(
    l(this, c).inlineEditingMode,
    (t) => {
      this._inlineEditingMode = t;
    },
    null
  ), this.observe(
    l(this, c).layout,
    (t) => {
      d(this, h, y).call(this, { layout: t });
    },
    null
  ), d(this, h, Qt).call(this), this.observe(
    l(this, c).settingsKey,
    (t) => {
      this.removeUmbControllerByAlias("observeMessagesForSettings"), t && new Vt(
        this,
        `$.settingsData[${Ut({ key: t })}]`,
        (e) => {
          this._settingsInvalid = e, this._blockViewProps.settingsInvalid = e;
        },
        "observeMessagesForSettings"
      );
    },
    null
  ), this.observe(
    l(this, c).workspaceEditContentPath,
    (t) => {
      this._workspaceEditContentPath = t, d(this, h, y).call(this, { config: { ...this._blockViewProps.config, editContentPath: t } });
    },
    null
  ), this.observe(
    l(this, c).workspaceEditSettingsPath,
    (t) => {
      this._workspaceEditSettingsPath = t, d(this, h, y).call(this, { config: { ...this._blockViewProps.config, editSettingsPath: t } });
    },
    null
  ), this.observe(
    l(this, c).readOnlyState.isReadOnly,
    (t) => this._isReadOnly = t,
    "umbReadonlyObserver"
  );
};
Qt = async function() {
  this.observe(
    await l(this, c).contentValues(),
    (t) => {
      d(this, h, y).call(this, { content: t });
    },
    null
  ), this.observe(
    await l(this, c).settingsValues(),
    (t) => {
      d(this, h, y).call(this, { settings: t });
    },
    null
  );
};
et = /* @__PURE__ */ new WeakMap();
Jt = async function() {
  const t = await this.getContext(Rt), e = await this.getContext(yt), i = await this.getContext(bt), s = t?.getName(), o = e?.getLabel(), n = this._label, u = s ? `${s} - ${o} - ${n}` : `${o} - ${n}`, B = l(this, c).getContent(), W = l(this, c).getLayout(), I = l(this, c).getSettings(), ut = l(this, c).getExpose(), Z = {
    contentData: B ? [structuredClone(B)] : [],
    layout: {
      [rt]: W ? [structuredClone(W)] : void 0
    },
    settingsData: I ? [structuredClone(I)] : [],
    expose: ut ? [structuredClone(ut)] : []
  };
  i.write({
    icon: this._icon,
    name: u,
    propertyValue: Z,
    propertyEditorUiAlias: Y
  });
};
Ct = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
Zt = function() {
  return a`<umb-ref-list-block
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${at()}></umb-ref-list-block>`;
};
jt = function() {
  return a`<umb-inline-list-block
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${at()}></umb-inline-list-block>`;
};
te = function() {
  return a`<umb-unsupported-list-block
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${at()}></umb-unsupported-list-block>`;
};
ee = function() {
  return this._unsupported ? d(this, h, te).call(this) : this._inlineEditingMode ? d(this, h, jt).call(this) : d(this, h, Zt).call(this);
};
ie = function() {
  return this.contentKey && (this._contentTypeAlias || this._unsupported) ? a`
					<div class="umb-block-list__block">
						<umb-extension-slot
							type="blockEditorCustomView"
							default-element=${this._inlineEditingMode ? "umb-inline-list-block" : "umb-ref-list-block"}
							.renderMethod=${l(this, $t)}
							.props=${this._blockViewProps}
							.filter=${l(this, Ct)}
							single
							>${d(this, h, ee).call(this)}</umb-extension-slot
						>
						<uui-action-bar>
							${d(this, h, oe).call(this)} ${d(this, h, se).call(this)}
							${d(this, h, re).call(this)} ${d(this, h, ne).call(this)}
						</uui-action-bar>
						${!this._showContentEdit && this._contentInvalid ? a`<uui-badge attention color="danger" label="Invalid content">!</uui-badge>` : g}
					</div>
				` : g;
};
oe = function() {
  return this._showContentEdit && this._workspaceEditContentPath ? a`<uui-button
					label="edit"
					look="secondary"
					color=${this._contentInvalid ? "danger" : ""}
					href=${this._workspaceEditContentPath}>
					<uui-icon name=${this._exposed === !1 ? "icon-add" : "icon-edit"}></uui-icon>
					${this._contentInvalid ? a`<uui-badge attention color="danger" label="Invalid content">!</uui-badge>` : g}
				</uui-button>` : this._showContentEdit === !1 && this._exposed === !1 ? a`<uui-button
						@click=${l(this, et)}
						label=${this.localize.term("blockEditor_createThisFor", this._contentTypeName)}
						look="secondary"
						><uui-icon name="icon-add"></uui-icon
					></uui-button>` : g;
};
se = function() {
  return a`
			${this._hasSettings && this._workspaceEditSettingsPath ? a`<uui-button
						label="Edit settings"
						look="secondary"
						color=${this._settingsInvalid ? "danger" : ""}
						href=${this._workspaceEditSettingsPath}>
						<uui-icon name="icon-settings"></uui-icon>
						${this._settingsInvalid ? a`<uui-badge attention color="danger" label="Invalid settings">!</uui-badge>` : g}
					</uui-button>` : g}
		`;
};
ne = function() {
  return this._isReadOnly ? g : a` <uui-button label="delete" look="secondary" @click=${() => l(this, c).requestDelete()}>
			<uui-icon name="icon-remove"></uui-icon>
		</uui-button>`;
};
re = function() {
  return a`<uui-button label="Copy to clipboard" look="secondary" @click=${() => d(this, h, Jt).call(this)}>
			<uui-icon name="icon-clipboard-copy"></uui-icon>
		</uui-button>`;
};
_.styles = [
  z`
			:host {
				position: relative;
				display: block;
				--umb-block-list-entry-actions-opacity: 0;
			}

			:host([settings-invalid]),
			:host([content-invalid]),
			:host(:hover),
			:host(:focus-within) {
				--umb-block-list-entry-actions-opacity: 1;
			}

			:host::after {
				content: '';
				position: absolute;
				z-index: 1;
				pointer-events: none;
				inset: 0;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);

				transition: border-color 240ms ease-in;
			}

			:host([settings-invalid])::after,
			:host([content-invalid])::after {
				border-color: var(--uui-color-danger);
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
				opacity: var(--umb-block-list-entry-actions-opacity, 0);
				transition: opacity 120ms;
			}

			uui-badge {
				z-index: 2;
			}

			:host::after {
				content: '';
				position: absolute;
				z-index: 1;
				pointer-events: none;
				inset: 0;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);

				transition: border-color 240ms ease-in;
			}
			:host(:hover):not(:drop)::after {
				display: block;
				border-color: var(--uui-color-interactive-emphasis);
				box-shadow:
					0 0 0 1px rgba(255, 255, 255, 0.7),
					inset 0 0 0 1px rgba(255, 255, 255, 0.7);
			}

			:host([drag-placeholder])::after {
				display: block;
				border-width: 2px;
				border-color: var(--uui-color-interactive-emphasis);
				animation: ${Ie};
			}
			:host([drag-placeholder])::before {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-interactive-emphasis);
				opacity: 0.12;
			}
			:host([drag-placeholder]) .umb-block-list__block {
				transition: opacity 50ms 16ms;
				opacity: 0;
			}
		`
];
v([
  f({ type: Number })
], _.prototype, "index", 1);
v([
  f({ attribute: !1 })
], _.prototype, "contentKey", 1);
v([
  p()
], _.prototype, "_contentTypeAlias", 2);
v([
  p()
], _.prototype, "_contentTypeName", 2);
v([
  p()
], _.prototype, "_showContentEdit", 2);
v([
  p()
], _.prototype, "_hasSettings", 2);
v([
  p()
], _.prototype, "_label", 2);
v([
  p()
], _.prototype, "_icon", 2);
v([
  p()
], _.prototype, "_exposed", 2);
v([
  p()
], _.prototype, "_unsupported", 2);
v([
  p()
], _.prototype, "_workspaceEditContentPath", 2);
v([
  p()
], _.prototype, "_workspaceEditSettingsPath", 2);
v([
  p()
], _.prototype, "_inlineEditingMode", 2);
v([
  f({ type: Boolean, attribute: "content-invalid", reflect: !0 })
], _.prototype, "_contentInvalid", 2);
v([
  f({ type: Boolean, attribute: "settings-invalid", reflect: !0 })
], _.prototype, "_settingsInvalid", 2);
v([
  p()
], _.prototype, "_blockViewProps", 2);
v([
  p()
], _.prototype, "_isReadOnly", 2);
_ = v([
  N("umb-block-list-entry")
], _);
var ei = Object.defineProperty, ii = Object.getOwnPropertyDescriptor, ae = Object.getPrototypeOf, oi = Reflect.get, si = Reflect.set, le = (t) => {
  throw TypeError(t);
}, w = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? ii(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && ei(e, i, o), o;
}, Pt = (t, e, i) => e.has(t) || le("Cannot " + i), r = (t, e, i) => (Pt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), C = (t, e, i) => e.has(t) ? le("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), it = (t, e, i, s) => (Pt(t, e, "write to private field"), e.set(t, i), i), Q = (t, e, i) => (Pt(t, e, "access private method"), i), dt = (t, e, i) => oi(ae(t), i, e), Lt = (t, e, i, s) => (si(ae(t), i, s, e), s), H, R, ot, st, nt, X, b, x, S, ce, ue, he, pe, de;
const ni = {
  getUniqueOfElement: (t) => t.contentKey,
  getUniqueOfModel: (t) => t.contentKey,
  //identifier: 'block-list-editor',
  itemSelector: "umb-block-list-entry"
  //containerSelector: 'EMPTY ON PURPOSE, SO IT BECOMES THE HOST ELEMENT',
};
let m = class extends xe(D) {
  constructor() {
    super(), C(this, S), C(this, H, new Me(this, {
      ...ni,
      onChange: ({ model: t }) => {
        r(this, x).setLayouts(t);
      }
    })), C(this, R, new Ee(this)), C(this, ot), C(this, st), C(this, nt), this._createButtonLabel = this.localize.term("content_createEmpty"), C(this, X, !1), this._layouts = [], C(this, b, new Ve(this)), C(this, x, new Ae(this)), this.consumeContext(yt, (t) => {
      Q(this, S, ce).call(this, t);
    }), this.observe(
      r(this, b).layouts,
      (t) => {
        const e = [], i = t.map((o) => o.contentKey);
        r(this, R).messages.getMessagesOfPathAndDescendant("$.contentData").forEach((o) => {
          const n = St(o.path).key;
          n && i.indexOf(n) === -1 && e.push(o.key);
        });
        const s = t.map((o) => o.settingsKey).filter((o) => o !== void 0);
        r(this, R).messages.getMessagesOfPathAndDescendant("$.settingsData").forEach((o) => {
          const n = St(o.path).key;
          n && s.indexOf(n) === -1 && e.push(o.key);
        }), r(this, R).messages.removeMessageByKeys(e);
      },
      null
    ), this.consumeContext(Rt, (t) => {
      r(this, b).setVariantId(t.getVariantId());
    }), this.addValidator(
      "rangeUnderflow",
      () => this.localize.term(
        "validation_entriesShort",
        this._limitMin,
        (this._limitMin ?? 0) - r(this, x).getLength()
      ),
      () => !!this._limitMin && r(this, x).getLength() < this._limitMin
    ), this.addValidator(
      "rangeOverflow",
      () => this.localize.term(
        "validation_entriesExceed",
        this._limitMax,
        r(this, x).getLength() - (this._limitMax || 0)
      ),
      () => !!this._limitMax && r(this, x).getLength() > this._limitMax
    ), this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? Ce,
      () => !!this.mandatory && r(this, x).getLength() === 0
    ), this.observe(
      r(this, x).layoutEntries,
      (t) => {
        this._layouts = t, r(this, H).setModel(t), r(this, b).setLayouts(t);
      },
      null
    ), this.observe(
      r(this, b).blockTypes,
      (t) => {
        this._blocks = t;
      },
      null
    ), this.observe(
      r(this, x).catalogueRouteBuilder,
      (t) => {
        this._catalogueRouteBuilder = t;
      },
      null
    );
  }
  set value(t) {
    if (it(this, nt, t), !t) {
      super.value = void 0;
      return;
    }
    const e = t ? { ...t } : {};
    e.layout ??= {}, e.contentData ??= [], e.settingsData ??= [], e.expose ??= [], super.value = e, r(this, b).setLayouts(super.value.layout[rt] ?? []), r(this, b).setContents(super.value.contentData), r(this, b).setSettings(super.value.settingsData), r(this, b).setExposes(super.value.expose);
  }
  get value() {
    return super.value;
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("validationLimit");
    this._limitMin = e?.min, this._limitMax = e?.max;
    const i = t.getValueByAlias("blocks") ?? [];
    r(this, b).setBlockTypes(i);
    const s = t.getValueByAlias("useInlineEditingAsDefault");
    r(this, b).setInlineEditingMode(s), this.style.maxWidth = t.getValueByAlias("maxPropertyWidth") ?? "", r(this, b).setEditorConfiguration(t);
    const o = t.getValueByAlias("createLabel");
    o ? this._createButtonLabel = this.localize.string(o) : i.length === 1 && r(this, b).contentTypesLoaded.then(() => {
      const n = r(this, b).getContentTypeNameOf(i[0].contentElementTypeKey);
      this._createButtonLabel = this.localize.term("blockEditor_addThis", this.localize.string(n));
    });
  }
  set readonly(t) {
    it(this, X, t), r(this, X) ? r(this, H).disable() : r(this, H).enable();
  }
  get readonly() {
    return r(this, X);
  }
  getFormElement() {
  }
  render() {
    return a`
			${Dt(
      this._layouts,
      (t) => t.contentKey,
      (t, e) => a`
					${Q(this, S, he).call(this, e)}
					<umb-block-list-entry
						.contentKey=${t.contentKey}
						.layout=${t}
						${at()}>
					</umb-block-list-entry>
				`
    )}
			${Q(this, S, ue).call(this)}
		`;
  }
};
H = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
ce = function(t) {
  this.observe(
    t.dataPath,
    (e) => {
      r(this, ot)?.destroy(), r(this, st)?.destroy(), e && (r(this, R).setDataPath(e), it(this, ot, new Bt(this, "contentData")), it(this, st, new Bt(this, "settingsData")));
    },
    "observeDataPath"
  ), this.observe(
    t?.alias,
    (e) => {
      r(this, b).setPropertyAlias(e);
    },
    "observePropertyAlias"
  ), this.observe(
    Tt([
      r(this, b).layouts,
      r(this, b).contents,
      r(this, b).settings,
      r(this, b).exposes
    ]).pipe(Re(20)),
    ([e, i, s, o]) => {
      e.length === 0 ? Lt(m.prototype, this, "value", void 0) : Lt(m.prototype, this, "value", {
        ...dt(m.prototype, this, "value"),
        layout: { [rt]: e },
        contentData: i,
        settingsData: s,
        expose: o
      }), !(r(this, nt) === void 0 && dt(m.prototype, this, "value") === void 0) && t.setValue(dt(m.prototype, this, "value"));
    },
    "motherObserver"
  ), this.observe(
    Tt([t.isReadOnly, t.variantId]),
    ([e, i]) => {
      const s = "UMB_PROPERTY_EDITOR_UI";
      if (i !== void 0)
        if (e) {
          const o = {
            unique: s,
            variantId: i,
            message: ""
          };
          r(this, b).readOnlyState.addState(o);
        } else
          r(this, b).readOnlyState.removeState(s);
    },
    "observeIsReadOnly"
  );
};
ue = function() {
  return this.readonly && this._layouts.length > 0 ? g : a` <uui-button-group> ${Q(this, S, pe).call(this)} ${Q(this, S, de).call(this)} </uui-button-group> `;
};
he = function(t) {
  return this.readonly ? g : a`<uui-button-inline-create
			label=${this._createButtonLabel}
			href=${this._catalogueRouteBuilder?.({ view: "create", index: t }) ?? ""}></uui-button-inline-create>`;
};
pe = function() {
  let t;
  if (this._blocks?.length === 1) {
    const e = this._blocks[0].contentElementTypeKey;
    t = this._catalogueRouteBuilder?.({ view: "create", index: -1 }) + "modal/umb-modal-workspace/create/" + e;
  } else
    t = this._catalogueRouteBuilder?.({ view: "create", index: -1 });
  return a`
			<uui-button
				look="placeholder"
				label=${this._createButtonLabel}
				href=${t ?? ""}
				?disabled=${this.readonly}></uui-button>
		`;
};
de = function() {
  return a`
			<uui-button
				label=${this.localize.term("content_createFromClipboard")}
				look="placeholder"
				href=${this._catalogueRouteBuilder?.({ view: "clipboard", index: -1 }) ?? ""}
				?disabled=${this.readonly}>
				<uui-icon name="icon-clipboard-paste"></uui-icon>
			</uui-button>
		`;
};
m.styles = [
  lt,
  z`
			:host {
				display: grid;
				gap: 1px;
			}
			> div {
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}

			uui-button-group {
				padding-top: 1px;
				display: grid;
				grid-template-columns: 1fr auto;
			}
		`
];
w([
  f({ attribute: !1 })
], m.prototype, "value", 1);
w([
  p()
], m.prototype, "_createButtonLabel", 2);
w([
  f({ type: Boolean, reflect: !0 })
], m.prototype, "readonly", 1);
w([
  f({ type: Boolean })
], m.prototype, "mandatory", 2);
w([
  f({ type: String })
], m.prototype, "mandatoryMessage", 2);
w([
  p()
], m.prototype, "_limitMin", 2);
w([
  p()
], m.prototype, "_limitMax", 2);
w([
  p()
], m.prototype, "_blocks", 2);
w([
  p()
], m.prototype, "_layouts", 2);
w([
  p()
], m.prototype, "_catalogueRouteBuilder", 2);
m = w([
  N("umb-property-editor-ui-block-list")
], m);
const Di = m;
export {
  m as UmbPropertyEditorUIBlockListElement,
  Di as default
};
//# sourceMappingURL=property-editor-ui-block-list.element-Bp7dEkly.js.map
