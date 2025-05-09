import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import {
    LitElement,
    html,
    customElement,
    state,
    CSSResultGroup,
    nothing,
    when
} from '@umbraco-cms/backoffice/external/lit';
import { CmsThemeStyles, CommonStyles, UmbCustomStyles, ViewStyles } from '../../common/styles';
import { GetApplicationInformationForViewDto } from '../models';
import { ApplicationInformationWorkspaceContext } from './application-information-workspace.context';
import { CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION } from './application-information-workspace.context-token';

@customElement('cms-view-applicationinformation')
export default class ApplicationInformationViewElement extends UmbElementMixin(LitElement) {
    //#region Property
    @state()
    private data?: GetApplicationInformationForViewDto;
    //#endregion

    //#region Declare Variables
    breadcrumbs: any[] = [
        { text: `${this.localize.term('commentsPack_applicationInformation')}`, link: '/umbraco/section/comment/workspace/applicationinformation/list' },
        { text: `${this.localize.term('commentsPack_detail')}` }
    ];
    //#endregion

    //#region Constructor && LifeCycle
    #workspaceContext?: ApplicationInformationWorkspaceContext;

    constructor() {
        super();

        this.consumeContext(CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION, (instance) => {
            this.#workspaceContext = instance;
            this.#observeApplicationInformation();
        });
    }
    //#endregion

    //#region Custom Methods
    #observeApplicationInformation() {
        if (!this.#workspaceContext) return;
        this.observe(this.#workspaceContext.data, (value) => this.#initData(value), '_observeData');
    }

    #initData(value: any) {
        this.data = value;
    }
    //#endregion

    //#region OnChange Methods
    //#endregion

    //#region Main Methods
    //#endregion

    //#region Lit Element
    render() {
        return html`
      <div id="sub-header">
        ${this.#renderPageTitle()}
        ${this.#renderPageActions()}
      </div>

      <div id="content-container">
        ${this.#renderContent()}
      </div>
    `;
    }

    #renderPageTitle() {
        return html`
      <div class="d-flex align-items-center">
        <h3 class="sub-header-title">${this.localize.term('commentsPack_information')}</h3>
        <div class="sub-header-separator"></div>
        <ul class="sub-header-breadcrumb">
          ${this.breadcrumbs.map((item) => item.link
            ? html`
              <li class="breadcrumb-item">
                <a href=${item.link}>${item.text}</a>
              </li>
            `
            : html`
              <li class="breadcrumb-item">
                <span>${item.text}</span>
              </li>
            `
        )}
        </ul>
      </div>
    `;
    }

    #renderPageActions() {
        return html`
      <div class="d-flex align-items-center">
        <uui-button look="outline" color="warning" href="/umbraco/section/comment/workspace/applicationinformation/list" 
            label="${this.localize.term('commentsPack_back')}">
          <div class="d-flex">
            <uui-icon name="icon-navigation-first"></uui-icon>
            <span class="ms-1">${this.localize.term('commentsPack_back')}</span>
          </div>
        </uui-button>
      </div>
    `;
    }

    #renderContent() {
        if (!this.data?.applicationInformation.id) {
            return nothing;
        }

        return html`
      <div class="detail-form">
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
            <span>${this.localize.term('commentsPack_applyFor')}</span>
          </div>
          <div class="col-12 col-md-10 value">
            <span>
                ${when(this.data?.applicationInformation.jobPostingKey != null, () => html`                  
                    <a href="${this.data?.jobPostingUrl ?? '#'}" target="_blank">
                        <h3>${this.data?.jobPostingTitle}</h3>
                    </a>
                `)}
                ${when(this.data?.applicationInformation.jobPostingKey == null, () => html`
                    <h3>Chưa tìm thấy việc phù hợp!</h3>
                `)}
            </span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term('commentsPack_fullname')}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.applicationInformation.fullName}</span>
          </div>
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term('commentsPack_email')}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.applicationInformation.email}</span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term('commentsPack_telephone')}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.applicationInformation.telephone}</span>
          </div>
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term('commentsPack_informationFile')}</span>
          </div>
          <div class="col-12 col-md-4 value">
            <span>
                ${when(this.data.applicationInformation.fileUrl != null, () => html`
                    <a href="${this.data?.applicationInformation.fileUrl ?? '#'}" target="_blank" download title="Tải xuống">
                        <uui-icon name="icon-download-alt" class="pe-3"></uui-icon>
                    </a>
                `)}
                ${when(this.data.applicationInformation.fileType == '.docx' && this.data.applicationInformation.fileUrl != null, () => html`
                    <a href="${'https://view.officeapps.live.com/op/view.aspx?src=' + this.data?.applicationInformation.fileUrl}" 
                        target="_blank" title="Xem file">
                        <uui-icon name="icon-zoom-in"></uui-icon>
                    </a>
                `)}
                ${when(this.data.applicationInformation.fileType == '.pdf' && this.data.applicationInformation.fileUrl != null, () => html`
                    <a href="${this.data?.applicationInformation.fileUrl ?? '#'}" target="_blank" title="Xem file">
                        <uui-icon name="icon-zoom-in"></uui-icon>
                    </a>
                `)}
                </span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
            <span>${this.localize.term('commentsPack_comment')}</span>
          </div>
          <div class="col-12 col-md-10 value">
            <span class="text-break">${this.data.applicationInformation.message}</span>
          </div>
        </div>
      </div>
    `;
    }

    static styles: CSSResultGroup = [
        ...CmsThemeStyles,
        UmbCustomStyles,
        CommonStyles,
        ViewStyles
    ];
    //#endregion
}

declare global {
    interface HTMLElementTagNameMap {
        'cms-view-applicationinformation': ApplicationInformationViewElement;
    }
}
