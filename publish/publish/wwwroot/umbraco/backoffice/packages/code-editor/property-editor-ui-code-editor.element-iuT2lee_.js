import { styleMap as y, html as f, css as b, state as p, property as _, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbInputEvent as E } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as W } from "@umbraco-cms/backoffice/property-editor";
import "./code-editor.element-H3cMNpCj.js";
var $ = Object.defineProperty, N = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, i = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? N(t, r) : t, l = e.length - 1, h; l >= 0; l--)
    (h = e[l]) && (s = (n ? h(t, r, s) : h(s)) || s);
  return n && s && $(t, r, s), s;
}, g = (e, t, r) => t.has(e) || v("Cannot " + r), u = (e, t, r) => (g(e, t, "read from private field"), r ? r.call(e) : t.get(e)), d = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r) => (g(e, t, "access private method"), r), o, m, c;
const U = "umb-property-editor-ui-code-editor";
let a = class extends C {
  constructor() {
    super(...arguments), d(this, m), d(this, o, "javascript"), this._language = u(this, o), this._height = 400, this._lineNumbers = !0, this._minimap = !0, this._wordWrap = !1, this.value = "";
  }
  set config(e) {
    e && (this._language = e?.getValueByAlias("language") ?? u(this, o), this._height = Number(e?.getValueByAlias("height")) || 400, this._lineNumbers = e?.getValueByAlias("lineNumbers") ?? !1, this._minimap = e?.getValueByAlias("minimap") ?? !1, this._wordWrap = e?.getValueByAlias("wordWrap") ?? !1);
  }
  render() {
    return f`
			<umb-code-editor
				style=${y({ height: `${this._height}px` })}
				.language=${this._language ?? u(this, o)}
				.code=${this.value ?? ""}
				?disable-line-numbers=${!this._lineNumbers}
				?disable-minimap=${!this._minimap}
				?word-wrap=${this._wordWrap}
				@input=${P(this, m, c)}>
			</umb-code-editor>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
c = function(e) {
  e instanceof E && (this.value = e.target.code, this.dispatchEvent(new W()));
};
a.styles = [
  b`
			umb-code-editor {
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-divider-emphasis);
			}
		`
];
i([
  p()
], a.prototype, "_language", 2);
i([
  p()
], a.prototype, "_height", 2);
i([
  p()
], a.prototype, "_lineNumbers", 2);
i([
  p()
], a.prototype, "_minimap", 2);
i([
  p()
], a.prototype, "_wordWrap", 2);
i([
  _()
], a.prototype, "value", 2);
i([
  _({ attribute: !1 })
], a.prototype, "config", 1);
a = i([
  w(U)
], a);
export {
  a as UmbPropertyEditorUICodeEditorElement,
  a as element
};
//# sourceMappingURL=property-editor-ui-code-editor.element-iuT2lee_.js.map
