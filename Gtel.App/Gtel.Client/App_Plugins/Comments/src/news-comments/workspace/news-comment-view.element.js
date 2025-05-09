import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, nothing, state, customElement } from "@umbraco-cms/backoffice/external/lit";
import { CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT } from "./news-comment-workspace.context-token.js";
import { ViewStyles } from "../../common/styles/view.style.js";
import { CmsThemeStyles } from "../../common/styles/cms-theme.style.js";
import { UmbCustomStyles } from "../../common/styles/umb-custom.style.js";
import { CommonStyles } from "../../common/styles/common.style.js";
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
var _workspaceContext, _NewsCommentViewElement_instances, observeNewsComment_fn, initData_fn, renderPageTitle_fn, renderPageActions_fn, renderContent_fn;
class NewsCommentViewElement extends UmbElementMixin(LitElement) {
  constructor() {
    super();
    __privateAdd(this, _NewsCommentViewElement_instances);
    this.breadcrumbs = [
      { text: `${this.localize.term("commentsPack_articleComments")}`, link: "/umbraco/section/comment/workspace/newscomment/list" },
      { text: `${this.localize.term("commentsPack_detail")}` }
    ];
    __privateAdd(this, _workspaceContext);
    this.consumeContext(CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT, (instance) => {
      __privateSet(this, _workspaceContext, instance);
      __privateMethod(this, _NewsCommentViewElement_instances, observeNewsComment_fn).call(this);
    });
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
        ${__privateMethod(this, _NewsCommentViewElement_instances, renderPageTitle_fn).call(this)}
        ${__privateMethod(this, _NewsCommentViewElement_instances, renderPageActions_fn).call(this)}
      </div>

      <div id="content-container">
        ${__privateMethod(this, _NewsCommentViewElement_instances, renderContent_fn).call(this)}
      </div>
    `;
  }
  //#endregion
}
;
_workspaceContext = /* @__PURE__ */ new WeakMap();
_NewsCommentViewElement_instances = /* @__PURE__ */ new WeakSet();
observeNewsComment_fn = function() {
  if (!__privateGet(this, _workspaceContext)) return;
  this.observe(__privateGet(this, _workspaceContext).data, (value) => __privateMethod(this, _NewsCommentViewElement_instances, initData_fn).call(this, value), "_observeData");
};
initData_fn = function(value) {
  this.data = value;
};
renderPageTitle_fn = function() {
  return html`
      <div class="d-flex align-items-center">
        <h3 class="sub-header-title">${this.localize.term("commentsPack_information")}</h3>
        <div class="sub-header-separator"></div>
        <ul class="sub-header-breadcrumb">
          ${this.breadcrumbs.map(
    (item) => item.link ? html`
              <li class="breadcrumb-item">
                <a href=${item.link}>${item.text}</a>
              </li>
            ` : html`
              <li class="breadcrumb-item">
                <span>${item.text}</span>
              </li>
            `
  )}
        </ul>
      </div>
    `;
};
renderPageActions_fn = function() {
  return html`
      <div class="d-flex align-items-center">
        <uui-button look="outline" color="warning" href="/umbraco/section/comment/workspace/newscomment/list" 
            label="${this.localize.term("commentsPack_back")}">
          <div class="d-flex">
            <uui-icon name="icon-navigation-first"></uui-icon>
            <span class="ms-1">${this.localize.term("commentsPack_back")}</span>
          </div>
        </uui-button>
      </div>
    `;
};
renderContent_fn = function() {
  var _a;
  if (!((_a = this.data) == null ? void 0 : _a.newsComment.id)) {
    return nothing;
  }
  return html`
      <div class="detail-form">
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
            <span>${this.localize.term("commentsPack_article")}</span>
          </div>
          <div class="col-12 col-md-10 value">
            <span>
                <a href="${this.data.newsUrl ?? "#"}" target="_blank">
                    <h3>${this.data.newsTitle}</h3>
                </a>
            </span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term("commentsPack_name")}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.newsComment.name}</span>
          </div>
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term("commentsPack_email")}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.newsComment.email}</span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
            <span>${this.localize.term("commentsPack_comment")}</span>
          </div>
          <div class="col-12 col-md-10 value">
            <span class="text-break">${this.data.newsComment.message}</span>
          </div>
        </div>
      </div>
    `;
};
NewsCommentViewElement.styles = [
  ...CmsThemeStyles,
  UmbCustomStyles,
  CommonStyles,
  ViewStyles
];
__decorateClass([
  state()
], NewsCommentViewElement.prototype, "data", 2);
NewsCommentViewElement = __decorateClass([
  customElement("cms-view-newscomment")
], NewsCommentViewElement);
export {
  NewsCommentViewElement as default
};
//# sourceMappingURL=news-comment-view.element.js.map
