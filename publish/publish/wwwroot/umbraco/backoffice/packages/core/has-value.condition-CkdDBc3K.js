import { U as i } from "./unsupported-property.element-BLTHB_ZJ.js";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
class p extends r {
  constructor(o, t) {
    super(o, t), this.consumeContext(i, (e) => {
      this.observe(e.value, (s) => {
        this.permitted = s !== void 0;
      });
    });
  }
}
export {
  p as UmbPropertyHasValueCondition,
  p as api
};
//# sourceMappingURL=has-value.condition-CkdDBc3K.js.map
