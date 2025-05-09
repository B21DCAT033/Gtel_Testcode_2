import { UmbId as E } from "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "./paths-DZopmHn1.js";
import "@umbraco-cms/backoffice/repository";
import { UmbDictionaryImportRepository as N } from "./dictionary-import.repository-C5zmqQoX.js";
import { when as P, html as s, css as T, state as v, query as F, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as R } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as S } from "@umbraco-cms/backoffice/modal";
import { UmbTemporaryFileRepository as W } from "@umbraco-cms/backoffice/temporary-file";
var A = Object.defineProperty, L = Object.getOwnPropertyDescriptor, I = (t) => {
  throw TypeError(t);
}, u = (t, e, i, r) => {
  for (var l = r > 1 ? void 0 : r ? L(e, i) : e, h = t.length - 1, f; h >= 0; h--)
    (f = t[h]) && (l = (r ? f(e, i, l) : f(l)) || l);
  return r && l && A(e, i, l), l;
}, b = (t, e, i) => e.has(t) || I("Cannot " + i), m = (t, e, i) => (b(t, e, "read from private field"), i ? i.call(t) : e.get(t)), c = (t, e, i) => e.has(t) ? I("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), U = (t, e, i, r) => (b(t, e, "write to private field"), e.set(t, i), i), a = (t, e, i) => (b(t, e, "access private method"), i), p, d, w, g, o, $, D, _, q, k, z, y, x, C, M;
let n = class extends S {
  constructor() {
    super(), c(this, o), this._selectionConfiguration = {
      multiple: !1,
      selectable: !0,
      selection: []
    }, this._parentUnique = null, this._temporaryFileId = "", c(this, p), c(this, d, []), c(this, w, new N(this)), c(this, g, new W(this)), U(this, p, new FileReader()), m(this, p).onload = (t) => {
      if (typeof t.target?.result == "string") {
        const e = t.target.result;
        a(this, o, D).call(this, e);
      }
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._parentUnique = this.data?.unique ?? null, this._selectionConfiguration.selection = this._parentUnique ? [this._parentUnique] : [];
  }
  render() {
    return s` <umb-body-layout headline=${this.localize.term("general_import")}>
			<uui-box>
				${P(
      this._temporaryFileId,
      () => a(this, o, x).call(this),
      () => a(this, o, M).call(this)
    )}
			</uui-box>
			<uui-button
				slot="actions"
				type="button"
				label=${this.localize.term("general_cancel")}
				@click=${this._rejectModal}></uui-button>
		</umb-body-layout>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
$ = async function() {
  const { error: t } = await m(this, w).requestImport(this._temporaryFileId, this._parentUnique);
  t || this._submitModal();
};
D = function(t) {
  const r = new DOMParser().parseFromString(t, "text/xml").childNodes;
  U(this, d, a(this, o, _).call(this, r)), this.requestUpdate();
};
_ = function(t) {
  const e = [], i = [];
  return t.forEach((r) => {
    r.nodeType === Node.ELEMENT_NODE && r.nodeName === "DictionaryItem" && i.push(r);
  }), i.forEach((r) => {
    e.push({
      name: r.getAttribute("Name") ?? "",
      id: r.getAttribute("Key") ?? "",
      children: a(this, o, _).call(this, r.childNodes) ?? void 0
    });
  }), e;
};
q = async function(t) {
  t.preventDefault();
  const i = new FormData(this._form).get("file");
  if (!i) throw new Error("File is missing");
  m(this, p).readAsText(i), this._temporaryFileId = E.new(), m(this, g).upload(this._temporaryFileId, i);
};
k = async function() {
  requestAnimationFrame(() => {
    this._form.requestSubmit();
  });
};
z = function() {
  this._temporaryFileId = "";
};
y = function(t) {
  return s`${t.map((e) => s`${e.name}
				<div>${a(this, o, y).call(this, e.children)}</div>`)}`;
};
x = function() {
  return s`
			<div id="wrapper">
				<div>
					<strong><umb-localize key="visuallyHiddenTexts_dictionaryItems">Dictionary items</umb-localize>:</strong>
					<div id="item-list">${a(this, o, y).call(this, m(this, d))}</div>
				</div>

				${a(this, o, C).call(this)}
			</div>
		`;
};
C = function() {
  return s`<div id="nav">
			<uui-button label=${this.localize.term("general_import")} look="secondary" @click=${a(this, o, z)}>
				<uui-icon name="icon-arrow-left"></uui-icon>
				${this.localize.term("general_back")}
			</uui-button>
			<uui-button
				type="button"
				label=${this.localize.term("general_import")}
				look="primary"
				@click=${a(this, o, $)}></uui-button>
		</div>`;
};
M = function() {
  return s`<umb-localize key="dictionary_importDictionaryItemHelp"></umb-localize>
			<uui-form>
				<form id="form" name="form" @submit=${a(this, o, q)}>
					<uui-form-layout-item>
						<uui-label for="file" slot="label" required>${this.localize.term("formFileUpload_pickFile")}</uui-label>
						<uui-input-file
							accept=".udt"
							name="file"
							id="file"
							@input=${a(this, o, k)}
							required
							required-message=${this.localize.term("formFileUpload_pickFile")}></uui-input-file>
					</uui-form-layout-item>
				</form>
			</uui-form>`;
};
n.styles = [
  R,
  T`
			uui-input {
				width: 100%;
			}
			#item-list {
				padding: var(--uui-size-3) var(--uui-size-4);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}
			#item-list div {
				padding-left: 20px;
			}

			#wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-3);
			}
		`
];
u([
  v()
], n.prototype, "_selectionConfiguration", 2);
u([
  v()
], n.prototype, "_parentUnique", 2);
u([
  v()
], n.prototype, "_temporaryFileId", 2);
u([
  F("#form")
], n.prototype, "_form", 2);
u([
  F("umb-tree")
], n.prototype, "_treeElement", 2);
n = u([
  O("umb-import-dictionary-modal")
], n);
const j = n;
export {
  n as UmbImportDictionaryModalLayout,
  j as default
};
//# sourceMappingURL=import-dictionary-modal.element-D2Y3ChUb.js.map
