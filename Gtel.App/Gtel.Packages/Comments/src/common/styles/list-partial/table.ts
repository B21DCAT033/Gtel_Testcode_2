import { css, CSSResult } from '@umbraco-cms/backoffice/external/lit';

export const Table: CSSResult = css`
  .datatable .paginator-top,
  .datatable .paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0
  }

  .datatable .datatable-header {
    background: #ffffff;
    color: #323130;
    border: 1px solid #f3f2f1;
    border-width: 1px 0 1px 0;
    padding: .75rem;
    font-weight: 600
  }

  .datatable .datatable-footer {
    background: #ffffff;
    color: #323130;
    border: 1px solid #f3f2f1;
    border-width: 0 0 1px 0;
    padding: .75rem;
    font-weight: 600
  }

  .datatable .datatable-thead>tr>th {
    text-align: left;
    padding: .75rem;
    border: 1px solid #f3f2f1;
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: #323130;
    background: #ffffff;
    transition: box-shadow .2s
  }

  .datatable .datatable-tfoot>tr>td {
    text-align: left;
    padding: .75rem;
    border: 1px solid #f3f2f1;
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: #323130;
    background: #ffffff
  }

  .datatable .sortable-column .sortable-column-icon {
    color: #605e5c;
    margin-left: .5rem
  }

  .datatable .sortable-column .sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #323130;
    background: #edebe9;
    margin-left: .5rem
  }

  .datatable .sortable-column:not(.highlight):hover {
    background: #f3f2f1;
    color: #323130
  }

  .datatable .sortable-column:not(.highlight):hover .sortable-column-icon {
    color: #605e5c
  }

  .datatable .sortable-column.highlight {
    background: #edebe9;
    color: #323130
  }

  .datatable .sortable-column.highlight .sortable-column-icon {
    color: #323130
  }

  .datatable .sortable-column.highlight:hover {
    background: #f3f2f1;
    color: #323130
  }

  .datatable .sortable-column.highlight:hover .sortable-column-icon {
    color: #323130
  }

  .datatable .sortable-column:focus {
    box-shadow: inset 0 0 0 .15rem #605e5c;
    outline: 0 none
  }

  .datatable .datatable-tbody>tr {
    background: #ffffff;
    color: #323130;
    transition: box-shadow .2s
  }

  .datatable .datatable-tbody>tr>td {
    text-align: left;
    border: 1px solid #f3f2f1;
    border-width: 0 0 1px 0;
    padding: .75rem
  }

  .datatable .datatable-tbody>tr>td .row-toggler,
  .datatable .datatable-tbody>tr>td .row-editor-init,
  .datatable .datatable-tbody>tr>td .row-editor-save,
  .datatable .datatable-tbody>tr>td .row-editor-cancel {
    width: 2rem;
    height: 2rem;
    color: #605e5c;
    border: 0 none;
    background: transparent;
    border-radius: 2px;
    transition: background-color .2s, color .2s, box-shadow .2s
  }

  .datatable .datatable-tbody>tr>td .row-toggler:enabled:hover,
  .datatable .datatable-tbody>tr>td .row-editor-init:enabled:hover,
  .datatable .datatable-tbody>tr>td .row-editor-save:enabled:hover,
  .datatable .datatable-tbody>tr>td .row-editor-cancel:enabled:hover {
    color: #605e5c;
    border-color: transparent;
    background: #f3f2f1
  }

  .datatable .datatable-tbody>tr>td .row-toggler:focus,
  .datatable .datatable-tbody>tr>td .row-editor-init:focus,
  .datatable .datatable-tbody>tr>td .row-editor-save:focus,
  .datatable .datatable-tbody>tr>td .row-editor-cancel:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 1px #605e5c
  }

  .datatable .datatable-tbody>tr>td .row-editor-save {
    margin-right: .5rem
  }

  .datatable .datatable-tbody>tr:focus {
    outline: .15rem solid #605e5c;
    outline-offset: .15rem
  }

  .datatable .datatable-tbody>tr.highlight {
    background: #edebe9;
    color: #323130
  }

  .datatable .datatable-tbody>tr.datatable-dragpoint-top>td {
    box-shadow: inset 0 2px #edebe9
  }

  .datatable .datatable-tbody>tr.datatable-dragpoint-bottom>td {
    box-shadow: inset 0 -2px #edebe9
  }

  .datatable.datatable-hoverable-rows .datatable-tbody>tr:not(.highlight):hover {
    background: #f3f2f1;
    color: #323130
  }

  .datatable .column-resizer-helper {
    background: #0078d4
  }

  .datatable .datatable-scrollable-header,
  .datatable .datatable-scrollable-footer {
    background: #faf9f8
  }

  .datatable.datatable-scrollable>.datatable-wrapper>.datatable-table>.datatable-thead,
  .datatable.datatable-scrollable>.datatable-wrapper>.datatable-table>.datatable-tfoot,
  .datatable.datatable-scrollable>.datatable-wrapper>.scroller-viewport>.scroller>.datatable-table>.datatable-thead,
  .datatable.datatable-scrollable>.datatable-wrapper>.scroller-viewport>.scroller>.datatable-table>.datatable-tfoot {
    background-color: #fff
  }

  .datatable .datatable-loading-icon {
    font-size: 2rem
  }

  .datatable.datatable-gridlines .datatable-header {
    border-width: 1px 1px 0 1px
  }

  .datatable.datatable-gridlines .datatable-footer {
    border-width: 0 1px 1px 1px
  }

  .datatable.datatable-gridlines .paginator-top {
    border-width: 0 1px 0 1px
  }

  .datatable.datatable-gridlines .paginator-bottom {
    border-width: 0 1px 1px 1px
  }

  .datatable.datatable-gridlines .datatable-thead>tr>th {
    border-width: 1px 0 1px 1px
  }

  .datatable.datatable-gridlines .datatable-thead>tr>th:last-child {
    border-width: 1px
  }

  .datatable.datatable-gridlines .datatable-tbody>tr>td {
    border-width: 1px 0 0 1px
  }

  .datatable.datatable-gridlines .datatable-tbody>tr>td:last-child {
    border-width: 1px 1px 0 1px
  }

  .datatable.datatable-gridlines .datatable-tbody>tr:last-child>td {
    border-width: 1px 0 1px 1px
  }

  .datatable.datatable-gridlines .datatable-tbody>tr:last-child>td:last-child {
    border-width: 1px
  }

  .datatable.datatable-gridlines .datatable-tfoot>tr>td {
    border-width: 1px 0 1px 1px
  }

  .datatable.datatable-gridlines .datatable-tfoot>tr>td:last-child {
    border-width: 1px 1px 1px 1px
  }

  .datatable.datatable-gridlines .datatable-thead+.datatable-tfoot>tr>td {
    border-width: 0 0 1px 1px
  }

  .datatable.datatable-gridlines .datatable-thead+.datatable-tfoot>tr>td:last-child {
    border-width: 0 1px 1px 1px
  }

  .datatable.datatable-gridlines:has(.datatable-thead):has(.datatable-tbody) .datatable-tbody>tr>td {
    border-width: 0 0 1px 1px
  }

  .datatable.datatable-gridlines:has(.datatable-thead):has(.datatable-tbody) .datatable-tbody>tr>td:last-child {
    border-width: 0 1px 1px 1px
  }

  .datatable.datatable-gridlines:has(.datatable-tbody):has(.datatable-tfoot) .datatable-tbody>tr:last-child>td {
    border-width: 0 0 0 1px
  }

  .datatable.datatable-gridlines:has(.datatable-tbody):has(.datatable-tfoot) .datatable-tbody>tr:last-child>td:last-child {
    border-width: 0 1px 0 1px
  }

  .datatable.datatable-striped .datatable-tbody>tr:nth-child(even) {
    background: #faf9f8
  }

  .datatable.datatable-striped .datatable-tbody>tr:nth-child(even).highlight {
    background: #edebe9;
    color: #323130
  }

  .datatable.datatable-striped .datatable-tbody>tr:nth-child(even).highlight .row-toggler {
    color: #323130
  }

  .datatable.datatable-striped .datatable-tbody>tr:nth-child(even).highlight .row-toggler:hover {
    color: #323130
  }

  .datatable.datatable-sm .datatable-header {
    padding: .375rem
  }

  .datatable.datatable-sm .datatable-thead>tr>th {
    padding: .375rem
  }

  .datatable.datatable-sm .datatable-tbody>tr>td {
    padding: .375rem
  }

  .datatable.datatable-sm .datatable-tfoot>tr>td {
    padding: .375rem
  }

  .datatable.datatable-sm .datatable-footer {
    padding: .375rem
  }

  .datatable.datatable-lg .datatable-header {
    padding: .9375rem
  }

  .datatable.datatable-lg .datatable-thead>tr>th {
    padding: .9375rem
  }

  .datatable.datatable-lg .datatable-tbody>tr>td {
    padding: .9375rem
  }

  .datatable.datatable-lg .datatable-tfoot>tr>td {
    padding: .9375rem
  }

  .datatable.datatable-lg .datatable-footer {
    padding: .9375rem
  }

  .datatable .datatable-tbody>tr.datatable-dragpoint-top>td {
    box-shadow: inset 0 2px #0078d4
  }

  .datatable .datatable-tbody>tr.datatable-dragpoint-bottom>td {
    box-shadow: inset 0 -2px #0078d4
  }

  @media screen and (max-width: 575.98px) {
    .datatable .datatable-tbody>tr>td {
      border:0 none
    }
  }

  .datatable-scrollable-header-box {
    background-color: #f4f4f4;
    padding-right: 0!important
  }

  .size-inherit>.datatable {
    font-size: inherit!important
  }
`;