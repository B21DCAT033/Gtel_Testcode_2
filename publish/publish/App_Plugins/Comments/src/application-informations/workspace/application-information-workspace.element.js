import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, customElement } from "@umbraco-cms/backoffice/external/lit";
import { CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION } from "./application-information-workspace.context-token.js";
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _workspaceContext;
class ApplicationInformationWorkspaceElement extends UmbElementMixin(LitElement) {
  constructor() {
    super();
    this._routes = [
      {
        path: "list",
        component: () => import("./application-information-list.element.js"),
        setup: (_component, _info) => {
        }
      },
      {
        path: "view/:id",
        component: () => import("./application-information-view.element.js"),
        setup: (_component, info) => {
          var _a;
          (_a = __privateGet(this, _workspaceContext)) == null ? void 0 : _a.load(info.match.params.id);
        }
      },
      {
        path: "",
        redirectTo: "list"
      },
      {
        path: `**`,
        component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
      }
    ];
    __privateAdd(this, _workspaceContext);
    this.consumeContext(CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION, (instance) => {
      __privateSet(this, _workspaceContext, instance);
    });
  }
  render() {
    return html`<umb-router-slot .routes=${this._routes}></umb-router-slot>`;
  }
}
;
_workspaceContext = /* @__PURE__ */ new WeakMap();
ApplicationInformationWorkspaceElement = __decorateClass([
  customElement("cms-workspace-application-information")
], ApplicationInformationWorkspaceElement);
export {
  ApplicationInformationWorkspaceElement as default
};
//# sourceMappingURL=application-information-workspace.element.js.map
