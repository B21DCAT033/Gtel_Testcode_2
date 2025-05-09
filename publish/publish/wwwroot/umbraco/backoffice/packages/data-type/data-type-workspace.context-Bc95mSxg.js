import { d as l, s as u, f as d, K as y } from "./constants-D-HH3gx6.js";
import { html as m, css as c, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as b, UmbWorkspaceIsNewRedirectController as g, UmbInvariantWorkspacePropertyDatasetContext as P } from "@umbraco-cms/backoffice/workspace";
import { UmbArrayState as U, UmbStringState as n, appendToFrozenArray as _ } from "@umbraco-cms/backoffice/observable-api";
import { umbExtensionsRegistry as p } from "@umbraco-cms/backoffice/extension-registry";
var v = Object.getOwnPropertyDescriptor, f = (a, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? v(t, e) : t, i = a.length - 1, h; i >= 0; i--)
    (h = a[i]) && (s = h(s) || s);
  return s;
};
let o = class extends E {
  constructor() {
    super(), this.consumeContext(l, (a) => {
      a.createPropertyDatasetContext(this);
    });
  }
  render() {
    return m`
			<umb-entity-detail-workspace-editor>
				<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
o.styles = [
  c`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
o = f([
  A("umb-data-type-workspace-editor")
], o);
class I extends b {
  constructor(t) {
    super(t, {
      workspaceAlias: y,
      entityType: d,
      detailRepositoryAlias: u
    }), this.propertyEditorUiAlias = this._data.createObservablePartOfCurrent((e) => e?.editorUiAlias), this.propertyEditorSchemaAlias = this._data.createObservablePartOfCurrent((e) => e?.editorAlias), this.values = this._data.createObservablePartOfCurrent((e) => e?.values), this.#i = new U([], (e) => e.alias).sortBy(
      (e, r) => (e.weight || 0) - (r.weight || 0)
    ), this.properties = this.#i.asObservable(), this.#t = [], this.#e = [], this.#r = [], this.#s = [], this.#o = null, this.#h = new n(null), this.propertyEditorUiIcon = this.#h.asObservable(), this.#n = new n(null), this.propertyEditorUiName = this.#n.asObservable(), this.#d(), this.#u(), this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique",
        component: o,
        setup: async (e, r) => {
          const s = r.match.params.entityType, i = r.match.params.parentUnique === "null" ? null : r.match.params.parentUnique;
          await this.createScaffold({ parent: { entityType: s, unique: i } }), new g(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: o,
        setup: (e, r) => {
          const s = r.match.params.unique;
          this.load(s);
        }
      }
    ]);
  }
  async getValues() {
    return this._data.getCurrent()?.values;
  }
  #i;
  #t;
  #e;
  #r;
  #s;
  #o;
  #a;
  #h;
  #n;
  resetState() {
    super.resetState(), this.#r = [], this.#s = [], this.#t = [], this.#e = [], this.#a = void 0, this.#l();
  }
  // Hold the last set property editor ui alias, so we know when it changes, so we can reset values. [NL]
  #p;
  #u() {
    this.observe(
      this.propertyEditorUiAlias,
      async (t) => {
        this.#s = [], this.#e = [], t !== void 0 && this.#m(t);
      },
      "editorUiAlias"
    );
  }
  #d() {
    return this.observe(
      this.propertyEditorSchemaAlias,
      (t) => {
        this.#r = [], this.#t = [], this.#y(t);
      },
      "schemaAlias"
    );
  }
  #y(t) {
    if (!t) {
      this.removeUmbControllerByAlias("schema");
      return;
    }
    this.observe(
      t ? p.byTypeAndAlias("propertyEditorSchema", t) : void 0,
      (e) => {
        this.#r = (e?.meta.settings?.properties ?? []).map((r, s) => ({
          ...r,
          weight: r.weight ?? s
        })), this.#t = e?.meta.settings?.defaultData || [], this.#o = e?.meta.defaultPropertyEditorUiAlias || null, this.#o && this.getPropertyEditorUiAlias() === null && this.setPropertyEditorUiAlias(this.#o), this.#l();
      },
      "schema"
    );
  }
  #m(t) {
    if (!t) {
      this.removeUmbControllerByAlias("editorUi");
      return;
    }
    this.observe(
      p.byTypeAndAlias("propertyEditorUi", t),
      (e) => {
        this.#h.setValue(e?.meta.icon || null), this.#n.setValue(e?.name || null), this.#s = (e?.meta.settings?.properties ?? []).map((r, s) => ({
          ...r,
          weight: r.weight ?? 1e3 + s
        })), this.#e = e?.meta.settings?.defaultData || [], this.setPropertyEditorSchemaAlias(e?.meta.propertyEditorSchemaAlias), this.#l();
      },
      "editorUi"
    );
  }
  #l() {
    if (this.#r && this.#s) {
      this.#i.setValue(this.#r), this.#i.append(this.#s);
      const t = this.#p;
      this.#p = this.getPropertyEditorUiAlias(), (this.getIsNew() || t && t !== this.#p) && this.#c();
    }
  }
  #c() {
    !this.#t || !this.#e || !this._data.getCurrent() || (this.#a = [
      ...this.#t,
      ...this.#e
    ], this._data.updatePersisted({ values: this.#a }), this._data.updateCurrent({ values: this.#a }));
  }
  getPropertyDefaultValue(t) {
    return this.#a?.find((e) => e.alias === t)?.value;
  }
  createPropertyDatasetContext(t) {
    return new P(t, this);
  }
  getPropertyEditorSchemaAlias() {
    return this._data.getCurrent()?.editorAlias;
  }
  setPropertyEditorSchemaAlias(t) {
    this._data.updateCurrent({ editorAlias: t });
  }
  getPropertyEditorUiAlias() {
    return this._data.getCurrent()?.editorUiAlias;
  }
  setPropertyEditorUiAlias(t) {
    this._data.updateCurrent({ editorUiAlias: t });
  }
  /**
   * @function propertyValueByAlias
   * @param {string} propertyAlias
   * @returns {Promise<Observable<ReturnType | undefined> | undefined>}
   * @description Get an Observable for the value of this property.
   */
  async propertyValueByAlias(t) {
    return await this._getDataPromise, this._data.createObservablePartOfCurrent(
      (e) => e?.values?.find((r) => r.alias === t)?.value
    );
  }
  getPropertyValue(t) {
    return this._data.getCurrent()?.values?.find((e) => e.alias === t)?.value ?? this.getPropertyDefaultValue(t);
  }
  // TODO: its not called a property in the model, but we do consider this way in our front-end
  async setPropertyValue(t, e) {
    await this._getDataPromise;
    const r = { alias: t, value: e }, s = this._data.getCurrent();
    if (s) {
      const i = _(s.values || [], r, (h) => h.alias);
      this._data.updateCurrent({ values: i });
    }
  }
  destroy() {
    this.#i.destroy(), this.#h.destroy(), this.#n.destroy(), super.destroy();
  }
}
export {
  I as UmbDataTypeWorkspaceContext,
  I as api
};
//# sourceMappingURL=data-type-workspace.context-Bc95mSxg.js.map
