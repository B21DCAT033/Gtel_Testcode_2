import { css, CSSResult } from '@umbraco-cms/backoffice/external/lit';

export const Modal: CSSResult = css`
  .modal {
    --bs-modal-zindex: 1055;
    --bs-modal-width: 500px;
    --bs-modal-padding: 1.75rem;
    --bs-modal-margin: 0.5rem;
    --bs-modal-color: ;
    --bs-modal-bg: #ffffff;
    --bs-modal-border-color: var(--bs-border-color-translucent);
    --bs-modal-border-width: 0;
    --bs-modal-border-radius: 0.475rem;
    --bs-modal-box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    --bs-modal-inner-border-radius: 0.475rem;
    --bs-modal-header-padding-x: 1.75rem;
    --bs-modal-header-padding-y: 1rem;
    --bs-modal-header-padding: 1rem 1.75rem;
    --bs-modal-header-border-color: #eff2f5;
    --bs-modal-header-border-width: 1px;
    --bs-modal-title-line-height: 1.5;
    --bs-modal-footer-gap: 0.5rem;
    --bs-modal-footer-bg: ;
    --bs-modal-footer-border-color: #eff2f5;
    --bs-modal-footer-border-width: 1px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--bs-modal-zindex);
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: var(--bs-modal-margin);
    pointer-events: none;
  }

  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -50px);
  }

  @media (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }

  .modal.show .modal-dialog {
    transform: none;
  }

  .modal.modal-static .modal-dialog {
    transform: scale(1.02);
  }

  .modal-dialog-scrollable {
    height: calc(100% - var(--bs-modal-margin) * 2);
  }

  .modal-dialog-scrollable .modal-content {
    max-height: 100%;
    overflow: hidden;
  }

  .modal-dialog-scrollable .modal-body {
    overflow-y: auto;
  }

  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - var(--bs-modal-margin) * 2);
  }

  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--bs-modal-color);
    pointer-events: auto;
    background-color: var(--bs-modal-bg);
    background-clip: padding-box;
    border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
    border-radius: var(--bs-modal-border-radius);
    box-shadow: var(--bs-modal-box-shadow);
    outline: 0;
  }

  .modal-backdrop {
    --bs-backdrop-zindex: 1050;
    --bs-backdrop-bg: #000000;
    --bs-backdrop-opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--bs-backdrop-zindex);
    width: 100vw;
    height: 100vh;
    background-color: var(--bs-backdrop-bg);
  }

  .modal-backdrop.fade {
    opacity: 0;
  }

  .modal-backdrop.show {
    opacity: var(--bs-backdrop-opacity);
  }

  .modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: var(--bs-modal-header-padding);
    border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
    border-top-left-radius: var(--bs-modal-inner-border-radius);
    border-top-right-radius: var(--bs-modal-inner-border-radius);
  }

  .modal-header .btn-close {
    padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);
    margin: calc(var(--bs-modal-header-padding-y) * -0.5) calc(var(--bs-modal-header-padding-x) * -0.5) calc(var(--bs-modal-header-padding-y) * -0.5) auto;
  }

  .modal-title {
    margin-bottom: 0;
    line-height: var(--bs-modal-title-line-height);
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: var(--bs-modal-padding);
  }

  .modal-footer {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
    background-color: var(--bs-modal-footer-bg);
    border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
    border-bottom-right-radius: var(--bs-modal-inner-border-radius);
    border-bottom-left-radius: var(--bs-modal-inner-border-radius);
  }

  .modal-footer>* {
    margin: calc(var(--bs-modal-footer-gap) * 0.5);
  }

  @media (min-width: 576px) {
    .modal {
      --bs-modal-margin: 1.75rem;
      --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }

    .modal-dialog {
      max-width: var(--bs-modal-width);
      margin-right: auto;
      margin-left: auto;
    }

    .modal-sm {
      --bs-modal-width: 300px;
    }
  }

  @media (min-width: 768px) {

    .modal-lg,
    .modal-xl {
      --bs-modal-width: 720px;
    }
  }

  @media (min-width: 992px) {

    .modal-lg,
    .modal-xl {
      --bs-modal-width: 880px;
    }
  }

  @media (min-width: 1200px) {
    .modal-xl {
      --bs-modal-width: 1140px;
    }
  }

  .modal-fullscreen {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }

  .modal-fullscreen .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }

  .modal-fullscreen .modal-header,
  .modal-fullscreen .modal-footer {
    border-radius: 0;
  }

  .modal-fullscreen .modal-body {
    overflow-y: auto;
  }

  @media (max-width: 575.98px) {
    .modal-fullscreen-sm-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }

    .modal-fullscreen-sm-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }

    .modal-fullscreen-sm-down .modal-header,
    .modal-fullscreen-sm-down .modal-footer {
      border-radius: 0;
    }

    .modal-fullscreen-sm-down .modal-body {
      overflow-y: auto;
    }
  }

  @media (max-width: 767.98px) {
    .modal-fullscreen-md-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }

    .modal-fullscreen-md-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }

    .modal-fullscreen-md-down .modal-header,
    .modal-fullscreen-md-down .modal-footer {
      border-radius: 0;
    }

    .modal-fullscreen-md-down .modal-body {
      overflow-y: auto;
    }
  }

  @media (max-width: 991.98px) {
    .modal-fullscreen-lg-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }

    .modal-fullscreen-lg-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }

    .modal-fullscreen-lg-down .modal-header,
    .modal-fullscreen-lg-down .modal-footer {
      border-radius: 0;
    }

    .modal-fullscreen-lg-down .modal-body {
      overflow-y: auto;
    }
  }

  @media (max-width: 1199.98px) {
    .modal-fullscreen-xl-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }

    .modal-fullscreen-xl-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }

    .modal-fullscreen-xl-down .modal-header,
    .modal-fullscreen-xl-down .modal-footer {
      border-radius: 0;
    }

    .modal-fullscreen-xl-down .modal-body {
      overflow-y: auto;
    }
  }

  @media (max-width: 1399.98px) {
    .modal-fullscreen-xxl-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }

    .modal-fullscreen-xxl-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }

    .modal-fullscreen-xxl-down .modal-header,
    .modal-fullscreen-xxl-down .modal-footer {
      border-radius: 0;
    }

    .modal-fullscreen-xxl-down .modal-body {
      overflow-y: auto;
    }
  }

  .modal {
    --bs-modal-color: var(--kt-modal-content-color);
    --bs-modal-bg: var(--kt-modal-content-bg);
    --bs-modal-border-color: var(--kt-modal-content-border-color);
    --bs-modal-box-shadow: var(--kt-modal-content-box-shadow-xs);
    --bs-modal-header-border-color: var(--kt-modal-header-border-color);
    --bs-modal-footer-bg: var(--kt-modal-footer-bg);
    --bs-modal-footer-border-color: var(--kt-modal-footer-border-color);
  }

  .modal-dialog {
    outline: none !important;
  }

  .modal-header {
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 0.475rem;
    border-top-right-radius: 0.475rem;
    border-bottom: 1px solid var(--kt-modal-header-border-color);
  }

  .modal-header h1,
  .modal-header .h1,
  .modal-header h2,
  .modal-header .h2,
  .modal-header h3,
  .modal-header .h3,
  .modal-header h4,
  .modal-header .h4,
  .modal-header h5,
  .modal-header .h5,
  .modal-header h6,
  .modal-header .h6 {
    margin-bottom: 0;
  }

  .modal-content {
    color: var(--kt-modal-color);
    background-color: var(--kt-modal-bg);
    border: 0 solid var(--kt-modal-border-color);
    box-shadow: var(--kt-modal-box-shadow);
  }

  .modal-footer {
    background-color: var(--kt-modal-footer-bg);
    border-top: 1px solid var(--bs-modal-footer-border-color);
  }

  .modal-backdrop {
    --bs-backdrop-bg: var(--kt-modal-backdrop-bg);
    --bs-backdrop-opacity: var(--kt-modal-backdrop-opacity);
  }

  @media (min-width: 576px) {
    .modal-content {
      box-shadow: var(--kt-modal-box-shadow-sm-up);
    }
  }

  .modal-rounded {
    border-radius: 0.475rem !important;
  }
`;