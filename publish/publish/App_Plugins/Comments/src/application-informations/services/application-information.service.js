var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _rootApi;
class ApplicationInformationService {
  constructor(apiName) {
    __privateAdd(this, _rootApi);
    __privateSet(this, _rootApi, `/api/${apiName}`);
  }
  getAll(accessToken) {
    return fetch(__privateGet(this, _rootApi) + "/getall", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });
  }
  requestByUnique(id, accessToken) {
    return fetch(__privateGet(this, _rootApi) + "/get/" + id, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });
  }
  search(item, accessToken) {
    return fetch(__privateGet(this, _rootApi) + "/getPaged", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
  }
  delete(item, accessToken) {
    return fetch(__privateGet(this, _rootApi) + "/deleteApplicationInformation", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
  }
  deletes(item, accessToken) {
    return fetch(__privateGet(this, _rootApi) + "/deleteApplicationInformations", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
  }
}
_rootApi = new WeakMap();
export {
  ApplicationInformationService
};
//# sourceMappingURL=application-information.service.js.map
