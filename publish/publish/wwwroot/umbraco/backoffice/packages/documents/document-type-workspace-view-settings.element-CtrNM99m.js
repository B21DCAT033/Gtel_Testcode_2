import { h as k } from "./constants-DpZUosyT.js";
import { when as C, html as v, css as E, state as p, customElement as V } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
var $ = Object.defineProperty, P = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, u = (e, t, i, y) => {
  for (var n = y > 1 ? void 0 : y ? P(t, i) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (n = (y ? d(t, i, n) : d(n)) || n);
  return y && n && $(t, i, n), n;
}, m = (e, t, i) => t.has(e) || g("Cannot " + i), s = (e, t, i) => (m(e, t, "read from private field"), t.get(e)), _ = (e, t, i) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), A = (e, t, i, y) => (m(e, t, "write to private field"), t.set(e, i), i), l = (e, t, i) => (m(e, t, "access private method"), i), r, o, b, c, f, D, T;
let a = class extends z {
  constructor() {
    super(), _(this, o), _(this, r), this.consumeContext(k, (e) => {
      A(this, r, e), l(this, o, b).call(this);
    });
  }
  render() {
    return v`
			<uui-box headline="Data variations">
				<umb-property-layout
					alias="VaryByCulture"
					label=${this.localize.term("contentTypeEditor_cultureVariantHeading")}>
					<div slot="description">
						<umb-localize key="contentTypeEditor_cultureVariantDescription"
							>Allow editors to create content of different languages.</umb-localize
						>
					</div>
					<div slot="editor">
						<uui-toggle
							?checked=${this._variesByCulture}
							@change=${(e) => {
      s(this, r)?.setVariesByCulture(e.target.checked);
    }}
							label=${this.localize.term("contentTypeEditor_cultureVariantLabel")}></uui-toggle>
					</div>
				</umb-property-layout>
				<umb-property-layout
					alias="VaryBySegments"
					label=${this.localize.term("contentTypeEditor_segmentVariantHeading")}>
					<div slot="description">
						<umb-localize key="contentTypeEditor_segmentVariantDescription"
							>Allow editors to segment their content.</umb-localize
						>
					</div>
					<div slot="editor">
						<uui-toggle
							?checked=${this._variesBySegment}
							@change=${(e) => {
      s(this, r)?.setVariesBySegment(e.target.checked);
    }}
							label=${this.localize.term("contentTypeEditor_segmentVariantLabel")}></uui-toggle>
					</div>
				</umb-property-layout>
				<umb-property-layout alias="ElementType" label=${this.localize.term("contentTypeEditor_elementHeading")}>
					<div slot="description">
						<umb-localize key="contentTypeEditor_elementDescription"
							>An Element Type is used for content instances in Property Editors, like the Block Editors.</umb-localize
						>
					</div>
					<div slot="editor">
						<uui-toggle
							?checked=${this._isElement}
							@change=${(e) => {
      s(this, r)?.setIsElement(e.target.checked);
    }}
							label=${this.localize.term("contentTypeEditor_elementType")}></uui-toggle>
					</div>
				</umb-property-layout>
			</uui-box>
			<uui-box headline=${this.localize.term("contentTypeEditor_historyCleanupHeading")}>
				<umb-property-layout
					alias="HistoryCleanup"
					label=${this.localize.term("contentTypeEditor_historyCleanupHeading")}>
					<div slot="description">
						<umb-localize key="contentTypeEditor_historyCleanupDescription"
							>Allow overriding the global history cleanup settings.</umb-localize
						>
					</div>
					<div slot="editor">
						<uui-form-layout-item>
							<uui-toggle
								id="prevent-cleanup"
								label=${this.localize.term("contentTypeEditor_historyCleanupPreventCleanup")}
								.checked=${this._preventCleanup ?? !1}
								@change=${l(this, o, f)}></uui-toggle>
						</uui-form-layout-item>

						${C(
      !this._preventCleanup,
      () => v`
								<uui-form-layout-item>
									<uui-label slot="label" for="versions-newer-than-days">
										<umb-localize key="contentTypeEditor_historyCleanupKeepAllVersionsNewerThanDays"
											>Keep all versions newer than days</umb-localize
										>
									</uui-label>

									<uui-input
										type="number"
										id="versions-newer-than-days"
										min="0"
										placeholder="7"
										.value=${this._keepAllVersionsNewerThanDays}
										@change=${l(this, o, D)}></uui-input>
								</uui-form-layout-item>

								<uui-form-layout-item>
									<uui-label slot="label" for="latest-version-per-day-days">
										<umb-localize key="contentTypeEditor_historyCleanupKeepLatestVersionPerDayForDays"
											>Keep latest version per day for days</umb-localize
										>
									</uui-label>
									<uui-input
										type="number"
										id="latest-version-per-day-days"
										min="0"
										placeholder="90"
										.value=${this._keepLatestVersionPerDayForDays}
										@change=${l(this, o, T)}></uui-input>
								</uui-form-layout-item>
							`
    )}
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
b = function() {
  s(this, r) && (this.observe(
    s(this, r).variesByCulture,
    (e) => this._variesByCulture = e
  ), this.observe(
    s(this, r).variesBySegment,
    (e) => this._variesBySegment = e
  ), this.observe(s(this, r).isElement, (e) => this._isElement = e), this.observe(s(this, r).cleanup, (e) => {
    this._preventCleanup = e?.preventCleanup, this._keepAllVersionsNewerThanDays = e?.keepAllVersionsNewerThanDays, this._keepLatestVersionPerDayForDays = e?.keepLatestVersionPerDayForDays;
  }));
};
c = function() {
  s(this, r)?.setCleanup({
    preventCleanup: this._preventCleanup ?? !1,
    keepAllVersionsNewerThanDays: this._keepAllVersionsNewerThanDays,
    keepLatestVersionPerDayForDays: this._keepLatestVersionPerDayForDays
  });
};
f = function(e) {
  this._preventCleanup = e.target.checked, this._preventCleanup && (this._keepAllVersionsNewerThanDays = null, this._keepLatestVersionPerDayForDays = null), l(this, o, c).call(this);
};
D = function(e) {
  this._keepAllVersionsNewerThanDays = parseInt(e.target.value), l(this, o, c).call(this);
};
T = function(e) {
  this._keepLatestVersionPerDayForDays = parseInt(e.target.value), l(this, o, c).call(this);
};
a.styles = [
  w,
  E`
			:host {
				display: block;
				margin: var(--uui-size-layout-1);
				padding-bottom: var(--uui-size-layout-1); // To enforce some distance to the bottom of the scroll-container.
			}
			uui-box {
				margin-top: var(--uui-size-layout-1);
			}

			uui-label,
			umb-property-editor-ui-number {
				display: block;
			}

			// TODO: is this necessary?
			uui-toggle {
				display: flex;
			}
		`
];
u([
  p()
], a.prototype, "_variesByCulture", 2);
u([
  p()
], a.prototype, "_variesBySegment", 2);
u([
  p()
], a.prototype, "_isElement", 2);
u([
  p()
], a.prototype, "_keepAllVersionsNewerThanDays", 2);
u([
  p()
], a.prototype, "_keepLatestVersionPerDayForDays", 2);
u([
  p()
], a.prototype, "_preventCleanup", 2);
a = u([
  V("umb-document-type-workspace-view-settings")
], a);
const x = a;
export {
  a as UmbDocumentTypeWorkspaceViewSettingsElement,
  x as default
};
//# sourceMappingURL=document-type-workspace-view-settings.element-CtrNM99m.js.map
