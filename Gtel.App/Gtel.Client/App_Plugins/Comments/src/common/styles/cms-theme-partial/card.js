import { css } from "@umbraco-cms/backoffice/external/lit";
const Card = css`
  .card {
    --bs-card-spacer-y: 1rem;
    --bs-card-spacer-x: 1rem;
    --bs-card-title-spacer-y: 0.5rem;
    --bs-card-border-width: 1px;
    --bs-card-border-color: #eff2f5;
    --bs-card-border-radius: 0.625rem;
    --bs-card-box-shadow: 0px 0px 20px 0px rgba(76, 87, 125, 0.02);
    --bs-card-inner-border-radius: calc(0.625rem - 1px);
    --bs-card-cap-padding-y: 0.5rem;
    --bs-card-cap-padding-x: 1rem;
    --bs-card-cap-bg: transparent;
    --bs-card-cap-color: ;
    --bs-card-color: ;
    --bs-card-bg: #ffffff;
    --bs-card-img-overlay-padding: 1rem;
    --bs-card-group-margin: 0.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: var(--bs-card-bg);
    background-clip: border-box;
    border: var(--bs-card-border-width) solid var(--bs-card-border-color);
    border-radius: var(--bs-card-border-radius);
    box-shadow: var(--bs-card-box-shadow);
  }

  .card>hr {
    margin-right: 0;
    margin-left: 0;
  }

  .card>.list-group {
    border-top: inherit;
    border-bottom: inherit;
  }

  .card>.list-group:first-child {
    border-top-width: 0;
    border-top-left-radius: var(--bs-card-inner-border-radius);
    border-top-right-radius: var(--bs-card-inner-border-radius);
  }

  .card>.list-group:last-child {
    border-bottom-width: 0;
    border-bottom-right-radius: var(--bs-card-inner-border-radius);
    border-bottom-left-radius: var(--bs-card-inner-border-radius);
  }

  .card>.card-header+.list-group,
  .card>.list-group+.card-footer {
    border-top: 0;
  }

  .card-body {
    flex: 1 1 auto;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
    color: var(--bs-card-color);
  }

  .card-title {
    margin-bottom: var(--bs-card-title-spacer-y);
  }

  .card-subtitle {
    margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
    margin-bottom: 0;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-link+.card-link {
    margin-left: var(--bs-card-spacer-x);
  }

  .card-header {
    padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
    margin-bottom: 0;
    color: var(--bs-card-cap-color);
    background-color: var(--bs-card-cap-bg);
    border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
  }

  .card-header:first-child {
    border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
  }

  .card-footer {
    padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
    color: var(--bs-card-cap-color);
    background-color: var(--bs-card-cap-bg);
    border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
  }

  .card-footer:last-child {
    border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
  }

  .card-header-tabs {
    margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
    margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
    margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
    border-bottom: 0;
  }

  .card-header-tabs .nav-link.active {
    background-color: var(--bs-card-bg);
    border-bottom-color: var(--bs-card-bg);
  }

  .card-header-pills {
    margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
    margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
  }

  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: var(--bs-card-img-overlay-padding);
    border-radius: var(--bs-card-inner-border-radius);
  }

  .card-img,
  .card-img-top,
  .card-img-bottom {
    width: 100%;
  }

  .card-img,
  .card-img-top {
    border-top-left-radius: var(--bs-card-inner-border-radius);
    border-top-right-radius: var(--bs-card-inner-border-radius);
  }

  .card-img,
  .card-img-bottom {
    border-bottom-right-radius: var(--bs-card-inner-border-radius);
    border-bottom-left-radius: var(--bs-card-inner-border-radius);
  }

  .card-group>.card {
    margin-bottom: var(--bs-card-group-margin);
  }

  @media (min-width: 576px) {
    .card-group {
      display: flex;
      flex-flow: row wrap;
    }

    .card-group>.card {
      flex: 1 0 0%;
      margin-bottom: 0;
    }

    .card-group>.card+.card {
      margin-left: 0;
      border-left: 0;
    }

    .card-group>.card:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .card-group>.card:not(:last-child) .card-img-top,
    .card-group>.card:not(:last-child) .card-header {
      border-top-right-radius: 0;
    }

    .card-group>.card:not(:last-child) .card-img-bottom,
    .card-group>.card:not(:last-child) .card-footer {
      border-bottom-right-radius: 0;
    }

    .card-group>.card:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .card-group>.card:not(:first-child) .card-img-top,
    .card-group>.card:not(:first-child) .card-header {
      border-top-left-radius: 0;
    }

    .card-group>.card:not(:first-child) .card-img-bottom,
    .card-group>.card:not(:first-child) .card-footer {
      border-bottom-left-radius: 0;
    }
  }

  .card {
    border: 0;
    box-shadow: var(--kt-card-box-shadow);
    background-color: var(--mdc-gray-50);
  }

  .card .card-header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    min-height: 70px;
    color: var(--kt-card-cap-color);
    background-color: var(--kt-card-cap-bg);
    border-bottom: 1px solid var(--kt-card-border-color);
  }

  .card .card-header .card-title {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    margin-left: 0;
  }

  .card .card-header .card-title.flex-column {
    align-items: flex-start;
    justify-content: center;
  }

  .card .card-header .card-title .card-icon {
    margin-right: 0.75rem;
    line-height: 0;
  }

  .card .card-header .card-title .card-icon i {
    font-size: 1.25rem;
    color: var(--kt-gray-600);
    line-height: 0;
  }

  .card .card-header .card-title .card-icon i:after,
  .card .card-header .card-title .card-icon i:before {
    line-height: 0;
  }

  .card .card-header .card-title .card-icon .svg-icon {
    color: var(--kt-gray-600);
  }

  .card .card-header .card-title .card-icon .svg-icon svg {
    height: 24px;
    width: 24px;
  }

  .card .card-header .card-title,
  .card .card-header .card-title .card-label {
    font-weight: 500;
    font-size: 1.275rem;
    color: var(--kt-text-dark);
  }

  .card .card-header .card-title .card-label {
    margin: 0 0.75rem 0 0;
    flex-wrap: wrap;
  }

  .card .card-header .card-title small,
  .card .card-header .card-title .small {
    color: var(--kt-text-muted);
    font-size: 1rem;
  }

  .card .card-header .card-title h1,
  .card .card-header .card-title .h1,
  .card .card-header .card-title h2,
  .card .card-header .card-title .h2,
  .card .card-header .card-title h3,
  .card .card-header .card-title .h3,
  .card .card-header .card-title h4,
  .card .card-header .card-title .h4,
  .card .card-header .card-title h5,
  .card .card-header .card-title .h5,
  .card .card-header .card-title h6,
  .card .card-header .card-title .h6 {
    margin-bottom: 0;
  }

  .card .card-header .card-toolbar {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    flex-wrap: wrap;
  }

  .card .card-body {
    color: var(--kt-card-color);
  }

  .card .card-footer {
    padding: 1rem;
    color: var(--kt-card-cap-color);
    background-color: var(--kt-card-cap-bg);
    border-top: 1px solid var(--kt-card-border-color);
  }

  .card .card-scroll {
    position: relative;
    overflow: auto;
  }

  .card.card-px-0 .card-header,
  .card.card-px-0 .card-body,
  .card.card-px-0 .card-footer {
    padding-left: 0;
    padding-right: 0;
  }

  .card.card-py-0 .card-header,
  .card.card-py-0 .card-body,
  .card.card-py-0 .card-footer {
    padding-top: 0;
    padding-bottom: 0;
  }

  .card.card-p-0 .card-header,
  .card.card-p-0 .card-body,
  .card.card-p-0 .card-footer {
    padding: 0;
  }

  .card.card-dashed {
    box-shadow: none;
    border: 1px dashed var(--kt-card-border-dashed-color);
  }

  .card.card-dashed>.card-header {
    border-bottom: 1px dashed var(--kt-card-border-dashed-color);
  }

  .card.card-dashed>.card-footer {
    border-top: 1px dashed var(--kt-card-border-dashed-color);
  }

  .card.card-bordered {
    box-shadow: none;
    border: 1px solid var(--kt-card-border-color);
  }

  .card.card-flush>.card-header {
    border-bottom: 0 !important;
  }

  .card.card-flush>.card-footer {
    border-top: 0 !important;
  }

  .card.card-shadow {
    box-shadow: var(--kt-card-box-shadow);
    border: 0;
  }

  .card.card-reset {
    border: 0 !important;
    box-shadow: none !important;
    background-color: transparent !important;
  }

  .card.card-reset>.card-header {
    border-bottom: 0 !important;
  }

  .card.card-reset>.card-footer {
    border-top: 0 !important;
  }

  .card.card-stretch {
    height: calc(100% - var(--bs-gutter-y));
  }

  .card.card-stretch-75 {
    height: calc(75% - var(--bs-gutter-y));
  }

  .card.card-stretch-50 {
    height: calc(50% - var(--bs-gutter-y));
  }

  .card.card-stretch-33 {
    height: calc(33.333% - var(--bs-gutter-y));
  }

  .card.card-stretch-25 {
    height: calc(25% - var(--bs-gutter-y));
  }

  .card .card-header-stretch {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    align-items: stretch;
  }

  .card .card-header-stretch .card-toolbar {
    margin: 0;
    align-items: stretch;
  }

  @media (min-width: 576px) {
    .card.card-sm-stretch {
      height: calc(100% - var(--bs-gutter-y));
    }

    .card.card-sm-stretch-75 {
      height: calc(75% - var(--bs-gutter-y));
    }

    .card.card-sm-stretch-50 {
      height: calc(50% - var(--bs-gutter-y));
    }

    .card.card-sm-stretch-33 {
      height: calc(33.333% - var(--bs-gutter-y));
    }

    .card.card-sm-stretch-25 {
      height: calc(25% - var(--bs-gutter-y));
    }

    .card .card-header-sm-stretch {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      align-items: stretch;
    }

    .card .card-header-sm-stretch .card-toolbar {
      margin: 0;
      align-items: stretch;
    }
  }

  @media (min-width: 768px) {
    .card.card-md-stretch {
      height: calc(100% - var(--bs-gutter-y));
    }

    .card.card-md-stretch-75 {
      height: calc(75% - var(--bs-gutter-y));
    }

    .card.card-md-stretch-50 {
      height: calc(50% - var(--bs-gutter-y));
    }

    .card.card-md-stretch-33 {
      height: calc(33.333% - var(--bs-gutter-y));
    }

    .card.card-md-stretch-25 {
      height: calc(25% - var(--bs-gutter-y));
    }

    .card .card-header-md-stretch {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      align-items: stretch;
    }

    .card .card-header-md-stretch .card-toolbar {
      margin: 0;
      align-items: stretch;
    }
  }

  @media (min-width: 992px) {
    .card.card-lg-stretch {
      height: calc(100% - var(--bs-gutter-y));
    }

    .card.card-lg-stretch-75 {
      height: calc(75% - var(--bs-gutter-y));
    }

    .card.card-lg-stretch-50 {
      height: calc(50% - var(--bs-gutter-y));
    }

    .card.card-lg-stretch-33 {
      height: calc(33.333% - var(--bs-gutter-y));
    }

    .card.card-lg-stretch-25 {
      height: calc(25% - var(--bs-gutter-y));
    }

    .card .card-header-lg-stretch {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      align-items: stretch;
    }

    .card .card-header-lg-stretch .card-toolbar {
      margin: 0;
      align-items: stretch;
    }
  }

  @media (min-width: 1200px) {
    .card.card-xl-stretch {
      height: calc(100% - var(--bs-gutter-y));
    }

    .card.card-xl-stretch-75 {
      height: calc(75% - var(--bs-gutter-y));
    }

    .card.card-xl-stretch-50 {
      height: calc(50% - var(--bs-gutter-y));
    }

    .card.card-xl-stretch-33 {
      height: calc(33.333% - var(--bs-gutter-y));
    }

    .card.card-xl-stretch-25 {
      height: calc(25% - var(--bs-gutter-y));
    }

    .card .card-header-xl-stretch {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      align-items: stretch;
    }

    .card .card-header-xl-stretch .card-toolbar {
      margin: 0;
      align-items: stretch;
    }
  }

  @media (min-width: 1400px) {
    .card.card-xxl-stretch {
      height: calc(100% - var(--bs-gutter-y));
    }

    .card.card-xxl-stretch-75 {
      height: calc(75% - var(--bs-gutter-y));
    }

    .card.card-xxl-stretch-50 {
      height: calc(50% - var(--bs-gutter-y));
    }

    .card.card-xxl-stretch-33 {
      height: calc(33.333% - var(--bs-gutter-y));
    }

    .card.card-xxl-stretch-25 {
      height: calc(25% - var(--bs-gutter-y));
    }

    .card .card-header-xxl-stretch {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      align-items: stretch;
    }

    .card .card-header-xxl-stretch .card-toolbar {
      margin: 0;
      align-items: stretch;
    }
  }

  .card-p {
    padding: 2rem 2.25rem !important;
  }

  .card-px {
    padding-left: 2.25rem !important;
    padding-right: 2.25rem !important;
  }

  .card-shadow {
    box-shadow: var(--kt-card-box-shadow);
  }

  .card-py {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  .card-rounded {
    border-radius: 0.625rem;
  }

  .card-rounded-start {
    border-top-left-radius: 0.625rem;
    border-bottom-left-radius: 0.625rem;
  }

  .card-rounded-end {
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }

  .card-rounded-top {
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  }

  .card-rounded-bottom {
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }

  @media (max-width: 767.98px) {
    .card>.card-header:not(.flex-nowrap) {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`;
export {
  Card
};
//# sourceMappingURL=card.js.map
