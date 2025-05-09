import { UmbContextToken as we } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as Ae, UmbModalBaseElement as oi, UMB_MODAL_MANAGER_CONTEXT as Xi, umbConfirmModal as Ln } from "@umbraco-cms/backoffice/modal";
import { UmbTreeServerDataSourceBase as Hn, UmbTreeRepositoryBase as Gn, UMB_TREE_PICKER_MODAL_ALIAS as Vn } from "@umbraco-cms/backoffice/tree";
import { a as Yn } from "./media-url.repository-DUerHiJb.js";
import { UMB_SECTION_PATH_PATTERN as Kn } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_MODAL as Qi, UMB_WORKSPACE_PATH_PATTERN as Xn } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as si, UmbPathPattern as Ji } from "@umbraco-cms/backoffice/router";
import { UmbPickerInputContext as Qn } from "@umbraco-cms/backoffice/picker-input";
import { css as q, query as L, property as l, state as p, customElement as I, html as r, nothing as x, classMap as Jn, ifDefined as et, when as he, repeat as le } from "@umbraco-cms/backoffice/external/lit";
import { calculateExtrapolatedValue as _t, clamp as U, inverseLerp as Zn, lerp as eo, debounce as to, UmbPaginationManager as io, splitStringToArray as ao, stringOrStringArrayContains as Hi, formatBytes as no } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as C } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as X } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as Zi, UmbSorterResolvePlacementAsGrid as ea } from "@umbraco-cms/backoffice/sorter";
import { UmbFormControlMixin as ri, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as ta } from "@umbraco-cms/backoffice/validation";
import { getUmbracoFolderUnique as oo, UmbMediaTypeStructureRepository as so, isUmbracoFolder as ro, UMB_MEDIA_TYPE_ENTITY_TYPE as lo } from "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/imaging";
import { UmbId as Re } from "@umbraco-cms/backoffice/id";
import { MediaService as V } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as Te } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as po, UmbItemServerDataSourceBase as co, UmbItemRepositoryBase as uo, UmbRepositoryItemsManager as ho } from "@umbraco-cms/backoffice/repository";
import { UmbControllerBase as ia } from "@umbraco-cms/backoffice/class-api";
import { UMB_CONTENT_PROPERTY_CONTEXT as mo } from "@umbraco-cms/backoffice/content";
import { UMB_MEDIA_ITEM_REPOSITORY_ALIAS as vo } from "@umbraco-cms/backoffice/media";
import { UmbTemporaryFileManager as aa, TemporaryFileStatus as G } from "@umbraco-cms/backoffice/temporary-file";
import { assignToFrozenObject as fo } from "@umbraco-cms/backoffice/observable-api";
import { drag as go } from "@umbraco-cms/backoffice/external/uui";
import { umbExtensionsRegistry as _o } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as xo } from "@umbraco-cms/backoffice/extension-api";
const ar = new we("UmbCollectionContext"), nr = new Ae("Umb.Modal.Dropzone.MediaTypePicker", {
  modal: {
    type: "dialog"
  }
}), or = new Ae("Umb.Modal.Media.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
class st extends Event {
  static {
    this.TYPE = "imagecrop-change";
  }
  constructor(t) {
    super(st.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...t });
  }
}
var yo = Object.defineProperty, wo = Object.getOwnPropertyDescriptor, na = (e) => {
  throw TypeError(e);
}, ae = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? wo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && yo(t, i, a), a;
}, li = (e, t, i) => t.has(e) || na("Cannot " + i), h = (e, t, i) => (li(e, t, "read from private field"), i ? i.call(e) : t.get(e)), P = (e, t, i) => t.has(e) ? na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ve = (e, t, i, n) => (li(e, t, "write to private field"), t.set(e, i), i), f = (e, t, i) => (li(e, t, "access private method"), i), pi, ci, Rt, fe, tt, Ke, je, ct, dt, u, Ft, oa, sa, Dt, Wt, di, ra, oe, la, pa, ca, da, Mt, ut, ht, Et;
let j = class extends X {
  constructor() {
    super(...arguments), P(this, u), this.src = "", this.focalPoint = {
      left: 0.5,
      top: 0.5
    }, this._zoom = 0, P(this, pi, 50), P(this, ci, 4), P(this, Rt, 1e-3), P(this, fe, 0), P(this, tt, 0), P(this, Ke, 0), P(this, je, !1), P(this, ct, 0), P(this, dt, 0), P(this, Mt, (e) => {
      e.preventDefault(), ve(this, je, !0);
      const t = this.imageElement.getBoundingClientRect(), i = this.viewportElement.getBoundingClientRect();
      ve(this, ct, e.clientX - t.left + i.left), ve(this, dt, e.clientY - t.top + i.top), window.addEventListener("mousemove", h(this, ut)), window.addEventListener("mouseup", h(this, ht));
    }), P(this, ut, (e) => {
      if (h(this, je)) {
        const t = e.clientX - h(this, ct), i = e.clientY - h(this, dt);
        f(this, u, di).call(this, i, t);
      }
    }), P(this, ht, () => {
      ve(this, je, !1), window.removeEventListener("mousemove", h(this, ut)), window.removeEventListener("mouseup", h(this, ht));
    }), P(this, Et, (e) => {
      e.preventDefault(), f(this, u, Wt).call(this, e.deltaY * -h(this, Rt), e.clientX, e.clientY);
    });
  }
  get zoom() {
    return this._zoom;
  }
  set zoom(e) {
    const t = e - this._zoom;
    f(this, u, Wt).call(this, t);
  }
  connectedCallback() {
    super.connectedCallback(), f(this, u, Dt).call(this), f(this, u, oa).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), f(this, u, sa).call(this);
  }
  updated(e) {
    super.updated(e), e.has("value") && f(this, u, Dt).call(this);
  }
  render() {
    return r`
			<div id="viewport">
				<img id="image" src=${this.src} alt="" />
				<div id="mask"></div>
			</div>
			<uui-slider
				@input=${f(this, u, da)}
				.value=${this._zoom.toString()}
				hide-step-values
				id="slider"
				type="range"
				min="0"
				max="1"
				value="0"
				step="0.001">
			</uui-slider>
			<div id="actions">
				<uui-button @click=${f(this, u, ca)} label="${this.localize.term("imagecropper_reset")}"></uui-button>
				<uui-button
					look="secondary"
					@click=${f(this, u, pa)}
					label="${this.localize.term("general_cancel")}"></uui-button>
				<uui-button
					look="primary"
					color="positive"
					@click=${f(this, u, la)}
					label="${this.localize.term("buttons_save")}"></uui-button>
			</div>
		`;
  }
};
pi = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
fe = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
Ft = function() {
  return eo(h(this, fe), h(this, tt), this._zoom);
};
oa = async function() {
  await this.updateComplete, this.imageElement.addEventListener("mousedown", h(this, Mt)), this.addEventListener("wheel", h(this, Et), { passive: !1 });
};
sa = function() {
  this.imageElement.removeEventListener("mousedown", h(this, Mt)), this.removeEventListener("wheel", h(this, Et));
};
Dt = async function() {
  if (!this.value) return;
  await this.updateComplete, this.imageElement.complete || await new Promise((N) => this.imageElement.onload = () => N(this.imageElement));
  const e = this.viewportElement.clientWidth, t = this.viewportElement.clientHeight, i = e / t, n = this.value.width / this.value.height;
  let a = 0, o = 0, s = 0, c = 0, v = 0, w = 0;
  {
    const N = 2 * h(this, pi), H = e - N, We = t - N, Li = n > i;
    a = Li ? H : We * n, o = Li ? H / n : We;
  }
  const $e = (e - a) / 2, Me = (t - o) / 2;
  this.maskElement.style.width = `${a}px`, this.maskElement.style.height = `${o}px`, this.maskElement.style.left = `${$e}px`, this.maskElement.style.top = `${Me}px`;
  {
    const N = a / this.imageElement.naturalWidth, H = o / this.imageElement.naturalHeight, We = Math.max(N, H);
    ve(this, fe, We), ve(this, tt, We * h(this, ci));
  }
  if (this.value.coordinates) {
    const N = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
    if (n > 1) {
      const H = this.value.coordinates.x1 + this.value.coordinates.x2;
      s = _t(a, H), c = s / N, v = -s * this.value.coordinates.x1 + $e, w = -c * this.value.coordinates.y1 + Me;
    } else {
      const H = this.value.coordinates.y1 + this.value.coordinates.y2;
      c = _t(o, H), s = c * N, v = -s * this.value.coordinates.x1 + $e, w = -c * this.value.coordinates.y1 + Me;
    }
  } else {
    s = this.imageElement.naturalWidth * h(this, fe), c = this.imageElement.naturalHeight * h(this, fe), v = $e + a / 2 - s * this.focalPoint.left, w = Me + o / 2 - c * this.focalPoint.top;
    const N = $e + a - s, H = Me + o - c;
    v = U(v, N, $e), w = U(w, H, Me);
  }
  this.imageElement.style.left = `${v}px`, this.imageElement.style.top = `${w}px`, this.imageElement.style.width = `${s}px`, this.imageElement.style.height = `${c}px`;
  const Nn = s / this.imageElement.naturalWidth, Bn = c / this.imageElement.naturalHeight, jn = Math.max(Nn, Bn);
  this._zoom = Zn(h(this, fe), h(this, tt), jn);
};
Wt = function(e, t, i) {
  ve(this, Ke, h(this, u, Ft)), this._zoom = U(this._zoom + e, 0, 1);
  const n = h(this, u, Ft), a = this.maskElement.getBoundingClientRect(), o = this.imageElement.getBoundingClientRect();
  let s = { left: 0, top: 0 };
  t && i ? s = f(this, u, oe).call(this, t, i) : s = f(this, u, oe).call(this, a.left + a.width / 2, a.top + a.height / 2);
  const c = f(this, u, oe).call(this, o.left, o.top), v = s.left - (s.left - c.left) * (n / h(this, Ke)), w = s.top - (s.top - c.top) * (n / h(this, Ke));
  this.imageElement.style.width = `${this.imageElement.naturalWidth * n}px`, this.imageElement.style.height = `${this.imageElement.naturalHeight * n}px`, f(this, u, di).call(this, w, v);
};
di = function(e, t) {
  const i = this.maskElement.getBoundingClientRect(), n = this.imageElement.getBoundingClientRect(), a = f(this, u, oe).call(this, i.left + i.width - n.width, 0).left, o = f(this, u, oe).call(this, i.left, 0).left, s = f(this, u, oe).call(this, 0, i.top + i.height - n.height).top, c = f(this, u, oe).call(this, 0, i.top).top;
  t = U(t, a, o), e = U(e, s, c), this.imageElement.style.left = `${t}px`, this.imageElement.style.top = `${e}px`;
};
ra = function() {
  const e = { x1: 0, y1: 0, x2: 0, y2: 0 }, t = this.maskElement.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
  return e.x1 = (t.left - i.left) / i.width, e.y1 = (t.top - i.top) / i.height, e.x2 = Math.abs((t.right - i.right) / i.width), e.y2 = Math.abs((t.bottom - i.bottom) / i.height), e;
};
oe = function(e, t) {
  const i = this.viewportElement.getBoundingClientRect();
  return {
    left: e - i.left,
    top: t - i.top
  };
};
la = function() {
  if (!this.value) return;
  const { x1: e, x2: t, y1: i, y2: n } = f(this, u, ra).call(this);
  this.value = {
    ...this.value,
    coordinates: { x1: e, x2: t, y1: i, y2: n }
  }, this.dispatchEvent(new st());
};
pa = function() {
  this.dispatchEvent(new st());
};
ca = function() {
  this.value && (delete this.value.coordinates, this.dispatchEvent(new st()));
};
da = function(e) {
  const t = e.target;
  this.zoom = Number(t.value);
};
Mt = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
j.styles = q`
		:host {
			display: grid;
			grid-template-rows: 1fr auto auto;
			gap: var(--uui-size-space-3);
			height: 100%;
			width: 100%;
		}
		#viewport {
			background-color: #fff;
			background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
			background-repeat: repeat;
			background-size: 10px 10px;
			contain: strict;
			overflow: hidden;
			position: relative;
			width: 100%;
			height: 100%;
			outline: 1px solid var(--uui-color-border);
			border-radius: var(--uui-border-radius);
		}
		#actions {
			display: flex;
			justify-content: flex-end;
			gap: var(--uui-size-space-1);
			margin-top: 0.5rem;
		}

		#mask {
			display: block;
			position: absolute;
			box-shadow: 0 0 0 2000px hsla(0, 0%, 100%, 0.8);
			pointer-events: none;
		}

		#image {
			display: block;
			position: absolute;
			user-select: none;
		}

		#viewport #image {
			cursor: move;
		}

		#slider {
			width: 100%;
			height: 0px; /* TODO: FIX - This is needed to prevent the slider from taking up more space than needed */
			min-height: 22px; /* TODO: FIX - This is needed to prevent the slider from taking up more space than needed */
		}
	`;
