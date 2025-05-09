import { css } from '@umbraco-cms/backoffice/external/lit';
import { Table } from './list-partial/table';

export const ListStyles = [
  css`
    .datatable uui-checkbox {
      vertical-align: middle;
    }

    .datatable .hover-link {
      text-decoration: none;
    }

      .datatable .hover-link:hover {
        text-decoration: underline;
      }

    .datatable .btn-action {
      --uui-button-height: 0;
    }

    .paginator {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 33px;
      margin-top: 1rem;
    }

    .paginator uui-select {
      min-width: 64px;
    }
  `,
  Table,
  css`
    .datatable {
      border-spacing: 0px;
      width: 100%;
    }

    .datatable .datatable-thead > tr > th,
    .datatable .datatable-tbody > tr > td {
      color: black !important;
    }

    .datatable .datatable-thead > tr > th {
      background-color: var(--mdc-gray-400);
      font-weight: 600;
      text-align: center;
    }

    .datatable.datatable-gridlines .datatable-thead > tr > th,
    .datatable.datatable-gridlines .datatable-tbody > tr > td {
      border-color: #173B70;
    }

    .datatable.datatable-striped .datatable-tbody > tr:nth-child(odd) {
      background-color: var(--mdc-gray-50);
    }

    .datatable.datatable-striped .datatable-tbody > tr:nth-child(even) {
      background-color: var(--mdc-gray-300);
    }

    .datatable.datatable-hoverable-rows .datatable-tbody > tr:not(.highlight):hover {
      background: var(--mdc-gray-400) !important;
    }
  `
];
