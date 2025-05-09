import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, when, nothing, state, query, customElement } from "@umbraco-cms/backoffice/external/lit";
import { NewsCommentService } from "../services/news-comment.service.js";
import { GtelPortalService } from "../../common/services/gtelPortal.service.js";
import { NAME_OF_COMMENTS_SERVICES, ITEMS_PER_PAGE_OTPIONS } from "../../common/consts/enum.js";
import { umbConfirmModal } from "@umbraco-cms/backoffice/modal";
import { UMB_NOTIFICATION_CONTEXT } from "@umbraco-cms/backoffice/notification";
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth";
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
var _searchInput, _itemsPerPageOptions, _itemsPerPage, _currentPage, _newsCommentService, _gtelPortalService, _auth, _notificationContext, _NewsCommentListElement_instances, getAll_fn, getAccessToken_fn, getCurrentUser_fn, selectHandler_fn, selectAllHandler_fn, isSelected_fn, onPageChanged_fn, onItemsPerPageChanged_fn, search_fn, approve_fn, reject_fn, view_fn, delete_fn, deletes_fn, renderPageTitle_fn, renderPageActions_fn, renderSearchForm_fn, renderDatatable_fn, refactorUuiPagination_fn;
class NewsCommentListElement extends UmbElementMixin(LitElement) {
  //#endregion
  //#region Constructor && LifeCycle
  constructor() {
    super();
    __privateAdd(this, _NewsCommentListElement_instances);
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
    __privateAdd(this, _newsCommentService);
    __privateAdd(this, _gtelPortalService);
    __privateAdd(this, _auth);
    __privateAdd(this, _notificationContext);
    __privateSet(this, _newsCommentService, new NewsCommentService(NAME_OF_COMMENTS_SERVICES.NEWSCOMMENT));
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
    await __privateMethod(this, _NewsCommentListElement_instances, getAccessToken_fn).call(this);
    await __privateMethod(this, _NewsCommentListElement_instances, getCurrentUser_fn).call(this);
    await __privateMethod(this, _NewsCommentListElement_instances, getAll_fn).call(this);
  }
  //#endregion
  //#region Lit Element
  render() {
    return html`
      <div id="sub-header">
        ${__privateMethod(this, _NewsCommentListElement_instances, renderPageTitle_fn).call(this)}
        ${__privateMethod(this, _NewsCommentListElement_instances, renderPageActions_fn).call(this)}
      </div>

      <div id="content-container">
        ${__privateMethod(this, _NewsCommentListElement_instances, renderSearchForm_fn).call(this)}
        ${__privateMethod(this, _NewsCommentListElement_instances, renderDatatable_fn).call(this)}
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
_newsCommentService = /* @__PURE__ */ new WeakMap();
_gtelPortalService = /* @__PURE__ */ new WeakMap();
_auth = /* @__PURE__ */ new WeakMap();
_notificationContext = /* @__PURE__ */ new WeakMap();
_NewsCommentListElement_instances = /* @__PURE__ */ new WeakSet();
getAll_fn = async function() {
  var _a;
  if (this._accessToken) {
    const skipCount = __privateGet(this, _currentPage) * __privateGet(this, _itemsPerPage) - __privateGet(this, _itemsPerPage);
    const maxResultCount = __privateGet(this, _itemsPerPage);
    const response = await ((_a = __privateGet(this, _newsCommentService)) == null ? void 0 : _a.search({
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
  }
};
getAccessToken_fn = async function() {
  var _a;
  this._accessToken = await ((_a = __privateGet(this, _auth)) == null ? void 0 : _a.getLatestToken());
};
getCurrentUser_fn = async function() {
  if (this._accessToken) {
    const response = await __privateGet(this, _gtelPortalService).getCurrentUser(this._accessToken);
    if (response.ok) {
      this._currentUser = await response.json();
    } else {
      console.error("Not found");
    }
  }
};
selectHandler_fn = function(event, item) {
  const checkboxElement = event.target;
  this._selection = checkboxElement.checked ? [...this._selection, item.newsComment.id] : this._selection.filter((selectionKey) => selectionKey !== item.newsComment.id);
};
selectAllHandler_fn = function(event) {
  const checkboxElement = event.target;
  this._selection = checkboxElement.checked ? this._items.map((item) => item.newsComment.id) : [];
};
isSelected_fn = function(id) {
  return this._selection.includes(id);
};
onPageChanged_fn = function(event) {
  __privateSet(this, _currentPage, event.target.current);
  __privateMethod(this, _NewsCommentListElement_instances, getAll_fn).call(this);
};
onItemsPerPageChanged_fn = function(event) {
  __privateSet(this, _itemsPerPage, event.target.value);
  __privateSet(this, _currentPage, 1);
  __privateMethod(this, _NewsCommentListElement_instances, getAll_fn).call(this);
};
search_fn = async function(e) {
  e.preventDefault();
  const formData = new FormData(this.searchForm);
  __privateGet(this, _searchInput).filter = formData.get("filter");
  __privateGet(this, _searchInput).sorting = "";
  __privateMethod(this, _NewsCommentListElement_instances, getAll_fn).call(this);
};
approve_fn = async function(id) {
  var _a, _b, _c;
  try {
    if (this._accessToken) {
      const response = await ((_a = __privateGet(this, _newsCommentService)) == null ? void 0 : _a.approve({
        id,
        currentUserName: this._currentUser.userName,
        currentUserId: this._currentUser.id
      }, this._accessToken));
      if (response.ok) {
        (_b = __privateGet(this, _notificationContext)) == null ? void 0 : _b.peek("positive", {
          data: { message: "Phê duyệt thành công!" }
        });
        await __privateMethod(this, _NewsCommentListElement_instances, getAll_fn).call(this);
      } else {
        console.log(`Error: ${response.statusText}`);
        (_c = __privateGet(this, _notificationContext)) == null ? void 0 : _c.peek("danger", {
          data: { message: "Phê duyệt xảy ra lỗi!" }
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
reject_fn = async function(id) {
  var _a, _b, _c;
  try {
    if (this._accessToken) {
      const response = await ((_a = __privateGet(this, _newsCommentService)) == null ? void 0 : _a.reject({
        id,
        currentUserName: this._currentUser.userName,
        currentUserId: this._currentUser.id
      }, this._accessToken));
      if (response.ok) {
        (_b = __privateGet(this, _notificationContext)) == null ? void 0 : _b.peek("positive", {
          data: { message: "Hủy, không phê duyệt thành công!" }
        });
        await __privateMethod(this, _NewsCommentListElement_instances, getAll_fn).call(this);
      } else {
        console.log(`Error: ${response.statusText}`);
        (_c = __privateGet(this, _notificationContext)) == null ? void 0 : _c.peek("danger", {
          data: { message: "Hủy, không phê duyệt xảy ra lỗi!" }
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
view_fn = function(item) {
  history.pushState({}, "", `section/comment/workspace/newscomment/view/${item.newsComment.id}`);
};
delete_fn = async function(id) {
  var _a, _b, _c;
  try {
    if (this._accessToken) {
      await umbConfirmModal(this, {
        color: "danger",
        headline: `${this.localize.term("commentsPack_deleteComment")}?`,
        content: html`${this.localize.term("commentsPack_areYouSureDeleteThisComment")}`,
        confirmLabel: `${this.localize.term("commentsPack_yes")}`,
        cancelLabel: `${this.localize.term("commentsPack_no")}`
      });
      const response = await ((_a = __privateGet(this, _newsCommentService)) == null ? void 0 : _a.delete({
        id,
        currentUserName: this._currentUser.userName,
        currentUserId: this._currentUser.id
      }, this._accessToken));
      if (response.ok) {
        (_b = __privateGet(this, _notificationContext)) == null ? void 0 : _b.peek("positive", {
          data: { message: `${this.localize.term("commentsPack_completedSuccessfully")}` }
        });
        await __privateMethod(this, _NewsCommentListElement_instances, getAll_fn).call(this);
      } else {
        console.log(`Error: ${response.statusText}`);
        (_c = __privateGet(this, _notificationContext)) == null ? void 0 : _c.peek("danger", {
          data: { message: `${this.localize.term("commentsPack_executionFailed")}` }
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
deletes_fn = async function() {
  var _a, _b, _c;
  try {
    if (this._accessToken) {
      await umbConfirmModal(this, {
        color: "danger",
        headline: `${this.localize.term("commentsPack_deleteComment")}?`,
        content: html`${this.localize.term("commentsPack_areYouSureDeleteTheSelectedComments")}`,
        confirmLabel: `${this.localize.term("commentsPack_yes")}`,
        cancelLabel: `${this.localize.term("commentsPack_no")}`
      });
      const response = await ((_a = __privateGet(this, _newsCommentService)) == null ? void 0 : _a.deletes({
        ids: this._selection,
        deleterUserId: this._currentUser.id,
        deleterUserName: this._currentUser.userName
      }, this._accessToken));
      if (response.ok) {
        (_b = __privateGet(this, _notificationContext)) == null ? void 0 : _b.peek("positive", {
          data: { message: `${this.localize.term("commentsPack_completedSuccessfully")}` }
        });
        await __privateMethod(this, _NewsCommentListElement_instances, getAll_fn).call(this);
      } else {
        console.log(`Error: ${response.statusText}`);
        (_c = __privateGet(this, _notificationContext)) == null ? void 0 : _c.peek("danger", {
          data: { message: `${this.localize.term("commentsPack_executionFailed")}` }
        });
      }
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
        <div class="sub-header-breadcrumb">${this.localize.term("commentsPack_articleComments")}</div>
      </div>
    `;
};
renderPageActions_fn = function() {
  var _a;
  return html`
      <div class="d-flex align-items-center">
        ${when(((_a = this._selection) == null ? void 0 : _a.length) > 0, () => html`
          <uui-button look="outline" color="danger" label="${this.localize.term("commentsPack_deleteSelectedComments")}"
            @click="${__privateMethod(this, _NewsCommentListElement_instances, deletes_fn)}">
            <div class="d-flex">
              <uui-icon name="icon-remove"></uui-icon>
              <span class="ms-1">${this.localize.term("commentsPack_deleteSelectedComments")}</span>
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
            <button type="submit" class="btn btn-primary" @click="${__privateMethod(this, _NewsCommentListElement_instances, search_fn)}">
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
                    @change="${__privateMethod(this, _NewsCommentListElement_instances, selectAllHandler_fn)}"
                    ?checked="${this._selection.length === this._items.length}">
                  </uui-checkbox>
                `)}
              </th>
              <th>${this.localize.term("commentsPack_comment")}</th>
              <th>${this.localize.term("commentsPack_commenterInformation")}</th>
              <th>${this.localize.term("commentsPack_article")}</th>
            </tr>
          </thead>
          <tbody class="datatable-tbody">
            ${this._items.map((item) => html`
              <tr>
                <td class="text-center">
                  <uui-checkbox
                    @click=${(e) => e.stopPropagation()}
                    @change=${(event) => __privateMethod(this, _NewsCommentListElement_instances, selectHandler_fn).call(this, event, item)}
                    ?checked="${__privateMethod(this, _NewsCommentListElement_instances, isSelected_fn).call(this, item.newsComment.id)}">
                  </uui-checkbox>
                </td>
                <td class="align-top">
                  <div>
                    <strong>${this.localize.term("commentsPack_comment")}:</strong>
                    <span>${item.newsComment.message}</span>
                  </div>
                  <div>
                    <strong>${this.localize.term("commentsPack_status")}:</strong>
                    ${when(item.newsComment.isApproved, () => html`
                      <uui-tag color="positive" class="ms-1">
                        ${this.localize.term("commentsPack_approved")}
                      </uui-tag>
                    `)}
                    ${when(!item.newsComment.isApproved, () => html`
                      <uui-tag color="danger" class="ms-1">                          
                        ${this.localize.term("commentsPack_notApproved")}
                      </uui-tag>
                    `)}
                  </div>
                  <div class="mt-1">
                    ${when(item.newsComment.isApproved, () => html`
                        <button type="button" class="btn btn-outline btn-outline-warning btn-xs" 
                          title="${this.localize.term("commentsPack_clickToRejectThisComment")}"
                          @click="${() => __privateMethod(this, _NewsCommentListElement_instances, reject_fn).call(this, item.newsComment.id)}">
                          <span>${this.localize.term("commentsPack_notApprove")}</span>
                        </button>
                    `)}
                    ${when(!item.newsComment.isApproved, () => html`
                        <button type="button" class="btn btn-outline btn-outline-info btn-xs" 
                          title="${this.localize.term("commentsPack_clickToApproveThisComment")}"
                          @click="${() => __privateMethod(this, _NewsCommentListElement_instances, approve_fn).call(this, item.newsComment.id)}">
                          <span>${this.localize.term("commentsPack_approve")}</span>
                        </button>
                    `)}
                    <button type="button" class="btn btn-outline btn-outline-danger btn-xs" 
                      title="${this.localize.term("commentsPack_clickToDeleteThisComment")}"
                      @click="${() => __privateMethod(this, _NewsCommentListElement_instances, delete_fn).call(this, item.newsComment.id)}">
                      <span>${this.localize.term("commentsPack_delete")}</span>
                    </button>
                  </div>
                </td>
                <td class="align-top">
                  <div>
                    <strong>${this.localize.term("commentsPack_name")}:</strong>
                    <a class="hover-link" href="javascript:;" title="${this.localize.term("commentsPack_clickToViewDetails")}"
                      @click="${() => __privateMethod(this, _NewsCommentListElement_instances, view_fn).call(this, item)}">
                      <span>${item.newsComment.name}</span>
                    </a>
                  </div>
                  <div>
                    <strong>${this.localize.term("commentsPack_email")}:</strong>
                    <span>${item.newsComment.email}</span>
                  </div>
                </td>
                <td class="align-top">
                    <a href="${item.newsUrl ?? "#"}" target="_blank">${item.newsTitle}</a>
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
              @change=${__privateMethod(this, _NewsCommentListElement_instances, onPageChanged_fn)}>
            </uui-pagination>
            ${__privateMethod(this, _NewsCommentListElement_instances, refactorUuiPagination_fn).call(this)}
            <uui-select label="itemsPerPage" @change=${__privateMethod(this, _NewsCommentListElement_instances, onItemsPerPageChanged_fn)} .options=${__privateGet(this, _itemsPerPageOptions)} class="ms-4">
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
NewsCommentListElement.styles = [
  ...CmsThemeStyles,
  UmbCustomStyles,
  CommonStyles,
  ListStyles
];
__decorateClass([
  state()
], NewsCommentListElement.prototype, "_items", 2);
__decorateClass([
  state()
], NewsCommentListElement.prototype, "_total", 2);
__decorateClass([
  state()
], NewsCommentListElement.prototype, "_selection", 2);
__decorateClass([
  state()
], NewsCommentListElement.prototype, "_currentUser", 2);
__decorateClass([
  state()
], NewsCommentListElement.prototype, "_accessToken", 2);
__decorateClass([
  query("#searchForm")
], NewsCommentListElement.prototype, "searchForm", 2);
__decorateClass([
  query("#paginator")
], NewsCommentListElement.prototype, "paginator", 2);
NewsCommentListElement = __decorateClass([
  customElement("cms-list-newscomment")
], NewsCommentListElement);
export {
  NewsCommentListElement as default
};
//# sourceMappingURL=news-comment-list.element.js.map
