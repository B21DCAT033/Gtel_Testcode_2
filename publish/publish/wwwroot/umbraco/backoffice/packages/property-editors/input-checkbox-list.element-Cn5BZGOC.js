import { nothing as x, repeat as C, html as f, classMap as k, css as E, property as c, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as b } from "@umbraco-cms/backoffice/external/uui";
import { UmbChangeEvent as w } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
var U = Object.defineProperty, P = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, a = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? P(t, i) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (r = (s ? p(t, i, r) : p(r)) || r);
  return s && r && U(t, i, r), r;
}, v = (e, t, i) => t.has(e) || _("Cannot " + i), I = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), d = (e, t, i) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), M = (e, t, i, s) => (v(e, t, "write to private field"), t.set(e, i), i), u = (e, t, i) => (v(e, t, "access private method"), i), l, n, m, y, g;
let o = class extends b(O, "") {
  constructor() {
    super(...arguments), d(this, n), this.list = [], d(this, l, []), this.readonly = !1;
  }
  set selection(e) {
    M(this, l, e), super.value = e.join(",");
  }
  get selection() {
    return I(this, l);
  }
  set value(e) {
    this.selection = e.split(",");
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return this.list ? f`
			<form>
				<uui-form @change=${u(this, n, m)}>
					${C(
      this.list,
      (e) => e.value,
      (e) => u(this, n, g).call(this, e)
    )}
				</uui-form>
			</form>
		` : x;
  }
};
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
m = function(e) {
  e.stopPropagation(), e.target.checked ? this.selection = [...this.selection, e.target.value] : u(this, n, y).call(this, this.selection.findIndex((t) => e.target.value === t)), this.dispatchEvent(new w());
};
y = function(e) {
  if (e == -1) return;
  const t = [...this.selection];
  t.splice(e, 1), this.selection = t;
};
g = function(e) {
  return f`<uui-checkbox
			class=${k({ invalid: !!e.invalid })}
			?checked=${e.checked}
			label=${e.label + (e.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
			title=${e.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}
			value=${e.value}
			?readonly=${this.readonly}></uui-checkbox>`;
};
o.styles = [
  E`
			uui-checkbox {
				width: 100%;

				&.invalid {
					text-decoration: line-through;
				}
			}
		`
];
a([
  c({ attribute: !1 })
], o.prototype, "list", 2);
a([
  c({ type: Array })
], o.prototype, "selection", 1);
a([
  c()
], o.prototype, "value", 1);
a([
  c({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
o = a([
  $("umb-input-checkbox-list")
], o);
//# sourceMappingURL=input-checkbox-list.element-Cn5BZGOC.js.map
