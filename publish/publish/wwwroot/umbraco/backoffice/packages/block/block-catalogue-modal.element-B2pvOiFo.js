import { a as w } from "./block-workspace.modal-token-N1xnaaIe.js";
import { UMB_BLOCK_MANAGER_CONTEXT as z } from "@umbraco-cms/backoffice/block";
import { css as T, state as d, customElement as x, html as l, nothing as b, repeat as K } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as O, UMB_MODAL_CONTEXT as P } from "@umbraco-cms/backoffice/modal";
import { UmbModalRouteRegistrationController as S } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/block-type";
var U = Object.defineProperty, G = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, p = (e, t, o, s) => {
  for (var i = s > 1 ? void 0 : s ? G(t, o) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (i = (s ? h(t, o, i) : h(i)) || i);
  return s && i && U(t, o, i), i;
}, m = (e, t, o) => t.has(e) || y("Cannot " + o), f = (e, t, o) => (m(e, t, "read from private field"), o ? o.call(e) : t.get(e)), k = (e, t, o) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), L = (e, t, o, s) => (m(e, t, "write to private field"), t.set(e, o), o), r = (e, t, o) => (m(e, t, "access private method"), o), u, a, _, C, g, v, $, E, B, M;
let n = class extends O {
  constructor() {
    super(), k(this, a), k(this, u, ""), this._groupedBlocks = [], this._filtered = [], this.consumeContext(P, (e) => {
      e.data.createBlockInWorkspace && new S(this, w).onSetup(() => ({
        data: { preset: {}, originData: e.data.originData }
      })).onSubmit(() => {
        this.modalContext?.submit();
      }).observeRouteBuilder((t) => {
        this._workspacePath = t({});
      });
    }), this.consumeContext(z, (e) => {
      this._manager = e;
    });
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data) return;
    this._openClipboard = this.data.openClipboard ?? !1;
    const e = this.data.blocks ?? [], t = this.data.blockGroups ?? [], o = e.filter((i) => !t.find((c) => c.key === i.groupKey)), s = t.map((i) => ({
      name: i.name,
      blocks: e.filter((c) => c.groupKey === i.key)
    }));
    this._groupedBlocks = [{ blocks: o }, ...s], r(this, a, _).call(this);
  }
  render() {
    return l`
			<umb-body-layout headline="${this.localize.term("blockEditor_addBlock")}">
				${r(this, a, M).call(this)}${r(this, a, $).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
_ = function() {
  if (f(this, u).length === 0)
    this._filtered = this._groupedBlocks;
  else {
    const e = f(this, u).toLowerCase();
    this._filtered = this._groupedBlocks.map((t) => ({ ...t, blocks: t.blocks.filter((o) => o.label?.toLocaleLowerCase().includes(e)) }));
  }
};
C = function(e) {
  L(this, u, e.target.value), r(this, a, _).call(this);
};
g = function(e) {
  this.value = {
    create: {
      contentElementTypeKey: e
    }
  }, this.modalContext?.submit();
};
v = async function(e) {
  const o = e.target?.selection || [];
  this.value = {
    clipboard: {
      selection: o
    }
  };
};
$ = function() {
  return this._manager ? this._openClipboard ? r(this, a, E).call(this) : r(this, a, B).call(this) : b;
};
E = function() {
  return l`<uui-box
			><umb-clipboard-entry-picker
				.config=${{ multiple: !0, asyncFilter: this.data?.clipboardFilter }}
				@selection-change=${r(this, a, v)}></umb-clipboard-entry-picker
		></uui-box>`;
};
B = function() {
  return l`
			${this.data?.blocks && this.data.blocks.length > 8 ? l`<uui-input
						id="search"
						@input=${r(this, a, C)}
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}>
						<uui-icon name="icon-search" slot="prepend"></uui-icon>
					</uui-input>` : b}
			${this._filtered.map(
    (e) => l`
					${e.name && e.blocks.length !== 0 && e.name !== "" ? l`<h4>${e.name}</h4>` : b}
					<div class="blockGroup">
						${K(
      e.blocks,
      (t) => t.contentElementTypeKey,
      (t) => l`
								<umb-block-type-card
									.iconFile=${t.thumbnail}
									.iconColor=${t.iconColor}
									.backgroundColor=${t.backgroundColor}
									.contentElementTypeKey=${t.contentElementTypeKey}
									@open=${() => r(this, a, g).call(this, t.contentElementTypeKey)}
									.href=${this._workspacePath && this._manager.getContentTypeHasProperties(t.contentElementTypeKey) ? `${this._workspacePath}create/${t.contentElementTypeKey}` : void 0}>
								</umb-block-type-card>
							`
    )}
					</div>
				`
  )}
		`;
};
M = function() {
  return l`
			<uui-tab-group slot="navigation">
				<uui-tab
					label=${this.localize.term("blockEditor_tabCreateEmpty")}
					?active=${!this._openClipboard}
					@click=${() => this._openClipboard = !1}>
					<umb-localize key=${this.localize.term("blockEditor_tabCreateEmpty")}>Create Empty</umb-localize>
					<uui-icon slot="icon" name="icon-add"></uui-icon>
				</uui-tab>
				<uui-tab
					label=${this.localize.term("blockEditor_tabClipboard")}
					?active=${this._openClipboard}
					@click=${() => this._openClipboard = !0}>
					<umb-localize key=${this.localize.term("blockEditor_tabClipboard")}>Clipboard</umb-localize>
					<uui-icon slot="icon" name="icon-clipboard"></uui-icon>
				</uui-tab>
			</uui-tab-group>
		`;
};
n.styles = [
  T`
			#search {
				width: 100%;
				align-items: center;
				margin-bottom: var(--uui-size-layout-1);
			}
			#search uui-icon {
				padding-left: var(--uui-size-space-3);
			}
			.blockGroup {
				display: grid;
				gap: 1rem;
				grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
			}

			uui-tab-group {
				--uui-tab-divider: var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
			}
		`
];
p([
  d()
], n.prototype, "_openClipboard", 2);
p([
  d()
], n.prototype, "_workspacePath", 2);
p([
  d()
], n.prototype, "_filtered", 2);
p([
  d()
], n.prototype, "_manager", 2);
n = p([
  x("umb-block-catalogue-modal")
], n);
const X = n;
export {
  n as UmbBlockCatalogueModalElement,
  X as default
};
//# sourceMappingURL=block-catalogue-modal.element-B2pvOiFo.js.map
