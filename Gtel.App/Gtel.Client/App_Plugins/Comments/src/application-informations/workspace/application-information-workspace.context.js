var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _data, _applicationInformationService, _auth, _ApplicationInformationWorkspaceContext_instances, initApplicationInformationService_fn;
import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState } from "@umbraco-cms/backoffice/observable-api";
import { CMS_WORKSPACE_APPLICATIONINFORMATION_ALIAS, CMS_ENTITY_TYPE_APPLICATIONINFORMATION } from "../../constants.js";
import { ApplicationInformationService } from "../services/application-information.service.js";
import { NAME_OF_COMMENTS_SERVICES } from "../../common/consts/enum.js";
import { CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION } from "./application-information-workspace.context-token.js";
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth";
class ApplicationInformationWorkspaceContext extends UmbControllerBase {
  constructor(host) {
    super(host, CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION.toString());
    __privateAdd(this, _ApplicationInformationWorkspaceContext_instances);
    __privateAdd(this, _data);
    __privateAdd(this, _applicationInformationService);
    __privateAdd(this, _auth);
    this.workspaceAlias = CMS_WORKSPACE_APPLICATIONINFORMATION_ALIAS;
    __privateSet(this, _data, new UmbObjectState(void 0));
    this.data = __privateGet(this, _data).asObservable();
    this.provideContext(CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION, this);
    this.consumeContext(UMB_AUTH_CONTEXT, (instance) => {
      __privateSet(this, _auth, instance);
    });
  }
  hostConnected() {
    super.hostConnected();
    __privateMethod(this, _ApplicationInformationWorkspaceContext_instances, initApplicationInformationService_fn).call(this);
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
      const response = await ((_b = __privateGet(this, _applicationInformationService)) == null ? void 0 : _b.requestByUnique(+unique, accessToken));
      if (response.ok) {
        const result = await response.json();
        __privateGet(this, _data).setValue(result);
      } else {
        console.error("HTTP Error:", response.status);
      }
    }
  }
  getEntityType() {
    return CMS_ENTITY_TYPE_APPLICATIONINFORMATION;
  }
}
_data = new WeakMap();
_applicationInformationService = new WeakMap();
_auth = new WeakMap();
_ApplicationInformationWorkspaceContext_instances = new WeakSet();
initApplicationInformationService_fn = async function() {
  __privateSet(this, _applicationInformationService, new ApplicationInformationService(NAME_OF_COMMENTS_SERVICES.APPLICATIONINFORMATION));
};
export {
  ApplicationInformationWorkspaceContext,
  ApplicationInformationWorkspaceContext as api
};
//# sourceMappingURL=application-information-workspace.context.js.map
