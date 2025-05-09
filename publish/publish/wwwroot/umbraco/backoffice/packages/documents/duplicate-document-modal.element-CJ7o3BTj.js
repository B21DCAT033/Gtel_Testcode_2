import { U as g } from "./manifests-ByHRH93l.js";
import { nothing as v, html as c, css as f, state as y, customElement as D } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as U } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as T } from "@umbraco-cms/backoffice/modal";
var $ = Object.defineProperty, x = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, h = (e, t, i, a) => {
  for (var n = a > 1 ? void 0 : a ? x(t, i) : t, r = e.length - 1, s; r >= 0; r--)
    (s = e[r]) && (n = (a ? s(t, i, n) : s(n)) || n);
  return a && n && $(t, i, n), n;
}, C = (e, t, i) => t.has(e) || d("Cannot " + i), E = (e, t, i) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), u = (e, t, i) => (C(e, t, "access private method"), i), o, p, m, _, b;
const O = "umb-document-duplicate-to-modal";
let l = class extends T {
  constructor() {
    super(...arguments), E(this, o);
  }
  render() {
    return this.data ? c`
			<umb-body-layout headline="Duplicate">
				<uui-box id="tree-box" headline="Duplicate to">
					<umb-tree alias=${g} @selection-change=${u(this, o, p)}></umb-tree>
				</uui-box>
				<uui-box headline="Options">
					<umb-property-layout label="Relate to original" orientation="vertical"
						><div slot="editor">
							<uui-toggle
								@change=${u(this, o, m)}
								.checked=${this.value?.relateToOriginal}></uui-toggle>
						</div>
					</umb-property-layout>

					<umb-property-layout label="Include descendants" orientation="vertical"
						><div slot="editor">
							<uui-toggle
								@change=${u(this, o, _)}
								.checked=${this.value?.includeDescendants}></uui-toggle>
						</div>
					</umb-property-layout>
				</uui-box>
				${u(this, o, b).call(this)}
			</umb-body-layout>
		` : v;
  }
};
o = /* @__PURE__ */ new WeakSet();
p = function(e) {
  const i = e.target.getSelection();
  this._destinationUnique = i[0], (this._destinationUnique || this._destinationUnique === null) && this.updateValue({ destination: { unique: this._destinationUnique } });
};
m = function(e) {
  const t = e.target;
  this.updateValue({ relateToOriginal: t.checked });
};
_ = function(e) {
  const t = e.target;
  this.updateValue({ includeDescendants: t.checked });
};
b = function() {
  return c`
			<uui-button slot="actions" label="Cancel" @click="${this._rejectModal}"></uui-button>
			<uui-button
				slot="actions"
				color="positive"
				look="primary"
				label="Duplicate"
				@click=${this._submitModal}
				?disabled=${this._destinationUnique === void 0}></uui-button>
		`;
};
l.styles = [
  U,
  f`
			#tree-box {
				margin-bottom: var(--uui-size-layout-1);
			}
		`
];
h([
  y()
], l.prototype, "_destinationUnique", 2);
l = h([
  D(O)
], l);
export {
  l as UmbDocumentDuplicateToModalElement,
  l as element
};
//# sourceMappingURL=duplicate-document-modal.element-CJ7o3BTj.js.map
