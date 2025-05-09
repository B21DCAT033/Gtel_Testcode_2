import { U as e } from "./base-CzBFGKJV.js";
import { UmbLocalizationController as t } from "@umbraco-cms/backoffice/localization-api";
import { StarterKit as i, Placeholder as a, Div as r, Span as l, HtmlGlobalAttributes as o, TrailingNode as s } from "@umbraco-cms/backoffice/external/tiptap";
class b extends e {
  constructor() {
    super(...arguments), this.#e = new t(this), this.getTiptapExtensions = () => [
      i,
      a.configure({ placeholder: this.#e.term("placeholders_rteParagraph") }),
      r,
      l,
      o.configure({
        types: [
          "bold",
          "blockquote",
          "bulletList",
          "codeBlock",
          "div",
          "figcaption",
          "figure",
          "heading",
          "horizontalRule",
          "italic",
          "image",
          "link",
          "orderedList",
          "paragraph",
          "span",
          "strike",
          "subscript",
          "superscript",
          "table",
          "tableHeader",
          "tableRow",
          "tableCell",
          "underline",
          "umbLink"
        ]
      }),
      s
    ];
  }
  #e;
}
export {
  b as UmbTiptapRichTextEssentialsExtensionApi,
  b as api,
  b as default
};
//# sourceMappingURL=rich-text-essentials.tiptap-api-BYwCJvEP.js.map
