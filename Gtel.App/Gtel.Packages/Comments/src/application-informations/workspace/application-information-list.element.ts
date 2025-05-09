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
import { GetApplicationInformationForViewDto, ApplicationInformationSearchInput } from '../models';
import { ApplicationInformationService } from '../services/application-information.service';
import { CmsThemeStyles, CommonStyles, ListStyles, UmbCustomStyles } from '../../common/styles';
import { ITEMS_PER_PAGE_OTPIONS, NAME_OF_COMMENTS_SERVICES } from '../../common/consts/enum';
import { umbConfirmModal } from '@umbraco-cms/backoffice/modal';
import { UserInfo } from '../../common/models/user-info.interface';
import { UMB_AUTH_CONTEXT } from '@umbraco-cms/backoffice/auth';
import { UMB_NOTIFICATION_CONTEXT, UmbNotificationContext } from '@umbraco-cms/backoffice/notification';
import { GtelPortalService } from '../../common/services/gtelPortal.service';

@customElement('cms-list-applicationinformation')
export default class ApplicationInformationListElement extends UmbElementMixin(LitElement) {
  //#region Property
  @state()
  private _items: Array<GetApplicationInformationForViewDto> = [];

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
  #searchInput: ApplicationInformationSearchInput = {
    skipCount: 0,
    maxResultCount: 10
  } as any;

  #itemsPerPageOptions = [...ITEMS_PER_PAGE_OTPIONS];
  #itemsPerPage = 10;
  #currentPage = 1;
  //#endregion

  //#region Constructor && LifeCycle
  #applicationInformationService!: ApplicationInformationService;
  #gtelPortalService!: GtelPortalService;

  #auth?: typeof UMB_AUTH_CONTEXT.TYPE;
  #notificationContext?: UmbNotificationContext;

  constructor() {
    super();
    this.#applicationInformationService = new ApplicationInformationService(NAME_OF_COMMENTS_SERVICES.APPLICATIONINFORMATION);
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
    if (!this._accessToken) return;
    const skipCount = this.#currentPage * this.#itemsPerPage - this.#itemsPerPage;
    const maxResultCount = this.#itemsPerPage;
    const response = await this.#applicationInformationService?.search({
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

  async #getAccessToken() {
    this._accessToken = await this.#auth?.getLatestToken();
  }

  async #getCurrentUser() {
    const accessToken = await this.#auth?.getLatestToken();
    if (accessToken) {
      const response = await this.#gtelPortalService.getCurrentUser(accessToken);
      if (response.ok) {
        this._currentUser = await response.json();
      } else {
        console.error('Not found');
      }
    }
  }
  //#endregion

  //#region OnChange Methods
  #selectHandler(event: Event, item: GetApplicationInformationForViewDto) {
    const checkboxElement = event.target as HTMLInputElement;
    this._selection = checkboxElement.checked
      ? [...this._selection, item.applicationInformation.id]
      : this._selection.filter(selectionKey => selectionKey !== item.applicationInformation.id);
  }

  #selectAllHandler(event: Event) {
    const checkboxElement = event.target as HTMLInputElement;
    this._selection = checkboxElement.checked
      ? this._items.map((item: GetApplicationInformationForViewDto) => item.applicationInformation.id)
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

  #view(item: any) {
    history.pushState({}, '', `section/comment/workspace/applicationinformation/view/${item.applicationInformation.id}`);
  }

  async #delete(id: number) {
    try {
      if (!this._accessToken) return;
      await umbConfirmModal(this, {
        color: 'danger',
        headline: `${this.localize.term('commentsPack_deleteCandidate')}?`,
        content: html`${this.localize.term('commentsPack_areYouSureDeleteThisCandidate')}`,
        confirmLabel: `${this.localize.term('commentsPack_yes')}`,
        cancelLabel: `${this.localize.term('commentsPack_no')}`
      });

      const response = await this.#applicationInformationService?.delete({
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
    catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  async #deletes() {
    try {
      if (!this._accessToken) return;
      await umbConfirmModal(this, {
        color: 'danger',
        headline: `${this.localize.term('commentsPack_deleteCandidate')}?`,
        content: html`${this.localize.term('commentsPack_areYouSureDeleteTheSelectedCandidates')}`,
        confirmLabel: `${this.localize.term('commentsPack_yes')}`,
        cancelLabel: `${this.localize.term('commentsPack_no')}`
      });

      const response = await this.#applicationInformationService?.deletes({
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
        <div class="sub-header-breadcrumb">${this.localize.term('commentsPack_applicationInformation')}</div>
      </div>
    `;
  }

  #renderPageActions() {
    return html`
        <div class="d-flex align-items-center">
          ${when(this._selection?.length > 0, () => html`
            <uui-button look="outline" color="danger" label="${this.localize.term('commentsPack_deleteSelectedCandidates')}"
              @click="${this.#deletes}">
              <div class="d-flex">
                <uui-icon name="icon-remove"></uui-icon>
                <span class="ms-1">${this.localize.term('commentsPack_deleteSelectedCandidates')}</span>
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
              <th>${this.localize.term('commentsPack_candidateInformation')}</th>
              <th>${this.localize.term('commentsPack_comment')}</th>
              <th>${this.localize.term('commentsPack_applyFor')}</th>
            </tr>
          </thead>
          <tbody class="datatable-tbody">
            ${this._items.map((item) => html`
              <tr>
                <td class="text-center">
                  <uui-checkbox
                    @click=${(e: MouseEvent) => e.stopPropagation()}
                    @change=${(event: Event) => this.#selectHandler(event, item)}
                    ?checked="${this.#isSelected(item.applicationInformation.id)}">
                  </uui-checkbox>
                </td>
                <td class="align-top">
                  <div>
                    <strong>${this.localize.term('commentsPack_fullname')}:</strong>
                    <a class="hover-link" href="javascript:;" title="${this.localize.term('commentsPack_clickToViewDetails')}"
                        @click="${() => this.#view(item)}">
                      <span>${item.applicationInformation.fullName}</span>
                    </a>
                  </div>
                  <div>
                    <strong>${this.localize.term('commentsPack_email')}:</strong>
                    <span>${item.applicationInformation.email}</span>
                  </div>
                  <div class="mt-1">                    
                    <button type="button" class="btn btn-outline btn-outline-danger btn-xs" 
                      title="${this.localize.term('commentsPack_clickToDeleteThisCandidate')}"
                      @click="${() => this.#delete(item.applicationInformation.id)}">
                      <span>${this.localize.term('commentsPack_delete')}</span>
                    </button>
                  </div>
                </td>
                <td class="align-top">
                    <span>${item.applicationInformation.message}</span>
                </td>
                <td class="align-top">
                  <div>
                    <strong>${this.localize.term('commentsPack_positionAvailable')}:</strong>
                    ${when(item.applicationInformation.jobPostingKey != null, () => html`
                      <a href="${item.jobPostingUrl ?? '#'}" target="_blank">${item.jobPostingTitle}</a>
                    `)}
                    ${when(item.applicationInformation.jobPostingKey == null, () => html`
                      <span>${this.localize.term('commentsPack_noSuitableJobFound')}</span>
                    `)}
                  </div>
                  <div>
                    <strong>${this.localize.term('commentsPack_informationFile')}:</strong>
                    ${when(item.applicationInformation.fileUrl != null, () => html`
                        <a href="${item.applicationInformation.fileUrl ?? '#'}" target="_blank" download title="${this.localize.term('commentsPack_download')}">
                          <uui-icon name="icon-download-alt"></uui-icon>
                        </a>
                    `)}
                    ${when(item.applicationInformation.fileType == '.docx' && item.applicationInformation.fileUrl != null, () => html`
                        <a href="${'https://view.officeapps.live.com/op/view.aspx?src=' + item.applicationInformation.fileUrl}" 
                          target="_blank" title="${this.localize.term('commentsPack_view')}">
                          <uui-icon name="icon-zoom-in"></uui-icon>
                        </a>
                    `)}
                    ${when(item.applicationInformation.fileType == '.pdf' && item.applicationInformation.fileUrl != null, () => html`
                        <a href="${item.applicationInformation.fileUrl ?? '#'}" target="_blank" title="${this.localize.term('commentsPack_view')}">
                          <uui-icon name="icon-zoom-in"></uui-icon>
                        </a>
                    `)}
                  </div>
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
    'cms-list-applicationinformation': ApplicationInformationListElement;
  }
}
