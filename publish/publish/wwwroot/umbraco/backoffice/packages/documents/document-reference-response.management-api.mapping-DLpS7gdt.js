import { d as n } from "./manifests-ByHRH93l.js";
import { DocumentVariantStateModel as m } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
class u extends i {
  async map(e) {
    return {
      documentType: {
        alias: e.documentType.alias,
        icon: e.documentType.icon,
        name: e.documentType.name
      },
      entityType: n,
      id: e.id,
      name: e.name,
      published: e.published,
      // TODO: this is a hardcoded array until the server can return the correct variants array
      variants: [
        {
          culture: null,
          name: e.name ?? "",
          state: e.published ? m.PUBLISHED : null
        }
      ],
      unique: e.id
    };
  }
}
export {
  u as UmbDocumentReferenceResponseManagementApiDataMapping,
  u as api
};
//# sourceMappingURL=document-reference-response.management-api.mapping-DLpS7gdt.js.map
