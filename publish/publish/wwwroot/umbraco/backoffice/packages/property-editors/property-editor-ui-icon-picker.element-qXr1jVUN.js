import { html as c, property as p, state as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as _ } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as h } from "@umbraco-cms/backoffice/icon";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { extractUmbColorVariable as f } from "@umbraco-cms/backoffice/resources";
import { UmbPropertyValueChangeEvent as d } from "@umbraco-cms/backoffice/property-editor";
var b = Object.defineProperty, y = Object.getOwnPropertyDescriptor, n = (i, t, o, l) => {
  for (var e = l > 1 ? void 0 : l ? y(t, o) : t, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (e = (l ? a(t, o, e) : a(e)) || e);
  return l && e && b(t, o, e), e;
};
let r = class extends v {
  constructor() {
    super(...arguments), this._value = "", this._icon = "", this._color = "";
  }
  set value(i) {
    this._value = i ?? "";
    const t = this._value.split(" ");
    t.length === 2 ? (this._icon = t[0], this._color = t[1].replace("color-", "")) : (this._icon = this._value, this._color = "");
  }
  get value() {
    return this._value;
  }
  async _openModal() {
    const o = await (await this.getContext(_)).open(this, h)?.onSubmit();
    o && (o.color ? this.value = `${o.icon} color-${o.color}` : this.value = o.icon, this.dispatchEvent(new d()));
  }
  render() {
    return c`
			<uui-button
				compact
				label=${this.localize.term("defaultdialogs_selectIcon")}
				look="secondary"
				@click=${this._openModal}
				style="margin-right: var(--uui-size-space-3)">
				${this._color ? c` <uui-icon name="${this._icon}" style="color:var(${f(this._color)})"></uui-icon>` : c` <uui-icon name="${this._icon}"></uui-icon>`}
			</uui-button>
		`;
  }
};
n([
  p()
], r.prototype, "value", 1);
n([
  u()
], r.prototype, "_icon", 2);
n([
  u()
], r.prototype, "_color", 2);
r = n([
  m("umb-property-editor-ui-icon-picker")
], r);
const $ = r;
export {
  r as UmbPropertyEditorUIIconPickerElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-icon-picker.element-qXr1jVUN.js.map
