import { HealthCheckService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as o } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as c } from "@umbraco-cms/backoffice/class-api";
import { UmbBasicState as r } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextToken as n } from "@umbraco-cms/backoffice/context-api";
import { loadManifestApi as l } from "@umbraco-cms/backoffice/extension-api";
class s extends c {
  constructor() {
    super(...arguments), this.#t = new r(void 0), this.checks = this.#t.asObservable(), this.#e = new r(void 0), this.results = this.#e.asObservable();
  }
  #t;
  #e;
  async getGroupChecks(t) {
    const { data: e } = await o(this, i.getHealthCheckGroupByName({ name: t }));
    e ? this.#t.setValue(e) : this.#t.setValue(void 0);
  }
  async checkGroup(t) {
    const { data: e } = await o(this, i.postHealthCheckGroupByNameCheck({ name: t }));
    e ? this.#e.setValue(e) : this.#e.setValue(void 0);
  }
  static isInstanceLike(t) {
    return typeof t == "object" && t.results !== void 0;
  }
}
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbHealthCheckContext: s,
  default: s
}, Symbol.toStringTag, { value: "Module" }));
class d {
  constructor(t) {
    this.#t = [], this.apis = /* @__PURE__ */ new Map(), this.host = t;
  }
  #t;
  set manifests(t) {
    this.#t = t, this.#e();
  }
  get manifests() {
    return this.#t;
  }
  async checkAll() {
    for (const [t, e] of this.apis.entries())
      await e?.checkGroup?.(t);
  }
  #e() {
    this.apis.clear(), this.#t.forEach(async (t) => {
      if (!t.api) return;
      const e = await l(t.api);
      if (!e) return;
      const a = new e(this.host);
      e && s.isInstanceLike(a) && this.apis.set(t.meta.label, a);
    });
  }
}
const y = new n(
  "UmbHealthCheckDashboardContext"
);
export {
  y as U,
  d as a,
  C as h
};
//# sourceMappingURL=health-check-dashboard.context-BL_IqXB2.js.map
