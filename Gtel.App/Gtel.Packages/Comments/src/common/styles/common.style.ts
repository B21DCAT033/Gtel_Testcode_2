import { css } from '@umbraco-cms/backoffice/external/lit';

export const CommonStyles = [
  css`
    :host {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    a {
      text-decoration: none;
    }

    #sub-header {
      display: flex;
      /* align-items: center; */
      justify-content: space-between;
      /* width: 100%; */
      background-color: var(--uui-color-surface);
      height: var(--umb-header-layout-height);
      line-height: normal;
      border-bottom: 1px solid var(--uui-color-border);
      padding: 0 var(--uui-size-layout-1);
      box-sizing: border-box;
    }

      #sub-header .sub-header-separator {
        background-color: #b5b5c3;
        width: 1px;
        height: 1.5rem;
        margin-right: 1rem;
        margin-left: 1rem;
      }

      #sub-header .sub-header-breadcrumb {
        list-style-type: none;
        display: flex;
        color: var(--kt-text-muted);
        font-weight: 600;
        padding-left: 0;
      }

        #sub-header .sub-header-breadcrumb .breadcrumb-item:not(:last-child) {
          padding-right: 0.5rem;
        }

          #sub-header .sub-header-breadcrumb .breadcrumb-item:not(:last-child):after {
            content: "/";
            content: "•";
            padding-left: .5rem;
          }

        #sub-header .sub-header-breadcrumb .breadcrumb-item a {
          text-decoration: none;
          color: var(--kt-text-muted);
          font-weight: 600;
        }

          #sub-header .sub-header-breadcrumb .breadcrumb-item a:hover {
            color: var(--kt-text-dark);
          }

    #content-container {
      flex: 1;
      background-color: #fff;
      padding: 1rem;
      line-height: 20px;
      overflow-y: auto;
    }

    uui-form-layout-item {
      margin-top: 0;
    }

    uui-input,
    uui-select,
    uui-textarea {
      width: 100%;
      border-radius: 0.475rem;
      outline: none;
    }

    uui-input:has([pristine])
    uui-input:not(:invalid) {
      border-color: var(--mdc-gray-500);
    }

    uui-input:focus {
      border-color: var(--mdc-blue-400);
    }
  `,
];
