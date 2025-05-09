import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { nothing as p, html as u, css as V, property as U, state as l, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as v } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as f, createExtensionElement as w } from "@umbraco-cms/backoffice/extension-api";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { pathFolderName as g } from "@umbraco-cms/backoffice/utils";
var R = Object.defineProperty, S = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, n = (t, e, a, s) => {
  for (var i = s > 1 ? void 0 : s ? S(e, a) : e, c = t.length - 1, d; c >= 0; c--)
    (d = t[c]) && (i = (s ? d(e, a, i) : d(i)) || i);
  return s && i && R(e, a, i), i;
}, M = (t, e, a) => e.has(t) || y("Cannot " + a), N = (t, e, a) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), h = (t, e, a) => (M(t, e, "access private method"), a), r, _, b, m, P, $;
let o = class extends D {
  constructor() {
    super(), N(this, r), this._views = [], this._dashboards = [], this._routes = [], new f(this, v, "dashboard", null, (t) => {
      this._dashboards = t.map((e) => e.manifest), h(this, r, m).call(this);
    }), new f(this, v, "sectionView", null, (t) => {
      this._views = t.map((e) => e.manifest), h(this, r, m).call(this);
    });
  }
  render() {
    return this._routes.length > 0 ? u`
					<umb-body-layout main-no-padding>
						${h(this, r, P).call(this)} ${h(this, r, $).call(this)}
						<umb-router-slot
							.routes=${this._routes}
							@init=${(t) => {
      this._routerPath = t.target.absoluteRouterPath;
    }}
							@change=${(t) => {
      this._activePath = t.target.localActiveViewPath;
    }}>
						</umb-router-slot>
					</umb-body-layout>
				` : p;
  }
};
r = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  const e = t.meta.label ?? t.name ?? t.alias;
  return "dashboard/" + (t.meta.pathname ? t.meta.pathname : g(e));
};
b = function(t) {
  const e = t.meta.label ?? t.name ?? t.alias;
  return "view/" + (t.meta.pathname ? t.meta.pathname : g(e));
};
m = async function() {
  const t = this._dashboards?.map((s) => ({
    path: h(this, r, _).call(this, s),
    component: () => w(s),
    setup: (i) => {
      i.manifest = s;
    }
  })), e = this._views?.map((s) => ({
    path: h(this, r, b).call(this, s),
    component: () => w(s),
    setup: (i) => {
      i.manifest = s;
    }
  })), a = [...t, ...e];
  a.length > 0 && (this._defaultView = a[0].path, a.push({
    ...a[0],
    path: ""
  }), a.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
  })), this._routes = a;
};
P = function() {
  return this._dashboards = this._dashboards.filter((t) => t.alias !== "Umb.Dashboard.RedirectManagement"), this._dashboards.find((t) => t.alias.includes(".CustomDashboard") || t.alias.includes(".GtelDashboard")) && (this._dashboards = this._dashboards.filter((t) => t.alias !== "Umb.Dashboard.UmbracoNews")), this._dashboards.length > 0 && this._views.length > 0 || this._dashboards.length > 1 ? u`
					<uui-tab-group slot="header" id="dashboards">
						${this._dashboards.map((t) => {
    const e = h(this, r, _).call(this, t), a = this._activePath === e || this._defaultView === e && this._activePath === "";
    return u`
								<uui-tab
									href="${this._routerPath}/${e}"
									label="${t.meta.label ? this.localize.string(t.meta.label) : t.name ?? t.alias}"
									?active="${a}"></uui-tab>
							`;
  })}
					</uui-tab-group>
				` : p;
};
$ = function() {
  return this._views.length > 0 && this._dashboards.length > 0 || this._views.length > 1 ? u`
					<uui-tab-group slot="navigation" id="views">
						${this._views.map((t) => {
    const e = t.meta.label ? this.localize.string(t.meta.label) : t.name ?? t.alias, a = h(this, r, b).call(this, t), s = this._activePath === a || this._defaultView === a && this._activePath === "";
    return u`
								<uui-tab href="${this._routerPath}/${a}" label="${e}" ?active="${s}">
									<umb-icon slot="icon" name=${t.meta.icon}></umb-icon>
									${e}
								</uui-tab>
							`;
  })}
					</uui-tab-group>
				` : p;
};
o.styles = [
  E,
  V`
			:host {
				position: relative;
				display: flex;
				flex-direction: column;
				height: 100%;
			}

			#views {
				--uui-tab-divider: var(--uui-color-divider-standalone);
			}

			#views uui-tab:first-child {
				border-left: 1px solid var(--uui-color-divider-standalone);
			}
		`
];
n([
  U({ type: String, attribute: "section-alias" })
], o.prototype, "sectionAlias", 2);
n([
  l()
], o.prototype, "_views", 2);
n([
  l()
], o.prototype, "_dashboards", 2);
n([
  l()
], o.prototype, "_routerPath", 2);
n([
  l()
], o.prototype, "_activePath", 2);
n([
  l()
], o.prototype, "_defaultView", 2);
n([
  l()
], o.prototype, "_routes", 2);
o = n([
  x("umb-section-main-views")
], o);
const W = o;
export {
  o as UmbSectionMainViewElement,
  W as default
};
//# sourceMappingURL=section-main-views.element-C81L5xj5.js.map
