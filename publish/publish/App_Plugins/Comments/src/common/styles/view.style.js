import { css } from "@umbraco-cms/backoffice/external/lit";
const ViewStyles = [
  css`
    .detail-form > div.row {
      margin-right: 0;
      margin-left: 0;
      border-top: 1px solid var(--bs-gray-300);
    }

      .detail-form > div.row > div.key,
      .detail-form > div.row > div.value {
        display: flex;
        align-items: center;
        min-height: 32px;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .detail-form > div.row > div.key {
        align-self: stretch;
        background-color: var(--bs-gray-200);
        font-weight: 500;
      }

      .detail-form > div.row > div.key > span,
      .detail-form > div.row > div.value > span {
        margin-right: calc(var(--bs-gutter-x)* 0.5);
        margin-left: calc(var(--bs-gutter-x)* 0.5);
      }

    @media screen and (max-width: 767.98px) {
      .detail-form > div.row > div:nth-child(odd):not(:first-child) {
        border-top: 1px solid var(--bs-gray-300);
      }

      .detail-form > div.row > div:nth-child(odd) {
        font-weight: 700;
      }
    }
  `
];
export {
  ViewStyles
};
//# sourceMappingURL=view.style.js.map
