import { a as f } from "./base-CzBFGKJV.js";
import { html as i, css as w, state as d, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
var g = Object.defineProperty, v = Object.getOwnPropertyDescriptor, m = (l) => {
  throw TypeError(l);
}, c = (l, e, t, o) => {
  for (var r = o > 1 ? void 0 : o ? v(e, t) : e, a = l.length - 1, s; a >= 0; a--)
    (s = l[a]) && (r = (o ? s(e, t, r) : s(r)) || r);
  return o && r && g(e, t, r), r;
}, C = (l, e, t) => e.has(l) || m("Cannot " + t), q = (l, e, t) => e.has(l) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(l) : e.set(l, t), b = (l, e, t) => (C(l, e, "access private method"), t), u, h, p;
let n = class extends x {
  constructor() {
    super(...arguments), q(this, u), this._selectedColumn = 0, this._selectedRow = 0;
  }
  render() {
    const t = [];
    for (let o = 1; o <= 10; o++) {
      const r = [];
      for (let a = 1; a <= 10; a++)
        r.push(i`
					<button
						type="button"
						class=${o <= this._selectedRow && a <= this._selectedColumn ? "selected" : ""}
						aria-label="${a} columns, ${o} rows"
						@mouseover=${() => b(this, u, p).call(this, a, o)}
						@click=${() => b(this, u, h).call(this, a, o)}></button>
				`);
      t.push(r);
    }
    return i`
			<div id="grid">${t}</div>
			<label>${this._selectedColumn} &times; ${this._selectedRow}</label>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
h = function(l, e) {
  this._selectedColumn = l, this._selectedRow = e, this.editor?.chain().focus().insertTable({ rows: e, cols: l }).run();
};
p = function(l, e) {
  this._selectedColumn = l, this._selectedRow = e;
};
n.styles = [
  w`
			:host {
				background-color: var(--uui-color-surface);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 170px;
			}

			#grid {
				display: flex;
				flex-wrap: wrap;

				> button {
					all: unset;
					box-sizing: border-box;

					border-color: var(--uui-color-border);
					border-style: solid;
					border-width: 0 1px 1px 0;

					height: 17px;
					width: 17px;

					&:hover,
					&.selected {
						background-color: var(--uui-color-background);
						border-color: var(--uui-color-selected);
					}
				}
			}
		`
];
c([
  d()
], n.prototype, "_selectedColumn", 2);
c([
  d()
], n.prototype, "_selectedRow", 2);
n = c([
  _("umb-tiptap-table-insert")
], n);
class y extends f {
  execute() {
  }
  getMenu(e) {
    const t = new n();
    return t.editor = e, [
      {
        unique: "table-menu-table",
        label: "Table",
        icon: "icon-table",
        items: [
          {
            unique: "table-insert",
            label: "Insert table",
            element: t
          }
        ],
        separatorAfter: !0
      },
      {
        unique: "table-menu-cell",
        label: "Cell",
        items: [
          {
            unique: "table-merge",
            label: "Merge cells",
            execute: () => e?.chain().focus().mergeCells().run()
          },
          {
            unique: "table-split",
            label: "Split cell",
            execute: () => e?.chain().focus().splitCell().run()
          },
          {
            unique: "table-merge-split",
            label: "Merge or split",
            execute: () => e?.chain().focus().mergeOrSplit().run()
          },
          {
            unique: "table-header-cell",
            label: "Toggle header cell",
            execute: () => e?.chain().focus().toggleHeaderCell().run()
          }
        ]
      },
      {
        unique: "table-menu-row",
        label: "Row",
        items: [
          {
            unique: "table-row-before",
            label: "Add row before",
            execute: () => e?.chain().focus().addRowBefore().run()
          },
          {
            unique: "table-row-after",
            label: "Add row after",
            execute: () => e?.chain().focus().addRowAfter().run()
          },
          {
            unique: "table-row-delete",
            label: "Delete row",
            icon: "icon-trash",
            execute: () => e?.chain().focus().deleteRow().run()
          },
          {
            unique: "table-header-row",
            label: "Toggle header row",
            execute: () => e?.chain().focus().toggleHeaderRow().run()
          }
        ]
      },
      {
        unique: "table-menu-column",
        label: "Column",
        items: [
          {
            unique: "table-column-before",
            label: "Add column before",
            execute: () => e?.chain().focus().addColumnBefore().run()
          },
          {
            unique: "table-column-after",
            label: "Add column after",
            execute: () => e?.chain().focus().addColumnAfter().run()
          },
          {
            unique: "table-column-delete",
            label: "Delete column",
            icon: "icon-trash",
            execute: () => e?.chain().focus().deleteColumn().run()
          },
          {
            unique: "table-header-column",
            label: "Toggle header column",
            execute: () => e?.chain().focus().toggleHeaderColumn().run()
          }
        ],
        separatorAfter: !0
      },
      {
        unique: "table-delete",
        label: "Delete table",
        icon: "icon-trash",
        execute: () => e?.chain().focus().deleteTable().run()
      }
    ];
  }
}
export {
  y as UmbTiptapToolbarTableExtensionApi,
  y as api
};
//# sourceMappingURL=table.tiptap-toolbar-api-BWYQFK9d.js.map
