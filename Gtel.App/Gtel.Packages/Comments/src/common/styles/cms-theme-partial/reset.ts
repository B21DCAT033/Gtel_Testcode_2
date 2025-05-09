import { css, CSSResult } from '@umbraco-cms/backoffice/external/lit';

export const Reset: CSSResult = css`
  hr {
    margin: 1rem 0;
    color: inherit;
    border: 0;
    border-top: 1px solid;
    opacity: 0.25;
  }

  .vr {
    display: inline-block;
    align-self: stretch;
    width: 1px;
    min-height: 1em;
    background-color: currentcolor;
    opacity: 0.25;
  }
`;