import { UmbPropertyValueChangeEvent as at } from "@umbraco-cms/backoffice/property-editor";
import { html as p, ifDefined as P, repeat as ct, css as W, state as I, property as v, customElement as U, nothing as ut } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UUIFormControlMixin as dt } from "@umbraco-cms/backoffice/external/uui";
import { UmbChangeEvent as l } from "@umbraco-cms/backoffice/event";
import { U as pt, a as ht } from "./manifests-Bbe0yDH2.js";
import { UmbModalToken as B, UMB_MODAL_MANAGER_CONTEXT as lt } from "@umbraco-cms/backoffice/modal";
import { UmbId as _t } from "@umbraco-cms/backoffice/id";
import { UmbSorterController as mt } from "@umbraco-cms/backoffice/sorter";
import { umbExtensionsRegistry as x } from "@umbraco-cms/backoffice/extension-registry";
import { UmbFormControlMixin as ft } from "@umbraco-cms/backoffice/validation";
const yt = new B(
  pt,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), vt = new B(
  ht,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
var bt = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, z = (t) => {
  throw TypeError(t);
}, $ = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? gt(e, i) : e, a = t.length - 1, c; a >= 0; a--)
    (c = t[a]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && bt(e, i, n), n;
}, D = (t, e, i) => e.has(t) || z("Cannot " + i), u = (t, e, i) => (D(t, e, "read from private field"), e.get(t)), b = (t, e, i) => e.has(t) ? z("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), S = (t, e, i, r) => (D(t, e, "write to private field"), e.set(t, i), i), s = (t, e, i) => (D(t, e, "access private method"), i), d, g, f, T, o, q, L, A, C, G, F, V, Y, X, H, J, Z, j;
const Ct = "umb-input-content-picker-document-root";
let y = class extends ft(k) {
  constructor() {
    super(), b(this, o), this._originManifests = [], this._queryStepManifests = [], b(this, d), b(this, g), b(this, f), b(this, T, new mt(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => t.unique,
      identifier: "Umb.SorterIdentifier.InputDynamicRoot",
      itemSelector: "uui-ref-node",
      containerSelector: "#query-steps",
      onChange: ({ model: t }) => {
        if (this.data?.querySteps) {
          const e = t;
          s(this, o, C).call(this, e), this.dispatchEvent(new l());
        }
      }
    })), this.consumeContext(lt, (t) => {
      S(this, g, t);
    }), this.observe(
      x.byType("dynamicRootOrigin"),
      (t) => {
        this._originManifests = t;
      }
    ), this.observe(
      x.byType("dynamicRootQueryStep"),
      (t) => {
        this._queryStepManifests = t;
      }
    );
  }
  getFormElement() {
  }
  connectedCallback() {
    super.connectedCallback(), s(this, o, A).call(this, this.data), s(this, o, C).call(this, this.data?.querySteps);
  }
  render() {
    return p`
			${s(this, o, Y).call(this)}
			<uui-ref-list>${s(this, o, X).call(this)}</uui-ref-list>
			<uui-ref-list id="query-steps">${s(this, o, J).call(this)}</uui-ref-list>
			${s(this, o, j).call(this)} ${s(this, o, H).call(this)}
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
q = function() {
  S(this, f, u(this, g)?.open(this, yt, {
    data: { items: this._originManifests }
  })), u(this, f)?.onSubmit().then((t) => {
    const e = { ...this.data };
    e.originKey = void 0, this.data = { ...e, ...t }, s(this, o, A).call(this, this.data), this.dispatchEvent(new l());
  });
};
L = function() {
  S(this, f, u(this, g)?.open(this, vt, {
    data: { items: this._queryStepManifests }
  })), u(this, f)?.onSubmit().then((t) => {
    if (this.data) {
      const e = [...this.data.querySteps ?? [], t];
      s(this, o, C).call(this, e), this.dispatchEvent(new l());
    }
  });
};
A = function(t) {
  if (!t) return;
  const e = this._originManifests.find((i) => i.meta.originAlias === t.originAlias)?.meta;
  S(this, d, {
    label: e?.label ?? t.originAlias,
    icon: e?.icon ?? "icon-wand",
    description: t.originKey
  });
};
C = function(t) {
  this.data && (t && (t = t.map((e) => e.unique ? e : { ...e, unique: _t.new() })), u(this, T)?.setModel(t ?? []), this.data = { ...this.data, querySteps: t });
};
G = function(t) {
  const e = this._queryStepManifests.find((n) => n.meta.queryStepAlias === t.alias)?.meta, i = t.anyOfDocTypeKeys?.join(", "), r = i ? this.localize.term("dynamicRoot_queryStepTypes") + i : void 0;
  return {
    unique: t.unique,
    label: e?.label ?? t.alias,
    icon: e?.icon ?? "icon-lab",
    description: r
  };
};
F = function(t) {
  if (this.data?.querySteps) {
    const e = this.data.querySteps.indexOf(t);
    if (e !== -1) {
      const i = [...this.data.querySteps];
      i.splice(e, 1), s(this, o, C).call(this, i), this.dispatchEvent(new l());
    }
  }
};
V = function() {
  this.data = void 0, S(this, d, void 0), this.dispatchEvent(new l());
};
Y = function() {
  if (!this.data?.originAlias)
    return p`
			<uui-button
				class="add-button"
				@click=${s(this, o, q)}
				label=${this.localize.term("contentPicker_defineDynamicRoot")}
				look="placeholder"></uui-button>
		`;
};
X = function() {
  if (u(this, d))
    return p`
			<uui-ref-node
				standalone
				name=${u(this, d).label}
				detail=${P(u(this, d).description)}>
				<umb-icon slot="icon" name=${P(u(this, d).icon)}></umb-icon>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${s(this, o, q)}
						label="${this.localize.term("general_edit")}"></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
H = function() {
  if (u(this, d))
    return p`
			<uui-button @click=${s(this, o, V)}>${this.localize.term("buttons_clearSelection")}</uui-button>
		`;
};
J = function() {
  if (this.data?.querySteps)
    return ct(
      this.data.querySteps,
      (t) => t.unique,
      (t) => s(this, o, Z).call(this, t)
    );
};
Z = function(t) {
  if (!t.alias) return;
  const e = s(this, o, G).call(this, t);
  return p`
			<uui-ref-node standalone id=${e.unique} name=${e.label} detail="${P(e.description)}">
				<umb-icon slot="icon" name=${e.icon}></umb-icon>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => s(this, o, F).call(this, t)}
						label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
j = function() {
  if (u(this, d))
    return p` <uui-button
			class="add-button"
			@click=${s(this, o, L)}
			label=${this.localize.term("dynamicRoot_addQueryStep")}
			look="placeholder"></uui-button>`;
};
y.styles = [
  W`
			.add-button {
				width: 100%;
			}

			uui-ref-node[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
$([
  I()
], y.prototype, "_originManifests", 2);
$([
  I()
], y.prototype, "_queryStepManifests", 2);
$([
  v({ attribute: !1 })
], y.prototype, "data", 2);
y = $([
  U(Ct)
], y);
var Et = Object.defineProperty, St = Object.getOwnPropertyDescriptor, tt = (t) => {
  throw TypeError(t);
}, O = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? St(e, i) : e, a = t.length - 1, c; a >= 0; a--)
    (c = t[a]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Et(e, i, n), n;
}, N = (t, e, i) => e.has(t) || tt("Cannot " + i), M = (t, e, i) => (N(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Q = (t, e, i) => e.has(t) ? tt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ot = (t, e, i, r) => (N(t, e, "write to private field"), e.set(t, i), i), R = (t, e, i) => (N(t, e, "access private method"), i), _, m, et, it, nt, ot;
let h = class extends dt(k, "") {
  constructor() {
    super(...arguments), Q(this, m), Q(this, _, "content"), this._options = [
      { value: "content", name: "Content" },
      { value: "media", name: "Media" },
      { value: "member", name: "Members" }
    ];
  }
  getFormElement() {
  }
  set type(t) {
    t === void 0 && (t = M(this, _));
    const e = M(this, _);
    this._options = this._options.map(
      (i) => i.value === t ? { ...i, selected: !0 } : { ...i, selected: !1 }
    ), Ot(this, _, t), this.requestUpdate("type", e);
  }
  get type() {
    return M(this, _);
  }
  connectedCallback() {
    super.connectedCallback(), this.nodeId && !this.dynamicRoot && (this.dynamicRoot = { originAlias: "ByKey", originKey: this.nodeId, querySteps: [] });
  }
  render() {
    return p`<umb-input-dropdown-list
				@change=${R(this, m, et)}
				.options=${this._options}></umb-input-dropdown-list>
			${R(this, m, nt).call(this)}`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
et = function(t) {
  t.stopPropagation(), this.type = t.target.value, this.nodeId = void 0, this.dynamicRoot = void 0, this.dispatchEvent(new l());
};
it = function(t) {
  switch (this.type) {
    case "content":
      this.dynamicRoot = t.target.data, this.dynamicRoot?.originAlias === "ByKey" ? !this.dynamicRoot.querySteps || this.dynamicRoot.querySteps?.length === 0 ? this.nodeId = this.dynamicRoot.originKey : this.nodeId = void 0 : this.nodeId && (this.nodeId = void 0);
      break;
  }
  this.dispatchEvent(new l());
};
nt = function() {
  switch (this.type) {
    case "content":
      return R(this, m, ot).call(this);
    case "media":
    case "member":
    default:
      return ut;
  }
};
ot = function() {
  return p`
			<umb-input-content-picker-document-root .data=${this.dynamicRoot} @change=${R(this, m, it)}>
			</umb-input-content-picker-document-root>
		`;
};
h.styles = [
  W`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-4);
			}
		`
];
O([
  v()
], h.prototype, "type", 1);
O([
  v({ attribute: "node-id" })
], h.prototype, "nodeId", 2);
O([
  v({ attribute: !1 })
], h.prototype, "dynamicRoot", 2);
O([
  I()
], h.prototype, "_options", 2);
h = O([
  U("umb-input-content-picker-source")
], h);
var Rt = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, rt = (t) => {
  throw TypeError(t);
}, K = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? $t(e, i) : e, a = t.length - 1, c; a >= 0; a--)
    (c = t[a]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Rt(e, i, n), n;
}, Mt = (t, e, i) => e.has(t) || rt("Cannot " + i), Pt = (t, e, i) => e.has(t) ? rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), wt = (t, e, i) => (Mt(t, e, "access private method"), i), w, st;
let E = class extends k {
  constructor() {
    super(...arguments), Pt(this, w);
  }
  render() {
    return p`<umb-input-content-picker-source
			@change=${wt(this, w, st)}
			.type=${this.value?.type ?? "content"}
			.nodeId=${this.value?.id}
			.dynamicRoot=${this.value?.dynamicRoot}></umb-input-content-picker-source>`;
  }
};
w = /* @__PURE__ */ new WeakSet();
st = function(t) {
  const e = t.target;
  this.value = {
    type: e.type,
    id: e.nodeId,
    dynamicRoot: e.dynamicRoot
  }, this.dispatchEvent(new at());
};
K([
  v({ type: Object })
], E.prototype, "value", 2);
K([
  v({ type: Object, attribute: !1 })
], E.prototype, "config", 2);
E = K([
  U("umb-property-editor-ui-content-picker-source")
], E);
const Wt = E;
export {
  E as UmbPropertyEditorUIContentPickerSourceElement,
  Wt as default
};
//# sourceMappingURL=property-editor-ui-content-picker-source.element-C4G84NM0.js.map
