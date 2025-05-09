import { UmbTiptapToolbarButtonElement as r } from "./tiptap-toolbar-button.element-DMDxUWpq.js";
import { ifDefined as p, when as l, html as a, css as b, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import "./cascading-menu-popover.element-DZ_A3J1M.js";
var f = Object.getOwnPropertyDescriptor, h = (t, n, u, m) => {
  for (var e = m > 1 ? void 0 : m ? f(n, u) : n, i = t.length - 1, s; i >= 0; i--)
    (s = t[i]) && (e = s(e) || e);
  return e;
};
let o = class extends r {
  render() {
    return a`
			<uui-button
				compact
				look=${this.isActive ? "outline" : "default"}
				label=${p(this.manifest?.meta.label)}
				popovertarget="table-menu-popover"
				title=${this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : ""}>
				${l(
      this.manifest?.meta.icon,
      (t) => a`<umb-icon name=${t}></umb-icon>`,
      () => a`<span>${this.manifest?.meta.label}</span>`
    )}
				<uui-symbol-expand slot="extra" open></uui-symbol-expand>
			</uui-button>
			${l(
      this.api?.getMenu(this.editor),
      (t) => a`
					<umb-cascading-menu-popover id="table-menu-popover" placement="bottom-start" .items=${t}>
					</umb-cascading-menu-popover>
				`
    )}
		`;
  }
};
o.styles = [
  b`
			:host {
				--uui-menu-item-flat-structure: 1;
			}

			uui-button > uui-symbol-expand {
				margin-left: var(--uui-size-space-1);
			}
		`
];
o = h([
  c("umb-tiptap-toolbar-table-button")
], o);
export {
  o as UmbTiptapToolbarTableButtonElement,
  o as element
};
//# sourceMappingURL=table-tiptap-toolbar-button.element-Oa_VwI-N.js.map
