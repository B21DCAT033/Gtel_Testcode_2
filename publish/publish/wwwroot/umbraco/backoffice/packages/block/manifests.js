import { U as i } from "./index-i0dr96mt.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as o, UmbSubmitWorkspaceAction as a } from "@umbraco-cms/backoffice/workspace";
import { k as e, l as b, c as p, j as c, m as t } from "./index-Cc47Hgez.js";
import { UMB_BLOCK_CLIPBOARD_ENTRY_VALUE_TYPE as r, UmbStandardBlockValueResolver as B } from "@umbraco-cms/backoffice/block";
import { UMB_WRITABLE_PROPERTY_CONDITION_ALIAS as l, UMB_PROPERTY_HAS_VALUE_CONDITION_ALIAS as U } from "@umbraco-cms/backoffice/property";
import { a as d, U as m, e as y } from "./index-BbCqfSen.js";
import { d as k, c as u } from "./index-D4Ltu24Y.js";
const E = {
  type: "modal",
  alias: "Umb.Modal.ManifestViewer",
  name: "Manifest Viewer Modal",
  element: () => import("./manifest-viewer-modal.element-z-c12FK0.js")
}, C = [
  {
    type: "condition",
    name: "Block Has Settings Condition",
    alias: "Umb.Condition.BlockWorkspaceHasSettings",
    api: () => import("./block-workspace-has-settings.condition-B-b9t_qZ.js")
  },
  {
    type: "condition",
    name: "Block Show Content Edit Condition",
    alias: "Umb.Condition.BlockEntryShowContentEdit",
    api: () => import("./block-entry-show-content-edit.condition-m2i8VsF6.js")
  },
  {
    type: "condition",
    name: "Block Workspace Is Exposed Condition",
    alias: "Umb.Condition.BlockWorkspaceIsExposed",
    api: () => import("./block-workspace-is-exposed.condition-BpAiLyiw.js")
  }
], P = [
  {
    type: "modal",
    alias: "Umb.Modal.BlockCatalogue",
    name: "Block Catalogue Modal",
    element: () => import("./block-catalogue-modal.element-B2pvOiFo.js")
  }
], g = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Block.SubmitCreate",
    name: "Submit Create Block Workspace Action",
    api: a,
    meta: {
      label: "#general_create",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        match: i
      },
      {
        alias: "Umb.Condition.BlockWorkspaceIsExposed",
        match: !1
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Block.SubmitUpdate",
    name: "Submit Update Block Workspace Action",
    api: a,
    meta: {
      label: "#general_update",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        match: i
      },
      {
        alias: "Umb.Condition.BlockWorkspaceIsExposed"
      }
    ]
  },
  {
    type: "workspace",
    kind: "routable",
    name: "Block Workspace",
    alias: i,
    api: () => import("./block-workspace.context-Bg8l3Wpy.js"),
    meta: {
      entityType: "block"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Block.Content",
    name: "Block Workspace Content View",
    element: () => import("./block-workspace-view-edit.element-CuptSWUT.js"),
    weight: 1e3,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "icon-document",
      blockElementManagerName: "content"
    },
    conditions: [
      {
        alias: o,
        match: i
      }
    ],
    TODO_conditions: [
      {
        alias: "Umb.Condition.BlockEntryShowContentEdit"
      }
    ]
  },
  // TODO: Fix manifest types so it support additional properties.
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Block.Settings",
    name: "Block Workspace Settings View",
    element: () => import("./block-workspace-view-edit.element-CuptSWUT.js"),
    weight: 900,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings",
      blockElementManagerName: "settings"
    },
    conditions: [
      {
        alias: o,
        match: i
      },
      {
        alias: "Umb.Condition.BlockWorkspaceHasSettings"
      }
    ]
  }
], T = [...P, ...g, ...C], A = [
  {
    type: "clipboardCopyPropertyValueTranslator",
    alias: "Umb.ClipboardCopyPropertyValueTranslator.BlockGridToBlock",
    name: "Block Grid to Block Clipboard Copy Property Value Translator",
    api: () => import("./block-grid-to-block-copy-translator-F3M5YihG.js"),
    fromPropertyEditorUi: e,
    toClipboardEntryValueType: r
  },
  {
    type: "clipboardPastePropertyValueTranslator",
    alias: "Umb.ClipboardPastePropertyValueTranslator.BlockToBlockGrid",
    name: "Block To Block Grid Clipboard Paste Property Value Translator",
    weight: 900,
    api: () => import("./block-to-block-grid-paste-translator-DOjK_pVB.js"),
    fromClipboardEntryValueType: r,
    toPropertyEditorUi: e
  }
], f = [
  {
    type: "clipboardCopyPropertyValueTranslator",
    alias: "Umb.ClipboardCopyPropertyValueTranslator.BlockGridToGridBlock",
    name: "Block Grid To Grid Block Clipboard Copy Property Value Translator",
    api: () => import("./block-grid-to-grid-block-copy-translator-zBCfuWDH.js"),
    fromPropertyEditorUi: e,
    toClipboardEntryValueType: b
  },
  {
    type: "clipboardPastePropertyValueTranslator",
    alias: "Umb.ClipboardPastePropertyValueTranslator.GridBlockToBlockGrid",
    name: "Grid Block To Block Grid Clipboard Paste Property Value Translator",
    api: () => import("./grid-block-to-block-grid-paste-translator-CaMZIJtM.js"),
    fromClipboardEntryValueType: b,
    weight: 1e3,
    toPropertyEditorUi: e
  }
], n = [e], _ = [
  {
    type: "propertyContext",
    kind: "clipboard",
    alias: "Umb.PropertyContext.BlockGrid.Clipboard",
    name: "Block Grid Clipboard Property Context",
    forPropertyEditorUis: n
  },
  {
    type: "propertyAction",
    kind: "copyToClipboard",
    alias: "Umb.PropertyAction.BlockGrid.Clipboard.Copy",
    name: "Block Grid Copy To Clipboard Property Action",
    forPropertyEditorUis: n,
    conditions: [
      {
        alias: l
      },
      {
        alias: U
      }
    ]
  },
  {
    type: "propertyAction",
    kind: "pasteFromClipboard",
    alias: "Umb.PropertyAction.BlockGrid.Clipboard.Paste",
    name: "Block Grid Paste From Clipboard Property Action",
    forPropertyEditorUis: n,
    conditions: [
      {
        alias: l
      }
    ]
  },
  ...A,
  ...f
], L = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockGridAreaType.Settings",
    name: "Block Grid Area Type Workspace Settings View",
    element: () => import("./settings.element-CrANA0vb.js"),
    weight: 1e3,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: o,
        match: p
      }
    ]
  }
], S = [...L], V = [
  ...S,
  {
    type: "workspace",
    kind: "routable",
    name: "Block Grid Area Type Workspace",
    alias: p,
    api: () => import("./block-grid-area-type-workspace.context-C2qy7QTH.js"),
    meta: {
      entityType: "block-grid-area-type"
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.BlockGridAreaType.Save",
    name: "Save Block Grid Area Type Workspace Action",
    api: a,
    meta: {
      label: "#general_submit",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        match: p
      }
    ]
  }
], w = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridAreaTypePermission",
  name: "Block Grid Area Type Permission Configuration Property Editor UI",
  element: () => import("./block-grid-area-type-permission.element-G1xJi9RK.js"),
  meta: {
    label: "Block Grid Area Type Permissions",
    icon: "icon-document",
    group: "common"
  }
}, G = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridAreasConfig",
  name: "Block Grid Areas Configuration Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-areas-config.element-QPzA6bia.js"),
  meta: {
    label: "Block Grid Areas Configuration",
    icon: "icon-document",
    group: "common"
  }
}, h = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridColumnSpan",
  name: "Block Grid Column Span Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-column-span.element-dFeyap8u.js"),
  meta: {
    label: "Block Grid Column Span",
    icon: "icon-document",
    group: "common"
  }
}, I = {
  type: "propertyEditorSchema",
  name: "Block Grid",
  alias: "Umbraco.BlockGrid",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.BlockGrid",
    settings: {
      properties: [
        {
          alias: "blocks",
          label: "Blocks",
          description: "Define Blocks based on Element Types.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockGridTypeConfiguration"
        },
        {
          alias: "validationLimit",
          label: "Amount",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.NumberRange",
          config: [{ alias: "validationRange", value: { min: 0, max: 1 / 0 } }],
          weight: 100
        }
      ],
      defaultData: [
        {
          alias: "gridColumns",
          value: 12
        }
      ]
    }
  }
}, R = [
  {
    type: "propertyEditorUi",
    alias: e,
    name: "Block Grid Property Editor UI",
    element: () => import("./property-editor-ui-block-grid.element-D9UeTgTv.js"),
    meta: {
      label: "Block Grid",
      propertyEditorSchemaAlias: c,
      icon: "icon-layout",
      group: "richContent",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "blockGroups",
            label: "",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockTypeGroupConfiguration",
            weight: 1
          },
          {
            alias: "useLiveEditing",
            label: "Live editing mode",
            description: "Live update content when editing in overlay",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "maxPropertyWidth",
            label: "Editor width",
            description: "Optional css overwrite. (example: 1200px or 100%)",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "createLabel",
            label: "Create Button Label",
            description: "Override the label text for adding a new block, Example Add Widget",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          },
          {
            alias: "gridColumns",
            label: "Grid Columns",
            description: "Set the number of columns for the layout.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
            config: [
              { alias: "min", value: 0 },
              { alias: "placeholder", value: "12" }
            ]
          },
          {
            alias: "layoutStylesheet",
            label: "Layout Stylesheet",
            description: "Override default stylesheet for backoffice layout.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockGridLayoutStylesheet",
            config: [
              {
                alias: "singleItemMode",
                value: !0
              }
            ]
          }
        ]
      }
    }
  },
  I,
  {
    type: "propertyValueResolver",
    alias: "Umb.PropertyValueResolver.BlockGrid",
    name: "Block Value Resolver",
    api: B,
    meta: {
      editorAlias: c
    }
  }
], O = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockTypeGroupConfiguration",
  name: "Block Grid Group Configuration Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-group-configuration.element-Bikj-HJU.js"),
  meta: {
    label: "",
    icon: "icon-box-alt",
    group: "common"
  }
}, v = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridLayoutStylesheet",
  name: "Block Grid Layout Stylesheet Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-layout-stylesheet.element-1-vpOGIY.js"),
  meta: {
    label: "Block Grid Layout Stylesheet",
    icon: "icon-document",
    group: "common"
  }
}, W = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockGridTypeConfiguration",
  name: "Block Grid Block Configuration Property Editor UI",
  element: () => import("./property-editor-ui-block-grid-type-configuration.element-Dxl47t60.js"),
  meta: {
    label: "Block Grid Block Configuration",
    icon: "icon-autofill",
    group: "blocks"
  }
}, $ = [
  w,
  G,
  h,
  ...R,
  O,
  v,
  W
], x = [
  {
    type: "propertyValueCloner",
    name: "Block Grid Value Cloner",
    alias: "Umb.PropertyValueCloner.BlockGrid",
    api: () => import("./property-value-cloner-block-grid.cloner-BtA-N4bp.js"),
    forEditorAlias: c
  }
], M = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.Grid.Settings",
    name: "Block Grid Type Workspace Settings View",
    element: () => import("./block-grid-type-workspace-view-settings.element-CPHaBV-O.js"),
    weight: 1e3,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: o,
        match: t
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.Grid.Areas",
    name: "Block Grid Type Workspace Areas View",
    element: () => import("./block-grid-type-workspace-view-areas.element-OIp0bAfI.js"),
    weight: 1e3,
    meta: {
      label: "#blockEditor_tabAreas",
      pathname: "areas",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: o,
        match: t
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.Grid.Advance",
    name: "Block Grid Type Workspace Advance View",
    element: () => import("./block-grid-type-workspace-view-advanced.element-DLlndYh7.js"),
    weight: 1e3,
    meta: {
      label: "#blockEditor_tabAdvanced",
      pathname: "advanced",
      icon: "icon-wrench"
    },
    conditions: [
      {
        alias: o,
        match: t
      }
    ]
  }
], D = [
  ...M,
  {
    type: "workspace",
    kind: "routable",
    name: "Block Grid Type Workspace",
    alias: t,
    api: () => import("./block-type-workspace.context-CjjqOYOo.js"),
    meta: {
      entityType: "block-grid-type"
    }
  }
], K = [
  ..._,
  ...V,
  ...$,
  ...x,
  ...D
], Y = [
  {
    type: "clipboardCopyPropertyValueTranslator",
    alias: "Umb.ClipboardCopyPropertyValueTranslator.BlockListToBlock",
    name: "Block List To Block Clipboard Copy Property Value Translator",
    api: () => import("./block-list-to-block-copy-translator-Ce8P5rOu.js"),
    fromPropertyEditorUi: d,
    toClipboardEntryValueType: r
  }
], N = [
  {
    type: "clipboardPastePropertyValueTranslator",
    alias: "Umb.ClipboardPastePropertyValueTranslator.BlockToBlockList",
    name: "Block To Block List Clipboard Paste Property Value Translator",
    api: () => import("./block-to-block-list-paste-translator-Cy49ncAo.js"),
    fromClipboardEntryValueType: r,
    toPropertyEditorUi: d
  }
], s = [d], H = [
  {
    type: "propertyContext",
    kind: "clipboard",
    alias: "Umb.PropertyContext.BlockList.Clipboard",
    name: "Block List Clipboard Property Context",
    forPropertyEditorUis: s
  },
  {
    type: "propertyAction",
    kind: "copyToClipboard",
    alias: "Umb.PropertyAction.BlockList.Clipboard.Copy",
    name: "Block List Copy To Clipboard Property Action",
    forPropertyEditorUis: s,
    conditions: [
      {
        alias: l
      },
      {
        alias: U
      }
    ]
  },
  {
    type: "propertyAction",
    kind: "pasteFromClipboard",
    alias: "Umb.PropertyAction.BlockList.Clipboard.Paste",
    name: "Block List Paste From Clipboard Property Action",
    forPropertyEditorUis: s,
    conditions: [
      {
        alias: l
      }
    ]
  },
  ...Y,
  ...N
], F = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockListTypeConfiguration",
  name: "Block List Type Configuration Property Editor UI",
  element: () => import("./property-editor-ui-block-list-type-configuration.element-B8sABBM_.js"),
  meta: {
    label: "Block List Type Configuration",
    icon: "icon-autofill",
    group: "common"
  }
}, q = {
  type: "propertyEditorSchema",
  name: "Block List",
  alias: "Umbraco.BlockList",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.BlockList",
    settings: {
      properties: [
        {
          alias: "blocks",
          label: "Available Blocks",
          description: "Define the available blocks.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockListTypeConfiguration"
        },
        {
          alias: "validationLimit",
          label: "Amount",
          description: "Set a required range of blocks",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.NumberRange",
          config: [{ alias: "validationRange", value: { min: 0 } }]
        }
      ]
    }
  }
}, j = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.BlockList",
    name: "Block List Property Editor UI",
    element: () => import("./property-editor-ui-block-list.element-Bp7dEkly.js"),
    meta: {
      label: "Block List",
      propertyEditorSchemaAlias: m,
      icon: "icon-thumbnail-list",
      group: "lists",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "useSingleBlockMode",
            label: "Single block mode",
            description: `When in Single block mode, the output will be BlockListItem<>, instead of BlockListModel.

**NOTE:**
Single block mode requires a maximum of one available block, and an amount set to minimum 1 and maximum 1 blocks.`,
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "useLiveEditing",
            label: "Live editing mode",
            description: "Live editing in editor overlays for live updated custom views or labels using custom expression.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "useInlineEditingAsDefault",
            label: "Inline editing mode",
            description: "Use the inline editor as the default block view.",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
          },
          {
            alias: "maxPropertyWidth",
            label: "Property editor width",
            description: "Optional CSS override, example: 800px or 100%",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
          }
        ]
      }
    }
  },
  {
    type: "propertyValueResolver",
    alias: "Umb.PropertyValueResolver.BlockList",
    name: "Block Value Resolver",
    api: B,
    meta: {
      editorAlias: m
    }
  },
  q
], z = [F, ...j], J = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.List.Settings",
    name: "Block List Type Workspace Settings View",
    element: () => import("./block-list-type-workspace-view.element-D92IfGrS.js"),
    weight: 1e3,
    meta: {
      label: "#blockEditor_tabBlockSettings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: o,
        match: y
      }
    ]
  }
], Q = [
  ...J,
  {
    type: "workspace",
    kind: "routable",
    name: "Block List Type Workspace",
    alias: y,
    api: () => import("./block-type-workspace.context-CjjqOYOo.js"),
    meta: {
      entityType: "block-list-type"
    }
  }
], X = [
  {
    type: "propertyValueCloner",
    name: "Block List Value Cloner",
    alias: "Umb.PropertyValueCloner.BlockList",
    api: () => import("./property-value-cloner-block-list.cloner-Cf4j7Y6X.js"),
    forEditorAlias: m
  }
], Z = [
  ...H,
  ...X,
  ...z,
  ...Q
], oo = [
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.BlockType.RTE.Settings",
    name: "Block List Type Workspace Settings View",
    element: () => import("./block-rte-type-workspace-view.element-I8Qlzapc.js"),
    weight: 1e3,
    meta: {
      label: "#general_settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: o,
        match: k
      }
    ]
  }
], eo = [
  ...oo,
  {
    type: "workspace",
    kind: "routable",
    name: "Block Rte Type Workspace",
    alias: k,
    api: () => import("./block-type-workspace.context-CjjqOYOo.js"),
    meta: {
      entityType: "block-rte-type"
    }
  }
], io = [
  {
    type: "propertyValueCloner",
    name: "RTE Block Value Cloner",
    alias: "Umb.PropertyValueCloner.BlockRte",
    api: () => import("./property-value-cloner-block-rte.cloner-Dw3W7FpE.js"),
    forEditorAlias: u
  }
], to = [...eo, ...io], ao = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.BlockType.Save",
    name: "Save Block Type Workspace Action",
    api: a,
    meta: {
      label: "#general_submit",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: o,
        oneOf: [
          t,
          y,
          k
        ]
      }
    ]
  }
], ro = [...ao], ko = [
  //manifest,
  ...T,
  ...ro,
  ...Z,
  ...K,
  ...to,
  E
];
export {
  ko as manifests
};
//# sourceMappingURL=manifests.js.map