ae([
  L("#viewport")
], j.prototype, "viewportElement", 2);
ae([
  L("#mask")
], j.prototype, "maskElement", 2);
ae([
  L("#image")
], j.prototype, "imageElement", 2);
ae([
  l({ type: Object, attribute: !1 })
], j.prototype, "value", 2);
ae([
  l({ type: String })
], j.prototype, "src", 2);
ae([
  l({ attribute: !1 })
], j.prototype, "focalPoint", 2);
ae([
  l({ type: Number })
], j.prototype, "zoom", 1);
ae([
  p()
], j.prototype, "_zoom", 2);
j = ae([
  I("umb-image-cropper")
], j);
class ui extends Event {
  static {
    this.TYPE = "focalpoint-change";
  }
  constructor(t, i) {
    super(ui.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...i }), this.focalPoint = t;
  }
}
var bo = Object.defineProperty, ko = Object.getOwnPropertyDescriptor, ua = (e) => {
  throw TypeError(e);
}, Q = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ko(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && bo(t, i, a), a;
}, hi = (e, t, i) => t.has(e) || ua("Cannot " + i), ge = (e, t, i) => (hi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Pt = (e, t, i) => t.has(e) ? ua("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $o = (e, t, i, n) => (hi(e, t, "write to private field"), t.set(e, i), i), $ = (e, t, i) => (hi(e, t, "access private method"), i), me, it, _, ha, ma, va, Pe, mi, fa, vi, Nt, ga;
let R = class extends X {
  constructor() {
    super(...arguments), Pt(this, _), this._isDraggingGridHandle = !1, this.coords = { x: 0, y: 0 }, Pt(this, me, { left: 0.5, top: 0.5 }), this.hideFocalPoint = !1, this.disabled = !1, Pt(this, it, 8);
  }
  set focalPoint(e) {
    $o(this, me, e), $(this, _, mi).call(this, ge(this, me).left, ge(this, me).top), $(this, _, ma).call(this);
  }
  get focalPoint() {
    return ge(this, me);
  }
  update(e) {
    super.update(e), e.has("src") && this.src && $(this, _, ha).call(this);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.style.setProperty("--dot-radius", `${ge(this, it)}px`);
  }
  render() {
    return this.src ? r`
			<div id="wrapper" @mousedown=${$(this, _, Nt)} @touchstart=${$(this, _, Nt)}>
				<img id="image" @keydown=${() => x} src=${this.src} alt="" />
				<span
					id="focal-point"
					class=${Jn({
      "focal-point--dragging": this._isDraggingGridHandle,
      hidden: this.hideFocalPoint
    })}
					tabindex=${et(this.disabled ? void 0 : "0")}
					aria-label="${this.localize.term("general_focalPoint")}"
					@keydown=${$(this, _, ga)}>
				</span>
			</div>
		` : x;
  }
};
me = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
ha = async function() {
  await this.updateComplete, this.hideFocalPoint || $(this, _, mi).call(this, this.focalPoint.left, this.focalPoint.top), this.imageElement.onload = () => {
    if (!this.imageElement || !this.wrapperElement) return;
    const e = this.imageElement.naturalWidth / this.imageElement.naturalHeight, t = this.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
    i.width > t.width && (this.imageElement.style.width = "100%"), i.height > t.height && (this.imageElement.style.height = "100%"), $(this, _, vi).call(this), this.imageElement.style.aspectRatio = `${e}`, this.wrapperElement.style.aspectRatio = `${e}`;
  };
};
ma = function() {
  $(this, _, fa).call(this, ge(this, me)) && $(this, _, vi).call(this);
};
va = function(e, t) {
  const i = t / 100 / t * 50, n = e / 100 / e * 50;
  return { top: i, left: n };
};
Pe = function(e, t, i, n) {
  const a = U(e / i, 0, 1), o = U(t / n, 0, 1);
  $(this, _, va).call(this, e, t);
  const s = { left: a, top: o };
  this.dispatchEvent(new ui(s));
};
mi = function(e, t) {
  this.focalPointElement && (this.focalPointElement.style.left = `calc(${e * 100}% - ${ge(this, it)}px)`, this.focalPointElement.style.top = `calc(${t * 100}% - ${ge(this, it)}px)`);
};
fa = function(e) {
  if (this.focalPoint)
    return e.left === 0.5 && e.top === 0.5;
};
vi = function() {
  this.imageElement && (this.coords.x = this.imageElement?.clientWidth / 2, this.coords.y = this.imageElement.clientHeight / 2);
};
Nt = function(e) {
  if (this.disabled || this.hideFocalPoint) return;
  const t = this.wrapperElement, i = this.focalPointElement;
  if (!t) return;
  const { width: n, height: a } = t.getBoundingClientRect();
  i?.focus(), e.preventDefault(), e.stopPropagation(), this._isDraggingGridHandle = !0, go(t, {
    onMove: (o, s) => {
      isNaN(o) || isNaN(s) || (this.coords.x = o, this.coords.y = s, $(this, _, Pe).call(this, o, s, n, a));
    },
    onStop: () => this._isDraggingGridHandle = !1,
    initialEvent: e
  });
};
ga = function(e) {
  if (this.disabled || this.hideFocalPoint) return;
  const t = e.shiftKey ? 1 : 10, i = this.wrapperElement;
  if (!i) return;
  const { width: n, height: a } = i.getBoundingClientRect();
  e.key === "ArrowLeft" && (e.preventDefault(), this.coords.x = U(this.coords.x - t, 0, n), $(this, _, Pe).call(this, this.coords.x, this.coords.y, n, a)), e.key === "ArrowRight" && (e.preventDefault(), this.coords.x = U(this.coords.x + t, 0, n), $(this, _, Pe).call(this, this.coords.x, this.coords.y, n, a)), e.key === "ArrowUp" && (e.preventDefault(), this.coords.y = U(this.coords.y - t, 0, a), $(this, _, Pe).call(this, this.coords.x, this.coords.y, n, a)), e.key === "ArrowDown" && (e.preventDefault(), this.coords.y = U(this.coords.y + t, 0, a), $(this, _, Pe).call(this, this.coords.x, this.coords.y, n, a));
};
R.styles = q`
		:host {
			display: flex;
			width: 100%;
			height: 100%;
			position: relative;
			user-select: none;
			background-color: var(--uui-color-surface);
			outline: 1px solid var(--uui-color-border);
		}
		/* Wrapper is used to make the focal point position responsive to the image size */
		#wrapper {
			position: relative;
			display: flex;
			margin: auto;
			max-width: 100%;
			max-height: 100%;
			box-sizing: border-box;
			forced-color-adjust: none;
		}
		:host(:not([hidefocalpoint])) #wrapper {
			cursor: crosshair;
		}
		#image {
			margin: auto;
			position: relative;
		}
		#focal-point {
			content: '';
			display: block;
			position: absolute;
			width: calc(2 * var(--dot-radius));
			height: calc(2 * var(--dot-radius));
			top: 0;
			box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
			border: solid 2px white;
			border-radius: 50%;
			pointer-events: none;
			background-color: var(--uui-palette-spanish-pink-light);
			transition: 150ms transform;
			box-sizing: inherit;
		}
		.focal-point--dragging {
			cursor: none;
			transform: scale(1.5);
		}
		#focal-point.hidden {
			display: none;
		}
	`;
Q([
  L("#image")
], R.prototype, "imageElement", 2);
Q([
  L("#wrapper")
], R.prototype, "wrapperElement", 2);
Q([
  L("#focal-point")
], R.prototype, "focalPointElement", 2);
Q([
  p()
], R.prototype, "_isDraggingGridHandle", 2);
Q([
  p()
], R.prototype, "coords", 2);
Q([
  l({ attribute: !1 })
], R.prototype, "focalPoint", 1);
Q([
  l({ type: Boolean })
], R.prototype, "hideFocalPoint", 2);
Q([
  l({ type: Boolean, reflect: !0 })
], R.prototype, "disabled", 2);
Q([
  l({ type: String })
], R.prototype, "src", 2);
R = Q([
  I("umb-image-cropper-focus-setter")
], R);
var Mo = Object.defineProperty, Eo = Object.getOwnPropertyDescriptor, _a = (e) => {
  throw TypeError(e);
}, be = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Eo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Mo(t, i, a), a;
}, fi = (e, t, i) => t.has(e) || _a("Cannot " + i), Bt = (e, t, i) => (fi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Gi = (e, t, i) => t.has(e) ? _a("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), To = (e, t, i, n) => (fi(e, t, "write to private field"), t.set(e, i), i), jt = (e, t, i) => (fi(e, t, "access private method"), i), qe, Xe, xa, gi;
let ee = class extends X {
  constructor() {
    super(...arguments), Gi(this, Xe), this.src = "", Gi(this, qe, { left: 0.5, top: 0.5 });
  }
  get focalPoint() {
    return Bt(this, qe);
  }
  set focalPoint(e) {
    To(this, qe, e), jt(this, Xe, gi).call(this);
  }
  connectedCallback() {
    super.connectedCallback(), jt(this, Xe, xa).call(this);
  }
  render() {
    return this.crop ? r`
			<div id="container">
				<img id="image" src=${this.src} alt="" />
			</div>
			<span id="alias">
				${this.crop.label !== void 0 ? this.localize.string(this.crop.label) : this.label ?? this.crop.alias}
			</span>
			<span id="dimensions">${this.crop.width} x ${this.crop.height}</span>
			${this.crop.coordinates ? r`<span id="user-defined"><umb-localize key="imagecropper_customCrop">User defined</umb-localize></span>` : x}
		` : r`<span id="label">${this.label}</span>`;
  }
};
qe = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakSet();
xa = async function() {
  if (!this.crop) return;
  await this.updateComplete, await new Promise((w) => this.imageElement.onload = () => w(this.imageElement));
  const e = this.imageContainerElement.getBoundingClientRect(), t = this.crop.width / this.crop.height, i = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
  let n = 0, a = 0, o = 0, s = 0, c = 0, v = 0;
  if (t > 1 ? (n = e.width, a = e.width / t) : (n = e.height * t, a = e.height), this.crop.coordinates) {
    if (t > 1) {
      const w = this.crop.coordinates.x1 + this.crop.coordinates.x2;
      o = _t(n, w), s = o / i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    } else {
      const w = this.crop.coordinates.y1 + this.crop.coordinates.y2;
      s = _t(a, w), o = s * i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    }
    v = v / a * 100, c = c / n * 100, this.imageElement.style.top = `${v}%`, this.imageElement.style.left = `${c}%`;
  } else
    i > t ? (s = a, o = s * i) : (o = n, s = o / i), jt(this, Xe, gi).call(this, o, s, n, a);
  this.imageContainerElement.style.width = `${n}px`, this.imageContainerElement.style.aspectRatio = `${t}`, o = o / n * 100, s = s / a * 100, this.imageElement.style.width = `${o}%`, this.imageElement.style.height = `${s}%`;
};
gi = function(e, t, i, n) {
  if (!this.crop || !this.imageElement || !this.imageContainerElement || this.crop.coordinates) return;
  if (!e || !t) {
    const s = this.imageElement.getBoundingClientRect();
    e = s.width, t = s.height;
  }
  if (!i || !n) {
    const s = this.imageContainerElement.getBoundingClientRect();
    i = s.width, n = s.height;
  }
  let a = i / 2 - e * Bt(this, qe).left, o = n / 2 - t * Bt(this, qe).top;
  a = U(a, i - e, 0), o = U(o, n - t, 0), a = a / i * 100, o = o / n * 100, this.imageElement.style.top = `${o}%`, this.imageElement.style.left = `${a}%`;
};
ee.styles = q`
		:host {
			display: flex;
			flex-direction: column;
			padding: var(--uui-size-space-4);
			border-radius: var(--uui-border-radius);
			background-color: var(--uui-color-surface);
			cursor: pointer;
		}
		:host(:hover) {
			background-color: var(--uui-color-surface-alt);
		}
		#container {
			display: flex;
			width: 100%;
			aspect-ratio: 1;
			overflow: hidden;
			position: relative;
			overflow: hidden;
			margin: auto;
			max-width: 100%;
			max-height: 200px;
			user-select: none;
		}
		#label {
			font-weight: bold;
		}
		#alias {
			font-weight: bold;
			margin-top: var(--uui-size-space-3);
		}
		#dimensions,
		#user-defined {
			font-size: 0.8em;
		}
		#image {
			position: absolute;
			pointer-events: none;
		}
	`;
be([
  L("#image")
], ee.prototype, "imageElement", 2);
be([
  L("#container")
], ee.prototype, "imageContainerElement", 2);
be([
  l({ type: Object, attribute: !1 })
], ee.prototype, "crop", 2);
be([
  l({ type: String, attribute: !1 })
], ee.prototype, "src", 2);
be([
  l({ type: String })
], ee.prototype, "label", 2);
be([
  l({ attribute: !1 })
], ee.prototype, "focalPoint", 1);
ee = be([
  I("umb-image-cropper-preview")
], ee);
var Po = Object.defineProperty, Co = Object.getOwnPropertyDescriptor, ya = (e) => {
  throw TypeError(e);
}, ne = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Co(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Po(t, i, a), a;
}, _i = (e, t, i) => t.has(e) || ya("Cannot " + i), Ct = (e, t, i) => (_i(e, t, "read from private field"), i ? i.call(e) : t.get(e)), lt = (e, t, i) => t.has(e) ? ya("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Lt = (e, t, i, n) => (_i(e, t, "write to private field"), t.set(e, i), i), zt = (e, t, i) => (_i(e, t, "access private method"), i), Ce, Ht, Gt, Le, mt;
let F = class extends X {
  constructor() {
    super(...arguments), lt(this, Le), lt(this, Ce), this.crops = [], this.focalPoint = { left: 0.5, top: 0.5 }, this.hideFocalPoint = !1, this.src = "", lt(this, Ht, (e) => {
      const i = e.target.value;
      if (!i) return;
      const n = this.crops.findIndex((a) => a.alias === i.alias);
      n !== void 0 && (this.crops[n] = i, this.currentCrop = void 0, zt(this, Le, mt).call(this));
    }), lt(this, Gt, (e) => {
      this.focalPoint = { top: e.focalPoint.top, left: e.focalPoint.left }, zt(this, Le, mt).call(this);
    }), this.onResetFocalPoint = () => {
      this.focalPoint = { left: 0.5, top: 0.5 }, zt(this, Le, mt).call(this);
    };
  }
  set value(e) {
    e ? (this.crops = [...e.crops], this.focalPoint = e.focalPoint || { left: 0.5, top: 0.5 }, this.src = e.src, Lt(this, Ce, e)) : (this.crops = [], this.focalPoint = { left: 0.5, top: 0.5 }, this.src = "", Lt(this, Ce, void 0)), this.requestUpdate();
  }
  get value() {
    return Ct(this, Ce);
  }
  get source() {
    return this.fileDataUrl ? this.fileDataUrl : this.src ? this.src : "";
  }
  updated(e) {
    if (super.updated(e), e.has("file"))
      if (this.file) {
        const t = new FileReader();
        t.onload = (i) => {
          this.fileDataUrl = i.target?.result;
        }, t.readAsDataURL(this.file);
      } else
        this.fileDataUrl = void 0;
  }
  onCropClick(e) {
    const t = this.crops.findIndex((i) => i.alias === e.alias);
    t !== -1 && (this.currentCrop = { ...this.crops[t] });
  }
  render() {
    return r`
			<div id="main">${this.renderMain()}</div>
			<div id="side">${this.renderSide()}</div>
		`;
  }
  renderMain() {
    return this.currentCrop ? r`
				<umb-image-cropper
					.focalPoint=${this.focalPoint}
					.src=${this.source}
					.value=${this.currentCrop}
					?hideFocalPoint=${this.hideFocalPoint}
					@imagecrop-change=${Ct(this, Ht)}>
				</umb-image-cropper>
			` : r`
			<umb-image-cropper-focus-setter
				.focalPoint=${this.focalPoint}
				.src=${this.source}
				?hideFocalPoint=${this.hideFocalPoint}
				@focalpoint-change=${Ct(this, Gt)}>
			</umb-image-cropper-focus-setter>
			<div id="actions">${this.renderActions()}</div>
		`;
  }
  renderActions() {
    return r`<slot name="actions"></slot>
			${he(
      !this.hideFocalPoint,
      () => r`<uui-button
						label=${this.localize.term("content_resetFocalPoint")}
						@click=${this.onResetFocalPoint}></uui-button>`
    )} `;
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return le(
        this.crops,
        (e) => e.alias + JSON.stringify(e.coordinates),
        (e) => r` <umb-image-cropper-preview
					@click=${() => this.onCropClick(e)}
					.crop=${e}
					.focalPoint=${this.focalPoint}
					.src=${this.source}></umb-image-cropper-preview>`
      );
  }
};
Ce = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
Gt = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakSet();
mt = function() {
  Lt(this, Ce, {
    crops: [...this.crops],
    focalPoint: this.focalPoint,
    src: this.src
  }), this.dispatchEvent(new C());
};
F.styles = q`
		:host {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			gap: var(--uui-size-space-3);
			height: 400px;
		}

		#main {
			max-width: 500px;
			min-width: 300px;
			width: 100%;
			height: 100%;
			display: flex;
			gap: var(--uui-size-space-1);
			flex-direction: column;
		}

		#actions {
			display: flex;
			justify-content: space-between;
			margin-top: 0.5rem;
		}

		umb-image-cropper-focus-setter {
			height: calc(100% - 33px - var(--uui-size-space-1)); /* Temp solution to make room for actions */
		}

		#side {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			gap: var(--uui-size-space-3);
			flex-grow: 1;
			overflow-y: auto;
			height: fit-content;
			max-height: 100%;
		}
	`;
ne([
  l({ attribute: !1 })
], F.prototype, "value", 1);
ne([
  p()
], F.prototype, "crops", 2);
ne([
  p()
], F.prototype, "currentCrop", 2);
ne([
  l({ attribute: !1 })
], F.prototype, "file", 2);
ne([
  l()
], F.prototype, "fileDataUrl", 2);
ne([
  p()
], F.prototype, "focalPoint", 2);
ne([
  l({ type: Boolean })
], F.prototype, "hideFocalPoint", 2);
ne([
  p()
], F.prototype, "src", 2);
F = ne([
  I("umb-image-cropper-field")
], F);
var zo = Object.getOwnPropertyDescriptor, wa = (e) => {
  throw TypeError(e);
}, qo = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? zo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = s(a) || a);
  return a;
}, Io = (e, t, i) => t.has(e) || wa("Cannot " + i), So = (e, t, i) => t.has(e) ? wa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Uo = (e, t, i) => (Io(e, t, "access private method"), i), Vt, ba;
let Yt = class extends F {
  constructor() {
    super(...arguments), So(this, Vt);
  }
  renderActions() {
    return r`
			<slot name="actions"></slot>
			${he(
      !this.hideFocalPoint,
      () => r`
					<uui-button
						compact
						id="reset-focal-point"
						label=${this.localize.term("content_resetFocalPoint")}
						@click=${this.onResetFocalPoint}>
						<uui-icon name="icon-axis-rotation"></uui-icon>
						${this.localize.term("content_resetFocalPoint")}
					</uui-button>
				`
    )}
		`;
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return r` <umb-image-cropper-preview
				@click=${Uo(this, Vt, ba)}
				?active=${!this.currentCrop}
				.label=${this.localize.term("general_media")}></umb-image-cropper-preview>

			${le(
        this.crops,
        (e) => e.alias + JSON.stringify(e.coordinates),
        (e) => r`
					<umb-image-cropper-preview
						?active=${this.currentCrop?.alias === e.alias}
						@click=${() => this.onCropClick(e)}
						.crop=${e}
						.focalPoint=${this.focalPoint}
						.src=${this.source}></umb-image-cropper-preview>
				`
      )}`;
  }
};
Vt = /* @__PURE__ */ new WeakSet();
ba = function() {
  this.currentCrop = void 0;
};
Yt.styles = q`
		:host {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			gap: var(--uui-size-space-3);
			height: 400px;
		}

		#main {
			width: 100%;
			height: 100%;
			display: flex;
			gap: var(--uui-size-space-1);
			flex-direction: column;
		}

		#actions {
			display: flex;
			justify-content: space-between;
		}

		#reset-focal-point uui-icon {
			padding-right: var(--uui-size-3);
		}

		slot[name='actions'] {
			display: block;
			flex: 1;
		}

		#reset-current-crop[active],
		[active] {
			background-color: var(--uui-color-current);
		}

		umb-image-cropper-focus-setter {
			height: calc(100% - 33px - var(--uui-size-space-1)); /* Temp solution to make room for actions */
		}

		#side {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			flex: none;
			gap: var(--uui-size-space-3);
			flex-grow: 1;
			overflow-y: auto;
			height: fit-content;
			max-height: 100%;
		}
	`;
Yt = qo([
  I("umb-image-cropper-editor-field")
], Yt);
const xi = new Ae(
  "Umb.Modal.MediaPicker",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var Oo = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, ka = (e) => {
  throw TypeError(e);
}, pe = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ao(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Oo(t, i, a), a;
}, yi = (e, t, i) => t.has(e) || ka("Cannot " + i), $a = (e, t, i) => (yi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), qt = (e, t, i) => t.has(e) ? ka("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ro = (e, t, i, n) => (yi(e, t, "write to private field"), t.set(e, i), i), at = (e, t, i) => (yi(e, t, "access private method"), i), wi, xt, _e, bi, Ma, Ea, Ta;
let D = class extends oi {
  constructor() {
    super(), qt(this, _e), qt(this, wi, new Yn(this)), this._key = "", this._unique = "", this._hideFocalPoint = !1, this._crops = [], this._editMediaPath = "", qt(this, xt), this.consumeContext(Xi, (e) => {
      Ro(this, xt, e);
    }), new si(this, Qi).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((e) => {
      this._editMediaPath = e({});
    });
  }
  connectedCallback() {
    super.connectedCallback(), this._key = this.data?.key ?? "", this._unique = this.data?.unique ?? "", this._hideFocalPoint = this.data?.hideFocalPoint ?? !1, this._crops = this.data?.cropOptions ?? [], this._pickableFilter = this.data?.pickableFilter, at(this, _e, bi).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectMedia")}>
				${at(this, _e, Ta).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
wi = /* @__PURE__ */ new WeakMap();
xt = /* @__PURE__ */ new WeakMap();
_e = /* @__PURE__ */ new WeakSet();
bi = async function() {
  const { data: e } = await $a(this, wi).requestItems([this._unique]), t = e?.[0];
  if (!t?.url) return;
  const i = this._crops.map((a) => {
    const o = this.value.crops?.find((s) => s.alias === a.alias);
    return o ? { ...a, ...o } : a;
  }), n = {
    ...this.value,
    src: t.url,
    crops: i,
    focalPoint: this.value.focalPoint ?? { left: 0.5, top: 0.5 }
  };
  this._imageCropperValue = n;
};
Ma = async function() {
  const t = await $a(this, xt)?.open(this, xi, {
    data: { multiple: !1, pickableFilter: this._pickableFilter },
    value: { selection: [this._unique] }
  })?.onSubmit().catch(() => null);
  if (!t) return;
  const i = t.selection[0];
  if (!i)
    throw new Error("No media selected");
  this._unique = i, this.value = { ...this.value, unique: this._unique }, at(this, _e, bi).call(this);
};
Ea = function(e) {
  const t = e.target.value;
  t && (this._imageCropperValue && (this._imageCropperValue.crops = t.crops, this._imageCropperValue.focalPoint = t.focalPoint), this.value = { key: this._key, unique: this._unique, crops: t.crops, focalPoint: t.focalPoint });
};
Ta = function() {
  return r`
			<div id="layout">
				<umb-image-cropper-editor-field
					.value=${this._imageCropperValue}
					?hideFocalPoint=${this._hideFocalPoint}
					@change=${at(this, _e, Ea)}>
					<div id="actions" slot="actions">
						<uui-button compact @click=${at(this, _e, Ma)} label=${this.localize.term("mediaPicker_changeMedia")}>
							<uui-icon name="icon-search"></uui-icon>${this.localize.term("mediaPicker_changeMedia")}
						</uui-button>
						<uui-button
							compact
							href=${this._editMediaPath + "edit/" + this._unique}
							label=${this.localize.term("mediaPicker_openMedia")}>
							<uui-icon name="icon-out"></uui-icon>${this.localize.term("mediaPicker_openMedia")}
						</uui-button>
					</div>
				</umb-image-cropper-editor-field>
			</div>
		`;
};
D.styles = [
  q`
			#layout {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			umb-image-cropper-editor-field {
				flex-grow: 1;
			}

			#actions {
				display: inline-flex;
				gap: var(--uui-size-space-3);
			}
			uui-icon {
				padding-right: var(--uui-size-3);
			}

			#options {
				display: flex;
				justify-content: center;
			}

			img {
				max-width: 80%;
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
pe([
  p()
], D.prototype, "_imageCropperValue", 2);
pe([
  p()
], D.prototype, "_key", 2);
pe([
  p()
], D.prototype, "_unique", 2);
pe([
  p()
], D.prototype, "_hideFocalPoint", 2);
pe([
  p()
], D.prototype, "_crops", 2);
pe([
  p()
], D.prototype, "_editMediaPath", 2);
pe([
  p()
], D.prototype, "_pickableFilter", 2);
D = pe([
  I("umb-image-cropper-editor-modal")
], D);
const Fo = D, sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbImageCropperEditorModalElement() {
    return D;
  },
  default: Fo
}, Symbol.toStringTag, { value: "Module" })), Do = new Ae("Umb.Modal.ImageCropperEditor", {
  modal: {
    type: "sidebar",
    size: "full"
  }
}), rr = new Ae("Umb.Modal.MediaCaptionAltText", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), te = "media", rt = "media-root", lr = "umb-media-placeholder";
class Wo {
  #e;
  /**
   * Creates an instance of UmbMediaServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Creates a new Media scaffold
   * @param {Partial<UmbMediaDetailModel>} [preset]
   * @returns { UmbMediaDetailModel }
   * @memberof UmbMediaServerDataSource
   */
  async createScaffold(t = {}) {
    return { data: {
      entityType: te,
      unique: Re.new(),
      urls: [],
      mediaType: {
        unique: "",
        collection: null,
        icon: null
      },
      isTrashed: !1,
      values: [],
      variants: [
        {
          culture: null,
          segment: null,
          name: "",
          createDate: null,
          updateDate: null
        }
      ],
      ...t
    } };
  }
  /**
   * Fetches a Media with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: i, error: n } = await Te(this.#e, V.getMediaById({ id: t }));
    return n || !i ? { error: n } : { data: {
      entityType: te,
      unique: i.id,
      values: i.values,
      variants: i.variants.map((o) => ({
        state: null,
        culture: o.culture || null,
        segment: o.segment || null,
        name: o.name,
        createDate: o.createDate,
        updateDate: o.updateDate
      })),
      urls: i.urls,
      mediaType: {
        unique: i.mediaType.id,
        collection: i.mediaType.collection ? { unique: i.mediaType.collection.id } : null,
        icon: i.mediaType.icon
      },
      isTrashed: i.isTrashed
    } };
  }
  /**
   * Inserts a new Media on the server
   * @param {UmbMediaDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async create(t, i = null) {
    if (!t) throw new Error("Media is missing");
    if (!t.unique) throw new Error("Media unique is missing");
    const n = {
      id: t.unique,
      parent: i ? { id: i } : null,
      mediaType: { id: t.mediaType.unique },
      values: t.values,
      variants: t.variants.map((s) => ({
        culture: s.culture || null,
        segment: s.segment || null,
        name: s.name
      }))
    }, { data: a, error: o } = await Te(
      this.#e,
      V.postMedia({
        requestBody: n
      })
    );
    return a ? this.read(a) : { error: o };
  }
  /**
   * Updates a Media on the server
   * @param {UmbMediaDetailModel} Media
   * @param model
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const i = {
      values: t.values,
      variants: t.variants
    }, { error: n } = await Te(
      this.#e,
      V.putMediaById({
        id: t.unique,
        requestBody: i
      })
    );
    return n ? { error: n } : this.read(t.unique);
  }
  /**
   * Deletes a Media on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    return Te(this.#e, V.deleteMediaById({ id: t }));
  }
}
const No = new we("UmbMediaDetailStore");
class Ie extends po {
  constructor(t) {
    super(t, Wo, No);
  }
}
const pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaDetailRepository: Ie,
  api: Ie,
  default: Ie
}, Symbol.toStringTag, { value: "Module" }));
class Vi extends co {
  #e;
  /**
   * Creates an instance of UmbMediaItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaItemServerDataSource
   */
  constructor(t) {
    super(t, {
      getItems: Bo,
      mapper: Yi
    }), this.#e = t;
  }
  /**
   * @deprecated - The search method will be removed in v17. Use the
   * Use the UmbMediaSearchProvider instead.
   * Get it from:
   * ```ts
   * import { UmbMediaSearchProvider } from '@umbraco-cms/backoffice/media';
   * ```
   */
  async search({ query: t, skip: i, take: n }) {
    const { data: a, error: o } = await Te(
      this.#e,
      V.getItemMediaSearch({ query: t, skip: i, take: n })
    );
    return { data: a?.items.map((c) => Yi(c)), error: o };
  }
}
const Bo = (e) => V.getItemMedia({ id: e }), Yi = (e) => ({
  entityType: te,
  hasChildren: e.hasChildren,
  isTrashed: e.isTrashed,
  unique: e.id,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  name: e.variants[0]?.name,
  // TODO: get correct variant name
  parent: e.parent ? { unique: e.parent.id } : null,
  variants: e.variants.map((t) => ({
    culture: t.culture || null,
    name: t.name
  }))
}), jo = new we("UmbMediaItemStore");
class Kt extends uo {
  #e;
  constructor(t) {
    super(t, Vi, jo), this.#e = new Vi(this);
  }
  /**
   * @param root0
   * @param root0.query
   * @param root0.skip
   * @param root0.take
   * @deprecated - The search method will be removed in v17. Use the
   * Use the UmbMediaSearchProvider instead.
   * Get it from:
   * ```ts
   * import { UmbMediaSearchProvider } from '@umbraco-cms/backoffice/media';
   */
  async search({ query: t, skip: i, take: n }) {
    return this.#e.search({ query: t, skip: i, take: n });
  }
}
const cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaItemRepository: Kt,
  default: Kt
}, Symbol.toStringTag, { value: "Module" }));
class Lo extends Hn {
  /**
   * Creates an instance of UmbMediaTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: Pa,
      getChildrenOf: Ho,
      getAncestorsOf: Go,
      mapper: Vo
    });
  }
}
const Pa = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  V.getTreeMediaRoot({ dataTypeId: e.dataType?.unique, skip: e.skip, take: e.take })
), Ho = (e) => e.parent.unique === null ? Pa(e) : V.getTreeMediaChildren({
  parentId: e.parent.unique,
  dataTypeId: e.dataType?.unique,
  skip: e.skip,
  take: e.take
}), Go = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  V.getTreeMediaAncestors({
    descendantId: e.treeItem.unique
  })
), Vo = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? te : rt
  },
  entityType: te,
  hasChildren: e.hasChildren,
  noAccess: e.noAccess,
  isTrashed: e.isTrashed,
  isFolder: !1,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null
  })),
  createDate: e.createDate
}), Yo = new we("UmbMediaTreeStore");
class yt extends Gn {
  constructor(t) {
    super(t, Lo, Yo);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: rt,
      name: "#treeHeaders_media",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
const dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaTreeRepository: yt,
  default: yt
}, Symbol.toStringTag, { value: "Module" }));
var Ko = Object.defineProperty, Xo = Object.getOwnPropertyDescriptor, Ca = (e) => {
  throw TypeError(e);
}, Fe = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Xo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Ko(t, i, a), a;
}, za = (e, t, i) => t.has(e) || Ca("Cannot " + i), Xt = (e, t, i) => (za(e, t, "read from private field"), i ? i.call(e) : t.get(e)), It = (e, t, i) => t.has(e) ? Ca("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ne = (e, t, i) => (za(e, t, "access private method"), i), ki, wt, ue, Qt, qa, Ia, Sa;
const vt = { name: "Media", unique: null, entityType: rt };
let re = class extends X {
  constructor() {
    super(...arguments), It(this, ue), It(this, ki, new yt(this)), It(this, wt, new Ie(this)), this.startNode = vt, this._currentMedia = vt, this._paths = [vt], this._typingNewFolder = !1;
  }
  set currentMedia(e) {
    e !== this._currentMedia && (this._currentMedia = e, Ne(this, ue, Qt).call(this));
  }
  get currentMedia() {
    return this._currentMedia;
  }
  firstUpdated(e) {
    super.firstUpdated(e), Ne(this, ue, Qt).call(this);
  }
  render() {
    return r`<div id="path">
			${le(
      this._paths,
      (e) => e.unique,
      (e) => r`<uui-button
							compact
							.label=${e.name}
							?disabled=${this.currentMedia.unique === e.unique}
							@click=${() => Ne(this, ue, qa).call(this, e)}></uui-button
						>/`
    )}${this._typingNewFolder ? r`<uui-input
						id="new-folder"
						label="enter a name"
						value="new folder name"
						@blur=${Ne(this, ue, Sa)}
						auto-width></uui-input>` : r`<uui-button label="add folder" compact @click=${Ne(this, ue, Ia)}>+</uui-button>`}
		</div>`;
  }
};
ki = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
ue = /* @__PURE__ */ new WeakSet();
Qt = async function() {
  const e = this._currentMedia.unique, t = this._currentMedia.entityType, n = (e ? (await Xt(this, ki).requestTreeItemAncestors({
    treeItem: { unique: e, entityType: t }
  })).data || [] : []).map((a) => ({
    name: a.name,
    unique: a.unique,
    entityType: a.entityType
  }));
  this.startNode || n.unshift(vt), this._paths = [...n];
};
qa = function(e) {
  this._paths = [...this._paths].slice(0, this._paths.findIndex((t) => t.unique === e.unique) + 1), this.currentMedia = e, this.dispatchEvent(new C());
};
Ia = function() {
  this._typingNewFolder = !0, requestAnimationFrame(() => {
    const e = this.getHostElement().shadowRoot.querySelector("#new-folder");
    e.focus(), e.select();
  });
};
Sa = async function(e) {
  e.stopPropagation();
  const t = e.target.value;
  if (this._typingNewFolder = !1, !t) return;
  const i = Re.new(), n = this._paths[this._paths.length - 1].unique, a = {
    unique: i,
    mediaType: {
      unique: oo(),
      collection: null
    },
    variants: [
      {
        culture: null,
        segment: null,
        name: t,
        createDate: null,
        updateDate: null
      }
    ]
  }, { data: o } = await Xt(this, wt).createScaffold(a);
  if (!o) return;
  const { data: s } = await Xt(this, wt).create(o, n);
  if (!s) return;
  const c = s.variants[0].name, v = s.unique, w = s.entityType;
  this._paths = [...this._paths, { name: c, unique: v, entityType: w }], this.currentMedia = { name: c, unique: v, entityType: w }, this.dispatchEvent(new C());
};
re.styles = [
  q`
			#path {
				display: flex;
				align-items: center;
				margin: 0 var(--uui-size-3);
			}
			#path uui-button {
				font-weight: bold;
			}
			#path uui-input {
				height: 100%;
			}
		`
];
Fe([
  l({ attribute: !1 })
], re.prototype, "startNode", 2);
Fe([
  l({ attribute: !1 })
], re.prototype, "currentMedia", 1);
Fe([
  p()
], re.prototype, "_currentMedia", 2);
Fe([
  p()
], re.prototype, "_paths", 2);
Fe([
  p()
], re.prototype, "_typingNewFolder", 2);
re = Fe([
  I("umb-media-picker-folder-path")
], re);
var Qo = Object.defineProperty, Jo = Object.getOwnPropertyDescriptor, Ua = (e) => {
  throw TypeError(e);
}, Tt = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Jo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Qo(t, i, a), a;
}, Oa = (e, t, i) => t.has(e) || Ua("Cannot " + i), Aa = (e, t, i) => (Oa(e, t, "read from private field"), i ? i.call(e) : t.get(e)), St = (e, t, i) => t.has(e) ? Ua("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Jt = (e, t, i) => (Oa(e, t, "access private method"), i), $i, Mi, Qe, Ra, Fa, Da;
let Ue = class extends X {
  constructor() {
    super(...arguments), St(this, Qe), St(this, $i, new so(this)), St(this, Mi, new Ie(this)), this._node = null, this._popoverOpen = !1, this._allowedMediaTypes = [];
  }
  set node(e) {
    this._node = e, Jt(this, Qe, Fa).call(this);
  }
  get node() {
    return this._node;
  }
  render() {
    return r`
			<uui-button
				popovertarget="collection-action-menu-popover"
				label=${this.localize.term("actions_create")}
				color="default"
				look="outline">
				${this.localize.term("actions_create")}
				<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="collection-action-menu-popover"
				placement="bottom-start"
				@toggle=${Jt(this, Qe, Da)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${this._allowedMediaTypes.length ? le(
      this._allowedMediaTypes,
      (e) => e.unique,
      (e) => r`<uui-menu-item label=${e.name}>
											<umb-icon slot="icon" name=${e.icon ?? "icon-circle-dotted"}></umb-icon>
										</uui-menu-item>`
    ) : r`<div id="not-allowed">${this.localize.term("mediaPicker_notAllowed")}</div>`}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
$i = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakSet();
Ra = async function() {
  if (!this._node) return null;
  const { data: e } = await Aa(this, Mi).requestByUnique(this.node);
  return e?.mediaType.unique ?? null;
};
Fa = async function() {
  const e = await Jt(this, Qe, Ra).call(this), { data: t } = await Aa(this, $i).requestAllowedChildrenOf(e);
  this._allowedMediaTypes = t?.items ?? [];
};
Da = function(e) {
  this._popoverOpen = e.newState === "open";
};
Ue.styles = [
  q`
			#not-allowed {
				padding: var(--uui-size-space-3);
			}
		`
];
Tt([
  l()
], Ue.prototype, "node", 1);
Tt([
  p()
], Ue.prototype, "_popoverOpen", 2);
Tt([
  p()
], Ue.prototype, "_allowedMediaTypes", 2);
Ue = Tt([
  I("umb-media-picker-create-item")
], Ue);
class Zo {
  #e;
  /**
   * Creates an instance of UmbMediaSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaSearchServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Get a list of versions for a data
   * @param {UmbMediaSearchRequestArgs}args - The arguments for the search
   * @returns {*}
   * @memberof UmbMediaSearchServerDataSource
   */
  async search(t) {
    const { data: i, error: n } = await Te(
      this.#e,
      V.getItemMediaSearch({
        query: t.query,
        parentId: t.searchFrom?.unique || void 0,
        allowedMediaTypes: t.allowedContentTypes?.map((a) => a.unique)
      })
    );
    return i ? { data: { items: i.items.map((o) => ({
      entityType: te,
      hasChildren: o.hasChildren,
      href: "/section/media/workspace/media/edit/" + o.id,
      isTrashed: o.isTrashed,
      unique: o.id,
      mediaType: {
        collection: o.mediaType.collection ? { unique: o.mediaType.collection.id } : null,
        icon: o.mediaType.icon,
        unique: o.mediaType.id
      },
      name: o.variants[0]?.name,
      // TODO: get correct variant name
      parent: o.parent ? { unique: o.parent.id } : null,
      variants: o.variants.map((s) => ({
        culture: s.culture || null,
        name: s.name
      }))
    })), total: i.total } } : { error: n };
  }
}
class es extends ia {
  #e;
  constructor(t) {
    super(t), this.#e = new Zo(this);
  }
  search(t) {
    return this.#e.search(t);
  }
}
class Zt extends ia {
  #e = new es(this);
  async search(t) {
    return this.#e.search(t);
  }
  destroy() {
    this.#e.destroy();
  }
}
const ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaSearchProvider: Zt,
  api: Zt
}, Symbol.toStringTag, { value: "Module" }));
var ts = Object.defineProperty, is = Object.getOwnPropertyDescriptor, Wa = (e) => {
  throw TypeError(e);
}, O = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? is(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && ts(t, i, a), a;
}, Ei = (e, t, i) => t.has(e) || Wa("Cannot " + i), J = (e, t, i) => (Ei(e, t, "read from private field"), i ? i.call(e) : t.get(e)), de = (e, t, i) => t.has(e) ? Wa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), as = (e, t, i, n) => (Ei(e, t, "write to private field"), t.set(e, i), i), m = (e, t, i) => (Ei(e, t, "access private method"), i), Ti, ei, Pi, bt, Oe, d, De, Na, Ba, ja, Ci, La, zi, Ha, Ga, Va, Ya, Ka, Xa, Qa, Ja, Za, qi, en;
const tn = { name: "Media", unique: null, entityType: rt };
let k = class extends oi {
  constructor() {
    super(), de(this, d), de(this, Ti, new yt(this)), de(this, ei, new Kt(this)), de(this, Pi, new Zt(this)), de(this, bt), this._selectableFilter = () => !0, this._currentChildren = [], this._currentPage = 1, this._currentTotalPages = 0, this._searchResult = [], this._searchQuery = "", this._currentMediaEntity = tn, this._isSelectionMode = !1, this._searching = !1, de(this, Oe, /* @__PURE__ */ new Map()), de(this, zi, to(() => {
      m(this, d, La).call(this);
    }, 500)), this.consumeContext(mo, (e) => {
      this.observe(e.dataType, (t) => {
        as(this, bt, t);
      });
    });
  }
  async connectedCallback() {
    super.connectedCallback(), this.data?.pickableFilter && (this._selectableFilter = this.data?.pickableFilter);
  }
  async firstUpdated(e) {
    super.firstUpdated(e);
    const t = this.data?.startNode;
    if (t) {
      const { data: i } = await J(this, ei).requestItems([t.unique]);
      this._startNode = i?.[0], this._startNode && (this._currentMediaEntity = {
        name: this._startNode.name,
        unique: this._startNode.unique,
        entityType: this._startNode.entityType
      }, this._searchFrom = { unique: this._startNode.unique, entityType: this._startNode.entityType });
    }
    m(this, d, De).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_chooseMedia")}>
				${m(this, d, Xa).call(this)} ${m(this, d, en).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_choose")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
Ti = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
Pi = /* @__PURE__ */ new WeakMap();
bt = /* @__PURE__ */ new WeakMap();
Oe = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
De = async function() {
  const e = this._currentMediaEntity.entityType + this._currentMediaEntity.unique;
  let t = J(this, Oe).get(e);
  t || (t = new io(), t.setPageSize(100), J(this, Oe).set(e, t));
  const i = t.getSkip(), n = t.getPageSize(), { data: a } = await J(this, Ti).requestTreeItemsOf({
    parent: {
      unique: this._currentMediaEntity.unique,
      entityType: this._currentMediaEntity.entityType
    },
    dataType: J(this, bt),
    skip: i,
    take: n
  });
  this._currentChildren = a?.items ?? [], t.setTotalItems(a?.total ?? 0), this._currentPage = t.getCurrentPageNumber(), this._currentTotalPages = t.getTotalPages();
};
Na = function(e) {
  m(this, d, Ci).call(this), this._currentMediaEntity = {
    name: e.name,
    unique: e.unique,
    entityType: rt
  }, this._searchFrom = this._currentMediaEntity.unique ? { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : void 0, m(this, d, De).call(this);
};
Ba = function(e) {
  const t = this.data?.multiple ? [...this.value.selection, e.unique] : [e.unique];
  this._isSelectionMode = t.length > 0, this.modalContext?.setValue({ selection: t });
};
ja = function(e) {
  const t = this.value.selection.filter((i) => i !== e.unique);
  this._isSelectionMode = t.length > 0, this.modalContext?.setValue({ selection: t });
};
Ci = function() {
  this._searchQuery = "", this._searchResult = [];
};
La = async function() {
  if (!this._searchQuery) {
    m(this, d, Ci).call(this), this._searching = !1;
    return;
  }
  const e = this._searchQuery, { data: t } = await J(this, Pi).search({
    query: e,
    searchFrom: this._searchFrom,
    ...this.data?.search?.queryParams
  });
  if (!t) {
    this._searchResult = [], this._searching = !1;
    return;
  }
  this._searchResult = t.items, this._searching = !1;
};
zi = /* @__PURE__ */ new WeakMap();
Ha = function(e) {
  this._searchQuery = e.target.value.toLocaleLowerCase(), this._searching = !0, J(this, zi).call(this);
};
Ga = function(e) {
  const t = e.target;
  t.currentMedia ? this._currentMediaEntity = t.currentMedia : this._startNode ? this._currentMediaEntity = {
    name: this._startNode.name,
    unique: this._startNode.unique,
    entityType: this._startNode.entityType
  } : this._currentMediaEntity = tn, this._currentMediaEntity.unique ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0, m(this, d, De).call(this);
};
Va = function(e) {
  e.stopPropagation();
  const t = this._currentMediaEntity.entityType + this._currentMediaEntity.unique, i = J(this, Oe).get(t);
  if (!i)
    throw new Error("Pagination manager not found");
  i.setCurrentPageNumber(e.target.current), J(this, Oe).set(t, i), m(this, d, De).call(this);
};
Ya = function(e) {
  return ro(e.mediaType.unique) || e.hasChildren;
};
Ka = function(e) {
  e.target.checked ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0;
};
Xa = function() {
  return r`${m(this, d, Za).call(this)}
			<umb-dropzone
				id="dropzone"
				multiple
				@complete=${() => m(this, d, De).call(this)}
				.parentUnique=${this._currentMediaEntity.unique}></umb-dropzone>
			${this._searchQuery ? m(this, d, Qa).call(this) : m(this, d, Ja).call(this)} `;
};
Qa = function() {
  return r`
			${!this._searchResult.length && !this._searching ? r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>` : r`<div id="media-grid">
						${le(
    this._searchResult,
    (e) => e.unique,
    (e) => m(this, d, qi).call(this, e)
  )}
					</div>`}
		`;
};
Ja = function() {
  return r`
			${this._currentChildren.length ? r`<div id="media-grid">
							${le(
    this._currentChildren,
    (e) => e.unique,
    (e) => m(this, d, qi).call(this, e)
  )}
						</div>
						${this._currentTotalPages > 1 ? r`<uui-pagination
									.current=${this._currentPage}
									.total=${this._currentTotalPages}
									@change=${m(this, d, Va)}></uui-pagination>` : x}` : r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>`}
		`;
};
Za = function() {
  return r`
			<div id="toolbar">
				<div id="search">
					<uui-input
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}
						@input=${m(this, d, Ha)}
						value=${this._searchQuery}>
						<div slot="prepend">
							${this._searching ? r`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : r`<uui-icon name="search"></uui-icon>`}
						</div>
					</uui-input>

					${this._currentMediaEntity.unique && this._currentMediaEntity.unique !== this._startNode?.unique ? r`<uui-checkbox
								?checked=${this._searchFrom?.unique === this._currentMediaEntity.unique}
								@change=${m(this, d, Ka)}
								label="Search only in ${this._currentMediaEntity.name}"></uui-checkbox>` : x}
				</div>
				<uui-button
					@click=${() => this._dropzone.browse()}
					label=${this.localize.term("general_upload")}
					look="outline"
					color="default"></uui-button>
			</div>
		`;
};
qi = function(e) {
  const t = m(this, d, Ya).call(this, e), i = this._selectableFilter(e);
  return r`
			<uui-card-media
				class=${et(!(i || t) ? "not-allowed" : void 0)}
				.name=${e.name}
				data-mark="${e.entityType}:${e.unique}"
				@open=${() => m(this, d, Na).call(this, e)}
				@selected=${() => m(this, d, Ba).call(this, e)}
				@deselected=${() => m(this, d, ja).call(this, e)}
				?selected=${this.value?.selection?.find((a) => a === e.unique)}
				?selectable=${i}
				?select-only=${this._isSelectionMode || t === !1}>
				<umb-imaging-thumbnail
					unique=${e.unique}
					alt=${e.name}
					icon=${e.mediaType.icon}></umb-imaging-thumbnail>
			</uui-card-media>
		`;
};
en = function() {
  if (this._searchQuery && this._currentMediaEntity.unique && !this._searchFrom)
    return x;
  const e = this._startNode ? {
    entityType: this._startNode.entityType,
    unique: this._startNode.unique,
    name: this._startNode.name
  } : void 0;
  return r`<umb-media-picker-folder-path
			slot="footer-info"
			.currentMedia=${this._currentMediaEntity}
			.startNode=${e}
			@change=${m(this, d, Ga)}></umb-media-picker-folder-path>`;
};
k.styles = [
  q`
			#toolbar {
				display: flex;
				gap: var(--uui-size-6);
				align-items: flex-start;
				margin-bottom: var(--uui-size-3);
			}
			#search {
				flex: 1;
			}

			#search uui-input {
				width: 100%;
				margin-bottom: var(--uui-size-3);
			}

			#searching-indicator {
				margin-left: 7px;
				margin-top: 4px;
			}

			#media-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
				grid-auto-rows: 150px;
				gap: var(--uui-size-space-5);
				padding-bottom: 5px; /** The modal is a bit jumpy due to the img card focus/hover border. This fixes the issue. */
			}

			/** TODO: Remove this fix when UUI gets upgrade to 1.3 */
			umb-imaging-thumbnail {
				pointer-events: none;
			}

			umb-icon {
				font-size: var(--uui-size-8);
			}

			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}

			#actions {
				max-width: 100%;
			}

			.not-allowed {
				cursor: not-allowed;
				opacity: 0.5;
			}

			uui-pagination {
				display: block;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
O([
  p()
], k.prototype, "_selectableFilter", 2);
O([
  p()
], k.prototype, "_currentChildren", 2);
O([
  p()
], k.prototype, "_currentPage", 2);
O([
  p()
], k.prototype, "_currentTotalPages", 2);
O([
  p()
], k.prototype, "_searchResult", 2);
O([
  p()
], k.prototype, "_searchFrom", 2);
O([
  p()
], k.prototype, "_searchQuery", 2);
O([
  p()
], k.prototype, "_currentMediaEntity", 2);
O([
  p()
], k.prototype, "_isSelectionMode", 2);
O([
  p()
], k.prototype, "_startNode", 2);
O([
  p()
], k.prototype, "_searching", 2);
O([
  L("#dropzone")
], k.prototype, "_dropzone", 2);
k = O([
  I("umb-media-picker-modal")
], k);
const ns = k, hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaPickerModalElement() {
    return k;
  },
  default: ns
}, Symbol.toStringTag, { value: "Module" })), mr = new we(
  "UmbMediaRecycleBinTreeStore"
), os = "Umb.Repository.MediaItem", vr = "Umb.Store.MediaItem", ss = "Umb.SearchProvider.Media", fr = new Ae(
  Vn,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.Media"
    }
  }
), gr = new we(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === te
), an = "media";
Kn.generateAbsolute({
  sectionName: an
});
const rs = Xn.generateAbsolute({
  sectionName: an,
  entityType: te
}), _r = new Ji("create/parent/:parentEntityType/:parentUnique/:mediaTypeUnique", rs), xr = new Ji("edit/:unique"), ls = (e) => e.getEntityType() === te, yr = new we(
  "UmbVariantContext",
  void 0,
  ls
);
var ps = Object.getOwnPropertyDescriptor, nn = (e) => {
  throw TypeError(e);
}, cs = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ps(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = s(a) || a);
  return a;
}, Ii = (e, t, i) => t.has(e) || nn("Cannot " + i), Ut = (e, t, i) => (Ii(e, t, "read from private field"), t.get(e)), Ot = (e, t, i) => t.has(e) ? nn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ds = (e, t, i, n) => (Ii(e, t, "write to private field"), t.set(e, i), i), us = (e, t, i) => (Ii(e, t, "access private method"), i), nt, Si, ti, on;
let ot = class extends oi {
  constructor() {
    super(...arguments), Ot(this, ti), Ot(this, nt), Ot(this, Si, new Ie(this));
  }
  connectedCallback() {
    super.connectedCallback(), ds(this, nt, this.data?.mediaUnique), us(this, ti, on).call(this);
  }
  render() {
    return r`
			<umb-body-layout .headline=${this.localize.term("defaultdialogs_editSelectedMedia")}>
				<div id="wrapper">
					<uui-label for="alt-text">${this.localize.term("content_altTextOptional")}</uui-label>
					<uui-input
						id="alt-text"
						label="alt text"
						.value=${this.value?.altText ?? ""}
						@input=${(e) => this.value = { ...this.value, altText: e.target.value }}></uui-input>

					<uui-label for="caption">${this.localize.term("content_captionTextOptional")}</uui-label>
					<uui-input
						id="caption"
						label="caption"
						.value=${this.value?.caption ?? ""}
						@input=${(e) => this.value = { ...this.value, caption: e.target.value }}></uui-input>

					<figure id="mainobject">
						<img src=${this.value?.url ?? ""} alt=${this.value?.altText ?? ""} />
						<figcaption>${this.value?.caption ?? ""}</figcaption>
					</figure>
				</div>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
nt = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakSet();
on = async function() {
  if (!Ut(this, nt)) return;
  const { data: e } = await Ut(this, Si).requestByUnique(Ut(this, nt));
  e && (this.value = { ...this.value, altText: this.value?.altText ?? e.variants[0].name, url: e.urls[0]?.url ?? "" });
};
ot.styles = [
  q`
			uui-input {
				margin-bottom: var(--uui-size-layout-1);
			}

			#wrapper {
				display: flex;
				flex-direction: column;
			}

			#mainobject {
				display: flex;
				flex-direction: column;
				max-width: 100%;

				img {
					max-width: 100%;
					height: auto;
				}
			}
		`
];
ot = cs([
  I("umb-media-caption-alt-text-modal")
], ot);
const hs = ot, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaCaptionAltTextModalElement() {
    return ot;
  },
  default: hs
}, Symbol.toStringTag, { value: "Module" }));
class ms extends Qn {
  constructor(t) {
    super(t, os, xi);
  }
  async openPicker(t, i) {
    const n = {
      ...t
    };
    n.pickableFilter = (a) => this.#e(a, i?.allowedContentTypes), t?.search || (n.search = {
      providerAlias: ss,
      ...t?.search
    }), n.search.queryParams = {
      allowedContentTypes: i?.allowedContentTypes,
      ...t?.search?.queryParams
    }, await super.openPicker(n);
  }
  #e = (t, i) => i && i.length > 0 ? i.map((n) => n.unique).includes(t.mediaType.unique) : !0;
}
var vs = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, sn = (e) => {
  throw TypeError(e);
}, W = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? fs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && vs(t, i, a), a;
}, Ui = (e, t, i) => t.has(e) || sn("Cannot " + i), M = (e, t, i) => (Ui(e, t, "read from private field"), i ? i.call(e) : t.get(e)), pt = (e, t, i) => t.has(e) ? sn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), gs = (e, t, i, n) => (Ui(e, t, "write to private field"), t.set(e, i), i), se = (e, t, i) => (Ui(e, t, "access private method"), i), He, Y, rn, Ge, A, ln, pn, cn, dn, un, hn, mn;
const _s = "umb-input-media";
let z = class extends ri(X) {
  constructor() {
    super(), pt(this, Y), pt(this, He, new Zi(this, {
      getUniqueOfElement: (e) => e.getAttribute("detail"),
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: ea,
      onChange: ({ model: e }) => {
        this.selection = e, se(this, Y, rn).call(this, e), this.dispatchEvent(new C());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", pt(this, Ge, !1), this._editMediaPath = "", this._cards = [], pt(this, A, new ms(this)), new si(this, Qi).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((e) => {
      this._editMediaPath = e({});
    }), this.observe(M(this, A).selection, (e) => this.value = e.join(",")), this.observe(M(this, A).selectedItems, async (e) => {
      const t = e.filter((i) => !this._cards.find((n) => n.unique === i.unique));
      e?.length && !t.length || (this._cards = e ?? []);
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    );
  }
  set min(e) {
    M(this, A).min = e;
  }
  get min() {
    return M(this, A).min;
  }
  set max(e) {
    M(this, A).max = e;
  }
  get max() {
    return M(this, A).max;
  }
  set selection(e) {
    M(this, A).setSelection(e), M(this, He).setModel(e);
  }
  get selection() {
    return M(this, A).getSelection();
  }
  set value(e) {
    this.selection = ao(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return M(this, Ge);
  }
  set readonly(e) {
    gs(this, Ge, e), M(this, Ge) ? M(this, He).disable() : M(this, He).enable();
  }
  render() {
    return r`<div class="container">${se(this, Y, cn).call(this)} ${se(this, Y, dn).call(this)}</div>`;
  }
};
He = /* @__PURE__ */ new WeakMap();
Y = /* @__PURE__ */ new WeakSet();
rn = function(e) {
  const t = {};
  e.forEach((n, a) => {
    t[n] = a;
  });
  const i = [...this._cards];
  this._cards = i.sort((n, a) => t[n.unique] - t[a.unique]);
};
Ge = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
ln = function() {
  M(this, A).openPicker(
    {
      multiple: this.max > 1,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: lo
      }))
    }
  );
};
pn = async function(e) {
  await M(this, A).requestRemoveItem(e.unique), this._cards = this._cards.filter((t) => t.unique !== e.unique);
};
cn = function() {
  return this._cards?.length ? r`
			${le(
    this._cards,
    (e) => e.unique,
    (e) => se(this, Y, un).call(this, e)
  )}
		` : x;
};
dn = function() {
  return this._cards && this.max && this._cards.length >= this.max ? x : this.readonly && this._cards.length > 0 ? x : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${se(this, Y, ln)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
un = function(e) {
  const t = this.readonly ? void 0 : `${this._editMediaPath}edit/${e.unique}`;
  return r`
			<uui-card-media
				name=${et(e.name === null ? void 0 : e.name)}
				data-mark="${e.entityType}:${e.unique}"
				href="${et(t)}"
				?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${e.unique}
					alt=${e.name}
					icon=${e.mediaType.icon}></umb-imaging-thumbnail>
				${se(this, Y, mn).call(this, e)}
				<uui-action-bar slot="actions"> ${se(this, Y, hn).call(this, e)}</uui-action-bar>
			</uui-card-media>
		`;
};
hn = function(e) {
  return this.readonly ? x : r`
			<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => se(this, Y, pn).call(this, e)}>
				<uui-icon name="icon-trash"></uui-icon>
			</uui-button>
		`;
};
mn = function(e) {
  return e.isTrashed ? r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		` : x;
};
z.styles = [
  q`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
				grid-auto-rows: 150px;
				gap: var(--uui-size-space-5);
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media umb-icon {
				font-size: var(--uui-size-8);
			}

			uui-card-media[drag-placeholder] {
				opacity: 0.2;
			}
			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
W([
  l({ type: Number })
], z.prototype, "min", 1);
W([
  l({ type: String, attribute: "min-message" })
], z.prototype, "minMessage", 2);
W([
  l({ type: Number })
], z.prototype, "max", 1);
W([
  l({ type: String, attribute: "max-message" })
], z.prototype, "maxMessage", 2);
W([
  l({ type: Array })
], z.prototype, "allowedContentTypeIds", 2);
W([
  l({ type: Boolean })
], z.prototype, "showOpenButton", 2);
W([
  l({ type: Object, attribute: !1 })
], z.prototype, "startNode", 2);
W([
  l({ type: String })
], z.prototype, "value", 1);
W([
  l({ type: Boolean, reflect: !0 })
], z.prototype, "readonly", 1);
W([
  p()
], z.prototype, "_editMediaPath", 2);
W([
  p()
], z.prototype, "_cards", 2);
z = W([
  I(_s)
], z);
var xs = Object.defineProperty, ys = Object.getOwnPropertyDescriptor, vn = (e) => {
  throw TypeError(e);
}, y = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ys(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && xs(t, i, a), a;
}, Oi = (e, t, i) => t.has(e) || vn("Cannot " + i), B = (e, t, i) => (Oi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ee = (e, t, i) => t.has(e) ? vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ki = (e, t, i, n) => (Oi(e, t, "write to private field"), t.set(e, i), i), S = (e, t, i) => (Oi(e, t, "access private method"), i), Ve, ft, Ye, Je, E, ii, kt, Ai, fn, gn, _n, xn, yn, wn, bn, kn, $n;
let g = class extends ri(X, void 0) {
  constructor() {
    super(), Ee(this, E), Ee(this, Ve, new Zi(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e.key,
      identifier: "Umb.SorterIdentifier.InputRichMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: ea,
      onChange: ({ model: e }) => {
        this.value = e, this.dispatchEvent(new C());
      }
    })), this.min = 0, this.minMessage = "This field need more items", this.max = 1 / 0, this.maxMessage = "This field exceeds the allowed amount of items", this.multiple = !1, Ee(this, ft, !1), Ee(this, Ye, !1), this._cards = [], Ee(this, Je, new ho(this, vo)), Ee(this, kt, (e) => this.allowedContentTypeIds && this.allowedContentTypeIds.length > 0 ? this.allowedContentTypeIds.includes(e.mediaType.unique) : !0), this.observe(B(this, Je).items, () => {
      S(this, E, ii).call(this);
    }), new si(this, Do).addAdditionalPath(":key").onSetup((e) => {
      const t = e.key;
      if (!t) return !1;
      const i = this.value?.find((n) => n.key === t);
      return i ? {
        data: {
          cropOptions: this.preselectedCrops,
          hideFocalPoint: !this.focalPointEnabled,
          key: t,
          unique: i.mediaKey,
          pickableFilter: B(this, kt)
        },
        value: {
          crops: i.crops ?? [],
          focalPoint: i.focalPoint ?? { left: 0.5, top: 0.5 },
          src: "",
          key: t,
          unique: i.mediaKey
        }
      } : !1;
    }).onSubmit((e) => {
      this.value = this.value?.map((t) => {
        if (t.key !== e.key) return t;
        const i = this.focalPointEnabled ? e.focalPoint : null, n = e.crops, a = e.unique, o = a === t.mediaKey ? t.key : Re.new();
        return { ...t, crops: n, mediaKey: a, focalPoint: i, key: o };
      }), this.dispatchEvent(new C());
    }).observeRouteBuilder((e) => {
      this._routeBuilder = e;
    }), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ta,
      () => !this.readonly && !!this.required && (!this.value || this.value.length === 0)
    ), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !this.readonly && // Only if min is set:
      !!this.min && // if the value is empty and not required, we should not validate the min:
      !(this.value?.length === 0 && this.required == !1) && // Validate the min:
      (this.value?.length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !this.readonly && !!this.value && !!this.max && this.value?.length > this.max
    );
  }
  set value(e) {
    super.value = e, B(this, Ve).setModel(e), B(this, Je).setUniques(e?.map((t) => t.mediaKey)), S(this, E, ii).call(this);
  }
  get value() {
    return super.value;
  }
  set focalPointEnabled(e) {
    Ki(this, ft, e);
  }
  get focalPointEnabled() {
    return B(this, ft);
  }
  /** @deprecated will be removed in v17 */
  set alias(e) {
  }
  get alias() {
  }
  /** @deprecated will be removed in v17 */
  set variantId(e) {
  }
  get variantId() {
  }
  get readonly() {
    return B(this, Ye);
  }
  set readonly(e) {
    Ki(this, Ye, e), B(this, Ye) ? B(this, Ve).disable() : B(this, Ve).enable();
  }
  getFormElement() {
  }
  render() {
    return r`
			${S(this, E, xn).call(this)}
			<div class="container">${S(this, E, yn).call(this)} ${S(this, E, wn).call(this)}</div>
		`;
  }
};
Ve = /* @__PURE__ */ new WeakMap();
ft = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakSet();
ii = async function() {
  const e = B(this, Je).getItems();
  if (!e.length) {
    this._cards = [];
    return;
  }
  const t = e.filter((n) => !this._cards.find((a) => a.unique === n.unique)), i = this._cards.filter((n) => !e.find((a) => n.unique === a.unique));
  t.length === 0 && i.length === 0 || (this._cards = this.value?.map((n) => {
    const a = e.find((o) => o.unique === n.mediaKey);
    return {
      unique: n.key,
      media: n.mediaKey,
      name: a?.name ?? "",
      icon: a?.mediaType?.icon,
      isTrashed: a?.isTrashed ?? !1
    };
  }) ?? []);
};
kt = /* @__PURE__ */ new WeakMap();
Ai = function(e) {
  if (!e.length) return;
  const t = e.map((i) => ({
    key: Re.new(),
    mediaKey: i,
    mediaTypeAlias: "",
    crops: [],
    focalPoint: null
  }));
  this.value = [...this.value ?? [], ...t], this.dispatchEvent(new C());
};
fn = async function() {
  const i = await (await this.getContext(Xi))?.open(this, xi, {
    data: {
      multiple: this.multiple,
      startNode: this.startNode,
      pickableFilter: B(this, kt)
    },
    value: { selection: [] }
  })?.onSubmit().catch(() => null);
  if (!i) return;
  const n = i.selection.filter((a) => a !== null);
  S(this, E, Ai).call(this, n);
};
gn = async function(e) {
  await Ln(this, {
    color: "danger",
    headline: `${this.localize.term("actions_remove")} ${e.name}?`,
    content: `${this.localize.term("defaultdialogs_confirmremove")} ${e.name}?`,
    confirmLabel: this.localize.term("actions_remove")
  }), this.value = this.value?.filter((t) => t.key !== e.unique), this.dispatchEvent(new C());
};
_n = async function(e) {
  const i = e.detail.map((n) => n.unique);
  S(this, E, Ai).call(this, i);
};
xn = function() {
  if (this.readonly) return x;
  if (!(this._cards && this._cards.length >= this.max))
    return r`<umb-dropzone ?multiple=${this.max > 1} @complete=${S(this, E, _n)}></umb-dropzone>`;
};
yn = function() {
  if (this._cards.length)
    return r`
			${le(
      this._cards,
      (e) => e.unique,
      (e) => S(this, E, bn).call(this, e)
    )}
		`;
};
wn = function() {
  if (!(this._cards && this._cards.length && !this.multiple))
    return this.readonly && this._cards.length > 0 ? x : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@blur=${() => {
      this.pristine = !1, this.checkValidity();
    }}
					@click=${S(this, E, fn)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
bn = function(e) {
  if (!e.unique) return x;
  const t = this.readonly ? void 0 : this._routeBuilder?.({ key: e.unique });
  return r`
			<uui-card-media id=${e.unique} name=${e.name} .href=${t} ?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${e.media}
					alt=${e.name}
					icon=${e.icon ?? "icon-picture"}></umb-imaging-thumbnail>
				${S(this, E, $n).call(this, e)} ${S(this, E, kn).call(this, e)}
			</uui-card-media>
		`;
};
kn = function(e) {
  return this.readonly ? x : r`
			<uui-action-bar slot="actions">
				<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => S(this, E, gn).call(this, e)}>
					<uui-icon name="icon-trash"></uui-icon>
				</uui-button>
			</uui-action-bar>
		`;
};
$n = function(e) {
  if (e.isTrashed)
    return r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		`;
};
g.styles = [
  q`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
				grid-auto-rows: 150px;
				gap: var(--uui-size-space-5);
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media umb-icon {
				font-size: var(--uui-size-8);
			}

			uui-card-media[drag-placeholder] {
				opacity: 0.2;
			}
			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
y([
  l({ type: Boolean })
], g.prototype, "required", 2);
y([
  l({ type: String })
], g.prototype, "requiredMessage", 2);
y([
  l({ type: Number })
], g.prototype, "min", 2);
y([
  l({ type: String, attribute: "min-message" })
], g.prototype, "minMessage", 2);
y([
  l({ type: Number })
], g.prototype, "max", 2);
y([
  l({ type: String, attribute: "min-message" })
], g.prototype, "maxMessage", 2);
y([
  l({ type: Array })
], g.prototype, "value", 1);
y([
  l({ type: Array })
], g.prototype, "allowedContentTypeIds", 2);
y([
  l({ type: Object, attribute: !1 })
], g.prototype, "startNode", 2);
y([
  l({ type: Boolean })
], g.prototype, "multiple", 2);
y([
  l({ type: Array })
], g.prototype, "preselectedCrops", 2);
y([
  l({ type: Boolean })
], g.prototype, "focalPointEnabled", 1);
y([
  l()
], g.prototype, "alias", 1);
y([
  l()
], g.prototype, "variantId", 1);
y([
  l({ type: Boolean, reflect: !0 })
], g.prototype, "readonly", 1);
y([
  p()
], g.prototype, "_cards", 2);
y([
  p()
], g.prototype, "_routeBuilder", 2);
g = y([
  I("umb-input-rich-media")
], g);
var ws = Object.defineProperty, bs = Object.getOwnPropertyDescriptor, Mn = (e) => {
  throw TypeError(e);
}, ke = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? bs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && ws(t, i, a), a;
}, Ri = (e, t, i) => t.has(e) || Mn("Cannot " + i), Fi = (e, t, i) => (Ri(e, t, "read from private field"), i ? i.call(e) : t.get(e)), At = (e, t, i) => t.has(e) ? Mn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ks = (e, t, i, n) => (Ri(e, t, "write to private field"), t.set(e, i), i), xe = (e, t, i) => (Ri(e, t, "access private method"), i), Ze, Z, En, ai, Di, Tn, Pn, Cn, zn;
const $s = { left: 0.5, top: 0.5 }, Ms = {
  temporaryFileId: null,
  src: "",
  crops: [],
  focalPoint: $s
};
let ie = class extends ri(X, void 0) {
  constructor() {
    super(), At(this, Z), this.crops = [], At(this, Ze), At(this, Di, () => {
      this.value = void 0, this.fileUnique && Fi(this, Ze)?.removeOne(this.fileUnique), this.fileUnique = void 0, this.file = void 0, this.dispatchEvent(new C());
    }), ks(this, Ze, new aa(this)), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ta,
      () => !!this.required && (!this.value || this.value.src === "" && this.value.temporaryFileId == null)
    );
  }
  firstUpdated() {
    xe(this, Z, Tn).call(this);
  }
  render() {
    return this.value?.src || this.file ? xe(this, Z, zn).call(this) : xe(this, Z, Pn).call(this);
  }
};
Ze = /* @__PURE__ */ new WeakMap();
Z = /* @__PURE__ */ new WeakSet();
En = function(e) {
  const t = e.detail.files[0];
  if (!t) return;
  const i = Re.new();
  this.file = t, this.fileUnique = i, this.value = fo(this.value ?? Ms, { temporaryFileId: i }), Fi(this, Ze)?.uploadOne({ temporaryUnique: i, file: t }), this.dispatchEvent(new C());
};
ai = function(e) {
  this._dropzone && (e.stopImmediatePropagation(), this._dropzone.browse());
};
Di = /* @__PURE__ */ new WeakMap();
Tn = function() {
  if (this.value) {
    const e = this.crops.map((t) => {
      const i = this.value.crops.find((a) => a.alias === t.alias);
      return {
        ...t,
        coordinates: i?.coordinates ?? void 0
      };
    });
    this.value = {
      ...this.value,
      crops: e
    };
  }
};
Pn = function() {
  return r`
			<uui-file-dropzone id="dropzone" label="dropzone" @change="${xe(this, Z, En)}" @click=${xe(this, Z, ai)}>
				<uui-button label=${this.localize.term("media_clickToUpload")} @click="${xe(this, Z, ai)}"></uui-button>
			</uui-file-dropzone>
		`;
};
Cn = function(e) {
  const t = e.target.value;
  if (!t) {
    this.value = void 0, this.dispatchEvent(new C());
    return;
  }
  this.value && this.value.temporaryFileId && (t.temporaryFileId = this.value.temporaryFileId), (t.temporaryFileId || t.src !== "") && (this.value = t), this.dispatchEvent(new C());
};
zn = function() {
  return r`<umb-image-cropper-field .value=${this.value} .file=${this.file} @change=${xe(this, Z, Cn)}>
			<uui-button slot="actions" @click=${Fi(this, Di)} label=${this.localize.term("content_uploadClear")}>
				<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
			</uui-button>
		</umb-image-cropper-field> `;
};
ie.styles = [
  q`
			uui-file-dropzone {
				position: relative;
				display: block;
			}
			uui-file-dropzone::after {
				content: '';
				position: absolute;
				inset: 0;
				cursor: pointer;
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
ke([
  L("#dropzone")
], ie.prototype, "_dropzone", 2);
ke([
  l({ type: Boolean })
], ie.prototype, "required", 2);
ke([
  l({ type: String })
], ie.prototype, "requiredMessage", 2);
ke([
  l({ attribute: !1 })
], ie.prototype, "crops", 2);
ke([
  p()
], ie.prototype, "file", 2);
ke([
  p()
], ie.prototype, "fileUnique", 2);
ie = ke([
  I("umb-input-image-cropper")
], ie);
function Es(e) {
  return {
    ".123": "application/vnd.lotus-1-2-3",
    ".3dml": "text/vnd.in3d.3dml",
    ".3g2": "video/3gpp2",
    ".3gp": "video/3gpp",
    ".a": "application/octet-stream",
    ".aab": "application/x-authorware-bin",
    ".aac": "audio/x-aac",
    ".aam": "application/x-authorware-map",
    ".aas": "application/x-authorware-seg",
    ".abw": "application/x-abiword",
    ".acc": "application/vnd.americandynamics.acc",
    ".ace": "application/x-ace-compressed",
    ".acu": "application/vnd.acucobol",
    ".acutc": "application/vnd.acucorp",
    ".adp": "audio/adpcm",
    ".aep": "application/vnd.audiograph",
    ".afm": "application/x-font-type1",
    ".afp": "application/vnd.ibm.modcap",
    ".ai": "application/postscript",
    ".aif": "audio/x-aiff",
    ".aifc": "audio/x-aiff",
    ".aiff": "audio/x-aiff",
    ".air": "application/vnd.adobe.air-application-installer-package+zip",
    ".ami": "application/vnd.amiga.ami",
    ".apk": "application/vnd.android.package-archive",
    ".application": "application/x-ms-application",
    ".apr": "application/vnd.lotus-approach",
    ".asc": "application/pgp-signature",
    ".asf": "video/x-ms-asf",
    ".asm": "text/x-asm",
    ".aso": "application/vnd.accpac.simply.aso",
    ".asx": "video/x-ms-asf",
    ".atc": "application/vnd.acucorp",
    ".atom": "application/atom+xml",
    ".atomcat": "application/atomcat+xml",
    ".atomsvc": "application/atomsvc+xml",
    ".atx": "application/vnd.antix.game-component",
    ".au": "audio/basic",
    ".avi": "video/x-msvideo",
    ".aw": "application/applixware",
    ".azf": "application/vnd.airzip.filesecure.azf",
    ".azs": "application/vnd.airzip.filesecure.azs",
    ".azw": "application/vnd.amazon.ebook",
    ".bat": "application/x-msdownload",
    ".bcpio": "application/x-bcpio",
    ".bdf": "application/x-font-bdf",
    ".bdm": "application/vnd.syncml.dm+wbxml",
    ".bh2": "application/vnd.fujitsu.oasysprs",
    ".bin": "application/octet-stream",
    ".bmi": "application/vnd.bmi",
    ".bmp": "image/bmp",
    ".book": "application/vnd.framemaker",
    ".box": "application/vnd.previewsystems.box",
    ".boz": "application/x-bzip2",
    ".bpk": "application/octet-stream",
    ".btif": "image/prs.btif",
    ".bz": "application/x-bzip",
    ".bz2": "application/x-bzip2",
    ".c": "text/x-c",
    ".c4d": "application/vnd.clonk.c4group",
    ".c4f": "application/vnd.clonk.c4group",
    ".c4g": "application/vnd.clonk.c4group",
    ".c4p": "application/vnd.clonk.c4group",
    ".c4u": "application/vnd.clonk.c4group",
    ".cab": "application/vnd.ms-cab-compressed",
    ".car": "application/vnd.curl.car",
    ".cat": "application/vnd.ms-pki.seccat",
    ".cc": "text/x-c",
    ".cct": "application/x-director",
    ".ccxml": "application/ccxml+xml",
    ".cdbcmsg": "application/vnd.contact.cmsg",
    ".cdf": "application/x-netcdf",
    ".cdkey": "application/vnd.mediastation.cdkey",
    ".cdx": "chemical/x-cdx",
    ".cdxml": "application/vnd.chemdraw+xml",
    ".cdy": "application/vnd.cinderella",
    ".cer": "application/pkix-cert",
    ".cgm": "image/cgm",
    ".chat": "application/x-chat",
    ".chm": "application/vnd.ms-htmlhelp",
    ".chrt": "application/vnd.kde.kchart",
    ".cif": "chemical/x-cif",
    ".cii": "application/vnd.anser-web-certificate-issue-initiation",
    ".cil": "application/vnd.ms-artgalry",
    ".cla": "application/vnd.claymore",
    ".class": "application/java-vm",
    ".clkk": "application/vnd.crick.clicker.keyboard",
    ".clkp": "application/vnd.crick.clicker.palette",
    ".clkt": "application/vnd.crick.clicker.template",
    ".clkw": "application/vnd.crick.clicker.wordbank",
    ".clkx": "application/vnd.crick.clicker",
    ".clp": "application/x-msclip",
    ".cmc": "application/vnd.cosmocaller",
    ".cmdf": "chemical/x-cmdf",
    ".cml": "chemical/x-cml",
    ".cmp": "application/vnd.yellowriver-custom-menu",
    ".cmx": "image/x-cmx",
    ".cod": "application/vnd.rim.cod",
    ".com": "application/x-msdownload",
    ".conf": "text/plain",
    ".cpio": "application/x-cpio",
    ".cpp": "text/x-c",
    ".cpt": "application/mac-compactpro",
    ".crd": "application/x-mscardfile",
    ".crl": "application/pkix-crl",
    ".crt": "application/x-x509-ca-cert",
    ".csh": "application/x-csh",
    ".csml": "chemical/x-csml",
    ".csp": "application/vnd.commonspace",
    ".css": "text/css",
    ".cst": "application/x-director",
    ".csv": "text/csv",
    ".cu": "application/cu-seeme",
    ".curl": "text/vnd.curl",
    ".cww": "application/prs.cww",
    ".cxt": "application/x-director",
    ".cxx": "text/x-c",
    ".daf": "application/vnd.mobius.daf",
    ".dataless": "application/vnd.fdsn.seed",
    ".davmount": "application/davmount+xml",
    ".dcr": "application/x-director",
    ".dcurl": "text/vnd.curl.dcurl",
    ".dd2": "application/vnd.oma.dd2+xml",
    ".ddd": "application/vnd.fujixerox.ddd",
    ".deb": "application/x-debian-package",
    ".def": "text/plain",
    ".deploy": "application/octet-stream",
    ".der": "application/x-x509-ca-cert",
    ".dfac": "application/vnd.dreamfactory",
    ".dic": "text/x-c",
    ".diff": "text/plain",
    ".dir": "application/x-director",
    ".dis": "application/vnd.mobius.dis",
    ".dist": "application/octet-stream",
    ".distz": "application/octet-stream",
    ".djv": "image/vnd.djvu",
    ".djvu": "image/vnd.djvu",
    ".dll": "application/x-msdownload",
    ".dmg": "application/octet-stream",
    ".dms": "application/octet-stream",
    ".dna": "application/vnd.dna",
    ".doc": "application/msword",
    ".docm": "application/vnd.ms-word.document.macroenabled.12",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".dot": "application/msword",
    ".dotm": "application/vnd.ms-word.template.macroenabled.12",
    ".dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    ".dp": "application/vnd.osgi.dp",
    ".dpg": "application/vnd.dpgraph",
    ".dsc": "text/prs.lines.tag",
    ".dtb": "application/x-dtbook+xml",
    ".dtd": "application/xml-dtd",
    ".dts": "audio/vnd.dts",
    ".dtshd": "audio/vnd.dts.hd",
    ".dump": "application/octet-stream",
    ".dvi": "application/x-dvi",
    ".dwf": "model/vnd.dwf",
    ".dwg": "image/vnd.dwg",
    ".dxf": "image/vnd.dxf",
    ".dxp": "application/vnd.spotfire.dxp",
    ".dxr": "application/x-director",
    ".ecelp4800": "audio/vnd.nuera.ecelp4800",
    ".ecelp7470": "audio/vnd.nuera.ecelp7470",
    ".ecelp9600": "audio/vnd.nuera.ecelp9600",
    ".ecma": "application/ecmascript",
    ".edm": "application/vnd.novadigm.edm",
    ".edx": "application/vnd.novadigm.edx",
    ".efif": "application/vnd.picsel",
    ".ei6": "application/vnd.pg.osasli",
    ".elc": "application/octet-stream",
    ".eml": "message/rfc822",
    ".emma": "application/emma+xml",
    ".eol": "audio/vnd.digital-winds",
    ".eot": "application/vnd.ms-fontobject",
    ".eps": "application/postscript",
    ".epub": "application/epub+zip",
    ".es3": "application/vnd.eszigno3+xml",
    ".esf": "application/vnd.epson.esf",
    ".et3": "application/vnd.eszigno3+xml",
    ".etx": "text/x-setext",
    ".exe": "application/x-msdownload",
    ".ext": "application/vnd.novadigm.ext",
    ".ez": "application/andrew-inset",
    ".ez2": "application/vnd.ezpix-album",
    ".ez3": "application/vnd.ezpix-package",
    ".f": "text/x-fortran",
    ".f4v": "video/x-f4v",
    ".f77": "text/x-fortran",
    ".f90": "text/x-fortran",
    ".fbs": "image/vnd.fastbidsheet",
    ".fdf": "application/vnd.fdf",
    ".fe_launch": "application/vnd.denovo.fcselayout-link",
    ".fg5": "application/vnd.fujitsu.oasysgp",
    ".fgd": "application/x-director",
    ".fh": "image/x-freehand",
    ".fh4": "image/x-freehand",
    ".fh5": "image/x-freehand",
    ".fh7": "image/x-freehand",
    ".fhc": "image/x-freehand",
    ".fig": "application/x-xfig",
    ".fli": "video/x-fli",
    ".flo": "application/vnd.micrografx.flo",
    ".flv": "video/x-flv",
    ".flw": "application/vnd.kde.kivio",
    ".flx": "text/vnd.fmi.flexstor",
    ".fly": "text/vnd.fly",
    ".fm": "application/vnd.framemaker",
    ".fnc": "application/vnd.frogans.fnc",
    ".for": "text/x-fortran",
    ".fpx": "image/vnd.fpx",
    ".frame": "application/vnd.framemaker",
    ".fsc": "application/vnd.fsc.weblaunch",
    ".fst": "image/vnd.fst",
    ".ftc": "application/vnd.fluxtime.clip",
    ".fti": "application/vnd.anser-web-funds-transfer-initiation",
    ".fvt": "video/vnd.fvt",
    ".fzs": "application/vnd.fuzzysheet",
    ".g3": "image/g3fax",
    ".gac": "application/vnd.groove-account",
    ".gdl": "model/vnd.gdl",
    ".geo": "application/vnd.dynageo",
    ".gex": "application/vnd.geometry-explorer",
    ".ggb": "application/vnd.geogebra.file",
    ".ggt": "application/vnd.geogebra.tool",
    ".ghf": "application/vnd.groove-help",
    ".gif": "image/gif",
    ".gim": "application/vnd.groove-identity-message",
    ".gmx": "application/vnd.gmx",
    ".gnumeric": "application/x-gnumeric",
    ".gph": "application/vnd.flographit",
    ".gqf": "application/vnd.grafeq",
    ".gqs": "application/vnd.grafeq",
    ".gram": "application/srgs",
    ".gre": "application/vnd.geometry-explorer",
    ".grv": "application/vnd.groove-injector",
    ".grxml": "application/srgs+xml",
    ".gsf": "application/x-font-ghostscript",
    ".gtar": "application/x-gtar",
    ".gtm": "application/vnd.groove-tool-message",
    ".gtw": "model/vnd.gtw",
    ".gv": "text/vnd.graphviz",
    ".gz": "application/x-gzip",
    ".h": "text/x-c",
    ".h261": "video/h261",
    ".h263": "video/h263",
    ".h264": "video/h264",
    ".hbci": "application/vnd.hbci",
    ".hdf": "application/x-hdf",
    ".hh": "text/x-c",
    ".hlp": "application/winhlp",
    ".hpgl": "application/vnd.hp-hpgl",
    ".hpid": "application/vnd.hp-hpid",
    ".hps": "application/vnd.hp-hps",
    ".hqx": "application/mac-binhex40",
    ".htke": "application/vnd.kenameaapp",
    ".htm": "text/html",
    ".html": "text/html",
    ".hvd": "application/vnd.yamaha.hv-dic",
    ".hvp": "application/vnd.yamaha.hv-voice",
    ".hvs": "application/vnd.yamaha.hv-script",
    ".icc": "application/vnd.iccprofile",
    ".ice": "x-conference/x-cooltalk",
    ".icm": "application/vnd.iccprofile",
    ".ico": "image/x-icon",
    ".ics": "text/calendar",
    ".ief": "image/ief",
    ".ifb": "text/calendar",
    ".ifm": "application/vnd.shana.informed.formdata",
    ".iges": "model/iges",
    ".igl": "application/vnd.igloader",
    ".igs": "model/iges",
    ".igx": "application/vnd.micrografx.igx",
    ".iif": "application/vnd.shana.informed.interchange",
    ".imp": "application/vnd.accpac.simply.imp",
    ".ims": "application/vnd.ms-ims",
    ".in": "text/plain",
    ".ipk": "application/vnd.shana.informed.package",
    ".irm": "application/vnd.ibm.rights-management",
    ".irp": "application/vnd.irepository.package+xml",
    ".iso": "application/octet-stream",
    ".itp": "application/vnd.shana.informed.formtemplate",
    ".ivp": "application/vnd.immervision-ivp",
    ".ivu": "application/vnd.immervision-ivu",
    ".jad": "text/vnd.sun.j2me.app-descriptor",
    ".jam": "application/vnd.jam",
    ".jar": "application/java-archive",
    ".java": "text/x-java-source",
    ".jisp": "application/vnd.jisp",
    ".jlt": "application/vnd.hp-jlyt",
    ".jnlp": "application/x-java-jnlp-file",
    ".joda": "application/vnd.joost.joda-archive",
    ".jpe": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".jpgm": "video/jpm",
    ".jpgv": "video/jpeg",
    ".jpm": "video/jpm",
    ".js": "application/javascript",
    ".json": "application/json",
    ".kar": "audio/midi",
    ".karbon": "application/vnd.kde.karbon",
    ".kfo": "application/vnd.kde.kformula",
    ".kia": "application/vnd.kidspiration",
    ".kil": "application/x-killustrator",
    ".kml": "application/vnd.google-earth.kml+xml",
    ".kmz": "application/vnd.google-earth.kmz",
    ".kne": "application/vnd.kinar",
    ".knp": "application/vnd.kinar",
    ".kon": "application/vnd.kde.kontour",
    ".kpr": "application/vnd.kde.kpresenter",
    ".kpt": "application/vnd.kde.kpresenter",
    ".ksh": "text/plain",
    ".ksp": "application/vnd.kde.kspread",
    ".ktr": "application/vnd.kahootz",
    ".ktz": "application/vnd.kahootz",
    ".kwd": "application/vnd.kde.kword",
    ".kwt": "application/vnd.kde.kword",
    ".latex": "application/x-latex",
    ".lbd": "application/vnd.llamagraphics.life-balance.desktop",
    ".lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
    ".les": "application/vnd.hhe.lesson-player",
    ".lha": "application/octet-stream",
    ".link66": "application/vnd.route66.link66+xml",
    ".list": "text/plain",
    ".list3820": "application/vnd.ibm.modcap",
    ".listafp": "application/vnd.ibm.modcap",
    ".log": "text/plain",
    ".lostxml": "application/lost+xml",
    ".lrf": "application/octet-stream",
    ".lrm": "application/vnd.ms-lrm",
    ".ltf": "application/vnd.frogans.ltf",
    ".lvp": "audio/vnd.lucent.voice",
    ".lwp": "application/vnd.lotus-wordpro",
    ".lzh": "application/octet-stream",
    ".m13": "application/x-msmediaview",
    ".m14": "application/x-msmediaview",
    ".m1v": "video/mpeg",
    ".m2a": "audio/mpeg",
    ".m2v": "video/mpeg",
    ".m3a": "audio/mpeg",
    ".m3u": "audio/x-mpegurl",
    ".m4u": "video/vnd.mpegurl",
    ".m4v": "video/x-m4v",
    ".ma": "application/mathematica",
    ".mag": "application/vnd.ecowin.chart",
    ".maker": "application/vnd.framemaker",
    ".man": "text/troff",
    ".mathml": "application/mathml+xml",
    ".mb": "application/mathematica",
    ".mbk": "application/vnd.mobius.mbk",
    ".mbox": "application/mbox",
    ".mc1": "application/vnd.medcalcdata",
    ".mcd": "application/vnd.mcd",
    ".mcurl": "text/vnd.curl.mcurl",
    ".mdb": "application/x-msaccess",
    ".mdi": "image/vnd.ms-modi",
    ".me": "text/troff",
    ".mesh": "model/mesh",
    ".mfm": "application/vnd.mfmp",
    ".mgz": "application/vnd.proteus.magazine",
    ".mht": "message/rfc822",
    ".mhtml": "message/rfc822",
    ".mid": "audio/midi",
    ".midi": "audio/midi",
    ".mif": "application/vnd.mif",
    ".mime": "message/rfc822",
    ".mj2": "video/mj2",
    ".mjp2": "video/mj2",
    ".mlp": "application/vnd.dolby.mlp",
    ".mmd": "application/vnd.chipnuts.karaoke-mmd",
    ".mmf": "application/vnd.smaf",
    ".mmr": "image/vnd.fujixerox.edmics-mmr",
    ".mny": "application/x-msmoney",
    ".mobi": "application/x-mobipocket-ebook",
    ".mov": "video/quicktime",
    ".movie": "video/x-sgi-movie",
    ".mp2": "audio/mpeg",
    ".mp2a": "audio/mpeg",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".mp4a": "audio/mp4",
    ".mp4s": "application/mp4",
    ".mp4v": "video/mp4",
    ".mpa": "video/mpeg",
    ".mpc": "application/vnd.mophun.certificate",
    ".mpe": "video/mpeg",
    ".mpeg": "video/mpeg",
    ".mpg": "video/mpeg",
    ".mpg4": "video/mp4",
    ".mpga": "audio/mpeg",
    ".mpkg": "application/vnd.apple.installer+xml",
    ".mpm": "application/vnd.blueice.multipass",
    ".mpn": "application/vnd.mophun.application",
    ".mpp": "application/vnd.ms-project",
    ".mpt": "application/vnd.ms-project",
    ".mpy": "application/vnd.ibm.minipay",
    ".mqy": "application/vnd.mobius.mqy",
    ".mrc": "application/marc",
    ".ms": "text/troff",
    ".mscml": "application/mediaservercontrol+xml",
    ".mseed": "application/vnd.fdsn.mseed",
    ".mseq": "application/vnd.mseq",
    ".msf": "application/vnd.epson.msf",
    ".msh": "model/mesh",
    ".msi": "application/x-msdownload",
    ".msl": "application/vnd.mobius.msl",
    ".msty": "application/vnd.muvee.style",
    ".mts": "model/vnd.mts",
    ".mus": "application/vnd.musician",
    ".musicxml": "application/vnd.recordare.musicxml+xml",
    ".mvb": "application/x-msmediaview",
    ".mwf": "application/vnd.mfer",
    ".mxf": "application/mxf",
    ".mxl": "application/vnd.recordare.musicxml",
    ".mxml": "application/xv+xml",
    ".mxs": "application/vnd.triscape.mxs",
    ".mxu": "video/vnd.mpegurl",
    ".n-gage": "application/vnd.nokia.n-gage.symbian.install",
    ".nb": "application/mathematica",
    ".nc": "application/x-netcdf",
    ".ncx": "application/x-dtbncx+xml",
    ".ngdat": "application/vnd.nokia.n-gage.data",
    ".nlu": "application/vnd.neurolanguage.nlu",
    ".nml": "application/vnd.enliven",
    ".nnd": "application/vnd.noblenet-directory",
    ".nns": "application/vnd.noblenet-sealer",
    ".nnw": "application/vnd.noblenet-web",
    ".npx": "image/vnd.net-fpx",
    ".nsf": "application/vnd.lotus-notes",
    ".nws": "message/rfc822",
    ".o": "application/octet-stream",
    ".oa2": "application/vnd.fujitsu.oasys2",
    ".oa3": "application/vnd.fujitsu.oasys3",
    ".oas": "application/vnd.fujitsu.oasys",
    ".obd": "application/x-msbinder",
    ".obj": "application/octet-stream",
    ".oda": "application/oda",
    ".odb": "application/vnd.oasis.opendocument.database",
    ".odc": "application/vnd.oasis.opendocument.chart",
    ".odf": "application/vnd.oasis.opendocument.formula",
    ".odft": "application/vnd.oasis.opendocument.formula-template",
    ".odg": "application/vnd.oasis.opendocument.graphics",
    ".odi": "application/vnd.oasis.opendocument.image",
    ".odp": "application/vnd.oasis.opendocument.presentation",
    ".ods": "application/vnd.oasis.opendocument.spreadsheet",
    ".odt": "application/vnd.oasis.opendocument.text",
    ".oga": "audio/ogg",
    ".ogg": "audio/ogg",
    ".ogv": "video/ogg",
    ".ogx": "application/ogg",
    ".onepkg": "application/onenote",
    ".onetmp": "application/onenote",
    ".onetoc": "application/onenote",
    ".onetoc2": "application/onenote",
    ".opf": "application/oebps-package+xml",
    ".oprc": "application/vnd.palm",
    ".org": "application/vnd.lotus-organizer",
    ".osf": "application/vnd.yamaha.openscoreformat",
    ".osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
    ".otc": "application/vnd.oasis.opendocument.chart-template",
    ".otf": "application/x-font-otf",
    ".otg": "application/vnd.oasis.opendocument.graphics-template",
    ".oth": "application/vnd.oasis.opendocument.text-web",
    ".oti": "application/vnd.oasis.opendocument.image-template",
    ".otm": "application/vnd.oasis.opendocument.text-master",
    ".otp": "application/vnd.oasis.opendocument.presentation-template",
    ".ots": "application/vnd.oasis.opendocument.spreadsheet-template",
    ".ott": "application/vnd.oasis.opendocument.text-template",
    ".oxt": "application/vnd.openofficeorg.extension",
    ".p": "text/x-pascal",
    ".p10": "application/pkcs10",
    ".p12": "application/x-pkcs12",
    ".p7b": "application/x-pkcs7-certificates",
    ".p7c": "application/pkcs7-mime",
    ".p7m": "application/pkcs7-mime",
    ".p7r": "application/x-pkcs7-certreqresp",
    ".p7s": "application/pkcs7-signature",
    ".pas": "text/x-pascal",
    ".pbd": "application/vnd.powerbuilder6",
    ".pbm": "image/x-portable-bitmap",
    ".pcf": "application/x-font-pcf",
    ".pcl": "application/vnd.hp-pcl",
    ".pclxl": "application/vnd.hp-pclxl",
    ".pct": "image/x-pict",
    ".pcurl": "application/vnd.curl.pcurl",
    ".pcx": "image/x-pcx",
    ".pdb": "application/vnd.palm",
    ".pdf": "application/pdf",
    ".pfa": "application/x-font-type1",
    ".pfb": "application/x-font-type1",
    ".pfm": "application/x-font-type1",
    ".pfr": "application/font-tdpfr",
    ".pfx": "application/x-pkcs12",
    ".pgm": "image/x-portable-graymap",
    ".pgn": "application/x-chess-pgn",
    ".pgp": "application/pgp-encrypted",
    ".pic": "image/x-pict",
    ".pkg": "application/octet-stream",
    ".pki": "application/pkixcmp",
    ".pkipath": "application/pkix-pkipath",
    ".pl": "text/plain",
    ".plb": "application/vnd.3gpp.pic-bw-large",
    ".plc": "application/vnd.mobius.plc",
    ".plf": "application/vnd.pocketlearn",
    ".pls": "application/pls+xml",
    ".pml": "application/vnd.ctc-posml",
    ".png": "image/png",
    ".pnm": "image/x-portable-anymap",
    ".portpkg": "application/vnd.macports.portpkg",
    ".pot": "application/vnd.ms-powerpoint",
    ".potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
    ".potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
    ".ppa": "application/vnd.ms-powerpoint",
    ".ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
    ".ppd": "application/vnd.cups-ppd",
    ".ppm": "image/x-portable-pixmap",
    ".pps": "application/vnd.ms-powerpoint",
    ".ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    ".ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    ".ppt": "application/vnd.ms-powerpoint",
    ".pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".pqa": "application/vnd.palm",
    ".prc": "application/x-mobipocket-ebook",
    ".pre": "application/vnd.lotus-freelance",
    ".prf": "application/pics-rules",
    ".ps": "application/postscript",
    ".psb": "application/vnd.3gpp.pic-bw-small",
    ".psd": "image/vnd.adobe.photoshop",
    ".psf": "application/x-font-linux-psf",
    ".ptid": "application/vnd.pvi.ptid1",
    ".pub": "application/x-mspublisher",
    ".pvb": "application/vnd.3gpp.pic-bw-var",
    ".pwn": "application/vnd.3m.post-it-notes",
    ".pwz": "application/vnd.ms-powerpoint",
    ".py": "text/x-python",
    ".pya": "audio/vnd.ms-playready.media.pya",
    ".pyc": "application/x-python-code",
    ".pyo": "application/x-python-code",
    ".pyv": "video/vnd.ms-playready.media.pyv",
    ".qam": "application/vnd.epson.quickanime",
    ".qbo": "application/vnd.intu.qbo",
    ".qfx": "application/vnd.intu.qfx",
    ".qps": "application/vnd.publishare-delta-tree",
    ".qt": "video/quicktime",
    ".qwd": "application/vnd.quark.quarkxpress",
    ".qwt": "application/vnd.quark.quarkxpress",
    ".qxb": "application/vnd.quark.quarkxpress",
    ".qxd": "application/vnd.quark.quarkxpress",
    ".qxl": "application/vnd.quark.quarkxpress",
    ".qxt": "application/vnd.quark.quarkxpress",
    ".ra": "audio/x-pn-realaudio",
    ".ram": "audio/x-pn-realaudio",
    ".rar": "application/x-rar-compressed",
    ".ras": "image/x-cmu-raster",
    ".rcprofile": "application/vnd.ipunplugged.rcprofile",
    ".rdf": "application/rdf+xml",
    ".rdz": "application/vnd.data-vision.rdz",
    ".rep": "application/vnd.businessobjects",
    ".res": "application/x-dtbresource+xml",
    ".rgb": "image/x-rgb",
    ".rif": "application/reginfo+xml",
    ".rl": "application/resource-lists+xml",
    ".rlc": "image/vnd.fujixerox.edmics-rlc",
    ".rld": "application/resource-lists-diff+xml",
    ".rm": "application/vnd.rn-realmedia",
    ".rmi": "audio/midi",
    ".rmp": "audio/x-pn-realaudio-plugin",
    ".rms": "application/vnd.jcp.javame.midlet-rms",
    ".rnc": "application/relax-ng-compact-syntax",
    ".roff": "text/troff",
    ".rpm": "application/x-rpm",
    ".rpss": "application/vnd.nokia.radio-presets",
    ".rpst": "application/vnd.nokia.radio-preset",
    ".rq": "application/sparql-query",
    ".rs": "application/rls-services+xml",
    ".rsd": "application/rsd+xml",
    ".rss": "application/rss+xml",
    ".rtf": "application/rtf",
    ".rtx": "text/richtext",
    ".s": "text/x-asm",
    ".saf": "application/vnd.yamaha.smaf-audio",
    ".sbml": "application/sbml+xml",
    ".sc": "application/vnd.ibm.secure-container",
    ".scd": "application/x-msschedule",
    ".scm": "application/vnd.lotus-screencam",
    ".scq": "application/scvp-cv-request",
    ".scs": "application/scvp-cv-response",
    ".scurl": "text/vnd.curl.scurl",
    ".sda": "application/vnd.stardivision.draw",
    ".sdc": "application/vnd.stardivision.calc",
    ".sdd": "application/vnd.stardivision.impress",
    ".sdkd": "application/vnd.solent.sdkm+xml",
    ".sdkm": "application/vnd.solent.sdkm+xml",
    ".sdp": "application/sdp",
    ".sdw": "application/vnd.stardivision.writer",
    ".see": "application/vnd.seemail",
    ".seed": "application/vnd.fdsn.seed",
    ".sema": "application/vnd.sema",
    ".semd": "application/vnd.semd",
    ".semf": "application/vnd.semf",
    ".ser": "application/java-serialized-object",
    ".setpay": "application/set-payment-initiation",
    ".setreg": "application/set-registration-initiation",
    ".sfd-hdstx": "application/vnd.hydrostatix.sof-data",
    ".sfs": "application/vnd.spotfire.sfs",
    ".sgl": "application/vnd.stardivision.writer-global",
    ".sgm": "text/sgml",
    ".sgml": "text/sgml",
    ".sh": "application/x-sh",
    ".shar": "application/x-shar",
    ".shf": "application/shf+xml",
    ".si": "text/vnd.wap.si",
    ".sic": "application/vnd.wap.sic",
    ".sig": "application/pgp-signature",
    ".silo": "model/mesh",
    ".sis": "application/vnd.symbian.install",
    ".sisx": "application/vnd.symbian.install",
    ".sit": "application/x-stuffit",
    ".sitx": "application/x-stuffitx",
    ".skd": "application/vnd.koan",
    ".skm": "application/vnd.koan",
    ".skp": "application/vnd.koan",
    ".skt": "application/vnd.koan",
    ".sl": "text/vnd.wap.sl",
    ".slc": "application/vnd.wap.slc",
    ".sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
    ".sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
    ".slt": "application/vnd.epson.salt",
    ".smf": "application/vnd.stardivision.math",
    ".smi": "application/smil+xml",
    ".smil": "application/smil+xml",
    ".snd": "audio/basic",
    ".snf": "application/x-font-snf",
    ".so": "application/octet-stream",
    ".spc": "application/x-pkcs7-certificates",
    ".spf": "application/vnd.yamaha.smaf-phrase",
    ".spl": "application/x-futuresplash",
    ".spot": "text/vnd.in3d.spot",
    ".spp": "application/scvp-vp-response",
    ".spq": "application/scvp-vp-request",
    ".spx": "audio/ogg",
    ".src": "application/x-wais-source",
    ".srx": "application/sparql-results+xml",
    ".sse": "application/vnd.kodak-descriptor",
    ".ssf": "application/vnd.epson.ssf",
    ".ssml": "application/ssml+xml",
    ".stc": "application/vnd.sun.xml.calc.template",
    ".std": "application/vnd.sun.xml.draw.template",
    ".stf": "application/vnd.wt.stf",
    ".sti": "application/vnd.sun.xml.impress.template",
    ".stk": "application/hyperstudio",
    ".stl": "application/vnd.ms-pki.stl",
    ".str": "application/vnd.pg.format",
    ".stw": "application/vnd.sun.xml.writer.template",
    ".sus": "application/vnd.sus-calendar",
    ".susp": "application/vnd.sus-calendar",
    ".sv4cpio": "application/x-sv4cpio",
    ".sv4crc": "application/x-sv4crc",
    ".svd": "application/vnd.svd",
    ".svg": "image/svg+xml",
    ".svgz": "image/svg+xml",
    ".swa": "application/x-director",
    ".swf": "application/x-shockwave-flash",
    ".swi": "application/vnd.arastra.swi",
    ".sxc": "application/vnd.sun.xml.calc",
    ".sxd": "application/vnd.sun.xml.draw",
    ".sxg": "application/vnd.sun.xml.writer.global",
    ".sxi": "application/vnd.sun.xml.impress",
    ".sxm": "application/vnd.sun.xml.math",
    ".sxw": "application/vnd.sun.xml.writer",
    ".t": "text/troff",
    ".tao": "application/vnd.tao.intent-module-archive",
    ".tar": "application/x-tar",
    ".tcap": "application/vnd.3gpp2.tcap",
    ".tcl": "application/x-tcl",
    ".teacher": "application/vnd.smart.teacher",
    ".tex": "application/x-tex",
    ".texi": "application/x-texinfo",
    ".texinfo": "application/x-texinfo",
    ".text": "text/plain",
    ".tfm": "application/x-tex-tfm",
    ".tgz": "application/x-gzip",
    ".tif": "image/tiff",
    ".tiff": "image/tiff",
    ".tmo": "application/vnd.tmobile-livetv",
    ".torrent": "application/x-bittorrent",
    ".tpl": "application/vnd.groove-tool-template",
    ".tpt": "application/vnd.trid.tpt",
    ".tr": "text/troff",
    ".tra": "application/vnd.trueapp",
    ".trm": "application/x-msterminal",
    ".tsv": "text/tab-separated-values",
    ".ttc": "application/x-font-ttf",
    ".ttf": "application/x-font-ttf",
    ".twd": "application/vnd.simtech-mindmapper",
    ".twds": "application/vnd.simtech-mindmapper",
    ".txd": "application/vnd.genomatix.tuxedo",
    ".txf": "application/vnd.mobius.txf",
    ".txt": "text/plain",
    ".u32": "application/x-authorware-bin",
    ".udeb": "application/x-debian-package",
    ".ufd": "application/vnd.ufdl",
    ".ufdl": "application/vnd.ufdl",
    ".umj": "application/vnd.umajin",
    ".unityweb": "application/vnd.unity",
    ".uoml": "application/vnd.uoml+xml",
    ".uri": "text/uri-list",
    ".uris": "text/uri-list",
    ".urls": "text/uri-list",
    ".ustar": "application/x-ustar",
    ".utz": "application/vnd.uiq.theme",
    ".uu": "text/x-uuencode",
    ".vcd": "application/x-cdlink",
    ".vcf": "text/x-vcard",
    ".vcg": "application/vnd.groove-vcard",
    ".vcs": "text/x-vcalendar",
    ".vcx": "application/vnd.vcx",
    ".vis": "application/vnd.visionary",
    ".viv": "video/vnd.vivo",
    ".vor": "application/vnd.stardivision.writer",
    ".vox": "application/x-authorware-bin",
    ".vrml": "model/vrml",
    ".vsd": "application/vnd.visio",
    ".vsf": "application/vnd.vsf",
    ".vss": "application/vnd.visio",
    ".vst": "application/vnd.visio",
    ".vsw": "application/vnd.visio",
    ".vtu": "model/vnd.vtu",
    ".vxml": "application/voicexml+xml",
    ".w3d": "application/x-director",
    ".wad": "application/x-doom",
    ".wav": "audio/x-wav",
    ".wax": "audio/x-ms-wax",
    ".wbmp": "image/vnd.wap.wbmp",
    ".wbs": "application/vnd.criticaltools.wbs+xml",
    ".wbxml": "application/vnd.wap.wbxml",
    ".wcm": "application/vnd.ms-works",
    ".wdb": "application/vnd.ms-works",
    ".wiz": "application/msword",
    ".wks": "application/vnd.ms-works",
    ".wm": "video/x-ms-wm",
    ".wma": "audio/x-ms-wma",
    ".wmd": "application/x-ms-wmd",
    ".wmf": "application/x-msmetafile",
    ".wml": "text/vnd.wap.wml",
    ".wmlc": "application/vnd.wap.wmlc",
    ".wmls": "text/vnd.wap.wmlscript",
    ".wmlsc": "application/vnd.wap.wmlscriptc",
    ".wmv": "video/x-ms-wmv",
    ".wmx": "video/x-ms-wmx",
    ".wmz": "application/x-ms-wmz",
    ".wpd": "application/vnd.wordperfect",
    ".wpl": "application/vnd.ms-wpl",
    ".wps": "application/vnd.ms-works",
    ".wqd": "application/vnd.wqd",
    ".wri": "application/x-mswrite",
    ".wrl": "model/vrml",
    ".wsdl": "application/wsdl+xml",
    ".wspolicy": "application/wspolicy+xml",
    ".wtb": "application/vnd.webturbo",
    ".wvx": "video/x-ms-wvx",
    ".x32": "application/x-authorware-bin",
    ".x3d": "application/vnd.hzn-3d-crossword",
    ".xap": "application/x-silverlight-app",
    ".xar": "application/vnd.xara",
    ".xbap": "application/x-ms-xbap",
    ".xbd": "application/vnd.fujixerox.docuworks.binder",
    ".xbm": "image/x-xbitmap",
    ".xdm": "application/vnd.syncml.dm+xml",
    ".xdp": "application/vnd.adobe.xdp+xml",
    ".xdw": "application/vnd.fujixerox.docuworks",
    ".xenc": "application/xenc+xml",
    ".xer": "application/patch-ops-error+xml",
    ".xfdf": "application/vnd.adobe.xfdf",
    ".xfdl": "application/vnd.xfdl",
    ".xht": "application/xhtml+xml",
    ".xhtml": "application/xhtml+xml",
    ".xhvml": "application/xv+xml",
    ".xif": "image/vnd.xiff",
    ".xla": "application/vnd.ms-excel",
    ".xlam": "application/vnd.ms-excel.addin.macroenabled.12",
    ".xlb": "application/vnd.ms-excel",
    ".xlc": "application/vnd.ms-excel",
    ".xlm": "application/vnd.ms-excel",
    ".xls": "application/vnd.ms-excel",
    ".xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    ".xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xlt": "application/vnd.ms-excel",
    ".xltm": "application/vnd.ms-excel.template.macroenabled.12",
    ".xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    ".xlw": "application/vnd.ms-excel",
    ".xml": "application/xml",
    ".xo": "application/vnd.olpc-sugar",
    ".xop": "application/xop+xml",
    ".xpdl": "application/xml",
    ".xpi": "application/x-xpinstall",
    ".xpm": "image/x-xpixmap",
    ".xpr": "application/vnd.is-xpr",
    ".xps": "application/vnd.ms-xpsdocument",
    ".xpw": "application/vnd.intercon.formnet",
    ".xpx": "application/vnd.intercon.formnet",
    ".xsl": "application/xml",
    ".xslt": "application/xslt+xml",
    ".xsm": "application/vnd.syncml+xml",
    ".xspf": "application/xspf+xml",
    ".xul": "application/vnd.mozilla.xul+xml",
    ".xvm": "application/xv+xml",
    ".xvml": "application/xv+xml",
    ".xwd": "image/x-xwindowdump",
    ".xyz": "chemical/x-xyz",
    ".zaz": "application/vnd.zzazz.deck+xml",
    ".zip": "application/zip",
    ".zir": "application/vnd.zul",
    ".zirz": "application/vnd.zul",
    ".zmm": "application/vnd.handheld-entertainment+xml"
  }[e.toLowerCase()] || null;
}
var Ts = Object.defineProperty, Ps = Object.getOwnPropertyDescriptor, qn = (e) => {
  throw TypeError(e);
}, ce = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ps(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Ts(t, i, a), a;
}, Wi = (e, t, i) => t.has(e) || qn("Cannot " + i), ye = (e, t, i) => (Wi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Be = (e, t, i) => t.has(e) ? qn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $t = (e, t, i, n) => (Wi(e, t, "write to private field"), t.set(e, i), i), T = (e, t, i) => (Wi(e, t, "access private method"), i), gt, Ni, ze, Se, b, In, Sn, Un, On, An, Rn, ni, Fn, Dn, Wn, Bi, ji;
let K = class extends X {
  constructor() {
    super(...arguments), Be(this, b), Be(this, gt, ""), this._progress = 0, Be(this, Ni, new aa(this)), Be(this, ze, []), Be(this, Se);
  }
  set value(e) {
    $t(this, gt, e?.src ?? "");
  }
  get value() {
    return {
      src: ye(this, gt),
      temporaryFileId: this.temporaryFile?.temporaryUnique
    };
  }
  set allowedFileExtensions(e) {
    T(this, b, Sn).call(this, e);
  }
  get allowedFileExtensions() {
    return this._extensions;
  }
  updated(e) {
    super.updated(e), e.has("value") && e.get("value")?.src !== this.value.src && T(this, b, Un).call(this);
  }
  render() {
    return !this.temporaryFile && !this.value.src ? T(this, b, Fn).call(this) : r`
			${this.temporaryFile ? T(this, b, Dn).call(this) : x}
			${this.value.src && this._previewAlias ? T(this, b, Wn).call(this, this.value.src) : x}
		`;
  }
};
gt = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
In = async function() {
  return ye(this, ze).length ? ye(this, ze) : (await new xo(this, _o, "fileUploadPreview", null, (e) => {
    $t(this, ze, e.map((t) => t.manifest));
  }).asPromise(), ye(this, ze));
};
Sn = function(e) {
  if (!e?.length) {
    this._extensions = void 0;
    return;
  }
  this._extensions = e?.map((t) => `.${t}`);
};
Un = async function() {
  this._previewAlias = await T(this, b, On).call(this);
};
On = async function() {
  if (!this.value.src) return;
  const e = await T(this, b, In).call(this), t = e.find(
    (o) => Hi(o.forMimeTypes, "*/*")
  )?.alias;
  let i = null;
  if (this.temporaryFile?.file ? i = this.temporaryFile.file.type : i = T(this, b, An).call(this, this.value.src), !i) return t;
  const n = e.find((o) => Hi(o.forMimeTypes, i));
  if (n) return n.alias;
  const a = e.find((o) => (Array.isArray(o.forMimeTypes) ? o.forMimeTypes : [o.forMimeTypes]).find((c) => {
    const v = c.replace(/\*/g, "");
    if (i.startsWith(v) || i.endsWith(v)) return o.alias;
  }));
  return a ? a.alias : t;
};
An = function(e) {
  if (e.startsWith("data:"))
    return e.substring(5, e.indexOf(";"));
  const t = e.split(".").pop()?.toLowerCase();
  return t ? Es("." + t) : null;
};
Rn = async function(e) {
  this.temporaryFile = {
    temporaryUnique: Re.new(),
    status: G.WAITING,
    file: e.detail.files[0]
  };
  try {
    if ($t(this, Se, new AbortController()), (await ye(this, Ni).uploadOne({
      ...this.temporaryFile,
      onProgress: (i) => {
        this._progress = Math.ceil(i);
      },
      abortSignal: ye(this, Se).signal
    })).status === G.SUCCESS) {
      this.temporaryFile.status = G.SUCCESS;
      const i = URL.createObjectURL(this.temporaryFile.file);
      this.value = { src: i }, this.dispatchEvent(new C());
    } else
      this.temporaryFile.status = G.ERROR, this.requestUpdate("temporaryFile");
  } catch {
    this.temporaryFile && (this.temporaryFile.status = G.ERROR, this.requestUpdate("temporaryFile"));
  } finally {
    $t(this, Se, void 0);
  }
};
ni = function(e) {
  this._dropzone && (e.stopImmediatePropagation(), this._dropzone.browse());
};
Fn = function() {
  return r`
			<uui-file-dropzone
				id="dropzone"
				label="dropzone"
				disallowFolderUpload
				accept=${et(this._extensions?.join(", "))}
				@change=${T(this, b, Rn)}
				@click=${T(this, b, ni)}>
				<uui-button label=${this.localize.term("media_clickToUpload")} @click=${T(this, b, ni)}></uui-button>
			</uui-file-dropzone>
		`;
};
Dn = function() {
  return this.temporaryFile ? r`
			<div id="temporaryFile">
				<div id="fileIcon">
					${he(
    this.temporaryFile.status === G.SUCCESS,
    () => r`<umb-icon name="check" color="green"></umb-icon>`
  )}
					${he(
    this.temporaryFile.status === G.ERROR,
    () => r`<umb-icon name="wrong" color="red"></umb-icon>`
  )}
				</div>
				<div id="fileDetails">
					<div id="fileName">${this.temporaryFile.file.name}</div>
					<div id="fileSize">${no(this.temporaryFile.file.size, { decimals: 2 })}: ${this._progress}%</div>
					${he(
    this.temporaryFile.status === G.WAITING,
    () => r`<div id="progress"><uui-loader-bar progress=${this._progress}></uui-loader-bar></div>`
  )}
					${he(
    this.temporaryFile.status === G.ERROR,
    () => r`<div id="error">An error occured</div>`
  )}
				</div>
				<div id="fileActions">
					${he(
    this.temporaryFile.status === G.WAITING,
    () => r`
							<uui-button compact @click=${T(this, b, ji)} label=${this.localize.term("general_cancel")}>
								<uui-icon name="remove"></uui-icon>${this.localize.term("general_cancel")}
							</uui-button>
						`,
    () => T(this, b, Bi).call(this)
  )}
				</div>
			</div>
		` : x;
};
Wn = function(e) {
  return r`
			<div id="wrapper">
				<div id="wrapperInner">
					<umb-extension-slot
						type="fileUploadPreview"
						.props=${{ path: e, file: this.temporaryFile?.file }}
						.filter=${(t) => t.alias === this._previewAlias}>
					</umb-extension-slot>
				</div>
			</div>
			${T(this, b, Bi).call(this)}
		`;
};
Bi = function() {
  return r`
			<uui-button compact @click=${T(this, b, ji)} label=${this.localize.term("content_uploadClear")}>
				<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
			</uui-button>
		`;
};
ji = function() {
  this.value = { src: void 0 }, this.temporaryFile = void 0, this._progress = 0, this.dispatchEvent(new C()), ye(this, Se)?.abort();
};
K.styles = [
  q`
			:host {
				position: relative;
			}
			uui-icon {
				vertical-align: sub;
				margin-right: var(--uui-size-space-4);
			}

			#wrapper {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
				gap: var(--uui-size-space-4);
				box-sizing: border-box;
			}

			#wrapper:has(umb-input-upload-field-file) {
				padding: var(--uui-size-space-4);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}

			#wrapperInner {
				position: relative;
				display: flex;
				width: fit-content;
				max-width: 100%;
			}

			#temporaryFile {
				display: grid;
				grid-template-columns: auto auto auto;
				width: fit-content;
				max-width: 100%;
				margin: var(--uui-size-layout-1) 0;
				padding: var(--uui-size-space-3);
				border: 1px dashed var(--uui-color-divider-emphasis);
			}

			#fileIcon,
			#fileActions {
				place-self: center center;
				padding: 0 var(--uui-size-layout-1);
			}

			#fileName {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: var(--uui-size-5);
			}

			#fileSize {
				font-size: var(--uui-font-size-small);
				color: var(--uui-color-text-alt);
			}

			#error {
				color: var(--uui-color-danger);
			}

			uui-file-dropzone {
				position: relative;
				display: block;
				padding: 3px; /** Dropzone background is blurry and covers slightly into other elements. Hack to avoid this */
			}
			uui-file-dropzone::after {
				content: '';
				position: absolute;
				inset: 0;
				cursor: pointer;
				border: 1px dashed var(--uui-color-divider-emphasis);
			}
		`
];
ce([
  l({ type: Object })
], K.prototype, "value", 1);
ce([
  l({ type: Array })
], K.prototype, "allowedFileExtensions", 1);
ce([
  p()
], K.prototype, "temporaryFile", 2);
ce([
  p()
], K.prototype, "_progress", 2);
ce([
  p()
], K.prototype, "_extensions", 2);
ce([
  p()
], K.prototype, "_previewAlias", 2);
ce([
  L("#dropzone")
], K.prototype, "_dropzone", 2);
K = ce([
  I("umb-input-upload-field")
], K);
export {
  _r as A,
  xr as B,
  Ie as C,
  Kt as D,
  Zt as E,
  sr as F,
  pr as G,
  cr as H,
  dr as I,
  ur as J,
  hr as K,
  wr as L,
  g as U,
  ms as a,
  z as b,
  ie as c,
  st as d,
  ui as e,
  K as f,
  yr as g,
  te as h,
  rt as i,
  lr as j,
  ar as k,
  nr as l,
  or as m,
  Do as n,
  xi as o,
  rr as p,
  mr as q,
  No as r,
  os as s,
  vr as t,
  jo as u,
  ss as v,
  Yo as w,
  fr as x,
  gr as y,
  rs as z
};
//# sourceMappingURL=input-upload-field.element-DpMbvzUB.js.map
