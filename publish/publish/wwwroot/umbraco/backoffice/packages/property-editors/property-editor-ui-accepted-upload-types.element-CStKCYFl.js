import { UmbPropertyEditorUIMultipleTextStringElement as y } from "./property-editor-ui-multiple-text-string.element-B4aSqVAF.js";
import { html as w, css as x, state as u, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbTemporaryFileConfigRepository as U } from "@umbraco-cms/backoffice/temporary-file";
var F = Object.defineProperty, f = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, o = (e, a, t, i) => {
  for (var s = i > 1 ? void 0 : i ? f(a, t) : a, d = e.length - 1, n; d >= 0; d--)
    (n = e[d]) && (s = (i ? n(a, t, s) : n(s)) || s);
  return i && s && F(a, t, s), s;
}, v = (e, a, t) => a.has(e) || h("Cannot " + t), c = (e, a, t) => (v(e, a, "read from private field"), t ? t.call(e) : a.get(e)), m = (e, a, t) => a.has(e) ? h("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), b = (e, a, t) => (v(e, a, "access private method"), t), l, p, _;
let r = class extends y {
  constructor() {
    super(...arguments), m(this, p), m(this, l, new U(this)), this._acceptedTypes = [], this._disallowedTypes = [];
  }
  async connectedCallback() {
    super.connectedCallback(), await c(this, l).initialized, this.observe(c(this, l).all(), (e) => {
      e && (b(this, p, _).call(this, e), this._acceptedTypes = e.allowedUploadedFileExtensions, this._disallowedTypes = e.disallowedUploadedFilesExtensions, this._maxFileSize = e.maxFileSize ? e.maxFileSize * 1024 : null);
    });
  }
  render() {
    return w`${super.render()}`;
  }
};
l = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  const a = this.shadowRoot?.querySelector("umb-input-multiple-text-string");
  a?.addValidator(
    "badInput",
    () => {
      let t = this.localize.term("validation_invalidExtensions");
      return e.allowedUploadedFileExtensions.length && (t += `<br>${this.localize.term("validation_allowedExtensions")} ${e.allowedUploadedFileExtensions.join(", ")}`), e.disallowedUploadedFilesExtensions.length && (t += `<br>${this.localize.term("validation_disallowedExtensions")} ${e.disallowedUploadedFilesExtensions.join(", ")}`), t;
    },
    () => {
      const t = a?.items;
      return t ? !!(e.allowedUploadedFileExtensions.length && !e.allowedUploadedFileExtensions.some((i) => t.includes(i)) || e.disallowedUploadedFilesExtensions.some((i) => t.includes(i))) : !1;
    }
  );
};
r.styles = [
  x`
			#notice {
				--uui-box-default-padding: var(--uui-size-space-4);
				--uui-box-header-padding: var(--uui-size-space-4);
				--uui-color-divider-standalone: var(--uui-color-warning-standalone);

				border: 1px solid var(--uui-color-divider-standalone);
				background-color: var(--uui-color-warning);
				color: var(--uui-color-warning-contrast);
				margin-bottom: var(--uui-size-layout-1);

				p {
					margin: 0.5rem 0;
				}
			}
		`
];
o([
  u()
], r.prototype, "_acceptedTypes", 2);
o([
  u()
], r.prototype, "_disallowedTypes", 2);
o([
  u()
], r.prototype, "_maxFileSize", 2);
r = o([
  E("umb-property-editor-ui-accepted-upload-types")
], r);
const P = r;
export {
  r as UmbPropertyEditorUIAcceptedUploadTypesElement,
  P as default
};
//# sourceMappingURL=property-editor-ui-accepted-upload-types.element-CStKCYFl.js.map
