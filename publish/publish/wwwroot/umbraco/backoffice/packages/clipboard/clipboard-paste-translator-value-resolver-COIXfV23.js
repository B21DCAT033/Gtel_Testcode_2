import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as p } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as u } from "@umbraco-cms/backoffice/extension-registry";
class P extends l {
  async resolve(r, e) {
    if (!r)
      throw new Error("Property value is required.");
    if (!e)
      throw new Error("Property editor UI alias is required.");
    const t = u.getByTypeAndFilter(
      "clipboardCopyPropertyValueTranslator",
      (o) => o.fromPropertyEditorUi === e
    );
    if (!t.length)
      throw new Error("No clipboard copy translators found.");
    const a = t.map((o) => p(this, o)), n = (await Promise.all(a)).map(
      async (o) => o?.translate(r)
    );
    return (await Promise.all(n)).map((o, d) => ({ type: t[d].toClipboardEntryValueType, value: o }));
  }
}
class T extends l {
  #t = /* @__PURE__ */ new Map();
  async resolve(r, e) {
    if (!r.length)
      throw new Error("Clipboard entry values are required.");
    if (!e)
      throw new Error("Property editor UI alias is required.");
    const t = this.#r(r, e), a = await this.getPasteTranslator(r, e), s = r.find((n) => n.type === t.fromClipboardEntryValueType);
    if (!s)
      throw new Error("Value to translate is missing");
    return a.translate(s.value);
  }
  /**
   * Get the paste translator for the given clipboard entry values and property editor ui alias
   * @param {UmbClipboardEntryValuesType} clipboardEntryValues
   * @param {string} propertyEditorUiAlias
   * @returns {Promise<UmbClipboardPastePropertyValueTranslator>} - The paste translator
   * @memberof UmbClipboardPastePropertyValueTranslatorValueResolver
   */
  async getPasteTranslator(r, e) {
    const t = this.#r(r, e);
    if (this.#t.has(t.alias))
      return this.#t.get(t.alias);
    const a = await p(this, t);
    if (!a)
      throw new Error("Failed to create paste translator.");
    if (!a.translate)
      throw new Error("Paste translator does not have a translate method.");
    return this.#t.set(t.alias, a), a;
  }
  #r(r, e) {
    const t = this.#e(r, e);
    if (!t.length)
      throw new Error("No paste translator found for the given property editor ui and entry value type.");
    return t.sort((a, s) => (s.weight || 0) - (a.weight || 0))[0];
  }
  #e(r, e) {
    const t = r.map((s) => s.type);
    return u.getByTypeAndFilter(
      "clipboardPastePropertyValueTranslator",
      (s) => {
        const n = t.includes(s.fromClipboardEntryValueType), i = s.toPropertyEditorUi === e;
        return n && i;
      }
    );
  }
}
export {
  P as U,
  T as a
};
//# sourceMappingURL=clipboard-paste-translator-value-resolver-COIXfV23.js.map
