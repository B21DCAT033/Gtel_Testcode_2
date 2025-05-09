import { a as y, b as h, c as u } from "./collection-action-button.element-TmHU9Eph.js";
import { U as b } from "./constants-BdzGok2s.js";
import { m as T } from "./manifests-CdGHZqd2.js";
import { U as m, m as A } from "./default.action.kind-B00NCT7z.js";
import { a as U, m as C } from "./delete.action.kind-D9M4fvfx.js";
import { m as k, U as r, c as p, d as _ } from "./constants-CXkPsy0q.js";
import { m as E, a as l } from "./switch.condition-AelUFTQk.js";
import { a as $ } from "./menu.context-DgF1nM0C.js";
import { m as I } from "./manifest-D87W_b9a.js";
import { m as O } from "./manifests-fsCMI7-p.js";
import { UMB_WRITABLE_PROPERTY_CONDITION_ALIAS as g } from "@umbraco-cms/backoffice/property";
import { U as w, a as M } from "./constants-mZK85u7C.js";
import { m as R } from "./manifests-BReQksxD.js";
import { a as S, U as K, m as N, e as L } from "./bulk-trash.action.kind-hNo06YoA.js";
import { UMB_TREE_ITEM_DEFAULT_KIND_MANIFEST as B } from "@umbraco-cms/backoffice/tree";
import { a as z, m as D } from "./manifests-BmDqVuWE.js";
import { UMB_SECTION_CONTEXT as P } from "@umbraco-cms/backoffice/section";
import { UMB_CURRENT_USER_CONTEXT as v } from "@umbraco-cms/backoffice/current-user";
import { UmbControllerBase as F } from "@umbraco-cms/backoffice/class-api";
import { m as W } from "./manifests-FzOUH899.js";
import { U as j, a as x } from "./constants-CDwqkOdg.js";
import { f as H, g as V, h as Y, b as X, c as G, m as Z } from "./sort-children-of-modal.token-BqL-ygDY.js";
import { UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST as s } from "@umbraco-cms/backoffice/entity-action";
import { p as d, a as f, n as q, b as J, l as Q } from "./workspace.element-eIsSWjJt.js";
import { UmbConditionBase as c } from "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/action";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/entity";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/validation";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/variant";
import { U as tt } from "./content-collection-workspace.context-token-BliQa7Cu.js";
import { UMB_PROPERTY_STRUCTURE_WORKSPACE_CONTEXT as et } from "@umbraco-cms/backoffice/workspace";
const it = [
  {
    type: "modal",
    alias: "Umb.Modal.AppAuth",
    name: "Umb App Auth Modal",
    element: () => import("./umb-app-auth-modal.element-DjLU5QdT.js")
  }
], nt = [
  {
    type: "authProvider",
    alias: "Umb.AuthProviders.Umbraco",
    name: "Umbraco login provider",
    forProviderName: "Umbraco",
    weight: 1e3,
    meta: {
      label: "Umbraco",
      defaultView: {
        icon: "icon-umbraco",
        look: "primary"
      }
    }
  }
], at = [...it, ...nt], ot = [
  {
    type: "condition",
    name: "Collection Alias Condition",
    alias: y,
    api: () => import("./collection-alias.condition-BoV08hPp.js")
  },
  /** @deprecated No longer used internally. This class will be removed in Umbraco 17. [LK] */
  {
    type: "condition",
    name: "Collection Bulk Action Permission Condition",
    alias: h,
    api: () => import("./collection-bulk-action-permission.condition-C86XgYah.js")
  }
], st = [
  {
    type: "kind",
    alias: "Umb.Kind.CollectionAction.Create",
    matchKind: "create",
    matchType: "collectionAction",
    manifest: {
      type: "collectionAction",
      kind: "create",
      element: () => import("./collection-create-action.element-CVtFVANC.js"),
      weight: 1200,
      meta: {
        label: "#actions_create"
      }
    }
  }
], mt = {
  type: "kind",
  alias: "Umb.Kind.CollectionAction.Button",
  matchKind: "button",
  matchType: "collectionAction",
  manifest: {
    type: "collectionAction",
    kind: "button",
    element: u
  }
}, ct = [mt, ...st], rt = [
  {
    type: "kind",
    alias: "Umb.Kind.WorkspaceView.Collection",
    matchKind: "collection",
    matchType: "workspaceView",
    manifest: {
      type: "workspaceView",
      kind: "collection",
      element: () => import("./collection-workspace-view.element-BSGEziPX.js"),
      meta: {
        label: "Collection",
        pathname: "collection",
        icon: "icon-layers"
      }
    }
  }
], lt = [
  ...ct,
  ...rt,
  ...ot
], pt = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceView.ContentEditor",
  matchKind: "contentEditor",
  matchType: "workspaceView",
  manifest: {
    type: "workspaceView",
    kind: "contentEditor",
    element: () => import("./content-editor.element-GMgpMQhT.js"),
    weight: 1e3,
    meta: {
      label: "Content",
      pathname: "edit",
      icon: "icon-document-line"
    }
  }
}, dt = [pt], ft = [...dt], yt = {
  type: "condition",
  name: "Content has properties Workspace Condition",
  alias: "Umb.Condition.Workspace.ContentHasProperties",
  api: () => import("./content-has-properties.condition-BgDezbgY.js")
}, ht = [yt], ut = [...ft, ...ht], bt = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceView.ContentTypeDesignEditor",
  matchKind: "contentTypeDesignEditor",
  matchType: "workspaceView",
  manifest: {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    element: () => import("./content-type-design-editor.element-C3_KtHd_.js"),
    weight: 1e3,
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line"
    }
  }
}, Tt = [bt], At = {
  type: "modal",
  alias: "Umb.Modal.CompositionPicker",
  name: "ContentType Composition Picker Modal",
  element: () => import("./composition-picker-modal.element-Bm03OTox.js")
}, Ut = [At], Ct = [...Tt, ...Ut], kt = [
  {
    type: "repository",
    alias: b,
    name: "Cultures Repository",
    api: () => import("./culture.repository-5oU4aH_n.js")
  }
], _t = [...kt], Et = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Create",
  matchKind: "create",
  matchType: "entityAction",
  manifest: {
    ...m.manifest,
    type: "entityAction",
    kind: "create",
    api: () => import("./create.action-BJxdKw6w.js"),
    weight: 1200,
    forEntityTypes: [],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    }
  }
}, $t = [
  {
    type: "modal",
    alias: U,
    name: "Entity Create Option Action List Modal",
    element: () => import("./entity-create-option-action-list-modal.element-ggIMA0j-.js")
  }
], It = [Et, ...$t], Ot = [A], gt = [C], wt = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Duplicate",
  matchKind: "duplicate",
  matchType: "entityAction",
  manifest: {
    ...m.manifest,
    type: "entityAction",
    kind: "duplicate",
    api: () => import("./duplicate.action-CJqMCMIH.js"),
    weight: 650,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_copy",
      additionalOptions: !0,
      treeRepositoryAlias: "",
      duplicateRepositoryAlias: ""
    }
  }
}, Mt = [wt], Rt = [
  ...It,
  ...Ot,
  ...gt,
  ...Mt
], St = [k], Kt = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.DuplicateTo",
  matchKind: "duplicateTo",
  matchType: "entityBulkAction",
  manifest: {
    ...r.manifest,
    type: "entityBulkAction",
    kind: "duplicateTo",
    api: () => import("./duplicate-to.action-DownynUw.js"),
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_copyTo",
      bulkDuplicateRepositoryAlias: "",
      treeAlias: ""
    }
  }
}, Nt = [Kt], Lt = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.MoveTo",
  matchKind: "moveTo",
  matchType: "entityBulkAction",
  manifest: {
    ...r.manifest,
    type: "entityBulkAction",
    kind: "moveTo",
    api: () => import("./move-to.action-CVcFQz6t.js"),
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_move",
      bulkMoveRepositoryAlias: "",
      treeAlias: ""
    }
  }
}, Bt = [Lt], zt = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.Trash",
  matchKind: p,
  matchType: "entityBulkAction",
  manifest: {
    ...r.manifest,
    type: "entityBulkAction",
    kind: p,
    api: () => import("./trash.action-CNuTw7No.js"),
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "#actions_trash",
      bulkTrashRepositoryAlias: ""
    }
  }
}, Dt = [zt], Pt = [_], vt = [
  ...St,
  ...Nt,
  ...Bt,
  ...Dt,
  ...Pt
], Ft = [E], Wt = [...Ft], jt = [
  {
    type: "modal",
    alias: "Umb.Modal.IconPicker",
    name: "Icon Picker Modal",
    element: () => import("./icon-picker-modal.element-O60CtrTN.js")
  }
], xt = [
  {
    type: "icons",
    alias: "Umb.Icons.Backoffice",
    name: "Backoffice Icons",
    js: () => import("./icons-o_hLos6w.js")
  },
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.Icons",
    name: "Icons Context",
    api: () => import("./icon-registry.context-CMSUcPiX.js").then((i) => i.i)
  },
  ...jt
], Ht = [
  {
    type: "localization",
    alias: "Umb.Localization.Ar",
    weight: -100,
    name: "العربية",
    meta: {
      culture: "ar"
    },
    js: () => import("./ar-3b2h6yxk.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Bs",
    weight: -100,
    name: "Bosanski",
    meta: {
      culture: "bs"
    },
    js: () => import("./bs-CFFeXwS1.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Cs-CZ",
    weight: -100,
    name: "česky",
    meta: {
      culture: "cs-cz"
    },
    js: () => import("./cs-cz-Jv3dDjZY.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Cy-GB",
    weight: -100,
    name: "Cymraeg (UK)",
    meta: {
      culture: "cy-gb"
    },
    js: () => import("./cy-gb-DvpdM5H5.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Da_DK",
    weight: -100,
    name: "Dansk (Danmark)",
    meta: {
      culture: "da-dk"
    },
    js: () => import("./da-dk-frHtta5n.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.De-DE",
    weight: -100,
    name: "Deutsch (DE)",
    meta: {
      culture: "de-de"
    },
    js: () => import("./de-de-BvN3dGj6.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.De-CH",
    weight: -100,
    name: "Deutsch (Schweiz)",
    meta: {
      culture: "de-ch"
    },
    js: () => import("./de-ch-DQyGkOBo.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.En-GB",
    weight: -100,
    name: "English (UK)",
    meta: {
      culture: "en"
    },
    js: () => import("./en-zWvSKOio.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.En_US",
    weight: -100,
    name: "English (US)",
    meta: {
      culture: "en-us"
    },
    js: () => import("./en-us-rCAkeNnz.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Es-ES",
    weight: -100,
    name: "español",
    meta: {
      culture: "es-es"
    },
    js: () => import("./es-es-Dwcyx_Da.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Fr-FR",
    weight: -100,
    name: "français",
    meta: {
      culture: "fr-fr"
    },
    js: () => import("./fr-fr-BTNJAZQp.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Fr-CH",
    weight: -100,
    name: "Français (Suisse)",
    meta: {
      culture: "fr-ch"
    },
    js: () => import("./fr-ch-CVWwXZ4H.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.He-IL",
    weight: -100,
    name: "Hebrew",
    meta: {
      culture: "he-il"
    },
    js: () => import("./he-il-BM7sMwTQ.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Hr-HR",
    weight: -100,
    name: "Hrvatski",
    meta: {
      culture: "hr-hr"
    },
    js: () => import("./hr-hr-CoB8TWw4.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.It-IT",
    weight: -100,
    name: "italiano",
    meta: {
      culture: "it-it"
    },
    js: () => import("./it-it-nEIBQBH6.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.It-CH",
    weight: -100,
    name: "Italiano (Svizerra)",
    meta: {
      culture: "it-ch"
    },
    js: () => import("./it-ch-CBMPQF0I.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Ja-JP",
    weight: -100,
    name: "日本語",
    meta: {
      culture: "ja-jp"
    },
    js: () => import("./ja-jp-WyfAk6mW.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Ko-KR",
    weight: -100,
    name: "한국어",
    meta: {
      culture: "ko-kr"
    },
    js: () => import("./ko-kr-CxbWXYrt.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Nb-NO",
    weight: -100,
    name: "norsk",
    meta: {
      culture: "nb-no"
    },
    js: () => import("./nb-no-Bd5g8gsE.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Nl-NL",
    weight: -100,
    name: "Nederlands",
    meta: {
      culture: "nl-nl"
    },
    js: () => import("./nl-nl-DhIliJo2.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Pl-PL",
    weight: -100,
    name: "polski",
    meta: {
      culture: "pl-pl"
    },
    js: () => import("./pl-pl-DMfLuzzH.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Pt-BR",
    weight: -100,
    name: "Portuguese Brazil",
    meta: {
      culture: "pt-br"
    },
    js: () => import("./pt-br-CzerYyvG.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Ro-RO",
    weight: -100,
    name: "romana (Romania)",
    meta: {
      culture: "ro-ro"
    },
    js: () => import("./ro-ro-DsjSztAV.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Ru-RU",
    weight: -100,
    name: "русский",
    meta: {
      culture: "ru-ru"
    },
    js: () => import("./ru-ru-DO_XQGMt.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Sv-SE",
    weight: -100,
    name: "Svenska",
    meta: {
      culture: "sv-se"
    },
    js: () => import("./sv-se-DPtiqhJn.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Tr-TR",
    weight: -100,
    name: "Türkçe",
    meta: {
      culture: "tr-tr"
    },
    js: () => import("./tr-tr-Dwk65MlM.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Uk-UA",
    weight: -100,
    name: "Українська",
    meta: {
      culture: "uk-ua"
    },
    js: () => import("./uk-ua-CDMubcHB.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Vi-VN",
    weight: -100,
    name: "Tiếng Việt",
    meta: {
      culture: "vi-vn"
    },
    js: () => import("./vi-vn-CpJzia-p.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Zh-CN",
    weight: -100,
    name: "中文（简体，中国）",
    meta: {
      culture: "zh-cn"
    },
    js: () => import("./zh-cn-AGuZst2W.js")
  },
  {
    type: "localization",
    alias: "Umb.Localization.Zh-TW",
    weight: -100,
    name: "中文（正體，台灣）",
    meta: {
      culture: "zh-tw"
    },
    js: () => import("./zh-tw-D-Y9C-lH.js")
  }
], Vt = [
  {
    type: "kind",
    alias: "Umb.Kind.MenuItem.Link",
    matchKind: "link",
    matchType: "menuItem",
    manifest: {
      type: "menuItem",
      element: () => import("./link-menu-item.element-spes6dfY.js")
    }
  }
], Yt = [...Vt];
class Xt extends l {
  constructor(a, n) {
    super(a, n), this.consumeContext($, (e) => {
      this.observe(
        e.alias,
        (t) => {
          this.permitted = t === this.config.match;
        },
        "observeAlias"
      );
    });
  }
}
const Gt = {
  type: "condition",
  name: "Menu Alias Condition",
  alias: "Umb.Condition.MenuAlias",
  api: Xt
}, Zt = [
  ...Yt,
  Gt
], qt = [
  {
    type: "modal",
    alias: "Umb.Modal.Confirm",
    name: "Confirm Modal",
    element: () => import("./confirm-modal.element-COhIMOef.js")
  }
], Jt = [
  {
    type: "modal",
    alias: "Umb.Modal.DiscardChanges",
    name: "Discard Changes Modal",
    element: () => import("./discard-changes-modal.element-Ds5HOoV9.js").then((i) => i.d)
  }
], Qt = [
  {
    type: "modal",
    alias: "Umb.Modal.ItemPicker",
    name: "Item Picker Modal",
    element: () => import("./item-picker-modal.element-CfXsbeEz.js")
  }
], te = [
  ...qt,
  ...Jt,
  ...I,
  ...Qt
], ee = [...te], ie = [
  {
    type: "kind",
    alias: "Umb.Kind.PickerSearchResultItem.Default",
    matchKind: "default",
    matchType: "pickerSearchResultItem",
    manifest: {
      type: "pickerSearchResultItem",
      api: () => import("./default-picker-search-result-item.context-7tVujM-8.js").then((i) => i.d),
      element: () => import("./default-picker-search-result-item.element-BIXmNDo-.js")
    }
  }
], ne = [...ie], ae = [...ne], oe = [...ae], se = [...O], me = [
  {
    type: "propertyAction",
    kind: "default",
    alias: "Umb.PropertyAction.Clear",
    name: "Clear Property Action",
    api: () => import("./property-action-clear.controller-CBjXTBvd.js"),
    forPropertyEditorUis: [],
    meta: {
      icon: "icon-trash",
      label: "Clear"
    },
    conditions: [
      {
        alias: g
      }
    ]
  },
  ...se
], ce = [
  {
    type: "modal",
    alias: "Umb.Modal.PropertyEditorUiPicker",
    name: "Property Editor UI Picker Modal",
    element: () => import("./property-editor-ui-picker-modal.element-CkxgVfXw.js")
  }
], re = [...ce], le = [
  {
    type: "condition",
    name: "Property Has Value Condition",
    alias: w,
    api: () => import("./has-value.condition-CkdDBc3K.js")
  }
], pe = [
  {
    type: "condition",
    name: "Writable Property Condition",
    alias: M,
    api: () => import("./writable-property.condition-Bq5QPgqt.js")
  }
], de = [...le, ...pe], fe = [...de], ye = [...R], he = {
  type: "condition",
  name: "Entity Is trashed Condition",
  alias: S,
  api: () => import("./entity-is-trashed.condition-Djs2N9pC.js")
}, ue = {
  type: "condition",
  name: "Entity Is not trashed Condition",
  alias: K,
  api: () => import("./entity-is-not-trashed.condition-D5yuKwaX.js")
}, be = [he, ue], Te = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.RecycleBin.Empty",
  matchKind: "emptyRecycleBin",
  matchType: "entityAction",
  manifest: {
    ...m.manifest,
    type: "entityAction",
    kind: "emptyRecycleBin",
    api: () => import("./empty-recycle-bin.action-oH5lQQYu.js"),
    weight: 100,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "Empty Recycle Bin",
      additionalOptions: !0
    }
  }
}, Ae = [Te], Ue = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.RecycleBin.Restore",
  matchKind: "restoreFromRecycleBin",
  matchType: "entityAction",
  manifest: {
    ...m.manifest,
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    api: () => import("./restore-from-recycle-bin.action-q-TvaA4P.js"),
    weight: 100,
    forEntityTypes: [],
    meta: {
      icon: "icon-undo",
      label: "Restore",
      pickerModal: "",
      additionalOptions: !0
    }
  }
}, Ce = [
  Ue,
  {
    type: "modal",
    alias: "Umb.Modal.RecycleBin.Restore",
    name: "Restore From Recycle Bin Modal",
    element: () => import("./restore-from-recycle-bin-modal.element-UlsZVqnD.js")
  }
], ke = [N], _e = [L], Ee = [
  {
    type: "kind",
    alias: "Umb.Kind.TreeItem.RecycleBin",
    matchType: "treeItem",
    matchKind: "recycleBin",
    manifest: {
      ...B.manifest,
      type: "treeItem",
      kind: "recycleBin",
      api: () => import("./recycle-bin-tree-item.context-CqvmUP-m.js")
    }
  }
], $e = [...Ee], Ie = [
  ...be,
  ...Ae,
  ...Ce,
  ...ke,
  ..._e,
  ...$e
];
class Oe extends l {
  constructor(a, n) {
    super(a, n);
    let e;
    this.config.match ? e = (t) => t === this.config.match : this.config.oneOf && (e = (t) => this.config.oneOf.indexOf(t) !== -1), e !== void 0 && this.consumeContext(P, (t) => {
      this.observe(
        t.alias,
        (o) => {
          this.permitted = o ? e(o) : !1;
        },
        "observeAlias"
      );
    });
  }
}
class ge extends F {
  constructor(a, n) {
    super(a), this.permitted = !1, this.config = n.config, this.#t = n.onChange, this.consumeContext(v, (e) => {
      this.observe(
        e.currentUser,
        (t) => {
          const o = t?.allowedSections || [];
          this.permitted = o.includes(this.config.match), this.#t(this.permitted);
        },
        "umbSectionUserPermissionConditionObserver"
      );
    });
  }
  #t;
}
const we = [
  {
    type: "condition",
    name: "Section User Permission Condition",
    alias: z,
    api: ge
  },
  {
    type: "condition",
    name: "Section Alias Condition",
    alias: "Umb.Condition.SectionAlias",
    api: Oe
  }
], Me = [...D], Re = [
  {
    type: "modal",
    alias: "Umb.Modal.SectionPicker",
    name: "Section Picker Modal",
    element: () => import("./section-picker-modal.element-CWp9mISy.js")
  },
  ...we,
  ...Me
], Se = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.ServerFile.Rename",
  matchKind: "renameServerFile",
  matchType: "entityAction",
  manifest: {
    ...m.manifest,
    type: "entityAction",
    kind: "renameServerFile",
    api: () => import("./rename-server-file.action-CCHxvQKq.js").then((i) => i.r),
    weight: 200,
    forEntityTypes: [],
    meta: {
      icon: "icon-edit",
      label: "#actions_rename",
      additionalOptions: !0,
      renameRepositoryAlias: "",
      itemRepositoryAlias: ""
    }
  }
}, Ke = [
  ...W,
  Se
], Ne = [...Ke], Le = [
  {
    type: "store",
    alias: j,
    name: "Temporary File Config Store",
    api: () => import("./config.store-CVJDS2rs.js")
  },
  {
    type: "repository",
    alias: x,
    name: "Temporary File Config Repository",
    api: () => import("./config.repository-BYcO56Dn.js")
  }
], Be = [...Le], ze = [
  {
    type: "globalContext",
    alias: "Umb.GlobalContext.Theme",
    name: "Theme Context",
    api: () => import("./theme.context-XzjZ20Xg.js")
  },
  {
    type: "theme",
    alias: "umb-light-theme",
    name: "Light",
    weight: 300
  },
  {
    type: "theme",
    alias: "umb-dark-theme",
    name: "Dark (Experimental)",
    css: "/umbraco/backoffice/css/dark.theme.css",
    weight: 200
  },
  {
    type: "theme",
    alias: "umb-high-contrast-theme",
    name: "High contrast (Experimental)",
    css: "/umbraco/backoffice/css/high-contrast.theme.css",
    weight: 100
  }
], De = ze, Pe = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Create",
  matchKind: "folderCreate",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "folderCreate",
    api: H,
    weight: 900,
    forEntityTypes: [],
    meta: {
      icon: "icon-add",
      label: "#actions_folderCreate",
      additionalOptions: !0
    }
  }
}, ve = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Delete",
  matchKind: "folderDelete",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "folderDelete",
    api: V,
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "#actions_folderDelete",
      additionalOptions: !0
    }
  }
}, Fe = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Folder.Update",
  matchKind: "folderUpdate",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "folderUpdate",
    api: Y,
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-edit",
      label: "#actions_folderRename",
      additionalOptions: !0
    }
  }
}, We = [
  Pe,
  ve,
  Fe
], je = [
  {
    type: "kind",
    alias: "Umb.Kind.EntityCreateOptionAction.Folder.Create",
    matchKind: "folder",
    matchType: "entityCreateOptionAction",
    manifest: {
      type: "entityCreateOptionAction",
      kind: "folder",
      api: () => import("./folder-entity-create-option-action-B5Z5o9O2.js"),
      weight: 1,
      forEntityTypes: [],
      meta: {
        icon: "icon-folder",
        label: "#create_folder",
        description: "#create_folderDescription"
      }
    }
  }
], xe = [
  {
    type: "modal",
    alias: "Umb.Modal.Folder.Update",
    name: "Update Folder Modal",
    element: () => import("./folder-update-modal.element-lb_DUsFa.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.Folder.Create",
    name: "Create Folder Modal",
    element: () => import("./folder-create-modal.element-5mizfH9T.js")
  }
], He = [
  ...We,
  ...je,
  ...xe
], Ve = [
  {
    type: "kind",
    alias: "Umb.Kind.Tree.Default",
    matchKind: "default",
    matchType: "tree",
    manifest: {
      type: "tree",
      api: () => import("./default-tree.context-BI-3S6zh.js"),
      element: () => import("./default-tree.element-CDy5CpaY.js")
    }
  }
], Ye = [
  {
    type: "modal",
    alias: "Umb.Modal.TreePicker",
    name: "Tree Picker Modal",
    element: () => import("./tree-picker-modal.element-DjpNFx_G.js")
  }
], Xe = [
  {
    type: "modal",
    alias: X,
    name: "Duplicate To Modal",
    element: () => import("./duplicate-to-modal.element-C0pMNYo2.js")
  }
], Ge = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.DuplicateTo",
  matchKind: "duplicateTo",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "duplicateTo",
    api: () => import("./duplicate-to.action-DksfFgDS.js"),
    weight: 600,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_copyTo",
      additionalOptions: !0,
      treeRepositoryAlias: "",
      duplicateRepositoryAlias: "",
      treeAlias: ""
    }
  }
}, Ze = [Ge, ...Xe], qe = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.MoveTo",
  matchKind: "moveTo",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "moveTo",
    api: () => import("./move-to.action-BrC6KKI7.js"),
    weight: 700,
    forEntityTypes: [],
    meta: {
      icon: "icon-enter",
      label: "#actions_move",
      additionalOptions: !0,
      treeRepositoryAlias: "",
      moveRepositoryAlias: "",
      treeAlias: ""
    }
  }
}, Je = [qe], Qe = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Tree.ReloadChildrenOf",
  matchKind: "reloadTreeItemChildren",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    api: () => import("./reload-tree-item-children.action-ykywcgYI.js"),
    weight: 0,
    forEntityTypes: [],
    meta: {
      icon: "icon-refresh",
      label: "#actions_refreshNode"
    }
  }
}, ti = [Qe], ei = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.SortChildrenOf",
  matchKind: "sortChildrenOf",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "sortChildrenOf",
    api: () => import("./sort-children-of.action-IjFIM4aB.js"),
    weight: 100,
    forEntityTypes: [],
    meta: {
      icon: "icon-height",
      label: "#actions_sort",
      additionalOptions: !0,
      itemRepositoryAlias: "",
      sortRepositoryAlias: ""
    }
  }
}, ii = [
  {
    type: "modal",
    alias: G,
    name: "Sort Children Of Modal",
    element: () => import("./sort-children-of-modal.element-iWBag1am.js")
  }
], ni = [ei, ...ii], ai = [
  ...Ze,
  ...Je,
  ...ti,
  ...ni
], oi = [
  ...Z,
  ...Ve,
  ...ai,
  ...He,
  ...Ye
], si = [
  {
    type: "kind",
    alias: "Umb.Kind.WorkspaceView.Content.Collection",
    matchKind: "contentCollection",
    matchType: "workspaceView",
    manifest: {
      type: "workspaceView",
      kind: "contentCollection",
      element: () => import("./content-collection-workspace-view.element-BZPQO1aZ.js"),
      weight: 300,
      meta: {
        label: "Collection",
        pathname: "collection",
        icon: "icon-grid"
      }
    }
  }
], mi = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceAction.Default",
  matchKind: "default",
  matchType: "workspaceAction",
  manifest: {
    type: "workspaceAction",
    kind: "default",
    weight: 1e3,
    element: () => import("./workspace-action-default-kind.element-aKJXgxIo.js"),
    meta: {
      label: "(Missing label in manifest)"
    }
  }
}, ci = [mi], ri = [...ci], li = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceActionMenuItem.Default",
  matchKind: "default",
  matchType: "workspaceActionMenuItem",
  manifest: {
    type: "workspaceActionMenuItem",
    kind: "default",
    weight: 1e3,
    element: () => import("./workspace-action-menu-item.element-Db-kDNtY.js"),
    meta: {
      icon: "",
      label: "(Missing label in manifest)"
    }
  }
}, pi = [li], di = [...pi], fi = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceFooterApp.MenuBreadcrumb",
  matchKind: "menuBreadcrumb",
  matchType: "workspaceFooterApp",
  manifest: {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    element: () => import("./workspace-menu-breadcrumb.element-BesT94Bg.js"),
    weight: 1e3
  }
}, yi = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceFooterApp.VariantMenuBreadcrumb",
  matchKind: "variantMenuBreadcrumb",
  matchType: "workspaceFooterApp",
  manifest: {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    element: () => import("./workspace-variant-menu-breadcrumb.element-D8sq_sWb.js"),
    weight: 1e3
  }
}, hi = [
  fi,
  yi
], ui = [
  ...ri,
  ...di,
  ...hi,
  ...si
], bi = [
  {
    type: "sectionRoute",
    alias: "Umb.SectionRoute.Workspace",
    name: "Workspace Section Route",
    element: () => import("./workspace.element-eIsSWjJt.js").then((i) => i.G),
    api: () => import("./workspace-section-route.route-entry-D69JYK5q.js")
  }
];
class Ti extends c {
  constructor(a, n) {
    super(a, n);
    let e;
    if (this.config.match ? e = (t) => t.workspaceAlias === this.config.match : this.config.oneOf && (e = (t) => this.config.oneOf.indexOf(t.workspaceAlias) !== -1), e !== void 0)
      this.consumeContext(f, (t) => {
        this.permitted = e(t);
      });
    else
      throw new Error(
        `Condition [UMB_WORKSPACE_CONDITION_ALIAS] (${d}) could not be initialized properly. Either "match" or "oneOf" must be defined.`
      );
  }
}
const Ai = {
  type: "condition",
  name: "Workspace Alias Condition",
  alias: d,
  api: Ti
};
class Ui extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(f, (e) => {
      this.permitted = e.getEntityType().toLowerCase() === this.config.match.toLowerCase();
    });
  }
}
const Ci = {
  type: "condition",
  name: "Workspace Entity Type Condition",
  alias: "Umb.Condition.WorkspaceEntityType",
  api: Ui
}, ki = Symbol();
class _i extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(J, (e) => {
      this.observe(
        e.isNew,
        (t) => {
          t !== void 0 && (this.permitted = t === (this.config.match !== void 0 ? this.config.match : !0));
        },
        ki
      );
    });
  }
}
const Ei = {
  type: "condition",
  name: "Workspace Entity Is New Condition",
  alias: q,
  api: _i
}, $i = Symbol();
class Ii extends c {
  constructor(a, n) {
    super(a, n), this.consumeContext(tt, (e) => {
      this.observe(
        e.contentTypeHasCollection,
        (t) => {
          this.permitted = t;
        },
        $i
      );
    });
  }
}
const Oi = {
  type: "condition",
  name: "Workspace Has Collection Condition",
  alias: Q,
  api: Ii
}, gi = Symbol();
class wi extends l {
  constructor(a, n) {
    super(a, n);
    let e;
    if (this.config.match ? e = (t) => t.includes(this.config.match) : this.config.oneOf && (e = (t) => t.some((o) => this.config.oneOf.includes(o))), e !== void 0)
      this.consumeContext(et, (t) => {
        this.observe(
          t.structure.contentTypeAliases,
          (o) => {
            this.permitted = o ? e(o) : !1;
          },
          gi
        );
      });
    else
      throw new Error(
        'Condition `Umb.Condition.WorkspaceContentTypeAlias` could not be initialized properly. Either "match" or "oneOf" must be defined'
      );
  }
}
const Mi = {
  type: "condition",
  name: "Workspace Content Type Alias Condition",
  alias: "Umb.Condition.WorkspaceContentTypeAlias",
  api: wi
}, Ri = [
  Ei,
  Ai,
  Mi,
  Ci,
  Oi
], Si = {
  type: "kind",
  alias: "Umb.Kind.Workspace.Routable",
  matchKind: "routable",
  matchType: "workspace",
  manifest: {
    type: "workspace",
    kind: "routable",
    element: () => import("./routable-workspace.element-DlGr4KOt.js")
  }
}, Ki = [
  {
    type: "kind",
    alias: "Umb.Kind.Workspace.Default",
    matchKind: "default",
    matchType: "workspace",
    manifest: {
      type: "workspace",
      kind: "default",
      element: () => import("./default-workspace.element-DAs2xd_c.js"),
      api: () => import("./default-workspace.context-2RV60MDf.js")
    }
  }
], Ni = [
  Si,
  ...Ki
], Li = [
  {
    type: "modal",
    alias: "Umb.Modal.Workspace",
    name: "Workspace Modal",
    element: () => import("./workspace.element-eIsSWjJt.js").then((i) => i.F)
  }
], Bi = [
  ...ui,
  ...bi,
  ...Ri,
  ...Ni,
  ...Li
], Un = [
  ...at,
  ...lt,
  ...ut,
  ...Ct,
  ..._t,
  ...T,
  ...Rt,
  ...vt,
  ...Wt,
  ...xt,
  ...Ht,
  ...Zt,
  ...ee,
  ...oe,
  ...me,
  ...re,
  ...fe,
  ...ye,
  ...Ie,
  ...Re,
  ...Ne,
  ...Be,
  ...De,
  ...oi,
  ...Bi
];
export {
  Un as manifests
};
//# sourceMappingURL=manifests.js.map
