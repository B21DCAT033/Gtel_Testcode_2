import { U as t, a as e } from "./constants-BHP6V-qT.js";
const o = [
  {
    type: "repository",
    alias: t,
    name: "Tags Repository",
    api: () => import("./tag.repository-wQ3wpabd.js")
  },
  {
    type: "store",
    alias: e,
    name: "Tags Store",
    api: () => import("./constants-BHP6V-qT.js").then((a) => a.t)
  }
], r = {
  type: "propertyEditorSchema",
  name: "Tags",
  alias: "Umbraco.Tags",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Tags",
    settings: {
      properties: [
        {
          alias: "group",
          label: "Define a tag group",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
        },
        {
          alias: "storageType",
          label: "Storage Type",
          description: "",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Select",
          config: [
            {
              alias: "items",
              value: ["Csv", "Json"]
            }
          ]
        }
      ],
      defaultData: [
        {
          alias: "group",
          value: "default"
        },
        {
          alias: "storageType",
          value: "Json"
        }
      ]
    }
  }
}, i = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.Tags",
    name: "Tags Property Editor UI",
    element: () => import("./property-editor-ui-tags.element-CpXFqu3_.js"),
    meta: {
      label: "Tags",
      propertyEditorSchemaAlias: "Umbraco.Tags",
      icon: "icon-tags",
      group: "common",
      supportsReadOnly: !0
    }
  },
  r
], s = [...i], l = [...o, ...s];
export {
  l as manifests
};
//# sourceMappingURL=manifests.js.map
