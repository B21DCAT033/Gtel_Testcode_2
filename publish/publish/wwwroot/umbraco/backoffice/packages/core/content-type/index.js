import { d as G, U as K, b as $, a as j, c as Q } from "../content-type-move-root-containers-into-first-tab-helper.class-BXhoyS1X.js";
import { U as J, a as Z } from "../content-type-property-structure-helper.class-CrCAJBRs.js";
import { UmbRepositoryBase as w } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify as m } from "@umbraco-cms/backoffice/resources";
import { UmbId as l } from "@umbraco-cms/backoffice/id";
import { UmbArrayState as d, createObservablePart as u, partialUpdateFrozenArray as y, appendToFrozenArray as T, filterFrozenArray as O } from "@umbraco-cms/backoffice/observable-api";
import { incrementString as b } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as g } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionApiInitializer as v } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as P } from "@umbraco-cms/backoffice/extension-registry";
import { UmbEntityDetailWorkspaceContextBase as E } from "@umbraco-cms/backoffice/workspace";
import { UMB_ACTION_EVENT_CONTEXT as f } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as S, UmbRequestReloadStructureForEntityEvent as _ } from "@umbraco-cms/backoffice/entity-action";
import { U as et } from "../property-type-based-property.element-B_7ZydA1.js";
class L extends w {
  #n;
  constructor(e, r) {
    super(e), this.#n = new r(e);
  }
  /**
   * Returns a promise with the allowed children of a content type
   * @param {string} unique
   * @returns {*}
   * @memberof UmbContentTypeStructureRepositoryBase
   */
  requestAllowedChildrenOf(e) {
    return this.#n.getAllowedChildrenOf(e);
  }
}
class H {
  #n;
  #e;
  #i;
  /**
   * Creates an instance of UmbContentTypeStructureServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbItemServerDataSourceBase
   */
  constructor(e, r) {
    this.#n = e, this.#e = r.getAllowedChildrenOf, this.#i = r.mapper;
  }
  /**
   * Returns a promise with the allowed content types for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbContentTypeStructureServerDataSourceBase
   */
  async getAllowedChildrenOf(e) {
    const { data: r, error: t } = await m(this.#n, this.#e(e));
    return r ? { data: { items: r.items.map((s) => this.#i(s)), total: r.total } } : { error: t };
  }
}
const N = (p, e, r) => r.indexOf(p) === e;
class A extends g {
  constructor(e, r) {
    super(e), this.#e = new Promise((t) => {
      this.#n = t;
    }), this.#a = new Promise((t) => {
      this.#i ? t() : this.#u = t;
    }), this.#o = new Array(), this.#t = new d([], (t) => t.unique), this.contentTypes = this.#t.asObservable(), this.ownerContentType = this.#t.asObservablePart(
      (t) => t.find((n) => n.unique === this.#r)
    ), this.ownerContentTypeAlias = u(this.ownerContentType, (t) => t?.alias), this.ownerContentTypeName = u(this.ownerContentType, (t) => t?.name), this.ownerContentTypeCompositions = u(this.ownerContentType, (t) => t?.compositions), this.#h = this.#t.asObservablePart((t) => t.flatMap((n) => n.containers ?? [])), this.contentTypeProperties = this.#t.asObservablePart((t) => t.flatMap((n) => n.properties ?? [])), this.contentTypeDataTypeUniques = this.#t.asObservablePart((t) => t.flatMap((n) => n.properties?.map((s) => s.dataType.unique) ?? []).filter(N)), this.contentTypeHasProperties = this.#t.asObservablePart((t) => t.some((n) => n.properties.length > 0)), this.contentTypePropertyAliases = u(
      this.contentTypeProperties,
      (t) => t.map((n) => n.alias)
    ), this.contentTypeUniques = this.#t.asObservablePart((t) => t.map((n) => n.unique)), this.contentTypeAliases = this.#t.asObservablePart((t) => t.map((n) => n.alias)), this.variesByCulture = u(this.ownerContentType, (t) => t?.variesByCulture), this.variesBySegment = u(this.ownerContentType, (t) => t?.variesBySegment), this.#s = new d(
      [],
      (t) => t.id
    ), typeof r == "string" ? this.#f(r) : (this.#i = r, this.#u?.()), this.observe(this.ownerContentTypeCompositions, (t) => {
      this.#d(t);
    }), this.observe(this.#h, (t) => {
      this.#s.setValue(t);
    });
  }
  #n;
  #e;
  #i;
  #u;
  #a;
  async whenLoaded() {
    return await this.#e, !0;
  }
  #r;
  #o;
  #t;
  #h;
  async getContentTypeProperties() {
    return await this.observe(this.contentTypeProperties).asPromise();
  }
  #s;
  containerById(e) {
    return this.#s.asObservablePart((r) => r.find((t) => t.id === e));
  }
  /**
   * loadType will load the ContentType and all inherited and composed ContentTypes.
   * This will give us all the structure for properties and containers.
   * @param {string} unique - The unique of the ContentType to load.
   * @returns {Promise} - Promise resolved
   */
  async loadType(e) {
    if (this.#r === e) {
      await this.#e;
      return;
    }
    if (this.#l(), this.#r = e, !e) return;
    const r = await this.#p(e);
    return this.#n?.(r), r;
  }
  async createScaffold(e) {
    await this.#a, this.#l();
    const r = await this.#i.createScaffold(e);
    return r.data ? (this.#r = r.data.unique, this.#t.appendOne(r.data), this.#n?.(r), r) : {};
  }
  /**
   * Save the owner content type. Notice this is for a Content Type that is already stored on the server.
   * @returns {Promise} - A promise that will be resolved when the content type is saved.
   */
  async save() {
    await this.#a;
    const e = this.getOwnerContentType();
    if (!e || !e.unique) throw new Error("Could not find the Content Type to save");
    const { error: r, data: t } = await this.#i.save(e);
    if (r || !t)
      throw r?.message ?? "Repository did not return data after save.";
    return this.#t.updateOne(e.unique, t), t;
  }
  /**
   * Create the owner content type. Notice this is for a Content Type that is NOT already stored on the server.
   * @param {string | null} parentUnique - The unique of the parent content type
   * @returns {Promise} - a promise that is resolved when the content type has been created.
   */
  async create(e) {
    await this.#a;
    const r = this.getOwnerContentType();
    if (!r || !r.unique)
      throw new Error("Could not find the Content Type to create");
    const { data: t } = await this.#i.create(r, e);
    if (!t) return Promise.reject();
    this.#t.updateOne(r.unique, t), this.#c(t);
  }
  async #d(e) {
    e || (e = []);
    const r = this.getOwnerContentTypeUnique();
    this.#t.getValue().forEach((t) => {
      t.unique !== r && !e.find((n) => n.contentType.unique === t.unique) && (this.#o.find((n) => n.controllerAlias === "observeContentType_" + t.unique)?.destroy(), this.#t.removeOne(t.unique));
    }), e.forEach((t) => {
      this.#y(t.contentType.unique);
    });
  }
  async #y(e) {
    e && (this.#t.getValue().find((r) => r.unique === e) || await this.#p(e));
  }
  async #p(e) {
    if (!e) return {};
    await this.#a;
    const { data: r, asObservable: t } = await this.#i.requestByUnique(e);
    return r ? (await this.#c(r), { data: r, asObservable: t }) : {};
  }
  async #c(e) {
    if (!e.unique) return;
    await this.#a;
    const r = this.observe(
      // Then lets start observation of the content type:
      await this.#i.byUnique(e.unique),
      (t) => {
        t ? this.#t.appendOne(t) : this.#t.removeOne(e.unique);
      },
      "observeContentType_" + e.unique
      // Controller Alias is used to stop observation when no longer needed. [NL]
    );
    this.#o.push(r);
  }
  /** Public methods for consuming structure: */
  ownerContentTypeObservablePart(e) {
    return u(this.ownerContentType, e);
  }
  getOwnerContentType() {
    return this.#t.getValue().find((e) => e.unique === this.#r);
  }
  getOwnerContentTypeUnique() {
    return this.#r;
  }
  getVariesByCulture() {
    return this.getOwnerContentType()?.variesByCulture;
  }
  getVariesBySegment() {
    return this.getOwnerContentType()?.variesBySegment;
  }
  /**
   * Figure out if any of the Content Types has a Property.
   * @returns {boolean} - true if any of the Content Type in this composition has a Property.
   */
  getHasProperties() {
    return this.#t.getValue().some((e) => e.properties.length > 0);
  }
  updateOwnerContentType(e) {
    this.#t.updateOne(this.#r, e);
  }
  getContentTypes() {
    return this.#t.getValue();
  }
  getContentTypeUniques() {
    return this.#t.getValue().map((e) => e.unique);
  }
  getContentTypeAliases() {
    return this.#t.getValue().map((e) => e.alias);
  }
  // TODO: We could move the actions to another class?
  /**
   * Ensure a container exists for a specific Content Type. Otherwise clone it.
   * @param {string} containerId - The container to ensure exists on the given ContentType.
   * @param {string} contentTypeUnique - The content type to ensure the container for.
   * @returns {Promise<UmbPropertyTypeContainerModel | undefined>} - The container found or created for the owner ContentType.
   */
  async ensureContainerOf(e, r) {
    await this.#e;
    const t = this.#t.getValue().find((s) => s.unique === r);
    if (!t)
      throw new Error("Could not find the Content Type to ensure containers for");
    const n = t?.containers?.find((s) => s.id === e);
    return n || this.cloneContainerTo(e, r);
  }
  /**
   * Clone a container to a specific Content Type.
   * @param {string} containerId - The container to clone, assuming it does not already exist on the given Content Type.
   * @param {string} toContentTypeUnique - The content type to clone to.
   * @returns {Promise<UmbPropertyTypeContainerModel | undefined>} - The container cloned or found for the owner ContentType.
   */
  async cloneContainerTo(e, r) {
    await this.#e, r = r ?? this.#r;
    const t = this.#s.getValue().find((i) => i.id === e);
    if (!t) throw new Error("Container to clone was not found");
    const n = {
      ...t,
      id: l.new()
    };
    if (t.parent) {
      const i = await this.ensureContainerOf(t.parent.id, r);
      if (!i)
        throw new Error("Parent container for cloning could not be found or created");
      n.parent = { id: i.id };
    }
    const s = [
      ...this.#t.getValue().find((i) => i.unique === r)?.containers ?? []
    ];
    return s.push(n), this.#t.updateOne(r, { containers: s }), n;
  }
  ensureContainerNames(e, r, t = null) {
    e = e ?? this.#r, this.getOwnerContainers(r, t)?.forEach((n) => {
      if (n.name === "") {
        const s = "Unnamed";
        this.updateContainer(null, n.id, {
          name: this.makeContainerNameUniqueForOwnerContentType(n.id, s, r, t) ?? s
        });
      }
    });
  }
  async createContainer(e, r = null, t = "Group", n) {
    if (await this.#e, e = e ?? this.#r, r) {
      const h = await this.ensureContainerOf(r, e);
      if (!h)
        throw new Error("Parent container for creating a new container could not be found or created");
      r = h.id;
    }
    const s = {
      id: l.new(),
      parent: r ? { id: r } : null,
      name: "",
      type: t,
      sortOrder: n ?? 0
    };
    this.ensureContainerNames(e, t, r);
    const a = [...this.#t.getValue().find((h) => h.unique === e)?.containers ?? []];
    return a.push(s), this.#t.updateOne(e, { containers: a }), s;
  }
  /*async insertContainer(contentTypeUnique: string | null, container: UmbPropertyTypeContainerModel) {
  		await this.#init;
  		contentTypeUnique = contentTypeUnique ?? this.#ownerContentTypeUnique!;
  
  		// If we have a parent, we need to ensure it exists, and then update the parent property with the new container id.
  		if (container.parent) {
  			const parentContainer = await this.ensureContainerOf(container.parent.id, contentTypeUnique);
  			if (!parentContainer) {
  				throw new Error('Container for inserting property could not be found or created');
  			}
  			container.parent.id = parentContainer.id;
  		}
  
  		const frozenContainers =
  			this.#contentTypes.getValue().find((x) => x.unique === contentTypeUnique)?.containers ?? [];
  
  		const containers = appendToFrozenArray(frozenContainers, container, (x) => x.id === container.id);
  
  		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
  		// @ts-ignore
  		// TODO: fix TS partial complaint
  		this.#contentTypes.updateOne(contentTypeUnique, { containers });
  	}*/
  makeEmptyContainerName(e, r, t = null) {
    return this.makeContainerNameUniqueForOwnerContentType(e, "Unnamed", r, t) ?? "Unnamed";
  }
  makeContainerNameUniqueForOwnerContentType(e, r, t, n = null) {
    const s = this.getOwnerContainers(t, n);
    if (!s)
      return null;
    let i = r;
    for (; s.find((a) => a.name === i && a.id !== e); )
      i = b(i);
    return i === r ? null : i;
  }
  async updateContainer(e, r, t) {
    await this.#e, e = e ?? this.#r;
    const n = this.#t.getValue().find((a) => a.unique === e)?.containers ?? [];
    n.find((a) => a.id === r) || console.error(
      "We do not have this container on the requested id, we should clone the container and append the change to it. [NL]"
    );
    const i = y(n, t, (a) => a.id === r);
    this.#t.updateOne(e, { containers: i });
  }
  async removeContainer(e, r = null) {
    await this.#e, e = e ?? this.#r;
    const t = this.#t.getValue().find((o) => o.unique === e);
    if (!t)
      throw new Error("Could not find the Content Type to remove container from");
    const n = t.containers ?? [], s = n.filter((o) => o.id === r || o.parent?.id === r).map((o) => o.id), i = n.filter((o) => o.id !== r && o.parent?.id !== r), h = t.properties.filter(
      (o) => o.container ? !s.some((C) => C === o.container?.id) : !0
    );
    this.#t.updateOne(e, { containers: i, properties: h });
  }
  async insertProperty(e, r) {
    if (await this.#e, e = e ?? this.#r, r.container) {
      this.#t.mute();
      const s = await this.ensureContainerOf(r.container.id, e);
      if (this.#t.unmute(), !s)
        throw new Error("Container for inserting property could not be found or created");
      r = { ...r, container: { id: s.id } };
    }
    r.sortOrder === void 0 && (r.sortOrder = 0);
    const t = this.#t.getValue().find((s) => s.unique === e)?.properties ?? [], n = T(t, r, (s) => s.id === r.id);
    this.#t.updateOne(e, { properties: n });
  }
  async removeProperty(e, r) {
    await this.#e, e = e ?? this.#r;
    const t = this.#t.getValue().find((s) => s.unique === e)?.properties ?? [], n = O(t, (s) => s.id !== r);
    this.#t.updateOne(e, { properties: n });
  }
  async updateProperty(e, r, t) {
    await this.#e, e = e ?? this.#r;
    const n = this.#t.getValue().find((i) => i.unique === e)?.properties ?? [], s = y(n, t, (i) => i.id === r);
    this.#t.updateOne(e, { properties: s });
  }
  // TODO: Refactor: These property methods, should maybe be named without structure in their name.
  async propertyStructureById(e) {
    return await this.#e, this.#t.asObservablePart((r) => {
      for (const t of r) {
        const n = t.properties?.find((s) => s.id === e);
        if (n)
          return n;
      }
    });
  }
  async propertyStructureByAlias(e) {
    return await this.#e, this.#t.asObservablePart((r) => {
      for (const t of r) {
        const n = t.properties?.find((s) => s.alias === e);
        if (n)
          return n;
      }
    });
  }
  async getPropertyStructureById(e) {
    await this.#e;
    for (const r of this.#t.getValue()) {
      const t = r.properties?.find((n) => n.id === e);
      if (t)
        return t;
    }
  }
  async getPropertyStructureByAlias(e) {
    await this.#e;
    for (const r of this.#t.getValue()) {
      const t = r.properties?.find((n) => n.alias === e);
      if (t)
        return t;
    }
  }
  hasPropertyStructuresOf(e) {
    return this.#t.asObservablePart((r) => r.find((t) => t.properties?.find((n) => n.container?.id === e)) !== void 0);
  }
  rootPropertyStructures() {
    return this.propertyStructuresOf(null);
  }
  propertyStructuresOf(e) {
    return this.#t.asObservablePart((r) => {
      const t = [];
      return r.forEach((n) => {
        n.properties?.forEach((s) => {
          s.container?.id === e && t.push(s);
        });
      }), t;
    });
  }
  rootContainers(e) {
    return this.#s.asObservablePart((r) => r.filter((t) => t.parent === null && t.type === e));
  }
  getRootContainers(e) {
    return this.#s.getValue().filter((r) => r.parent === null && r.type === e);
  }
  async hasRootContainers(e) {
    return this.#s.asObservablePart((r) => r.filter((t) => t.parent === null && t.type === e).length > 0);
  }
  ownerContainersOf(e, r) {
    return this.ownerContentTypeObservablePart(
      (t) => t?.containers?.filter(
        (n) => (r ? n.parent?.id === r : n.parent === null) && n.type === e
      ) ?? []
    );
  }
  getOwnerContainers(e, r) {
    return this.getOwnerContentType()?.containers?.filter(
      (t) => (r ? t.parent?.id === r : t.parent === null) && t.type === e
    );
  }
  isOwnerContainer(e) {
    return this.getOwnerContentType()?.containers?.filter((r) => r.id === e);
  }
  containersOfParentId(e, r) {
    return this.#s.asObservablePart((t) => t.filter((n) => n.parent?.id === e && n.type === r));
  }
  // In future this might need to take parentName(parentId lookup) into account as well? otherwise containers that share same name and type will always be merged, but their position might be different and they should not be merged. [NL]
  containersByNameAndType(e, r) {
    return this.#s.asObservablePart((t) => t.filter((n) => n.name === e && n.type === r));
  }
  containersByNameAndTypeAndParent(e, r, t, n) {
    return this.#s.asObservablePart((s) => s.filter(
      (i) => (
        // Match name and type:
        i.name === e && i.type === r && // If we look for a parent name, then we need to match that as well:
        (t !== null ? (
          // And we have a parent on this container, then we need to match the parent name and type as well
          i.parent ? s.some((a) => i.parent.id === a.id && a.name === t && a.type === n) : !1
        ) : (
          // if we do not have a parent then its not a match
          i.parent === null
        ))
      )
      // it parentName === null then we expect the container parent to be null.
    ));
  }
  getContentTypeOfContainer(e) {
    return this.#t.getValue().find((r) => r.containers.some((t) => t.id === e));
  }
  contentTypeOfProperty(e) {
    return this.#t.asObservablePart(
      (r) => r.find((t) => t.properties.some((n) => n.id === e))
    );
  }
  #f(e) {
    if (!e) throw new Error("Content Type structure manager must have a repository alias.");
    new v(
      this,
      P,
      e,
      [this._host],
      (r, t) => {
        this.#i = r ? t.api : void 0, this.#u?.();
      }
    );
  }
  #l() {
    this.#e = new Promise((e) => {
      this.#n = e;
    }), this.#t.setValue([]), this.#o.forEach((e) => e.destroy()), this.#o = [], this.#t.setValue([]), this.#s.setValue([]);
  }
  destroy() {
    this.#t.destroy(), this.#s.destroy(), super.destroy();
  }
}
const c = "umbLoadingContentTypeDetail";
class W extends E {
  constructor(e, r) {
    super(e, r), this.IS_CONTENT_TYPE_WORKSPACE_CONTEXT = !0, this.structure = new A(this, r.detailRepositoryAlias), this.name = this.structure.ownerContentTypeObservablePart((t) => t?.name), this.alias = this.structure.ownerContentTypeObservablePart((t) => t?.alias), this.description = this.structure.ownerContentTypeObservablePart((t) => t?.description), this.icon = this.structure.ownerContentTypeObservablePart((t) => t?.icon), this.allowedAtRoot = this.structure.ownerContentTypeObservablePart((t) => t?.allowedAtRoot), this.variesByCulture = this.structure.ownerContentTypeObservablePart((t) => t?.variesByCulture), this.variesBySegment = this.structure.ownerContentTypeObservablePart((t) => t?.variesBySegment), this.isElement = this.structure.ownerContentTypeObservablePart((t) => t?.isElement), this.allowedContentTypes = this.structure.ownerContentTypeObservablePart((t) => t?.allowedContentTypes), this.compositions = this.structure.ownerContentTypeObservablePart((t) => t?.compositions), this.collection = this.structure.ownerContentTypeObservablePart((t) => t?.collection), this.observe(this.structure.ownerContentType, (t) => this._data.setCurrent(t));
  }
  /**
   * Creates a new scaffold
   * @param { UmbEntityDetailWorkspaceContextCreateArgs<DetailModelType> } args The arguments for creating a new scaffold
   * @returns { Promise<DetailModelType | undefined> } The new scaffold
   */
  async createScaffold(e) {
    this.resetState(), this.loading.addState({ unique: c, message: `Creating ${this.getEntityType()} scaffold` }), this.setParent(e.parent);
    const r = this.structure.createScaffold(e.preset);
    this._getDataPromise = r;
    let { data: t } = await r;
    return t && (t = await this._scaffoldProcessData(t), this.modalContext && (t = { ...t, ...this.modalContext.data.preset }), this.setUnique(t.unique), this.setIsNew(!0), this._data.setPersisted(t)), this.loading.removeState(c), t;
  }
  /**
   * Loads the data for the workspace
   * @param { string } unique The unique identifier of the data to load
   * @returns { Promise<DetailModelType> } The loaded data
   */
  async load(e) {
    if (e === this.getUnique() && this._getDataPromise)
      return await this._getDataPromise;
    this.resetState(), this.setUnique(e), this.loading.addState({ unique: c, message: `Loading ${this.getEntityType()} Details` }), this._getDataPromise = this.structure.loadType(e);
    const r = await this._getDataPromise, t = r.data;
    return t && (this._data.setPersisted(t), this.setIsNew(!1), this.observe(
      r.asObservable(),
      (n) => this.#n(n),
      "umbContentTypeDetailStoreObserver"
    )), this.loading.removeState(c), r;
  }
  #n(e) {
    e || this._data.clear();
  }
  /**
   * Creates the Content Type
   * @param { DetailModelType } currentData The current data
   * @param { UmbEntityModel } parent The parent entity
   * @memberof UmbContentTypeWorkspaceContextBase
   */
  async _create(e, r) {
    try {
      await this.structure.create(r?.unique), this._data.setPersisted(this.structure.getOwnerContentType());
      const t = await this.getContext(f), n = new S({
        entityType: r.entityType,
        unique: r.unique
      });
      t.dispatchEvent(n), this.setIsNew(!1);
    } catch (t) {
      console.error(t);
    }
  }
  /**
   * Updates the content type for the workspace
   * @memberof UmbContentTypeWorkspaceContextBase
   */
  async _update() {
    try {
      await this.structure.save(), this._data.setPersisted(this.structure.getOwnerContentType());
      const e = await this.getContext(f), r = new _({
        unique: this.getUnique(),
        entityType: this.getEntityType()
      });
      e.dispatchEvent(r);
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * Gets the name of the content type
   * @returns { string | undefined } The name of the content type
   */
  getName() {
    return this.structure.getOwnerContentType()?.name;
  }
  /**
   * Sets the name of the content type
   * @param { string } name The name of the content type
   */
  setName(e) {
    this.structure.updateOwnerContentType({ name: e });
  }
  /**
   * Gets the alias of the content type
   * @returns { string | undefined } The alias of the content type
   */
  getAlias() {
    return this.structure.getOwnerContentType()?.alias;
  }
  /**
   * Sets the alias of the content type
   * @param { string } alias The alias of the content type
   */
  setAlias(e) {
    this.structure.updateOwnerContentType({ alias: e });
  }
  /**
   * Gets the description of the content type
   * @returns { string | undefined } The description of the content type
   */
  getDescription() {
    return this.structure.getOwnerContentType()?.description;
  }
  /**
   * Sets the description of the content type
   * @param { string } description The description of the content type
   */
  setDescription(e) {
    this.structure.updateOwnerContentType({ description: e });
  }
  /**
   * Gets the compositions of the content type
   * @returns { string | undefined } The icon of the content type
   */
  getCompositions() {
    return this.structure.getOwnerContentType()?.compositions;
  }
  /**
   * Sets the compositions of the content type
   * @param { string } compositions The compositions of the content type
   * @returns { void }
   */
  setCompositions(e) {
    this.structure.updateOwnerContentType({ compositions: e });
  }
  // TODO: manage setting icon color alias?
  setIcon(e) {
    this.structure.updateOwnerContentType({ icon: e });
  }
  getData() {
    return this.structure.getOwnerContentType();
  }
  destroy() {
    this.structure.destroy(), super.destroy();
  }
}
export {
  G as UMB_COMPOSITION_PICKER_MODAL,
  K as UMB_CONTENT_TYPE_DESIGN_EDITOR_CONTEXT,
  $ as UMB_CONTENT_TYPE_WORKSPACE_CONTEXT,
  J as UMB_PROPERTY_TYPE_CONTEXT,
  j as UmbContentTypeContainerStructureHelper,
  Q as UmbContentTypeMoveRootGroupsIntoFirstTabHelper,
  Z as UmbContentTypePropertyStructureHelper,
  A as UmbContentTypeStructureManager,
  L as UmbContentTypeStructureRepositoryBase,
  H as UmbContentTypeStructureServerDataSourceBase,
  W as UmbContentTypeWorkspaceContextBase,
  et as UmbPropertyTypeBasedPropertyElement
};
//# sourceMappingURL=index.js.map
