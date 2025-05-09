import { UmbTiptapToolbarButtonElement as r } from "./tiptap-toolbar-button.element-DMDxUWpq.js";
import { ifDefined as b, when as u, html as i, customElement as p } from "@umbraco-cms/backoffice/external/lit";
var c = Object.getOwnPropertyDescriptor, h = (a, l, o, s) => {
  for (var t = s > 1 ? void 0 : s ? c(l, o) : l, e = a.length - 1, n; e >= 0; e--)
    (n = a[e]) && (t = n(t) || t);
  return t;
};
let m = class extends r {
  render() {
    return i`
			<uui-button
				compact
				look="default"
				label=${b(this.manifest?.meta.label)}
				title=${this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : ""}
				?disabled=${!this.isActive}
				@click=${() => this.api && this.editor ? this.api.execute(this.editor) : null}>
				${u(
      this.manifest?.meta.icon,
      () => i`<umb-icon name=${this.manifest.meta.icon}></umb-icon>`,
      () => i`<span>${this.manifest?.meta.label}</span>`
    )}
			</uui-button>
		`;
  }
};
m = h([
  p("umb-tiptap-toolbar-button-disabled")
], m);
export {
  m as UmbTiptapToolbarButtonDisabledElement,
  m as element
};
//# sourceMappingURL=tiptap-toolbar-button-disabled.element-Bu-BfuZT.js.map
