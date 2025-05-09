import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import {
  LitElement,
  html,
  customElement,
  state,
  CSSResultGroup,
  nothing
} from '@umbraco-cms/backoffice/external/lit';
import { CmsThemeStyles, CommonStyles, UmbCustomStyles, ViewStyles } from '../../common/styles';
import { GetNewsCommentForViewDto } from '../models';
import { NewsCommentWorkspaceContext } from './news-comment-workspace.context';
import { CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT } from './news-comment-workspace.context-token';

@customElement('cms-view-newscomment')
export default class NewsCommentViewElement extends UmbElementMixin(LitElement) {
  //#region Property
  @state()
  private data?: GetNewsCommentForViewDto;
  //#endregion

  //#region Declare Variables
  breadcrumbs: any[] = [
    { text: `${this.localize.term('commentsPack_articleComments')}`, link: '/umbraco/section/comment/workspace/newscomment/list' },
    { text: `${this.localize.term('commentsPack_detail')}` }
  ];
  //#endregion

  //#region Constructor && LifeCycle
  #workspaceContext?: NewsCommentWorkspaceContext;

  constructor() {
    super();

    this.consumeContext(CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT, (instance) => {
      this.#workspaceContext = instance;
      this.#observeNewsComment();
    });
  }
  //#endregion

  //#region Custom Methods
  #observeNewsComment() {
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
        <uui-button look="outline" color="warning" href="/umbraco/section/comment/workspace/newscomment/list" 
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
    if (!this.data?.newsComment.id) {
      return nothing;
    }

    return html`
      <div class="detail-form">
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
            <span>${this.localize.term('commentsPack_article')}</span>
          </div>
          <div class="col-12 col-md-10 value">
            <span>
                <a href="${this.data.newsUrl ?? '#'}" target="_blank">
                    <h3>${this.data.newsTitle}</h3>
                </a>
            </span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term('commentsPack_name')}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.newsComment.name}</span>
          </div>
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term('commentsPack_email')}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.newsComment.email}</span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
            <span>${this.localize.term('commentsPack_comment')}</span>
          </div>
          <div class="col-12 col-md-10 value">
            <span class="text-break">${this.data.newsComment.message}</span>
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
    'cms-view-newscomment': NewsCommentViewElement;
  }
}
