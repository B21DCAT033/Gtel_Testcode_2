import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, customElement } from "@umbraco-cms/backoffice/external/lit";
import { CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT } from "./news-comment-workspace.context-token.js";
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
class NewsCommentWorkspaceElement extends UmbElementMixin(LitElement) {
  constructor() {
    super();
    this._routes = [
      {
        path: "list",
        component: () => import("./news-comment-list.element.js"),
        setup: (_component, _info) => {
        }
      },
      {
        path: "view/:id",
        component: () => import("./news-comment-view.element.js"),
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
    this.consumeContext(CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT, (instance) => {
      __privateSet(this, _workspaceContext, instance);
    });
  }
  render() {
    return html`<umb-router-slot .routes=${this._routes}></umb-router-slot>`;
  }
}
;
_workspaceContext = /* @__PURE__ */ new WeakMap();
NewsCommentWorkspaceElement = __decorateClass([
  customElement("cms-workspace-news-comment")
], NewsCommentWorkspaceElement);
export {
  NewsCommentWorkspaceElement as default
};
//# sourceMappingURL=news-comment-workspace.element.js.map
