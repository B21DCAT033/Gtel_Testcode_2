import { ifDefined as c, html as p, css as h, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import "./cascading-menu-popover.element-DZ_A3J1M.js";
var g = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, b = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? g(t, a) : t, l = e.length - 1, r; l >= 0; l--)
    (r = e[l]) && (i = r(i) || i);
  return i;
}, v = (e, t, a) => t.has(e) || u("Cannot " + a), f = (e, t, a) => (v(e, t, "read from private field"), a ? a.call(e) : t.get(e)), y = (e, t, a) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), n;
let s = class extends d {
  constructor() {
    super(...arguments), y(this, n, [
      {
        unique: "headers",
        label: "Headers",
        items: [
          {
            unique: "h2",
            label: "Page heading",
            execute: () => this.editor?.chain().focus().toggleHeading({ level: 2 }).run()
          },
          {
            unique: "h3",
            label: "Section heading",
            execute: () => this.editor?.chain().focus().toggleHeading({ level: 3 }).run()
          },
          {
            unique: "h4",
            label: "Paragraph heading",
            execute: () => this.editor?.chain().focus().toggleHeading({ level: 4 }).run()
          }
        ]
      },
      {
        unique: "blocks",
        label: "Blocks",
        items: [
          {
            unique: "p",
            label: "Paragraph",
            execute: () => this.editor?.chain().focus().setParagraph().run()
          }
        ]
      },
      {
        unique: "containers",
        label: "Containers",
        items: [
          { unique: "blockquote", label: "Quote", execute: () => this.editor?.chain().focus().toggleBlockquote().run() },
          { unique: "code", label: "Code", execute: () => this.editor?.chain().focus().toggleCodeBlock().run() }
        ]
      }
    ]);
  }
  render() {
    return p`
			<uui-button
				compact
				look="secondary"
				label=${c(this.manifest?.meta.label)}
				popovertarget="style-select"
				title=${this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : ""}>
				<span>Style select</span>
				<uui-symbol-expand slot="extra" open></uui-symbol-expand>
			</uui-button>
			<umb-cascading-menu-popover id="style-select" placement="bottom-start" .items=${f(this, n)}>
			</umb-cascading-menu-popover>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
s.styles = [
  h`
			:host {
				--uui-button-font-weight: normal;

				margin-inline-start: var(--uui-size-space-1);
			}

			uui-button > uui-symbol-expand {
				margin-left: var(--uui-size-space-4);
			}
		`
];
s = b([
  m("umb-tiptap-style-select-toolbar-element")
], s);
export {
  s as UmbTiptapToolbarStyleSelectToolbarElement,
  s as element
};
//# sourceMappingURL=style-select-tiptap-toolbar.element-Gj33Q-HH.js.map
