var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _data, _newsCommentService, _auth, _NewsCommentWorkspaceContext_instances, initNewsCommentService_fn;
import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState } from "@umbraco-cms/backoffice/observable-api";
import { CMS_WORKSPACE_NEWSCOMMENT_ALIAS, CMS_ENTITY_TYPE_NEWSCOMMENT } from "../../constants.js";
import { NewsCommentService } from "../services/news-comment.service.js";
import { NAME_OF_COMMENTS_SERVICES } from "../../common/consts/enum.js";
import { CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT } from "./news-comment-workspace.context-token.js";
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth";
class NewsCommentWorkspaceContext extends UmbControllerBase {
  constructor(host) {
    super(host, CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT.toString());
    __privateAdd(this, _NewsCommentWorkspaceContext_instances);
    __privateAdd(this, _data);
    __privateAdd(this, _newsCommentService);
    __privateAdd(this, _auth);
    this.workspaceAlias = CMS_WORKSPACE_NEWSCOMMENT_ALIAS;
    __privateSet(this, _data, new UmbObjectState(void 0));
    this.data = __privateGet(this, _data).asObservable();
    this.provideContext(CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT, this);
    this.consumeContext(UMB_AUTH_CONTEXT, (instance) => {
      __privateSet(this, _auth, instance);
    });
  }
  hostConnected() {
    super.hostConnected();
    __privateMethod(this, _NewsCommentWorkspaceContext_instances, initNewsCommentService_fn).call(this);
  }
  resetState() {
    __privateGet(this, _data).setValue(void 0);
  }
  async create() {
    this.resetState();
  }
  async load(unique) {
    var _a, _b;
    this.resetState();
    const accessToken = await ((_a = __privateGet(this, _auth)) == null ? void 0 : _a.getLatestToken());
    if (accessToken) {
      const response = await ((_b = __privateGet(this, _newsCommentService)) == null ? void 0 : _b.requestByUnique(+unique, accessToken));
      if (response.ok) {
        const result = await response.json();
        __privateGet(this, _data).setValue(result);
      } else {
        console.error("HTTP Error:", response.status);
      }
    }
  }
  getEntityType() {
    return CMS_ENTITY_TYPE_NEWSCOMMENT;
  }
}
_data = new WeakMap();
_newsCommentService = new WeakMap();
_auth = new WeakMap();
_NewsCommentWorkspaceContext_instances = new WeakSet();
initNewsCommentService_fn = async function() {
  __privateSet(this, _newsCommentService, new NewsCommentService(NAME_OF_COMMENTS_SERVICES.NEWSCOMMENT));
};
export {
  NewsCommentWorkspaceContext,
  NewsCommentWorkspaceContext as api
};
//# sourceMappingURL=news-comment-workspace.context.js.map
