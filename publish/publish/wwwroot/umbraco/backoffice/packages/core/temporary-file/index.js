import { TemporaryFileService as _ } from "@umbraco-cms/backoffice/external/backend-api";
import { tryXhrRequest as O, tryExecuteAndNotify as m } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as S } from "@umbraco-cms/backoffice/repository";
import { css as T, property as y, customElement as F, html as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { clamp as x, formatBytes as g } from "@umbraco-cms/backoffice/utils";
import { UmbTemporaryFileConfigRepository as C } from "../config.repository-BYcO56Dn.js";
import { U as ie } from "../config.store.token-CsbU_19N.js";
import { UmbTemporaryFileConfigStore as se } from "../config.store-CVJDS2rs.js";
import { U as ne, a as le } from "../constants-CDwqkOdg.js";
import "@umbraco-cms/backoffice/store";
import { UmbArrayState as b, observeMultiple as z } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as A } from "@umbraco-cms/backoffice/class-api";
import { UmbLocalizationController as B } from "@umbraco-cms/backoffice/localization-api";
import { UMB_NOTIFICATION_CONTEXT as w } from "@umbraco-cms/backoffice/notification";
class P {
  #e;
  /**
   * Creates an instance of UmbTemporaryFileServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemporaryFileServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Uploads a temporary file to the server
   * @param {string} id
   * @param {File} file
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  async create(e, r, i, o) {
    const s = new FormData();
    s.append("Id", e), s.append("File", r);
    const a = O({
      url: "/umbraco/management/api/v1/temporary-file",
      method: "POST",
      responseHeader: "Umb-Generated-Resource",
      body: s,
      onProgress: i,
      abortSignal: o
    });
    return m(this.#e, a);
  }
  /**
   * Gets a temporary file from the server
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  read(e) {
    if (!e) throw new Error("Id is missing");
    return m(this.#e, _.getTemporaryFileById({ id: e }));
  }
  /**
   * Deletes a temporary file from the server
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  delete(e) {
    if (!e) throw new Error("Id is missing");
    return m(this.#e, _.deleteTemporaryFileById({ id: e }));
  }
}
class M extends S {
  #e;
  /**
   * Creates an instance of UmbTemporaryFileRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemporaryFileRepository
   */
  constructor(e) {
    super(e), this.#e = new P(e);
  }
  /**
   * Uploads a temporary file
   * @param {string} id
   * @param {File} file
   * @param onProgress
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  upload(e, r, i, o) {
    return this.#e.create(e, r, i, o);
  }
  /**
   * Deletes a temporary file
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  delete(e) {
    return this.#e.delete(e);
  }
  /**
   * Gets a temporary file
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  requestById(e) {
    return this.#e.read(e);
  }
}
var q = Object.defineProperty, N = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, h = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? N(e, r) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (o = (i ? a(e, r, o) : a(o)) || o);
  return i && o && q(e, r, o), o;
}, v = (t, e, r) => e.has(t) || U("Cannot " + r), $ = (t, e, r) => (v(t, e, "read from private field"), r ? r.call(t) : e.get(t)), E = (t, e, r) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), k = (t, e, r, i) => (v(t, e, "write to private field"), e.set(t, r), r), G = (t, e, r) => (v(t, e, "access private method"), r), u, f, R;
let c = class extends I {
  constructor() {
    super(...arguments), E(this, f), E(this, u, 0), this.complete = !1, this.error = !1;
  }
  set progress(t) {
    const e = x(Math.ceil(t), 0, 100);
    k(this, u, e);
  }
  get progress() {
    return $(this, u);
  }
  render() {
    return d` <div id="wrapper">
			<uui-loader-circle .progress=${this.complete || this.error ? 100 : this.progress}></uui-loader-circle>
			<div id="icon">${G(this, f, R).call(this)}</div>
		</div>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
R = function() {
  return this.error ? d`<uui-icon name="icon-alert"></uui-icon>` : this.complete ? d`<uui-icon name="icon-check"></uui-icon>` : `${this.progress}%`;
};
c.styles = T`
		#wrapper {
			position: relative;
			height: 75%;
		}

		:host([complete]) {
			uui-loader-circle,
			#icon {
				color: var(--uui-color-positive);
			}
		}
		:host([error]) {
			uui-loader-circle,
			#icon {
				color: var(--uui-color-danger);
			}
		}

		uui-loader-circle {
			z-index: 2;
			inset: 0;
			color: var(--uui-color-focus);
			font-size: var(--uui-size-12);
			width: 100%;
			height: 100%;
		}

		#icon {
			color: var(--uui-color-text);
			font-size: var(--uui-size-6);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	`;
h([
  y({ type: Number })
], c.prototype, "progress", 1);
h([
  y({ type: Boolean, reflect: !0 })
], c.prototype, "complete", 2);
h([
  y({ type: Boolean, reflect: !0 })
], c.prototype, "error", 2);
c = h([
  F("umb-temporary-file-badge")
], c);
var n = /* @__PURE__ */ ((t) => (t.SUCCESS = "success", t.WAITING = "waiting", t.ERROR = "error", t))(n || {});
class ee extends A {
  constructor() {
    super(...arguments), this.#e = new M(this._host), this.#t = new C(this._host), this.#i = new B(this._host), this.#r = new b([], (e) => e.temporaryUnique), this.queue = this.#r.asObservable();
  }
  #e;
  #t;
  #i;
  #r;
  async uploadOne(e, r) {
    this.#r.setValue([]);
    const i = {
      ...e,
      status: n.WAITING
    };
    return this.#r.appendOne(i), (await this.#o({ ...r, chunkSize: 1 }))[0];
  }
  async upload(e, r) {
    this.#r.setValue([]);
    const i = e.map((o) => ({ ...o, status: n.WAITING }));
    return this.#r.append(i), this.#o({ ...r });
  }
  removeOne(e) {
    this.#r.removeOne(e);
  }
  remove(e) {
    this.#r.remove(e);
  }
  async #o(e) {
    const r = [], i = this.#r.getValue();
    if (!i.length) return r;
    const o = async (l) => {
      const p = await this.#a(l);
      r.push(p), e?.callback && await e.callback(p);
    }, s = e?.chunkSize ?? 5, a = Math.ceil(i.length / s);
    for (let l = 0; l < a; l++) {
      const p = i.slice(l * s, l * s + s);
      await Promise.all(p.map(o));
    }
    return r;
  }
  async #s(e) {
    let r = await this.observe(this.#t.part("maxFileSize")).asPromise();
    if (r && (r *= 1024, e.file.size > r))
      return (await this.getContext(w)).peek("warning", {
        data: {
          headline: "Upload",
          message: `
	${this.#i.term("media_invalidFileSize")}: ${e.file.name} (${g(e.file.size)}).

	${this.#i.term("media_maxFileSize")} ${g(r)}.
						`
        }
      }), !1;
    const i = e.file.name.split(".").pop() ?? "", [o, s] = await this.observe(
      z([
        this.#t.part("allowedUploadedFileExtensions"),
        this.#t.part("disallowedUploadedFilesExtensions")
      ])
    ).asPromise();
    return o?.length && !o.includes(i) || s?.length && s.includes(i) ? ((await this.getContext(w)).peek("warning", {
      data: {
        message: `${this.#i.term("media_disallowedFileType")}: ${i}`
      }
    }), !1) : !0;
  }
  async #a(e) {
    if (!e.temporaryUnique) throw new Error(`Unique is missing for item ${e}`);
    if (!await this.#s(e))
      return this.#r.updateOne(e.temporaryUnique, {
        ...e,
        status: n.ERROR
      }), { ...e, status: n.ERROR };
    const { error: i } = await this.#e.upload(
      e.temporaryUnique,
      e.file,
      (s) => {
        e.onProgress && e.onProgress(s.loaded / s.total * 100);
      },
      e.abortSignal
    ), o = i ? n.ERROR : n.SUCCESS;
    return this.#r.updateOne(e.temporaryUnique, { ...e, status: o }), { ...e, status: o };
  }
}
export {
  n as TemporaryFileStatus,
  ne as UMB_TEMPORARY_FILE_CONFIG_STORE_ALIAS,
  ie as UMB_TEMPORARY_FILE_CONFIG_STORE_CONTEXT,
  le as UMB_TEMPORARY_FILE_REPOSITORY_ALIAS,
  c as UmbTemporaryFileBadgeElement,
  C as UmbTemporaryFileConfigRepository,
  se as UmbTemporaryFileConfigStore,
  ee as UmbTemporaryFileManager,
  M as UmbTemporaryFileRepository
};
//# sourceMappingURL=index.js.map
