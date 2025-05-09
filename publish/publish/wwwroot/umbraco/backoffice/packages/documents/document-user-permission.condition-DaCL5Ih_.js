import { UMB_CURRENT_USER_CONTEXT as o } from "@umbraco-cms/backoffice/current-user";
import { UMB_ENTITY_CONTEXT as h } from "@umbraco-cms/backoffice/entity";
import { observeMultiple as m } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as f } from "@umbraco-cms/backoffice/class-api";
function u(r) {
  return r.$type === "DocumentPermissionPresentationModel";
}
class p extends f {
  constructor(s, e) {
    super(s), this.permitted = !1, this.#i = [], this.#e = [], this.config = e.config, this.#r = e.onChange, this.consumeContext(o, (i) => {
      this.observe(
        i.currentUser,
        (t) => {
          this.#i = t?.permissions?.filter(u) || [], this.#e = t?.fallbackPermissions || [], this.#o();
        },
        "umbUserPermissionConditionObserver"
      );
    }), this.consumeContext(h, (i) => {
      i && this.observe(
        m([i.entityType, i.unique]),
        ([t, n]) => {
          this.#n = t, this.#t = n, this.#o();
        },
        "umbUserPermissionEntityContextObserver"
      );
    });
  }
  #n;
  #t;
  #i;
  #e;
  #r;
  #o() {
    if (!this.#n || this.#t === void 0) return;
    const s = this.#i.length > 0;
    if (!s) {
      this.#s(this.#e);
      return;
    }
    if (s) {
      const e = this.#i.find(
        (i) => i.document.id === this.#t
      );
      if (!e) {
        this.#s(this.#e);
        return;
      }
      this.#s(e.verbs);
    }
  }
  #s(s) {
    let e = !0, i = !0;
    this.config.allOf?.length && (e = this.config.allOf.every((n) => s.includes(n))), this.config.oneOf?.length && (i = this.config.oneOf.some((n) => s.includes(n))), !e && !i && (e = !1, i = !1);
    const t = e && i;
    t !== this.permitted && (this.permitted = t, this.#r(t));
  }
}
export {
  p as UmbDocumentUserPermissionCondition,
  p as api
};
//# sourceMappingURL=document-user-permission.condition-DaCL5Ih_.js.map
