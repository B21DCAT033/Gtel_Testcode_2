const i = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Block",
    name: "Block Tiptap Extension",
    api: () => import("./block.tipap-api-DMqbRyT1.js"),
    meta: {
      icon: "icon-plugin",
      label: "Block",
      group: "#tiptap_extGroup_interactive"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.BlockPicker",
    name: "Block Picker Tiptap Extension Button",
    api: () => import("./block.tiptap-toolbar-api-C5mUw7f6.js"),
    forExtensions: ["Umb.Tiptap.Block"],
    meta: {
      alias: "umbblockpicker",
      icon: "icon-plugin",
      label: "#blockEditor_insertBlock"
    }
  }
], t = [
  {
    type: "tiptapToolbarExtension",
    alias: "Umb.Tiptap.Toolbar.StyleSelect",
    name: "Style Select Tiptap Extension",
    element: () => import("./style-select-tiptap-toolbar.element-Gj33Q-HH.js"),
    meta: {
      alias: "umbStyleSelect",
      icon: "icon-palette",
      label: "Style Select"
    }
  }
], a = [
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Table",
    name: "Table Tiptap Extension",
    api: () => import("./table.tiptap-api-Byx0RLhM.js"),
    meta: {
      icon: "icon-table",
      label: "Table",
      group: "#tiptap_extGroup_interactive"
    }
  }
], o = [
  {
    type: "tiptapToolbarExtension",
    alias: "Umb.Tiptap.Toolbar.Table",
    name: "Table Tiptap Extension",
    api: () => import("./table.tiptap-toolbar-api-BWYQFK9d.js"),
    element: () => import("./table-tiptap-toolbar-button.element-Oa_VwI-N.js"),
    forExtensions: ["Umb.Tiptap.Table"],
    meta: {
      alias: "table",
      icon: "icon-table",
      label: "Table"
    }
  }
], e = [...a, ...o], n = [
  {
    type: "kind",
    alias: "Umb.Kind.TiptapToolbar.Button",
    matchKind: "button",
    matchType: "tiptapToolbarExtension",
    manifest: {
      element: () => import("./tiptap-toolbar-button.element-DMDxUWpq.js")
    }
  }
], p = [
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.RichTextEssentials",
    name: "Rich Text Essentials Tiptap Extension",
    api: () => import("./rich-text-essentials.tiptap-api-BYwCJvEP.js"),
    weight: 1e3,
    meta: {
      icon: "icon-browser-window",
      label: "Rich Text Essentials",
      group: "#tiptap_extGroup_formatting",
      description: "This is a core extension, it is always enabled by default."
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Embed",
    name: "Embed Tiptap Extension",
    api: () => import("./embedded-media.tiptap-api-thIOS_AI.js"),
    meta: {
      icon: "icon-embed",
      label: "#general_embed",
      group: "#tiptap_extGroup_media"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Link",
    name: "Link Tiptap Extension",
    api: () => import("./link.tiptap-api-DYeSjxA_.js"),
    meta: {
      icon: "icon-link",
      label: "#defaultdialogs_urlLinkPicker",
      group: "#tiptap_extGroup_interactive"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Figure",
    name: "Figure Tiptap Extension",
    api: () => import("./figure.tiptap-api-70h53txb.js"),
    meta: {
      icon: "icon-frame",
      label: "Figure",
      group: "#tiptap_extGroup_media"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.Image",
    name: "Image Tiptap Extension",
    api: () => import("./image.tiptap-api-BeNJV55o.js"),
    meta: {
      icon: "icon-picture",
      label: "Image",
      group: "#tiptap_extGroup_media"
    }
  },
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Subscript",
    name: "Subscript Tiptap Extension",
    api: () => import("./subscript.tiptap-api-DqQkqCPd.js"),
    meta: {
      icon: "icon-subscript",
      label: "Subscript",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Superscript",
    name: "Superscript Tiptap Extension",
    api: () => import("./superscript.tiptap-api-SuVNQbC7.js"),
    meta: {
      icon: "icon-superscript",
      label: "Superscript",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    kind: "button",
    alias: "Umb.Tiptap.Underline",
    name: "Underline Tiptap Extension",
    api: () => import("./underline.tiptap-api-COh5SyGi.js"),
    meta: {
      icon: "icon-underline",
      label: "Underline",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TextAlign",
    name: "Text Align Tiptap Extension",
    api: () => import("./text-align.tiptap-api-CLKc8a2f.js"),
    meta: {
      icon: "icon-text-align-justify",
      label: "Text Align",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.TextDirection",
    name: "Text Direction Tiptap Extension",
    api: () => import("./text-direction.tiptap-api-CDWwj2RJ.js"),
    meta: {
      icon: "icon-text-direction-ltr",
      label: "Text Direction",
      group: "#tiptap_extGroup_formatting"
    }
  },
  {
    type: "tiptapExtension",
    alias: "Umb.Tiptap.MediaUpload",
    name: "Media Upload Tiptap Extension",
    api: () => import("./media-upload.tiptap-api-KV0aVVni.js"),
    meta: {
      icon: "icon-image-up",
      label: "Media Upload",
      group: "#tiptap_extGroup_media"
    }
  }
], l = [
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.SourceEditor",
    name: "Source Editor Tiptap Extension",
    api: () => import("./source-editor.tiptap-toolbar-api-B7rQdUeZ.js"),
    meta: {
      alias: "umbSourceEditor",
      icon: "icon-code-xml",
      label: "#general_viewSourceCode"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Bold",
    name: "Bold Tiptap Extension",
    api: () => import("./bold.tiptap-toolbar-api-CGY7la_R.js"),
    meta: {
      alias: "bold",
      icon: "icon-bold",
      label: "#buttons_bold"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Italic",
    name: "Italic Tiptap Extension",
    api: () => import("./italic.tiptap-toolbar-api-C9OO7jr-.js"),
    meta: {
      alias: "italic",
      icon: "icon-italic",
      label: "#buttons_italic"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Underline",
    name: "Underline Tiptap Extension",
    api: () => import("./underline.tiptap-toolbar-api-C3o_fwN8.js"),
    forExtensions: ["Umb.Tiptap.Underline"],
    meta: {
      alias: "underline",
      icon: "icon-underline",
      label: "Underline"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Strike",
    name: "Strike Tiptap Extension",
    api: () => import("./strike.tiptap-toolbar-api-BrWIUJiP.js"),
    meta: {
      alias: "strike",
      icon: "icon-strikethrough",
      label: "Strike"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.ClearFormatting",
    name: "Clear Formatting Tiptap Extension",
    api: () => import("./clear-formatting.tiptap-toolbar-api-B0jhjI5c.js"),
    meta: {
      alias: "clear-formatting",
      icon: "icon-clear-formatting",
      label: "Clear Formatting"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignLeft",
    name: "Text Align Left Tiptap Extension",
    api: () => import("./text-align-left.tiptap-toolbar-api-BhNCdgRO.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-left",
      icon: "icon-text-align-left",
      label: "Text Align Left"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignCenter",
    name: "Text Align Center Tiptap Extension",
    api: () => import("./text-align-center.tiptap-toolbar-api-DD3kmVxK.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-center",
      icon: "icon-text-align-center",
      label: "Text Align Center"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignRight",
    name: "Text Align Right Tiptap Extension",
    api: () => import("./text-align-right.tiptap-toolbar-api-Ddm-EsI3.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-right",
      icon: "icon-text-align-right",
      label: "Text Align Right"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextAlignJustify",
    name: "Text Align Justify Tiptap Extension",
    api: () => import("./text-align-justify.tiptap-toolbar-api-IlIfFZM1.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-align-justify",
      icon: "icon-text-align-justify",
      label: "Text Align Justify"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextDirectionRtl",
    name: "Text Direction RTL Tiptap Extension",
    api: () => import("./text-direction-rtl.tiptap-toolbar-api-vzV0GYmo.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-direction-rtl",
      icon: "icon-text-direction-rtl",
      label: "Right to left"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.TextDirectionLtr",
    name: "Text Direction LTR Tiptap Extension",
    api: () => import("./text-direction-ltr.tiptap-toolbar-api-DoU-ui8V.js"),
    forExtensions: ["Umb.Tiptap.TextAlign"],
    meta: {
      alias: "text-direction-ltr",
      icon: "icon-text-direction-ltr",
      label: "Left to right"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading1",
    name: "Heading 1 Tiptap Extension",
    api: () => import("./heading1.tiptap-toolbar-api-PhIYhl8p.js"),
    meta: {
      alias: "heading1",
      icon: "icon-heading-1",
      label: "Heading 1"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading2",
    name: "Heading 2 Tiptap Extension",
    api: () => import("./heading2.tiptap-toolbar-api-BudDmNQW.js"),
    meta: {
      alias: "heading2",
      icon: "icon-heading-2",
      label: "Heading 2"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Heading3",
    name: "Heading 3 Tiptap Extension",
    api: () => import("./heading3.tiptap-toolbar-api-EEgmGW0h.js"),
    meta: {
      alias: "heading3",
      icon: "icon-heading-3",
      label: "Heading 3"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.BulletList",
    name: "Bullet List Tiptap Extension",
    api: () => import("./bullet-list.tiptap-toolbar-api-C-r9muwh.js"),
    meta: {
      alias: "bulletList",
      icon: "icon-bulleted-list",
      label: "#buttons_listBullet"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.OrderedList",
    name: "Ordered List Tiptap Extension",
    api: () => import("./ordered-list.tiptap-toolbar-api-CRHxAt_D.js"),
    meta: {
      alias: "orderedList",
      icon: "icon-ordered-list",
      label: "Ordered List"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Blockquote",
    name: "Blockquote Tiptap Extension",
    api: () => import("./blockquote.tiptap-toolbar-api-DNVsYgyu.js"),
    meta: {
      alias: "blockquote",
      icon: "icon-blockquote",
      label: "Blockquote"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Link",
    name: "Link Tiptap Extension",
    api: () => import("./link.tiptap-toolbar-api-Breym6J5.js"),
    forExtensions: ["Umb.Tiptap.Link"],
    meta: {
      alias: "umbLink",
      icon: "icon-link",
      label: "#defaultdialogs_urlLinkPicker"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Unlink",
    name: "Unlink Tiptap Extension",
    api: () => import("./unlink.tiptap-toolbar-api-kMc5heWo.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-Bu-BfuZT.js"),
    forExtensions: ["Umb.Tiptap.Link"],
    meta: {
      alias: "unlink",
      icon: "icon-unlink",
      label: "Unlink"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.CodeBlock",
    name: "Code Block Tiptap Extension",
    api: () => import("./code-block.tiptap-toolbar-api-Cj1E8BmL.js"),
    meta: {
      alias: "codeBlock",
      icon: "icon-code",
      label: "Code Block"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Subscript",
    name: "Subscript Tiptap Extension",
    api: () => import("./subscript.tiptap-toolbar-api-CMmUknZS.js"),
    forExtensions: ["Umb.Tiptap.Subscript"],
    meta: {
      alias: "subscript",
      icon: "icon-subscript",
      label: "Subscript"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Superscript",
    name: "Superscript Tiptap Extension",
    api: () => import("./superscript.tiptap-toolbar-api-Br-iJiXI.js"),
    forExtensions: ["Umb.Tiptap.Superscript"],
    meta: {
      alias: "superscript",
      icon: "icon-superscript",
      label: "Superscript"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.HorizontalRule",
    name: "Horizontal Rule Tiptap Extension",
    api: () => import("./horizontal-rule.tiptap-toolbar-api-yALTbnKv.js"),
    meta: {
      alias: "horizontalRule",
      icon: "icon-horizontal-rule",
      label: "Horizontal Rule"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Undo",
    name: "Undo Tiptap Extension",
    api: () => import("./undo.tiptap-toolbar-api-Cjsl4dF7.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-Bu-BfuZT.js"),
    meta: {
      alias: "undo",
      icon: "icon-undo",
      label: "#buttons_undo"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.Redo",
    name: "Redo Tiptap Extension",
    api: () => import("./redo.tiptap-toolbar-api-CqDHvMN2.js"),
    element: () => import("./tiptap-toolbar-button-disabled.element-Bu-BfuZT.js"),
    meta: {
      alias: "redo",
      icon: "icon-redo",
      label: "#buttons_redo"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.MediaPicker",
    name: "Media Picker Tiptap Extension",
    api: () => import("./media-picker.tiptap-toolbar-api-CrSouvzP.js"),
    forExtensions: ["Umb.Tiptap.Figure", "Umb.Tiptap.Image"],
    meta: {
      alias: "umbMedia",
      icon: "icon-picture",
      label: "#general_mediaPicker"
    }
  },
  {
    type: "tiptapToolbarExtension",
    kind: "button",
    alias: "Umb.Tiptap.Toolbar.EmbeddedMedia",
    name: "Embedded Media Tiptap Extension",
    api: () => import("./embedded-media.tiptap-toolbar-api-DSCdxIiE.js"),
    forExtensions: ["Umb.Tiptap.Embed"],
    meta: {
      alias: "umbEmbeddedMedia",
      icon: "icon-embed",
      label: "#general_embed"
    }
  },
  {
    type: "tiptapToolbarExtension",
    alias: "Umb.Tiptap.Toolbar.FontFamily",
    name: "Font Family Tiptap Extension",
    element: () => import("./font-family-tiptap-toolbar.element-CnZqR-9N.js"),
    meta: {
      alias: "umbFontFamily",
      icon: "icon-ruler-alt",
      label: "Font family"
    }
  },
  {
    type: "tiptapToolbarExtension",
    alias: "Umb.Tiptap.Toolbar.FontSize",
    name: "Font Size Tiptap Extension",
    element: () => import("./font-size-tiptap-toolbar.element-DfcXNJQr.js"),
    meta: {
      alias: "umbFontSize",
      icon: "icon-ruler",
      label: "Font size"
    }
  }
], r = [
  ...p,
  ...l,
  ...i,
  ...t,
  ...e
], s = [...n, ...r], b = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap",
    name: "Rich Text Editor [Tiptap] Property Editor UI",
    element: () => import("./property-editor-ui-tiptap.element-BUAky5G2.js"),
    meta: {
      label: "Rich Text Editor [Tiptap]",
      propertyEditorSchemaAlias: "Umbraco.RichText",
      icon: "icon-browser-window",
      group: "richContent",
      settings: {
        properties: [
          {
            alias: "extensions",
            label: "#tiptap_config_extensions",
            description: `Choose which Tiptap extensions to enable

_Once enabled, the related actions will be available for the toolbar._`,
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap.ExtensionsConfiguration",
            weight: 10
          },
          {
            alias: "toolbar",
            label: "#tiptap_config_toolbar",
            description: `Design the available actions

_Drag and drop the available actions onto the toolbar._`,
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap.ToolbarConfiguration",
            weight: 15
          },
          {
            alias: "dimensions",
            label: "#general_dimensions",
            description: "{#tiptap_config_dimensions_description}",
            propertyEditorUiAlias: "Umb.PropertyEditorUI.TinyMCE.DimensionsConfiguration",
            weight: 20
          },
          {
            alias: "maxImageSize",
            label: "#rte_config_maxImageSize",
            description: "{#rte_config_maxImageSize_description}",
            propertyEditorUiAlias: "Umb.PropertyEditorUI.TinyMCE.MaxImageSizeConfiguration",
            weight: 40
          },
          {
            alias: "overlaySize",
            label: "#rte_config_overlaySize",
            description: "{#rte_config_overlaySize_description}",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.OverlaySize",
            weight: 50
          }
        ],
        defaultData: [
          {
            alias: "toolbar",
            value: [
              [
                ["Umb.Tiptap.Toolbar.SourceEditor"],
                ["Umb.Tiptap.Toolbar.Bold", "Umb.Tiptap.Toolbar.Italic", "Umb.Tiptap.Toolbar.Underline"],
                [
                  "Umb.Tiptap.Toolbar.TextAlignLeft",
                  "Umb.Tiptap.Toolbar.TextAlignCenter",
                  "Umb.Tiptap.Toolbar.TextAlignRight"
                ],
                ["Umb.Tiptap.Toolbar.BulletList", "Umb.Tiptap.Toolbar.OrderedList"],
                ["Umb.Tiptap.Toolbar.Blockquote", "Umb.Tiptap.Toolbar.HorizontalRule"],
                ["Umb.Tiptap.Toolbar.Link", "Umb.Tiptap.Toolbar.Unlink"],
                ["Umb.Tiptap.Toolbar.MediaPicker", "Umb.Tiptap.Toolbar.EmbeddedMedia"]
              ]
            ]
          },
          { alias: "maxImageSize", value: 500 },
          { alias: "overlaySize", value: "medium" }
        ]
      }
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap.ToolbarConfiguration",
    name: "Tiptap Toolbar Property Editor UI",
    js: () => import("./property-editor-ui-tiptap-toolbar-configuration.element-B8SmBT_q.js"),
    meta: {
      label: "Tiptap Toolbar Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tiptap.ExtensionsConfiguration",
    name: "Tiptap Extensions Property Editor UI",
    js: () => import("./property-editor-ui-tiptap-extensions-configuration.element-CpTKlnH4.js"),
    meta: {
      label: "Tiptap Extensions Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  }
], m = [...b], T = [...s, ...m];
export {
  T as manifests
};
//# sourceMappingURL=manifests.js.map
