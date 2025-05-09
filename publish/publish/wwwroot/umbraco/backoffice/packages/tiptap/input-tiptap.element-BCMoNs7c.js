import { css as k, state as y, property as l, customElement as A, map as m, nothing as R, html as h, when as V, unsafeCSS as D } from "@umbraco-cms/backoffice/external/lit";
import { UmbExtensionsElementAndApiInitializer as L, loadManifestApi as G } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as P } from "@umbraco-cms/backoffice/extension-registry";
import { Editor as N } from "@umbraco-cms/backoffice/external/tiptap";
import { UmbChangeEvent as F } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as H } from "@umbraco-cms/backoffice/validation";
import "./cascading-menu-popover.element-DZ_A3J1M.js";
var K = Object.defineProperty, X = Object.getOwnPropertyDescriptor, M = (t) => {
  throw TypeError(t);
}, f = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? X(e, r) : e, s = t.length - 1, u; s >= 0; s--)
    (u = t[s]) && (i = (o ? u(e, r, i) : u(i)) || i);
  return o && i && K(e, r, i), i;
}, C = (t, e, r) => e.has(t) || M("Cannot " + r), v = (t, e, r) => (C(t, e, "read from private field"), e.get(t)), x = (t, e, r) => e.has(t) ? M("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), _ = (t, e, r, o) => (C(t, e, "write to private field"), e.set(t, r), r), J = (t, e, r) => (C(t, e, "access private method"), r), g, p, E, U;
let d = class extends z {
  constructor() {
    super(...arguments), x(this, E), x(this, g, !1), x(this, p), this.readonly = !1, this.toolbar = [[[]]];
  }
  connectedCallback() {
    super.connectedCallback(), _(this, g, !0), J(this, E, U).call(this);
  }
  disconnectedCallback() {
    _(this, g, !1), v(this, p)?.destroy(), _(this, p, void 0), super.disconnectedCallback();
  }
  render() {
    return h`
			${m(
      this.toolbar,
      (t) => h`
					<div class="row">
						${m(
        t,
        (e) => h`<div class="group">${m(e, (r) => this._lookup?.get(r) ?? R)}</div>`
      )}
					</div>
				`
    )}
		`;
  }
};
g = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakSet();
U = function() {
  v(this, g) && (v(this, p)?.destroy(), _(this, p, new L(
    this,
    P,
    "tiptapToolbarExtension",
    [],
    (t) => this.toolbar.flat(2).includes(t.alias),
    (t) => {
      this._lookup = new Map(t.map((e) => [e.alias, e.component]));
    },
    void 0,
    void 0,
    () => import("./default-tiptap-toolbar-element.api-D-CoaOsg.js")
  )), v(this, p).apiProperties = { configuration: this.configuration }, v(this, p).elementProperties = { editor: this.editor, configuration: this.configuration });
};
d.styles = k`
		:host([readonly]) {
			pointer-events: none;
			background-color: var(--uui-color-surface-alt);
		}

		:host {
			border-radius: var(--uui-border-radius);
			border: 1px solid var(--uui-color-border);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			border-top-color: var(--umb-tiptap-edge-border-color, var(--uui-color-border));
			border-left-color: var(--umb-tiptap-edge-border-color, var(--uui-color-border));
			border-right-color: var(--umb-tiptap-edge-border-color, var(--uui-color-border));

			background-color: var(--uui-color-surface);
			color: var(--color-text);
			font-size: var(--uui-type-default-size);

			display: flex;
			flex-direction: column;

			position: sticky;
			top: -25px;
			left: 0;
			right: 0;
			padding: var(--uui-size-3);
			z-index: 9999999;

			box-shadow:
				0 2px 2px -2px rgba(34, 47, 62, 0.1),
				0 8px 8px -4px rgba(34, 47, 62, 0.07);
		}

		.row {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.group {
				display: inline-flex;
				flex-wrap: wrap;
				align-items: stretch;

				&:not(:last-child)::after {
					content: '';
					background-color: var(--uui-color-border);
					width: 1px;
					place-self: center;
					height: 22px;
					margin: 0 var(--uui-size-3);
				}
			}
		}
	`;
f([
  y()
], d.prototype, "_lookup", 2);
f([
  l({ type: Boolean, reflect: !0 })
], d.prototype, "readonly", 2);
f([
  l({ attribute: !1 })
], d.prototype, "editor", 2);
f([
  l({ attribute: !1 })
], d.prototype, "configuration", 2);
f([
  l({ attribute: !1 })
], d.prototype, "toolbar", 2);
d = f([
  A("umb-tiptap-toolbar")
], d);
var Q = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, O = (t) => {
  throw TypeError(t);
}, n = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Y(e, r) : e, s = t.length - 1, u; s >= 0; s--)
    (u = t[s]) && (i = (o ? u(e, r, i) : u(i)) || i);
  return o && i && Q(e, r, i), i;
}, T = (t, e, r) => e.has(t) || O("Cannot " + r), $ = (t, e, r) => (T(t, e, "read from private field"), r ? r.call(t) : e.get(t)), S = (t, e, r) => e.has(t) ? O("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), q = (t, e, r, o) => (T(t, e, "write to private field"), e.set(t, r), r), w = (t, e, r) => (T(t, e, "access private method"), r), c, b, B, W, I;
const Z = "Umb.Tiptap.RichTextEssentials";
let a = class extends H(z) {
  constructor() {
    super(), S(this, b), S(this, c, ""), this.readonly = !1, this._extensions = [], this._styles = [], this._toolbar = [[[]]], this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? "Value is required",
      () => !!this.required && this.isEmpty()
    );
  }
  set value(t) {
    t !== $(this, c) && (q(this, c, t), this._editor && this._editor.commands.setContent(t));
  }
  get value() {
    return $(this, c);
  }
  async firstUpdated() {
    await Promise.all([await w(this, b, B).call(this), await w(this, b, W).call(this)]);
  }
  /**
   * Checks if the editor is empty.
   * @returns {boolean} returns true if the editor contains no markup
   */
  isEmpty() {
    return this._editor?.isEmpty ?? !1;
  }
  render() {
    return h`
			${V(
      !this._editor && !this._extensions?.length,
      () => h`<div id="loader"><uui-loader></uui-loader></div>`,
      () => h`
					${w(this, b, I).call(this)}
					<umb-tiptap-toolbar
						.toolbar=${this._toolbar}
						.editor=${this._editor}
						.configuration=${this.configuration}
						?readonly=${this.readonly}>
					</umb-tiptap-toolbar>
				`
    )}
			<div id="editor"></div>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
B = async function() {
  const t = this.configuration?.getValueByAlias("extensions") ?? [];
  if (!t.includes(Z)) {
    const { api: e } = await import("./rich-text-essentials.tiptap-api-BYwCJvEP.js");
    this._extensions.push(new e(this));
  }
  await new Promise((e) => {
    this.observe(P.byTypeAndAliases("tiptapExtension", t), async (r) => {
      for (const o of r)
        if (o.api) {
          const i = await G(o.api);
          i && this._extensions.push(new i(this));
        }
      e();
    });
  });
};
W = async function() {
  const t = this.shadowRoot?.querySelector("#editor");
  if (!t) return;
  const e = this.configuration?.getValueByAlias("dimensions");
  e?.width && this.setAttribute("style", `max-width: ${e.width}px;`), e?.height && t.setAttribute("style", `height: ${e.height}px;`), this._toolbar = this.configuration?.getValueByAlias("toolbar") ?? [[[]]];
  const r = [];
  this._extensions.forEach((o) => {
    const i = o.getTiptapExtensions({ configuration: this.configuration });
    i?.length && r.push(...i);
    const s = o.getStyles();
    s && this._styles.push(s);
  }), this._editor = new N({
    element: t,
    editable: !this.readonly,
    extensions: r,
    content: $(this, c),
    //enableContentCheck: true,
    onBeforeCreate: ({ editor: o }) => {
      this._extensions.forEach((i) => i.setEditor(o));
    },
    onContentError: ({ error: o }) => {
      console.error("contentError", [o.message, o.cause]);
    },
    onUpdate: ({ editor: o }) => {
      q(this, c, o.getHTML()), this._runValidators(), this.dispatchEvent(new F());
    }
  });
};
I = function() {
  if (this._styles?.length)
    return h`
			<style>
				${this._styles.map((t) => D(t))}
			</style>
		`;
};
a.styles = [
  k`
			:host {
				display: block;
				position: relative;
				z-index: 0;
			}

			:host([readonly]) {
				pointer-events: none;

				#editor {
					background-color: var(--uui-color-surface-alt);
				}
			}

			#loader {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			:host(:not([pristine]):invalid),
			/* polyfill support */
			:host(:not([pristine])[internals-invalid]) {
				--umb-tiptap-edge-border-color: var(--uui-color-danger);
				#editor {
					border-color: var(--uui-color-danger);
				}
			}

			#editor {
				/* Required as overflow is set to auto, so that the scrollbars don't appear. */
				display: flex;
				overflow: auto;
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-border);
				padding: 1rem;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				border-top: 0;
				box-sizing: border-box;
				height: 100%;
				width: 100%;

				.tiptap {
					height: 100%;
					width: 100%;
					outline: none;
					white-space: pre-wrap;
					min-width: 0;

					.is-editor-empty:first-child::before {
						color: var(--uui-color-text);
						opacity: 0.55;
						content: attr(data-placeholder);
						float: left;
						height: 0;
						pointer-events: none;
					}
				}

				/* The following styles are required for the "StarterKit" extension. */
				pre {
					background-color: var(--uui-color-surface-alt);
					padding: var(--uui-size-space-2) var(--uui-size-space-4);
					border-radius: calc(var(--uui-border-radius) * 2);
					overflow-x: auto;
				}

				code:not(pre > code) {
					background-color: var(--uui-color-surface-alt);
					padding: var(--uui-size-space-1) var(--uui-size-space-2);
					border-radius: calc(var(--uui-border-radius) * 2);
				}

				code {
					font-family: 'Roboto Mono', monospace;
					background: none;
					color: inherit;
					font-size: 0.8rem;
					padding: 0;
				}

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					margin-top: 0;
					margin-bottom: 0.5em;
				}

					max-width: 100%;

				li {
					> p {
						margin: 0;
						padding: 0;
					}
				}
			}
		`
];
n([
  l({ type: String })
], a.prototype, "value", 1);
n([
  l({ attribute: !1 })
], a.prototype, "configuration", 2);
n([
  l({ type: Boolean })
], a.prototype, "required", 2);
n([
  l({ type: String })
], a.prototype, "requiredMessage", 2);
n([
  l({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
n([
  y()
], a.prototype, "_editor", 2);
n([
  y()
], a.prototype, "_extensions", 2);
n([
  y()
], a.prototype, "_styles", 2);
n([
  y()
], a.prototype, "_toolbar", 2);
a = n([
  A("umb-input-tiptap")
], a);
export {
  a as U
};
//# sourceMappingURL=input-tiptap.element-BCMoNs7c.js.map
