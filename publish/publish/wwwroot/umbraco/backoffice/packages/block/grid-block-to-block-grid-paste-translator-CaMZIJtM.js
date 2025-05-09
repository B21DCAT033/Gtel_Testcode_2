import { j as n } from "./index-Cc47Hgez.js";
import { UmbControllerBase as r } from "@umbraco-cms/backoffice/class-api";
class p extends r {
  /**
   * Translates a grid block clipboard entry value to a block grid property value.
   * @param {UmbGridBlockClipboardEntryValueModel} value - The grid block clipboard entry value.
   * @returns {Promise<UmbBlockGridValueModel>}  {Promise<UmbBlockGridValueModel>}
   * @memberof UmbGridBlockToBlockGridClipboardPastePropertyValueTranslator
   */
  async translate(o) {
    if (!o)
      throw new Error("Value is missing.");
    const e = structuredClone(o);
    return {
      contentData: e.contentData,
      settingsData: e.settingsData,
      expose: [],
      layout: {
        [n]: e.layout
      }
    };
  }
  /**
   * Checks if the clipboard entry value is compatible with the config.
   * @param {UmbGridBlockClipboardEntryValueModel} value - The grid block clipboard entry value.
   * @param {*} config - The Property Editor config.
   * @returns {Promise<boolean>} {Promise<boolean>}
   * @memberof UmbGridBlockToBlockGridClipboardPastePropertyValueTranslator
   */
  async isCompatibleValue(o, e) {
    const a = e.find((t) => t.alias === "blocks")?.value.map((t) => t.contentElementTypeKey) ?? [];
    return o.contentData.map((t) => t.contentTypeKey)?.every((t) => a.includes(t)) ?? !1;
  }
}
export {
  p as UmbGridBlockToBlockGridClipboardPastePropertyValueTranslator,
  p as api
};
//# sourceMappingURL=grid-block-to-block-grid-paste-translator-CaMZIJtM.js.map
