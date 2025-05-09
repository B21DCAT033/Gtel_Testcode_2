import { html as h, css as m, property as n, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var c = Object.defineProperty, d = Object.getOwnPropertyDescriptor, l = (s, e, o, r) => {
  for (var t = r > 1 ? void 0 : r ? d(e, o) : e, p = s.length - 1, a; p >= 0; p--)
    (a = s[p]) && (t = (r ? a(e, o, t) : a(t)) || t);
  return r && t && c(e, o, t), t;
};
let i = class extends f {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    return this.path ? h`<img src=${this.path} alt="" />` : h`<uui-loader></uui-loader>`;
  }
};
i.styles = [
  m`
			:host {
				display: flex;
				height: 100%;
				position: relative;
				width: fit-content;
				max-height: 400px;
			}

			img {
				max-width: 100%;
				max-height: 100%;
				object-fit: contain;
				width: auto;
				height: auto;
			}
		`
];
l([
  n({ type: String })
], i.prototype, "path", 2);
i = l([
  u("umb-input-upload-field-image")
], i);
export {
  i as default
};
//# sourceMappingURL=input-upload-field-image.element-KylDHzzd.js.map
