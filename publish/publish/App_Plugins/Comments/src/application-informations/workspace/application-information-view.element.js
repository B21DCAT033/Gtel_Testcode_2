import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, nothing, when, state, customElement } from "@umbraco-cms/backoffice/external/lit";
import { CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION } from "./application-information-workspace.context-token.js";
import { CmsThemeStyles } from "../../common/styles/cms-theme.style.js";
import { UmbCustomStyles } from "../../common/styles/umb-custom.style.js";
import { CommonStyles } from "../../common/styles/common.style.js";
import { ViewStyles } from "../../common/styles/view.style.js";
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
var _workspaceContext, _ApplicationInformationViewElement_instances, observeApplicationInformation_fn, initData_fn, renderPageTitle_fn, renderPageActions_fn, renderContent_fn;
class ApplicationInformationViewElement extends UmbElementMixin(LitElement) {
  constructor() {
    super();
    __privateAdd(this, _ApplicationInformationViewElement_instances);
    this.breadcrumbs = [
      { text: `${this.localize.term("commentsPack_applicationInformation")}`, link: "/umbraco/section/comment/workspace/applicationinformation/list" },
      { text: `${this.localize.term("commentsPack_detail")}` }
    ];
    __privateAdd(this, _workspaceContext);
    this.consumeContext(CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION, (instance) => {
      __privateSet(this, _workspaceContext, instance);
      __privateMethod(this, _ApplicationInformationViewElement_instances, observeApplicationInformation_fn).call(this);
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
        ${__privateMethod(this, _ApplicationInformationViewElement_instances, renderPageTitle_fn).call(this)}
        ${__privateMethod(this, _ApplicationInformationViewElement_instances, renderPageActions_fn).call(this)}
      </div>

      <div id="content-container">
        ${__privateMethod(this, _ApplicationInformationViewElement_instances, renderContent_fn).call(this)}
      </div>
    `;
  }
  //#endregion
}
;
_workspaceContext = /* @__PURE__ */ new WeakMap();
_ApplicationInformationViewElement_instances = /* @__PURE__ */ new WeakSet();
observeApplicationInformation_fn = function() {
  if (!__privateGet(this, _workspaceContext)) return;
  this.observe(__privateGet(this, _workspaceContext).data, (value) => __privateMethod(this, _ApplicationInformationViewElement_instances, initData_fn).call(this, value), "_observeData");
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
        <uui-button look="outline" color="warning" href="/umbraco/section/comment/workspace/applicationinformation/list" 
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
  var _a, _b, _c;
  if (!((_a = this.data) == null ? void 0 : _a.applicationInformation.id)) {
    return nothing;
  }
  return html`
      <div class="detail-form">
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
            <span>${this.localize.term("commentsPack_applyFor")}</span>
          </div>
          <div class="col-12 col-md-10 value">
            <span>
                ${when(((_b = this.data) == null ? void 0 : _b.applicationInformation.jobPostingKey) != null, () => {
    var _a2, _b2;
    return html`                  
                    <a href="${((_a2 = this.data) == null ? void 0 : _a2.jobPostingUrl) ?? "#"}" target="_blank">
                        <h3>${(_b2 = this.data) == null ? void 0 : _b2.jobPostingTitle}</h3>
                    </a>
                `;
  })}
                ${when(((_c = this.data) == null ? void 0 : _c.applicationInformation.jobPostingKey) == null, () => html`
                    <h3>Chưa tìm thấy việc phù hợp!</h3>
                `)}
            </span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term("commentsPack_fullname")}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.applicationInformation.fullName}</span>
          </div>
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term("commentsPack_email")}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.applicationInformation.email}</span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term("commentsPack_telephone")}</span>
          </div>
          <div class="col-12 col-md-4 value">
              <span class="text-break">${this.data.applicationInformation.telephone}</span>
          </div>
          <div class="col-12 col-md-2 key">
              <span>${this.localize.term("commentsPack_informationFile")}</span>
          </div>
          <div class="col-12 col-md-4 value">
            <span>
                ${when(this.data.applicationInformation.fileUrl != null, () => {
    var _a2;
    return html`
                    <a href="${((_a2 = this.data) == null ? void 0 : _a2.applicationInformation.fileUrl) ?? "#"}" target="_blank" download title="Tải xuống">
                        <uui-icon name="icon-download-alt" class="pe-3"></uui-icon>
                    </a>
                `;
  })}
                ${when(this.data.applicationInformation.fileType == ".docx" && this.data.applicationInformation.fileUrl != null, () => {
    var _a2;
    return html`
                    <a href="${"https://view.officeapps.live.com/op/view.aspx?src=" + ((_a2 = this.data) == null ? void 0 : _a2.applicationInformation.fileUrl)}" 
                        target="_blank" title="Xem file">
                        <uui-icon name="icon-zoom-in"></uui-icon>
                    </a>
                `;
  })}
                ${when(this.data.applicationInformation.fileType == ".pdf" && this.data.applicationInformation.fileUrl != null, () => {
    var _a2;
    return html`
                    <a href="${((_a2 = this.data) == null ? void 0 : _a2.applicationInformation.fileUrl) ?? "#"}" target="_blank" title="Xem file">
                        <uui-icon name="icon-zoom-in"></uui-icon>
                    </a>
                `;
  })}
                </span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-2 key">
            <span>${this.localize.term("commentsPack_comment")}</span>
          </div>
          <div class="col-12 col-md-10 value">
            <span class="text-break">${this.data.applicationInformation.message}</span>
          </div>
        </div>
      </div>
    `;
};
ApplicationInformationViewElement.styles = [
  ...CmsThemeStyles,
  UmbCustomStyles,
  CommonStyles,
  ViewStyles
];
__decorateClass([
  state()
], ApplicationInformationViewElement.prototype, "data", 2);
ApplicationInformationViewElement = __decorateClass([
  customElement("cms-view-applicationinformation")
], ApplicationInformationViewElement);
export {
  ApplicationInformationViewElement as default
};
//# sourceMappingURL=application-information-view.element.js.map
