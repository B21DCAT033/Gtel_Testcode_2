import { j as o } from "./index-Cc47Hgez.js";
import { UmbBlockPropertyValueCloner as t } from "@umbraco-cms/backoffice/block";
class n extends t {
  constructor(r) {
    super(o, r);
  }
  _cloneLayout(r) {
    return r ? Promise.all(r.map(this.#r)) : void 0;
  }
  #r = async (r) => {
    const a = await this._cloneBlock(r);
    return a.areas && (a.areas = await Promise.all(
      a.areas.map(async (e) => ({
        ...e,
        items: await Promise.all(e.items.map(this.#r))
      }))
    )), a;
  };
}
export {
  n as UmbBlockGridPropertyValueCloner,
  n as api
};
//# sourceMappingURL=property-value-cloner-block-grid.cloner-BtA-N4bp.js.map
