import { UmbDocumentTypeImportRepository as M } from "./document-type-import.repository-BUGR_PqL.js";
import { html as h, when as I, css as N, state as D, query as U, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as B } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as P } from "@umbraco-cms/backoffice/modal";
var q = Object.defineProperty, F = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, f = (e, t, o, n) => {
  for (var i = n > 1 ? void 0 : n ? F(t, o) : t, a = e.length - 1, p; a >= 0; a--)
    (p = e[a]) && (i = (n ? p(t, o, i) : p(i)) || i);
  return n && i && q(t, o, i), i;
}, y = (e, t, o) => t.has(e) || g("Cannot " + o), u = (e, t, o) => (y(e, t, "read from private field"), o ? o.call(e) : t.get(e)), d = (e, t, o) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), _ = (e, t, o, n) => (y(e, t, "write to private field"), t.set(e, o), o), s = (e, t, o) => (y(e, t, "access private method"), o), v, l, m, r, T, w, C, x, b, $, E;
let c = class extends P {
  constructor() {
    super(), d(this, r), d(this, v, new M(this)), d(this, l), d(this, m), this._fileContent = [], _(this, m, new FileReader()), u(this, m).onload = (e) => {
      if (typeof e.target?.result == "string") {
        const t = e.target.result;
        s(this, r, C).call(this, t);
      } else
        s(this, r, b).call(this);
    };
  }
  render() {
    return h` <umb-body-layout headline=${this.localize.term("general_import")}>
			<uui-box> ${s(this, r, E).call(this)} </uui-box>
			<uui-button
				slot="actions"
				type="button"
				label=${this.localize.term("general_cancel")}
				@click=${this._rejectModal}></uui-button>
			<uui-button
				slot="actions"
				type="button"
				look="primary"
				?disabled=${!u(this, l)}
				label=${this.localize.term("actions_importdocumenttype")}
				@click=${s(this, r, w)}></uui-button>
		</umb-body-layout>`;
  }
};
v = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
T = function() {
  const e = this.dropzone?.getItems()[0];
  e?.temporaryFile && (_(this, l, e.temporaryFile.temporaryUnique), u(this, m).readAsText(e.temporaryFile.file));
};
w = async function() {
  if (!u(this, l)) return;
  const { error: e } = await u(this, v).requestImport(u(this, l));
  e || this._submitModal();
};
C = function(e) {
  const n = new DOMParser().parseFromString(e, "text/xml").childNodes, i = [];
  n.forEach((a) => {
    a.nodeType === Node.ELEMENT_NODE && a.nodeName === "DocumentType" && i.push(a);
  }), this._fileContent = s(this, r, x).call(this, i);
};
x = function(e) {
  const t = [];
  return e.forEach((o) => {
    const n = o.getElementsByTagName("Info")[0], i = n.getElementsByTagName("Key")[0].textContent ?? "", a = n.getElementsByTagName("Name")[0].textContent ?? "", p = n.getElementsByTagName("Alias")[0].textContent ?? "", z = n.getElementsByTagName("Icon")[0].textContent ?? "";
    t.push({ unique: i, name: a, alias: p, icon: z });
  }), t;
};
b = function() {
  this._fileContent = [], _(this, l, void 0);
};
$ = async function() {
  this.dropzone?.browse();
};
E = function() {
  return h`
			${I(
    this._fileContent.length,
    () => h`<uui-ref-node-document-type
						name=${this._fileContent[0].name}
						alias=${this._fileContent[0].alias}
						readonly
						standalone>
						<umb-icon slot="icon" name=${this._fileContent[0].icon}></umb-icon>
						<uui-button
							slot="actions"
							@click=${s(this, r, b)}
							label=${this.localize.term("general_remove")}></uui-button>
					</uui-ref-node-document-type>`,
    () => (
      /**TODO Add localizations */
      h`<div id="wrapper">
						Drag and drop your file here
						<uui-button look="primary" label="or click here to choose a file" @click=${s(this, r, $)}></uui-button>
						<umb-dropzone
							id="dropzone"
							accept=".udt"
							@complete=${s(this, r, T)}
							createAsTemporary></umb-dropzone>
					</div>`
    )
  )}
		`;
};
c.styles = [
  B,
  N`
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
  D()
], c.prototype, "_fileContent", 2);
f([
  U("#dropzone")
], c.prototype, "dropzone", 2);
c = f([
  k("umb-document-type-import-modal")
], c);
const A = c;
export {
  c as UmbDocumentTypeImportModalLayout,
  A as default
};
//# sourceMappingURL=document-type-import-modal.element-B3ELBgZY.js.map
