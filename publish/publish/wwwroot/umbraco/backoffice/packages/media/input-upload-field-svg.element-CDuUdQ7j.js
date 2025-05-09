import { html as h, css as n, property as u, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as m } from "@umbraco-cms/backoffice/lit-element";
var c = Object.defineProperty, d = Object.getOwnPropertyDescriptor, l = (s, e, a, r) => {
  for (var t = r > 1 ? void 0 : r ? d(e, a) : e, o = s.length - 1, p; o >= 0; o--)
    (p = s[o]) && (t = (r ? p(e, a, t) : p(t)) || t);
  return r && t && c(e, a, t), t;
};
let i = class extends m {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    return this.path ? h`<img src=${this.path} alt="svg" />` : h`<uui-loader></uui-loader>`;
  }
};
i.styles = [
  n`
			:host {
				display: flex;
				background-color: #fff;
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-repeat: repeat;
				background-size: 10px 10px;
				height: 100%;
				min-height: 240px;
				position: relative;
				width: fit-content;
				max-height: 240px;
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
  u({ type: String })
], i.prototype, "path", 2);
i = l([
  g("umb-input-upload-field-svg")
], i);
export {
  i as default
};
//# sourceMappingURL=input-upload-field-svg.element-CDuUdQ7j.js.map
