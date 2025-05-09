import { html as l, css as d, property as n, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, c = Object.getOwnPropertyDescriptor, a = (u, e, p, r) => {
  for (var t = r > 1 ? void 0 : r ? c(e, p) : e, s = u.length - 1, i; s >= 0; s--)
    (i = u[s]) && (t = (r ? i(e, p, t) : i(t)) || t);
  return r && t && f(e, p, t), t;
};
let o = class extends h {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    return this.path ? l`<audio controls src=${this.path}></audio>` : l`<uui-loader></uui-loader>`;
  }
};
o.styles = [
  d`
			:host {
				display: flex;
				width: 999px;
				max-width: 100%;
			}
			audio {
				width: 100%;
			}
		`
];
a([
  n({ type: String })
], o.prototype, "path", 2);
o = a([
  m("umb-input-upload-field-audio")
], o);
export {
  o as default
};
//# sourceMappingURL=input-upload-field-audio.element-QqbCdMml.js.map
