import { i as f, g as C, z as E, A as v, v as D } from "./manifests-ByHRH93l.js";
import { UmbDocumentPublishingRepository as y } from "./document-publishing.repository-5llJWdOm.js";
import { UmbVariantId as u } from "@umbraco-cms/backoffice/variant";
import { UmbControllerBase as U, UmbContextBase as S } from "@umbraco-cms/backoffice/class-api";
import { UmbMergeContentVariantDataController as P } from "@umbraco-cms/backoffice/content";
import { UmbArrayState as T, jsonStringComparison as x, observeMultiple as O } from "@umbraco-cms/backoffice/observable-api";
import { UmbUnpublishDocumentEntityAction as _ } from "./unpublish.action-CxVyMGWI.js";
import { UMB_MODAL_MANAGER_CONTEXT as l } from "@umbraco-cms/backoffice/modal";
import { UmbRequestReloadStructureForEntityEvent as d, UmbRequestReloadChildrenOfEntityEvent as M } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as V } from "@umbraco-cms/backoffice/action";
import { UMB_NOTIFICATION_CONTEXT as m } from "@umbraco-cms/backoffice/notification";
import { firstValueFrom as q } from "@umbraco-cms/backoffice/external/rxjs";
import { DocumentVariantStateModel as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLocalizationController as N } from "@umbraco-cms/backoffice/localization-api";
class k extends U {
  constructor() {
    super(...arguments), this.#e = new T([], (t) => t.variantId.toString()), this.variantsWithChanges = this.#e.asObservable(), this.#t = (t) => {
      delete t.updateDate;
    };
  }
  #e;
  /**
   * Checks each variant if there are any pending changes to publish.
   * @param {UmbDocumentPublishedPendingChangesManagerProcessArgs} args - The arguments for the process.
   * @param {UmbDocumentDetailModel} args.persistedData - The persisted document data.
   * @param {UmbDocumentDetailModel} args.publishedData - The published document data.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishedPendingChangesManager
   */
  async process(t) {
    if (!t.persistedData) throw new Error("Persisted data is missing");
    if (!t.publishedData) throw new Error("Published data is missing");
    if (t.persistedData.unique !== t.publishedData.unique)
      throw new Error("Persisted and published data does not have the same unique");
    const i = (t.persistedData.variants?.map((a) => u.Create(a)) ?? []).map(async (a) => {
      const h = await new P(this).process(
        t.publishedData,
        t.persistedData,
        [a],
        [a]
      ), o = structuredClone(h), r = structuredClone(t.publishedData);
      return o.variants.forEach((n) => this.#t(n)), r.variants.forEach((n) => this.#t(n)), o.template = null, r.template = null, x(o, r) === !1 ? { variantId: a } : null;
    }), s = (await Promise.all(i)).filter((a) => a !== null);
    this.#e.setValue(s);
  }
  /**
   * Gets the variants with changes.
   * @returns {Array<UmbPublishedVariantWithPendingChanges>}  {Array<UmbVariantWithChanges>}
   * @memberof UmbDocumentPublishedPendingChangesManager
   */
  getVariantsWithChanges() {
    return this.#e.getValue();
  }
  #t;
  /**
   * Clear all states/values,
   */
  clear() {
    this.#e.setValue([]);
  }
}
class J extends S {
  constructor(t) {
    super(t, f), this.publishedPendingChanges = new k(this), this.#n = new y(this), this.#i = new N(this), this.#a = (e) => (this.#t?.readOnlyState.getStates().map((s) => s.variantId.culture) ?? []).includes(e.culture) === !1, this.#e = Promise.all([
      this.consumeContext(C, async (e) => {
        this.#t = e, this.#g();
      }).asPromise(),
      this.consumeContext(V, async (e) => {
        this.#s = e;
      }).asPromise()
    ]), this.consumeContext(m, (e) => {
      this.#h = e;
    });
  }
  #e;
  #t;
  #s;
  #n;
  #o;
  #u;
  #h;
  #i;
  async publish() {
    throw new Error("Method not implemented.");
  }
  /**
   * Save and publish the document
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async saveAndPublish() {
    return this.#m();
  }
  /**
   * Schedule the document for publishing
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async schedule() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    const { options: i, selected: s } = await this.#c(), h = await (await this.getContext(l)).open(this, E, {
      data: {
        options: i,
        activeVariants: s,
        pickableFilter: this.#a,
        prevalues: i.map((n) => ({
          unique: n.unique,
          schedule: {
            publishTime: n.variant?.scheduledPublishDate,
            unpublishTime: n.variant?.scheduledUnpublishDate
          }
        }))
      }
    }).onSubmit().catch(() => {
    });
    if (!h?.selection.length) return;
    const o = h?.selection.map((n) => ({
      variantId: u.FromString(n.unique),
      schedule: {
        publishTime: this.#l(n.schedule?.publishTime),
        unpublishTime: this.#l(n.schedule?.unpublishTime)
      }
    })) ?? [];
    if (!o.length) return;
    const r = o.map((n) => n.variantId), c = await this.#t.constructSaveData(r);
    return await this.#t.runMandatoryValidationForSaveData(c), await this.#t.askServerToValidate(c, r), this.#t.validateAndSubmit(
      async () => {
        if (!this.#t)
          throw new Error("Document workspace context is missing");
        await this.#t.performCreateOrUpdate(r, c);
        const { error: n } = await this.#n.publish(t, o);
        if (n)
          return Promise.reject(n);
        const g = { data: { message: this.#i.term("speechBubbles_editContentScheduledSavedText") } };
        this.#h?.peek("positive", g), await this.#t.reload(), this.#r();
        const b = new d({ entityType: e, unique: t });
        this.#s?.dispatchEvent(b);
      },
      async () => ((await this.getContext(m)).peek("danger", {
        data: { message: this.#i.term("speechBubbles_editContentScheduledNotSavedText") }
      }), Promise.reject())
    );
  }
  /**
   * Convert a date string to a server time string in ISO format, example: 2021-01-01T12:00:00.000+00:00.
   * The input must be a valid date string, otherwise it will return null.
   * The output matches the DateTimeOffset format in C#.
   */
  #l(t) {
    if (!t || t.length === 0)
      return null;
    const e = new Date(t);
    return isNaN(e.getTime()) ? (console.warn(`[Schedule]: Invalid date: ${t}`), null) : e.toISOString();
  }
  /**
   * Publish the document with descendants
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async publishWithDescendants() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    const { options: i, selected: s } = await this.#c(), h = await (await this.getContext(l)).open(this, v, {
      data: {
        options: i,
        pickableFilter: this.#a
      },
      value: { selection: s }
    }).onSubmit().catch(() => {
    });
    if (!h?.selection.length) return;
    const o = h?.selection.map((c) => u.FromString(c)) ?? [];
    if (!o.length) return;
    const { error: r } = await this.#n.publishWithDescendants(
      t,
      o,
      h.includeUnpublishedDescendants ?? !1
    );
    if (!r) {
      await this.#t.reload(), this.#r();
      const c = new d({ entityType: e, unique: t });
      this.#s?.dispatchEvent(c);
      const n = new M({ entityType: e, unique: t });
      this.#s?.dispatchEvent(n);
    }
  }
  /**
   * Unpublish the document
   * @returns {Promise<void>}
   * @memberof UmbDocumentPublishingWorkspaceContext
   */
  async unpublish() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.getEntityType();
    if (!e) throw new Error("Entity type is missing");
    new _(this, { unique: t, entityType: e, meta: {} }).execute();
  }
  async #m() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    let e = [];
    const { options: i, selected: s } = await this.#c();
    if (i.length === 0)
      throw new Error("No variants are available");
    if (i.length === 1)
      e.push(u.Create(i[0]));
    else {
      const o = await (await this.getContext(l)).open(this, D, {
        data: {
          options: i,
          pickableFilter: this.#a
        },
        value: { selection: s }
      }).onSubmit().catch(() => {
      });
      if (!o?.selection.length || !t) return;
      e = o?.selection.map((r) => u.FromString(r)) ?? [];
    }
    const a = await this.#t.constructSaveData(e);
    return await this.#t.runMandatoryValidationForSaveData(a, e), await this.#t.askServerToValidate(a, e), this.#t.validateAndSubmit(
      async () => this.#p(e, a),
      async () => (await this.#t.performCreateOrUpdate(e, a), (await this.getContext(m)).peek("danger", {
        data: { message: this.#i.term("speechBubbles_editContentPublishedFailedByValidation") }
      }), await Promise.reject())
    );
  }
  async #p(t, e) {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const i = this.#t.getUnique();
    if (!i) throw new Error("Unique is missing");
    const s = this.#t.getEntityType();
    if (!s) throw new Error("Entity type is missing");
    await this.#t.performCreateOrUpdate(t, e);
    const { error: a } = await this.#n.publish(
      i,
      t.map((h) => ({ variantId: h }))
    );
    if (!a) {
      const h = e.variants.filter((r) => t.some((c) => c.culture === r.culture));
      this.#h?.peek("positive", {
        data: {
          headline: this.#i.term("speechBubbles_editContentPublishedHeader"),
          message: this.#i.term(
            "speechBubbles_editVariantPublishedText",
            this.#i.list(h.map((r) => r.culture ?? r.name))
          )
        }
      }), await this.#t.reload(), this.#r();
      const o = new d({ unique: i, entityType: s });
      this.#s?.dispatchEvent(o);
    }
  }
  #a;
  async #c() {
    if (await this.#e, !this.#t) throw new Error("Document workspace context is missing");
    const t = await q(this.#t.variantOptions);
    let e = this.#w();
    e = e.filter((s) => t.some((a) => a.unique === s));
    const i = this.#t.readOnlyState.getStates().map((s) => s.variantId.culture);
    return e = e.filter((s) => i.includes(s) === !1), {
      options: t,
      selected: e
    };
  }
  #w() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.splitView.getActiveVariants().map((s) => u.Create(s).toString()), e = this.#t.getChangedVariants().map((s) => s.toString()), i = [...t, ...e];
    return [...new Set(i)];
  }
  async #g() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    this.observe(
      O([this.#t.unique, this.#t.isNew]),
      ([t, e]) => {
        t !== this.#u && this.#f(), this.#u = t, e === !1 && t && this.#r();
      },
      "uniqueObserver"
    ), this.observe(
      this.#t.persistedData,
      () => this.#d(),
      "umbPersistedDataObserver"
    );
  }
  #b() {
    return this.#t?.getVariants()?.some(
      (e) => e.state === p.PUBLISHED || e.state === p.PUBLISHED_PENDING_CHANGES
    ) ?? !1;
  }
  async #r() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    if (this.#t.getIsNew()) return;
    const t = this.#t.getUnique();
    if (!t) throw new Error("Unique is missing");
    if (!this.#b()) return;
    const { data: i } = await this.#n.published(t);
    this.#o = i, this.#d();
  }
  #d() {
    if (!this.#t) throw new Error("Document workspace context is missing");
    const t = this.#t.getPersistedData(), e = this.#o;
    !t || !e || this.publishedPendingChanges.process({ persistedData: t, publishedData: e });
  }
  #f() {
    this.#o = void 0, this.publishedPendingChanges.clear();
  }
}
export {
  J as UmbDocumentPublishingWorkspaceContext,
  J as api
};
//# sourceMappingURL=document-publishing.workspace-context-D0J9Af6l.js.map
