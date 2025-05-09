import { a as v, U as b } from "./health-check-dashboard.context-BL_IqXB2.js";
import { html as k, state as E, customElement as H } from "@umbraco-cms/backoffice/external/lit";
import { HealthCheckService as y } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as c } from "@umbraco-cms/backoffice/extension-registry";
import { tryExecuteAndNotify as U } from "@umbraco-cms/backoffice/resources";
var g = Object.defineProperty, w = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, d = (e, t, a, s) => {
  for (var r = s > 1 ? void 0 : s ? w(t, a) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (r = (s ? i(t, a, r) : i(r)) || r);
  return s && r && g(t, a, r), r;
}, u = (e, t, a) => t.has(e) || _("Cannot " + a), x = (e, t, a) => (u(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), l = (e, t, a) => (u(e, t, "access private method"), a), m, h, f, C;
let o = class extends D {
  constructor() {
    super(), p(this, h), this._routes = [
      {
        path: "/:groupName",
        component: () => import("./health-check-group.element-BvydGKNP.js"),
        setup: (e, t) => {
          const a = e;
          a.groupName = decodeURI(t.match.params.groupName);
        }
      },
      {
        path: "",
        component: () => import("./health-check-overview.element-zk8xBt5m.js")
      },
      {
        path: "**",
        component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
      }
    ], this._healthCheckDashboardContext = new v(this), p(this, m, async () => {
      const { data: e } = await U(this, y.getHealthCheckGroup({ skip: 0, take: 9999 }));
      if (!e) return;
      const t = l(this, h, f).call(this, e.items);
      l(this, h, C).call(this, t);
    }), this.provideContext(b, this._healthCheckDashboardContext), this.observe(c.byType("healthCheck"), (e) => {
      this._healthCheckDashboardContext.manifests = e;
    });
  }
  firstUpdated() {
    x(this, m).call(this);
  }
  render() {
    return k` <umb-router-slot .routes=${this._routes}></umb-router-slot>`;
  }
};
m = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
f = function(e) {
  return e.map((t) => ({
    type: "healthCheck",
    alias: `Umb.HealthCheck.${t.name?.replace(/\s+/g, "") || ""}`,
    name: `${t.name} Health Check`,
    api: () => import("./health-check-dashboard.context-BL_IqXB2.js").then((a) => a.h),
    weight: 500,
    meta: {
      label: t.name || ""
    }
  }));
};
C = function(e) {
  e.forEach((t) => {
    c.isRegistered(t.alias) || c.register(t);
  });
};
d([
  E()
], o.prototype, "_routes", 2);
o = d([
  H("umb-dashboard-health-check")
], o);
const P = o;
export {
  o as UmbDashboardHealthCheckElement,
  P as default
};
//# sourceMappingURL=dashboard-health-check.element-COVGr2Qv.js.map
