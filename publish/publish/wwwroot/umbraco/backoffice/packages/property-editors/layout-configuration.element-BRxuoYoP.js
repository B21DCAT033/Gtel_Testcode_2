import { html as c, nothing as L, repeat as P, when as V, ifDefined as v, css as k, property as w, customElement as z } from "@umbraco-cms/backoffice/external/lit";
import { extractUmbColorVariable as A } from "@umbraco-cms/backoffice/resources";
import { simpleHashCode as D } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as p } from "@umbraco-cms/backoffice/property-editor";
import { UmbSorterController as q } from "@umbraco-cms/backoffice/sorter";
import { UmbTextStyles as R } from "@umbraco-cms/backoffice/style";
import { UMB_MODAL_MANAGER_CONTEXT as T } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as W } from "@umbraco-cms/backoffice/icon";
var B = Object.defineProperty, G = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, l) => {
  for (var n = l > 1 ? void 0 : l ? G(e, i) : e, r = t.length - 1, m; r >= 0; r--)
    (m = t[r]) && (n = (l ? m(e, i, n) : m(n)) || n);
  return l && n && B(e, i, n), n;
}, g = (t, e, i) => e.has(t) || C("Cannot " + i), f = (t, e, i) => (g(t, e, "read from private field"), i ? i.call(t) : e.get(t)), d = (t, e, i) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), H = (t, e, i, l) => (g(t, e, "write to private field"), e.set(t, i), i), a = (t, e, i) => (g(t, e, "access private method"), i), y, s, o, E, b, $, U, x, M, h, O, S, I;
let u = class extends N {
  constructor() {
    super(...arguments), d(this, o), d(this, y, new q(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => a(this, o, h).call(this, t),
      itemSelector: ".layout-item",
      containerSelector: "#layout-wrapper",
      onChange: ({ model: t }) => {
        this.value = t, this.dispatchEvent(new p());
      }
    })), d(this, s, []);
  }
  set value(t) {
    H(this, s, t ?? []), f(this, y).setModel(f(this, s));
  }
  get value() {
    return f(this, s);
  }
  render() {
    return c`
			<div id="layout-wrapper">${a(this, o, S).call(this)}</div>
			${a(this, o, O).call(this)}
		`;
  }
};
y = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
E = async function() {
  await this.updateComplete, (this.shadowRoot?.querySelector(".layout-item:last-of-type > uui-input")).focus();
};
b = function(t) {
  const e = t.target.value;
  if (this.value?.find((l) => e?.value === l.collectionView))
    throw new Error("Duplicate `collectionView` aliases are not allowed.");
  this.value = [
    ...this.value ?? [],
    {
      icon: e?.icon,
      name: e?.label,
      collectionView: e?.value
    }
  ], this.dispatchEvent(new p()), a(this, o, E).call(this);
};
$ = function(t, e) {
  const i = [...this.value ?? []];
  i[e] = { ...i[e], name: t.target.value }, this.value = i, this.dispatchEvent(new p());
};
U = function(t) {
  const e = [...this.value ?? []];
  e.splice(t, 1), this.value = e, this.dispatchEvent(new p());
};
x = async function(t, e) {
  const n = await (await this.getContext(T)).open(this, W, { value: t })?.onSubmit();
  if (!n) return;
  const r = [...this.value ?? []];
  r[e] = { ...r[e], icon: `${n.icon} color-${n.color}` }, this.value = r, this.dispatchEvent(new p());
};
M = function(t) {
  const [e, i] = t?.split(" ") ?? [];
  return { icon: e, color: i?.replace("color-", "") };
};
h = function(t) {
  return "x" + D("" + t.collectionView + t.name + t.icon).toString(16);
};
O = function() {
  return c`<umb-input-manifest extension-type="collectionView" @change=${a(this, o, b)}></umb-input-manifest>`;
};
S = function() {
  return this.value ? P(
    this.value,
    (t) => a(this, o, h).call(this, t),
    (t, e) => a(this, o, I).call(this, t, e)
  ) : L;
};
I = function(t, e) {
  const i = a(this, o, M).call(this, t.icon), l = i.color ? A(i.color) : void 0;
  return c`
			<div class="layout-item" id=${a(this, o, h).call(this, t)}>
				<uui-icon name="icon-navigation"></uui-icon>

				<uui-button compact look="outline" label="pick icon" @click=${() => a(this, o, x).call(this, i, e)}>
					${V(
    i.color,
    () => c`<uui-icon name=${v(i.icon)} style="color:var(${l})"></uui-icon>`,
    () => c`<uui-icon name=${v(i.icon)}></uui-icon>`
  )}
				</uui-button>

				<uui-input
					label="name"
					value=${v(t.name)}
					placeholder="Enter a label..."
					@change=${(n) => a(this, o, $).call(this, n, e)}></uui-input>

				<div class="alias">
					<code>${t.collectionView}</code>
				</div>

				<div class="actions">
					<uui-button
						label=${this.localize.term("general_remove")}
						look="secondary"
						@click=${() => a(this, o, U).call(this, e)}></uui-button>
				</div>
			</div>
		`;
};
u.styles = [
  R,
  k`
			#layout-wrapper {
				display: flex;
				flex-direction: column;
				gap: 1px;
				margin-bottom: var(--uui-size-1);
			}

			.layout-item {
				background-color: var(--uui-color-surface-alt);
				display: flex;
				align-items: center;
				gap: var(--uui-size-6);
				padding: var(--uui-size-3) var(--uui-size-6);
			}

			.layout-item > uui-icon {
				flex: 0 0 var(--uui-size-6);
			}

			.layout-item > uui-button {
				flex: 0 0 var(--uui-size-10);
			}

			.layout-item > uui-input,
			.layout-item > .alias {
				flex: 1;
			}

			.layout-item > .actions {
				flex: 0 0 auto;
				display: flex;
				justify-content: flex-end;
			}
		`
];
_([
  w({ type: Array })
], u.prototype, "value", 1);
_([
  w({ type: Object, attribute: !1 })
], u.prototype, "config", 2);
u = _([
  z("umb-property-editor-ui-collection-layout-configuration")
], u);
const et = u;
export {
  u as UmbPropertyEditorUICollectionLayoutConfigurationElement,
  et as default
};
//# sourceMappingURL=layout-configuration.element-BRxuoYoP.js.map
