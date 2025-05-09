import { UmbTiptapToolbarButtonElement as v } from "./tiptap-toolbar-button.element-DMDxUWpq.js";
import { ifDefined as d, html as y, css as b, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import "./cascading-menu-popover.element-DZ_A3J1M.js";
var g = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, E = (e, t, a, n) => {
  for (var o = n > 1 ? void 0 : n ? g(t, a) : t, r = e.length - 1, c; r >= 0; r--)
    (c = e[r]) && (o = c(o) || o);
  return o;
}, h = (e, t, a) => t.has(e) || f("Cannot " + a), T = (e, t, a) => (h(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), l = (e, t, a) => (h(e, t, "access private method"), a), u, s, i;
let m = class extends v {
  constructor() {
    super(...arguments), p(this, s), p(this, u, [
      {
        unique: "font-family-sans-serif",
        label: "Sans serif",
        element: l(this, s, i).call(this, "sans-serif", "Sans serif")
      },
      {
        unique: "font-family-serif",
        label: "Serif",
        element: l(this, s, i).call(this, "serif", "Serif")
      },
      {
        unique: "font-family-monospace",
        label: "Monospace",
        element: l(this, s, i).call(this, "monospace", "Monospace")
      },
      {
        unique: "font-family-cursive",
        label: "Cursive",
        element: l(this, s, i).call(this, "cursive", "Cursive")
      },
      {
        unique: "font-family-fantasy",
        label: "Fantasy",
        element: l(this, s, i).call(this, "fantasy", "Fantasy")
      }
    ]);
  }
  render() {
    const e = this.localize.string(this.manifest?.meta.label);
    return y`
			<uui-button compact look="secondary" label=${d(e)} popovertarget="font-family">
				<span>${e}</span>
				<uui-symbol-expand slot="extra" open></uui-symbol-expand>
			</uui-button>
			<umb-cascading-menu-popover id="font-family" placement="bottom-start" .items=${T(this, u)}>
			</umb-cascading-menu-popover>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
i = function(e, t) {
  const a = document.createElement("uui-menu-item");
  a.addEventListener("click", () => {
    this.editor?.chain().focus().setSpanStyle(`font-family: ${e};`).run();
  });
  const n = document.createElement("span");
  return n.slot = "label", n.textContent = t, n.style.fontFamily = e, a.appendChild(n), a;
};
m.styles = [
  b`
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
m = E([
  _("umb-tiptap-font-family-toolbar-element")
], m);
export {
  m as UmbTiptapToolbarFontFamilyToolbarElement,
  m as element
};
//# sourceMappingURL=font-family-tiptap-toolbar.element-CnZqR-9N.js.map
