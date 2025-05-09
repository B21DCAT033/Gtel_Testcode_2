import { j as s } from "./index-Cc47Hgez.js";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
class m extends l {
  async translate(r) {
    if (!r)
      throw new Error("Property value is missing.");
    const t = structuredClone(r), o = t.layout?.[s] ?? void 0, a = t.contentData, e = t.settingsData;
    if (!o?.length)
      throw new Error("No layouts found.");
    return o?.forEach((n) => {
      delete n.$type;
    }), {
      contentData: a,
      layout: o,
      settingsData: e
    };
  }
}
export {
  m as UmbBlockGridToGridBlockClipboardCopyPropertyValueTranslator,
  m as api
};
//# sourceMappingURL=block-grid-to-grid-block-copy-translator-zBCfuWDH.js.map
