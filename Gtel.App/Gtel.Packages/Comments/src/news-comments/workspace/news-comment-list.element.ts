import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import {
  CSSResultGroup,
  customElement,
  html,
  LitElement,
  nothing,
  query,
  state,
  when
} from '@umbraco-cms/backoffice/external/lit';
import { UUIPaginationElement, UUIPaginationEvent } from '@umbraco-cms/backoffice/external/uui';
import { GetNewsCommentForViewDto, NewsCommentSearchInput } from '../models';
import { CmsThemeStyles, CommonStyles, ListStyles, UmbCustomStyles } from '../../common/styles';
import { NewsCommentService } from '../services/news-comment.service';
import { GtelPortalService } from '../../common/services/gtelPortal.service';
import { ITEMS_PER_PAGE_OTPIONS, NAME_OF_COMMENTS_SERVICES } from '../../common/consts/enum';
import { umbConfirmModal } from '@umbraco-cms/backoffice/modal';
import { UMB_NOTIFICATION_CONTEXT, UmbNotificationContext } from '@umbraco-cms/backoffice/notification';
import { UMB_AUTH_CONTEXT } from '@umbraco-cms/backoffice/auth';
import { UserInfo } from '../../common/models/user-info.interface';

@customElement('cms-list-newscomment')
export default class NewsCommentListElement extends UmbElementMixin(LitElement) {
  //#region Property
  @state()
  private _items: Array<GetNewsCommentForViewDto> = [];

  @state()
  private _total = 0;

  @state()
  private _selection: Array<number> = [];

  @state()
  private _currentUser: UserInfo = {
    id: 0,
    name: '',
    userName: ''
  };

  @state()
  private _accessToken: string | undefined = '';

  //#region Property
  @query('#searchForm')
  searchForm!: HTMLFormElement;

  @query('#paginator')
  paginator!: UUIPaginationElement;
  //#endregion

