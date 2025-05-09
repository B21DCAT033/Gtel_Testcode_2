import { C as z, l as k } from "./input-upload-field.element-DpMbvzUB.js";
import "./media-url.repository-DUerHiJb.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/resources";
import { css as L, state as C, query as Y, customElement as S, repeat as x, html as A, property as _, ifDefined as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as V, UMB_MODAL_MANAGER_CONTEXT as W } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as G } from "@umbraco-cms/backoffice/style";
import { UmbTemporaryFileManager as K, TemporaryFileStatus as v } from "@umbraco-cms/backoffice/temporary-file";
import { UmbArrayState as M, UmbObjectState as j } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as H } from "@umbraco-cms/backoffice/class-api";
import { UmbId as b } from "@umbraco-cms/backoffice/id";
import { UmbMediaTypeStructureRepository as X } from "@umbraco-cms/backoffice/media-type";
import { UMB_NOTIFICATION_CONTEXT as Z } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as J } from "@umbraco-cms/backoffice/localization-api";
import { UmbLitElement as Q } from "@umbraco-cms/backoffice/lit-element";
const Ue = "Umb.Repository.MediaCollection", Oe = "Umb.CollectionView.Media.Grid", ve = "Umb.CollectionView.Media.Table", Re = "Umb.Collection.Media", we = "Umb.Repository.Media.Move", Le = "Umb.Repository.Media.SortChildrenOf", Ce = "Umb.Repository.Media.BulkMove", Se = "Umb.Menu.Media", De = "Umb.Repository.Media.Url", Be = "Umb.Store.MediaUrl", Pe = "Umb.Repository.Media.RecycleBin.Tree", Fe = "Umb.Store.Media.RecycleBin.Tree", qe = "Umb.Tree.Media.RecycleBin", Ne = "Umb.Repository.Media.RecycleBin", ze = "Umb.Repository.Media.BulkTrash", ke = "media-recycle-bin-root", Ye = "Umb.Repository.Media.Reference", xe = "Umb.Repository.Media.Detail", $e = "Umb.Store.Media.Detail", Ve = "Umb.Repository.Document.Validation", We = "Umb.Repository.Media.Tree", Ge = "Umb.Store.Media.Tree", Ke = "Umb.Tree.Media", je = "Umb.Workspace.Media", He = {
  culture: null,
  segment: null,
  name: "",
  createDate: null,
  updateDate: null
};
var n = /* @__PURE__ */ ((s) => (s.WAITING = "waiting", s.COMPLETE = "complete", s.NOT_ALLOWED = "not allowed", s.CANCELLED = "cancelled", s.ERROR = "error", s))(n || {}), ee = Object.defineProperty, te = Object.getOwnPropertyDescriptor, D = (s) => {
  throw TypeError(s);
}, U = (s, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? te(e, t) : e, o = s.length - 1, r; o >= 0; o--)
    (r = s[o]) && (a = (i ? r(e, t, a) : r(a)) || a);
  return i && a && ee(e, t, a), a;
}, se = (s, e, t) => e.has(s) || D("Cannot " + t), ie = (s, e, t) => e.has(s) ? D("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), R = (s, e, t) => (se(s, e, "access private method"), t), E, B, P;
let m = class extends V {
  constructor() {
    super(...arguments), ie(this, E), this._options = [];
  }
  connectedCallback() {
    super.connectedCallback(), this._options = this.data?.options ?? [], requestAnimationFrame(() => this._buttonAuto.focus());
  }
  render() {
    return A` <div id="options">
			<uui-button id="auto" look="secondary" @click=${() => R(this, E, B).call(this)} label="Automatically" compact>
				<umb-icon name="icon-wand"></umb-icon> Auto pick
			</uui-button>
			${x(
      this._options,
      (s) => s.unique,
      (s) => A`<uui-button
						look="secondary"
						@click=${() => R(this, E, P).call(this, s.unique)}
						label=${s.name}
						compact>
						<umb-icon .name=${s.icon ?? "icon-circle-dotted"}></umb-icon>${s.name}
					</uui-button>`
    )}
		</div>`;
  }
};
E = /* @__PURE__ */ new WeakSet();
B = function() {
  this.value = { mediaTypeUnique: void 0 }, this._submitModal();
};
P = function(s) {
  if (!s)
    throw new Error("Invalid media type unique");
  this.value = { mediaTypeUnique: s }, this._submitModal();
};
m.styles = [
  G,
  L`
			#options {
				display: flex;
				margin: var(--uui-size-layout-1);
				gap: var(--uui-size-3);
			}
			uui-button {
				width: 150px;
				height: 150px;
			}
			umb-icon {
				font-size: var(--uui-size-10);
				margin-bottom: var(--uui-size-2);
			}
		`
];
U([
  C()
], m.prototype, "_options", 2);
U([
  Y("#auto")
], m.prototype, "_buttonAuto", 2);
m = U([
  S("umb-dropzone-media-type-picker-modal")
], m);
const ae = m, Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbDropzoneMediaTypePickerModalElement() {
    return m;
  },
  default: ae
}, Symbol.toStringTag, { value: "Module" }));
class oe extends H {
  constructor(e) {
    super(e), this.#r = !0, this.#a = new X(this), this.#i = new z(this), this.#o = new K(this), this.#n = new M([], (t) => t.extension), this.#l = new M([], (t) => t.mediaTypeUnique), this.#t = new j({ total: 0, completed: 0 }), this.progress = this.#t.asObservable(), this.#s = new M([], (t) => t.unique), this.progressItems = this.#s.asObservable(), this.#c = new J(this), this.createFilesAsMedia = this.createMediaItems, this.createFilesAsTemporary = this.createTemporaryFiles, this.#d = ({ folders: t, files: i }, a) => {
      const o = [];
      for (const r of i)
        o.push({
          unique: b.new(),
          parentUnique: a,
          status: n.WAITING,
          progress: 0,
          temporaryFile: { file: r, temporaryUnique: b.new() }
        });
      for (const r of t) {
        const f = b.new();
        o.push({
          unique: f,
          parentUnique: a,
          status: n.WAITING,
          progress: 100,
          // Folders are created instantly.
          folder: { name: r.folderName }
        }), o.push(...this.#d({ folders: r.folders, files: r.files }, f));
      }
      return o;
    }, this.#p = e, this.consumeContext(Z, (t) => {
      this.#u = t;
    });
  }
  #p;
  #r;
  #a;
  #i;
  #o;
  #n;
  #l;
  #t;
  #s;
  #u;
  #c;
  setIsFoldersAllowed(e) {
    this.#r = e;
  }
  getIsFoldersAllowed() {
    return this.#r;
  }
  /**
   * Uploads files and folders to the server and creates the media items with corresponding media type.\
   * Allows the user to pick a media type option if multiple types are allowed.
   * @param {UmbFileDropzoneDroppedItems} items - The files and folders to upload.
   * @param {string | null} parentUnique - Where the items should be uploaded.
   * @returns {Array<UmbUploadableItem>} - The items about to be uploaded.
   */
  createMediaItems(e, t = null) {
    const i = this.#E(e, t);
    return i.length ? (i.length === 1 ? this.#b(i[0]) : this.#A(i), i) : [];
  }
  /**
   * Uploads the files as temporary files and returns the data.
   * @param { File[] } files - The files to upload.
   * @returns {Promise<Array<UmbUploadableItem>>} - Files as temporary files.
   */
  async createTemporaryFiles(e) {
    const t = this.#E({ files: e, folders: [] }, null), i = [];
    for (const a of t)
      (await this.#o.uploadOne({
        temporaryUnique: a.temporaryFile.temporaryUnique,
        file: a.temporaryFile.file,
        onProgress: (r) => this.#y(a, r)
      })).status === v.SUCCESS ? this.#e(a, n.COMPLETE) : this.#e(a, n.ERROR), i.push(a);
    return i;
  }
  async #M(e) {
    return (await (await this.getContext(W)).open(this.#p, k, { data: { options: e } }).onSubmit().catch(() => {
    }))?.mediaTypeUnique;
  }
  async #b(e) {
    const t = await this.#_(e);
    if (!t.length)
      return this.#u?.peek("warning", {
        data: {
          message: `${this.#c.term("media_disallowedFileType")}: ${e.temporaryFile?.file.name}.`
        }
      }), this.#e(e, n.NOT_ALLOWED);
    const i = t.length > 1 ? await this.#M(t) : t[0].unique;
    if (!i)
      return this.#e(e, n.CANCELLED);
    e.temporaryFile ? this.#h(e, i) : e.folder && this.#m(e, i);
  }
  async #A(e) {
    for (const t of e) {
      const i = await this.#_(t);
      if (!i.length) {
        this.#e(t, n.NOT_ALLOWED);
        continue;
      }
      const a = i[0].unique;
      if (!a)
        throw new Error("Media type unique is not defined");
      t.temporaryFile ? this.#h(t, a) : t.folder && this.#m(t, a);
    }
  }
  async #h(e, t) {
    if ((await this.#I(e)).status !== v.SUCCESS) {
      this.#e(e, n.ERROR);
      return;
    }
    const a = await this.#f(e, t), { data: o } = await this.#i.create(a, e.parentUnique);
    o ? this.#e(e, n.COMPLETE) : this.#e(e, n.ERROR);
  }
  async #m(e, t) {
    const i = await this.#f(e, t), { data: a } = await this.#i.create(i, e.parentUnique);
    a ? this.#e(e, n.COMPLETE) : this.#e(e, n.ERROR);
  }
  #I(e) {
    return this.#o.uploadOne({
      temporaryUnique: e.temporaryFile.temporaryUnique,
      file: e.temporaryFile.file,
      onProgress: (t) => this.#y(e, t)
    });
  }
  // Media types
  async #_(e) {
    const t = e.parentUnique ? await this.#i.requestByUnique(e.parentUnique) : null, i = await this.#g(t?.data?.mediaType.unique ?? null), a = e.temporaryFile?.file.name.split(".").pop() ?? null, o = await this.#T(a);
    return o.length ? i.filter((f) => o.find((N) => N.unique === f.unique)) : [];
  }
  async #T(e) {
    const t = this.#n.getValue().find((a) => a.extension === e)?.availableMediaTypes;
    if (t) return t;
    const i = e ? await this.#a.requestMediaTypesOf({ fileExtension: e }) : await this.#a.requestMediaTypesOfFolders();
    return this.#n.appendOne({ extension: e, availableMediaTypes: i }), i;
  }
  async #g(e) {
    const t = this.#l.getValue().find((a) => a.mediaTypeUnique === e)?.allowedChildren;
    if (t) return t;
    const { data: i } = await this.#a.requestAllowedChildrenOf(e);
    if (!i) throw new Error("Parent media type does not exists");
    return this.#l.appendOne({ mediaTypeUnique: e, allowedChildren: i.items }), i.items;
  }
  // Scaffold
  async #f(e, t) {
    const i = e.temporaryFile ? e.temporaryFile.file.name : e.folder?.name ?? "", a = {
      editorAlias: "",
      alias: "umbracoFile",
      value: { temporaryFileId: e.temporaryFile?.temporaryUnique },
      culture: null,
      segment: null
    }, o = {
      unique: e.unique,
      mediaType: { unique: t, collection: null },
      variants: [{ culture: null, segment: null, createDate: null, updateDate: null, name: i }],
      values: e.temporaryFile ? [a] : void 0
    }, { data: r } = await this.#i.createScaffold(o);
    return r;
  }
  // Progress handling
  #E(e, t) {
    const i = this.#t.getValue(), a = this.#s.getValue(), o = this.#d({ folders: e.folders, files: e.files }, t);
    return this.#s.setValue([...a, ...o]), this.#t.setValue({ total: i.total + o.length, completed: i.completed }), o;
  }
  #e(e, t) {
    this.#s.updateOne(e.unique, { status: t });
    const i = this.#t.getValue();
    this.#t.update({ completed: i.completed + 1 });
  }
  #y(e, t) {
    this.#s.updateOne(e.unique, { progress: t });
  }
  #d;
  destroy() {
    this.#o.destroy(), super.destroy();
  }
}
class y extends Event {
  static {
    this.TYPE = "submitted";
  }
  constructor(e, t) {
    super(y.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...t }), this.items = e;
  }
}
var re = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, F = (s) => {
  throw TypeError(s);
}, c = (s, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? ne(e, t) : e, o = s.length - 1, r; o >= 0; o--)
    (r = s[o]) && (a = (i ? r(e, t, a) : r(a)) || a);
  return i && a && re(e, t, a), a;
}, O = (s, e, t) => e.has(s) || F("Cannot " + t), u = (s, e, t) => (O(s, e, "read from private field"), t ? t.call(s) : e.get(s)), w = (s, e, t) => e.has(s) ? F("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), le = (s, e, t, i) => (O(s, e, "write to private field"), e.set(s, t), t), h = (s, e, t) => (O(s, e, "access private method"), t), l, p, I, T, g, q;
let d = class extends Q {
  constructor() {
    super(), w(this, p), this.parentUnique = null, this.createAsTemporary = !1, this.multiple = !1, this.disabled = !1, this._disableFolderUpload = !1, this._progressItems = [], w(this, l), this.progressItems = () => u(this, l).progressItems, this.progress = () => u(this, l).progress, le(this, l, new oe(this)), document.addEventListener("dragenter", h(this, p, I).bind(this)), document.addEventListener("dragleave", h(this, p, T).bind(this)), document.addEventListener("drop", h(this, p, g).bind(this)), this.observe(
      u(this, l).progress,
      (s) => this.dispatchEvent(new ProgressEvent("progress", { loaded: s.completed, total: s.total })),
      "_observeProgress"
    ), this.observe(
      u(this, l).progressItems,
      (s) => {
        this._progressItems = s;
        const e = s.find((t) => t.status === n.WAITING);
        s.length && !e && this.dispatchEvent(new CustomEvent("complete", { detail: s }));
      },
      "_observeProgressItems"
    );
  }
  get disableFolderUpload() {
    return this._disableFolderUpload;
  }
  set disableFolderUpload(s) {
    u(this, l).setIsFoldersAllowed(!s);
  }
  /**
   * @deprecated Please use `getItems()` instead; this method will be removed in Umbraco 17.
   * @returns {Array<UmbUploadableItem>} An array of uploadable items.
   */
  getFiles() {
    return this.getItems();
  }
  getItems() {
    return this._progressItems;
  }
  browse() {
    return this.disabled ? void 0 : (this.shadowRoot?.querySelector("#dropzone")).browse();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), u(this, l).destroy(), document.removeEventListener("dragenter", h(this, p, I).bind(this)), document.removeEventListener("dragleave", h(this, p, T).bind(this)), document.removeEventListener("drop", h(this, p, g).bind(this));
  }
  render() {
    return A`<uui-file-dropzone
			id="dropzone"
			accept=${$(this.accept)}
			?multiple=${this.multiple}
			@change=${h(this, p, q)}
			label=${this.localize.term("media_dragAndDropYourFilesIntoTheArea")}></uui-file-dropzone>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
I = function(s) {
  if (this.disabled) return;
  const e = s.dataTransfer?.types;
  !e?.length || !e?.includes("Files") || this.toggleAttribute("dragging", !0);
};
T = function() {
  this.disabled || this.toggleAttribute("dragging", !1);
};
g = function(s) {
  s.preventDefault(), !this.disabled && this.toggleAttribute("dragging", !1);
};
q = async function(s) {
  if (!this.disabled && !(!s.detail.files.length && !s.detail.folders.length))
    if (this.createAsTemporary) {
      const e = u(this, l).createTemporaryFiles(s.detail.files);
      this.dispatchEvent(new y(await e));
    } else {
      const e = u(this, l).createMediaItems(s.detail, this.parentUnique);
      this.dispatchEvent(new y(e));
    }
};
d.styles = [
  L`
			:host(:not([disabled])[dragging]) #dropzone {
				opacity: 1;
				pointer-events: all;
			}

			[dropzone] {
				opacity: 0;
			}

			#dropzone {
				opacity: 0;
				pointer-events: none;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				inset: 0px;
				z-index: 100;
				backdrop-filter: opacity(1); /* Removes the built in blur effect */
				border-radius: var(--uui-border-radius);
				overflow: clip;
				border: 1px solid var(--uui-color-focus);
			}
			#dropzone:after {
				content: '';
				display: block;
				position: absolute;
				inset: 0;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-focus);
				opacity: 0.2;
			}
		`
];
c([
  _({ attribute: !1 })
], d.prototype, "parentUnique", 2);
c([
  _({ type: Boolean })
], d.prototype, "createAsTemporary", 2);
c([
  _({ type: String })
], d.prototype, "accept", 2);
c([
  _({ type: Boolean, reflect: !0 })
], d.prototype, "multiple", 2);
c([
  _({ type: Boolean, reflect: !0 })
], d.prototype, "disabled", 2);
c([
  _({ type: Boolean, attribute: "disable-folder-upload", reflect: !0 })
], d.prototype, "disableFolderUpload", 1);
c([
  C()
], d.prototype, "_progressItems", 2);
d = c([
  S("umb-dropzone")
], d);
export {
  y as A,
  n as B,
  Xe as C,
  Re as U,
  Ue as a,
  Oe as b,
  ve as c,
  we as d,
  Le as e,
  Ce as f,
  Se as g,
  ke as h,
  Pe as i,
  Fe as j,
  qe as k,
  Ne as l,
  ze as m,
  Ye as n,
  xe as o,
  $e as p,
  Ve as q,
  We as r,
  Ge as s,
  Ke as t,
  De as u,
  Be as v,
  je as w,
  He as x,
  d as y,
  oe as z
};
//# sourceMappingURL=dropzone.element-DyItP5Bd.js.map
