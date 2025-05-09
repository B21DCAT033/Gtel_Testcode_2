import { UmbContextToken as w, UMB_CONTEXT_REQUEST_EVENT_TYPE as A, UmbContextBoundary as L, UmbContextProvider as P } from "@umbraco-cms/backoffice/context-api";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as W } from "@umbraco-cms/backoffice/extension-registry";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { customElement as X, html as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbBasicState as g, UmbStringState as j, UmbObjectState as $, appendToFrozenArray as F } from "@umbraco-cms/backoffice/observable-api";
import { UUIModalCloseEvent as M } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ROUTE_CONTEXT as k } from "@umbraco-cms/backoffice/router";
import { loadManifestElement as H, createExtensionElement as Q } from "@umbraco-cms/backoffice/extension-api";
import { U as b } from "./modal-token-wEQqBBXI.js";
import { UmbId as Y } from "@umbraco-cms/backoffice/id";
import { UmbControllerBase as q, UmbContextBase as J } from "@umbraco-cms/backoffice/class-api";
import { umbDeepMerge as K } from "@umbraco-cms/backoffice/utils";
import { UmbModalToken as Z } from "@umbraco-cms/backoffice/modal";
const C = new w("UmbModalContext");
var ee = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, te = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ee(e, i) : e, l = t.length - 1, v; l >= 0; l--)
    (v = t[l]) && (n = v(n) || n);
  return n;
}, y = (t, e, i) => e.has(t) || U("Cannot " + i), s = (t, e, i) => (y(t, e, "read from private field"), i ? i.call(t) : e.get(t)), d = (t, e, i) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), c = (t, e, i, a) => (y(t, e, "write to private field"), e.set(t, i), i), m = (t, e, i) => (y(t, e, "access private method"), i), o, u, p, r, f, h, x, V, R, T, D, O, S, E;
let _ = class extends I {
  constructor() {
    super(...arguments), d(this, h), d(this, o), d(this, u, new g(void 0)), d(this, p), d(this, r), d(this, f, (t) => {
      if (s(this, o)?.isResolved() === !1 && s(this, o)?.router) {
        t.stopImmediatePropagation(), t.preventDefault(), s(this, o)._internal_removeCurrentModal();
        return;
      }
      this.element?.removeEventListener(M, s(this, f)), s(this, o)?.reject({ type: "close" });
    }), d(this, E, () => {
      this.destroy();
    });
  }
  async init(t) {
    if (s(this, o) === t) return;
    if (c(this, o, t), !s(this, o)) {
      this.destroy();
      return;
    }
    s(this, o).addEventListener("umb:destroy", s(this, E)), this.element = await m(this, h, x).call(this), this.element.addEventListener(M, s(this, f)), this.element.addEventListener(A, (i) => {
      s(this, o) && i.contextAlias !== C.contextAlias && (i.stopImmediatePropagation(), s(this, o).getHostElement().dispatchEvent(i.clone()));
    }), s(this, o).onSubmit().then(
      () => {
        this.element?.close();
      },
      () => {
        this.element?.close();
      }
    ), s(this, o).router ? (c(this, r, document.createElement("umb-router-slot")), s(this, r).routes = [
      {
        path: "",
        component: document.createElement("slot")
      }
    ], s(this, r).parent = s(this, o).router) : (c(this, r, document.createElement("div")), s(this, r).style.display = "contents", new L(s(this, r), k).hostConnected()), this.element.appendChild(s(this, r)), m(this, h, T).call(this, s(this, o).alias.toString()), new P(this.element, C, s(this, o)).hostConnected();
  }
  render() {
    return G`${this.element}`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.destroy();
  }
  destroy() {
    s(this, u).destroy(), s(this, p)?.destroy(), c(this, p, void 0), s(this, o) && (s(this, o).removeEventListener("umb:destroy", s(this, E)), s(this, o).destroy(), c(this, o, void 0)), super.destroy();
  }
};
o = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
x = async function() {
  if (s(this, o).type == "custom" && s(this, o)?.element) {
    const t = await H(s(this, o).element);
    return new t();
  }
  return s(this, o).type === "sidebar" ? m(this, h, V).call(this) : m(this, h, R).call(this);
};
V = function() {
  const t = document.createElement("uui-modal-sidebar");
  return this.observe(
    s(this, o).size,
    (e) => {
      t.size = e;
    },
    "observeSize"
  ), t;
};
R = function() {
  const t = document.createElement("uui-modal-dialog"), e = document.createElement("uui-dialog");
  return t.appendChild(e), t;
};
T = function(t) {
  s(this, p)?.destroy(), this.observe(W.byTypeAndAlias("modal", t), async (e) => {
    if (m(this, h, S).call(this), e) {
      const i = await m(this, h, D).call(this, e);
      i && m(this, h, O).call(this, i);
    }
  });
};
D = async function(t) {
  const e = await Q(t);
  if (s(this, o))
    return e && (e.manifest = t, e.data = s(this, o).data, e.modalContext = s(this, o)), e;
};
O = function(t) {
  s(this, r).appendChild(t), s(this, u).setValue(t);
};
S = function() {
  const t = s(this, u).getValue();
  t && (s(this, r).removeChild(t), s(this, u).setValue(void 0));
};
E = /* @__PURE__ */ new WeakMap();
_.styles = [N];
_ = te([
  X("umb-modal")
], _);
class se extends q {
  constructor(e, i, a) {
    super(e), this.type = "dialog", this.router = null, this.#r = new j("small"), this.size = this.#r.asObservable(), this.key = a.modal?.key || Y.new(), this.router = a.router ?? null, this.alias = i;
    let n = "small";
    this.alias instanceof b && (this.type = this.alias.getDefaultModal()?.type || this.type, n = this.alias.getDefaultModal()?.size ?? n, this.element = this.alias.getDefaultModal()?.element || this.element, this.backdropBackground = this.alias.getDefaultModal()?.backdropBackground || this.backdropBackground), this.type = a.modal?.type || this.type, n = a.modal?.size ?? n, this.element = a.modal?.element || this.element, this.backdropBackground = a.modal?.backdropBackground || this.backdropBackground, this.#r.setValue(n);
    const l = this.alias instanceof b ? this.alias.getDefaultData() : void 0;
    this.data = Object.freeze(
      // If we have both data and defaultData perform a deep merge
      a.data && l ? K(a.data, l) : (
        // otherwise pick one of them:
        a.data ?? l
      )
    );
    const v = a.value ?? (this.alias instanceof b ? this.alias.getDefaultValue() : void 0);
    this.#s = new $(v), this.value = this.#s.asObservable(), this.#l = new Promise((B, z) => {
      this.#o = B, this.#a = z;
    });
  }
  //
  // TODO: Come up with a better name:
  #e;
  #i;
  #t;
  #l;
  #o;
  #a;
  #n() {
    this.#o = void 0, this.#a = void 0, this.#t = !0;
  }
  #s;
  #r;
  #h;
  _internal_setCurrentModalPath(e) {
    this.#h = e;
  }
  async _internal_removeCurrentModal() {
    (await this.getContext(k))._internal_removeModalPath(this.#h);
  }
  forceResolve() {
    if (this.#e) {
      const e = this.#o;
      this.#n(), e?.(this.getValue());
    } else {
      const e = this.#a;
      this.#n(), e?.(this.#i ?? { type: "close" });
    }
  }
  isResolved() {
    return this.#t === !0;
  }
  // note, this methods is private  argument is not defined correctly here, but requires to be fix by appending the OptionalSubmitArgumentIfUndefined type when newing up this class.
  /**
   * Submits this modal, returning with a value to the initiator of the modal.
   * @public
   * @memberof UmbModalContext
   */
  submit() {
    if (!this.#t) {
      if (this.router) {
        this.#e = !0, this._internal_removeCurrentModal();
        return;
      }
      this.#o?.(this.getValue()), this.#n();
    }
  }
  /**
   * Closes this modal
   * @param reason
   * @public
   * @memberof UmbModalContext
   */
  reject(e) {
    if (!this.#t) {
      if (this.router) {
        this.#e = !1, this.#i = e, this._internal_removeCurrentModal();
        return;
      }
      this.#a?.(e), this.#n();
    }
  }
  /**
   * Gives a Promise which will be resolved when this modal is submitted.
   * @returns {Promise<ModalValue>}
   * @public
   * @memberof UmbModalContext
   */
  onSubmit() {
    return this.#l;
  }
  /**
   * Gives the current value of this modal.
   * @returns {ModalValue}
   * @public
   * @memberof UmbModalContext
   */
  getValue() {
    return this.#s.getValue();
  }
  /**
   * Sets the current value of this modal.
   * @param value
   * @public
   * @memberof UmbModalContext
   */
  setValue(e) {
    this.#s.setValue(e);
  }
  /**
   * Updates the current value of this modal.
   * @param partialValue
   * @public
   * @memberof UmbModalContext
   */
  updateValue(e) {
    this.#s.update(e);
  }
  /**
   * Updates the size this modal.
   * @param size
   * @public
   * @memberof UmbModalContext
   */
  setModalSize(e) {
    this.#r.setValue(e);
  }
  destroy() {
    this.dispatchEvent(new CustomEvent("umb:destroy")), this.#s.destroy(), this.router = null, this.data = void 0, super.destroy();
  }
}
class be extends J {
  constructor(e) {
    super(e, ie), this.#e = new g([]), this.modals = this.#e.asObservable(), this.#t = () => {
      this.#i();
    }, window.addEventListener("navigationsuccess", this.#t);
  }
  #e;
  /**
   * Opens a modal or sidebar modal
   * @public
   * @param {UmbControllerHost} host - The host that the modal should be attached to, this is usually the controller/element that is opening the modal. This additionally acts as the modal origin for the context api.
   * @param {(string | UmbModalToken)} modalAlias - The alias or token of the modal to open
   * @param {UmbModalContextClassArgs} args - The arguments for this setup.
   * @returns {*}  {UmbModalHandler}
   * @memberof UmbModalManagerContext
   */
  open(e, i, a = {}) {
    const n = new se(e, i, a);
    return this.#e.setValue(
      F(this.#e.value, n, (l) => l.key === n.key)
    ), n;
  }
  /**
   * Closes a modal or sidebar modal
   * @private
   * @param {string} key - The key of the modal to close
   * @memberof UmbModalManagerContext
   */
  close(e) {
    const i = this.#e.getValue().find((a) => a.key === e);
    i && i.forceResolve();
  }
  remove(e) {
    this.#e.setValue(this.#e.getValue().filter((i) => i.key !== e));
  }
  /**
   * Closes all modals that is not routable
   * @private
   * @memberof UmbModalManagerContext
   */
  #i() {
    this.#e.getValue().filter((e) => e.router === null).forEach((e) => {
      e.forceResolve();
    });
  }
  #t;
  destroy() {
    super.destroy(), this.#e.destroy(), window.removeEventListener("navigationsuccess", this.#t);
  }
}
const ie = new w(
  "UmbModalManagerContext"
), _e = new Z(
  "Umb.Modal.ErrorViewer",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
export {
  ie as U,
  _e as a,
  _ as b,
  C as c,
  be as d
};
//# sourceMappingURL=error-viewer-modal.token-wKYkoQeY.js.map
