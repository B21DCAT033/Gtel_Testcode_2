import { html as u, map as D, nothing as P, css as C, property as y, state as g, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as z } from "@umbraco-cms/backoffice/property-editor";
import { UUISelectElement as S } from "@umbraco-cms/backoffice/external/uui";
var V = Object.defineProperty, M = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, c = (t, e, i, r) => {
  for (var l = r > 1 ? void 0 : r ? M(e, i) : e, d = t.length - 1, h; d >= 0; d--)
    (h = t[d]) && (l = (r ? h(e, i, l) : h(l)) || l);
  return r && l && V(e, i, l), l;
}, v = (t, e, i) => e.has(t) || w("Cannot " + i), p = (t, e, i) => (v(t, e, "read from private field"), i ? i.call(t) : e.get(t)), m = (t, e, i) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), b = (t, e, i, r) => (v(t, e, "write to private field"), e.set(t, i), i), o = (t, e, i) => (v(t, e, "access private method"), i), s, n, E, $, f, U, A, _;
let a = class extends I {
  constructor() {
    super(...arguments), m(this, n), m(this, s, []), this.readonly = !1, this._multiple = !1, this._options = [];
  }
  set value(t) {
    b(this, s, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return p(this, s);
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("items");
    Array.isArray(e) && e.length > 0 && (this._options = typeof e[0] == "string" ? e.map((i) => ({ name: i, value: i, selected: p(this, s).includes(i) })) : e.map((i) => ({
      name: i.name,
      value: i.value,
      selected: p(this, s).includes(i.value)
    })), p(this, s).forEach((i) => {
      this._options.find((r) => r.value === i) || this._options.push({
        name: `${i} (${this.localize.term("validation_legacyOption")})`,
        value: i,
        selected: !0,
        invalid: !0
      });
    })), this._multiple = t.getValueByAlias("multiple") ?? !1;
  }
  render() {
    return this._multiple ? o(this, n, U).call(this) : o(this, n, A).call(this);
  }
};
s = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
E = function(t) {
  const e = t.target.value;
  o(this, n, f).call(this, e ? [e] : []);
};
$ = function(t) {
  const e = t.target.selectedOptions, i = e ? Array.from(e).map((r) => r.value) : [];
  o(this, n, f).call(this, i);
};
f = function(t) {
  t && (this.value = t, this.dispatchEvent(new z()));
};
U = function() {
  return this.readonly ? u`<div>${this.value?.join(", ")}</div>` : u`
			<select id="native" multiple @change=${o(this, n, $)}>
				${D(
    this._options,
    (t) => u`<option value=${t.value} ?selected=${t.selected}>${t.name}</option>`
  )}
			</select>
			${o(this, n, _).call(this)}
		`;
};
A = function() {
  return u`
			<umb-input-dropdown-list
				.options=${this._options}
				@change=${o(this, n, E)}
				?readonly=${this.readonly}></umb-input-dropdown-list>
			${o(this, n, _).call(this)}
		`;
};
_ = function() {
  return p(this, s).some((e) => {
    const i = this._options.find((r) => r.value === e);
    return i ? i.invalid : !1;
  }) ? u`<div class="error"><umb-localize key="validation_legacyOptionDescription"></umb-localize></div>` : P;
};
a.styles = [
  S.styles,
  C`
			#native {
				height: auto;
			}

			.error {
				color: var(--uui-color-danger);
				font-size: var(--uui-font-size-small);
			}
		`
];
c([
  y({ type: Array })
], a.prototype, "value", 1);
c([
  y({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
c([
  g()
], a.prototype, "_multiple", 2);
c([
  g()
], a.prototype, "_options", 2);
a = c([
  O("umb-property-editor-ui-dropdown")
], a);
const G = a;
export {
  a as UmbPropertyEditorUIDropdownElement,
  G as default
};
//# sourceMappingURL=property-editor-ui-dropdown.element-CvZgk3Vz.js.map
