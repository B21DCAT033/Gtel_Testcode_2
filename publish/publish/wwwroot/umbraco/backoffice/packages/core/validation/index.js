import { css as I, property as b, customElement as k, repeat as L, unsafeHTML as B, html as P, directive as $, AsyncDirective as S, nothing as V } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
import { UmbId as _ } from "@umbraco-cms/backoffice/id";
import { UmbArrayState as j, UmbObjectState as N, defaultMemoization as R, simpleHashCode as W } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as u, UmbContextBase as H } from "@umbraco-cms/backoffice/class-api";
import { UmbBindServerValidationToFormControl as K, UmbFormControlValidator as q } from "@umbraco-cms/backoffice/validation";
class O extends Event {
  constructor(t) {
    super(t, { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
class l extends O {
  static {
    this.TYPE = "valid";
  }
  constructor() {
    super(l.TYPE);
  }
}
class d extends O {
  static {
    this.TYPE = "invalid";
  }
  constructor() {
    super(d.TYPE);
  }
}
var G = Object.defineProperty, J = Object.getOwnPropertyDescriptor, w = (i) => {
  throw TypeError(i);
}, D = (i, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? J(t, e) : t, n = i.length - 1, a; n >= 0; n--)
    (a = i[n]) && (s = (r ? a(t, e, s) : a(s)) || s);
  return r && s && G(t, e, s), s;
}, z = (i, t, e) => t.has(i) || w("Cannot " + e), f = (i, t, e) => (z(i, t, "read from private field"), e ? e.call(i) : t.get(i)), C = (i, t, e) => t.has(i) ? w("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), v, g;
let p = class extends Y {
  constructor() {
    super(), this._for = null, this._messages = /* @__PURE__ */ new Map(), C(this, v, async (i) => {
      const t = i.composedPath()[0];
      t.pristine === !1 ? this._messages.set(t, this.localize.string(t.validationMessage)) : this._messages.delete(t), this.requestUpdate();
    }), C(this, g, (i) => {
      const t = i.composedPath()[0];
      this._messages.delete(t), this.requestUpdate();
    }), this.for === null && (this.for = this);
  }
  get for() {
    return this._for;
  }
  set for(i) {
    let t = null;
    typeof i == "string" ? t = this.getRootNode()?.getElementById(i) : i instanceof HTMLElement && (t = i);
    const e = t ?? this, r = this._for;
    r !== e && (r !== null && (r.removeEventListener(d.TYPE, f(this, v)), r.removeEventListener(l.TYPE, f(this, g))), this._for = e, this._for.addEventListener(d.TYPE, f(this, v)), this._for.addEventListener(l.TYPE, f(this, g)));
  }
  render() {
    return P`
			<slot></slot>
			<div id="messages">
				${L(this._messages, (i) => P`<div>${B(i[1])}</div>`)}
				<slot name="message"></slot>
			</div>
		`;
  }
};
v = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
p.styles = [
  I`
			#messages {
				color: var(--uui-color-danger-standalone);
			}
		`
];
D([
  b({ reflect: !1, attribute: !0 })
], p.prototype, "for", 1);
p = D([
  k("umb-form-validation-message")
], p);
const Q = "#validation_invalidEmpty", Vt = "#validation_invalidFalse";
function Z(i, t) {
  if (t === "$") return i;
  if (t.startsWith("$["))
    return A(i, t.slice(2));
  const e = t.startsWith("$.") ? t.slice(2) : t;
  return y(i, e);
}
function y(i, t) {
  if (!i) return;
  const e = t.match(/\.|\[/);
  if (e === null || e.index === void 0) return i[t];
  const r = t.slice(0, e.index), s = t.slice(e.index + 1);
  if (!r) return;
  const n = i[r];
  return s === void 0 ? n : Array.isArray(n) ? A(n, s) : y(n, s);
}
function A(i, t) {
  if (!i) return;
  const e = t.match(/\]/);
  if (!e) return;
  const r = t.slice(0, e.index);
  if (r.startsWith("?(") && r.endsWith(")")) {
    const s = X(r), n = i.findIndex(s[0]);
    if (n === -1) return;
    const a = i[n];
    return e.index === void 0 || e.index + 1 >= t.length ? a : y(a, t.slice(e.index + 2)) ?? a;
  } else {
    const s = parseInt(r);
    if (isNaN(s)) return;
    const n = i[s];
    return e.index === void 0 || e.index + 1 >= t.length ? n : y(n, t.slice(e.index + 2)) ?? n;
  }
}
function X(i) {
  return i.slice(2, -1).split(" && ").map((r) => {
    const [s, n] = r.split(" == "), a = s.slice(2), o = n.slice(1, -1);
    return (h) => h[a] === o;
  });
}
const c = new T("UmbValidationContext");
function m(i, t) {
  return i.indexOf(t) === 0 && (i.length === t.length || i[t.length] === "." || i[t.length] === "[");
}
class tt {
  constructor() {
    this.#t = new j([], (t) => t.key), this.messages = this.#t.asObservable(), this.#i = 0, this.#s = [];
  }
  #t;
  debug(t) {
    this.messages.subscribe((e) => console.log(t, e));
  }
  getMessages() {
    return this.#t.getValue();
  }
  #i;
  initiateChange() {
    this.#i++, this.#t.mute();
  }
  finishChange() {
    this.#i--, this.#i === 0 && this.#t.unmute();
  }
  getHasAnyMessages() {
    return this.#t.getValue().length !== 0;
  }
  getMessagesOfPathAndDescendant(t) {
    return this.#t.getValue().filter((e) => m(e.path, t));
  }
  messagesOfPathAndDescendant(t) {
    return this.#t.asObservablePart((e) => e.filter((r) => m(r.path, t)));
  }
  messagesOfTypeAndPath(t, e) {
    return this.#t.asObservablePart((r) => r.filter((s) => s.type === t && s.path === e));
  }
  hasMessagesOfPathAndDescendant(t) {
    return this.#t.asObservablePart((e) => e.some((r) => m(r.path, t)));
  }
  getHasMessagesOfPathAndDescendant(t) {
    return this.#t.getValue().some(
      (e) => e.path.indexOf(t) === 0 && (e.path.length === t.length || e.path[t.length] === "." || e.path[t.length] === "[")
    );
  }
  addMessage(t, e, r, s = _.new()) {
    e = this.#e(e) ?? e, !this.#t.getValue().find((n) => n.type === t && n.path === e && n.body === r) && (this.initiateChange(), this.#t.appendOne({ type: t, key: s, path: e, body: r }), this.finishChange());
  }
  addMessages(t, e, r) {
    e = this.#e(e) ?? e;
    const s = this.#t.getValue(), n = r.filter(
      (a) => s.find((o) => o.type === t && o.path === e && o.body === a) === void 0
    );
    this.initiateChange(), this.#t.append(n.map((a) => ({ type: t, key: _.new(), path: e, body: a }))), this.finishChange();
  }
  removeMessageByKey(t) {
    this.initiateChange(), this.#t.removeOne(t), this.finishChange();
  }
  removeMessageByKeys(t) {
    t.length !== 0 && (this.initiateChange(), this.#t.filter((e) => t.indexOf(e.key) === -1), this.finishChange());
  }
  removeMessagesByType(t) {
    this.initiateChange(), this.#t.filter((e) => e.type !== t), this.finishChange();
  }
  removeMessagesByPath(t) {
    this.initiateChange(), this.#t.filter((e) => e.path !== t), this.finishChange();
  }
  removeMessagesAndDescendantsByPath(t) {
    this.initiateChange(), this.#t.filter((e) => m(e.path, t)), this.finishChange();
  }
  removeMessagesByTypeAndPath(t, e) {
    this.initiateChange(), this.#t.filter((r) => !(r.type === t && r.path === e)), this.finishChange();
  }
  #e(t) {
    for (const e of this.#s) {
      const r = e.translate(t);
      if (r)
        return this.#e(r) ?? r;
    }
  }
  #s;
  addTranslator(t) {
    this.initiateChange(), this.#s.indexOf(t) === -1 && this.#s.push(t);
    for (const e of this.#t.getValue()) {
      const r = this.#e(e.path);
      r && this.#t.updateOne(e.key, { path: r });
    }
    this.finishChange();
  }
  removeTranslator(t) {
    const e = this.#s.indexOf(t);
    e !== -1 && this.#s.splice(e, 1);
  }
  clear() {
    this.#t.setValue([]);
  }
  destroy() {
    this.#s = [], this.#t.destroy();
  }
}
function x(i, t, e) {
  if (i.startsWith(t + ".") || i === t)
    return e + i.slice(t.length);
}
class et extends u {
  constructor(t) {
    super(t), this.#i = new N(void 0), this.#e = [], this.#s = !1, this.#r = !1, this.messages = new tt();
  }
  // The current provider controller, that is providing this context:
  #t;
  #i;
  translationDataOf(t) {
    return this.#i.asObservablePart((e) => Z(e, t));
  }
  setTranslationData(t) {
    this.#i.setValue(t);
  }
  getTranslationData() {
    return this.#i.getValue();
  }
  #e;
  #s;
  #r;
  #n;
  #a;
  #h;
  #o;
  /**
   * Add a path translator to this validation context.
   * @param translator
   */
  async addTranslator(t) {
    this.messages.addTranslator(t);
  }
  /**
   * Remove a path translator from this validation context.
   * @param translator
   */
  async removeTranslator(t) {
    this.messages?.removeTranslator(t);
  }
  #l;
  /**
   * Provide this validation context to a specific controller host.
   * This can be used to Host a validation context in a Workspace, but provide it on a certain scope, like a specific Workspace View.
   * @param controllerHost {UmbClassInterface}
   */
  provideAt(t) {
    this.#l !== t && (this.#t?.destroy(), this.#l = t, this.#t = t.provideContext(c, this));
  }
  /**
   * Define a specific data path for this validation context.
   * This will turn this validation context into a sub-context of the parent validation context.
   * This means that a two-way binding for messages will be established between the parent and the sub-context.
   * And it will inherit the Translation Data from its parent.
   *
   * messages and data will be localizes accordingly to the given data path.
   * @param dataPath {string} - The data path to bind this validation context to.
   * @example
   * ```ts
   * const validationContext = new UmbValidationContext(this);
   * validationContext.setDataPath("$.values[?(@.alias == 'my-property')].value");
   * ```
   *
   * A message with the path: '$.values[?(@.alias == 'my-property')].value.innerProperty', will for above example become '$.innerProperty' for the local Validation Context.
   */
  setDataPath(t) {
    if (this.#o) {
      if (this.#o === t) return;
      throw new Error("Data path is already set, we do not support changing the context data-path as of now.");
    }
    t && (this.#o = t, this.consumeContext(c, (e) => {
      this.#n && this.#n.removeValidator(this), this.#n = e, e.addValidator(this), this.messages.clear(), this.observe(e.translationDataOf(t), (r) => {
        this.setTranslationData(r);
      }), this.observe(
        e.messages.messagesOfPathAndDescendant(t),
        (r) => {
          if (this.messages.initiateChange(), this.#a) {
            const s = this.#a.filter((n) => !r.find((a) => a.key === n.key));
            this.messages.removeMessageByKeys(s.map((n) => n.key));
          }
          this.#a = r, r.forEach((s) => {
            const n = x(s.path, this.#o, "$");
            if (n === void 0)
              throw new Error(
                "Path was not transformed correctly and can therefor not be transfered to the local validation context messages."
              );
            this.messages.addMessage(s.type, n, s.body, s.key);
          }), this.messages.finishChange();
        },
        "observeParentMessages"
      ), this.observe(
        this.messages.messages,
        (r) => {
          if (this.#n) {
            if (this.#n.messages.initiateChange(), this.#h) {
              const s = this.#h.filter((n) => !r.find((a) => a.key === n.key));
              this.#n.messages.removeMessageByKeys(s.map((n) => n.key));
            }
            this.#h = r, r.forEach((s) => {
              const n = x(s.path, "$", this.#o);
              if (n === void 0)
                throw new Error(
                  "Path was not transformed correctly and can therefor not be synced with parent messages."
                );
              this.#n.messages.addMessage(s.type, n, s.body, s.key);
            }), this.#n.messages.finishChange();
          }
        },
        "observeLocalMessages"
      );
    }).skipHost());
  }
  hostConnected() {
    super.hostConnected(), this.#n && this.#n.addValidator(this);
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#n && this.#n.removeValidator(this);
  }
  /**
   * Get if this context is valid.
   * Notice this does not verify the validity.
   * @returns {boolean}
   */
  get isValid() {
    return this.#r;
  }
  /**
   * Add a validator to this context.
   * This validator will have to be valid for the context to be valid.
   * If the context is in validation mode, the validator will be validated immediately.
   * @param validator { UmbValidator } - The validator to add to this context.
   */
  addValidator(t) {
    if (!this.#e.includes(t)) {
      if (t === this)
        throw new Error("Cannot add it self as validator");
      this.#e.push(t), this.#s && this.validate();
    }
  }
  /**
   * Remove a validator from this context.
   * @param validator {UmbValidator} - The validator to remove from this context.
   */
  removeValidator(t) {
    const e = this.#e.indexOf(t);
    e !== -1 && (this.#e.splice(e, 1), this.#s && this.validate());
  }
  /**
   * Validate this context, all the validators of this context will be validated.
   * Notice its a recursive check meaning sub validation contexts also validates their validators.
   * @returns succeed {Promise<boolean>} - Returns a promise that resolves to true if the validation succeeded.
   */
  async validate() {
    this.#s = !0;
    const t = await Promise.all(this.#e.map((s) => s.validate())).then(
      () => !0,
      () => !1
    );
    if (this.messages === void 0)
      return Promise.reject();
    const r = this.messages.getHasAnyMessages() ? !1 : t;
    return this.#r = r, r === !1 ? (this.focusFirstInvalidElement(), Promise.reject()) : Promise.resolve();
  }
  /**
   * Focus the first invalid element that this context can find.
   */
  focusFirstInvalidElement() {
    const t = this.#e.find((e) => !e.isValid);
    t && t.focusFirstInvalidElement();
  }
  /**
   * Reset the validation state of this context.
   */
  reset() {
    this.#s = !1, this.messages.clear(), this.#e.forEach((t) => t.reset());
  }
  #d() {
    this.#e === void 0 || this.#e.length === 0 || (this.#e.forEach((t) => {
      t.destroy();
    }), this.#e = []);
  }
  destroy() {
    this.#t?.destroy(), this.#t = void 0, this.#n && this.#n.removeValidator(this), this.#n = void 0, this.#d(), this.messages?.destroy(), this.messages = void 0, super.destroy();
  }
}
class bt extends et {
  constructor(t) {
    super(t), this.provideContext(c, this);
  }
  /**
   * Provides the validation context to the current host, if not already provided to a different host.
   * @deprecated No need to provide, this happens automatically. (Do notice this was necessary in 14.3.-rc, but removed in 14.3 release)
   * @returns instance {UmbValidationController} - Returns it self.
   */
  provide() {
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  provideAt(t) {
    throw new Error(
      "UmbValidationContext cannot be used to provide at a different host. Use the UmbValidationController instead."
    );
  }
}
const st = new T(
  "UmbServerModelValidationContext"
);
function F(i) {
  const t = [`@.alias == '${i.alias}'`];
  return i.culture !== void 0 && t.push(`@.culture == ${i.culture ? `'${i.culture}'` : "null"}`), i.segment !== void 0 && t.push(`@.segment == ${i.segment ? `'${i.segment}'` : "null"}`), `?(${t.join(" && ")})`;
}
function it(i) {
  const t = [`@.culture == ${i.culture ? `'${i.culture}'` : "null"}`];
  return i.segment !== void 0 && t.push(`@.segment == ${i.segment ? `'${i.segment}'` : "null"}`), `?(${t.join(" && ")})`;
}
const rt = /@\.([a-zA-Z_$][\w$]*)\s*==\s*['"]([^'"]*)['"]/g;
function Et(i) {
  const t = {};
  let e;
  for (; (e = rt.exec(i)) !== null; )
    t[e[1]] = e[2];
  return t;
}
class Pt extends H {
  #t;
  #i;
  #e;
  #s;
  #r = !0;
  #n;
  getData() {
    return this.#n;
  }
  constructor(t) {
    super(t, st), this.consumeContext(c, (e) => {
      this.#s && this.#s.removeValidator(this), this.#s = e, e.addValidator(this);
    }).asPromise();
  }
  async askServerForValidation(t, e) {
    this.#s?.messages.removeMessagesByType("server"), this.#r = !1, this.#e?.(), this.#t = new Promise((s, n) => {
      this.#i = s, this.#e = n;
    }), this.#n = t;
    const { error: r } = await e;
    if (this.#r = !r, this.#r)
      this.#s?.setTranslationData(void 0);
    else {
      if (!this.#s)
        throw new Error("No context available for translation.");
      this.#s.setTranslationData(t);
      const s = r.body;
      s?.errors && Object.keys(s.errors).forEach((n) => {
        this.#s.messages.addMessages("server", n, s.errors[n]);
      }), s?.missingProperties && [...new Set(s.missingProperties)].forEach((a) => {
        this.#n.variants.forEach((o) => {
          const h = `$.values[${F({
            alias: a,
            culture: o.culture,
            segment: o.segment
          })}].value`;
          this.#s.messages.addMessages("server", h, [Q]);
        });
      });
    }
    this.#i?.(), this.#i = void 0, this.#e = void 0;
  }
  get isValid() {
    return this.#r;
  }
  async validate() {
    return this.#t && await this.#t, this.#r ? Promise.resolve() : Promise.reject();
  }
  reset() {
    this.#r = !0, this.#e?.(), this.#i = void 0, this.#e = void 0;
  }
  focusFirstInvalidElement() {
  }
  hostConnected() {
    super.hostConnected(), this.#s && this.#s.addValidator(this);
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#s && (this.#s.removeValidator(this), this.#s = void 0);
  }
  destroy() {
    super.destroy();
  }
}
const nt = Symbol();
class _t extends u {
  #t;
  #i;
  #e;
  #s = [];
  #r = !1;
  #n;
  set value(t) {
    if (this.#r)
      this.#n = t;
    else if (!R(this.#n, t)) {
      this.#n = t;
      const e = this.#s.filter((r) => r.type === "server").map((r) => r.key);
      this.#t?.messages.removeMessageByKeys(e);
    }
  }
  constructor(t, e, r) {
    super(t, "umbFormControlValidation_" + W(r)), this.#i = e, this.consumeContext(c, (s) => {
      this.#t = s, this.observe(
        s.messages.messagesOfTypeAndPath("server", r),
        (n) => {
          this.#s = n, this.#r = n.length === 0, this.#r ? this.#h() : this.#a();
        },
        nt
      );
    });
  }
  #a() {
    this.#e || (this.#e = this.#i.addValidator(
      "customError",
      () => this.#s.map((t) => t.body).join(", "),
      () => !this.#r
    )), this.#i.checkValidity();
  }
  #h() {
    !this.#i || !this.#e || (this.#i.removeValidator(this.#e), this.#e = void 0, this.#i.checkValidity());
  }
  validate() {
    return this.#r ? Promise.resolve() : Promise.reject();
  }
  /**
   * Resets the validation state of this validator.
   */
  reset() {
    this.#r = !1, this.#i.pristine = !0;
  }
  /*getMessages(): string[] {
  	return [this.#control.validationMessage];
  }*/
  focusFirstInvalidElement() {
    this.#i.focusFirstInvalidElement();
  }
  destroy() {
    this.#t = void 0, this.#h(), this.#i = void 0, super.destroy();
  }
}
class Ct extends u {
  // The path to the data that this validator is validating.
  #t;
  #i;
  #e;
  #s = !0;
  constructor(t, e, r) {
    super(t), this.#t = r, this.consumeContext(c, (s) => {
      this.#i && this.#i.removeValidator(this), this.#i = s, s.addValidator(this), r && s.messages.getHasMessagesOfPathAndDescendant(r) && (e.pristine = !1);
    }), this.#e = e;
  }
  get isValid() {
    return this.#s;
  }
  #r(t) {
    this.#s !== t && (this.#s = t, this.#t && (t ? this.#i?.messages.removeMessagesByTypeAndPath("client", this.#t) : this.#i?.messages.addMessages("client", this.#t, [this.#e.validationMessage])));
  }
  #n = this.#r.bind(this, !1);
  #a = this.#r.bind(this, !0);
  validate() {
    return this.#s = this.#e.checkValidity(), this.#s ? Promise.resolve() : Promise.reject();
  }
  /**
   * Resets the validation state of this validator.
   */
  reset() {
    this.#s = !1, this.#e.pristine = !0;
  }
  /*getMessages(): string[] {
  	return [this.#control.validationMessage];
  }*/
  focusFirstInvalidElement() {
    this.#e.focusFirstInvalidElement();
  }
  hostConnected() {
    super.hostConnected(), this.#e.addEventListener(d.TYPE, this.#n), this.#e.addEventListener(l.TYPE, this.#a), this.#i && this.#i.addValidator(this);
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#e && (this.#e.removeEventListener(d.TYPE, this.#n), this.#e.removeEventListener(l.TYPE, this.#a)), this.#i && (this.#i.removeValidator(this), this.#t, this.#i = void 0);
  }
  destroy() {
    super.destroy(), this.#e && (this.#e = void 0);
  }
}
const at = Symbol();
class xt extends u {
  constructor(t, e, r, s) {
    super(t, s ?? "observeValidationState_" + e), e && this.consumeContext(c, (n) => {
      this.observe(n.messages.hasMessagesOfPathAndDescendant(e), r, at);
    });
  }
}
class ot extends S {
  #t;
  #i;
  #e;
  #s;
  #r;
  // For Directives their arguments have to be defined on the Render method, despite them, not being used by the render method. In this case they are used by the update method.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(t, e, r) {
    return V;
  }
  update(t, e) {
    return t.element ? ((this.#e !== t.element || this.#t !== e[0] || this.#i !== e[1]) && (this.#t = e[0], this.#i = e[1], this.#e = t.element, !this.#r && this.#i && (this.#r = new K(this.#t, this.#e, this.#i)), this.#s = new q(this.#t, this.#e, this.#i)), this.#r && (this.#r.value = e[2]), V) : V;
  }
  disconnected() {
    this.#s && (this.#s?.destroy(), this.#s = void 0), this.#r && (this.#r.destroy(), this.#r = void 0), this.#e = void 0;
  }
  /*override reconnected() {
  }*/
}
const Mt = $(ot);
var ht = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, M = (i, t, e, r) => {
  for (var s = lt(t, e), n = i.length - 1, a; n >= 0; n--)
    (a = i[n]) && (s = a(t, e, s) || s);
  return s && ht(t, e, s), s;
};
const dt = [
  "customError",
  "valueMissing",
  "badInput",
  "typeMismatch",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort"
];
function Tt(i, t) {
  class e extends i {
    constructor(...s) {
      super(...s), this.#t = {}, this._pristine = !0, this.#i = t, this.#e = null, this.#s = [], this.#r = [], this.#a = () => this._runValidators, this.#o = () => {
        this.pristine = !1;
      }, this._internals = this.attachInternals(), this.addEventListener("blur", () => {
        this.checkValidity();
      });
    }
    static {
      this.formAssociated = !0;
    }
    // Do not 'reflect' as the attribute value is used as fallback. [NL]
    get value() {
      return this.#i;
    }
    set value(s) {
      this.#i = s;
    }
    #t;
    set pristine(s) {
      this._pristine !== s && (this._pristine = s, this._runValidators());
    }
    get pristine() {
      return this._pristine;
    }
    #i;
    #e;
    #s;
    #r;
    /**
     * Get internal form element.
     * This has to be implemented to provide a FormControl Element of choice for the given context. The element is used as anchor for validation-messages.
     * @function getFormElement
     * @returns {HTMLElement | undefined | null} - Returns the form element or undefined if not found.
     */
    getFormElement() {
      return this.#r.find((s) => s.validity.valid === !1);
    }
    /**
     * Focus first element that is invalid.
     * @function focusFirstInvalidElement
     * @returns {HTMLElement | undefined} - Returns the first invalid element or undefined if no invalid elements are found.
     */
    focusFirstInvalidElement() {
      const s = this.#r.find((n) => n.validity.valid === !1);
      s ? "focusFirstInvalidElement" in s ? s.focusFirstInvalidElement() : s.focus() : this.focus();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.#n();
    }
    #n() {
      this.#e && this.#e.removeEventListener("submit", this.#o);
    }
    /**
     * Add validation, to validate this Form Control.
     * See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState for available Validator FlagTypes.
     * @example
     * this.addValidator(
     *  'tooLong',
     *  () => 'This input contains too many characters',
     *  () => this._value.length > 10
     * );
     * @function addValidator
     * @param {FlagTypes} flagKey the type of validation.
     * @param {method} getMessageMethod method to retrieve relevant message. Is executed every time the validator is re-executed.
     * @param {method} checkMethod method to determine if this validator should invalidate this form control. Return true if this should prevent submission.
     * @returns {UmbFormControlValidatorConfig} - The added validator configuration.
     */
    addValidator(s, n, a) {
      const o = {
        flagKey: s,
        getMessageMethod: n,
        checkMethod: a,
        weight: dt.indexOf(s)
      };
      return this.#s.push(o), this.#s.sort((h, E) => h.weight > E.weight ? 1 : E.weight > h.weight ? -1 : 0), o;
    }
    /**
     * Remove validation from this form control.
     * @function removeValidator
     * @param {UmbFormControlValidatorConfig} validator - The specific validation configuration to remove.
     */
    removeValidator(s) {
      const n = this.#s.indexOf(s);
      n !== -1 && this.#s.splice(n, 1);
    }
    #a;
    /**
     * @function addFormControlElement
     * @description Important notice if adding a native form control then ensure that its value and thereby validity is updated when value is changed from the outside.
     * @param {UmbNativeFormControlElement} element - element to validate and include as part of this form control association.
     * @returns {void}
     */
    addFormControlElement(s) {
      this.#r.push(s), s.addEventListener(d.TYPE, this.#a), s.addEventListener(l.TYPE, this.#a), this._pristine === !1 && (s.checkValidity(), this._runValidators());
    }
    /**
     * @function removeFormControlElement
     * @param {UmbNativeFormControlElement} element - element to remove as part of this form controls associated controls.
     * @returns {void}
     */
    removeFormControlElement(s) {
      const n = this.#r.indexOf(s);
      n !== -1 && (this.#r.splice(n, 1), s.removeEventListener(d.TYPE, this.#a), s.removeEventListener(l.TYPE, this.#a), this._pristine === !1 && this._runValidators());
    }
    /**
     * @function setCustomValidity
     * @description Set custom validity state, set to empty string to remove the custom message.
     * @param {string} message - The message to be shown
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity|HTMLObjectElement:setCustomValidity}
     */
    setCustomValidity(s) {
      this._customValidityObject && this.removeValidator(this._customValidityObject), s != null && s !== "" && (this._customValidityObject = this.addValidator(
        "customError",
        () => s,
        () => !0
      )), this._runValidators();
    }
    /**
     * @function _runValidators
     * @description Run all validators and set the validityState of this form control.
     * Run this method when you want to re-run all validators.
     * This can be relevant if you have a validators that is using values that is not triggering the Lit Updated Callback.
     * Such are mainly properties that are not declared as a Lit state and or Lit property.
     */
    _runValidators() {
      this.#t = {};
      let s, n;
      this.#s.some((o) => o.checkMethod() ? (this.#t[o.flagKey] = !0, s = o.getMessageMethod(), !0) : !1), s || this.#r.some((o) => {
        let h;
        for (h in o.validity)
          if (h !== "valid" && o.validity[h])
            return this.#t[h] = !0, s = o.validationMessage, n ??= o, !0;
        return !1;
      });
      const a = Object.values(this.#t).includes(!0);
      this.#t.valid = !a, this._internals.setValidity(
        this.#t,
        // Turn messages into an array and join them with a comma. [NL]:
        //[...messages].join(', '),
        s,
        n ?? this.getFormElement() ?? void 0
      ), this.#h();
    }
    #h() {
      this._pristine !== !0 && (this.#t.valid ? this.dispatchEvent(new l()) : this.dispatchEvent(new d()));
    }
    updated(s) {
      super.updated(s), this._runValidators();
    }
    #o;
    formAssociatedCallback() {
      this.#n(), this.#e = this._internals.form, this.#e && (this.#e.hasAttribute("submit-invalid") && (this.pristine = !1), this.#e.addEventListener("submit", this.#o));
    }
    formResetCallback() {
      this.pristine = !0, this.value = this.getInitialValue() ?? this.getDefaultValue();
    }
    getDefaultValue() {
      return t;
    }
    getInitialValue() {
      return this.getAttribute("value");
    }
    checkValidity() {
      this.pristine = !1, this._runValidators();
      for (const s in this.#r)
        if (this.#r[s].checkValidity() === !1)
          return !1;
      return this._internals?.checkValidity();
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
    get validity() {
      return this.#t;
    }
    get validationMessage() {
      return this._internals?.validationMessage;
    }
  }
  return M([
    b({ reflect: !1 })
  ], e.prototype, "value"), M([
    b({ type: Boolean, reflect: !0 })
  ], e.prototype, "pristine"), e;
}
class ct extends u {
  constructor(t, e) {
    super(t, e), this.consumeContext(c, (r) => {
      this._context?.removeTranslator(this), this._context = r, r.addTranslator(this);
    });
  }
  hostDisconnected() {
    this._context?.removeTranslator(this), this._context = void 0, super.hostDisconnected();
  }
}
class U extends ct {
  #t;
  #i;
  constructor(t, e, r, s) {
    super(t, s), this.#t = e, this.#i = r;
  }
  translate(t) {
    if (!this._context) return;
    if (t.indexOf(this.#t) !== 0)
      return !1;
    const e = t.indexOf("]");
    if (e === -1)
      return !1;
    const r = parseInt(t.substring(this.#t.length, e));
    if (isNaN(r))
      return !1;
    const s = this.getDataFromIndex(r);
    return s ? this.#t + this.#i(s) + t.substring(t.indexOf("]")) : !1;
  }
}
class Ot extends U {
  constructor(t) {
    super(t, "$.values[", F);
  }
  getDataFromIndex(t) {
    return this._context ? this._context.getTranslationData().values[t] : void 0;
  }
}
class wt extends U {
  constructor(t) {
    super(t, "$.variants[", it);
  }
  getDataFromIndex(t) {
    return this._context ? this._context.getTranslationData().variants[t] : void 0;
  }
}
export {
  Z as GetValueByJsonPath,
  st as UMB_SERVER_MODEL_VALIDATOR_CONTEXT,
  c as UMB_VALIDATION_CONTEXT,
  Q as UMB_VALIDATION_EMPTY_LOCALIZATION_KEY,
  Vt as UMB_VALIDATION_FALSE_LOCALIZATION_KEY,
  U as UmbAbstractArrayValidationPathTranslator,
  _t as UmbBindServerValidationToFormControl,
  F as UmbDataPathPropertyValueQuery,
  it as UmbDataPathVariantQuery,
  Tt as UmbFormControlMixin,
  Ct as UmbFormControlValidator,
  p as UmbFormValidationMessageElement,
  xt as UmbObserveValidationStateController,
  Pt as UmbServerModelValidatorContext,
  bt as UmbValidationContext,
  et as UmbValidationController,
  d as UmbValidationInvalidEvent,
  ct as UmbValidationPathTranslatorBase,
  l as UmbValidationValidEvent,
  Ot as UmbVariantValuesValidationPathTranslator,
  wt as UmbVariantsValidationPathTranslator,
  Et as extractJsonQueryProps,
  Mt as umbBindToValidation
};
//# sourceMappingURL=index.js.map
