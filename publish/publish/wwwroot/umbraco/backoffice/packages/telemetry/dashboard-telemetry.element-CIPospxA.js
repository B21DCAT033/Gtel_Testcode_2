import { unsafeHTML as _, html as c, css as d, state as o, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { TelemetryLevelModel as l, TelemetryService as h, ApiError as v } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { tryExecuteAndNotify as u } from "@umbraco-cms/backoffice/resources";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, i = (t, e, m, a) => {
  for (var s = a > 1 ? void 0 : a ? g(e, m) : e, n = t.length - 1, y; n >= 0; n--)
    (y = t[n]) && (s = (a ? y(e, m, s) : y(s)) || s);
  return a && s && f(e, m, s), s;
};
let r = class extends b {
  constructor() {
    super(), this._telemetryFormData = l.BASIC, this._telemetryLevels = [], this._errorMessage = "", this._buttonState = void 0, this._handleSubmit = async (t) => {
      t.stopPropagation(), this._buttonState = "waiting";
      const { error: e } = await u(
        this,
        h.postTelemetryLevel({
          requestBody: { telemetryLevel: this._telemetryFormData }
        })
      );
      if (e) {
        this._buttonState = "failed", this._errorMessage = e instanceof v ? e.body.detail : e.message;
        return;
      }
      this._buttonState = "success";
    }, this._setup();
  }
  async _setup() {
    const t = await u(this, h.getTelemetry({ skip: 0, take: 3 }));
    this._telemetryLevels = t.data?.items ?? [];
    const e = await u(this, h.getTelemetryLevel());
    this._telemetryFormData = e.data?.telemetryLevel ?? l.BASIC;
  }
  _handleChange(t) {
    const e = t.target;
    this._telemetryFormData = this._telemetryLevels[parseInt(e.value) - 1].telemetryLevel ?? l.BASIC;
  }
  get _selectedTelemetryIndex() {
    return this._telemetryLevels.findIndex((t) => t.telemetryLevel === this._telemetryFormData) ?? 0;
  }
  get _selectedTelemetry() {
    return this._telemetryLevels.find((t) => t.telemetryLevel === this._telemetryFormData) ?? this._telemetryLevels[1];
  }
  get _selectedTelemetryDescription() {
    switch (this._selectedTelemetry.telemetryLevel) {
      case l.MINIMAL:
        return this.localize.term("analytics_minimalLevelDescription");
      case l.BASIC:
        return this.localize.term("analytics_basicLevelDescription");
      case l.DETAILED:
        return this.localize.term("analytics_detailedLevelDescription");
      default:
        return "Could not find description for this setting";
    }
  }
  _renderSettingSlider() {
    if (!(!this._telemetryLevels || this._telemetryLevels.length < 1))
      return c`
			<uui-slider
				@input=${this._handleChange}
				name="telemetryLevel"
				label=${this.localize.term("analytics_consentForAnalytics")}
				value=${this._selectedTelemetryIndex + 1}
				min="1"
				max=${this._telemetryLevels.length}
				hide-step-values></uui-slider>
			<h2 class="uui-h3">${this._selectedTelemetry.telemetryLevel}</h2>
			<p>${_(this._selectedTelemetryDescription)}</p>
		`;
  }
  render() {
    return c`
			<uui-box class="uui-text">
				<h1 class="uui-h2">
					<umb-localize key="analytics_consentForAnalytics">Consent for telemetry data</umb-localize>
				</h1>
				<div style="max-width:75ch">
					<umb-localize key="analytics_analyticsDescription"></umb-localize>
					${this._renderSettingSlider()}
					<uui-button
						look="primary"
						color="positive"
						label=${this.localize.term("buttons_save")}
						@click="${this._handleSubmit}"
						.state=${this._buttonState}></uui-button>
				</div>
				${this._errorMessage ? c`<p class="error">${this._errorMessage}</p>` : ""}
			</uui-box>
		`;
  }
};
r.styles = [
  L,
  d`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}
		`
];
i([
  o()
], r.prototype, "_telemetryFormData", 2);
i([
  o()
], r.prototype, "_telemetryLevels", 2);
i([
  o()
], r.prototype, "_errorMessage", 2);
i([
  o()
], r.prototype, "_buttonState", 2);
r = i([
  p("umb-dashboard-telemetry")
], r);
const I = r;
export {
  r as UmbDashboardTelemetryElement,
  I as default
};
//# sourceMappingURL=dashboard-telemetry.element-CIPospxA.js.map
