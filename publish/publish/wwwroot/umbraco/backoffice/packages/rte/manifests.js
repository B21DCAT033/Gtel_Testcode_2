import { U as a } from "./constants-CCLuR4UJ.js";
import { UmbBlockValueResolver as t } from "@umbraco-cms/backoffice/block";
const o = {
  type: "propertyEditorSchema",
  name: "Rich Text",
  alias: "Umbraco.RichText",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap",
    settings: {
      properties: [
        {
          alias: "blocks",
          label: "#rte_config_blocks",
          description: "{#rte_config_blocks_description}",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockRteTypeConfiguration",
          weight: 80
        },
        {
          alias: "mediaParentId",
          label: "#rte_config_mediaParentId",
          description: "{#rte_config_mediaParentId_description}",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaEntityPicker",
          config: [{ alias: "validationLimit", value: { min: 0, max: 1 } }],
          weight: 90
        },
        {
          alias: "ignoreUserStartNodes",
          label: "#rte_config_ignoreUserStartNodes",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
          weight: 100
        }
      ]
    }
  }
};
class r extends t {
  async processValues(e, i) {
    return e.value ? {
      ...e,
      value: {
        ...e.value,
        blocks: await this._processValueBlockData(e.value.blocks, i)
      }
    } : e;
  }
  async processVariants(e, i) {
    return e.value ? {
      ...e,
      value: {
        ...e.value,
        blocks: await this._processVariantBlockData(e.value.blocks, i)
      }
    } : e;
  }
}
const s = {
  type: "propertyValueResolver",
  alias: "Umb.PropertyValueResolver.RichTextBlocks",
  name: "Block Value Resolver",
  api: r,
  forEditorAlias: a
}, d = [
  o,
  s
];
export {
  d as manifests
};
//# sourceMappingURL=manifests.js.map
