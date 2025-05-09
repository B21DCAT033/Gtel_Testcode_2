import "./donut-slice.element-a3-k1WNw.js";
import { U as O } from "./logviewer-workspace.context-token-xHiG9Gw7.js";
import { UmbTextStyles as y } from "@umbraco-cms/backoffice/style";
import { css as m, state as D, queryAll as P, property as C, customElement as _, html as b, LitElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { query as L, toQueryString as z, path as S } from "@umbraco-cms/backoffice/router";
var U = Object.defineProperty, T = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, c = (e, t, r, a) => {
  for (var o = a > 1 ? void 0 : a ? T(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = (a ? s(t, r, o) : s(o)) || o);
  return a && o && U(t, r, o), o;
}, f = (e, t, r) => t.has(e) || $("Cannot " + r), d = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), V = (e, t, r, a) => (f(e, t, "write to private field"), t.set(e, r), r), p = (e, t, r) => (f(e, t, "access private method"), r), n, u, E, v;
let l = class extends x {
  constructor() {
    super(), w(this, u), this._startDate = "", this._endDate = "", this.horizontal = !1, w(this, n), this.addEventListener("input", p(this, u, v)), this.consumeContext(O, (e) => {
      V(this, n, e), p(this, u, E).call(this);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("input", p(this, u, v));
  }
  render() {
    return b`
			<div class="input-container">
				<uui-label for="start-date">From:</uui-label>
				<input
					@click=${(e) => {
      e.target.showPicker();
    }}
					id="start-date"
					type="date"
					label="From"
					.max=${d(this, n)?.today ?? ""}
					.value=${this._startDate} />
			</div>
			<div class="input-container">
				<uui-label for="end-date">To: </uui-label>
				<input
					@click=${(e) => {
      e.target.showPicker();
    }}
					id="end-date"
					type="date"
					label="To"
					.min=${this._startDate}
					.max=${d(this, n)?.today ?? ""}
					.value=${this._endDate} />
			</div>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
E = function() {
  d(this, n) && this.observe(
    d(this, n).dateRange,
    (e) => {
      this._startDate = e.startDate, this._endDate = e.endDate;
    },
    "_observeDateRange"
  );
};
v = function() {
  this._inputs.forEach((r) => {
    r.id === "start-date" ? this._startDate = r.value : r.id === "end-date" && (this._endDate = r.value);
  }), d(this, n)?.setDateRange({ startDate: this._startDate, endDate: this._endDate });
  const e = L(), t = z({
    ...e,
    startDate: this._startDate,
    endDate: this._endDate
  });
  window.history.pushState({}, "", `${S()}?${t}`);
};
l.styles = [
  y,
  m`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
			}

			input {
				font-family: inherit;
				padding: var(--uui-size-1) var(--uui-size-space-3);
				font-size: inherit;
				color: inherit;
				border-radius: 0;
				box-sizing: border-box;
				border: none;
				background: none;
				width: 100%;
				outline: none;
				position: relative;
				border-bottom: 2px solid transparent;
			}

			/* find out better validation for that  */
			input:out-of-range {
				border-color: var(--uui-color-danger);
			}

			:host([horizontal]) .input-container {
				display: flex;
				align-items: baseline;
			}
		`
];
c([
  D()
], l.prototype, "_startDate", 2);
c([
  D()
], l.prototype, "_endDate", 2);
c([
  P("input")
], l.prototype, "_inputs", 2);
c([
  C({ type: Boolean, reflect: !0 })
], l.prototype, "horizontal", 2);
l = c([
  _("umb-log-viewer-date-range-selector")
], l);
var W = Object.getOwnPropertyDescriptor, R = (e, t, r, a) => {
  for (var o = a > 1 ? void 0 : a ? W(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = s(o) || o);
  return o;
};
let h = class extends k {
  render() {
    return b`<uui-box id="to-many-logs-warning">
			<h3>Unable to view logs</h3>
			<p>Today's log file is too large to be viewed and would cause performance problems.</p>
			<p>If you need to view the log files, narrow your date range or try opening them manually.</p>
		</uui-box>`;
  }
};
h.styles = [
  m`
			:host {
				text-align: center;
			}
		`
];
h = R([
  _("umb-log-viewer-too-many-logs-warning")
], h);
var q = Object.getOwnPropertyDescriptor, M = (e, t, r, a) => {
  for (var o = a > 1 ? void 0 : a ? q(t, r) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (o = s(o) || o);
  return o;
};
let g = class extends x {
  render() {
    return b`
			<umb-workspace-editor
				headline=${this.localize.term("treeHeaders_logViewer")}
				.enforceNoFooter=${!0}></umb-workspace-editor>
		`;
  }
};
g.styles = [
  y,
  m`
			:host {
				display: block;
				width: 100%;
				height: 100%;

				--umb-log-viewer-debug-color: var(--uui-color-default-emphasis);
				--umb-log-viewer-information-color: var(--uui-color-positive);
				--umb-log-viewer-warning-color: var(--uui-color-warning);
				--umb-log-viewer-error-color: var(--uui-color-danger);
				--umb-log-viewer-fatal-color: var(--uui-palette-black);
				--umb-log-viewer-verbose-color: var(--uui-color-current);
			}

			uui-tab-group {
				--uui-tab-divider: var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
			}
		`
];
g = M([
  _("umb-logviewer-workspace")
], g);
export {
  g as UmbLogViewerWorkspaceElement,
  g as element
};
//# sourceMappingURL=logviewer-workspace.element-Ug94NqeS.js.map
