import { U as N, a as W } from "../index-D4Ltu24Y.js";
import { c as Kt, b as Dt, d as Nt } from "../index-D4Ltu24Y.js";
import { UmbContextToken as w } from "@umbraco-cms/backoffice/context-api";
import { UmbBlockEntryContext as F, UMB_BLOCK_ENTRY_CONTEXT as H, UmbDataPathBlockElementDataQuery as O, UmbBlockManagerContext as Y } from "@umbraco-cms/backoffice/block";
import { mergeObservables as z, observeMultiple as G, UmbBooleanState as X } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { css as C, property as m, state as b, customElement as P, html as _, nothing as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as j } from "@umbraco-cms/backoffice/style";
import { stringOrStringArrayContains as S } from "@umbraco-cms/backoffice/utils";
import { UmbObserveValidationStateController as $ } from "@umbraco-cms/backoffice/validation";
import { c as q } from "../block-catalogue-modal.token-Fmisqeoi.js";
import "../block-entry.context-token-DG6_TzkT.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import { UmbModalRouteRegistrationController as R } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import { U as Q } from "../block-entries.context-CiWNQmmy.js";
import "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import "../block-catalogue-modal.element-B2pvOiFo.js";
import "../block-workspace.modal-token-N1xnaaIe.js";
import { UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS as J } from "@umbraco-cms/backoffice/rte";
const U = new w(
  "UmbBlockManagerContext"
), Z = new w("UmbBlockEntriesContext");
class tt extends F {
  constructor(e) {
    super(e, U, Z), this.displayInline = this._layout.asObservablePart((o) => o ? o.displayInline ?? !1 : void 0), this.displayInlineConfig = this._blockType.asObservablePart((o) => o ? o.displayInline ?? !1 : void 0), this.forceHideContentEditorInOverlay = this._blockType.asObservablePart(
      (o) => o ? o.forceHideContentEditorInOverlay ?? !1 : void 0
    ), this.showContentEdit = z(
      [this._contentStructureHasProperties, this.forceHideContentEditorInOverlay],
      ([o, i]) => o === !0 && i === !1
    );
  }
  _gotManager() {
  }
  _gotEntries() {
    this.observe(
      G([this.displayInline, this.displayInlineConfig]),
      ([e, o]) => {
        if (o !== void 0 && e !== void 0 && o !== e) {
          const i = this._layout.getValue();
          if (!i) return;
          this._layout.setValue({
            ...i,
            displayInline: o
          });
        }
      },
      "displayInlineCorrection"
    );
  }
  _gotContentType() {
  }
}
var et = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, f = (t, e, o, i) => {
  for (var s = i > 1 ? void 0 : i ? ot(e, o) : e, h = t.length - 1, p; h >= 0; h--)
    (p = t[h]) && (s = (i ? p(e, o, s) : p(s)) || s);
  return i && s && et(e, o, s), s;
};
let y = class extends M {
  constructor() {
    super(), this.consumeContext(H, (t) => {
      this.observe(
        t.workspaceEditContentPath,
        (e) => {
          this._workspaceEditPath = e;
        },
        "observeWorkspaceEditPath"
      );
    });
  }
  render() {
    return _`<uui-ref-node standalone href=${this._workspaceEditPath ?? "#"}>
			<umb-icon slot="icon" .name=${this.icon}></umb-icon>
			<umb-ufm-render slot="name" inline .markdown=${this.label} .value=${this.content}></umb-ufm-render>
		</uui-ref-node>`;
  }
};
y.styles = [
  C`
			:host {
				display: block;
			}
			uui-ref-node {
				min-height: var(--uui-size-16);
			}
			:host([unpublished]) umb-icon,
			:host([unpublished]) umb-ufm-render {
				opacity: 0.6;
			}
		`
];
f([
  m({ type: String })
], y.prototype, "label", 2);
f([
  m({ type: String })
], y.prototype, "icon", 2);
f([
  m({ type: Boolean, reflect: !0 })
], y.prototype, "unpublished", 2);
f([
  m({ attribute: !1 })
], y.prototype, "content", 2);
f([
  b()
], y.prototype, "_workspaceEditPath", 2);
y = f([
  P("umb-ref-rte-block")
], y);
var it = Object.defineProperty, st = Object.getOwnPropertyDescriptor, I = (t) => {
  throw TypeError(t);
}, u = (t, e, o, i) => {
  for (var s = i > 1 ? void 0 : i ? st(e, o) : e, h = t.length - 1, p; h >= 0; h--)
    (p = t[h]) && (s = (i ? p(e, o, s) : p(s)) || s);
  return i && s && it(e, o, s), s;
}, x = (t, e, o) => e.has(t) || I("Cannot " + o), n = (t, e, o) => (x(t, e, "read from private field"), o ? o.call(t) : e.get(t)), g = (t, e, o) => e.has(t) ? I("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), c = (t, e, o) => (x(t, e, "access private method"), o), r, a, d, A, B, E, T, V, L, K, D;
let l = class extends M {
  constructor() {
    super(), g(this, a), g(this, r, new tt(this)), this._showContentEdit = !1, this._hasSettings = !1, this._label = "", this._blockViewProps = {
      contentKey: void 0,
      config: { showContentEdit: !1, showSettingsEdit: !1 }
    }, g(this, B, (t) => {
      const e = this._contentTypeAlias ?? "", o = !t.forBlockEditor || S(t.forBlockEditor, N), i = !t.forContentTypeAlias || S(t.forContentTypeAlias, e);
      return o && i;
    }), g(this, E, () => {
      n(this, r).expose();
    }), g(this, T, (t) => this._exposed ? t.component : _`<div>
				${t.component}
				<umb-block-overlay-expose-button
					.contentTypeName=${this._contentTypeName}
					@click=${n(this, E)}></umb-block-overlay-expose-button>
			</div>`), n(this, r).setIndex(0), this.observe(
      n(this, r).showContentEdit,
      (t) => {
        this._showContentEdit = t, c(this, a, d).call(this, { config: { ...this._blockViewProps.config, showContentEdit: t } });
      },
      null
    ), this.observe(
      n(this, r).settingsElementTypeKey,
      (t) => {
        this._hasSettings = !!t, c(this, a, d).call(this, { config: { ...this._blockViewProps.config, showSettingsEdit: !!t } });
      },
      null
    ), this.observe(
      n(this, r).contentElementTypeAlias,
      (t) => {
        this._contentTypeAlias = t;
      },
      null
    ), this.observe(
      n(this, r).contentElementTypeName,
      (t) => {
        this._contentTypeName = t;
      },
      null
    ), this.observe(
      n(this, r).blockType,
      (t) => {
        c(this, a, d).call(this, { blockType: t });
      },
      null
    ), this.observe(
      n(this, r).label,
      (t) => {
        c(this, a, d).call(this, { label: t }), this._label = t;
      },
      null
    ), this.observe(
      n(this, r).contentElementTypeIcon,
      (t) => {
        c(this, a, d).call(this, { icon: t }), this._icon = t;
      },
      null
    ), this.observe(
      n(this, r).hasExpose,
      (t) => {
        c(this, a, d).call(this, { unpublished: !t }), this._exposed = t;
      },
      null
    ), this.observe(
      n(this, r).layout,
      (t) => {
        c(this, a, d).call(this, { layout: t });
      },
      null
    ), c(this, a, A).call(this), this.observe(
      n(this, r).settingsKey,
      (t) => {
        this.removeUmbControllerByAlias("observeMessagesForSettings"), t && new $(
          this,
          `$.settingsData[${O({ key: t })}]`,
          (e) => {
            this._settingsInvalid = e, this._blockViewProps.settingsInvalid = e;
          },
          "observeMessagesForSettings"
        );
      },
      null
    ), this.observe(
      n(this, r).workspaceEditContentPath,
      (t) => {
        this._workspaceEditContentPath = t, c(this, a, d).call(this, { config: { ...this._blockViewProps.config, editContentPath: t } });
      },
      null
    ), this.observe(
      n(this, r).workspaceEditSettingsPath,
      (t) => {
        this._workspaceEditSettingsPath = t, c(this, a, d).call(this, { config: { ...this._blockViewProps.config, editSettingsPath: t } });
      },
      null
    );
  }
  get contentKey() {
    return this._contentKey;
  }
  set contentKey(t) {
    t && (this._contentKey = t, n(this, r).setContentKey(t), new $(
      this,
      `$.contentData[${O({ key: t })}]`,
      (e) => {
        this._contentInvalid = e, this._blockViewProps.contentInvalid = e;
      },
      "observeMessagesForContent"
    ));
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("contenteditable", "false");
  }
  render() {
    return c(this, a, V).call(this);
  }
};
r = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
d = function(t) {
  this._blockViewProps = { ...this._blockViewProps, ...t }, this.requestUpdate("_blockViewProps");
};
A = async function() {
  this.observe(
    await n(this, r).contentValues(),
    (t) => {
      c(this, a, d).call(this, { content: t });
    },
    null
  ), this.observe(
    await n(this, r).settingsValues(),
    (t) => {
      c(this, a, d).call(this, { settings: t });
    },
    null
  );
};
B = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
V = function() {
  return this.contentKey && this._contentTypeAlias ? _`
					<div class="uui-text uui-font">
						<umb-extension-slot
							type="blockEditorCustomView"
							default-element="umb-ref-rte-block"
							.renderMethod=${n(this, T)}
							.props=${this._blockViewProps}
							.filter=${n(this, B)}
							single>
							${c(this, a, L).call(this)}
						</umb-extension-slot>
						<uui-action-bar> ${c(this, a, K).call(this)} ${c(this, a, D).call(this)} </uui-action-bar>
						${!this._showContentEdit && this._contentInvalid ? _`<uui-badge attention color="danger" label="Invalid content">!</uui-badge>` : v}
					</div>
				` : v;
};
L = function() {
  return _`<umb-ref-rte-block
			.label=${this._label}
			.icon=${this._icon}
			.unpublished=${!this._exposed}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-ref-rte-block>`;
};
K = function() {
  return this._showContentEdit && this._workspaceEditContentPath ? _`<uui-button
					label="edit"
					look="secondary"
					color=${this._contentInvalid ? "danger" : ""}
					href=${this._workspaceEditContentPath}>
					<uui-icon name=${this._exposed === !1 ? "icon-add" : "icon-edit"}></uui-icon>
					${this._contentInvalid ? _`<uui-badge attention color="danger" label="Invalid content">!</uui-badge>` : v}
				</uui-button>` : this._showContentEdit === !1 && this._exposed === !1 ? _`<uui-button
						@click=${n(this, E)}
						label=${this.localize.term("blockEditor_createThisFor", this._contentTypeName)}
						look="secondary">
						<uui-icon name="icon-add"></uui-icon>
					</uui-button>` : v;
};
D = function() {
  return _`
			${this._hasSettings && this._workspaceEditSettingsPath ? _`<uui-button
						label="Edit settings"
						look="secondary"
						color=${this._settingsInvalid ? "danger" : ""}
						href=${this._workspaceEditSettingsPath}>
						<uui-icon name="icon-settings"></uui-icon>
						${this._settingsInvalid ? _`<uui-badge attention color="danger" label="Invalid settings">!</uui-badge>` : v}
					</uui-button>` : v}
		`;
};
l.styles = [
  j,
  C`
			:host {
				position: relative;
				display: block;
				user-select: none;
				user-drag: auto;
				white-space: nowrap;
			}
			:host(.ProseMirror-selectednode) {
				umb-ref-rte-block {
					cursor: not-allowed;
					outline: 3px solid var(--uui-color-focus);
				}
			}
			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
			}

			:host([drag-placeholder]) {
				opacity: 0.2;
			}
		`
];
u([
  m({ type: String, attribute: "data-content-key", reflect: !0 })
], l.prototype, "contentKey", 1);
u([
  b()
], l.prototype, "_showContentEdit", 2);
u([
  b()
], l.prototype, "_hasSettings", 2);
u([
  b()
], l.prototype, "_label", 2);
u([
  b()
], l.prototype, "_icon", 2);
u([
  b()
], l.prototype, "_exposed", 2);
u([
  b()
], l.prototype, "_workspaceEditContentPath", 2);
u([
  b()
], l.prototype, "_workspaceEditSettingsPath", 2);
u([
  b()
], l.prototype, "_contentTypeAlias", 2);
u([
  b()
], l.prototype, "_contentTypeName", 2);
u([
  b()
], l.prototype, "_blockViewProps", 2);
u([
  m({ type: Boolean, attribute: "content-invalid", reflect: !0 })
], l.prototype, "_contentInvalid", 2);
u([
  m({ type: Boolean, attribute: "settings-invalid", reflect: !0 })
], l.prototype, "_settingsInvalid", 2);
l = u([
  P("umb-rte-block")
], l);
var nt = Object.getOwnPropertyDescriptor, rt = (t, e, o, i) => {
  for (var s = i > 1 ? void 0 : i ? nt(e, o) : e, h = t.length - 1, p; h >= 0; h--)
    (p = t[h]) && (s = p(s) || s);
  return s;
};
let k = class extends l {
};
k.styles = [
  ...l.styles,
  C`
			:host {
				display: inline-block;
			}
		`
];
k = rt([
  P("umb-rte-block-inline")
], k);
class It extends Q {
  constructor(e) {
    super(e, U), this.canCreate = new X(!0).asObservable(), new R(this, q).addAdditionalPath("_catalogue/:view").onSetup((o) => ({
      data: {
        blocks: this._manager?.getBlockTypes() ?? [],
        blockGroups: [],
        openClipboard: o.view === "clipboard",
        originData: {},
        createBlockInWorkspace: !0
      }
    })).onSubmit(async (o, i) => {
      if (o?.create && i) {
        const s = await this.create(
          o.create.contentElementTypeKey,
          // We can parse an empty object, cause the rest will be filled in by others.
          {}
        );
        if (s)
          this.insert(
            s.layout,
            s.content,
            s.settings,
            i.originData
          );
        else
          throw new Error("Failed to create block");
      }
    }).observeRouteBuilder((o) => {
      this._catalogueRouteBuilderState.setValue(o);
    }), new R(this, W).addAdditionalPath("block").onSetup(() => ({ data: { entityType: "block", preset: {}, baseDataPath: this._dataPath }, modal: { size: "medium" } })).observeRouteBuilder((o) => {
      const i = o({});
      this._workspacePath.setValue(i);
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
  getPathForCreateBlock() {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "create" });
  }
  getPathForClipboard() {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "clipboard" });
  }
  async setLayouts(e) {
    await this._retrieveManager, this._manager?.setLayouts(e);
  }
  async create(e, o, i) {
    return await this._retrieveManager, await this._manager?.createWithPresets(e, o, i);
  }
  // insert Block?
  async insert(e, o, i, s) {
    return await this._retrieveManager, this._manager?.insert(e, o, i, s) ?? !1;
  }
  // create Block?
  async delete(e) {
    await super.delete(e), this._manager?.deleteLayoutElement(e);
  }
  async _insertFromPropertyValue(e, o) {
    const i = e.layout[J];
    if (!i)
      throw new Error("No layout entries found");
    return await Promise.all(
      i.map(async (s) => {
        this._insertBlockFromPropertyValue(s, e, o);
      })
    ), o;
  }
}
const xt = new w("UmbBlockEntryContext");
class At extends Y {
  removeOneLayout(e) {
    this._layouts.removeOne(e);
  }
  removeManyLayouts(e) {
    this._layouts.remove(e);
  }
  /**
   * @deprecated Use createWithPresets instead. Will be removed in v.17.
   */
  create(e, o, i) {
    throw new Error("Method deparecated use createWithPresets");
  }
  async createWithPresets(e, o, i) {
    const s = await super._createBlockData(e, o), h = this.getBlockTypes().find((p) => p.contentElementTypeKey === e);
    if (!h)
      throw new Error(`Cannot create block, missing block type for ${e}`);
    return h.displayInline && (s.layout.displayInline = !0), s;
  }
  insert(e, o, i, s) {
    return this._layouts.appendOne(e), this.insertBlockData(e, o, i, s), !0;
  }
  /**
   * @param contentKey
   * @internal
   */
  deleteLayoutElement(e) {
    this.removeBlockKey(e);
  }
}
export {
  N as UMB_BLOCK_RTE,
  Z as UMB_BLOCK_RTE_ENTRIES_CONTEXT,
  xt as UMB_BLOCK_RTE_ENTRY_CONTEXT,
  U as UMB_BLOCK_RTE_MANAGER_CONTEXT,
  Kt as UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS,
  Dt as UMB_BLOCK_RTE_TYPE,
  Nt as UMB_BLOCK_RTE_TYPE_WORKSPACE_ALIAS,
  W as UMB_BLOCK_RTE_WORKSPACE_MODAL,
  It as UmbBlockRteEntriesContext,
  l as UmbBlockRteEntryElement,
  k as UmbBlockRteEntryInlineElement,
  At as UmbBlockRteManagerContext
};
//# sourceMappingURL=index.js.map
