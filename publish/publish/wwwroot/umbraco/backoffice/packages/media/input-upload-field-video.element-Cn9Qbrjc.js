import { html as u, css as a, property as n, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var h = Object.defineProperty, c = Object.getOwnPropertyDescriptor, d = (l, t, p, r) => {
  for (var e = r > 1 ? void 0 : r ? c(t, p) : t, s = l.length - 1, i; s >= 0; s--)
    (i = l[s]) && (e = (r ? i(t, p, e) : i(e)) || e);
  return r && e && h(t, p, e), e;
};
let o = class extends f {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    return this.path ? u`
			<video controls>
				<source src=${this.path} />
				Video format not supported
			</video>
		` : u`<uui-loader></uui-loader>`;
  }
};
o.styles = [
  a`
			:host {
				display: flex;
			}
			video {
				width: 100%;
				max-width: 800px;
			}
		`
];
d([
  n({ type: String })
], o.prototype, "path", 2);
o = d([
  m("umb-input-upload-field-video")
], o);
export {
  o as default
};
//# sourceMappingURL=input-upload-field-video.element-Cn9Qbrjc.js.map
