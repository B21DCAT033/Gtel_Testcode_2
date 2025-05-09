import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { css, customElement, html, LitElement, map } from '@umbraco-cms/backoffice/external/lit';
import { range } from 'lit/directives/range.js';

@customElement('gtel-dashboard')
export class GtelDashboardElement extends UmbElementMixin(LitElement) {
  render() {
    return html`
      <uui-box>
        <h1 style="color: #00adef">${this.localize.term('gtelPortal_companyName')}</h1>
        <h2 style="text-transform: uppercase">${this.localize.term('gtelPortal_companyFullname')}</h2>
        <p style="margin-right: 10%; margin-left: 10%; text-align: justify;">${this.localize.term('gtelPortal_introDescription1')}</p>
        <p style="margin-right: 10%; margin-left: 10%; text-align: justify;">${this.localize.term('gtelPortal_introDescription2')}</p>
        <div id="introduction-blocks">
          ${map(
            range(1, 3),
            (index) => html`
              <div class="card-data-item mb-lg-10">
                <h2 style="text-align: center;">${this.localize.term(`gtelPortal_introBlock${index}_label`)}</h2>
                <p style="text-align: justify">${this.localize.term(`gtelPortal_introBlock${index}_content`)}</p>
              </div>
            `,
          )}
        </div>
      </uui-box>
    `;
  }

  static styles = [
    css`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
        font-family: Montserrat, sans-serif;
        text-align: center;
      }

      #introduction-blocks {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 3rem;
      }

      .card-data-item {
        position: relative;
        flex: 1 1 0%;
        background-image: url('/images/hero-bg-4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 0.5rem;
        color: #fff;
        padding: 1rem;
        transition: margin 1s;
      }

      .card-data-item:before {
        position: absolute;
        top: 0px;
        left: 0px;
        content: '';
        background-image: linear-gradient(90deg, rgba(3, 25, 116, 0.45), rgba(25, 52, 167, 0.4));
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;
        opacity: 0.9;
      }

      .card-data-item > * {
        position: relative;
      }

      @media (min-width: 992px) {
        #introduction-blocks {
          flex-direction: row;
        }

        .card-data-item {
          height: 240px;
        }

        .card-data-item:hover {
          margin-top: -1rem;
        }

        .mb-lg-10 {
          margin-bottom: 2.5rem;
        }
      }

      @media (min-width: 1200px) {
        .card-data-item {
          height: 192px;
        }
      }

      @media (min-width: 1400px) {
        .card-data-item {
          height: 175px;
        }
      }
    `
  ];
}

export default GtelDashboardElement;

declare global {
  interface HTMLElementTagNameMap {
    'gtel-dashboard': GtelDashboardElement;
  }
}
