import { h as n } from "./input-upload-field.element-DpMbvzUB.js";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
class r extends i {
  async map(e) {
    return {
      entityType: n,
      id: e.id,
      mediaType: {
        alias: e.mediaType.alias,
        icon: e.mediaType.icon,
        name: e.mediaType.name
      },
      name: e.name,
      // TODO: this is a hardcoded array until the server can return the correct variants array
      variants: [
        {
          culture: null,
          name: e.name ?? ""
        }
      ],
      unique: e.id
    };
  }
}
export {
  r as UmbMediaReferenceResponseManagementApiDataMapping,
  r as api
};
//# sourceMappingURL=media-reference-response.management-api.mapping-_LfC0fQs.js.map
