import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { css as p, state as h, property as r, customElement as u, repeat as ye, html as l, nothing as _, query as V, LitElement as je, when as $, ifDefined as g, styleMap as Ws, map as zs, classMap as Vi } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as qi, UmbModalElement as Rs, UMB_ITEM_PICKER_MODAL as Vs, umbConfirmModal as Hi } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UMB_NOTIFICATION_CONTEXT as qs } from "@umbraco-cms/backoffice/notification";
import { a as Hs } from "./entity.context-C8qVKYoi.js";
import { UMB_SECTION_SIDEBAR_CONTEXT as Ns } from "@umbraco-cms/backoffice/section";
import { umbExtensionsRegistry as ai } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as Fs, createExtensionApi as Gs } from "@umbraco-cms/backoffice/extension-api";
import { e as Ks } from "./extractUmbColorVariable.function-C_Z99zyW.js";
import { UmbChangeEvent as c, UmbDeleteEvent as Ni, UmbInputEvent as si } from "@umbraco-cms/backoffice/event";
import { UMB_DATA_TYPE_PICKER_FLOW_DATA_TYPE_PICKER_MODAL as Ys, UMB_DATATYPE_WORKSPACE_MODAL as Xs, UMB_DATA_TYPE_ENTITY_TYPE as Fi } from "@umbraco-cms/backoffice/data-type";
import { UmbModalRouteRegistrationController as xi } from "@umbraco-cms/backoffice/router";
import { UmbFormControlMixin as Ue, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as Zs } from "@umbraco-cms/backoffice/validation";
import { UUIFormControlMixin as re, UUIInputElement as Js, UUIRadioElement as Qs, UUIInputEvent as Gi, UUIRefNodeElement as Ki } from "@umbraco-cms/backoffice/external/uui";
import { splitStringToArray as js, generateAlias as Yi, clamp as Xi } from "@umbraco-cms/backoffice/utils";
import { UmbSorterController as ni } from "@umbraco-cms/backoffice/sorter";
import { UMB_PROPERTY_DATASET_CONTEXT as en } from "@umbraco-cms/backoffice/property";
import { UmbElementMixin as tn } from "@umbraco-cms/backoffice/element-api";
var an = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, Zi = (e) => {
  throw TypeError(e);
}, kt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? sn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && an(t, i, a), a;
}, nn = (e, t, i) => t.has(e) || Zi("Cannot " + i), on = (e, t, i) => t.has(e) ? Zi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), He = (e, t, i) => (nn(e, t, "access private method"), i), de, Ji, at, Qi;
let Ce = class extends d {
  constructor() {
    super(), on(this, de), this._modalElementMap = /* @__PURE__ */ new Map(), this._modals = [], this.fillBackground = !1, this.consumeContext(qi, (e) => {
      this._modalManager = e, this._observeModals();
    });
  }
  _observeModals() {
    this._modalManager && this.observe(this._modalManager.modals, (e) => {
      He(this, de, Ji).call(this, e);
    });
  }
  render() {
    return l`
			<uui-modal-container id="container">
				${this._modals.length > 0 ? ye(
      this._modals,
      (e) => e.key,
      (e) => He(this, de, Qi).call(this, e.key)
    ) : ""}
			</uui-modal-container>
		`;
  }
};
de = /* @__PURE__ */ new WeakSet();
Ji = function(e) {
  this.fillBackground = !1;
  const t = this._modals;
  this._modals = e, t.filter((s) => !e.some((a) => a.key === s.key)).forEach((s) => {
    this._modalElementMap.get(s.key)?.removeEventListener("close-end", He(this, de, at).bind(this, s.key)), this._modalElementMap.delete(s.key);
  }), this._modals.length !== 0 && this._modals.forEach(async (s) => {
    if (this._modalElementMap.has(s.key)) return;
    const a = new Rs();
    await a.init(s), a.element?.addEventListener("close-end", He(this, de, at).bind(this, s.key)), s.addEventListener("umb:destroy", He(this, de, at).bind(this, s.key)), this._modalElementMap.set(s.key, a), s.backdropBackground && (this.fillBackground = !0, this.shadowRoot?.getElementById("container")?.style.setProperty("--backdrop-background", s.backdropBackground)), this.requestUpdate("_modalElementMap");
  });
};
at = function(e) {
  this._modalManager?.remove(e);
};
Qi = function(e) {
  const t = this._modalElementMap.get(e);
  return t ? t.render() : _;
};
Ce.styles = [
  P,
  p`
			:host {
				position: absolute;
				z-index: 1000;
			}

			:host([fill-background]) {
				--uui-modal-dialog-border-radius: 0;
				--uui-shadow-depth-5: 0;
			}

			:host([fill-background]) #container::after {
				background: var(--backdrop-background);
			}
		`
];
kt([
  h()
], Ce.prototype, "_modalElementMap", 2);
kt([
  h()
], Ce.prototype, "_modals", 2);
kt([
  r({ type: Boolean, reflect: !0, attribute: "fill-background" })
], Ce.prototype, "fillBackground", 2);
Ce = kt([
  u("umb-backoffice-modal-container")
], Ce);
var rn = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, oi = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ln(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && rn(t, i, a), a;
};
let Ge = class extends d {
  constructor() {
    super(), this.consumeContext(qs, (e) => {
      this._notificationContext = e, this._observeNotifications();
    });
  }
  _observeNotifications() {
    this._notificationContext && this.observe(this._notificationContext.notifications, (e) => {
      this._notifications = e, this._notificationsElement?.hidePopover?.(), this._notificationsElement?.showPopover?.();
    });
  }
  render() {
    return l`
			<uui-toast-notification-container bottom-up id="notifications" popover="manual">
				${this._notifications ? ye(
      this._notifications,
      (e) => e.key,
      (e) => l`${e.element}`
    ) : ""}
			</uui-toast-notification-container>
		`;
  }
};
Ge.styles = [
  P,
  p`
			#notifications {
				top: 0;
				left: 0;
				right: 0;
				bottom: 45px;
				height: auto;
				padding: var(--uui-size-layout-1);

				position: fixed;
				width: 100vw;
				background: 0;
				outline: 0;
				border: 0;
				margin: 0;
			}
		`
];
oi([
  V("#notifications")
], Ge.prototype, "_notificationsElement", 2);
oi([
  h()
], Ge.prototype, "_notifications", 2);
Ge = oi([
  u("umb-backoffice-notification-container")
], Ge);
var un = Object.defineProperty, hn = Object.getOwnPropertyDescriptor, ji = (e) => {
  throw TypeError(e);
}, q = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? hn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && un(t, i, a), a;
}, ea = (e, t, i) => t.has(e) || ji("Cannot " + i), pe = (e, t, i) => (ea(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Lt = (e, t, i) => t.has(e) ? ji("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Bt = (e, t, i) => (ea(e, t, "access private method"), i), ce, st, ze, nt;
let w = class extends je {
  constructor() {
    super(...arguments), Lt(this, ze), this.headline = "", this.headerTransparent = !1, this.loading = !1, this._headerSlotHasChildren = !1, this._navigationSlotHasChildren = !1, this._actionsMenuSlotHasChildren = !1, this._footerSlotHasChildren = !1, this._actionsSlotHasChildren = !1, Lt(this, ce, (e) => e.target.assignedNodes({ flatten: !0 }).length > 0), Lt(this, st, () => {
      this._scrollContainer && this.toggleAttribute("scrolling", this._scrollContainer.scrollTop > 0);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.headerTransparent && requestAnimationFrame(() => {
      this._scrollContainer?.addEventListener("scroll", pe(this, st));
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._scrollContainer?.removeEventListener("scroll", pe(this, st));
  }
  render() {
    return l`
			<div
				id="header"
				style="display: ${this.headline || this._headerSlotHasChildren || this._actionsMenuSlotHasChildren || this._navigationSlotHasChildren ? "" : "none"}">
				${this.headline ? l`<h3 id="headline">${this.headline}</h3>` : _}

				<slot
					id="header-slot"
					name="header"
					@slotchange=${(e) => {
      this._headerSlotHasChildren = pe(this, ce).call(this, e), Bt(this, ze, nt).call(this, e.target, this._headerSlotHasChildren);
    }}></slot>
				<slot
					id="navigation-slot"
					name="navigation"
					@slotchange=${(e) => {
      this._navigationSlotHasChildren = pe(this, ce).call(this, e), Bt(this, ze, nt).call(this, e.target, this._navigationSlotHasChildren);
    }}></slot>
				<slot
					id="action-menu-slot"
					name="action-menu"
					@slotchange=${(e) => {
      this._actionsMenuSlotHasChildren = pe(this, ce).call(this, e), Bt(this, ze, nt).call(this, e.target, this._actionsMenuSlotHasChildren);
    }}></slot>
			</div>

			<!-- This div should be changed for the uui-scroll-container when it gets updated -->
			<div id="main">
				${this.loading ? l`<uui-loader-bar></uui-loader-bar>` : _}
				<slot></slot>
			</div>

			<slot name="footer"></slot>
			<umb-footer-layout style="display:${this._footerSlotHasChildren || this._actionsSlotHasChildren ? "" : "none"}">
				<slot
					name="footer-info"
					@slotchange=${(e) => {
      this._footerSlotHasChildren = pe(this, ce).call(this, e);
    }}></slot>
				<slot
					name="actions"
					slot="actions"
					@slotchange=${(e) => {
      this._actionsSlotHasChildren = pe(this, ce).call(this, e);
    }}></slot>
			</umb-footer-layout>
		`;
  }
};
ce = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakSet();
nt = function(e, t) {
  e.style.display = t ? "flex" : "none";
};
w.styles = [
  P,
  p`
			:host {
				display: flex;
				background-color: var(--umb-body-layout-color-background, var(--uui-color-background));
				width: 100%;
				height: 100%;
				flex-direction: column;
			}

			#header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: var(--umb-header-layout-height);
				background-color: var(--uui-color-surface);
				border-bottom: 1px solid var(--uui-color-border);
				box-sizing: border-box;
				z-index: 1;
			}
			:host([header-transparent]) #header {
				background-color: transparent;
				border-color: transparent;
				transition: box-shadow 150ms ease-in-out;
				box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.5);
			}
			:host([header-transparent][scrolling]) #header {
				/* This should be using the uui-shadows but for now they are too drastic for this use case */
				box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.2);
			}
			:host([header-fit-height][header-transparent]:not([header-no-padding])) #header-slot {
				padding: var(--uui-size-layout-1);
			}
			:host([header-fit-height]) #header {
				height: fit-content;
			}
			#header-slot {
				padding: 0 var(--uui-size-layout-1);
				flex-grow: 1;
			}
			:host([header-no-padding]) #header-slot {
				padding: 0;
			}

			:host([header-transparent]:not([main-no-padding])) #main:not(*[style='display: none'] + *) {
				/* The following styling is only applied if the clear-header IS present,
				the main-no-padding attribute is NOT present, and the header is NOT hidden */
				padding-top: var(--uui-size-space-1);
			}
			:host([main-no-padding]) #main {
				padding: 0;
			}

			#header-slot,
			#action-menu-slot,
			#navigation-slot {
				display: none;
				height: 100%;
				align-items: center;
				box-sizing: border-box;
				min-width: 0;
			}

			#navigation-slot {
				margin-left: auto;
			}

			#headline {
				display: block;
				margin: 0 var(--uui-size-layout-1);
			}

			#main {
				display: block;
				flex: 1;
				flex-direction: column;
				overflow-y: auto;
				padding: var(--uui-size-layout-1);
			}

			#main > slot::slotted(*:first-child) {
				padding-top: 0;
				margin-top: 0;
			}
		`
];
q([
  V("#main")
], w.prototype, "_scrollContainer", 2);
q([
  r()
], w.prototype, "headline", 2);
q([
  r({ type: Boolean, reflect: !0, attribute: "header-transparent" })
], w.prototype, "headerTransparent", 2);
q([
  r({ type: Boolean })
], w.prototype, "loading", 2);
q([
  h()
], w.prototype, "_headerSlotHasChildren", 2);
q([
  h()
], w.prototype, "_navigationSlotHasChildren", 2);
q([
  h()
], w.prototype, "_actionsMenuSlotHasChildren", 2);
q([
  h()
], w.prototype, "_footerSlotHasChildren", 2);
q([
  h()
], w.prototype, "_actionsSlotHasChildren", 2);
w = q([
  u("umb-body-layout")
], w);
var pn = Object.defineProperty, cn = Object.getOwnPropertyDescriptor, ta = (e) => {
  throw TypeError(e);
}, Ot = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? cn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && pn(t, i, a), a;
}, dn = (e, t, i) => t.has(e) || ta("Cannot " + i), mn = (e, t, i) => t.has(e) ? ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), vn = (e, t, i) => (dn(e, t, "access private method"), i), Nt, ia;
let Pe = class extends je {
  constructor() {
    super(...arguments), mn(this, Nt), this.language = "", this.copy = !1, this._copyState = "idle";
  }
  async copyCode() {
    const e = this.textContent;
    e && (await navigator.clipboard.writeText(e), this._copyState = "success", setTimeout(() => {
      this._copyState = "idle";
    }, 2e3));
  }
  render() {
    return l`
			${vn(this, Nt, ia).call(this)}
			<pre><uui-scroll-container><code><slot></slot></code></uui-scroll-container></pre>
		`;
  }
};
Nt = /* @__PURE__ */ new WeakSet();
ia = function() {
  if (!(!this.language && !this.copy))
    return l`
			<div id="header">
				<span id="lang">${this.language}</span>
				${$(
      this.copy,
      () => l`
						<uui-button color=${this._copyState === "idle" ? "default" : "positive"} @click=${this.copyCode}>
							${$(
        this._copyState === "idle",
        () => l`<uui-icon name="copy"></uui-icon> <umb-localize key="general_copy">Copy</umb-localize>`,
        () => l`<uui-icon name="check"></uui-icon> <umb-localize key="general_copied">Copied!</umb-localize>`
      )}
						</uui-button>
					`
    )}
			</div>
		`;
};
Pe.styles = [
  P,
  p`
			:host {
				display: block;
				border: 1px solid var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
			}

			uui-scroll-container {
				overflow-y: auto;
				overflow-wrap: anywhere;
			}

			pre {
				font-family: monospace;
				background-color: var(--uui-color-surface-alt);
				color: #303033;
				display: block;
				margin: 0;
				overflow-x: auto;
				padding: 9.5px;
			}

			pre,
			code {
				word-wrap: normal;
				white-space: pre;
			}

			#header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: var(--uui-color-surface-alt);
				border-bottom: 1px solid var(--uui-color-divider-emphasis);
			}

			#lang {
				margin-left: 16px;
				font-weight: bold;
			}

			button {
				font-family: inherit;
				padding: 6px 16px;
				background-color: transparent;
				border: none;
				border-left: 1px solid var(--uui-color-divider-emphasis);
				border-radius: 0;
				color: #000;
				display: flex;
				align-items: center;
				gap: 8px;
			}

			button:hover {
				background-color: var(--uui-color-surface-emphasis);
			}
		`
];
Ot([
  r()
], Pe.prototype, "language", 2);
Ot([
  r({ type: Boolean })
], Pe.prototype, "copy", 2);
Ot([
  h()
], Pe.prototype, "_copyState", 2);
Pe = Ot([
  u("umb-code-block")
], Pe);
var fn = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, aa = (e) => {
  throw TypeError(e);
}, Y = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? _n(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && fn(t, i, a), a;
}, yn = (e, t, i) => t.has(e) || aa("Cannot " + i), gn = (e, t, i) => t.has(e) ? aa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), bn = (e, t, i) => (yn(e, t, "access private method"), i), Ft, sa;
let k = class extends d {
  constructor() {
    super(...arguments), gn(this, Ft), this.open = !1, this.label = "", this.look = "default", this.color = "default", this.placement = "bottom-start", this.compact = !1, this.hideExpand = !1;
  }
  updated(e) {
    super.updated(e), e.has("open") && this.popoverContainerElement && (this.open ? this.popoverContainerElement.showPopover() : this.popoverContainerElement.hidePopover());
  }
  render() {
    return l`
			<uui-button
				id="dropdown-button"
				popovertarget="dropdown-popover"
				.look=${this.look}
				.color=${this.color}
				.label=${this.label}
				.compact=${this.compact}>
				<slot name="label"></slot>
				${$(
      !this.hideExpand,
      () => l`<uui-symbol-expand id="symbol-expand" .open=${this.open}></uui-symbol-expand>`
    )}
			</uui-button>
			<uui-popover-container id="dropdown-popover" .placement=${this.placement} @toggle=${bn(this, Ft, sa)}>
				<umb-popover-layout>
					<slot></slot>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
Ft = /* @__PURE__ */ new WeakSet();
sa = function(e) {
  this.open = e.newState === "open";
};
k.styles = [
  P,
  p`
			#dropdown-button {
				min-width: max-content;
			}
			:host(:not([hide-expand]):not([compact])) #dropdown-button {
				--uui-button-padding-right-factor: 2;
			}

			:host(:not([compact])) #symbol-expand {
				margin-left: var(--uui-size-space-2);
			}
		`
];
Y([
  V("#dropdown-popover")
], k.prototype, "popoverContainerElement", 2);
Y([
  r({ type: Boolean, reflect: !0 })
], k.prototype, "open", 2);
Y([
  r()
], k.prototype, "label", 2);
Y([
  r()
], k.prototype, "look", 2);
Y([
  r()
], k.prototype, "color", 2);
Y([
  r()
], k.prototype, "placement", 2);
Y([
  r({ type: Boolean })
], k.prototype, "compact", 2);
Y([
  r({ type: Boolean, attribute: "hide-expand" })
], k.prototype, "hideExpand", 2);
k = Y([
  u("umb-dropdown")
], k);
var $n = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, na = (e) => {
  throw TypeError(e);
}, X = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? wn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && $n(t, i, a), a;
}, ri = (e, t, i) => t.has(e) || na("Cannot " + i), Se = (e, t, i) => (ri(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Wt = (e, t, i) => t.has(e) ? na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), En = (e, t, i, s) => (ri(e, t, "write to private field"), t.set(e, i), i), ne = (e, t, i) => (ri(e, t, "access private method"), i), fe, ot, L, oa, ra, la, ua, ha, pa, ca, da;
let B = class extends d {
  constructor() {
    super(), Wt(this, L), this._numberOfActions = 0, this._dropdownIsOpen = !1, Wt(this, fe), Wt(this, ot, new Hs(this)), this.consumeContext(Ns, (e) => {
      En(this, fe, e);
    });
  }
  updated(e) {
    e.has("entityType") && e.has("unique") && (Se(this, ot).setEntityType(this.entityType), Se(this, ot).setUnique(this.unique ?? null), ne(this, L, oa).call(this));
  }
  render() {
    return this._numberOfActions === 0 ? _ : l`<uui-action-bar slot="actions">${ne(this, L, ca).call(this)} ${ne(this, L, da).call(this)} </uui-action-bar>`;
  }
};
fe = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakSet();
oa = function() {
  new Fs(
    this,
    ai,
    "entityAction",
    (e) => e.forEntityTypes.includes(this.entityType),
    async (e) => {
      this._numberOfActions = e.length, this._firstActionManifest = this._numberOfActions > 0 ? e[0].manifest : void 0, ne(this, L, ra).call(this);
    },
    "umbEntityActionsObserver"
  );
};
ra = async function() {
  this._firstActionManifest && (this._firstActionApi = await Gs(this, this._firstActionManifest, [
    { unique: this.unique, entityType: this.entityType, meta: this._firstActionManifest.meta }
  ]), this._firstActionHref = await this._firstActionApi?.getHref());
};
la = function() {
  if (!this.entityType) throw new Error("Entity type is not defined");
  if (this.unique === void 0) throw new Error("Unique is not defined");
  Se(this, fe) ? Se(this, fe).toggleContextMenu(this, {
    entityType: this.entityType,
    unique: this.unique,
    headline: this.label
  }) : this._dropdownIsOpen = !this._dropdownIsOpen;
};
ua = async function(e) {
  Se(this, fe)?.closeContextMenu(), !this._firstActionHref && (e.stopPropagation(), await this._firstActionApi?.execute());
};
ha = function() {
  this._dropdownIsOpen = !1;
};
pa = function(e) {
  e.stopPropagation();
};
ca = function() {
  return this._numberOfActions === 1 ? _ : Se(this, fe) ? l`<uui-button @click=${ne(this, L, la)} label="Open actions menu">
				<uui-symbol-more></uui-symbol-more>
			</uui-button>` : l`
			<umb-dropdown .open=${this._dropdownIsOpen} @click=${ne(this, L, pa)} compact hide-expand>
				<uui-symbol-more slot="label"></uui-symbol-more>
				<umb-entity-action-list
					@action-executed=${ne(this, L, ha)}
					.entityType=${this.entityType}
					.unique=${this.unique}></umb-entity-action-list>
			</umb-dropdown>
		`;
};
da = function() {
  return this._firstActionApi ? l`<uui-button
			label=${g(this._firstActionManifest?.meta.label)}
			@click=${ne(this, L, ua)}
			href="${g(this._firstActionHref)}">
			<uui-icon name=${g(this._firstActionManifest?.meta.icon)}></uui-icon>
		</uui-button>` : _;
};
X([
  r({ type: String, attribute: "entity-type" })
], B.prototype, "entityType", 2);
X([
  r({ type: String })
], B.prototype, "unique", 2);
X([
  r({ type: String })
], B.prototype, "label", 2);
X([
  h()
], B.prototype, "_numberOfActions", 2);
X([
  h()
], B.prototype, "_firstActionManifest", 2);
X([
  h()
], B.prototype, "_firstActionApi", 2);
X([
  h()
], B.prototype, "_firstActionHref", 2);
X([
  h()
], B.prototype, "_dropdownIsOpen", 2);
B = X([
  u("umb-entity-actions-bundle")
], B);
var xn = Object.getOwnPropertyDescriptor, Cn = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? xn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = o(a) || a);
  return a;
};
let Gt = class extends je {
  render() {
    return l`
			<slot></slot>
			<slot id="actions" name="actions"></slot>
		`;
  }
};
Gt.styles = [
  P,
  p`
			:host {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: var(--umb-footer-layout-height);
				border-top: 1px solid var(--uui-color-border);
				background-color: var(--uui-color-surface);
				box-sizing: border-box;
			}

			#actions {
				display: flex;
				gap: var(--uui-size-space-2);
				margin: 0 var(--uui-size-layout-1);
				margin-left: auto;
			}
		`
];
Gt = Cn([
  u("umb-footer-layout")
], Gt);
var Pn = Object.getOwnPropertyDescriptor, Sn = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Pn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = o(a) || a);
  return a;
};
const kn = {
  type: "kind",
  alias: "Umb.Kind.Button",
  matchKind: "button",
  matchType: "headerApp",
  manifest: {
    type: "headerApp",
    kind: "button",
    elementName: "umb-header-app-button"
  }
};
ai.register(kn);
let Kt = class extends d {
  render() {
    return l`
			<uui-button
				look="primary"
				label="${g(this.manifest?.meta.label)}"
				href="${g(this.manifest?.meta.href)}"
				compact>
				<umb-icon name="${g(this.manifest?.meta.icon)}"></umb-icon>
			</uui-button>
		`;
  }
};
Kt.styles = [
  P,
  p`
			uui-button {
				font-size: 18px;
				--uui-button-background-color: var(--umb-header-app-button-background-color, transparent);
				--uui-button-background-color-hover: var(
					--umb-header-app-button-background-color-hover,
					var(--uui-color-emphasis)
				);
			}
		`
];
Kt = Sn([
  u("umb-header-app-button")
], Kt);
var On = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, li = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Mn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && On(t, i, a), a;
};
let Ke = class extends d {
  render() {
    return l`
			<div class="user-info">
				<slot name="avatar"></slot>
				<div>
					<span class="name">${this.name}</span>
					<span class="detail">${this.detail}</span>
				</div>
			</div>
			<slot id="description"></slot>
			<slot id="actions-container" name="actions"></slot>
		`;
  }
};
Ke.styles = [
  P,
  p`
			:host {
				--avatar-size: calc(2em + 4px);
				display: contents;
			}

			slot[name='actions'] {
				--uui-button-border-radius: 50px 50px 50px 50px;
				display: flex;
				align-items: center;
				--uui-button-height: calc(var(--uui-size-2) * 4);
				margin-right: var(--uui-size-2);
			}

			#actions-container {
				opacity: 0;
				transition: opacity 120ms;
			}

			:host(:hover) #actions-container {
				opacity: 1;
			}

			:host(:hover) #actions-container {
				opacity: 1;
			}

			.user-info {
				position: relative;
				display: flex;
				align-items: flex-end;
				gap: var(--uui-size-space-5);
			}

			.user-info div {
				display: flex;
				flex-direction: column;
				min-width: var(--uui-size-60);
			}

			.detail {
				font-size: var(--uui-size-4);
				color: var(--uui-color-text-alt);
				line-height: 1;
			}
		`
];
li([
  r({ type: String })
], Ke.prototype, "name", 2);
li([
  r({ type: String })
], Ke.prototype, "detail", 2);
Ke = li([
  u("umb-history-item")
], Ke);
var An = Object.getOwnPropertyDescriptor, Tn = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? An(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = o(a) || a);
  return a;
};
let Yt = class extends d {
  render() {
    return l`<slot></slot> `;
  }
};
Yt.styles = [
  P,
  p`
			:host {
				display: grid;
				grid-template-columns: auto 1fr auto;
				align-items: center;
				--avatar-size: calc(2em + 4px);
				gap: var(--uui-size-6);
				position: relative;
			}

			/** TODO: This doesn't work due to "display:contents" in umb-history-item, but is needed for the way I put the grid together.
			* Find a different solution so we can have the grey line that links each history item together (this is purely a visual effect, no rush)

			::slotted(*) {
				position: relative;
			}

			::slotted(*:not(:last-child)) {
				margin-bottom: calc(2 * var(--uui-size-space-3));
			}
			::slotted(*:not(:last-child))::before {
				content: '';
				border: 1px solid var(--uui-color-border);
				position: absolute;
				display: block;
				height: calc(1.5 * var(--avatar-size));
				top: var(--avatar-size);
				left: calc(-1px + var(--avatar-size) / 2);
			}
			*/
		`
];
Yt = Tn([
  u("umb-history-list")
], Yt);
var Un = Object.defineProperty, In = Object.getOwnPropertyDescriptor, ma = (e) => {
  throw TypeError(e);
}, et = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? In(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Un(t, i, a), a;
}, ui = (e, t, i) => t.has(e) || ma("Cannot " + i), gt = (e, t, i) => (ui(e, t, "read from private field"), i ? i.call(e) : t.get(e)), zt = (e, t, i) => t.has(e) ? ma("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ci = (e, t, i, s) => (ui(e, t, "write to private field"), t.set(e, i), i), Pi = (e, t, i) => (ui(e, t, "access private method"), i), Ne, Fe, rt, Xt;
let _e = class extends d {
  constructor() {
    super(...arguments), zt(this, rt), zt(this, Ne), zt(this, Fe), this._style = {};
  }
  set color(e) {
    Ci(this, Ne, e), Pi(this, rt, Xt).call(this);
  }
  get color() {
    return gt(this, Ne) || gt(this, Fe);
  }
  set name(e) {
    const [t, i] = e ? e.split(" ") : [];
    Ci(this, Fe, i), this._icon = t, Pi(this, rt, Xt).call(this);
  }
  get name() {
    return this._icon;
  }
  render() {
    return l`<uui-icon name=${g(this._icon)} style=${Ws(this._style)}></uui-icon>`;
  }
};
Ne = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakSet();
Xt = function() {
  const e = gt(this, Ne) || gt(this, Fe);
  if (!e) {
    this._style = { "--uui-icon-color": "inherit" };
    return;
  }
  const t = e.replace("color-", ""), i = Ks(t), s = i ? `var(${i})` : t;
  this._style = { "--uui-icon-color": s };
};
_e.styles = [
  P,
  p`
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`
];
et([
  h()
], _e.prototype, "_icon", 2);
et([
  h()
], _e.prototype, "_style", 2);
et([
  r({ type: String })
], _e.prototype, "color", 1);
et([
  r({ type: String })
], _e.prototype, "name", 1);
_e = et([
  u("umb-icon")
], _e);
var Dn = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, va = (e) => {
  throw TypeError(e);
}, hi = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ln(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Dn(t, i, a), a;
}, pi = (e, t, i) => t.has(e) || va("Cannot " + i), bt = (e, t, i) => (pi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Rt = (e, t, i) => t.has(e) ? va("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Bn = (e, t, i, s) => (pi(e, t, "write to private field"), t.set(e, i), i), ae = (e, t, i) => (pi(e, t, "access private method"), i), Ye, $t, I, wt, fa, _a, ya, ga, ba;
let Xe = class extends Ue(
  d
) {
  constructor() {
    super(), Rt(this, I), Rt(this, Ye), Rt(this, $t, "Umb.PropertyEditorUi.Collection"), new xi(this, Ys).addAdditionalPath(":uiAlias").onSetup((e) => ({
      data: {
        propertyEditorUiAlias: e.uiAlias
      },
      value: void 0
    })).onSubmit((e) => {
      e?.createNewWithPropertyEditorUiAlias ? ae(this, I, _a).call(this) : ae(this, I, wt).call(this, e?.dataTypeId ?? this.defaultValue ?? "");
    }).observeRouteBuilder((e) => {
      this._dataTypePickerModalPath = e({ uiAlias: bt(this, $t) });
    }), Bn(this, Ye, new xi(this, Xs).addAdditionalPath(":uiAlias").onSetup((e) => ({ data: { entityType: Fi, preset: { editorUiAlias: e.uiAlias } } })).onSubmit((e) => {
      ae(this, I, wt).call(this, e?.unique ?? this.defaultValue ?? "");
    }));
  }
  getFormElement() {
  }
  render() {
    return this.value ? ae(this, I, ba).call(this) : ae(this, I, ga).call(this);
  }
};
Ye = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
wt = function(e) {
  this.value = e, this.dispatchEvent(new c());
};
fa = function() {
  ae(this, I, wt).call(this, void 0);
};
_a = function() {
  bt(this, Ye).open(
    { uiAlias: bt(this, $t) },
    `create/parent/${Fi}/null`
  );
};
ya = function() {
  bt(this, Ye)?.open({}, `edit/${this.value}`);
};
ga = function() {
  return this._dataTypePickerModalPath ? l`
			<uui-button
				id="create-button"
				color="default"
				look="placeholder"
				label=${this.localize.term("collection_addCollectionConfiguration")}
				href=${this._dataTypePickerModalPath}></uui-button>
		` : _;
};
ba = function() {
  return !this.value || !this._dataTypePickerModalPath ? _ : l`
			<uui-ref-list>
				<umb-ref-data-type standalone data-type-id=${this.value} @open=${ae(this, I, ya)}>
					<uui-action-bar slot="actions">
						<uui-button
							label=${this.localize.term("general_choose")}
							href=${this._dataTypePickerModalPath}></uui-button>
						<uui-button @click=${ae(this, I, fa)} label=${this.localize.term("general_remove")}></uui-button>
					</uui-action-bar>
				</umb-ref-data-type>
			</uui-ref-list>
		`;
};
Xe.styles = [
  p`
			#create-button {
				width: 100%;
			}
		`
];
hi([
  h()
], Xe.prototype, "_dataTypePickerModalPath", 2);
hi([
  r({ attribute: "default-value" })
], Xe.prototype, "defaultValue", 2);
Xe = hi([
  u("umb-input-collection-configuration")
], Xe);
var Wn = Object.defineProperty, zn = Object.getOwnPropertyDescriptor, $a = (e) => {
  throw TypeError(e);
}, Mt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? zn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Wn(t, i, a), a;
}, Rn = (e, t, i) => t.has(e) || $a("Cannot " + i), Vn = (e, t, i) => t.has(e) ? $a("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Si = (e, t, i) => (Rn(e, t, "access private method"), i), lt, wa, Ea;
let Ze = class extends re(d, "") {
  constructor() {
    super(...arguments), Vn(this, lt), this.readonly = !1, this.showLabels = !1;
  }
  getFormElement() {
  }
  render() {
    return l`
			<uui-color-swatches
				?readonly=${this.readonly}
				label="Color picker"
				value=${this.value ?? ""}
				@change=${Si(this, lt, wa)}>
				${Si(this, lt, Ea).call(this)}
			</uui-color-swatches>
		`;
  }
};
lt = /* @__PURE__ */ new WeakSet();
wa = function(e) {
  this.value = e.target.value, this.dispatchEvent(new c());
};
Ea = function() {
  return this.swatches ? zs(
    this.swatches,
    (e) => l`
				<uui-color-swatch label=${e.label} value=${e.value} .showLabel=${this.showLabels}></uui-color-swatch>
			`
  ) : _;
};
Mt([
  r({ type: Boolean, reflect: !0 })
], Ze.prototype, "readonly", 2);
Mt([
  r({ type: Boolean })
], Ze.prototype, "showLabels", 2);
Mt([
  r({ type: Array })
], Ze.prototype, "swatches", 2);
Ze = Mt([
  u("umb-input-color")
], Ze);
var qn = Object.getOwnPropertyDescriptor, Hn = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? qn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = o(a) || a);
  return a;
};
let ki = class extends Js {
  /**
   * Specifies the date and time type of the input that will be rendered.
   * @type {InputDateType}
   * @enum {InputDateType}
   */
  set type(e) {
    super.type = e;
  }
  get type() {
    return super.type;
  }
  constructor() {
    super(), this.type = "date";
  }
};
ki = Hn([
  u("umb-input-date")
], ki);
var Nn = Object.defineProperty, Fn = Object.getOwnPropertyDescriptor, xa = (e) => {
  throw TypeError(e);
}, Ie = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Fn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Nn(t, i, a), a;
}, Gn = (e, t, i) => t.has(e) || xa("Cannot " + i), Kn = (e, t, i) => t.has(e) ? xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Yn = (e, t, i) => (Gn(e, t, "access private method"), i), Zt, Ca;
let oe = class extends re(d, void 0) {
  constructor() {
    super(...arguments), Kn(this, Zt), this.readonly = !1;
  }
  getFormElement() {
    return this.selectEle;
  }
  render() {
    return l`<uui-select
			label=${this.localize.term("formProviderFieldTypes_dropdownName")}
			.placeholder=${this.placeholder ?? ""}
			.options=${this.options ?? []}
			@change=${Yn(this, Zt, Ca)}
			?readonly=${this.readonly}></uui-select>`;
  }
};
Zt = /* @__PURE__ */ new WeakSet();
Ca = function(e) {
  e.stopPropagation(), e.target.value && (this.value = e.target.value), this.dispatchEvent(new c());
};
oe.styles = [
  p`
			:host {
				display: block;
			}
		`
];
Ie([
  r({ type: Array })
], oe.prototype, "options", 2);
Ie([
  r({ type: String })
], oe.prototype, "placeholder", 2);
Ie([
  r({ type: Boolean })
], oe.prototype, "multiple", 2);
Ie([
  r({ type: Boolean, reflect: !0 })
], oe.prototype, "readonly", 2);
Ie([
  V("uui-select")
], oe.prototype, "selectEle", 2);
oe = Ie([
  u("umb-input-dropdown-list")
], oe);
var Xn = Object.defineProperty, Zn = Object.getOwnPropertyDescriptor, Pa = (e) => {
  throw TypeError(e);
}, H = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Zn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Xn(t, i, a), a;
}, ci = (e, t, i) => t.has(e) || Pa("Cannot " + i), m = (e, t, i) => (ci(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Le = (e, t, i) => t.has(e) ? Pa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Vt = (e, t, i, s) => (ci(e, t, "write to private field"), t.set(e, i), i), $e = (e, t, i) => (ci(e, t, "access private method"), i), Jt, ut, ht, v, se, Sa, ka, Oa, Ma, Aa, Ta;
let E = class extends Ue(
  d
) {
  constructor() {
    super(), Le(this, se), Le(this, Jt, new ni(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputEntity",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new c());
      }
    })), Le(this, ut, 0), this.minMessage = "This field need more items", Le(this, ht, 1 / 0), this.maxMessage = "This field exceeds the allowed amount of items", Le(this, v), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && (m(this, v)?.getSelection().length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && (m(this, v)?.getSelection().length ?? 0) > this.max
    );
  }
  getFormElement() {
  }
  set min(e) {
    Vt(this, ut, e), m(this, v) && (m(this, v).min = e);
  }
  get min() {
    return m(this, ut);
  }
  set max(e) {
    Vt(this, ht, e), m(this, v) && (m(this, v).max = e);
  }
  get max() {
    return m(this, ht);
  }
  set selection(e) {
    m(this, v)?.setSelection(e), m(this, Jt).setModel(e);
  }
  get selection() {
    return m(this, v)?.getSelection() ?? [];
  }
  set value(e) {
    this.selection = js(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  set pickerContext(e) {
    m(this, v) || (Vt(this, v, e ? new e(this) : void 0), $e(this, se, Sa).call(this));
  }
  get pickerContext() {
    return m(this, v);
  }
  render() {
    return l`${$e(this, se, Aa).call(this)} ${$e(this, se, Ma).call(this)}`;
  }
};
Jt = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakSet();
Sa = async function() {
  m(this, v) && (m(this, v).min = this.min, m(this, v).max = this.max, this.observe(m(this, v).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(m(this, v).selectedItems, (e) => this._items = e, "_observerItems"));
};
ka = function() {
  m(this, v)?.openPicker({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: ignoring this for now to prevent breaking existing functionality.
    // if we want a very generic input it should be possible to pass in picker config
    hideTreeRoot: !0
  });
};
Oa = function(e) {
  m(this, v)?.requestRemoveItem(e.unique);
};
Ma = function() {
  if (!(this.max === 1 && this.selection && this.selection.length >= this.max))
    return l`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${$e(this, se, ka)}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
};
Aa = function() {
  if (this._items)
    return l`
			<uui-ref-list>
				${ye(
      this._items,
      (e) => e.unique,
      (e) => $e(this, se, Ta).call(this, e)
    )}
			</uui-ref-list>
		`;
};
Ta = function(e) {
  if (!e.unique) return;
  const t = this.getIcon?.(e) ?? e.icon ?? "";
  return l`
			<uui-ref-node name=${e.name} id=${e.unique}>
				${$(t, () => l`<umb-icon slot="icon" name=${t}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button @click=${() => $e(this, se, Oa).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
E.styles = [
  p`
			#btn-add {
				width: 100%;
			}
		`
];
H([
  r({ type: Number })
], E.prototype, "min", 1);
H([
  r({ type: String, attribute: "min-message" })
], E.prototype, "minMessage", 2);
H([
  r({ type: Number })
], E.prototype, "max", 1);
H([
  r({ attribute: !1 })
], E.prototype, "getIcon", 2);
H([
  r({ type: String, attribute: "min-message" })
], E.prototype, "maxMessage", 2);
H([
  r({ type: Array })
], E.prototype, "selection", 1);
H([
  r({ type: String })
], E.prototype, "value", 1);
H([
  r({ attribute: !1 })
], E.prototype, "pickerContext", 1);
H([
  h()
], E.prototype, "_items", 2);
E = H([
  u("umb-input-entity")
], E);
var Jn = Object.defineProperty, Qn = Object.getOwnPropertyDescriptor, Ua = (e) => {
  throw TypeError(e);
}, At = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Qn(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Jn(t, i, a), a;
}, jn = (e, t, i) => t.has(e) || Ua("Cannot " + i), eo = (e, t, i) => t.has(e) ? Ua("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Oi = (e, t, i) => (jn(e, t, "access private method"), i), pt, Qt;
let Je = class extends re(d, "") {
  constructor() {
    super(...arguments), eo(this, pt), this.opacity = !1, this.showPalette = !1;
  }
  getFormElement() {
  }
  // HACK: Since `uui-color-picker` doesn't have an option to hide the swatches, we had to get creative.
  // Based on UUI v1.8.0-rc3, the value of `swatches` must be a falsey value to hide them.
  // https://github.com/umbraco/Umbraco.UI/blob/v1.8.0-rc.3/packages/uui-color-picker/lib/uui-color-picker.element.ts#L517
  // However, the object-type for `swatches` is a `string[]` (non-nullable).
  // https://github.com/umbraco/Umbraco.UI/blob/v1.8.0-rc.3/packages/uui-color-picker/lib/uui-color-picker.element.ts#L157
  // To do this, we must omit the `.swatches` attribute, otherwise the default swatches can't be used.
  // So, we've use a `when()` render both configurations. [LK]
  render() {
    const e = this.showPalette ? this.swatches : void 0;
    return $(
      this.showPalette && !e,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.value=${this.value}
					@change=${Oi(this, pt, Qt)}>
				</uui-color-picker>
			`,
      () => l`
				<uui-color-picker
					label="Eye dropper"
					.opacity=${this.opacity}
					.swatches=${e}
					.value=${this.value}
					@change=${Oi(this, pt, Qt)}>
				</uui-color-picker>
			`
    );
  }
};
pt = /* @__PURE__ */ new WeakSet();
Qt = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new c());
};
At([
  r({ type: Boolean })
], Je.prototype, "opacity", 2);
At([
  r({ type: Boolean })
], Je.prototype, "showPalette", 2);
At([
  r({ type: Array })
], Je.prototype, "swatches", 2);
Je = At([
  u("umb-input-eye-dropper")
], Je);
var to = Object.defineProperty, io = Object.getOwnPropertyDescriptor, Ia = (e) => {
  throw TypeError(e);
}, Tt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? io(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && to(t, i, a), a;
}, di = (e, t, i) => t.has(e) || Ia("Cannot " + i), Et = (e, t, i) => (di(e, t, "read from private field"), i ? i.call(e) : t.get(e)), qt = (e, t, i) => t.has(e) ? Ia("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Da = (e, t, i, s) => (di(e, t, "write to private field"), t.set(e, i), i), Mi = (e, t, i) => (di(e, t, "access private method"), i), Ut, we, ct, La, Ba;
let ke = class extends d {
  constructor() {
    super(...arguments), qt(this, ct), qt(this, Ut, []), qt(this, we), this.max = 1 / 0;
  }
  set extensionType(e) {
    Da(this, we, e), Mi(this, ct, La).call(this);
  }
  get extensionType() {
    return Et(this, we);
  }
  render() {
    return l`
			<uui-button
				label=${this.localize.term("general_choose")}
				look="placeholder"
				color="default"
				@click=${Mi(this, ct, Ba)}></uui-button>
		`;
  }
};
Ut = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakSet();
La = function() {
  Et(this, we) && this.observe(ai.byType(Et(this, we)), (e) => {
    Da(this, Ut, e.sort((t, i) => t.type.localeCompare(i.type) || t.alias.localeCompare(i.alias)));
  });
};
Ba = async function() {
  const i = await (await this.getContext(qi)).open(this, Vs, {
    data: {
      headline: `${this.localize.term("general_choose")}...`,
      items: Et(this, Ut).filter((s) => s.type === this.extensionType).map((s) => ({
        label: s.name,
        value: s.alias,
        description: s.alias,
        icon: s.meta?.icon
        // HACK: Ugly way to get the icon. [LK]
      }))
    }
  }).onSubmit();
  i && (this.value = i, this.dispatchEvent(new c()));
};
ke.styles = [
  p`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
Tt([
  r({ type: String, attribute: "extension-type" })
], ke.prototype, "extensionType", 1);
Tt([
  r({ attribute: !1 })
], ke.prototype, "value", 2);
Tt([
  r({ type: Number })
], ke.prototype, "max", 2);
ke = Tt([
  u("umb-input-manifest")
], ke);
var ao = Object.defineProperty, so = Object.getOwnPropertyDescriptor, Wa = (e) => {
  throw TypeError(e);
}, Z = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? so(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && ao(t, i, a), a;
}, no = (e, t, i) => t.has(e) || Wa("Cannot " + i), oo = (e, t, i) => t.has(e) ? Wa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ai = (e, t, i) => (no(e, t, "access private method"), i), dt, za, Ra;
function Ti(e) {
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
let O = class extends Ue(d) {
  constructor() {
    super(), oo(this, dt), this.minLabel = "Low value", this.maxLabel = "High value", this.addValidator(
      "patternMismatch",
      () => "The low value must not be exceed the high value",
      () => this._minValue !== void 0 && this._maxValue !== void 0 ? this._minValue > this._maxValue : !1
    );
  }
  set minValue(e) {
    this._minValue = e, this.updateValue();
  }
  get minValue() {
    return this._minValue;
  }
  set maxValue(e) {
    this._maxValue = e, this.updateValue();
  }
  get maxValue() {
    return this._maxValue;
  }
  updateValue() {
    const e = this._minValue || this._maxValue ? (this._minValue ?? "") + "," + (this._maxValue ?? "") : void 0;
    super.value !== e && (super.value = e);
  }
  set value(e) {
    if (e !== this.value) {
      if (e === void 0) {
        this.minValue = this.maxValue = void 0;
        return;
      }
      const t = e.split(/[ ,]+/);
      this.minValue = Ti(t[0]), this.maxValue = Ti(t[1]);
    }
  }
  get value() {
    return this.minValue || this.maxValue ? (this.minValue || "") + "," + (this.maxValue || "") : void 0;
  }
  firstUpdated() {
    this.shadowRoot?.querySelectorAll("uui-input").forEach((e) => this.addFormControlElement(e));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    return l`
			<uui-input
				type="number"
				label=${this.minLabel}
				min=${g(this.validationRange?.min)}
				max=${g(this.validationRange?.max)}
				placeholder=${this.validationRange?.min ?? ""}
				.value=${this._minValue}
				@input=${Ai(this, dt, za)}></uui-input>
			<b>–</b>
			<uui-input
				type="number"
				label=${this.maxLabel}
				min=${g(this.validationRange?.min)}
				max=${g(this.validationRange?.max)}
				placeholder=${this.validationRange?.max ?? "∞"}
				.value=${this._maxValue}
				@input=${Ai(this, dt, Ra)}></uui-input>
		`;
  }
};
dt = /* @__PURE__ */ new WeakSet();
za = function(e) {
  const t = e.target.value;
  this.minValue = t ? Number(t) : void 0, this.dispatchEvent(new c());
};
Ra = function(e) {
  const t = e.target.value;
  this.maxValue = t ? Number(t) : void 0, this.dispatchEvent(new c());
};
O.styles = p`
		:host(:invalid:not([pristine])) {
			color: var(--uui-color-danger);
		}
		:host(:invalid:not([pristine])) uui-input {
			border-color: var(--uui-color-danger);
		}
	`;
Z([
  r({ type: String, attribute: "min-label" })
], O.prototype, "minLabel", 2);
Z([
  r({ type: String, attribute: "max-label" })
], O.prototype, "maxLabel", 2);
Z([
  h()
], O.prototype, "_minValue", 2);
Z([
  r({ type: Number })
], O.prototype, "minValue", 1);
Z([
  h()
], O.prototype, "_maxValue", 2);
Z([
  r({ type: Number })
], O.prototype, "maxValue", 1);
Z([
  r({ type: Object })
], O.prototype, "validationRange", 2);
Z([
  r()
], O.prototype, "value", 1);
O = Z([
  u("umb-input-number-range")
], O);
var ro = Object.defineProperty, lo = Object.getOwnPropertyDescriptor, Va = (e) => {
  throw TypeError(e);
}, It = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? lo(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && ro(t, i, a), a;
}, mi = (e, t, i) => t.has(e) || Va("Cannot " + i), uo = (e, t, i) => (mi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ui = (e, t, i) => t.has(e) ? Va("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ho = (e, t, i, s) => (mi(e, t, "write to private field"), t.set(e, i), i), Ii = (e, t, i) => (mi(e, t, "access private method"), i), mt, vt, qa, Ha;
let Oe = class extends re(d, "") {
  constructor() {
    super(...arguments), Ui(this, vt), Ui(this, mt, ""), this.list = [], this.readonly = !1;
  }
  set value(e) {
    ho(this, mt, e);
  }
  get value() {
    return uo(this, mt);
  }
  getFormElement() {
  }
  render() {
    return this.list ? l`
			<uui-radio-group .value=${this.value} @change=${Ii(this, vt, qa)} ?readonly=${this.readonly}>
				${ye(
      this.list,
      (e) => e,
      (e) => Ii(this, vt, Ha).call(this, e)
    )}
			</uui-radio-group>
		` : _;
  }
};
mt = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakSet();
qa = function(e) {
  e.stopPropagation(), e.target instanceof Qs && (this.value = e.target.value, this.dispatchEvent(new c()));
};
Ha = function(e) {
  return l`<uui-radio
			value=${e.value}
			class=${Vi({ invalid: !!e.invalid })}
			label=${e.label + (e.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
			title=${e.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}></uui-radio>`;
};
Oe.styles = [
  p`
			:host {
				display: block;
			}

			uui-radio {
				&.invalid {
					text-decoration: line-through;
				}
			}
		`
];
It([
  r()
], Oe.prototype, "value", 1);
It([
  r({ type: Array })
], Oe.prototype, "list", 2);
It([
  r({ type: Boolean, reflect: !0 })
], Oe.prototype, "readonly", 2);
Oe = It([
  u("umb-input-radio-button-list")
], Oe);
var po = Object.defineProperty, co = Object.getOwnPropertyDescriptor, Na = (e) => {
  throw TypeError(e);
}, J = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? co(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && po(t, i, a), a;
}, mo = (e, t, i) => t.has(e) || Na("Cannot " + i), vo = (e, t, i) => t.has(e) ? Na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), xt = (e, t, i) => (mo(e, t, "access private method"), i), Ee, vi, Fa, Ga;
let W = class extends re(d, "") {
  constructor() {
    super(...arguments), vo(this, Ee), this.label = "", this.min = 0, this.max = 100, this.step = 1, this.valueLow = 0, this.valueHigh = 0, this.enableRange = !1, this.readonly = !1;
  }
  getFormElement() {
  }
  render() {
    return this.enableRange ? xt(this, Ee, Ga).call(this) : xt(this, Ee, Fa).call(this);
  }
};
Ee = /* @__PURE__ */ new WeakSet();
vi = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new c());
};
Fa = function() {
  return l`
			<uui-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value=${this.valueLow.toString()}
				@change=${xt(this, Ee, vi)}
				?readonly=${this.readonly}>
			</uui-slider>
		`;
};
Ga = function() {
  return l`
			<uui-range-slider
				.label=${this.label}
				.min=${this.min}
				.max=${this.max}
				.step=${this.step}
				.value="${this.valueLow},${this.valueHigh}"
				@change=${xt(this, Ee, vi)}
				?readonly=${this.readonly}>
			</uui-range-slider>
		`;
};
J([
  r()
], W.prototype, "label", 2);
J([
  r({ type: Number })
], W.prototype, "min", 2);
J([
  r({ type: Number })
], W.prototype, "max", 2);
J([
  r({ type: Number })
], W.prototype, "step", 2);
J([
  r({ type: Number })
], W.prototype, "valueLow", 2);
J([
  r({ type: Number })
], W.prototype, "valueHigh", 2);
J([
  r({ type: Boolean, attribute: "enable-range" })
], W.prototype, "enableRange", 2);
J([
  r({ type: Boolean, reflect: !0 })
], W.prototype, "readonly", 2);
W = J([
  u("umb-input-slider")
], W);
var fo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, Ka = (e) => {
  throw TypeError(e);
}, N = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? _o(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && fo(t, i, a), a;
}, fi = (e, t, i) => t.has(e) || Ka("Cannot " + i), Di = (e, t, i) => (fi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Li = (e, t, i) => t.has(e) ? Ka("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), yo = (e, t, i, s) => (fi(e, t, "write to private field"), t.set(e, i), i), go = (e, t, i) => (fi(e, t, "access private method"), i), Re, jt, Ya;
let x = class extends Ue(d, "") {
  constructor() {
    super(...arguments), Li(this, jt), Li(this, Re, !1), this.showLabels = !1, this.ariaLabel = null, this.readonly = !1;
  }
  set checked(e) {
    yo(this, Re, e), super.value = e.toString();
  }
  get checked() {
    return Di(this, Re);
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("uui-toggle"));
  }
  render() {
    const e = this.showLabels ? this.checked ? this.labelOn : this.labelOff : "";
    return l`<uui-toggle
			.checked=${Di(this, Re)}
			.label=${this.ariaLabel}
			?required=${this.required}
			.requiredMessage=${this.requiredMessage}
			@change=${go(this, jt, Ya)}
			?readonly=${this.readonly}
			><span>${e}</span>
		</uui-toggle>`;
  }
};
Re = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakSet();
Ya = function(e) {
  e.stopPropagation(), this.checked = e.target.checked, this.dispatchEvent(new c());
};
x.styles = [
  p`
			uui-toggle {
				width: 100%;
			}
		`
];
N([
  r({ type: Boolean })
], x.prototype, "required", 2);
N([
  r({ type: String })
], x.prototype, "requiredMessage", 2);
N([
  r({ type: Boolean })
], x.prototype, "checked", 1);
N([
  r({ type: Boolean })
], x.prototype, "showLabels", 2);
N([
  r({ type: String })
], x.prototype, "labelOn", 2);
N([
  r({ type: String })
], x.prototype, "labelOff", 2);
N([
  r({ type: String, attribute: "aria-label" })
], x.prototype, "ariaLabel", 2);
N([
  r({ type: Boolean, reflect: !0 })
], x.prototype, "readonly", 2);
N([
  h()
], x.prototype, "_currentLabel", 2);
x = N([
  u("umb-input-toggle")
], x);
var bo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, Xa = (e) => {
  throw TypeError(e);
}, le = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? $o(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && bo(t, i, a), a;
}, wo = (e, t, i) => t.has(e) || Xa("Cannot " + i), Eo = (e, t, i) => t.has(e) ? Xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), tt = (e, t, i) => (wo(e, t, "access private method"), i), be, Za, Ja, Qa, ja;
let z = class extends Ue(
  d
) {
  constructor() {
    super(...arguments), Eo(this, be), this.label = "", this.alias = "", this.required = !1, this.readonly = !1, this.aliasReadonly = !1, this._aliasLocked = !0;
  }
  firstUpdated() {
    this.addValidator(
      "valueMissing",
      () => Zs,
      () => this.required && !this.value
    ), this.shadowRoot?.querySelectorAll("uui-input").forEach((e) => this.addFormControlElement(e));
  }
  focus() {
    return this.shadowRoot?.querySelector("uui-input")?.focus();
  }
  render() {
    const e = this.label ?? this.localize.term("placeholders_entername"), t = this.localize.term("placeholders_enterAlias");
    return l`
			<uui-input
				id="name"
				placeholder=${e}
				label=${e}
				.value=${this.value}
				@input=${tt(this, be, Za)}
				?required=${this.required}
				?readonly=${this.readonly}>
				${this.readonly ? l`<span id="alias" class="muted" slot="append">${this.alias}</span>` : l`
							<uui-input-lock
								id="alias"
								name="alias"
								slot="append"
								label=${t}
								placeholder=${t}
								.value=${this.alias}
								?auto-width=${!!this.value}
								?locked=${this._aliasLocked && !this.aliasReadonly}
								?readonly=${this.aliasReadonly}
								?required=${this.required}
								@input=${tt(this, be, Ja)}
								@blur=${tt(this, be, Qa)}
								@lock-change=${tt(this, be, ja)}>
							</uui-input-lock>
						`}
			</uui-input>
		`;
  }
};
be = /* @__PURE__ */ new WeakSet();
Za = function(e) {
  if (!(e instanceof Gi)) return;
  typeof e.composedPath()[0]?.value == "string" && (this.value = e.target.value.toString(), this.autoGenerateAlias && this._aliasLocked && (this.alias = Yi(this.value)), this.dispatchEvent(new c()));
};
Ja = function(e) {
  if (e.stopPropagation(), !(e instanceof Gi)) return;
  const t = e.composedPath()[0];
  typeof t?.value == "string" && (this.alias = t.value, this.dispatchEvent(new c()));
};
Qa = function() {
  !this.alias && this._aliasLocked === !1 && (this.alias = Yi(this.value ?? ""), this.dispatchEvent(new c()));
};
ja = function(e) {
  this._aliasLocked = !this._aliasLocked, !this.alias && this._aliasLocked ? this.autoGenerateAlias = !0 : this.autoGenerateAlias = !1, this._aliasLocked || e.target?.focus();
};
z.styles = p`
		#name {
			width: 100%;
			flex: 1 1 auto;
			align-items: center;
		}

		#alias {
			max-width: 50%;

			&.muted {
				opacity: 0.55;
				padding: var(--uui-size-1, 3px) var(--uui-size-space-3, 9px);
			}
		}

		:host(:invalid:not([pristine])) {
			color: var(--uui-color-danger);
		}
		:host(:invalid:not([pristine])) > uui-input {
			border-color: var(--uui-color-danger);
		}
	`;
le([
  r({ type: String })
], z.prototype, "label", 2);
le([
  r({ type: String, reflect: !1 })
], z.prototype, "alias", 2);
le([
  r({ type: Boolean, reflect: !0 })
], z.prototype, "required", 2);
le([
  r({ type: Boolean, reflect: !0 })
], z.prototype, "readonly", 2);
le([
  r({ type: Boolean, reflect: !0, attribute: "alias-readonly" })
], z.prototype, "aliasReadonly", 2);
le([
  r({ type: Boolean, attribute: "auto-generate-alias" })
], z.prototype, "autoGenerateAlias", 2);
le([
  h()
], z.prototype, "_aliasLocked", 2);
z = le([
  u("umb-input-with-alias")
], z);
var xo = Object.defineProperty, Co = Object.getOwnPropertyDescriptor, es = (e) => {
  throw TypeError(e);
}, F = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Co(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && xo(t, i, a), a;
}, ts = (e, t, i) => t.has(e) || es("Cannot " + i), Po = (e, t, i) => (ts(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Bi = (e, t, i) => t.has(e) ? es("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), me = (e, t, i) => (ts(e, t, "access private method"), i), ei, G, _i, is, as, ss, ns, os;
let C = class extends re(d, "") {
  constructor() {
    super(), Bi(this, G), Bi(this, ei, new ni(this, {
      getUniqueOfElement: (e) => e.value.toString(),
      getUniqueOfModel: (e) => e.value,
      identifier: "Umb.SorterIdentifier.ColorEditor",
      itemSelector: "umb-multiple-color-picker-item-input",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new c());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.disabled = !1, this.readonly = !1, this.showLabels = !1, this._items = [], this.consumeContext(en, async (e) => {
      const t = e;
      this.observe(
        await t.propertyValueByAlias("useLabel"),
        (i) => {
          this.showLabels = !!i;
        },
        "observeUseLabel"
      );
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set items(e) {
    this._items = e ?? [], Po(this, ei).setModel(this.items);
  }
  get items() {
    return this._items;
  }
  getFormElement() {
  }
  render() {
    return l`${me(this, G, ns).call(this)} ${me(this, G, os).call(this)}`;
  }
};
ei = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakSet();
_i = function() {
  this.items = [...this._items, { value: "", label: "" }], this.pristine = !1, this.dispatchEvent(new c()), me(this, G, as).call(this);
};
is = function(e, t) {
  e.stopPropagation();
  const i = e.currentTarget, s = i.value, a = i.label;
  this.items = this._items.map((n, o) => o === t ? { value: s, label: a } : n), this.dispatchEvent(new c());
};
as = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-multiple-color-picker-item-input"
  );
  e && e[e.length - 1].focus();
};
ss = function(e, t) {
  e.stopPropagation(), this.items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new c());
};
ns = function() {
  return l`
			<div id="sorter-wrapper">
				${ye(
    this._items,
    (e, t) => t,
    (e, t) => l`
						<umb-multiple-color-picker-item-input
							label=${e.label}
							value=${e.value}
							required
							required-message="Item ${t + 1} is missing a value"
							?disabled=${this.disabled}
							?readonly=${this.readonly}
							?showLabels=${this.showLabels}
							@enter=${me(this, G, _i)}
							@change=${(i) => me(this, G, is).call(this, i, t)}
							@delete=${(i) => me(this, G, ss).call(this, i, t)}>
						</umb-multiple-color-picker-item-input>
					`
  )}
			</div>
		`;
};
os = function() {
  return this.disabled || this.readonly ? _ : l`
			<uui-button
				id="action"
				label=${this.localize.term("general_add")}
				look="placeholder"
				color="default"
				?disabled=${this.disabled}
				@click=${me(this, G, _i)}></uui-button>
		`;
};
C.styles = [
  p`
			#action {
				display: block;
			}

			.--umb-sorter-placeholder {
				position: relative;
				visibility: hidden;
			}
			.--umb-sorter-placeholder::after {
				content: '';
				position: absolute;
				inset: 0px;
				border-radius: var(--uui-border-radius);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
F([
  r({ type: Number })
], C.prototype, "min", 2);
F([
  r({ type: String, attribute: "min-message" })
], C.prototype, "minMessage", 2);
F([
  r({ type: Number })
], C.prototype, "max", 2);
F([
  r({ type: String, attribute: "min-message" })
], C.prototype, "maxMessage", 2);
F([
  r({ type: Boolean, reflect: !0 })
], C.prototype, "disabled", 2);
F([
  r({ type: Boolean, reflect: !0 })
], C.prototype, "readonly", 2);
F([
  r({ type: Boolean })
], C.prototype, "showLabels", 2);
F([
  h()
], C.prototype, "_items", 2);
F([
  r({ type: Array })
], C.prototype, "items", 1);
C = F([
  u("umb-multiple-color-picker-input")
], C);
var So = Object.defineProperty, ko = Object.getOwnPropertyDescriptor, rs = (e) => {
  throw TypeError(e);
}, Q = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? ko(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && So(t, i, a), a;
}, Oo = (e, t, i) => t.has(e) || rs("Cannot " + i), Mo = (e, t, i) => t.has(e) ? rs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), b = (e, t, i) => (Oo(e, t, "access private method"), i), f, ls, us, hs, ps, cs, ds, ms, vs, fs, _s, yi;
let M = class extends re(d, "") {
  constructor() {
    super(...arguments), Mo(this, f), this._valueHex = "", this.disabled = !1, this.readonly = !1, this.showLabels = !1;
  }
  set value(e) {
    e.startsWith("#") ? (this._valueHex = e, super.value = e.substring(1)) : (super.value = e, this._valueHex = `#${e}`);
  }
  get value() {
    return super.value;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			<umb-form-validation-message id="validation-message" @invalid=${b(this, f, _s)} @valid=${b(this, f, fs)}>
				<div id="item">
					${this.disabled || this.readonly ? _ : l`<uui-icon name="icon-navigation"></uui-icon>`}
					<div class="color-wrapper">
						<uui-input
							id="input"
							value=${this.value}
							label=${this.localize.term("general_value")}
							placeholder=${this.localize.term("general_value")}
							required=${this.required}
							required-message="Value is missing"
							@keydown=${b(this, f, cs)}
							@input=${b(this, f, ms)}
							@change=${b(this, f, ds)}>
							<uui-color-swatch
								slot="prepend"
								label=${this.value}
								value=${this._valueHex}
								@click=${b(this, f, yi)}></uui-color-swatch>
						</uui-input>
						<input aria-hidden="${!0}" type="color" id="color" value=${this.value} @change=${b(this, f, vs)} />
					</div>
					${$(
      this.showLabels,
      () => l`
							<uui-input
								label=${this.localize.term("placeholders_label")}
								placeholder=${this.localize.term("placeholders_label")}
								value=${g(this.label)}
								@keydown=${b(this, f, hs)}
								@input="${b(this, f, us)}"
								@change="${b(this, f, ps)}"
								?disabled=${this.disabled}
								?readonly=${this.readonly}></uui-input>
						`
    )}
					${$(
      !this.readonly,
      () => l`
							<uui-button
								compact
								color="danger"
								label=${this.localize.term("actions_delete")}
								look="primary"
								?disabled=${this.disabled}
								@click=${b(this, f, ls)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						`
    )}
				</div>
			</umb-form-validation-message>
		`;
  }
};
f = /* @__PURE__ */ new WeakSet();
ls = async function() {
  await Hi(this, {
    headline: `${this.localize.term("actions_delete")} ${this.value || ""}`,
    content: this.localize.term("content_nestedContentDeleteItem"),
    color: "danger",
    confirmLabel: this.localize.term("actions_delete")
  }), this.dispatchEvent(new Ni());
};
us = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new si());
};
hs = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
ps = function(e) {
  e.stopPropagation(), this.label = e.target.value, this.dispatchEvent(new c());
};
cs = function(e) {
  e.stopPropagation(), e.key === "Enter" && b(this, f, yi).call(this);
};
ds = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new c());
};
ms = function(e) {
  e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new si());
};
vs = function(e) {
  e.stopPropagation(), this.value = this._colorPicker.value, this.dispatchEvent(new c());
};
fs = function(e) {
  e.stopPropagation();
};
_s = function(e) {
  e.stopPropagation();
};
yi = function() {
  this._colorPicker.click();
};
M.styles = [
  p`
			:host {
				display: flex;
				align-items: center;
				margin-bottom: var(--uui-size-space-3);
				gap: var(--uui-size-space-3);
			}

			#item {
				position: relative;
				display: flex;
				gap: var(--uui-size-1);
				align-items: center;
			}
			uui-input {
				flex: 1;
			}

			uui-color-swatch {
				padding: var(--uui-size-1);
			}

			uui-color-swatch:focus-within {
				outline: 2px solid var(--uui-color-selected);
				outline-offset: 0;
				border-radius: var(--uui-border-radius);
			}

			.color-wrapper {
				position: relative;
				flex: 1;
				display: flex;
				flex-direction: column;
			}

			uui-input,
			#validation-message {
				flex: 1;
			}

			input[type='color'] {
				visibility: hidden;
				width: 0px;
				padding: 0;
				margin: 0;
				position: absolute;
			}
		`
];
Q([
  r({ type: String })
], M.prototype, "value", 1);
Q([
  h()
], M.prototype, "_valueHex", 2);
Q([
  r({ type: Boolean, reflect: !0 })
], M.prototype, "disabled", 2);
Q([
  r({ type: Boolean, reflect: !0 })
], M.prototype, "readonly", 2);
Q([
  r({ type: String })
], M.prototype, "label", 2);
Q([
  V("#input")
], M.prototype, "_input", 2);
Q([
  V("#color")
], M.prototype, "_colorPicker", 2);
Q([
  r({ type: Boolean })
], M.prototype, "showLabels", 2);
M = Q([
  u("umb-multiple-color-picker-item-input")
], M);
var Ao = Object.defineProperty, To = Object.getOwnPropertyDescriptor, ys = (e) => {
  throw TypeError(e);
}, j = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? To(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Ao(t, i, a), a;
}, gi = (e, t, i) => t.has(e) || ys("Cannot " + i), Be = (e, t, i) => (gi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), it = (e, t, i) => t.has(e) ? ys("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Wi = (e, t, i, s) => (gi(e, t, "write to private field"), t.set(e, i), i), ve = (e, t, i) => (gi(e, t, "access private method"), i), Ve, ft, _t, K, bi, gs, bs, $s, ws, Es;
let A = class extends Ue(
  d,
  void 0
) {
  constructor() {
    super(), it(this, K), it(this, Ve, new ni(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.MultipleTextString",
      itemSelector: "umb-input-multiple-text-string-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new c());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", it(this, ft, !1), it(this, _t, !1), this._items = [], this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set disabled(e) {
    Wi(this, ft, e), e && Be(this, Ve).disable();
  }
  get disabled() {
    return Be(this, ft);
  }
  set readonly(e) {
    Wi(this, _t, e), e && Be(this, Ve).disable();
  }
  get readonly() {
    return Be(this, _t);
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this.value = e?.length > 0 ? "some value" : "", this._items = e ?? [], Be(this, Ve).setModel(this.items);
  }
  getFormElement() {
  }
  render() {
    return l`<div id="sorter-wrapper">${ve(this, K, ws).call(this)}</div>
			${ve(this, K, Es).call(this)}`;
  }
};
Ve = /* @__PURE__ */ new WeakMap();
ft = /* @__PURE__ */ new WeakMap();
_t = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakSet();
bi = function() {
  this._items = [...this._items, ""], this.pristine = !1, this.dispatchEvent(new c()), ve(this, K, bs).call(this);
};
gs = function(e, t) {
  e.stopPropagation();
  const s = e.currentTarget.value;
  this._items = this._items.map((a, n) => n === t ? s : a), this.dispatchEvent(new c());
};
bs = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll(
    "umb-input-multiple-text-string-item"
  );
  e[e.length - 1].focus();
};
$s = function(e, t) {
  e.stopPropagation(), this._items = this._items.filter((i, s) => s !== t), this.pristine = !1, this.dispatchEvent(new c());
};
ws = function() {
  return l`
			${ye(
    this._items,
    (e, t) => t,
    (e, t) => l`
					<umb-input-multiple-text-string-item
						name="item-${t}"
						data-sort-entry-id=${e}
						required
						required-message="Item ${t + 1} is missing a value"
						value=${e}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						@enter=${ve(this, K, bi)}
						@delete=${(i) => ve(this, K, $s).call(this, i, t)}
						@input=${(i) => ve(this, K, gs).call(this, i, t)}>
					</umb-input-multiple-text-string-item>
				`
  )}
		`;
};
Es = function() {
  return this.disabled || this.readonly ? _ : l`
			<uui-button
				color="default"
				id="action"
				label="Add"
				look="placeholder"
				?disabled=${this.disabled}
				@click=${ve(this, K, bi)}></uui-button>
		`;
};
A.styles = [
  p`
			#action {
				display: block;
			}

			.--umb-sorter-placeholder {
				position: relative;
				visibility: hidden;
			}
			.--umb-sorter-placeholder::after {
				content: '';
				position: absolute;
				inset: 0px;
				border-radius: var(--uui-border-radius);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
j([
  r({ type: Number })
], A.prototype, "min", 2);
j([
  r({ type: String, attribute: "min-message" })
], A.prototype, "minMessage", 2);
j([
  r({ type: Number })
], A.prototype, "max", 2);
j([
  r({ type: String, attribute: "min-message" })
], A.prototype, "maxMessage", 2);
j([
  r({ type: Boolean, reflect: !0 })
], A.prototype, "disabled", 1);
j([
  r({ type: Boolean, reflect: !0 })
], A.prototype, "readonly", 1);
j([
  h()
], A.prototype, "_items", 2);
j([
  r({ type: Array })
], A.prototype, "items", 1);
A = j([
  u("umb-input-multiple-text-string")
], A);
var Uo = Object.defineProperty, Io = Object.getOwnPropertyDescriptor, xs = (e) => {
  throw TypeError(e);
}, Dt = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Io(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Uo(t, i, a), a;
}, Do = (e, t, i) => t.has(e) || xs("Cannot " + i), Lo = (e, t, i) => t.has(e) ? xs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ge = (e, t, i) => (Do(e, t, "access private method"), i), ie, Cs, Ps, Ss, ks, Os, Ms;
let Me = class extends re(d, "") {
  constructor() {
    super(...arguments), Lo(this, ie), this.disabled = !1, this.readonly = !1;
  }
  async focus() {
    await this.updateComplete, this._input?.focus();
  }
  getFormElement() {
  }
  render() {
    return l`
			${this.disabled || this.readonly ? _ : l`<uui-icon name="icon-navigation" class="handle"></uui-icon>`}

			<umb-form-validation-message id="validation-message" @invalid=${ge(this, ie, Ms)} @valid=${ge(this, ie, Os)}>
				<uui-input
					id="input"
					label="Value"
					value=${this.value}
					@keydown=${ge(this, ie, Ss)}
					@input=${ge(this, ie, Ps)}
					@change=${ge(this, ie, ks)}
					?disabled=${this.disabled}
					?readonly=${this.readonly}
					required=${this.required}
					required-message="Value is missing"></uui-input>
			</umb-form-validation-message>

			${$(
      !this.readonly,
      () => l`
					<uui-button
						compact
						color="danger"
						label="${this.localize.term("general_remove")} ${this.value}"
						look="outline"
						?disabled=${this.disabled}
						@click=${ge(this, ie, Cs)}>
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				`
    )}
		`;
  }
};
ie = /* @__PURE__ */ new WeakSet();
Cs = async function() {
  await Hi(this, {
    headline: `Delete ${this.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new Ni());
};
Ps = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new si());
};
Ss = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  e.key === "Enter" && t.value && this.dispatchEvent(new CustomEvent("enter"));
};
ks = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.value, this.dispatchEvent(new c());
};
Os = function(e) {
  e.stopPropagation();
};
Ms = function(e) {
  e.stopPropagation();
};
Me.styles = [
  p`
			:host {
				display: flex;
				align-items: center;
				margin-bottom: var(--uui-size-space-3);
				gap: var(--uui-size-space-3);
			}

			#validation-message {
				flex: 1;
			}

			#input {
				width: 100%;
			}

			.handle {
				cursor: move;
			}
		`
];
Dt([
  r({ type: Boolean, reflect: !0 })
], Me.prototype, "disabled", 2);
Dt([
  r({ type: Boolean, reflect: !0 })
], Me.prototype, "readonly", 2);
Dt([
  V("#input")
], Me.prototype, "_input", 2);
Me = Dt([
  u("umb-input-multiple-text-string-item")
], Me);
var Bo = Object.getOwnPropertyDescriptor, Wo = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Bo(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = o(a) || a);
  return a;
};
let ti = class extends d {
  render() {
    return l`<slot></slot>`;
  }
};
ti.styles = [
  P,
  p`
			:host {
				background-color: var(--uui-color-surface);
				display: block;
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
				overflow: clip;
			}
		`
];
ti = Wo([
  u("umb-popover-layout")
], ti);
var zo = Object.defineProperty, Ro = Object.getOwnPropertyDescriptor, As = (e) => {
  throw TypeError(e);
}, Ts = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Ro(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && zo(t, i, a), a;
}, Vo = (e, t, i) => t.has(e) || As("Cannot " + i), Ht = (e, t, i) => (Vo(e, t, "read from private field"), i ? i.call(e) : t.get(e)), qo = (e, t, i) => t.has(e) ? As("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), qe;
let Ct = class extends tn(Ki) {
  constructor() {
    super(...arguments), this.icon = "", qo(this, qe, document.createElement("umb-icon"));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.icon && (Ht(this, qe).setAttribute("slot", "icon"), Ht(this, qe).setAttribute("name", this.icon), this.appendChild(Ht(this, qe)));
  }
};
qe = /* @__PURE__ */ new WeakMap();
Ct.styles = [
  ...Ki.styles,
  p`
			:host {
				padding-top: var(--uui-size-3);
				padding-bottom: var(--uui-size-3);
			}
		`
];
Ts([
  r({ type: String })
], Ct.prototype, "icon", 2);
Ct = Ts([
  u("umb-ref-item")
], Ct);
var Ho = Object.defineProperty, No = Object.getOwnPropertyDescriptor, $i = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? No(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Ho(t, i, a), a;
};
let Qe = class extends d {
  constructor() {
    super(...arguments), this.look = "default", this.divide = !1;
  }
  render() {
    return l`
			<div class=${Vi({ divide: this.divide, compact: this.look === "compact" })}>
				<slot></slot>
			</div>
		`;
  }
};
Qe.styles = [
  p`
			div {
				display: block;
				position: relative;
			}

			::slotted(*) {
				position: relative;
				margin-top: var(--uui-size-space-6);
			}

			.divide ::slotted(*)::before {
				content: '';
				position: absolute;
				top: calc((var(--uui-size-space-6) / 2) * -1);
				height: 0;
				width: 100%;
				border-top: solid 1px var(--uui-color-divider-standalone);
			}

			::slotted(*:first-child) {
				margin-top: 0;
			}

			.divide ::slotted(*:first-child)::before {
				display: none;
			}

			.compact ::slotted(*) {
				margin-top: var(--uui-size-space-3);
			}

			.compact ::slotted(*:first-child) {
				margin-top: 0;
			}

			.compact.divide ::slotted(*)::before {
				display: none;
			}
		`
];
$i([
  r({ type: String })
], Qe.prototype, "look", 2);
$i([
  r({ type: Boolean })
], Qe.prototype, "divide", 2);
Qe = $i([
  u("umb-stack")
], Qe);
var Fo = Object.defineProperty, Go = Object.getOwnPropertyDescriptor, Us = (e) => {
  throw TypeError(e);
}, ee = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Go(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Fo(t, i, a), a;
}, wi = (e, t, i) => t.has(e) || Us("Cannot " + i), S = (e, t, i) => (wi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), We = (e, t, i) => t.has(e) ? Us("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Pt = (e, t, i, s) => (wi(e, t, "write to private field"), t.set(e, i), i), D = (e, t, i) => (wi(e, t, "access private method"), i), xe, yt, y, Is, Ae, St, Ds, Te, Ei, Ls, ii, Bs;
let T = class extends je {
  constructor() {
    super(...arguments), We(this, y), this.lock = "none", this.position = "var(--umb-split-panel-initial-position)", We(this, xe, 0), We(this, yt, 25), this._hasStartPanel = !1, this._hasEndPanel = !1, We(this, Ae, !1), We(this, Te, (e) => {
      e.preventDefault();
      const t = (a) => {
        const { clientX: n } = a, { left: o, width: De } = this.mainElement.getBoundingClientRect(), he = Xi(n - o, 0, De), U = s(he, De);
        Pt(this, xe, this.lock === "start" ? U : De - U), D(this, y, St).call(this, U);
      }, i = () => {
        document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", i), this.dispatchEvent(new CustomEvent("position-changed", { detail: { position: this.position } }));
      }, s = (a, n) => {
        const o = this.snap?.split(" ");
        if (!o) return a;
        const he = o.map((U) => {
          let te = parseFloat(U);
          return U.endsWith("%") && (te = te / 100 * n), U.startsWith("-") && (te = n + te), te;
        }).reduce((U, te) => Math.abs(te - a) < Math.abs(U - a) ? te : U);
        return he < a + S(this, yt) && he > a - S(this, yt) && (a = he), a;
      };
      document.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerup", i);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), D(this, y, Ei).call(this);
  }
  updated(e) {
    if (super.updated(e), !!S(this, Ae) && e.has("position")) {
      if (this.lock !== "none") {
        const { width: t } = this.mainElement.getBoundingClientRect();
        let i = parseFloat(this.position);
        this.position.endsWith("%") && (i = i / 100 * t);
        const s = this.lock === "start" ? i : t - i;
        Pt(this, xe, s);
      }
      D(this, y, Ds).call(this);
    }
  }
  render() {
    return l`
			<div id="main">
				<slot
					name="start"
					@slotchange=${D(this, y, ii)}
					style="width: ${this._hasStartPanel ? "100%" : "0"}"></slot>
				<div id="divider">
					<div id="divider-touch-area" tabindex="0" @keydown=${D(this, y, Bs)}></div>
				</div>
				<slot name="end" @slotchange=${D(this, y, ii)} style="width: ${this._hasEndPanel ? "100%" : "0"}"></slot>
			</div>
		`;
  }
};
xe = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
Is = function() {
  return this._hasStartPanel && this._hasEndPanel;
};
Ae = /* @__PURE__ */ new WeakMap();
St = function(e) {
  const { width: t } = this.mainElement.getBoundingClientRect(), s = Xi(e, 0, t) / t * 100;
  this.position = s + "%";
};
Ds = function() {
  let e = this.position, t = "1fr";
  this.lock === "start" && (e = S(this, xe) + "px", t = "1fr"), this.lock === "end" && (e = "1fr", t = S(this, xe) + "px"), this.mainElement.style.gridTemplateColumns = `
      minmax(var(--umb-split-panel-start-min-width), ${e})
      0px
      minmax(var(--umb-split-panel-end-min-width), ${t})
    `;
};
Te = /* @__PURE__ */ new WeakMap();
Ei = function() {
  this.dividerTouchAreaElement.removeEventListener("pointerdown", S(this, Te)), this.dividerTouchAreaElement.removeEventListener("touchstart", S(this, Te)), this.dividerElement.style.display = "none", this.mainElement.style.display = "flex", Pt(this, Ae, !1);
};
Ls = async function() {
  Pt(this, Ae, !0), this.mainElement.style.display = "grid", this.mainElement.style.gridTemplateColumns = `${this.position} 0px 1fr`, this.dividerElement.style.display = "unset", this.dividerTouchAreaElement.addEventListener("pointerdown", S(this, Te)), this.dividerTouchAreaElement.addEventListener("touchstart", S(this, Te), { passive: !1 }), await new Promise((a) => requestAnimationFrame(a));
  const { left: e } = this.shadowRoot.querySelector("#divider").getBoundingClientRect(), { left: t, width: i } = this.mainElement.getBoundingClientRect(), s = (e - t) / i * 100;
  this.position = `${s}%`;
};
ii = function(e) {
  const t = e.target, i = t.name;
  if (i === "start" && (this._hasStartPanel = t.assignedElements().length > 0), i === "end" && (this._hasEndPanel = t.assignedElements().length > 0), !S(this, y, Is)) {
    S(this, Ae) && D(this, y, Ei).call(this);
    return;
  }
  D(this, y, Ls).call(this);
};
Bs = function(e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const { width: t } = this.mainElement.getBoundingClientRect(), a = (this.dividerElement.getBoundingClientRect().left - this.mainElement.getBoundingClientRect().left) / t * 100, o = 1 * (e.shiftKey ? 10 : 1) * (e.key === "ArrowLeft" ? -1 : 1), he = (a + o) / 100 * this.mainElement.getBoundingClientRect().width;
    D(this, y, St).call(this, he);
  }
  if (e.key === "Home" || e.key === "End") {
    e.preventDefault();
    const { width: t } = this.mainElement.getBoundingClientRect(), i = e.key === "Home" ? 0 : t;
    D(this, y, St).call(this, i);
  }
};
T.styles = p`
		:host {
			display: contents;
			--umb-split-panel-initial-position: 50%;
			--umb-split-panel-start-min-width: 0;
			--umb-split-panel-end-min-width: 0;
			--umb-split-panel-divider-touch-area-width: 20px;
			--umb-split-panel-divider-width: 1px;
			--umb-split-panel-divider-color: transparent;
			--umb-split-panel-slot-overflow: hidden;
		}
		slot {
			overflow: var(--umb-split-panel-slot-overflow);
			display: block;
			min-height: 0;
		}
		#main {
			width: 100%;
			height: 100%;
			display: flex;
			position: relative;
			z-index: 0;
			overflow: hidden;
		}
		#divider {
			height: 100%;
			position: relative;
			z-index: 999999;
			display: none;
		}
		#divider-touch-area {
			position: absolute;
			top: 0;
			left: 5px;
			height: 100%;
			width: var(--umb-split-panel-divider-touch-area-width);
			transform: translateX(-50%);
			cursor: col-resize;
		}
		/* Do we want a line that shows the divider? */
		#divider::after {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			width: var(--umb-split-panel-divider-width);
			height: 100%;
			transform: round(translateX(-50%));
			background-color: var(--umb-split-panel-divider-color);
			z-index: -1;
		}
	`;
ee([
  V("#main")
], T.prototype, "mainElement", 2);
ee([
  V("#divider-touch-area")
], T.prototype, "dividerTouchAreaElement", 2);
ee([
  V("#divider")
], T.prototype, "dividerElement", 2);
ee([
  r({ type: String })
], T.prototype, "snap", 2);
ee([
  r({ type: String })
], T.prototype, "lock", 2);
ee([
  r({ type: String, reflect: !0 })
], T.prototype, "position", 2);
ee([
  h()
], T.prototype, "_hasStartPanel", 2);
ee([
  h()
], T.prototype, "_hasEndPanel", 2);
T = ee([
  u("umb-split-panel")
], T);
var Ko = Object.defineProperty, Yo = Object.getOwnPropertyDescriptor, ue = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Yo(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, i, a) : o(a)) || a);
  return s && a && Ko(t, i, a), a;
};
class zi extends Event {
  constructor() {
    super("selected", { bubbles: !0, composed: !0 });
  }
}
class Ri extends Event {
  constructor() {
    super("deselected", { bubbles: !0, composed: !0 });
  }
}
class Xo extends Event {
  constructor() {
    super("ordered", { bubbles: !0, composed: !0 });
  }
}
let R = class extends je {
  constructor() {
    super(...arguments), this.items = [], this.columns = [], this.config = {
      allowSelection: !1,
      hideIcon: !1
    }, this.selection = [], this.orderingColumn = "", this.orderingDesc = !1, this._selectionMode = !1, this._renderRow = (e) => l`
			<uui-table-row
				?selectable="${this.config.allowSelection}"
				?select-only=${this._selectionMode}
				?selected=${this._isSelected(e.id)}
				@selected=${() => this._selectRow(e.id)}
				@deselected=${() => this._deselectRow(e.id)}>
				${this._renderRowCheckboxCell(e)} ${this.columns.map((t) => this._renderRowCell(t, e))}
			</uui-table-row>
		`;
  }
  _isSelected(e) {
    return this.selection.includes(e);
  }
  _handleRowCheckboxChange(e, t) {
    e.target.checked ? this._selectRow(t.id) : this._deselectRow(t.id);
  }
  _handleAllRowsCheckboxChange(e) {
    e.target.checked ? this._selectAllRows() : this._deselectAllRows();
  }
  _handleOrderingChange(e) {
    this.orderingDesc = this.orderingColumn === e.alias ? !this.orderingDesc : !1, this.orderingColumn = e.alias, this.dispatchEvent(new Xo());
  }
  _selectAllRows() {
    this.selection = this.items.map((e) => e.id), this._selectionMode = !0, this.dispatchEvent(new zi());
  }
  _deselectAllRows() {
    this.selection = [], this._selectionMode = !1, this.dispatchEvent(new Ri());
  }
  _selectRow(e) {
    this.selection = [...this.selection, e], this._selectionMode = this.selection.length > 0, this.dispatchEvent(new zi());
  }
  _deselectRow(e) {
    this.selection = this.selection.filter((t) => t !== e), this._selectionMode = this.selection.length > 0, this.dispatchEvent(new Ri());
  }
  render() {
    return l`
			<uui-table class="uui-text">
				<uui-table-column
					.style=${$(
      !(this.config.allowSelection === !1 && this.config.hideIcon === !0),
      () => "width: 60px"
    )}></uui-table-column>
				<uui-table-head>
					${this._renderHeaderCheckboxCell()} ${this.columns.map((e) => this._renderHeaderCell(e))}
				</uui-table-head>
				${ye(this.items, (e) => e.id, this._renderRow)}
			</uui-table>
		`;
  }
  _renderHeaderCell(e) {
    return l`
			<uui-table-head-cell style="--uui-table-cell-padding: 0 var(--uui-size-5)">
				${e.allowSorting ? l`${this._renderSortingUI(e)}` : l`<span style="text-align:${e.align ?? "left"};">${e.name}</span>`}
			</uui-table-head-cell>
		`;
  }
  _renderSortingUI(e) {
    return l`
			<button
				style="padding: var(--uui-size-5) var(--uui-size-1);"
				@click="${() => this._handleOrderingChange(e)}">
				<span style="text-align:${e.align ?? "left"};">${e.name}</span>
				<uui-symbol-sort ?active=${this.orderingColumn === e.alias} ?descending=${this.orderingDesc}>
				</uui-symbol-sort>
			</button>
		`;
  }
  _renderHeaderCheckboxCell() {
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-head-cell style="--uui-table-cell-padding: 0; text-align: center;">
				${$(
        this.config.allowSelection,
        () => l` <uui-checkbox
							label="Select All"
							style="padding: var(--uui-size-4) var(--uui-size-5);"
							@change="${this._handleAllRowsCheckboxChange}"
							?checked="${this.selection.length === this.items.length}">
						</uui-checkbox>`
      )}
			</uui-table-head-cell>
		`;
  }
  _renderRowCheckboxCell(e) {
    if (!(this.config.hideIcon && !this.config.allowSelection))
      return l`
			<uui-table-cell style="text-align: center;">
				${$(!this.config.hideIcon, () => l`<umb-icon name="${g(e.icon ?? void 0)}"></umb-icon>`)}
				${$(
        this.config.allowSelection,
        () => l`
						<uui-checkbox
							label="Select Row"
							@click=${(t) => t.stopPropagation()}
							@change=${(t) => this._handleRowCheckboxChange(t, e)}
							?checked="${this._isSelected(e.id)}">
						</uui-checkbox>
					`
      )}
			</uui-table-cell>
		`;
  }
  _renderRowCell(e, t) {
    return l`
			<uui-table-cell
				style="--uui-table-cell-padding: 0 var(--uui-size-5); text-align:${e.align ?? "left"}; width: ${e.width || "auto"};">
					${this._renderCellContent(e, t)}
			</uui-table-cell>
		</uui-table-cell>
		`;
  }
  _renderCellContent(e, t) {
    const i = t.data.find((s) => s.columnAlias === e.alias)?.value;
    if (e.elementName) {
      const s = document.createElement(e.elementName);
      return s.column = e, s.item = t, s.value = i, s;
    }
    if (e.labelTemplate) {
      import("@umbraco-cms/backoffice/ufm");
      const s = document.createElement("umb-ufm-render");
      return s.inline = !0, s.markdown = e.labelTemplate, s.value = { value: i }, s;
    }
    return i;
  }
};
R.styles = [
  P,
  p`
			:host {
				height: fit-content;
			}

			uui-table {
				box-shadow: var(--uui-shadow-depth-1);
			}

			uui-table-head {
				position: sticky;
				top: 0;
				z-index: 1;
				background-color: var(--uui-color-surface, #fff);
			}

			uui-table-row uui-checkbox {
				display: none;
			}

			uui-table-row[selectable]:focus umb-icon,
			uui-table-row[selectable]:focus-within umb-icon,
			uui-table-row[selectable]:hover umb-icon,
			uui-table-row[select-only] umb-icon {
				display: none;
			}

			uui-table-row[selectable]:focus uui-checkbox,
			uui-table-row[selectable]:focus-within uui-checkbox,
			uui-table-row[selectable]:hover uui-checkbox,
			uui-table-row[select-only] uui-checkbox {
				display: inline-block;
			}

			uui-table-head-cell:focus,
			uui-table-head-cell:focus-within,
			uui-table-head-cell:hover {
				--uui-symbol-sort-hover: 1;
			}

			uui-table-head-cell button {
				padding: 0;
				background-color: transparent;
				color: inherit;
				border: none;
				cursor: pointer;
				font-weight: inherit;
				font-size: inherit;
				display: inline-flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			}

			uui-table-head-cell button > span {
				flex: 1 0 auto;
			}

			uui-table-cell umb-icon {
				vertical-align: top;
			}
		`
];
ue([
  r({ type: Array, attribute: !1 })
], R.prototype, "items", 2);
ue([
  r({ type: Array, attribute: !1 })
], R.prototype, "columns", 2);
ue([
  r({ type: Object, attribute: !1 })
], R.prototype, "config", 2);
ue([
  r({ type: Array, attribute: !1 })
], R.prototype, "selection", 2);
ue([
  r({ type: String, attribute: !1 })
], R.prototype, "orderingColumn", 2);
ue([
  r({ type: Boolean, attribute: !1 })
], R.prototype, "orderingDesc", 2);
ue([
  h()
], R.prototype, "_selectionMode", 2);
R = ue([
  u("umb-table")
], R);
export {
  ti as A,
  Ct as B,
  Qe as C,
  T as D,
  zi as E,
  Ri as F,
  Xo as G,
  R as H,
  Ce as U,
  Ge as a,
  w as b,
  Pe as c,
  k as d,
  B as e,
  Gt as f,
  Kt as g,
  Ke as h,
  Yt as i,
  _e as j,
  Xe as k,
  Ze as l,
  ki as m,
  oe as n,
  E as o,
  Je as p,
  ke as q,
  O as r,
  Oe as s,
  W as t,
  x as u,
  z as v,
  C as w,
  M as x,
  A as y,
  Me as z
};
//# sourceMappingURL=table.element-JGMLeqE5.js.map
