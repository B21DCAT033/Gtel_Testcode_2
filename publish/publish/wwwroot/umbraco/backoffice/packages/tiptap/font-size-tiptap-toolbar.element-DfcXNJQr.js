import { UmbTiptapToolbarButtonElement as v } from "./tiptap-toolbar-button.element-DMDxUWpq.js";
import { ifDefined as d, html as f, css as h, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import "./cascading-menu-popover.element-DZ_A3J1M.js";
var _ = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, g = (e, t, a, u) => {
  for (var n = u > 1 ? void 0 : u ? _(t, a) : t, r = e.length - 1, p; r >= 0; r--)
    (p = e[r]) && (n = p(n) || n);
  return n;
}, y = (e, t, a) => t.has(e) || c("Cannot " + a), l = (e, t, a) => (y(e, t, "read from private field"), a ? a.call(e) : t.get(e)), m = (e, t, a) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), s, o;
let i = class extends v {
  constructor() {
    super(...arguments), m(this, s, [8, 10, 12, 14, 16, 18, 24, 36, 48].map((e) => `${e}pt`)), m(this, o, l(this, s).map((e) => ({
      unique: `font-size-${e}`,
      label: e,
      // execute: () => this.editor?.chain().focus().setMark('textStyle', { fontSize }).run(),
      execute: () => this.editor?.chain().focus().setSpanStyle(`font-size: ${e};`).run()
    })));
  }
  render() {
    const e = this.localize.string(this.manifest?.meta.label);
    return f`
			<uui-button compact look="secondary" label=${d(e)} popovertarget="font-size">
				<span>${e}</span>
				<uui-symbol-expand slot="extra" open></uui-symbol-expand>
			</uui-button>
			<umb-cascading-menu-popover id="font-size" placement="bottom-start" .items=${l(this, o)}>
			</umb-cascading-menu-popover>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
i.styles = [
  h`
			:host {
				--uui-button-font-weight: normal;
				--uui-menu-item-flat-structure: 1;

				margin-inline-start: var(--uui-size-space-1);
			}

			uui-button > uui-symbol-expand {
				margin-left: var(--uui-size-space-4);
			}
		`
];
i = g([
  b("umb-tiptap-font-size-toolbar-element")
], i);
export {
  i as UmbTiptapToolbarFontSizeToolbarElement,
  i as element
};
//# sourceMappingURL=font-size-tiptap-toolbar.element-DfcXNJQr.js.map
