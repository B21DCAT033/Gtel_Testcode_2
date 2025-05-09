import { html as f, css as T, property as a, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as B } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { splitStringToArray as I } from "@umbraco-cms/backoffice/utils";
import { UmbFormControlMixin as S } from "@umbraco-cms/backoffice/validation";
var P = Object.defineProperty, U = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, o = (e, t, n, d) => {
  for (var h = d > 1 ? void 0 : d ? U(t, n) : t, w = e.length - 1, _; w >= 0; w--)
    (_ = e[w]) && (h = (d ? _(t, n, h) : _(h)) || h);
  return d && h && P(t, n, h), h;
}, v = (e, t, n) => t.has(e) || M("Cannot " + n), s = (e, t, n) => (v(e, t, "read from private field"), n ? n.call(e) : t.get(e)), c = (e, t, n) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), y = (e, t, n, d) => (v(e, t, "write to private field"), t.set(e, n), n), u = (e, t, n) => (v(e, t, "access private method"), n), p, l, g, r, m, $, b, x, C;
const k = "umb-input-content";
let i = class extends S(
  E
) {
  constructor() {
    super(...arguments), c(this, m), c(this, p, "content"), this.min = 0, this.minMessage = "This field need more items", this.max = 0, this.maxMessage = "This field exceeds the allowed amount of items", c(this, l, []), this.readonly = !1, c(this, g, { content: "document", media: "media", member: "member" }), c(this, r, []);
  }
  set type(e) {
    const t = s(this, p);
    e?.toLowerCase() !== s(this, p) && (y(this, p, e?.toLowerCase()), this.requestUpdate("type", t));
  }
  get type() {
    return s(this, p);
  }
  set allowedContentTypeIds(e) {
    y(this, l, e ? e.split(",") : []);
  }
  get allowedContentTypeIds() {
    return s(this, l).join(",");
  }
  set selection(e) {
    y(this, r, e?.map((t) => t.unique) ?? []);
  }
  get selection() {
    return s(this, r).map((e) => ({ type: s(this, g)[s(this, p)], unique: e }));
  }
  set items(e) {
    this.selection = e;
  }
  /** @deprecated Please use `selection` instead. This property will be removed in Umbraco 15. */
  get items() {
    return this.selection;
  }
  set value(e) {
    y(this, r, I(e));
  }
  get value() {
    return s(this, r).length > 0 ? s(this, r).join(",") : void 0;
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector(`umb-input-${s(this, g)[s(this, p)]}`));
  }
  render() {
    switch (s(this, p)) {
      case "content":
        return u(this, m, b).call(this);
      case "media":
        return u(this, m, x).call(this);
      case "member":
        return u(this, m, C).call(this);
      default:
        return f`<p>Type could not be found.</p>`;
    }
  }
};
p = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
$ = function(e) {
  y(this, r, e.target.selection ?? []), this.value = s(this, r).join(","), this.dispatchEvent(new B());
};
b = function() {
  return f`
			<umb-input-document
				.selection=${s(this, r)}
				.startNode=${this.startNode}
				.allowedContentTypeIds=${s(this, l)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?showOpenButton=${this.showOpenButton}
				?readonly=${this.readonly}
				@change=${u(this, m, $)}></umb-input-document>
		`;
};
x = function() {
  return f`
			<umb-input-media
				.selection=${s(this, r)}
				.allowedContentTypeIds=${s(this, l)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?showOpenButton=${this.showOpenButton}
				?readonly=${this.readonly}
				@change=${u(this, m, $)}></umb-input-media>
		`;
};
C = function() {
  return f`
			<umb-input-member
				.selection=${s(this, r)}
				.allowedContentTypeIds=${s(this, l)}
				.min=${this.min}
				.minMessage=${this.minMessage}
				.max=${this.max}
				.maxMessage=${this.maxMessage}
				?showOpenButton=${this.showOpenButton}
				?readonly=${this.readonly}
				@change=${u(this, m, $)}></umb-input-member>
		`;
};
i.styles = [
  T`
			p {
				margin: 0;
				color: var(--uui-color-border-emphasis);
			}
		`
];
o([
  a()
], i.prototype, "type", 1);
o([
  a({ type: Number })
], i.prototype, "min", 2);
o([
  a({ type: String, attribute: "min-message" })
], i.prototype, "minMessage", 2);
o([
  a({ type: Number })
], i.prototype, "max", 2);
o([
  a({ type: String, attribute: "max-message" })
], i.prototype, "maxMessage", 2);
o([
  a({ type: Object, attribute: !1 })
], i.prototype, "startNode", 2);
o([
  a()
], i.prototype, "allowedContentTypeIds", 1);
o([
  a({ type: Boolean })
], i.prototype, "showOpenButton", 2);
o([
  a({ type: Array })
], i.prototype, "selection", 1);
o([
  a({ type: Array })
], i.prototype, "items", 1);
o([
  a({ type: String })
], i.prototype, "value", 1);
o([
  a({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
i = o([
  O(k)
], i);
//# sourceMappingURL=input-content.element-B1BDh2NT.js.map
