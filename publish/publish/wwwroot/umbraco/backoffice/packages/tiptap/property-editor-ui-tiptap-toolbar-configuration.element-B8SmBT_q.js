import { U as K } from "./tiptap-toolbar-configuration.context-token-yqUn7jq0.js";
import { umbExtensionsRegistry as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbArrayState as D, UmbBooleanState as Z } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as tt } from "@umbraco-cms/backoffice/class-api";
import { UmbId as f } from "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_DATASET_CONTEXT as et, UMB_PROPERTY_CONTEXT as ot } from "@umbraco-cms/backoffice/property";
import { html as d, when as T, repeat as k, nothing as y, css as it, state as M, property as at, customElement as rt } from "@umbraco-cms/backoffice/external/lit";
import { debounce as nt } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as st } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as lt } from "@umbraco-cms/backoffice/style";
class ut extends tt {
  constructor(t) {
    super(t, K), this.#o = new D([], (e) => e.alias), this.extensions = this.#o.asObservable(), this.#i = new Z(!1), this.reload = this.#i.asObservable(), this.#a = /* @__PURE__ */ new Set(), this.#e = /* @__PURE__ */ new Set(), this.#t = new D([], (e) => e.unique), this.toolbar = this.#t.asObservable(), this.#n = {
      undo: "Umb.Tiptap.Toolbar.Undo",
      redo: "Umb.Tiptap.Toolbar.Redo",
      cut: null,
      copy: null,
      paste: null,
      styles: "Umb.Tiptap.Toolbar.StyleSelect",
      fontname: "Umb.Tiptap.Toolbar.FontFamily",
      fontfamily: "Umb.Tiptap.Toolbar.FontFamily",
      fontsize: "Umb.Tiptap.Toolbar.FontSize",
      forecolor: null,
      backcolor: null,
      blockquote: "Umb.Tiptap.Toolbar.Blockquote",
      formatblock: null,
      removeformat: "Umb.Tiptap.Toolbar.ClearFormatting",
      bold: "Umb.Tiptap.Toolbar.Bold",
      italic: "Umb.Tiptap.Toolbar.Italic",
      underline: "Umb.Tiptap.Toolbar.Underline",
      strikethrough: "Umb.Tiptap.Toolbar.Strike",
      alignleft: "Umb.Tiptap.Toolbar.TextAlignLeft",
      aligncenter: "Umb.Tiptap.Toolbar.TextAlignCenter",
      alignright: "Umb.Tiptap.Toolbar.TextAlignRight",
      alignjustify: "Umb.Tiptap.Toolbar.TextAlignJustify",
      bullist: "Umb.Tiptap.Toolbar.BulletList",
      numlist: "Umb.Tiptap.Toolbar.OrderedList",
      outdent: null,
      indent: null,
      anchor: null,
      table: "Umb.Tiptap.Toolbar.Table",
      hr: "Umb.Tiptap.Toolbar.HorizontalRule",
      subscript: "Umb.Tiptap.Toolbar.Subscript",
      superscript: "Umb.Tiptap.Toolbar.Superscript",
      charmap: null,
      rtl: null,
      ltr: null,
      link: "Umb.Tiptap.Toolbar.Link",
      unlink: "Umb.Tiptap.Toolbar.Unlink",
      sourcecode: "Umb.Tiptap.Toolbar.SourceEditor",
      umbmediapicker: "Umb.Tiptap.Toolbar.MediaPicker",
      umbembeddialog: "Umb.Tiptap.Toolbar.EmbeddedMedia",
      umbblockpicker: "Umb.Tiptap.Toolbar.BlockPicker"
    }, this.observe(Q.byType("tiptapToolbarExtension"), (e) => {
      const i = e.map((a) => ({
        alias: a.alias,
        label: a.meta.label,
        icon: a.meta.icon,
        dependencies: a.forExtensions
      }));
      this.#o.setValue(i), this.#r = new Map(i.map((a) => [a.alias, a]));
    }), this.consumeContext(et, async (e) => {
      this.observe(
        await e.propertyValueByAlias("extensions"),
        (i) => {
          i && (this.#a.clear(), this.#i.setValue(!1), this.#o.getValue().filter((a) => !a.dependencies || a.dependencies.every((n) => i.includes(n))).map((a) => a.alias).forEach((a) => this.#a.add(a)), this.#i.setValue(!0));
        },
        "_observeExtensions"
      );
    });
  }
  #o;
  #i;
  #a;
  #e;
  #r;
  #t;
  #n;
  cloneToolbarValue(t) {
    return this.isValidToolbarValue(t) ? t.map((e) => e.map((i) => [...i])) : [[[]]];
  }
  filterExtensions(t) {
    return this.#o.getValue().filter((e) => e.alias?.toLowerCase().includes(t) || e.label?.toLowerCase().includes(t));
  }
  getExtensionByAlias(t) {
    return this.#r?.get(t);
  }
  isExtensionEnabled(t) {
    return this.#a.has(t);
  }
  isExtensionInUse(t) {
    return this.#e.has(t);
  }
  isValidToolbarValue(t) {
    if (!Array.isArray(t)) return !1;
    for (const e of t) {
      if (!Array.isArray(e)) return !1;
      for (const i of e) {
        if (!Array.isArray(i)) return !1;
        for (const a of i)
          if (typeof a != "string") return !1;
      }
    }
    return !0;
  }
  insertToolbarItem(t, e) {
    const i = [...this.#t.getValue()], [a, n, u] = e, b = i[a], h = [...b.data], p = h[n], v = [...p.data];
    v.splice(u, 0, t), this.#e.add(t), h[n] = { unique: p.unique, data: v }, i[a] = { unique: b.unique, data: h }, this.#t.setValue(i);
  }
  insertToolbarGroup(t, e) {
    const i = [...this.#t.getValue()], a = i[t], n = [...a.data];
    n.splice(e, 0, { unique: f.new(), data: [] }), i[t] = { unique: a.unique, data: n }, this.#t.setValue(i);
  }
  insertToolbarRow(t) {
    const e = [...this.#t.getValue()];
    e.splice(t, 0, { unique: f.new(), data: [{ unique: f.new(), data: [] }] }), this.#t.setValue(e);
  }
  /**
   * @param {UmbTiptapToolbarValue | Array<string> | null} value - The value to migrate.
   * @returns {UmbTiptapToolbarValue} The migrated value.
   * @deprecated This will be removed in Umbraco 16.
   */
  migrateTinyMceToolbar(t) {
    if (this.isValidToolbarValue(t)) return t;
    const e = [];
    if (Array.isArray(t) && t.length > 0 && typeof t[0] == "string")
      for (const i of t) {
        const a = this.#n[i];
        a && e.push(a);
      }
    return [[e]];
  }
  moveToolbarItem(t, e) {
    const [i, a, n] = t, [u, b, h] = e, p = [...this.#t.getValue()], v = p[i], _ = [...v.data], I = _[a], O = [...I.data], J = O.splice(n, 1);
    _[a] = { unique: I.unique, data: O }, p[i] = { unique: v.unique, data: _ };
    const G = p[u], U = [...G.data], S = U[b], B = [...S.data];
    B.splice(h, 0, J[0]), U[b] = { unique: S.unique, data: B }, p[u] = { unique: G.unique, data: U }, this.#t.setValue(p);
  }
  removeToolbarItem(t) {
    const [e, i, a] = t, n = [...this.#t.getValue()], u = n[e], b = [...u.data], h = b[i], p = [...h.data];
    p.splice(a, 1).forEach((_) => this.#e.delete(_)), b[i] = { unique: h.unique, data: p }, n[e] = { unique: u.unique, data: b }, this.#t.setValue(n);
  }
  removeToolbarGroup(t, e) {
    const i = [...this.#t.getValue()];
    if (i[t].data.length > e) {
      const a = i[t], n = [...a.data];
      n.splice(e, 1).forEach((b) => b.data.forEach((h) => this.#e.delete(h))), i[t] = { unique: a.unique, data: n };
    }
    i[t].data.length === 0 && (i[t].data[0] = { unique: f.new(), data: [] }), this.#t.setValue(i);
  }
  removeToolbarRow(t) {
    const e = [...this.#t.getValue()];
    e.length > t && e.splice(t, 1).forEach(
      (a) => a.data.forEach((n) => n.data.forEach((u) => this.#e.delete(u)))
    ), e.length === 0 && (e[0] = { unique: f.new(), data: [{ unique: f.new(), data: [] }] }), this.#t.setValue(e);
  }
  setToolbar(t) {
    this.isValidToolbarValue(t) || (t = [[[]]]), this.#e.clear(), t.forEach((i) => i.forEach((a) => a.forEach((n) => this.#e.add(n))));
    const e = t.map((i) => ({
      unique: f.new(),
      data: i.map((a) => ({ unique: f.new(), data: a }))
    }));
    this.#t.setValue(e);
  }
  updateToolbarRow(t, e) {
    const i = [...this.#t.getValue()], a = i[t];
    i[t] = { unique: a.unique, data: e }, this.#t.setValue(i);
  }
}
var ct = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, P = (o) => {
  throw TypeError(o);
}, E = (o, t, e, i) => {
  for (var a = i > 1 ? void 0 : i ? dt(t, e) : t, n = o.length - 1, u; n >= 0; n--)
    (u = o[n]) && (a = (i ? u(t, e, a) : u(a)) || a);
  return i && a && ct(t, e, a), a;
}, q = (o, t, e) => t.has(o) || P("Cannot " + e), r = (o, t, e) => (q(o, t, "read from private field"), e ? e.call(o) : t.get(o)), w = (o, t, e) => t.has(o) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, e), $ = (o, t, e, i) => (q(o, t, "write to private field"), t.set(o, e), e), c = (o, t, e) => (q(o, t, "access private method"), e), s, x, V, m, l, L, z, A, R, C, F, W, N, X, Y, j, H;
let g = class extends st {
  constructor() {
    super(), w(this, l), w(this, s, new ut(this)), w(this, x), w(this, V, nt((o) => {
      this._availableExtensions = r(this, s).filterExtensions(o);
    }, 250)), this._availableExtensions = [], this._toolbar = [], w(this, m), this.consumeContext(ot, (o) => {
      this.observe(r(this, s).extensions, (t) => {
        this._availableExtensions = t;
      }), this.observe(r(this, s).reload, (t) => {
        t && this.requestUpdate();
      }), this.observe(r(this, s).toolbar, (t) => {
        t.length && (this._toolbar = t, $(this, m, t.map((e) => e.data.map((i) => [...i.data]))), o.setValue(r(this, m)));
      });
    });
  }
  set value(o) {
    o || (o = [[[]]]), o !== r(this, m) && $(this, m, r(this, s).migrateTinyMceToolbar(o));
  }
  get value() {
    return r(this, s).cloneToolbarValue(r(this, m));
  }
  firstUpdated() {
    r(this, s).setToolbar(this.value);
  }
  render() {
    return d`${c(this, l, X).call(this)} ${c(this, l, W).call(this)}`;
  }
};
s = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
L = function(o) {
  const t = (r(this, m)?.length ?? 1) - 1, e = (r(this, m)?.[t].length ?? 1) - 1, i = r(this, m)?.[t][e].length ?? 0;
  r(this, s).insertToolbarItem(o.alias, [t, e, i]);
};
z = function(o, t, e) {
  o.dataTransfer.effectAllowed = "move", $(this, x, { alias: t, fromPos: e });
};
A = function(o) {
  o.preventDefault(), o.dataTransfer.dropEffect = "move";
};
R = function(o) {
  if (o.preventDefault(), o.dataTransfer?.dropEffect === "none") {
    const { fromPos: t } = r(this, x) ?? {};
    if (!t) return;
    r(this, s).removeToolbarItem(t);
  }
};
C = function(o, t) {
  o.preventDefault();
  const { alias: e, fromPos: i } = r(this, x) ?? {};
  if (i && !t) {
    r(this, s).removeToolbarItem(i);
    return;
  }
  if (i && t) {
    r(this, s).moveToolbarItem(i, t);
    return;
  }
  e && t && r(this, s).insertToolbarItem(e, t);
};
F = function(o) {
  const t = (o.target.value ?? "").toLocaleLowerCase();
  r(this, V).call(this, t);
};
W = function() {
  return d`
			<uui-box id="toolbox" headline=${this.localize.term("tiptap_toobar_availableItems")}>
				<div slot="header-actions">
					<uui-input
						type="search"
						autocomplete="off"
						placeholder=${this.localize.term("placeholders_filter")}
						@input=${c(this, l, F)}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
				</div>
				<div class="available-items" dropzone="move" @drop=${c(this, l, C)} @dragover=${c(this, l, A)}>
					${T(
    this._availableExtensions.length === 0,
    () => d`<umb-localize key="tiptap_toobar_availableItemsEmpty"
								>There are no toolbar extensions to show</umb-localize
							>`,
    () => k(this._availableExtensions, (o) => c(this, l, N).call(this, o))
  )}
				</div>
			</uui-box>
		`;
};
N = function(o) {
  const t = !r(this, s).isExtensionEnabled(o.alias), e = r(this, s).isExtensionInUse(o.alias);
  return e || t ? y : d`
					<uui-button
						compact
						class=${t ? "forbidden" : ""}
						draggable="true"
						look=${t ? "placeholder" : "outline"}
						?disabled=${t || e}
						@click=${() => c(this, l, L).call(this, o)}
						@dragstart=${(i) => c(this, l, z).call(this, i, o.alias)}
						@dragend=${c(this, l, R)}>
						<div class="inner">
							${T(o.icon, () => d`<umb-icon .name=${o.icon}></umb-icon>`)}
							<span>${this.localize.string(o.label)}</span>
						</div>
					</uui-button>
				`;
};
X = function() {
  return d`
			<div id="toolbar">
				<div id="rows">
					${k(
    this._toolbar,
    (o) => o.unique,
    (o, t) => c(this, l, Y).call(this, o, t)
  )}
				</div>
				<uui-button
					id="btnAddRow"
					look="placeholder"
					label=${this.localize.term("tiptap_toolbar_addRow")}
					@click=${() => r(this, s).insertToolbarRow(this._toolbar.length)}></uui-button>
			</div>
		`;
};
Y = function(o, t = 0) {
  if (!o) return y;
  const e = this._toolbar.length === 1;
  return d`
			<uui-button-inline-create
				label=${this.localize.term("tiptap_toolbar_addRow")}
				@click=${() => r(this, s)?.insertToolbarRow(t)}></uui-button-inline-create>
			<div class="row">
				<div class="groups">
					<uui-button-inline-create
						vertical
						label=${this.localize.term("tiptap_toolbar_addGroup")}
						@click=${() => r(this, s)?.insertToolbarGroup(t, 0)}></uui-button-inline-create>
					${k(
    o.data,
    (i) => i.unique,
    (i, a) => c(this, l, j).call(this, i, t, a)
  )}
				</div>
				${T(
    !e,
    () => d`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeRow")}
								@click=${() => r(this, s)?.removeToolbarRow(t)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
		`;
};
j = function(o, t = 0, e = 0) {
  if (!o) return y;
  const i = this._toolbar[t].data.length > 1 && o.data.length === 0;
  return d`
			<div
				class="group"
				dropzone="move"
				@dragover=${c(this, l, A)}
				@drop=${(a) => c(this, l, C).call(this, a, [t, e, o.data.length - 1])}>
				<div class="items">
					${T(
    o?.data.length === 0,
    () => d`<em><umb-localize key="toolbar_emptyGroup">Empty</umb-localize></em>`,
    () => d`${o.data.map((a, n) => c(this, l, H).call(this, a, t, e, n))}`
  )}
				</div>
				${T(
    i,
    () => d`
						<uui-action-bar>
							<uui-button
								look="secondary"
								label=${this.localize.term("tiptap_toolbar_removeGroup")}
								@click=${() => r(this, s)?.removeToolbarGroup(t, e)}>
								<uui-icon name="icon-trash"></uui-icon>
							</uui-button>
						</uui-action-bar>
					`
  )}
			</div>
			<uui-button-inline-create
				vertical
				label=${this.localize.term("tiptap_toolbar_addGroup")}
				@click=${() => r(this, s)?.insertToolbarGroup(t, e + 1)}></uui-button-inline-create>
		`;
};
H = function(o, t = 0, e = 0, i = 0) {
  const a = r(this, s)?.getExtensionByAlias(o);
  if (!a) return y;
  const n = !r(this, s)?.isExtensionEnabled(a.alias);
  return d`
			<uui-button
				compact
				class=${n ? "forbidden" : ""}
				draggable="true"
				look=${n ? "placeholder" : "outline"}
				title=${this.localize.string(a.label)}
				?disabled=${n}
				@click=${() => r(this, s).removeToolbarItem([t, e, i])}
				@dragend=${c(this, l, R)}
				@dragstart=${(u) => c(this, l, z).call(this, u, o, [t, e, i])}>
				<div class="inner">
					${T(
    a.icon,
    () => d`<umb-icon .name=${a.icon}></umb-icon>`,
    () => d`<span>${this.localize.string(a.label)}</span>`
  )}
				</div>
			</uui-button>
		`;
};
g.styles = [
  lt,
  it`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
				flex-grow: 1;
			}

			@media (min-width: 1400px) {
				:host {
					flex-direction: row;
				}
				#toolbox {
					width: 500px;
					max-width: 33%;
					flex-grow: 1;
				}

				#toolbar {
					flex-grow: 100;
				}
			}

			#toolbox {
				border: 1px solid var(--uui-color-border);
			}

			uui-box.minimal {
				--uui-box-header-padding: 0;
				--uui-box-default-padding: var(--uui-size-2) 0;
				--uui-box-box-shadow: none;

				[slot='header-actions'] {
					margin-bottom: var(--uui-size-2);

					uui-icon {
						color: var(--uui-color-border);
					}
				}
			}

			.available-items {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-3);

				uui-button {
					--uui-button-font-weight: normal;

					&[draggable='true'],
					&[draggable='true'] > .inner {
						cursor: move;
					}

					&[disabled],
					&[disabled] > .inner {
						cursor: not-allowed;
					}

					&.forbidden {
						--color: var(--uui-color-danger);
						--color-standalone: var(--uui-color-danger-standalone);
						--color-emphasis: var(--uui-color-danger-emphasis);
						--color-contrast: var(--uui-color-danger);
						--uui-button-contrast-disabled: var(--uui-color-danger);
						--uui-button-border-color-disabled: var(--uui-color-danger);
					}

					div {
						display: flex;
						gap: var(--uui-size-1);
					}
				}
			}

			uui-button-inline-create:not([vertical]) {
				margin-bottom: -4px;
			}

			#rows {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-1);

				.row {
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					gap: var(--uui-size-3);

					&:not(:last-child) {
						border-bottom: 1px solid var(--uui-color-border);
					}

					&:focus-within,
					&:hover {
						border-color: var(--uui-color-border-standalone);
					}

					.groups {
						flex: 1;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						align-items: center;
						justify-content: flex-start;
						gap: var(--uui-size-1);

						uui-button-inline-create {
							height: 50px;
						}

						.group {
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							gap: var(--uui-size-3);

							border: 1px dashed transparent;
							border-radius: var(--uui-border-radius);
							padding: var(--uui-size-3);

							> uui-action-bar {
								opacity: 0;
								transition: opacity 120ms;
							}

							&:focus-within,
							&:hover {
								border-color: var(--uui-color-border-standalone);
								> uui-action-bar {
									opacity: 1;
								}
							}

							.items {
								display: flex;
								flex-direction: row;
								flex-wrap: wrap;
								gap: var(--uui-size-1);

								uui-button {
									--uui-button-font-weight: normal;

									&[draggable='true'],
									&[draggable='true'] > .inner {
										cursor: move;
									}

									&[disabled],
									&[disabled] > .inner {
										cursor: not-allowed;
									}

									&.forbidden {
										--color: var(--uui-color-danger);
										--color-standalone: var(--uui-color-danger-standalone);
										--color-emphasis: var(--uui-color-danger-emphasis);
										--color-contrast: var(--uui-color-danger);
										--uui-button-contrast-disabled: var(--uui-color-danger);
										--uui-button-border-color-disabled: var(--uui-color-danger);
									}

									div {
										display: flex;
										gap: var(--uui-size-1);
									}
								}
							}
						}
					}
				}
			}

			#btnAddRow {
				display: block;
				margin-top: var(--uui-size-1);
			}

			.handle {
				cursor: move;
			}
		`
];
E([
  M()
], g.prototype, "_availableExtensions", 2);
E([
  M()
], g.prototype, "_toolbar", 2);
E([
  at({ attribute: !1 })
], g.prototype, "value", 1);
g = E([
  rt("umb-property-editor-ui-tiptap-toolbar-configuration")
], g);
export {
  g as UmbPropertyEditorUiTiptapToolbarConfigurationElement,
  g as element
};
//# sourceMappingURL=property-editor-ui-tiptap-toolbar-configuration.element-B8SmBT_q.js.map