  //#region Declare Variables
  #searchInput: NewsCommentSearchInput = {
    skipCount: 0,
    maxResultCount: 10
  } as any;

  #itemsPerPageOptions = [...ITEMS_PER_PAGE_OTPIONS];
  #itemsPerPage = 10;
  #currentPage = 1;

  #newsCommentService!: NewsCommentService;
  #gtelPortalService!: GtelPortalService;

  #auth?: typeof UMB_AUTH_CONTEXT.TYPE;
  #notificationContext?: UmbNotificationContext;
  //#endregion

  //#region Constructor && LifeCycle

  constructor() {
    super();
    this.#newsCommentService = new NewsCommentService(NAME_OF_COMMENTS_SERVICES.NEWSCOMMENT);
    this.#gtelPortalService = new GtelPortalService();

    this.consumeContext(UMB_AUTH_CONTEXT, (instance) => {
      this.#auth = instance;
    });

    this.consumeContext(UMB_NOTIFICATION_CONTEXT, (_instance) => {
      this.#notificationContext = _instance;
    });
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.#getAccessToken();
    await this.#getCurrentUser();
    await this.#getAll();
  }
  //#endregion

  //#region Custom Methods
  async #getAll() {
    if (this._accessToken) {
      const skipCount = this.#currentPage * this.#itemsPerPage - this.#itemsPerPage;
      const maxResultCount = this.#itemsPerPage;
      const response = await this.#newsCommentService?.search({
        ...this.#searchInput,
        skipCount,
        maxResultCount
      }, this._accessToken);
      if (response.ok) {
        const data = await response.json();
        this._items = data.items;
        this._total = data.totalCount;
      } else {
        console.error('HTTP Error:', response.status);
      }
    }
  }

  async #getAccessToken() {
    this._accessToken = await this.#auth?.getLatestToken();
  }

  async #getCurrentUser() {
    if (this._accessToken) {
      const response = await this.#gtelPortalService.getCurrentUser(this._accessToken);
      if (response.ok) {
        this._currentUser = await response.json();
      } else {
        console.error('Not found');
      }
    }
  }
  //#endregion

  //#region OnChange Methods
  #selectHandler(event: Event, item: GetNewsCommentForViewDto) {
    const checkboxElement = event.target as HTMLInputElement;
    this._selection = checkboxElement.checked
      ? [...this._selection, item.newsComment.id]
      : this._selection.filter(selectionKey => selectionKey !== item.newsComment.id);
  }

  #selectAllHandler(event: Event) {
    const checkboxElement = event.target as HTMLInputElement;
    this._selection = checkboxElement.checked
      ? this._items.map((item: GetNewsCommentForViewDto) => item.newsComment.id)
      : [];
  }

  #isSelected(id: number) {
    return this._selection.includes(id);
  }

  #onPageChanged(event: UUIPaginationEvent) {
    this.#currentPage = event.target.current;
    this.#getAll();
  }

  #onItemsPerPageChanged(event: any) {
    this.#itemsPerPage = event.target.value;
    this.#currentPage = 1;
    this.#getAll();
  }
  //#endregion

  //#region Main Methods
  async #search(e: Event) {
    e.preventDefault();
    const formData = new FormData(this.searchForm);
    this.#searchInput.filter = formData.get('filter') as string;
    this.#searchInput.sorting = '';
    this.#getAll();
  }

  async #approve(id: number) {
    try {
      if (this._accessToken) {
        const response = await this.#newsCommentService?.approve({
          id,
          currentUserName: this._currentUser.userName,
          currentUserId: this._currentUser.id
        }, this._accessToken);

        // Handle the response
        if (response.ok) {
          this.#notificationContext?.peek("positive", {
            data: { message: "Phê duyệt thành công!" },
          });
          await this.#getAll();
        } else {
          console.log(`Error: ${response.statusText}`);
          this.#notificationContext?.peek("danger", {
            data: { message: "Phê duyệt xảy ra lỗi!" },
          });
        }
      }
    }
    catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  async #reject(id: number) {
    try {
      if (this._accessToken) {
        const response = await this.#newsCommentService?.reject({
          id,
          currentUserName: this._currentUser.userName,
          currentUserId: this._currentUser.id
        }, this._accessToken);

        // Handle the response
        if (response.ok) {
          this.#notificationContext?.peek("positive", {
            data: { message: "Hủy, không phê duyệt thành công!" },
          });
          await this.#getAll();
        } else {
          console.log(`Error: ${response.statusText}`);
          this.#notificationContext?.peek("danger", {
            data: { message: "Hủy, không phê duyệt xảy ra lỗi!" },
          });
        }
      }
    }
    catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  #view(item: any) {
    history.pushState({}, '', `section/comment/workspace/newscomment/view/${item.newsComment.id}`);
  }

  async #delete(id: number) {
    try {
      if (this._accessToken) {
        await umbConfirmModal(this, {
          color: 'danger',
          headline: `${this.localize.term('commentsPack_deleteComment')}?`,
          content: html`${this.localize.term('commentsPack_areYouSureDeleteThisComment')}`,
          confirmLabel: `${this.localize.term('commentsPack_yes')}`,
          cancelLabel: `${this.localize.term('commentsPack_no')}`
        });
  
        const response = await this.#newsCommentService?.delete({
          id,
          currentUserName: this._currentUser.userName,
          currentUserId: this._currentUser.id
        }, this._accessToken);
  
        // Handle the response
        if (response.ok) {
          this.#notificationContext?.peek("positive", {
            data: { message: `${this.localize.term('commentsPack_completedSuccessfully')}` },
          });
          await this.#getAll();
        } else {
          console.log(`Error: ${response.statusText}`);
          this.#notificationContext?.peek("danger", {
            data: { message: `${this.localize.term('commentsPack_executionFailed')}` },
          });
        }
      }
    }
    catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  async #deletes() {
    try {
      if (this._accessToken) {
        await umbConfirmModal(this, {
          color: 'danger',
          headline: `${this.localize.term('commentsPack_deleteComment')}?`,
          content: html`${this.localize.term('commentsPack_areYouSureDeleteTheSelectedComments')}`,
          confirmLabel: `${this.localize.term('commentsPack_yes')}`,
          cancelLabel: `${this.localize.term('commentsPack_no')}`
        });

        const response = await this.#newsCommentService?.deletes({
          ids: this._selection,
          deleterUserId: this._currentUser.id,
          deleterUserName: this._currentUser.userName
        }, this._accessToken);

        // Handle the response
        if (response.ok) {
          this.#notificationContext?.peek("positive", {
            data: { message: `${this.localize.term('commentsPack_completedSuccessfully')}` },
          });
          await this.#getAll();
        } else {
          console.log(`Error: ${response.statusText}`);
          this.#notificationContext?.peek("danger", {
            data: { message: `${this.localize.term('commentsPack_executionFailed')}` },
          });
        }
      }
    }
    catch (error) {
      console.log(error);
      throw new Error();
    }
  }
  //#endregion

  //#region Lit Element
  render() {
    return html`
      <div id="sub-header">
        ${this.#renderPageTitle()}
        ${this.#renderPageActions()}
      </div>

      <div id="content-container">
        ${this.#renderSearchForm()}
        ${this.#renderDatatable()}
      </div>
    `;
  }

  #renderPageTitle() {
    return html`
      <div class="d-flex align-items-center">
        <h3 class="sub-header-title">${this.localize.term('commentsPack_information')}</h3>
        <div class="sub-header-separator"></div>
        <div class="sub-header-breadcrumb">${this.localize.term('commentsPack_articleComments')}</div>
      </div>
    `;
  }

  #renderPageActions() {
    return html`
      <div class="d-flex align-items-center">
        ${when(this._selection?.length > 0, () => html`
          <uui-button look="outline" color="danger" label="${this.localize.term('commentsPack_deleteSelectedComments')}"
            @click="${this.#deletes}">
            <div class="d-flex">
              <uui-icon name="icon-remove"></uui-icon>
              <span class="ms-1">${this.localize.term('commentsPack_deleteSelectedComments')}</span>
            </div>
          </uui-button>
        `)}
      </div>
    `;
  }

  #renderSearchForm() {
    return html`
      <form id="searchForm" name="searchForm">
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="filter" />
            <button type="submit" class="btn btn-primary" @click="${this.#search}">
              <uui-icon name="search" class="pe-0"></uui-icon>
            </button>
          </div>
      </form>
    `;
  }

  #renderDatatable() {
    return html`
      <div class="mt-4">
        <table class="datatable datatable-gridlines">
          <thead class="datatable-thead">
            <tr>
              <th class="text-center" style="width: 3em">
                ${when(this._items?.length > 0, () => html`
                  <uui-checkbox
                    @change="${this.#selectAllHandler}"
                    ?checked="${this._selection.length === this._items.length}">
                  </uui-checkbox>
                `)}
              </th>
              <th>${this.localize.term('commentsPack_comment')}</th>
              <th>${this.localize.term('commentsPack_commenterInformation')}</th>
              <th>${this.localize.term('commentsPack_article')}</th>
            </tr>
          </thead>
          <tbody class="datatable-tbody">
            ${this._items.map((item) => html`
              <tr>
                <td class="text-center">
                  <uui-checkbox
                    @click=${(e: MouseEvent) => e.stopPropagation()}
                    @change=${(event: Event) => this.#selectHandler(event, item)}
                    ?checked="${this.#isSelected(item.newsComment.id)}">
                  </uui-checkbox>
                </td>
                <td class="align-top">
                  <div>
                    <strong>${this.localize.term('commentsPack_comment')}:</strong>
                    <span>${item.newsComment.message}</span>
                  </div>
                  <div>
                    <strong>${this.localize.term('commentsPack_status')}:</strong>
                    ${when(item.newsComment.isApproved, () => html`
                      <uui-tag color="positive" class="ms-1">
                        ${this.localize.term('commentsPack_approved')}
                      </uui-tag>
                    `)}
                    ${when(!item.newsComment.isApproved, () => html`
                      <uui-tag color="danger" class="ms-1">                          
                        ${this.localize.term('commentsPack_notApproved')}
                      </uui-tag>
                    `)}
                  </div>
                  <div class="mt-1">
                    ${when(item.newsComment.isApproved, () => html`
                        <button type="button" class="btn btn-outline btn-outline-warning btn-xs" 
                          title="${this.localize.term('commentsPack_clickToRejectThisComment')}"
                          @click="${() => this.#reject(item.newsComment.id)}">
                          <span>${this.localize.term('commentsPack_notApprove')}</span>
                        </button>
                    `)}
                    ${when(!item.newsComment.isApproved, () => html`
                        <button type="button" class="btn btn-outline btn-outline-info btn-xs" 
                          title="${this.localize.term('commentsPack_clickToApproveThisComment')}"
                          @click="${() => this.#approve(item.newsComment.id)}">
                          <span>${this.localize.term('commentsPack_approve')}</span>
                        </button>
                    `)}
                    <button type="button" class="btn btn-outline btn-outline-danger btn-xs" 
                      title="${this.localize.term('commentsPack_clickToDeleteThisComment')}"
                      @click="${() => this.#delete(item.newsComment.id)}">
                      <span>${this.localize.term('commentsPack_delete')}</span>
                    </button>
                  </div>
                </td>
                <td class="align-top">
                  <div>
                    <strong>${this.localize.term('commentsPack_name')}:</strong>
                    <a class="hover-link" href="javascript:;" title="${this.localize.term('commentsPack_clickToViewDetails')}"
                      @click="${() => this.#view(item)}">
                      <span>${item.newsComment.name}</span>
                    </a>
                  </div>
                  <div>
                    <strong>${this.localize.term('commentsPack_email')}:</strong>
                    <span>${item.newsComment.email}</span>
                  </div>
                </td>
                <td class="align-top">
                    <a href="${item.newsUrl ?? '#'}" target="_blank">${item.newsTitle}</a>
                </td>
              </tr>
            `)}
          </tbody>
        </table>

        ${when(!this._items?.length, () => html`
          <div class="text-center my-2">${this.localize.term('commentsPack_noData')}</div>
        `)}

        <div class="paginator">
          <div class="total-records">${this.localize.term('commentsPack_total')}: ${this._total}</div>
          <div class="d-flex">
            <uui-pagination
              id="paginator"
              .current=${this.#currentPage}
              .total=${Math.ceil(this._total / this.#itemsPerPage)}
              @change=${this.#onPageChanged}>
            </uui-pagination>
            ${this.#refactorUuiPagination()}
            <uui-select label="itemsPerPage" @change=${this.#onItemsPerPageChanged} .options=${this.#itemsPerPageOptions} class="ms-4">
            </uui-select>
          </div>
        </div>
      </div>
    `;
  }

  #refactorUuiPagination() {
    setTimeout(() => {
      this.paginator['renderFirst'] = () => {
        return html`<uui-button
          compact
          look="outline"
          class="nav"
          role="listitem"
          label="Go to first page"
          ?disabled=${this.paginator.current === 1}
          @click=${() => this.paginator.goToPage(1)}>
          <uui-icon name="icon-left-double-arrow"></uui-icon>
        </uui-button>`;
      };

      this.paginator['renderPrevious'] = () => {
        return html`<uui-button
          compact
          look="outline"
          class="nav"
          role="listitem"
          label="Go to previous page"
          ?disabled=${this.paginator.current === 1}
          @click=${this.paginator.goToPreviousPage}>
          <uui-icon name="icon-arrow-left"></uui-icon>
        </uui-button>`;
      };

      this.paginator['renderNext'] = () => {
        return html`<uui-button
          compact
          look="outline"
          role="listitem"
          class="nav"
          label="Go to next page"
          ?disabled=${this.paginator.current === this.paginator.total}
          @click=${this.paginator.goToNextPage}>
          <uui-icon name="icon-arrow-right"></uui-icon>
        </uui-button>`;
      };

      this.paginator['renderLast'] = () => {
        return html`
          <uui-button
            compact
            look="outline"
            role="listitem"
            class="nav"
            label="Go to last page"
            ?disabled=${this.paginator.total === this.paginator.current}
            @click=${() => this.paginator.goToPage(this.paginator.total)}>
            <uui-icon name="icon-right-double-arrow"></uui-icon>
          </uui-button>
        `;
      };
    });

    return nothing;
  }


  static styles: CSSResultGroup = [
    ...CmsThemeStyles,
    UmbCustomStyles,
    CommonStyles,
    ListStyles
  ];
  //#endregion
}

declare global {
  interface HTMLElementTagNameMap {
    'cms-list-newscomment': NewsCommentListElement;
  }
}
