import { css as $, property as y, customElement as w, when as u, repeat as x, html as a } from "@umbraco-cms/backoffice/external/lit";
import { UUIPopoverContainerElement as v } from "@umbraco-cms/backoffice/external/uui";
var P = Object.defineProperty, C = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, f = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? C(t, r) : t, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (o = (i ? p(t, r, o) : p(o)) || o);
  return i && o && P(t, r, o), o;
}, q = (e, t, r) => t.has(e) || m("Cannot " + r), E = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), s = (e, t, r) => (q(e, t, "access private method"), r), n, h, _, d, b, g;
let c = class extends v {
  constructor() {
    super(...arguments), E(this, n);
  }
  render() {
    return a`
			<uui-scroll-container>
				${u(
      this.items?.length,
      () => a`
						${x(
        this.items,
        (e) => e.unique,
        (e) => s(this, n, g).call(this, e)
      )}
						${super.render()}
					`,
      () => super.render()
    )}
			</uui-scroll-container>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
h = function(e) {
  return this.shadowRoot?.querySelector(`#${e}`);
};
_ = function(e) {
  if (!e.items?.length) return;
  const t = s(this, n, h).call(this, e.unique);
  t && t.showPopover();
};
d = function(e) {
  const t = s(this, n, h).call(this, e.unique);
  t && t.hidePopover();
};
b = function(e) {
  e.execute?.(), setTimeout(() => {
    s(this, n, d).call(this, e);
  }, 100);
};
g = function(e) {
  const t = e.element;
  return t && t.setAttribute("popovertarget", e.unique), a`
			<div @mouseenter=${() => s(this, n, _).call(this, e)} @mouseleave=${() => s(this, n, d).call(this, e)}>
				${u(
    t,
    () => t,
    () => a`
						<uui-menu-item
							class=${e.separatorAfter ? "separator" : ""}
							popovertarget=${e.unique}
							@click-label=${() => s(this, n, b).call(this, e)}>
							${u(e.icon, (r) => a`<uui-icon slot="icon" name=${r}></uui-icon>`)}
							<div slot="label" class="menu-item">
								<span>${e.label}</span>
								${u(e.items, () => a`<uui-symbol-expand></uui-symbol-expand>`)}
							</div>
						</uui-menu-item>
					`
  )}
				<umb-cascading-menu-popover id=${e.unique} placement="right-start" .items=${e.items}>
				</umb-cascading-menu-popover>
			</div>
		`;
};
c.styles = [
  ...v.styles,
  $`
			:host {
				--uui-menu-item-flat-structure: 1;

				background: var(--uui-color-surface);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
				padding: var(--uui-size-space-1);
			}

			.menu-item {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: var(--uui-size-space-4);
			}

			.separator::after {
				content: '';
				position: absolute;
				border-bottom: 1px solid var(--uui-color-border);
				width: 100%;
			}

			uui-scroll-container {
				max-height: 500px;
			}
		`
];
f([
  y({ type: Array })
], c.prototype, "items", 2);
c = f([
  w("umb-cascading-menu-popover")
], c);
export {
  c as U
};
//# sourceMappingURL=cascading-menu-popover.element-DZ_A3J1M.js.map
