import { css as u, property as c, customElement as b, nothing as p, html as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbContextToken as l } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as E } from "@umbraco-cms/backoffice/modal";
var O = Object.defineProperty, T = Object.getOwnPropertyDescriptor, m = (i, o, s, e) => {
  for (var t = e > 1 ? void 0 : e ? T(o, s) : o, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (t = (e ? a(o, s, t) : a(t)) || t);
  return e && t && O(o, s, t), t;
};
let n = class extends y {
  render() {
    return this.contentTypeName ? _`<uui-button look="secondary"
					><uui-icon name="icon-add"></uui-icon>
					<umb-localize key="blockEditor_createThisFor" .args=${[this.contentTypeName]}></umb-localize
				></uui-button>` : p;
  }
};
n.styles = [
  u`
			:host {
				position: absolute;
				inset: 0;
			}

			uui-button {
				position: absolute;
				inset: 0;
				opacity: 0.8;
			}

			:host:hover uui-button {
				opacity: 1;
			}
		`
];
m([
  c({ attribute: !1 })
], n.prototype, "contentTypeName", 2);
n = m([
  b("umb-block-overlay-expose-button")
], n);
const h = new l("UmbBlockEntriesContext"), v = new l("UmbBlockManagerContext"), d = new E(
  "Umb.Modal.BlockCatalogue",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
export {
  h as U,
  v as a,
  n as b,
  d as c
};
//# sourceMappingURL=block-catalogue-modal.token-Fmisqeoi.js.map
