import { css } from "@umbraco-cms/backoffice/external/lit";
const Font = css`
  .font-monospace {
    font-family: var(--bs-font-monospace) !important;
  }

  .fs-1 {
    font-size: calc(1.3rem + 0.6vw) !important;
  }

  .fs-2 {
    font-size: calc(1.275rem + 0.3vw) !important;
  }

  .fs-3 {
    font-size: calc(1.26rem + 0.12vw) !important;
  }

  .fs-4 {
    font-size: 1.25rem !important;
  }

  .fs-5 {
    font-size: 1.15rem !important;
  }

  .fs-6 {
    font-size: 1.075rem !important;
  }

  .fs-7 {
    font-size: 0.95rem !important;
  }

  .fs-8 {
    font-size: 0.85rem !important;
  }

  .fs-9 {
    font-size: 0.75rem !important;
  }

  .fs-10 {
    font-size: 0.5rem !important;
  }

  .fs-base {
    font-size: 1rem !important;
  }

  .fs-fluid {
    font-size: 100% !important;
  }

  .fs-2x {
    font-size: calc(1.325rem + 0.9vw) !important;
  }

  .fs-2qx {
    font-size: calc(1.35rem + 1.2vw) !important;
  }

  .fs-2hx {
    font-size: calc(1.375rem + 1.5vw) !important;
  }

  .fs-2tx {
    font-size: calc(1.4rem + 1.8vw) !important;
  }

  .fs-3x {
    font-size: calc(1.425rem + 2.1vw) !important;
  }

  .fs-3qx {
    font-size: calc(1.45rem + 2.4vw) !important;
  }

  .fs-3hx {
    font-size: calc(1.475rem + 2.7vw) !important;
  }

  .fs-3tx {
    font-size: calc(1.5rem + 3vw) !important;
  }

  .fs-4x {
    font-size: calc(1.525rem + 3.3vw) !important;
  }

  .fs-4qx {
    font-size: calc(1.55rem + 3.6vw) !important;
  }

  .fs-4hx {
    font-size: calc(1.575rem + 3.9vw) !important;
  }

  .fs-4tx {
    font-size: calc(1.6rem + 4.2vw) !important;
  }

  .fs-5x {
    font-size: calc(1.625rem + 4.5vw) !important;
  }

  .fs-5qx {
    font-size: calc(1.65rem + 4.8vw) !important;
  }

  .fs-5hx {
    font-size: calc(1.675rem + 5.1vw) !important;
  }

  .fs-5tx {
    font-size: calc(1.7rem + 5.4vw) !important;
  }

  .fst-italic {
    font-style: italic !important;
  }

  .fst-normal {
    font-style: normal !important;
  }

  .fw-light {
    font-weight: 300 !important;
  }

  .fw-lighter {
    font-weight: lighter !important;
  }

  .fw-normal {
    font-weight: 400 !important;
  }

  .fw-bold {
    font-weight: 600 !important;
  }

  .fw-semibold {
    font-weight: 500 !important;
  }

  .fw-bolder {
    font-weight: 700 !important;
  }

  .lh-0 {
    line-height: 0 !important;
  }

  .lh-1 {
    line-height: 1 !important;
  }

  .lh-sm {
    line-height: 1.25 !important;
  }

  .lh-base {
    line-height: 1.5 !important;
  }

  .lh-lg {
    line-height: 1.75 !important;
  }

  .lh-xl {
    line-height: 2 !important;
  }

  .lh-xxl {
    line-height: 2.25 !important;
  }

  .text-start {
    text-align: left !important;
  }

  .text-center {
    text-align: center !important;
  }

  .text-end {
    text-align: right !important;
  }

  .text-justify {
    text-align: justify !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }

  .text-decoration-underline {
    text-decoration: underline !important;
  }

  .text-decoration-line-through {
    text-decoration: line-through !important;
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .text-wrap {
    white-space: normal !important;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  .text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
  }

  .ls-1 {
    letter-spacing: 0.1rem !important;
  }

  .ls-2 {
    letter-spacing: 0.115rem !important;
  }

  .ls-3 {
    letter-spacing: 0.125rem !important;
  }

  .ls-4 {
    letter-spacing: 0.25rem !important;
  }

  .ls-5 {
    letter-spacing: 0.5rem !important;
  }

  .ls-n1 {
    letter-spacing: -0.1rem !important;
  }

  .ls-n2 {
    letter-spacing: -0.115rem !important;
  }

  .ls-n3 {
    letter-spacing: -0.125rem !important;
  }

  .ls-n4 {
    letter-spacing: -0.25rem !important;
  }

  .ls-n5 {
    letter-spacing: -0.5rem !important;
  }

  @media (min-width: 1200px) {
    .fs-1 {
      font-size: 1.75rem !important;
    }

    .fs-2 {
      font-size: 1.5rem !important;
    }

    .fs-3 {
      font-size: 1.35rem !important;
    }

    .fs-2x {
      font-size: 2rem !important;
    }

    .fs-2qx {
      font-size: 2.25rem !important;
    }

    .fs-2hx {
      font-size: 2.5rem !important;
    }

    .fs-2tx {
      font-size: 2.75rem !important;
    }

    .fs-3x {
      font-size: 3rem !important;
    }

    .fs-3qx {
      font-size: 3.25rem !important;
    }

    .fs-3hx {
      font-size: 3.5rem !important;
    }

    .fs-3tx {
      font-size: 3.75rem !important;
    }

    .fs-4x {
      font-size: 4rem !important;
    }

    .fs-4qx {
      font-size: 4.25rem !important;
    }

    .fs-4hx {
      font-size: 4.5rem !important;
    }

    .fs-4tx {
      font-size: 4.75rem !important;
    }

    .fs-5x {
      font-size: 5rem !important;
    }

    .fs-5qx {
      font-size: 5.25rem !important;
    }

    .fs-5hx {
      font-size: 5.5rem !important;
    }

    .fs-5tx {
      font-size: 5.75rem !important;
    }

    .fs-sm-1 {
      font-size: 1.75rem !important;
    }

    .fs-sm-2 {
      font-size: 1.5rem !important;
    }

    .fs-sm-3 {
      font-size: 1.35rem !important;
    }

    .fs-sm-2x {
      font-size: 2rem !important;
    }

    .fs-sm-2qx {
      font-size: 2.25rem !important;
    }

    .fs-sm-2hx {
      font-size: 2.5rem !important;
    }

    .fs-sm-2tx {
      font-size: 2.75rem !important;
    }

    .fs-sm-3x {
      font-size: 3rem !important;
    }

    .fs-sm-3qx {
      font-size: 3.25rem !important;
    }

    .fs-sm-3hx {
      font-size: 3.5rem !important;
    }

    .fs-sm-3tx {
      font-size: 3.75rem !important;
    }

    .fs-sm-4x {
      font-size: 4rem !important;
    }

    .fs-sm-4qx {
      font-size: 4.25rem !important;
    }

    .fs-sm-4hx {
      font-size: 4.5rem !important;
    }

    .fs-sm-4tx {
      font-size: 4.75rem !important;
    }

    .fs-sm-5x {
      font-size: 5rem !important;
    }

    .fs-sm-5qx {
      font-size: 5.25rem !important;
    }

    .fs-sm-5hx {
      font-size: 5.5rem !important;
    }

    .fs-sm-5tx {
      font-size: 5.75rem !important;
    }

    .fs-md-1 {
      font-size: 1.75rem !important;
    }

    .fs-md-2 {
      font-size: 1.5rem !important;
    }

    .fs-md-3 {
      font-size: 1.35rem !important;
    }

    .fs-md-2x {
      font-size: 2rem !important;
    }

    .fs-md-2qx {
      font-size: 2.25rem !important;
    }

    .fs-md-2hx {
      font-size: 2.5rem !important;
    }

    .fs-md-2tx {
      font-size: 2.75rem !important;
    }

    .fs-md-3x {
      font-size: 3rem !important;
    }

    .fs-md-3qx {
      font-size: 3.25rem !important;
    }

    .fs-md-3hx {
      font-size: 3.5rem !important;
    }

    .fs-md-3tx {
      font-size: 3.75rem !important;
    }

    .fs-md-4x {
      font-size: 4rem !important;
    }

    .fs-md-4qx {
      font-size: 4.25rem !important;
    }

    .fs-md-4hx {
      font-size: 4.5rem !important;
    }

    .fs-md-4tx {
      font-size: 4.75rem !important;
    }

    .fs-md-5x {
      font-size: 5rem !important;
    }

    .fs-md-5qx {
      font-size: 5.25rem !important;
    }

    .fs-md-5hx {
      font-size: 5.5rem !important;
    }

    .fs-md-5tx {
      font-size: 5.75rem !important;
    }

    .fs-lg-1 {
      font-size: 1.75rem !important;
    }

    .fs-lg-2 {
      font-size: 1.5rem !important;
    }

    .fs-lg-3 {
      font-size: 1.35rem !important;
    }

    .fs-lg-2x {
      font-size: 2rem !important;
    }

    .fs-lg-2qx {
      font-size: 2.25rem !important;
    }

    .fs-lg-2hx {
      font-size: 2.5rem !important;
    }

    .fs-lg-2tx {
      font-size: 2.75rem !important;
    }

    .fs-lg-3x {
      font-size: 3rem !important;
    }

    .fs-lg-3qx {
      font-size: 3.25rem !important;
    }

    .fs-lg-3hx {
      font-size: 3.5rem !important;
    }

    .fs-lg-3tx {
      font-size: 3.75rem !important;
    }

    .fs-lg-4x {
      font-size: 4rem !important;
    }

    .fs-lg-4qx {
      font-size: 4.25rem !important;
    }

    .fs-lg-4hx {
      font-size: 4.5rem !important;
    }

    .fs-lg-4tx {
      font-size: 4.75rem !important;
    }

    .fs-lg-5x {
      font-size: 5rem !important;
    }

    .fs-lg-5qx {
      font-size: 5.25rem !important;
    }

    .fs-lg-5hx {
      font-size: 5.5rem !important;
    }

    .fs-lg-5tx {
      font-size: 5.75rem !important;
    }
  }
`;
export {
  Font
};
//# sourceMappingURL=font.js.map
