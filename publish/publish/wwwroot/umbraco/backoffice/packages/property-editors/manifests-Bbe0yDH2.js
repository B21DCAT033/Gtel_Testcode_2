const t = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.AcceptedUploadTypes",
  name: "Accepted Upload Types Property Editor UI",
  element: () => import("./property-editor-ui-accepted-upload-types.element-CStKCYFl.js"),
  meta: {
    label: "Accepted Upload Types",
    icon: "icon-ordered-list",
    group: "lists",
    supportsReadOnly: !0
  }
}, i = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ColorSwatchesEditor",
  name: "Color Swatches Editor Property Editor UI",
  element: () => import("./property-editor-ui-color-swatches-editor.element-CnDyI4dd.js"),
  meta: {
    label: "Color Swatches Editor",
    icon: "icon-page-add",
    group: "pickers"
  }
}, r = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.NumberRange",
  name: "Number Range Property Editor UI",
  element: () => import("./property-editor-ui-number-range.element-CYAOQVVd.js"),
  meta: {
    label: "Number Range",
    icon: "icon-autofill",
    group: "common"
  }
}, o = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.OrderDirection",
  name: "Order Direction Property Editor UI",
  element: () => import("./property-editor-ui-order-direction.element-Brb3GvQW.js"),
  meta: {
    label: "Order Direction",
    icon: "icon-autofill",
    group: "common"
  }
}, a = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.OverlaySize",
  name: "Overlay Size Property Editor UI",
  element: () => import("./property-editor-ui-overlay-size.element-1ijlsMz9.js"),
  meta: {
    label: "Overlay Size",
    icon: "icon-document",
    group: ""
  }
}, l = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.Select",
  name: "Select Property Editor UI",
  element: () => import("./property-editor-ui-select.element-OP5LNFvx.js"),
  meta: {
    label: "Select",
    icon: "icon-list",
    group: "pickers",
    settings: {
      properties: [
        {
          alias: "items",
          label: "Add options",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MultipleTextString"
        }
      ]
    }
  }
}, s = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ValueType",
  name: "Value Type Property Editor UI",
  element: () => import("./property-editor-ui-value-type.element--inksL4x.js"),
  meta: {
    label: "Value Type",
    icon: "icon-autofill",
    group: "common"
  }
}, n = {
  type: "propertyEditorSchema",
  name: "Checkbox List",
  alias: "Umbraco.CheckBoxList",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.CheckBoxList"
  }
}, p = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.CheckBoxList",
    name: "Checkbox List Property Editor UI",
    element: () => import("./property-editor-ui-checkbox-list.element-Drx3xDlK.js"),
    meta: {
      label: "Checkbox List",
      propertyEditorSchemaAlias: "Umbraco.CheckBoxList",
      icon: "icon-bulleted-list",
      group: "lists",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "items",
            label: "Add option",
            description: "Add, remove or sort options for the list.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.MultipleTextString"
          }
        ]
      }
    }
  },
  n
], m = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.Collection.BulkActionPermissions",
  name: "Collection Bulk Action Permissions Property Editor UI",
  element: () => import("./permissions.element-CIGrF1FU.js"),
  meta: {
    label: "Collection Bulk Action Permissions",
    icon: "icon-autofill",
    group: "lists"
  }
}, d = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.Collection.ColumnConfiguration",
  name: "Collection Column Configuration Property Editor UI",
  element: () => import("./column-configuration.element-BrETXgbY.js"),
  meta: {
    label: "Collection Column Configuration",
    icon: "icon-autofill",
    group: "lists"
  }
}, c = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.Collection.LayoutConfiguration",
  name: "Collection Column Configuration Property Editor UI",
  element: () => import("./layout-configuration.element-BRxuoYoP.js"),
  meta: {
    label: "Collection Layout Configuration",
    icon: "icon-autofill",
    group: "lists"
  }
}, y = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.Collection.OrderBy",
  name: "Collection Column Configuration Property Editor UI",
  element: () => import("./order-by.element-7pTeZPX6.js"),
  meta: {
    label: "Collection Order By",
    icon: "icon-autofill",
    group: "lists"
  }
}, U = {
  type: "propertyEditorSchema",
  name: "List View",
  alias: "Umbraco.ListView",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Collection",
    settings: {
      properties: [
        {
          alias: "includeProperties",
          label: "Columns Displayed",
          description: "The properties that will be displayed for each column.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Collection.ColumnConfiguration"
        }
      ]
    }
  }
}, u = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.Collection",
  name: "Collection Property Editor UI",
  element: () => import("./property-editor-ui-collection.element-6tchRzdA.js"),
  meta: {
    label: "Collection",
    propertyEditorSchemaAlias: "Umbraco.ListView",
    icon: "icon-layers",
    group: "lists",
    settings: {
      properties: [
        {
          alias: "layouts",
          label: "Layouts",
          description: "The properties that will be displayed for each column.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Collection.LayoutConfiguration"
        },
        {
          alias: "orderBy",
          label: "Order By",
          description: "The default sort order for the Collection.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Collection.OrderBy"
        },
        {
          alias: "orderDirection",
          label: "Order Direction",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.OrderDirection"
        },
        {
          alias: "pageSize",
          label: "Page Size",
          description: "Number of items per page.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
          config: [{ alias: "min", value: 0 }]
        },
        {
          alias: "icon",
          label: "Workspace View icon",
          description: "The icon for the Collection's Workspace View.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.IconPicker"
        },
        {
          alias: "tabName",
          label: "Workspace View name",
          description: "The name of the Collection's Workspace View (default if empty: Child Items).",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
        },
        {
          alias: "showContentFirst",
          label: "Show Content Workspace View First",
          description: "Enable this to show the Content Workspace View by default instead of the Collection's.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ],
      defaultData: [
        {
          alias: "includeProperties",
          value: [
            { header: "Sort", alias: "sortOrder", isSystem: 1 },
            { header: "Last edited", alias: "updateDate", isSystem: 1 },
            { header: "Created by", alias: "creator", isSystem: 1 }
          ]
        },
        {
          alias: "layouts",
          value: [
            { name: "Table", icon: "icon-list", collectionView: "Umb.CollectionView.Document.Table" },
            { name: "Grid", icon: "icon-grid", collectionView: "Umb.CollectionView.Document.Grid" }
          ]
        },
        { alias: "pageSize", value: 10 },
        { alias: "orderBy", value: "sortOrder" },
        { alias: "orderDirection", value: "desc" },
        { alias: "icon", value: "icon-list" }
      ]
    }
  }
}, b = [
  u,
  m,
  d,
  c,
  y,
  U
], E = "Umb.PropertyEditorUi.ColorPicker", P = {
  type: "propertyEditorSchema",
  name: "Color Picker",
  alias: "Umbraco.ColorPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.ColorPicker",
    settings: {
      properties: [
        {
          alias: "useLabel",
          label: "#colorPickerConfigurations_showLabelTitle",
          description: "{umbLocalize: colorPickerConfigurations_showLabelDescription}",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "items",
          label: "#colorPickerConfigurations_colorsTitle",
          description: "{umbLocalize: colorPickerConfigurations_colorsDescription}",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ColorSwatchesEditor"
        }
      ]
    }
  }
}, g = [
  {
    type: "propertyEditorUi",
    alias: E,
    name: "Color Picker Property Editor UI",
    element: () => import("./property-editor-ui-color-picker.element-YxAkTFOm.js"),
    meta: {
      label: "Color Picker",
      propertyEditorSchemaAlias: "Umbraco.ColorPicker",
      icon: "icon-colorpicker",
      group: "pickers",
      supportsReadOnly: !0
    }
  },
  P
], f = {
  type: "propertyEditorSchema",
  name: "Date/Time",
  alias: "Umbraco.DateTime",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.DatePicker"
  }
}, h = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.DatePicker",
    name: "Date Picker Property Editor UI",
    element: () => import("./property-editor-ui-date-picker.element-Cj6cwcKu.js"),
    meta: {
      label: "Date Picker",
      propertyEditorSchemaAlias: "Umbraco.DateTime",
      icon: "icon-time",
      group: "pickers",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "format",
            label: "Date format",
            description: "If left empty then the format is YYYY-MM-DD",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          }
        ],
        defaultData: [
          {
            alias: "format",
            value: "YYYY-MM-DD HH:mm:ss"
          }
        ]
      }
    }
  },
  f
], S = {
  type: "propertyEditorSchema",
  name: "Dropdown",
  alias: "Umbraco.DropDown.Flexible",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Dropdown",
    settings: {
      properties: [
        {
          alias: "multiple",
          label: "Enable multiple choice",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "items",
          label: "Add options",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MultipleTextString"
        }
      ]
    }
  }
}, A = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Dropdown",
    name: "Dropdown Property Editor UI",
    element: () => import("./property-editor-ui-dropdown.element-CvZgk3Vz.js"),
    meta: {
      label: "Dropdown",
      propertyEditorSchemaAlias: "Umbraco.DropDown.Flexible",
      icon: "icon-list",
      group: "lists",
      supportsReadOnly: !0
    }
  },
  S
], C = {
  type: "propertyEditorSchema",
  name: "Eye Dropper Color Picker",
  alias: "Umbraco.ColorPicker.EyeDropper",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.EyeDropper"
  }
}, D = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.EyeDropper",
    name: "Eye Dropper Color Picker Property Editor UI",
    element: () => import("./property-editor-ui-eye-dropper.element-DBGROwul.js"),
    meta: {
      label: "Eye Dropper Color Picker",
      icon: "icon-colorpicker",
      group: "pickers",
      propertyEditorSchemaAlias: "Umbraco.ColorPicker.EyeDropper",
      settings: {
        properties: [
          {
            alias: "showAlpha",
            label: "Show alpha",
            description: "Allow alpha transparency selection.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "showPalette",
            label: "Show palette",
            description: "Show a palette next to the color picker.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          }
        ]
      }
    }
  },
  C
], T = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.IconPicker",
    name: "Icon Picker Property Editor UI",
    element: () => import("./property-editor-ui-icon-picker.element-qXr1jVUN.js"),
    meta: {
      label: "Icon Picker",
      icon: "icon-autofill",
      group: "common"
    }
  }
], x = {
  type: "propertyEditorSchema",
  name: "Label",
  alias: "Umbraco.Label",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Label",
    settings: {
      properties: [
        {
          alias: "umbracoDataValueType",
          label: "Value type",
          description: "The type of value to store",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ValueType"
        }
      ]
    }
  }
}, O = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Label",
    name: "Label Property Editor UI",
    element: () => import("./property-editor-ui-label.element-D7V34zTu.js"),
    meta: {
      label: "Label",
      icon: "icon-readonly",
      group: "common",
      propertyEditorSchemaAlias: "Umbraco.Label",
      supportsReadOnly: !0
    }
  },
  x
], I = [
  {
    type: "propertyEditorSchema",
    name: "Multiple Text String",
    alias: "Umbraco.MultipleTextstring",
    meta: {
      defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MultipleTextString",
      settings: {
        properties: [
          {
            alias: "min",
            label: "Minimum",
            description: "Enter the minimum amount of text boxes to be displayed",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [{ alias: "min", value: 0 }]
          },
          {
            alias: "max",
            label: "Maximum",
            description: "Enter the maximum amount of text boxes to be displayed, enter 0 for unlimited",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [{ alias: "min", value: 0 }]
          }
        ],
        defaultData: [
          { alias: "min", value: 0 },
          { alias: "max", value: 0 }
        ]
      }
    }
  }
], w = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MultipleTextString",
    name: "Multiple Text String Property Editor UI",
    element: () => import("./property-editor-ui-multiple-text-string.element-B4aSqVAF.js"),
    meta: {
      label: "Multiple Text String",
      propertyEditorSchemaAlias: "Umbraco.MultipleTextstring",
      icon: "icon-ordered-list",
      group: "lists",
      supportsReadOnly: !0
    }
  },
  ...I
], k = [
  {
    type: "propertyEditorSchema",
    name: "Decimal",
    alias: "Umbraco.Decimal",
    meta: {
      defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Decimal",
      settings: {
        properties: [
          {
            alias: "min",
            label: "Minimum",
            description: "Enter the minimum amount of number to be entered",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Decimal",
            config: [{ alias: "step", value: "0.001" }]
          },
          {
            alias: "max",
            label: "Maximum",
            description: "Enter the maximum amount of number to be entered",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Decimal",
            config: [
              { alias: "placeholder", value: "∞" },
              { alias: "step", value: "0.001" }
            ]
          },
          {
            alias: "step",
            label: "Step size",
            description: "Enter the intervals amount between each step of number to be entered",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Decimal",
            config: [{ alias: "step", value: "0.001" }]
          }
        ]
      }
    }
  }
], R = [
  {
    type: "propertyEditorSchema",
    name: "Integer",
    alias: "Umbraco.Integer",
    meta: {
      defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
      settings: {
        properties: [
          {
            alias: "min",
            label: "Minimum",
            description: "Enter the minimum amount of number to be entered",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
          },
          {
            alias: "max",
            label: "Maximum",
            description: "Enter the maximum amount of number to be entered",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [{ alias: "placeholder", value: "∞" }]
          },
          {
            alias: "step",
            label: "Step size",
            description: "Enter the intervals amount between each step of number to be entered",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
          }
        ]
      }
    }
  }
], v = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Decimal",
    name: "Decimal Property Editor UI",
    element: () => import("./property-editor-ui-number.element-DnA_uDx9.js"),
    meta: {
      label: "Decimal",
      propertyEditorSchemaAlias: "Umbraco.Decimal",
      icon: "icon-autofill",
      group: "common",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "placeholder",
            label: "Placeholder text",
            description: "Enter the text to be displayed when the value is empty",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          }
        ],
        defaultData: [
          {
            alias: "step",
            value: "0.01"
          }
        ]
      }
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Integer",
    name: "Numeric Property Editor UI",
    element: () => import("./property-editor-ui-number.element-DnA_uDx9.js"),
    meta: {
      label: "Numeric",
      icon: "icon-autofill",
      group: "common",
      propertyEditorSchemaAlias: "Umbraco.Integer",
      supportsReadOnly: !0
    }
  },
  ...k,
  ...R
], L = {
  type: "propertyEditorSchema",
  name: "Radio Button List",
  alias: "Umbraco.RadioButtonList",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.RadioButtonList",
    settings: {
      properties: [
        {
          alias: "items",
          label: "Add option",
          description: "Add, remove or sort options for the list.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MultipleTextString"
        }
      ]
    }
  }
}, $ = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.RadioButtonList",
    name: "Radio Button List Property Editor UI",
    element: () => import("./property-editor-ui-radio-button-list.element-Bk2AXEMo.js"),
    meta: {
      label: "Radio Button List",
      propertyEditorSchemaAlias: "Umbraco.RadioButtonList",
      icon: "icon-target",
      group: "lists",
      supportsReadOnly: !0
    }
  },
  L
], M = {
  type: "propertyEditorSchema",
  name: "Slider",
  alias: "Umbraco.Slider",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Slider",
    settings: {
      properties: [
        {
          alias: "minVal",
          label: "Minimum value",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
        },
        {
          alias: "maxVal",
          label: "Maximum value",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
        }
      ],
      defaultData: [
        { alias: "minVal", value: 0 },
        { alias: "maxVal", value: 100 }
      ]
    }
  }
}, B = [
  {
    type: "propertyValuePreset",
    forPropertyEditorSchemaAlias: "Umbraco.Slider",
    alias: "Umb.PropertyValuePreset.Slider",
    name: "Property Editor Schema Slider Preset for Initial Values",
    api: () => import("./slider-property-value-preset-C4E7iABq.js")
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Slider",
    name: "Slider Property Editor UI",
    element: () => import("./property-editor-ui-slider.element-CgrlxP_U.js"),
    meta: {
      label: "Slider",
      propertyEditorSchemaAlias: "Umbraco.Slider",
      icon: "icon-navigation-horizontal",
      group: "common",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "enableRange",
            label: "Enable range",
            description: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "initVal1",
            label: "Initial value",
            description: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
          },
          {
            alias: "initVal2",
            label: "Initial value 2",
            description: "Used when range is enabled",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
          },
          {
            alias: "step",
            label: "Step increments",
            description: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
          }
        ],
        defaultData: [
          {
            alias: "initVal1",
            value: 0
          },
          {
            alias: "initVal2",
            value: 0
          },
          {
            alias: "step",
            value: 1
          }
        ]
      }
    }
  },
  M
], N = {
  type: "propertyEditorSchema",
  name: "Textarea",
  alias: "Umbraco.TextArea",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.TextArea",
    settings: {
      properties: [
        {
          alias: "maxChars",
          label: "Maximum allowed characters",
          description: "If empty - no character limit",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
          config: [{ alias: "min", value: 0 }]
        }
      ]
    }
  }
}, V = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.TextArea",
    name: "Text Area Property Editor UI",
    element: () => import("./property-editor-ui-textarea.element-Be4RFT1x.js"),
    meta: {
      label: "Text Area",
      propertyEditorSchemaAlias: "Umbraco.TextArea",
      icon: "icon-edit",
      group: "common",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "rows",
            label: "Number of rows",
            description: "If empty or zero, the textarea is set to auto-height",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [{ alias: "min", value: 0 }]
          },
          {
            alias: "minHeight",
            label: "Min height (pixels)",
            description: "Sets the minimum height of the textarea",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [{ alias: "min", value: 0 }]
          },
          {
            alias: "maxHeight",
            label: "Max height (pixels)",
            description: "Sets the maximum height of the textarea",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [{ alias: "min", value: 0 }]
          }
        ],
        defaultData: [{ alias: "rows", value: 10 }]
      }
    }
  },
  N
], _ = {
  type: "propertyEditorSchema",
  name: "Text Box",
  alias: "Umbraco.TextBox",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox",
    settings: {
      properties: [
        {
          alias: "maxChars",
          label: "Maximum allowed characters",
          description: "If empty, 512 character limit",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
        }
      ],
      defaultData: [
        {
          alias: "maxChars",
          value: 512
        }
      ]
    }
  }
}, F = {
  type: "propertyEditorSchema",
  name: "Email Address",
  alias: "Umbraco.EmailAddress",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.EmailAddress"
  }
}, e = {
  alias: "inputType",
  label: "Input type",
  description: "Predefined input type",
  propertyEditorUiAlias: "Umb.PropertyEditorUi.Label"
}, Q = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.TextBox",
    name: "Text Box Property Editor UI",
    element: () => import("./property-editor-ui-text-box.element-CCoLNEEb.js"),
    meta: {
      label: "Text Box",
      propertyEditorSchemaAlias: "Umbraco.TextBox",
      icon: "icon-autofill",
      group: "common",
      supportsReadOnly: !0,
      settings: {
        properties: [e],
        defaultData: [
          {
            alias: "inputType",
            value: "text"
          }
        ]
      }
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.EmailAddress",
    name: "Email Property Editor UI",
    element: () => import("./property-editor-ui-text-box.element-CCoLNEEb.js"),
    meta: {
      label: "Email",
      propertyEditorSchemaAlias: "Umbraco.EmailAddress",
      icon: "icon-message",
      group: "common",
      supportsReadOnly: !0,
      settings: {
        properties: [e],
        defaultData: [
          {
            alias: "inputType",
            value: "email"
          }
        ]
      }
    }
  },
  _,
  F
], z = {
  type: "propertyEditorSchema",
  name: "True/False",
  alias: "Umbraco.TrueFalse",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  }
}, Y = [
  {
    type: "propertyValuePreset",
    forPropertyEditorSchemaAlias: "Umbraco.TrueFalse",
    alias: "Umb.PropertyValuePreset.TrueFalse",
    name: "Property Editor Schema True/False Preset for Initial State",
    api: () => import("./true-false-property-value-preset-CxWCkYDy.js")
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Toggle",
    name: "Toggle Property Editor UI",
    element: () => import("./property-editor-ui-toggle.element-C9tAAcPd.js"),
    meta: {
      label: "Toggle",
      propertyEditorSchemaAlias: "Umbraco.TrueFalse",
      icon: "icon-checkbox",
      group: "common",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "default",
            label: "Preset value",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
            config: [
              {
                alias: "ariaLabel",
                value: "toggle for the initial state of this data type"
              }
            ]
          },
          {
            alias: "showLabels",
            label: "Show on/off labels",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
            config: [
              {
                alias: "ariaLabel",
                value: "toggle for weather if label should be displayed"
              }
            ]
          },
          {
            alias: "labelOn",
            label: "Label On",
            description: "Displays text when enabled.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "labelOff",
            label: "Label Off",
            description: "Displays text when disabled.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "ariaLabel",
            label: "Screen Reader Label",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          }
        ]
      }
    }
  },
  z
], K = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ContentPicker.Source",
  name: "Content Picker Source Property Editor UI",
  element: () => import("./property-editor-ui-content-picker-source.element-C4G84NM0.js"),
  meta: {
    label: "Content Picker Source",
    icon: "icon-page-add",
    group: "pickers"
  }
}, q = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ContentPicker.SourceType",
  name: "Content Picker Source Type Property Editor UI",
  element: () => import("./property-editor-ui-content-picker-source-type.element-DN_pEc-t.js"),
  meta: {
    label: "Content Picker Source Type Picker",
    icon: "icon-page-add",
    group: "pickers"
  }
}, W = {
  type: "propertyEditorSchema",
  name: "Multi Node Tree Picker",
  alias: "Umbraco.MultiNodeTreePicker",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.ContentPicker",
    settings: {
      properties: [
        {
          alias: "minNumber",
          label: "Minimum number of items",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
          config: [{ alias: "min", value: 0 }]
        },
        {
          alias: "maxNumber",
          label: "Maximum number of items",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
          config: [{ alias: "min", value: 0 }]
        },
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore user start nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "startNode",
          label: "Node type",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ContentPicker.Source"
        }
      ],
      defaultData: [
        { alias: "minNumber", value: 0 },
        { alias: "maxNumber", value: 0 }
      ]
    }
  }
}, H = "Umb.Modal.ContentPicker.DocumentRoot.OriginPicker", G = "Umb.Modal.ContentPicker.DocumentRoot.QueryStepPicker", j = [
  {
    type: "modal",
    alias: H,
    name: "Choose an origin",
    element: () => import("./dynamic-root-origin-picker-modal.element-DWdsQCur.js")
  },
  {
    type: "modal",
    alias: G,
    name: "Append step to query",
    element: () => import("./dynamic-root-query-step-picker-modal.element-BdPoYXs0.js")
  },
  {
    type: "dynamicRootOrigin",
    alias: "Umb.DynamicRootOrigin.Root",
    name: "Dynamic Root Origin: Root",
    meta: {
      originAlias: "Root",
      label: "Root",
      description: "Root node of this editing session.",
      icon: "icon-home"
    },
    weight: 100
  },
  {
    type: "dynamicRootOrigin",
    alias: "Umb.DynamicRootOrigin.Parent",
    name: "Dynamic Root Origin: Parent",
    meta: {
      originAlias: "Parent",
      label: "Parent",
      description: "The parent node of the source in this editing session.",
      icon: "icon-page-up"
    },
    weight: 90
  },
  {
    type: "dynamicRootOrigin",
    alias: "Umb.DynamicRootOrigin.Current",
    name: "Dynamic Root Origin: Current",
    meta: {
      originAlias: "Current",
      label: "Current",
      description: "The content node that is source for this editing session.",
      icon: "icon-document"
    },
    weight: 80
  },
  {
    type: "dynamicRootOrigin",
    alias: "Umb.DynamicRootOrigin.Site",
    name: "Dynamic Root Origin: Site",
    meta: {
      originAlias: "Site",
      label: "Site",
      description: "Find nearest node with a hostname.",
      icon: "icon-home"
    },
    weight: 70
  },
  {
    type: "dynamicRootOrigin",
    alias: "Umb.DynamicRootOrigin.ByKey",
    name: "Dynamic Root Origin: By Key",
    meta: {
      originAlias: "ByKey",
      label: "Specific Node",
      description: "Pick a specific Node as the origin for this query.",
      icon: "icon-wand"
    },
    weight: 60
  },
  {
    type: "dynamicRootQueryStep",
    alias: "Umb.DynamicRootQueryStep.NearestAncestorOrSelf",
    name: "Dynamic Root Query Step: Nearest Ancestor Or Self",
    meta: {
      queryStepAlias: "NearestAncestorOrSelf",
      label: "Nearest Ancestor Or Self",
      description: "Query the nearest ancestor or self that fits with one of the configured types.",
      icon: "icon-arrow-up"
    },
    weight: 100
  },
  {
    type: "dynamicRootQueryStep",
    alias: "Umb.DynamicRootQueryStep.FurthestAncestorOrSelf",
    name: "Dynamic Root Query Step: Furthest Ancestor Or Self",
    meta: {
      queryStepAlias: "FurthestAncestorOrSelf",
      label: "Furthest Ancestor Or Self",
      description: "Query the furthest ancestor or self that fits with one of the configured types.",
      icon: "icon-arrow-up"
    },
    weight: 90
  },
  {
    type: "dynamicRootQueryStep",
    alias: "Umb.DynamicRootQueryStep.NearestDescendantOrSelf",
    name: "Dynamic Root Query Step: Nearest Descendant Or Self",
    meta: {
      queryStepAlias: "NearestDescendantOrSelf",
      label: "Nearest Descendant Or Self",
      description: "Query the nearest descendant or self that fits with one of the configured types.",
      icon: "icon-arrow-down"
    },
    weight: 80
  },
  {
    type: "dynamicRootQueryStep",
    alias: "Umb.DynamicRootQueryStep.FurthestDescendantOrSelf",
    name: "Dynamic Root Query Step: Furthest Descendant Or Self",
    meta: {
      queryStepAlias: "FurthestDescendantOrSelf",
      label: "Furthest Descendant Or Self",
      description: "Query the furthest descendant or self that fits with one of the configured types.",
      icon: "icon-arrow-down"
    },
    weight: 70
  }
], J = [...j], X = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ContentPicker",
  name: "Content Picker Property Editor UI",
  element: () => import("./property-editor-ui-content-picker.element-DWmuuQDI.js"),
  meta: {
    label: "Content Picker",
    icon: "icon-page-add",
    group: "pickers",
    propertyEditorSchemaAlias: "Umbraco.MultiNodeTreePicker",
    supportsReadOnly: !0,
    settings: {
      properties: [
        {
          alias: "filter",
          label: "Allow items of type",
          description: "Select the applicable types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ContentPicker.SourceType"
        },
        {
          alias: "showOpenButton",
          label: "Show open button",
          description: "Opens the node in a dialog",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, Z = [K, q], ee = [X, ...Z, W, ...J], te = [
  ...p,
  ...b,
  ...g,
  ...h,
  ...A,
  ...D,
  ...T,
  ...O,
  ...w,
  ...v,
  ...$,
  ...B,
  ...V,
  ...Q,
  ...Y,
  ...ee,
  t,
  i,
  r,
  o,
  a,
  l,
  s
];
export {
  H as U,
  G as a,
  te as m
};
//# sourceMappingURL=manifests-Bbe0yDH2.js.map
