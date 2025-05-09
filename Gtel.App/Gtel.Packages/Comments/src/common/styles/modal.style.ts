import { css } from '@umbraco-cms/backoffice/external/lit';

export const ModalStyles = [
  css`
    uui-dialog-layout {
      padding: 0;
    }

    .modal-header {
      border-bottom: 1px solid var(--kt-modal-header-border-color);
      padding: var(--uui-size-8) 1.75rem;
    }

    .modal-dialog {
      --bs-modal-width: 500px;
      padding-right: 1.75rem;
      padding-left: 1.75rem;
      width: var(--bs-modal-width);
    }

    @media (min-width: 576px) {

      .modal-dialog {
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

    .modal-footer {
      border-top: 1px solid var(--kt-modal-header-border-color);
      padding: var(--uui-size-8) 1.75rem;
      padding-bottom: 0;
    }
  `,
];
