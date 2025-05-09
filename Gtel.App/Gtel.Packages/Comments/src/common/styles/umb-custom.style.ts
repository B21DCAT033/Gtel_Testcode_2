import { css } from '@umbraco-cms/backoffice/external/lit';

export const UmbCustomStyles = css`
  :host {
    /* --uui-button-height: 0; /* Default var(--uui-size-11, 33px) */
    --uui-button-border-width: 1px; /* Default 1px */
    --uui-button-border-radius: 0.3rem; /* Default var(--uui-border-radius, 3px) */
    --uui-button-font-weight: 500; /* Default 500 */
    --uui-button-font-size: 0.9rem; /* Default inherit (14px from :host, 15px from body) */
    --uui-button-background-color: transparent; /* Default transparent */
    /* --uui-button-background-color-hover: ; /* Default transparent */
    /* --uui-button-background-color-disabled: transparent; /* Default transparent */
    /* --uui-button-border-color: ; /* Default var(--uui-button-contrast, var(--color-standalone)) */
    /* --uui-button-border-color-hover: ; /* Default unset */
    /* --uui-button-border-color-disabled */
    /* --uui-button-contrast: ; */
    /* --uui-button-contrast-hover: ; */
    /* --uui-button-contrast-disabled */
    /* --uui-button-content-align */
    /* --uui-button-transition */
  }

  :host uui-button[look='primary'][color="positive"],
  :host uui-button[look='primary'][color="success"] {
    --uui-button-background-color: var(--color-emphasis);
    --uui-button-background-color-hover: var(--kt-success)
    --uui-button-border-color: var(--color-emphasis);
    --uui-button-border-color-hover: var(--color-emphasis);
  }

  :host uui-button[look="outline"] {
    --uui-button-height: 0;
  }

  :host uui-button[look="outline"]:not([color]),
  :host uui-button[look="outline"][color=""],
  :host uui-button[look="outline"][color="default"],
  :host uui-button[look="outline"][color="primary"] {
    --uui-button-background-color-hover: var(--kt-primary-light);
    --uui-button-border-color: var(--kt-primary);
    --uui-button-border-color-hover: var(--kt-primary);
    --uui-button-contrast: var(--kt-primary);
    --uui-button-contrast-hover: var(--kt-primary-active);
  }

  :host uui-button[look="outline"][color="positive"],
  :host uui-button[look="outline"][color="success"] {
    --uui-button-background-color-hover: var(--kt-success-light);
    --uui-button-border-color: var(--kt-success);
    --uui-button-border-color-hover: var(--kt-success);
    --uui-button-contrast: var(--kt-success);
    --uui-button-contrast-hover: var(--kt-success-active);
  }

  :host uui-button[look="outline"][color="warning"] {
    --uui-button-background-color-hover: var(--kt-warning-light);
    --uui-button-border-color: var(--kt-warning);
    --uui-button-border-color-hover: var(--kt-warning);
    --uui-button-contrast: var(--kt-warning);
    --uui-button-contrast-hover: var(--kt-warning-active);
  }

  :host uui-button[look="outline"][color="danger"] {
    --uui-button-background-color-hover: var(--kt-danger-light);
    --uui-button-border-color: var(--kt-danger);
    --uui-button-border-color-hover: var(--kt-danger);
    --uui-button-contrast: var(--kt-danger);
    --uui-button-contrast-hover: var(--kt-danger-active);
  }

  :host uui-button:not([size]),
  :host uui-button[size=""],
  :host uui-button[size="default"],
  :host uui-button[size="md"] {
    --uui-button-padding-left-factor: 2;
    --uui-button-padding-right-factor: 2;
    --uui-button-padding-top-factor: 1.25;
    --uui-button-padding-bottom-factor: 1;
  }

  :host uui-button[size="xs"] {
    --uui-button-padding-left-factor: 1;
    --uui-button-padding-right-factor: 1;
    --uui-button-padding-top-factor: 0.666;
    --uui-button-padding-bottom-factor: 0.666;
  }

  :host uui-button[size="sm"] {
    --uui-button-padding-left-factor: 1.5;
    --uui-button-padding-right-factor: 1.5;
    --uui-button-padding-top-factor: 0.833;
    --uui-button-padding-bottom-factor: 0.833;
  }

  uui-button + uui-button {
    margin-left: 0.5rem;
  }
`;
