import { UmbAbstractArrayValidationPathTranslator as a, UmbDataPathPropertyValueQuery as r } from "@umbraco-cms/backoffice/validation";
const e = Symbol();
class l extends a {
  constructor(t) {
    super(t, "$.values[", r, e);
  }
  getDataFromIndex(t) {
    return this._context ? this._context.getTranslationData().values[t] : void 0;
  }
}
export {
  l as U
};
//# sourceMappingURL=block-element-values-validation-path-translator.controller-NJPWqeR9.js.map
