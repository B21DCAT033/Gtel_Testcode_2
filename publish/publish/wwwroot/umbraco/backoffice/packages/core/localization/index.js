import { css as v, property as i, state as w, customElement as y, unsafeHTML as D, html as l, nothing as B, query as F } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UMB_DEFAULT_LOCALIZATION_CULTURE as H, umbLocalizationManager as x } from "@umbraco-cms/backoffice/localization-api";
import { umbExtensionsRegistry as j } from "@umbraco-cms/backoffice/extension-registry";
import { UmbStringState as q } from "@umbraco-cms/backoffice/observable-api";
import { combineLatest as J } from "@umbraco-cms/backoffice/external/rxjs";
import { loadManifestPlainJs as Z, hasDefaultExport as G } from "@umbraco-cms/backoffice/extension-api";
import { UmbChangeEvent as K } from "@umbraco-cms/backoffice/event";
import { UUIFormControlMixin as Q } from "@umbraco-cms/backoffice/external/uui";
var X = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, g = (e, t, o, r) => {
  for (var s = r > 1 ? void 0 : r ? Y(t, o) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (s = (r ? n(t, o, s) : n(s)) || s);
  return r && s && X(t, o, s), s;
};
let c = class extends _ {
  constructor() {
    super(...arguments), this.debug = !1;
  }
  get text() {
    const e = this.localize.term(this.key, ...this.args ?? []);
    return e === this.key ? (this.getHostElement().setAttribute("data-localize-missing", this.key), "") : (this.getHostElement().removeAttribute("data-localize-missing"), e);
  }
  render() {
    return this.text.trim() ? l`${D(this.text)}` : this.debug ? l`<span style="color:red">${this.key}</span>` : l`<slot></slot>`;
  }
};
c.styles = [
  v`
			:host {
				display: contents;
			}
		`
];
g([
  i()
], c.prototype, "key", 2);
g([
  i({ type: Array })
], c.prototype, "args", 2);
g([
  i({ type: Boolean })
], c.prototype, "debug", 2);
g([
  w()
], c.prototype, "text", 1);
c = g([
  y("umb-localize")
], c);
var k = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, L = (e, t, o, r) => {
  for (var s = r > 1 ? void 0 : r ? tt(t, o) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (s = (r ? n(t, o, s) : n(s)) || s);
  return r && s && k(t, o, s), s;
}, et = (e, t, o) => t.has(e) || A("Cannot " + o), st = (e, t, o) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), ot = (e, t, o) => (et(e, t, "access private method"), o), C, M;
let m = class extends _ {
  constructor() {
    super(...arguments), st(this, C), this.skipDuration = !1;
  }
  updated() {
    ot(this, C, M).call(this);
  }
  render() {
    return this.date ? this.localize.date(this.date, this.options) : B;
  }
};
C = /* @__PURE__ */ new WeakSet();
M = function() {
  if (this.skipDuration)
    return;
  let e = "";
  if (this.date) {
    const t = /* @__PURE__ */ new Date(), o = new Date(this.date), r = this.localize.duration(o, t);
    e = this.localize.term("general_duration", r, o, t);
  }
  this.title = e;
};
m.styles = [
  v`
			:host {
				display: contents;
			}
		`
];
L([
  i({ type: String })
], m.prototype, "date", 2);
L([
  i({ type: Object })
], m.prototype, "options", 2);
L([
  i({ type: Boolean })
], m.prototype, "skipDuration", 2);
m = L([
  y("umb-localize-date")
], m);
var rt = Object.defineProperty, at = Object.getOwnPropertyDescriptor, E = (e, t, o, r) => {
  for (var s = r > 1 ? void 0 : r ? at(t, o) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (s = (r ? n(t, o, s) : n(s)) || s);
  return r && s && rt(t, o, s), s;
};
let h = class extends _ {
  get text() {
    return this.localize.number(this.number, this.options);
  }
  render() {
    return this.number ? l`${D(this.text)}` : l`<slot></slot>`;
  }
};
h.styles = [
  v`
			:host {
				display: contents;
			}
		`
];
E([
  i()
], h.prototype, "number", 2);
E([
  i()
], h.prototype, "options", 2);
E([
  w()
], h.prototype, "text", 1);
h = E([
  y("umb-localize-number")
], h);
var nt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, b = (e, t, o, r) => {
  for (var s = r > 1 ? void 0 : r ? it(t, o) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (s = (r ? n(t, o, s) : n(s)) || s);
  return r && s && nt(t, o, s), s;
};
let u = class extends _ {
  constructor() {
    super(...arguments), this.unit = "seconds";
  }
  get text() {
    return this.localize.relativeTime(this.time, this.unit, this.options);
  }
  render() {
    return this.time ? l`${D(this.text)}` : l`<slot></slot>`;
  }
};
u.styles = [
  v`
			:host {
				display: contents;
			}
		`
];
b([
  i({ type: Number })
], u.prototype, "time", 2);
b([
  i({ type: Object })
], u.prototype, "options", 2);
b([
  i()
], u.prototype, "unit", 2);
b([
  w()
], u.prototype, "text", 1);
u = b([
  y("umb-localize-relative-time")
], u);
function T(e, t, o) {
  for (const [r, s] of Object.entries(o))
    e[`${t}_${r}`] = s;
}
class lt {
  constructor(t) {
    this.#t = new q(
      document.documentElement.lang !== "" ? document.documentElement.lang : H
    ), this.currentLanguage = this.#t.asObservable(), this.#e = [], this.#s = async (o) => {
      this.#e.push(o.alias);
      const r = {};
      if (o.meta.localizations)
        for (const [s, a] of Object.entries(o.meta.localizations))
          T(r, s, a);
      if (o.js) {
        const s = await Z(o.js);
        if (s && G(s))
          for (const [a, n] of Object.entries(s.default))
            T(r, a, n);
      }
      return {
        $code: o.meta.culture.toLowerCase(),
        $dir: o.meta.direction ?? "ltr",
        ...r
      };
    }, J([this.currentLanguage, t.byType("localization")]).subscribe(
      async ([o, r]) => {
        const s = new Intl.Locale(o), a = r.filter(
          (p) => p.meta.culture.toLowerCase() === s.baseName.toLowerCase() || p.meta.culture.toLowerCase() === s.language.toLowerCase()
        );
        if (!a.length) return;
        const n = a.filter((p) => !this.#e.includes(p.alias)), z = await Promise.all(a.map(this.#s));
        if (!z.length) return;
        if (n.length) {
          const p = z.filter(
            (V) => n.some((W) => W.meta.culture.toLowerCase() === V.$code)
          );
          x.registerManyLocalizations(p);
        }
        const P = s.baseName.toLowerCase();
        document.documentElement.lang.toLowerCase() !== P && (document.documentElement.lang = P);
        const U = z[0].$dir ?? "ltr";
        document.documentElement.dir !== U && (document.documentElement.dir = U);
      }
    );
  }
  #t;
  #e;
  /**
   * Get the current registered translations.
   * @returns {Map<string, UmbLocalizationSetBase>} Returns the registered translations
   */
  get localizations() {
    return x.localizations;
  }
  #s;
  /**
   * Load a language from the extension registry.
   * @param {string} locale The locale to load.
   */
  loadLanguage(t) {
    this.#t.setValue(t.toLowerCase());
  }
}
const Lt = new lt(j);
var ct = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, S = (e) => {
  throw TypeError(e);
}, O = (e, t, o, r) => {
  for (var s = r > 1 ? void 0 : r ? ut(t, o) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (s = (r ? n(t, o, s) : n(s)) || s);
  return r && s && ct(t, o, s), s;
}, pt = (e, t, o) => t.has(e) || S("Cannot " + o), mt = (e, t, o) => t.has(e) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), $ = (e, t, o) => (pt(e, t, "access private method"), o), f, N, I, R;
let d = class extends Q(_, "") {
  constructor() {
    super(), mt(this, f), this._options = [], $(this, f, N).call(this);
  }
  get value() {
    return super.value;
  }
  set value(e) {
    if (typeof e == "string") {
      const t = super.value;
      super.value = e.toLowerCase(), this.requestUpdate("value", t);
    }
  }
  getFormElement() {
    return this._selectElement;
  }
  render() {
    return l`
			<uui-select
				style="margin-top: var(--uui-size-space-1)"
				@change=${$(this, f, R)}
				.options=${this._options.map((e) => ({
      name: e.name,
      value: e.value,
      selected: e.value == this.value
    }))}></uui-select>
		`;
  }
};
f = /* @__PURE__ */ new WeakSet();
N = function() {
  this.observe(
    j.byType("localization"),
    (e) => {
      $(this, f, I).call(this, e);
    },
    "umbObserveLocalizationManifests"
  );
};
I = function(e) {
  this._options = e.filter((t) => t !== void 0).map((t) => ({
    name: t.name,
    value: t.meta.culture.toLowerCase()
  }));
};
R = function(e) {
  this.value = e.target.value.toString(), this.dispatchEvent(new K());
};
d.styles = [
  v`
			:host {
				display: block;
			}
		`
];
O([
  w()
], d.prototype, "_options", 2);
O([
  F("uui-combobox")
], d.prototype, "_selectElement", 2);
O([
  i({ type: String })
], d.prototype, "value", 1);
d = O([
  y("umb-ui-culture-input")
], d);
export {
  lt as UmbLocalizationRegistry,
  d as UmbUiCultureInputElement,
  Lt as umbLocalizationRegistry
};
//# sourceMappingURL=index.js.map
