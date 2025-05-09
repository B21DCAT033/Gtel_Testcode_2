import { d as u } from "./manifests-ByHRH93l.js";
import { DirectionModel as n, DocumentService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecuteAndNotify as d } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class D {
  #e;
  constructor(e) {
    this.#e = e;
  }
  async getCollection(e) {
    if (!e.unique)
      throw new Error("Unique ID is required to fetch a collection.");
    const c = {
      id: e.unique,
      dataTypeId: e.dataTypeId ?? "",
      orderBy: e.orderBy ?? "updateDate",
      orderCulture: e.orderCulture ?? "en-US",
      orderDirection: e.orderDirection === "asc" ? n.ASCENDING : n.DESCENDING,
      filter: e.filter,
      skip: e.skip || 0,
      take: e.take || 100
    }, { data: r, error: i } = await d(this.#e, l.getCollectionDocumentById(c));
    return r ? { data: { items: r.items.map((t) => {
      const o = t.variants[0];
      return {
        unique: t.id,
        entityType: u,
        contentTypeAlias: t.documentType.alias,
        createDate: new Date(o.createDate),
        creator: t.creator,
        icon: t.documentType.icon,
        isProtected: t.isProtected,
        isTrashed: t.isTrashed,
        name: o.name,
        sortOrder: t.sortOrder,
        state: o.state,
        updateDate: new Date(o.updateDate),
        updater: t.updater,
        values: t.values.map((a) => ({ alias: a.alias, value: a.value })),
        documentType: {
          unique: t.documentType.id,
          icon: t.documentType.icon,
          alias: t.documentType.alias
        },
        variants: t.variants.map((a) => ({
          name: a.name,
          culture: a.culture ?? null,
          state: a.state
        }))
      };
    }), total: r.total } } : { error: i };
  }
}
class h extends p {
  #e;
  constructor(e) {
    super(e), this.#e = new D(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  h as UmbDocumentCollectionRepository,
  h as default
};
//# sourceMappingURL=document-collection.repository-COKnMQHq.js.map
