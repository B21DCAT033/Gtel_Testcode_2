import { html as l, css as m, state as c, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { tryExecuteAndNotify as b } from "@umbraco-cms/backoffice/resources";
import { umbConfirmModal as d } from "@umbraco-cms/backoffice/modal";
import { PublishedCacheService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
var R = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, u = (t, o, n, i) => {
  for (var e = i > 1 ? void 0 : i ? _(o, n) : o, s = t.length - 1, r; s >= 0; s--)
    (r = t[s]) && (e = (i ? r(o, n, e) : r(e)) || e);
  return i && e && R(o, n, e), e;
};
let a = class extends y {
  constructor() {
    super(...arguments), this._buttonStateReload = void 0, this._buttonStateRebuild = void 0;
  }
  //Reload
  async _reloadMemoryCache() {
    this._buttonStateReload = "waiting";
    const { error: t } = await b(this, h.postPublishedCacheReload());
    t ? this._buttonStateReload = "failed" : this._buttonStateReload = "success";
  }
  async _onReloadCacheHandler() {
    await d(this, {
      headline: "Reload",
      content: l` Trigger a in-memory and local file cache reload on all servers.`,
      color: "danger",
      confirmLabel: "Continue"
    }), this._reloadMemoryCache();
  }
  // Rebuild
  async _rebuildDatabaseCache() {
    this._buttonStateRebuild = "waiting";
    const { error: t } = await b(this, h.postPublishedCacheRebuild());
    t ? this._buttonStateRebuild = "failed" : this._buttonStateRebuild = "success";
  }
  async _onRebuildCacheHandler() {
    await d(this, {
      headline: "Rebuild",
      content: l` Rebuild content in cmsContentNu database table. Expensive.`,
      color: "danger",
      confirmLabel: "Continue"
    }), this._rebuildDatabaseCache();
  }
  render() {
    return l`
			<uui-box headline="Memory Cache">
				<p>
					This button lets you reload the in-memory cache, by entirely reloading it from the database cache (but it does
					not rebuild that database cache). This is relatively fast. Use it when you think that the memory cache has not
					been properly refreshed, after some events triggered—which would indicate a minor Umbraco issue. (note:
					triggers the reload on all servers in an LB environment).
				</p>
				<uui-button
					type="button"
					look="primary"
					color="danger"
					label="Reload Memory Cache"
					@click=${this._onReloadCacheHandler}
					.state=${this._buttonStateReload}>
					Reload Memory Cache
				</uui-button>
			</uui-box>

			<uui-box headline="Database Cache">
				<p>
					This button lets you rebuild the database cache, ie the content of the cmsContentNu table. Rebuilding can be
					expensive. Use it when reloading is not enough, and you think that the database cache has not been properly
					generated—which would indicate some critical Umbraco issue.
				</p>
				<uui-button
					type="button"
					look="primary"
					color="danger"
					label="Rebuild Database Cache"
					@click=${this._onRebuildCacheHandler}
					.state=${this._buttonStateRebuild}>
					Rebuild Database Cache
				</uui-button>
			</uui-box>
		`;
  }
};
a.styles = [
  f,
  m`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			uui-box + uui-box {
				margin-top: var(--uui-size-space-5);
			}
			uui-box p:first-child {
				margin-block-start: 0;
			}
		`
];
u([
  c()
], a.prototype, "_buttonStateReload", 2);
u([
  c()
], a.prototype, "_buttonStateRebuild", 2);
a = u([
  p("umb-dashboard-published-status")
], a);
const D = a;
export {
  a as UmbDashboardPublishedStatusElement,
  D as default
};
//# sourceMappingURL=dashboard-published-status.element-DkvWiLdF.js.map
