import { html as o, when as _, css as b, property as v, state as c, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as w } from "@umbraco-cms/backoffice/lit-element";
import { UMB_APP_CONTEXT as g } from "@umbraco-cms/backoffice/app";
var $ = Object.defineProperty, C = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, s = (e, t, i, l) => {
  for (var a = l > 1 ? void 0 : l ? C(t, i) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (a = (l ? d(t, i, a) : d(a)) || a);
  return l && a && $(t, i, a), a;
}, x = (e, t, i) => t.has(e) || m("Cannot " + i), u = (e, t, i) => (x(e, t, "read from private field"), i ? i.call(e) : t.get(e)), f = (e, t, i) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), E = (e, t, i, l) => (x(e, t, "write to private field"), t.set(e, i), i), p, n;
let r = class extends w {
  constructor() {
    super(), f(this, p, `(${this.localize.term("general_loading")}...)`), f(this, n, ""), this.path = "", this.extension = "", this.label = "", this.consumeContext(g, (e) => {
      E(this, n, e.getServerUrl());
    });
  }
  updated(e) {
    super.updated(e), e.has("file") && this.file && (this.extension = this.file.name.split(".").pop() ?? "", this.label = this.file.name || u(this, p)), e.has("path") && !this.file && (this.extension = this.path.split(".").pop() ?? "", this.label = this.path.split("/").pop() ?? u(this, p));
  }
  render() {
    return !this.label && !this.extension ? o`<uui-loader></uui-loader>` : o`
			<div id="main">
				<uui-symbol-file id="file-symbol" .type=${this.extension}></uui-symbol-file>
				${_(
      !this.file && this.path,
      () => o`<a id="label" href="${u(this, n)}${this.path}" target="_blank">${this.label}</a>`,
      () => o`<span id="label">${this.label}</span>`
    )}
			</div>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
r.styles = [
  b`
			#main {
				display: grid;
				grid-template-rows: 150px auto;
				box-sizing: border-box;
				color: var(--uui-color-text);
			}

			#file-symbol {
				aspect-ratio: 1 / 1;
				margin: auto;
				max-width: 100%;
				max-height: 100%;
			}

			#label {
				text-align: center;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: var(--uui-color-text);

				&:is(a) {
					text-decoration: none;
					color: var(--uui-color-interactive);

					&:hover {
						text-decoration: underline;
						color: var(--uui-color-interactive-emphasis);
					}
				}
			}
		`
];
s([
  v()
], r.prototype, "path", 2);
s([
  v({ attribute: !1 })
], r.prototype, "file", 2);
s([
  c()
], r.prototype, "extension", 2);
s([
  c()
], r.prototype, "label", 2);
r = s([
  y("umb-input-upload-field-file")
], r);
export {
  r as default
};
//# sourceMappingURL=input-upload-field-file.element-TIG5HFkQ.js.map
