import { k as q, j as I, B as M } from "./input-upload-field.element-DpMbvzUB.js";
import { B as v } from "./dropzone.element-DyItP5Bd.js";
import { repeat as O, html as _, ifDefined as u, css as U, state as m, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as B } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/imaging";
var S = Object.defineProperty, A = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, d = (e, t, i, c) => {
  for (var n = c > 1 ? void 0 : c ? A(t, i) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (n = (c ? p(t, i, n) : p(n)) || n);
  return c && n && S(t, i, n), n;
}, f = (e, t, i) => t.has(e) || y("Cannot " + i), l = (e, t, i) => (f(e, t, "read from private field"), t.get(e)), g = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), L = (e, t, i, c) => (f(e, t, "write to private field"), t.set(e, i), i), a = (e, t, i) => (f(e, t, "access private method"), i), r, s, E, b, T, w, P, $, C;
let o = class extends D {
  constructor() {
    super(), g(this, s), this._items = [], this._selection = [], g(this, r), this.consumeContext(q, (e) => {
      L(this, r, e), e.setupView(this), this.observe(
        e.workspacePathBuilder,
        (t) => {
          this._workspacePathBuilder = t;
        },
        "observePath"
      ), a(this, s, E).call(this);
    });
  }
  render() {
    return _`
			<div id="media-grid">
				${O(
      this._items,
      (e) => e.unique + e.status,
      (e) => a(this, s, $).call(this, e)
    )}
			</div>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
E = function() {
  l(this, r) && (this.observe(l(this, r).items, (e) => this._items = e, "_observeItems"), this.observe(
    l(this, r).selection.selection,
    (e) => this._selection = e,
    "_observeSelection"
  ));
};
b = function(e) {
  e.unique && l(this, r)?.selection.select(e.unique);
};
T = function(e) {
  e.unique && l(this, r)?.selection.deselect(e.unique);
};
w = function(e) {
  return l(this, r)?.selection.isSelected(e.unique);
};
P = function(e) {
  return e.unique && this._workspacePathBuilder ? this._workspacePathBuilder({ entityType: e.entityType }) + M.generateLocal({
    unique: e.unique
  }) : "";
};
$ = function(e) {
  return e.entityType === I ? a(this, s, C).call(this, e) : _`
			<uui-card-media
				name=${u(e.name)}
				data-mark="${e.entityType}:${e.unique}"
				selectable
				?select-only=${this._selection.length > 0}
				?selected=${a(this, s, w).call(this, e)}
				href=${a(this, s, P).call(this, e)}
				@selected=${() => a(this, s, b).call(this, e)}
				@deselected=${() => a(this, s, T).call(this, e)}>
				<umb-imaging-thumbnail
					unique=${e.unique}
					alt=${u(e.name)}
					icon=${u(e.icon)}></umb-imaging-thumbnail>
			</uui-card-media>
		`;
};
C = function(e) {
  const t = e.status === v.COMPLETE, i = e.status !== v.WAITING && !t;
  return _`<uui-card-media disabled class="media-placeholder-item" name=${u(e.name)}>
			<umb-temporary-file-badge
				.progress=${e.progress ?? 0}
				?complete=${t}
				?error=${i}></umb-temporary-file-badge>
		</uui-card-media>`;
};
o.styles = [
  B,
  U`
			:host {
				display: flex;
				flex-direction: column;
			}

			.container {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			/** TODO: Remove this fix when UUI gets upgrade to 1.3 */
			umb-imaging-thumbnail {
				pointer-events: none;
			}

			#media-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				grid-auto-rows: 200px;
				gap: var(--uui-size-space-5);
			}
		`
];
d([
  m()
], o.prototype, "_workspacePathBuilder", 2);
d([
  m()
], o.prototype, "_items", 2);
d([
  m()
], o.prototype, "_selection", 2);
o = d([
  x("umb-media-grid-collection-view")
], o);
const z = o;
export {
  o as UmbMediaGridCollectionViewElement,
  z as default
};
//# sourceMappingURL=media-grid-collection-view.element-lyq6dONi.js.map
