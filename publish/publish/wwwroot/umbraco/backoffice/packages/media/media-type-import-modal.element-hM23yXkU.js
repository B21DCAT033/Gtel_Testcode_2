import { UmbMediaTypeImportRepository as z } from "./media-type-import.repository-CMsl0c45.js";
import { html as h, when as N, css as I, state as U, query as k, customElement as B } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as q } from "@umbraco-cms/backoffice/modal";
var F = Object.defineProperty, O = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, f = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? O(t, o) : t, n = e.length - 1, u; n >= 0; n--)
    (u = e[n]) && (r = (i ? u(t, o, r) : u(r)) || r);
  return i && r && F(t, o, r), r;
}, y = (e, t, o) => t.has(e) || g("Cannot " + o), p = (e, t, o) => (y(e, t, "read from private field"), o ? o.call(e) : t.get(e)), m = (e, t, o) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), _ = (e, t, o, i) => (y(e, t, "write to private field"), t.set(e, o), o), s = (e, t, o) => (y(e, t, "access private method"), o), v, l, d, a, T, w, C, M, b, x, $;
let c = class extends q {
  constructor() {
    super(), m(this, a), m(this, v, new z(this)), m(this, l), m(this, d), this._fileContent = [], _(this, d, new FileReader()), p(this, d).onload = (e) => {
      if (typeof e.target?.result == "string") {
        const t = e.target.result;
        s(this, a, C).call(this, t);
      } else
        s(this, a, b).call(this);
    };
  }
  render() {
    return h` <umb-body-layout headline=${this.localize.term("general_import")}>
			<uui-box> ${s(this, a, $).call(this)} </uui-box>
			<uui-button
				slot="actions"
				type="button"
				label=${this.localize.term("general_cancel")}
				@click=${this._rejectModal}></uui-button>
			<uui-button
				slot="actions"
				type="button"
				look="primary"
				?disabled=${!p(this, l)}
				label=${this.localize.term("actions_import")}
				@click=${s(this, a, w)}></uui-button>
		</umb-body-layout>`;
  }
};
v = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
T = function() {
  const e = this.dropzone?.getItems()[0];
  e?.temporaryFile && (_(this, l, e.temporaryFile.temporaryUnique), p(this, d).readAsText(e.temporaryFile.file));
};
w = async function() {
  if (!p(this, l)) return;
  const { error: e } = await p(this, v).requestImport(p(this, l));
  e || this._submitModal();
};
C = function(e) {
  const i = new DOMParser().parseFromString(e, "text/xml").childNodes, r = [];
  i.forEach((n) => {
    n.nodeType === Node.ELEMENT_NODE && n.nodeName === "MediaType" && r.push(n);
  }), this._fileContent = s(this, a, M).call(this, r);
};
M = function(e) {
  const t = [];
  return e.forEach((o) => {
    const i = o.getElementsByTagName("Info")[0], r = i.getElementsByTagName("Key")[0].textContent ?? "", n = i.getElementsByTagName("Name")[0].textContent ?? "", u = i.getElementsByTagName("Alias")[0].textContent ?? "", E = i.getElementsByTagName("Icon")[0].textContent ?? "";
    t.push({ unique: r, name: n, alias: u, icon: E });
  }), t;
};
b = function() {
  this._fileContent = [], _(this, l, void 0);
};
x = async function() {
  this.dropzone?.browse();
};
$ = function() {
  return h`
			${N(
    this._fileContent.length,
    () => h`<uui-ref-node name=${this._fileContent[0].name} alias=${this._fileContent[0].alias} readonly standalone>
						<umb-icon slot="icon" name=${this._fileContent[0].icon}></umb-icon>
						<uui-button
							slot="actions"
							@click=${s(this, a, b)}
							label=${this.localize.term("general_remove")}></uui-button>
					</uui-ref-node>`,
    () => (
      /**TODO Add localizations */
      h`<div id="wrapper">
						Drag and drop your file here
						<uui-button look="primary" label="or click here to choose a file" @click=${s(this, a, x)}></uui-button>
						<umb-dropzone
							id="dropzone"
							accept=".udt"
							@complete=${s(this, a, T)}
							createAsTemporary></umb-dropzone>
					</div>`
    )
  )}
		`;
};
c.styles = [
  P,
  I`
			#wrapper {
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				position: relative;
				gap: var(--uui-size-space-3);
				border: 2px dashed var(--uui-color-divider-standalone);
				background-color: var(--uui-color-surface-alt);
				padding: var(--uui-size-space-6);
			}

			#import {
				margin-top: var(--uui-size-space-6);
			}
		`
];
f([
  U()
], c.prototype, "_fileContent", 2);
f([
  k("#dropzone")
], c.prototype, "dropzone", 2);
c = f([
  B("umb-media-type-import-modal")
], c);
const A = c;
export {
  c as UmbMediaTypeImportModalLayout,
  A as default
};
//# sourceMappingURL=media-type-import-modal.element-hM23yXkU.js.map
