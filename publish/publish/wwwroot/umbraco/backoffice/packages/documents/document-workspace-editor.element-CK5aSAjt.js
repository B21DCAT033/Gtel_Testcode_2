import { i as X, g as O } from "./manifests-ByHRH93l.js";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { state as k, customElement as $, html as E, nothing as K, repeat as J, css as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { s as Q } from "./utils-DjhBxJtv.js";
import { DocumentVariantStateModel as h } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/notification";
import { UmbWorkspaceSplitViewVariantSelectorElement as Y } from "@umbraco-cms/backoffice/workspace";
import { UMB_APP_LANGUAGE_CONTEXT as Z } from "@umbraco-cms/backoffice/language";
var j = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, T = (t) => {
  throw TypeError(t);
}, I = (t, e, s, a) => {
  for (var i = a > 1 ? void 0 : a ? tt(e, s) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (i = (a ? n(e, s, i) : n(i)) || i);
  return a && i && j(e, s, i), i;
}, x = (t, e, s) => e.has(t) || T("Cannot " + s), R = (t, e, s) => (x(t, e, "read from private field"), e.get(t)), b = (t, e, s) => e.has(t) ? T("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), et = (t, e, s, a) => (x(t, e, "write to private field"), e.set(t, s), s), S = (t, e, s) => (x(t, e, "access private method"), s), C, U, m, L, G, B;
const st = "umb-document-workspace-split-view-variant-selector";
let W = class extends Y {
  constructor() {
    super(), b(this, m), this._variantSorter = Q, this._variantsWithPendingChanges = [], b(this, C), b(this, U, {
      [h.DRAFT]: "content_unpublished",
      [h.PUBLISHED]: "content_published",
      // TODO: The pending changes state can be removed once the management Api removes this state
      // We only keep it here to make typescript happy
      // We should also make our own state model for this
      [h.PUBLISHED_PENDING_CHANGES]: "content_published",
      [h.NOT_CREATED]: "content_notCreated"
    }), this.consumeContext(X, (t) => {
      et(this, C, t), S(this, m, L).call(this);
    });
  }
  _renderVariantDetails(t) {
    return E` ${S(this, m, B).call(this, t)}`;
  }
};
C = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
L = function() {
  this.observe(
    R(this, C)?.publishedPendingChanges.variantsWithChanges,
    (t) => {
      this._variantsWithPendingChanges = t || [];
    },
    "_observePendingChanges"
  );
};
G = function(t) {
  return this._variantsWithPendingChanges.some((e) => e.variantId.compare(t));
};
B = function(t) {
  let e = R(this, U)[t.variant?.state || h.NOT_CREATED];
  return (t.variant?.state === h.PUBLISHED || t.variant?.state === h.PUBLISHED_PENDING_CHANGES) && S(this, m, G).call(this, t) && (e = "content_publishedPendingChanges"), this.localize.term(e);
};
I([
  k()
], W.prototype, "_variantsWithPendingChanges", 2);
W = I([
  $(st)
], W);
var it = Object.defineProperty, at = Object.getOwnPropertyDescriptor, H = (t, e, s, a) => {
  for (var i = a > 1 ? void 0 : a ? at(e, s) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (i = (a ? n(e, s, i) : n(i)) || i);
  return a && i && it(e, s, i), i;
};
let d = class extends M {
  constructor() {
    super(), this.consumeContext(O, (t) => {
      this._workspaceContext = t, this._observeActiveVariantInfo();
    });
  }
  _observeActiveVariantInfo() {
    this._workspaceContext && this.observe(
      this._workspaceContext.splitView.activeVariantsInfo,
      (t) => {
        this._variants = t;
      },
      "_observeActiveVariantsInfo"
    );
  }
  render() {
    return this._variants ? E`<div id="splitViews">
						${J(
      this._variants,
      (t) => t.index + "_" + (t.culture ?? "") + "_" + (t.segment ?? "") + "_" + this._variants.length,
      (t) => E`
								<umb-workspace-split-view
									.splitViewIndex=${t.index}
									.displayNavigation=${t.index === this._variants.length - 1}>
									<umb-document-workspace-split-view-variant-selector
										slot="variant-selector"></umb-document-workspace-split-view-variant-selector>
								</umb-workspace-split-view>
							`
    )}
					</div>

					<umb-workspace-footer alias="Umb.Workspace.Document"></umb-workspace-footer>` : K;
  }
};
d.styles = [
  N,
  A`
			:host {
				width: 100%;
				height: 100%;

				display: flex;
				flex: 1;
				flex-direction: column;
			}

			#splitViews {
				display: flex;
				width: 100%;
				height: calc(100% - var(--umb-footer-layout-height));
			}

			#breadcrumbs {
				margin: 0 var(--uui-size-layout-1);
			}
		`
];
H([
  k()
], d.prototype, "_variants", 2);
d = H([
  $("umb-document-workspace-split-view")
], d);
var rt = Object.defineProperty, nt = Object.getOwnPropertyDescriptor, q = (t) => {
  throw TypeError(t);
}, z = (t, e, s, a) => {
  for (var i = a > 1 ? void 0 : a ? nt(e, s) : e, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (i = (a ? n(e, s, i) : n(i)) || i);
  return a && i && rt(e, s, i), i;
}, y = (t, e, s) => e.has(t) || q("Cannot " + s), r = (t, e, s) => (y(t, e, "read from private field"), e.get(t)), l = (t, e, s) => e.has(t) ? q("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), v = (t, e, s, a) => (y(t, e, "write to private field"), e.set(t, s), s), P = (t, e, s) => (y(t, e, "access private method"), s), g, p, _, f, c, u, V, D;
let w = class extends M {
  constructor() {
    super(), l(this, u), this.splitViewElement = new d(), l(this, g), l(this, p), l(this, _), l(this, f), l(this, c), this._gotWorkspaceRoute = (t) => {
      v(this, _, t.target.absoluteRouterPath), r(this, p)?.splitView.setWorkspaceRoute(r(this, _));
    }, this.consumeContext(Z, (t) => {
      v(this, g, t), this.observe(r(this, g).appLanguageCulture, (e) => {
        v(this, f, e), P(this, u, D).call(this);
      });
    }), this.consumeContext(O, (t) => {
      v(this, p, t), this.observe(
        r(this, p).variantOptions,
        (e) => {
          v(this, c, e), P(this, u, D).call(this);
        },
        "_observeVariants"
      );
    });
  }
  render() {
    return this._routes ? E`<umb-router-slot .routes=${this._routes} @init=${this._gotWorkspaceRoute}></umb-router-slot>` : "";
  }
};
g = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
V = function(t, e) {
  const s = e.split("_"), a = s[0], i = s[1];
  r(this, p)?.splitView.setActiveVariant(t, a, i);
};
D = function() {
  if (!r(this, c) || !r(this, f)) return;
  const t = [];
  r(this, c).forEach((e) => {
    r(this, c).forEach((s) => {
      t.push({
        // TODO: When implementing Segments, be aware if using the unique still is URL Safe, cause its most likely not... [NL]
        path: e.unique + "_&_" + s.unique,
        component: this.splitViewElement,
        setup: (a, i) => {
          i.match.fragments.consumed.split("_&_").forEach((n, F) => {
            P(this, u, V).call(this, F, n);
          });
        }
      });
    });
  }), r(this, c).forEach((e) => {
    t.push({
      // TODO: When implementing Segments, be aware if using the unique still is URL Safe, cause its most likely not... [NL]
      path: e.unique,
      component: this.splitViewElement,
      setup: (s, a) => {
        r(this, p)?.splitView.removeActiveVariant(1), P(this, u, V).call(this, 0, a.match.fragments.consumed);
      }
    });
  }), t.length !== 0 && t.push({
    path: "",
    resolve: () => {
      const e = t.find((s) => s.path === r(this, f));
      if (!e) {
        history.replaceState({}, "", `${r(this, _)}/${t[t.length - 3].path}`);
        return;
      }
      history.replaceState({}, "", `${r(this, _)}/${e?.path}`);
    }
  }), t.push({
    path: "**",
    component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
  }), this._routes = t;
};
w.styles = [
  N,
  A`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
z([
  k()
], w.prototype, "_routes", 2);
w = z([
  $("umb-document-workspace-editor")
], w);
const wt = w;
export {
  w as UmbDocumentWorkspaceEditorElement,
  wt as default
};
//# sourceMappingURL=document-workspace-editor.element-CK5aSAjt.js.map
