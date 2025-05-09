import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, when, nothing, state, query, customElement } from "@umbraco-cms/backoffice/external/lit";
import { ApplicationInformationService } from "../services/application-information.service.js";
import { NAME_OF_COMMENTS_SERVICES, ITEMS_PER_PAGE_OTPIONS } from "../../common/consts/enum.js";
import { umbConfirmModal } from "@umbraco-cms/backoffice/modal";
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth";
import { UMB_NOTIFICATION_CONTEXT } from "@umbraco-cms/backoffice/notification";
import { GtelPortalService } from "../../common/services/gtelPortal.service.js";
import { CmsThemeStyles } from "../../common/styles/cms-theme.style.js";
import { UmbCustomStyles } from "../../common/styles/umb-custom.style.js";
import { CommonStyles } from "../../common/styles/common.style.js";
import { ListStyles } from "../../common/styles/list.style.js";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _searchInput, _itemsPerPageOptions, _itemsPerPage, _currentPage, _applicationInformationService, _gtelPortalService, _auth, _notificationContext, _ApplicationInformationListElement_instances, getAll_fn, getAccessToken_fn, getCurrentUser_fn, selectHandler_fn, selectAllHandler_fn, isSelected_fn, onPageChanged_fn, onItemsPerPageChanged_fn, search_fn, view_fn, delete_fn, deletes_fn, renderPageTitle_fn, renderPageActions_fn, renderSearchForm_fn, renderDatatable_fn, refactorUuiPagination_fn;
class ApplicationInformationListElement extends UmbElementMixin(LitElement) {
  constructor() {
    super();
    __privateAdd(this, _ApplicationInformationListElement_instances);
    this._items = [];
    this._total = 0;
    this._selection = [];
    this._currentUser = {
      id: 0,
      name: "",
      userName: ""
    };
    this._accessToken = "";
    __privateAdd(this, _searchInput, {
      skipCount: 0,
      maxResultCount: 10
    });
    __privateAdd(this, _itemsPerPageOptions, [...ITEMS_PER_PAGE_OTPIONS]);
    __privateAdd(this, _itemsPerPage, 10);
    __privateAdd(this, _currentPage, 1);
    __privateAdd(this, _applicationInformationService);
    __privateAdd(this, _gtelPortalService);
    __privateAdd(this, _auth);
    __privateAdd(this, _notificationContext);
    __privateSet(this, _applicationInformationService, new ApplicationInformationService(NAME_OF_COMMENTS_SERVICES.APPLICATIONINFORMATION));
    __privateSet(this, _gtelPortalService, new GtelPortalService());
    this.consumeContext(UMB_AUTH_CONTEXT, (instance) => {
      __privateSet(this, _auth, instance);
    });
    this.consumeContext(UMB_NOTIFICATION_CONTEXT, (_instance) => {
      __privateSet(this, _notificationContext, _instance);
    });
  }
  async connectedCallback() {
    super.connectedCallback();
    await __privateMethod(this, _ApplicationInformationListElement_instances, getAccessToken_fn).call(this);
    await __privateMethod(this, _ApplicationInformationListElement_instances, getCurrentUser_fn).call(this);
    await __privateMethod(this, _ApplicationInformationListElement_instances, getAll_fn).call(this);
  }
  //#endregion
  //#region Lit Element
  render() {
    return html`
      <div id="sub-header">
        ${__privateMethod(this, _ApplicationInformationListElement_instances, renderPageTitle_fn).call(this)}
        ${__privateMethod(this, _ApplicationInformationListElement_instances, renderPageActions_fn).call(this)}
      </div>

      <div id="content-container">
        ${__privateMethod(this, _ApplicationInformationListElement_instances, renderSearchForm_fn).call(this)}
        ${__privateMethod(this, _ApplicationInformationListElement_instances, renderDatatable_fn).call(this)}
      </div>
    `;
  }
  //#endregion
}
;
_searchInput = /* @__PURE__ */ new WeakMap();
_itemsPerPageOptions = /* @__PURE__ */ new WeakMap();
_itemsPerPage = /* @__PURE__ */ new WeakMap();
_currentPage = /* @__PURE__ */ new WeakMap();
_applicationInformationService = /* @__PURE__ */ new WeakMap();
_gtelPortalService = /* @__PURE__ */ new WeakMap();
_auth = /* @__PURE__ */ new WeakMap();
_notificationContext = /* @__PURE__ */ new WeakMap();
_ApplicationInformationListElement_instances = /* @__PURE__ */ new WeakSet();
getAll_fn = async function() {
  var _a;
  if (!this._accessToken) return;
  const skipCount = __privateGet(this, _currentPage) * __privateGet(this, _itemsPerPage) - __privateGet(this, _itemsPerPage);
  const maxResultCount = __privateGet(this, _itemsPerPage);
  const response = await ((_a = __privateGet(this, _applicationInformationService)) == null ? void 0 : _a.search({
    ...__privateGet(this, _searchInput),
    skipCount,
    maxResultCount
  }, this._accessToken));
  if (response.ok) {
    const data = await response.json();
    this._items = data.items;
    this._total = data.totalCount;
  } else {
    console.error("HTTP Error:", response.status);
  }
};
getAccessToken_fn = async function() {
  var _a;
  this._accessToken = await ((_a = __privateGet(this, _auth)) == null ? void 0 : _a.getLatestToken());
};
getCurrentUser_fn = async function() {
  var _a;
  const accessToken = await ((_a = __privateGet(this, _auth)) == null ? void 0 : _a.getLatestToken());
  if (accessToken) {
    const response = await __privateGet(this, _gtelPortalService).getCurrentUser(accessToken);
    if (response.ok) {
      this._currentUser = await response.json();
    } else {
      console.error("Not found");
    }
  }
};
selectHandler_fn = function(event, item) {
  const checkboxElement = event.target;
  this._selection = checkboxElement.checked ? [...this._selection, item.applicationInformation.id] : this._selection.filter((selectionKey) => selectionKey !== item.applicationInformation.id);
};
selectAllHandler_fn = function(event) {
  const checkboxElement = event.target;
  this._selection = checkboxElement.checked ? this._items.map((item) => item.applicationInformation.id) : [];
};
isSelected_fn = function(id) {
  return this._selection.includes(id);
};
onPageChanged_fn = function(event) {
  __privateSet(this, _currentPage, event.target.current);
  __privateMethod(this, _ApplicationInformationListElement_instances, getAll_fn).call(this);
};
onItemsPerPageChanged_fn = function(event) {
  __privateSet(this, _itemsPerPage, event.target.value);
  __privateSet(this, _currentPage, 1);
  __privateMethod(this, _ApplicationInformationListElement_instances, getAll_fn).call(this);
};
search_fn = async function(e) {
  e.preventDefault();
  const formData = new FormData(this.searchForm);
  __privateGet(this, _searchInput).filter = formData.get("filter");
  __privateGet(this, _searchInput).sorting = "";
  __privateMethod(this, _ApplicationInformationListElement_instances, getAll_fn).call(this);
};
view_fn = function(item) {
  history.pushState({}, "", `section/comment/workspace/applicationinformation/view/${item.applicationInformation.id}`);
};
delete_fn = async function(id) {
  var _a, _b, _c;
  try {
    if (!this._accessToken) return;
    await umbConfirmModal(this, {
      color: "danger",
      headline: `${this.localize.term("commentsPack_deleteCandidate")}?`,
      content: html`${this.localize.term("commentsPack_areYouSureDeleteThisCandidate")}`,
      confirmLabel: `${this.localize.term("commentsPack_yes")}`,
      cancelLabel: `${this.localize.term("commentsPack_no")}`
    });
    const response = await ((_a = __privateGet(this, _applicationInformationService)) == null ? void 0 : _a.delete({
      id,
      currentUserName: this._currentUser.userName,
      currentUserId: this._currentUser.id
    }, this._accessToken));
    if (response.ok) {
      (_b = __privateGet(this, _notificationContext)) == null ? void 0 : _b.peek("positive", {
        data: { message: `${this.localize.term("commentsPack_completedSuccessfully")}` }
      });
      await __privateMethod(this, _ApplicationInformationListElement_instances, getAll_fn).call(this);
    } else {
      console.log(`Error: ${response.statusText}`);
      (_c = __privateGet(this, _notificationContext)) == null ? void 0 : _c.peek("danger", {
        data: { message: `${this.localize.term("commentsPack_executionFailed")}` }
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
deletes_fn = async function() {
  var _a, _b, _c;
  try {
    if (!this._accessToken) return;
    await umbConfirmModal(this, {
      color: "danger",
      headline: `${this.localize.term("commentsPack_deleteCandidate")}?`,
      content: html`${this.localize.term("commentsPack_areYouSureDeleteTheSelectedCandidates")}`,
      confirmLabel: `${this.localize.term("commentsPack_yes")}`,
      cancelLabel: `${this.localize.term("commentsPack_no")}`
    });
    const response = await ((_a = __privateGet(this, _applicationInformationService)) == null ? void 0 : _a.deletes({
      ids: this._selection,
      deleterUserId: this._currentUser.id,
      deleterUserName: this._currentUser.userName
    }, this._accessToken));
    if (response.ok) {
      (_b = __privateGet(this, _notificationContext)) == null ? void 0 : _b.peek("positive", {
        data: { message: `${this.localize.term("commentsPack_completedSuccessfully")}` }
      });
      await __privateMethod(this, _ApplicationInformationListElement_instances, getAll_fn).call(this);
    } else {
      console.log(`Error: ${response.statusText}`);
      (_c = __privateGet(this, _notificationContext)) == null ? void 0 : _c.peek("danger", {
        data: { message: `${this.localize.term("commentsPack_executionFailed")}` }
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
renderPageTitle_fn = function() {
  return html`
      <div class="d-flex align-items-center">
        <h3 class="sub-header-title">${this.localize.term("commentsPack_information")}</h3>
        <div class="sub-header-separator"></div>
        <div class="sub-header-breadcrumb">${this.localize.term("commentsPack_applicationInformation")}</div>
      </div>
    `;
};
renderPageActions_fn = function() {
  var _a;
  return html`
        <div class="d-flex align-items-center">
          ${when(((_a = this._selection) == null ? void 0 : _a.length) > 0, () => html`
            <uui-button look="outline" color="danger" label="${this.localize.term("commentsPack_deleteSelectedCandidates")}"
              @click="${__privateMethod(this, _ApplicationInformationListElement_instances, deletes_fn)}">
              <div class="d-flex">
                <uui-icon name="icon-remove"></uui-icon>
                <span class="ms-1">${this.localize.term("commentsPack_deleteSelectedCandidates")}</span>
              </div>
            </uui-button>
          `)}
        </div>
      `;
};
renderSearchForm_fn = function() {
  return html`
      <form id="searchForm" name="searchForm">
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" name="filter" />
            <button type="submit" class="btn btn-primary" @click="${__privateMethod(this, _ApplicationInformationListElement_instances, search_fn)}">
              <uui-icon name="search" class="pe-0"></uui-icon>
            </button>
          </div>
      </form>
    `;
};
renderDatatable_fn = function() {
  var _a, _b;
  return html`
      <div class="mt-4">
        <table class="datatable datatable-gridlines">
          <thead class="datatable-thead">
            <tr>
              <th class="text-center" style="width: 3em">
                ${when(((_a = this._items) == null ? void 0 : _a.length) > 0, () => html`
                  <uui-checkbox
                    @change="${__privateMethod(this, _ApplicationInformationListElement_instances, selectAllHandler_fn)}"
                    ?checked="${this._selection.length === this._items.length}">
                  </uui-checkbox>
                `)}
              </th>
              <th>${this.localize.term("commentsPack_candidateInformation")}</th>
              <th>${this.localize.term("commentsPack_comment")}</th>
              <th>${this.localize.term("commentsPack_applyFor")}</th>
            </tr>
          </thead>
          <tbody class="datatable-tbody">
            ${this._items.map((item) => html`
              <tr>
                <td class="text-center">
                  <uui-checkbox
                    @click=${(e) => e.stopPropagation()}
                    @change=${(event) => __privateMethod(this, _ApplicationInformationListElement_instances, selectHandler_fn).call(this, event, item)}
                    ?checked="${__privateMethod(this, _ApplicationInformationListElement_instances, isSelected_fn).call(this, item.applicationInformation.id)}">
                  </uui-checkbox>
                </td>
                <td class="align-top">
                  <div>
                    <strong>${this.localize.term("commentsPack_fullname")}:</strong>
                    <a class="hover-link" href="javascript:;" title="${this.localize.term("commentsPack_clickToViewDetails")}"
                        @click="${() => __privateMethod(this, _ApplicationInformationListElement_instances, view_fn).call(this, item)}">
                      <span>${item.applicationInformation.fullName}</span>
                    </a>
                  </div>
                  <div>
                    <strong>${this.localize.term("commentsPack_email")}:</strong>
                    <span>${item.applicationInformation.email}</span>
                  </div>
                  <div class="mt-1">                    
                    <button type="button" class="btn btn-outline btn-outline-danger btn-xs" 
                      title="${this.localize.term("commentsPack_clickToDeleteThisCandidate")}"
                      @click="${() => __privateMethod(this, _ApplicationInformationListElement_instances, delete_fn).call(this, item.applicationInformation.id)}">
                      <span>${this.localize.term("commentsPack_delete")}</span>
                    </button>
                  </div>
                </td>
                <td class="align-top">
                    <span>${item.applicationInformation.message}</span>
                </td>
                <td class="align-top">
                  <div>
                    <strong>${this.localize.term("commentsPack_positionAvailable")}:</strong>
                    ${when(item.applicationInformation.jobPostingKey != null, () => html`
                      <a href="${item.jobPostingUrl ?? "#"}" target="_blank">${item.jobPostingTitle}</a>
                    `)}
                    ${when(item.applicationInformation.jobPostingKey == null, () => html`
                      <span>${this.localize.term("commentsPack_noSuitableJobFound")}</span>
                    `)}
                  </div>
                  <div>
                    <strong>${this.localize.term("commentsPack_informationFile")}:</strong>
                    ${when(item.applicationInformation.fileUrl != null, () => html`
                        <a href="${item.applicationInformation.fileUrl ?? "#"}" target="_blank" download title="${this.localize.term("commentsPack_download")}">
                          <uui-icon name="icon-download-alt"></uui-icon>
                        </a>
                    `)}
                    ${when(item.applicationInformation.fileType == ".docx" && item.applicationInformation.fileUrl != null, () => html`
                        <a href="${"https://view.officeapps.live.com/op/view.aspx?src=" + item.applicationInformation.fileUrl}" 
                          target="_blank" title="${this.localize.term("commentsPack_view")}">
                          <uui-icon name="icon-zoom-in"></uui-icon>
                        </a>
                    `)}
                    ${when(item.applicationInformation.fileType == ".pdf" && item.applicationInformation.fileUrl != null, () => html`
                        <a href="${item.applicationInformation.fileUrl ?? "#"}" target="_blank" title="${this.localize.term("commentsPack_view")}">
                          <uui-icon name="icon-zoom-in"></uui-icon>
                        </a>
                    `)}
                  </div>
                </td>
              </tr>
            `)}
          </tbody>
        </table>

        ${when(!((_b = this._items) == null ? void 0 : _b.length), () => html`
          <div class="text-center my-2">${this.localize.term("commentsPack_noData")}</div>
        `)}

        <div class="paginator">
          <div class="total-records">${this.localize.term("commentsPack_total")}: ${this._total}</div>
          <div class="d-flex">
            <uui-pagination
              id="paginator"
              .current=${__privateGet(this, _currentPage)}
              .total=${Math.ceil(this._total / __privateGet(this, _itemsPerPage))}
              @change=${__privateMethod(this, _ApplicationInformationListElement_instances, onPageChanged_fn)}>
            </uui-pagination>
            ${__privateMethod(this, _ApplicationInformationListElement_instances, refactorUuiPagination_fn).call(this)}
            <uui-select label="itemsPerPage" @change=${__privateMethod(this, _ApplicationInformationListElement_instances, onItemsPerPageChanged_fn)} .options=${__privateGet(this, _itemsPerPageOptions)} class="ms-4">
            </uui-select>
          </div>
        </div>
      </div>
    `;
};
refactorUuiPagination_fn = function() {
  setTimeout(() => {
    this.paginator["renderFirst"] = () => {
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
    this.paginator["renderPrevious"] = () => {
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
    this.paginator["renderNext"] = () => {
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
    this.paginator["renderLast"] = () => {
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
};
ApplicationInformationListElement.styles = [
  ...CmsThemeStyles,
  UmbCustomStyles,
  CommonStyles,
  ListStyles
];
__decorateClass([
  state()
], ApplicationInformationListElement.prototype, "_items", 2);
__decorateClass([
  state()
], ApplicationInformationListElement.prototype, "_total", 2);
__decorateClass([
  state()
], ApplicationInformationListElement.prototype, "_selection", 2);
__decorateClass([
  state()
], ApplicationInformationListElement.prototype, "_currentUser", 2);
__decorateClass([
  state()
], ApplicationInformationListElement.prototype, "_accessToken", 2);
__decorateClass([
  query("#searchForm")
], ApplicationInformationListElement.prototype, "searchForm", 2);
__decorateClass([
  query("#paginator")
], ApplicationInformationListElement.prototype, "paginator", 2);
ApplicationInformationListElement = __decorateClass([
  customElement("cms-list-applicationinformation")
], ApplicationInformationListElement);
export {
  ApplicationInformationListElement as default
};
//# sourceMappingURL=application-information-list.element.js.map
