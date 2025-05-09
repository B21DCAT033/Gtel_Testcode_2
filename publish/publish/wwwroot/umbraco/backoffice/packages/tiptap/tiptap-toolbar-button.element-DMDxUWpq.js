import { ifDefined as f, when as m, html as h, state as u, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
var _ = Object.defineProperty, C = Object.getOwnPropertyDescriptor, p = (t) => {
  throw TypeError(t);
}, d = (t, e, i, o) => {
  for (var a = o > 1 ? void 0 : o ? C(e, i) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (a = (o ? l(e, i, a) : l(a)) || a);
  return o && a && _(e, i, a), a;
}, $ = (t, e, i) => e.has(t) || p("Cannot " + i), r = (t, e, i) => ($(t, e, "read from private field"), i ? i.call(t) : e.get(t)), A = (t, e, i) => e.has(t) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), s;
let c = class extends b {
  constructor() {
    super(...arguments), this.isActive = !1, A(this, s, () => {
      this.api && this.editor && this.manifest && (this.isActive = this.api.isActive(this.editor));
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.editor && (this.editor.on("selectionUpdate", r(this, s)), this.editor.on("update", r(this, s)));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.editor && (this.editor.off("selectionUpdate", r(this, s)), this.editor.off("update", r(this, s)));
  }
  render() {
    return h`
			<uui-button
				compact
				look=${this.isActive ? "outline" : "default"}
				label=${f(this.manifest?.meta.label)}
				title=${this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : ""}
				?disabled=${this.api && this.editor && this.api.isDisabled(this.editor)}
				@click=${() => this.api && this.editor ? this.api.execute(this.editor) : null}>
				${m(
      this.manifest?.meta.icon,
      (t) => h`<umb-icon name=${t}></umb-icon>`,
      () => h`<span>${this.manifest?.meta.label}</span>`
    )}
			</uui-button>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
d([
  u()
], c.prototype, "isActive", 2);
c = d([
  v("umb-tiptap-toolbar-button")
], c);
export {
  c as UmbTiptapToolbarButtonElement,
  c as element
};
//# sourceMappingURL=tiptap-toolbar-button.element-DMDxUWpq.js.map
