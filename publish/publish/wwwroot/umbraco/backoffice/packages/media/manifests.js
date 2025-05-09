import { w as a, a as O, b as W, c as F, U as b, d as C, t as _, r as y, e as h, n as I, o as P, f as B, g as M, m as V, l as m, h as A, k as D, i as k, j as x, p as H, q as K, s as G, u as j, v as q } from "./dropzone.element-DyItP5Bd.js";
import { UMB_WORKSPACE_CONDITION_ALIAS as i, UmbSubmitWorkspaceAction as S } from "@umbraco-cms/backoffice/workspace";
import { UMB_COLLECTION_ALIAS_CONDITION as s } from "@umbraco-cms/backoffice/collection";
import { i as l, h as t, s as p, x as z, t as J, v as X } from "./input-upload-field.element-DpMbvzUB.js";
import "./media-url.repository-DUerHiJb.js";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as c, UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS as g } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND as Q } from "@umbraco-cms/backoffice/relations";
import { UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS as Z } from "@umbraco-cms/backoffice/repository";
import { UMB_CONTENT_HAS_PROPERTIES_WORKSPACE_CONDITION as ee } from "@umbraco-cms/backoffice/content";
import "@umbraco-cms/backoffice/picker-input";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/utils";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as ie } from "@umbraco-cms/backoffice/section";
import { m as r, l as o, c as E, k as n, w as L, E as U, U as T, t as w, u as te, v as ae, q as $, n as Y, B as oe, C as ne, A as v, F as se, p as f, I as u, J as N, x as re, D as pe, o as d } from "./constants-vViimo-q.js";
import { a as me, b as le } from "./constants-C418HnkF.js";
const ce = [
  {
    type: "workspaceInfoApp",
    name: "Media History Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.History",
    element: () => import("./media-history-workspace-info-app.element-DbeE-KkJ.js"),
    weight: 80,
    conditions: [
      {
        alias: i,
        match: a
      }
    ]
  }
], de = [...ce], ye = [
  {
    type: "collectionAction",
    kind: "button",
    name: "Create Media Collection Action",
    alias: "Umb.CollectionAction.Media.Create",
    element: () => import("./create-media-collection-action.element-2jaGVPR9.js"),
    weight: 100,
    meta: {
      label: "#general_create"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  }
], Me = [
  {
    type: "repository",
    alias: O,
    name: "Media Collection Repository",
    api: () => import("./media-collection.repository-cyVuqDq2.js")
  }
], Ae = [
  {
    type: "collectionView",
    alias: W,
    name: "Media Grid Collection View",
    element: () => import("./media-grid-collection-view.element-lyq6dONi.js"),
    weight: 300,
    meta: {
      label: "Grid",
      icon: "icon-grid",
      pathName: "grid"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  },
  {
    type: "collectionView",
    alias: F,
    name: "Media Table Collection View",
    element: () => import("./media-table-collection-view.element-BCFRSyCC.js"),
    weight: 200,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: "Umb.Collection.Media"
      }
    ]
  }
], Ee = [
  {
    type: "collection",
    alias: b,
    name: "Media Collection",
    api: () => import("./media-collection.context-CGyl6CcB.js"),
    element: () => import("./media-collection.element-CiXOVZVB.js"),
    meta: {
      repositoryAlias: O
    }
  },
  ...ye,
  ...Me,
  ...Ae
], Te = [
  {
    type: "modal",
    alias: "Umb.Modal.Dropzone.MediaTypePicker",
    name: "Dropzone Media Type Picker Modal",
    element: () => import("./dropzone.element-DyItP5Bd.js").then((e) => e.C)
  }
], _e = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Media.Create",
    name: "Create Media Entity Action",
    weight: 1200,
    api: () => import("./create.action-OuJdS2sS.js"),
    forEntityTypes: [l, t],
    meta: {
      icon: "icon-add",
      label: "#actions_create",
      additionalOptions: !0
    },
    conditions: [
      {
        alias: c
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.Media.CreateOptions",
    name: "Media Create Options Modal",
    element: () => import("./media-create-options-modal.element-COwIuQGN.js")
  }
], Ie = [
  {
    type: "repository",
    alias: C,
    name: "Move Media Repository",
    api: () => import("./media-move.repository-P71GH5ea.js")
  }
], Ue = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.Media.MoveTo",
    name: "Move Media Entity Action",
    forEntityTypes: [t],
    meta: {
      treeRepositoryAlias: y,
      moveRepositoryAlias: C,
      treeAlias: _
    },
    conditions: [
      {
        alias: c
      }
    ]
  },
  ...Ie
], Re = [
  {
    type: "repository",
    alias: h,
    name: "Sort Children Of Media Repository",
    api: () => import("./sort-children-of.repository-DBdP2wZz.js")
  }
], fe = [
  ...Re,
  {
    type: "entityAction",
    kind: "sortChildrenOf",
    alias: "Umb.EntityAction.Media.SortChildrenOf",
    name: "Sort Children Of Media Entity Action",
    forEntityTypes: [l, t],
    meta: {
      itemRepositoryAlias: p,
      sortChildrenOfRepositoryAlias: h,
      treeRepositoryAlias: y
    },
    conditions: [
      {
        alias: c
      }
    ]
  }
], be = [
  ..._e,
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Media.Delete",
    name: "Delete Media Entity Action ",
    kind: "deleteWithRelation",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      detailRepositoryAlias: P,
      referenceRepositoryAlias: I
    },
    conditions: [
      {
        alias: g
      }
    ]
  },
  ...Ue,
  ...fe
], Se = [
  {
    type: "repository",
    alias: B,
    name: "Bulk Move Media Repository",
    api: () => import("./move-to.repository-8BDkMnDU.js")
  }
], ue = {
  type: "entityBulkAction",
  kind: "moveTo",
  alias: "Umb.EntityBulkAction.Media.MoveTo",
  name: "Move Media Entity Bulk Action",
  weight: 20,
  forEntityTypes: [t],
  meta: {
    bulkMoveRepositoryAlias: B,
    treeAlias: _
  },
  conditions: [
    {
      alias: s,
      match: b
    }
  ]
}, ke = [ue, ...Se], Oe = [...ke], Ce = [
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Audio",
    name: "Audio File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-audio.element-QqbCdMml.js"),
    forMimeTypes: ["audio/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.File",
    name: "File File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-file.element-TIG5HFkQ.js"),
    forMimeTypes: ["*/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Image",
    name: "Image File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-image.element-KylDHzzd.js"),
    forMimeTypes: ["image/*"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Svg",
    name: "Svg File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-svg.element-CDuUdQ7j.js"),
    forMimeTypes: ["image/svg+xml"]
  },
  {
    type: "fileUploadPreview",
    alias: "Umb.FileUploadPreview.Video",
    name: "Video File Upload Preview",
    weight: 100,
    element: () => import("./input-upload-field-video.element-Cn9Qbrjc.js"),
    forMimeTypes: ["video/*"]
  }
], he = [
  {
    type: "entityItemRef",
    alias: "Umb.EntityItemRef.Media",
    name: "Media Entity Item Reference",
    element: () => import("./media-item-ref.element-d_PULXey.js"),
    forEntityTypes: [t]
  }
], Pe = [
  {
    type: "menu",
    alias: M,
    name: "Media Menu"
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media",
    name: "Media Menu Item",
    weight: 100,
    meta: {
      label: "Media",
      menus: [M],
      treeAlias: _,
      hideTreeRoot: !0
    }
  },
  {
    type: "workspaceContext",
    name: "Media Menu Structure Workspace Context",
    alias: "Umb.Context.Media.Menu.Structure",
    api: () => import("./media-menu-structure.context-3FcVLfhw.js"),
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.Media"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "variantMenuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.Media.Breadcrumb",
    name: "Media Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.Media"
      }
    ]
  }
], Be = [
  {
    type: "modal",
    alias: "Umb.Modal.ImageCropperEditor",
    name: "Image Cropper Editor Modal",
    js: () => import("./input-upload-field.element-DpMbvzUB.js").then((e) => e.F)
  }
], De = [...Be], ge = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaCaptionAltText",
    name: "Media Caption Alt Text",
    element: () => import("./input-upload-field.element-DpMbvzUB.js").then((e) => e.L)
  }
], Le = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaPicker",
    name: "Media Picker Modal",
    js: () => import("./input-upload-field.element-DpMbvzUB.js").then((e) => e.K)
  }
], we = [...Le], $e = [...De, ...ge, ...we], Ye = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.ImageCropsConfiguration",
  name: "Image Crops Property Editor UI",
  element: () => import("./property-editor-ui-image-crops.element-BCLh6N5G.js"),
  meta: {
    label: "Image Crops Configuration",
    icon: "icon-autofill",
    group: "common"
  }
}, ve = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaEntityPicker",
  name: "Media Entity Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-entity-picker.element-CLQBw4It.js"),
  meta: {
    label: "Media Entity Picker",
    icon: "icon-picture",
    group: "pickers",
    supportsReadOnly: !0
  }
}, Ne = {
  type: "propertyEditorSchema",
  name: "Email Address",
  alias: "Umbraco.ImageCropper",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropper",
    settings: {
      properties: [
        {
          alias: "crops",
          label: "Define Crops",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        }
      ]
    }
  }
}, We = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.ImageCropper",
    name: "Image Cropper Property Editor UI",
    element: () => import("./property-editor-ui-image-cropper.element-DGLeFucr.js"),
    meta: {
      label: "Image Cropper",
      icon: "icon-crop",
      group: "media",
      propertyEditorSchemaAlias: "Umbraco.ImageCropper"
    }
  },
  Ne
], Fe = {
  type: "propertyEditorSchema",
  name: "Media Picker",
  alias: "Umbraco.MediaPicker3",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.MediaPicker",
    settings: {
      properties: [
        {
          alias: "filter",
          label: "Accepted types",
          description: "Limit to specific types",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaTypePicker"
        },
        {
          alias: "multiple",
          label: "Pick multiple items",
          description: "Outputs a IEnumerable",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "validationLimit",
          label: "Amount",
          description: "Set a required range of medias",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.NumberRange",
          config: [{ alias: "validationRange", value: { min: 0, max: 1 / 0 } }]
        },
        {
          alias: "startNodeId",
          label: "Start node",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaEntityPicker",
          config: [{ alias: "validationLimit", value: { min: 0, max: 1 } }]
        },
        {
          alias: "enableLocalFocalPoint",
          label: "Enable Focal Point",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "crops",
          label: "Image Crops",
          description: "Local crops, stored on document",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.ImageCropsConfiguration"
        },
        {
          alias: "ignoreUserStartNodes",
          label: "Ignore User Start Nodes",
          description: "Selecting this option allows a user to choose nodes that they normally dont have access to.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, Ve = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.MediaPicker",
    name: "Media Picker Property Editor UI",
    element: () => import("./property-editor-ui-media-picker.element-Bb62LICg.js"),
    meta: {
      label: "Media Picker",
      propertyEditorSchemaAlias: "Umbraco.MediaPicker3",
      icon: "icon-picture",
      group: "media",
      supportsReadOnly: !0
    }
  },
  Fe
], xe = {
  type: "propertyEditorSchema",
  name: "File upload",
  alias: "Umbraco.UploadField",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.UploadField",
    settings: {
      properties: [
        {
          alias: "fileExtensions",
          label: "Accepted file extensions",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.AcceptedUploadTypes"
        }
      ]
    }
  }
}, He = [
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUi.UploadField",
    name: "Upload Field Property Editor UI",
    element: () => import("./property-editor-ui-upload-field.element-_yOPOhs6.js"),
    meta: {
      label: "Upload Field",
      propertyEditorSchemaAlias: "Umbraco.UploadField",
      icon: "icon-download-alt",
      group: "media"
    }
  },
  xe
], Ke = [
  ...We,
  ...Ve,
  ...He,
  Ye,
  ve
], Ge = [
  {
    type: "repository",
    alias: V,
    name: "Bulk Trash Media Repository",
    api: () => import("./trash.repository-dgxJZo6m.js")
  }
], je = {
  type: "entityBulkAction",
  kind: Q,
  alias: "Umb.EntityBulkAction.Media.Trash",
  name: "Trash Media Entity Bulk Action",
  weight: 10,
  forEntityTypes: [t],
  meta: {
    itemRepositoryAlias: p,
    recycleBinRepositoryAlias: m,
    referenceRepositoryAlias: I
  },
  conditions: [
    {
      alias: s,
      match: b
    }
  ]
}, qe = [je, ...Ge], ze = [
  {
    type: "entityAction",
    kind: "trashWithRelation",
    alias: "Umb.EntityAction.Media.RecycleBin.Trash",
    name: "Trash Media Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: m,
      referenceRepositoryAlias: I
    },
    conditions: [
      {
        alias: c
      }
    ]
  },
  {
    type: "entityAction",
    kind: "restoreFromRecycleBin",
    alias: "Umb.EntityAction.Media.RecycleBin.Restore",
    name: "Restore Media From Recycle Bin Entity Action",
    forEntityTypes: [t],
    meta: {
      itemRepositoryAlias: p,
      recycleBinRepositoryAlias: m,
      pickerModal: z
    },
    conditions: [
      {
        alias: g
      }
    ]
  },
  {
    type: "entityAction",
    kind: "emptyRecycleBin",
    alias: "Umb.EntityAction.Media.RecycleBin.Empty",
    name: "Empty Media Recycle Bin Entity Action",
    forEntityTypes: [A],
    meta: {
      recycleBinRepositoryAlias: m
    }
  },
  ...qe
], Je = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.Media.RecycleBin",
    name: "Media Recycle Bin Menu Item",
    weight: 100,
    meta: {
      treeAlias: D,
      label: "Recycle Bin",
      icon: "icon-trash",
      menus: [M]
    },
    conditions: [
      {
        alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin"
      }
    ]
  }
], Xe = [
  {
    type: "repository",
    alias: m,
    name: "Media Recycle Bin Repository",
    api: () => import("./media-recycle-bin.repository-DB9dfBvR.js")
  }
], Qe = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaRecycleBin.Tree.ReloadChildrenOf",
    name: "Reload Media Recycle Bin Tree Item Children Entity Action",
    forEntityTypes: [A]
  }
], Ze = [
  {
    type: "repository",
    alias: k,
    name: "Media Recycle Bin Tree Repository",
    api: () => import("./media-recycle-bin-tree.repository-wJ_VQJ-h.js")
  },
  {
    type: "treeStore",
    alias: x,
    name: "Media Recycle Bin Tree Store",
    api: () => import("./media-recycle-bin-tree.store-AR7luMYE.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: D,
    name: "Media Recycle Bin Tree",
    meta: {
      repositoryAlias: k
    }
  },
  {
    type: "treeItem",
    kind: "recycleBin",
    alias: "Umb.TreeItem.Media.RecycleBin",
    name: "Media Recycle Bin Tree Item",
    forEntityTypes: [A],
    meta: {
      supportedEntityTypes: [t]
    }
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Media.RecycleBin.Root",
    name: "Media Recycle Bin Root Workspace",
    meta: {
      entityType: A,
      headline: "#general_recycleBin"
    }
  },
  ...Qe
], ei = [
  {
    type: "condition",
    name: "Allow Media Recycle Bin Current User Condition",
    alias: "Umb.Condition.CurrentUser.AllowMediaRecycleBin",
    api: () => import("./allow-media-recycle-bin.condition-C80fSgKr.js")
  },
  ...ze,
  ...Je,
  ...Xe,
  ...Ze
], ii = [
  {
    type: "repository",
    alias: I,
    name: "Media Reference Repository",
    api: () => import("./media-reference.repository-CcP6oL9P.js")
  },
  {
    type: "dataSourceDataMapping",
    alias: "Umb.DataSourceDataMapping.ManagementApi.MediaReferenceResponse",
    name: "Media Reference Response Management Api Data Mapping",
    api: () => import("./media-reference-response.management-api.mapping-_LfC0fQs.js"),
    forDataSource: Z,
    forDataModel: "MediaReferenceResponseModel"
  }
], ti = [
  {
    type: "workspaceInfoApp",
    name: "Media References Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.References",
    element: () => import("./media-references-workspace-info-app.element-DRYixYUW.js"),
    weight: 90,
    conditions: [
      {
        alias: i,
        match: a
      }
    ]
  }
], ai = [...ii, ...ti], oi = [
  {
    type: "repository",
    alias: P,
    name: "Media Detail Repository",
    api: () => import("./input-upload-field.element-DpMbvzUB.js").then((e) => e.G)
  },
  {
    type: "store",
    alias: H,
    name: "Media Detail Store",
    api: () => import("./media-detail.store-BpFdZGrM.js")
  }
], ni = [
  {
    type: "repository",
    alias: p,
    name: "Media Item Repository",
    api: () => import("./input-upload-field.element-DpMbvzUB.js").then((e) => e.H)
  },
  {
    type: "itemStore",
    alias: J,
    name: "Media Item Store",
    api: () => import("./media-item.store-CINHcEq8.js")
  }
], si = [
  {
    type: "repository",
    alias: K,
    name: "Media Validation Repository",
    api: () => import("./media-validation.repository-3oFTDjyn.js")
  }
], ri = [...oi, ...ni, ...si], pi = [
  {
    name: "Media Search Provider",
    alias: X,
    type: "searchProvider",
    api: () => import("./input-upload-field.element-DpMbvzUB.js").then((e) => e.J),
    weight: 700,
    meta: {
      label: "Media"
    }
  },
  {
    name: "Media Search Result Item ",
    alias: "Umb.SearchResultItem.Media",
    type: "searchResultItem",
    forEntityTypes: [t]
  }
], mi = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Media",
    name: "Media Dashboard",
    element: () => import("./media-dashboard.element-BGkbU9hU.js"),
    weight: 200,
    meta: {
      label: "#general_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Media"
      }
    ]
  }
], li = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Media.Tree.ReloadChildrenOf",
    name: "Reload Media Tree Item Children Entity Action",
    forEntityTypes: [t, l]
  }
], ci = [
  {
    type: "repository",
    alias: y,
    name: "Media Tree Repository",
    api: () => import("./input-upload-field.element-DpMbvzUB.js").then((e) => e.I)
  },
  {
    type: "treeStore",
    alias: G,
    name: "Media Tree Store",
    api: () => import("./media-tree.store-EWhzCFeZ.js")
  },
  {
    type: "tree",
    alias: _,
    name: "Media Tree",
    element: () => import("./media-tree.element-yMs0cVKY.js"),
    api: () => import("./media-tree.context-CVrMkrme.js"),
    meta: {
      repositoryAlias: y
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Media",
    name: "Media Tree Item",
    element: () => import("./media-tree-item.element-BQZeslKu.js"),
    api: () => import("./media-tree-item.context-Dp9t5q1N.js"),
    forEntityTypes: [t]
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Media.Root",
    name: "Media Tree Root",
    forEntityTypes: [l]
  },
  ...li
], di = {
  type: "repository",
  alias: j,
  name: "Media Url Repository",
  api: () => import("./media-url.repository-DUerHiJb.js").then((e) => e.m)
}, yi = {
  type: "itemStore",
  alias: q,
  name: "Media Url Store",
  api: () => import("./media-url.store-CFQu1HhG.js")
}, Mi = [di, yi], Ai = [
  {
    type: "workspaceInfoApp",
    name: "Media Links Workspace Info App",
    alias: "Umb.WorkspaceInfoApp.Media.Links",
    element: () => import("./media-links-workspace-info-app.element-4owZKNrr.js"),
    weight: 100,
    conditions: [
      {
        alias: i,
        match: a
      }
    ]
  }
], Ei = [...Mi, ...Ai], Ti = [
  {
    type: "workspace",
    kind: "routable",
    alias: a,
    name: "Media Workspace",
    api: () => import("./media-workspace.context-BE7jE5T5.js"),
    meta: {
      entityType: "media"
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Media.Collection",
    name: "Media Workspace Collection View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: i,
        match: a
      },
      {
        alias: "Umb.Condition.WorkspaceHasCollection"
      }
    ]
  },
  {
    type: "workspaceView",
    kind: "contentEditor",
    alias: "Umb.WorkspaceView.Media.Edit",
    name: "Media Workspace Edit View",
    weight: 200,
    meta: {
      label: "#general_details",
      pathname: "media",
      icon: "icon-picture"
    },
    conditions: [
      {
        alias: i,
        match: a
      },
      {
        alias: ee
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Media.Info",
    name: "Media Workspace Info View",
    element: () => import("./media-workspace-view-info.element-CM1XgmXU.js"),
    weight: 100,
    meta: {
      label: "#general_info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: i,
        match: a
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Media.Save",
    name: "Save Media Workspace Action",
    api: S,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: a
      },
      {
        alias: c
      }
    ]
  }
], _i = [
  ...de,
  ...Ee,
  ...Te,
  ...be,
  ...Oe,
  ...Ce,
  ...he,
  ...Pe,
  ...$e,
  ...Ke,
  ...ei,
  ...ai,
  ...ri,
  ...pi,
  ...mi,
  ...ci,
  ...Ei,
  ...Ti
], R = "Umb.Section.Media", Ii = [
  {
    type: "section",
    alias: R,
    name: "Media Section",
    weight: 900,
    meta: {
      label: "#sections_media",
      pathname: "media"
    },
    conditions: [
      {
        alias: ie,
        match: R
      }
    ]
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SectionSidebarMenu.Media",
    name: "Media Section Sidebar Menu",
    weight: 100,
    meta: {
      label: "#sections_media",
      menu: M,
      entityType: l
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: R
      }
    ]
  }
], Ui = [
  {
    type: "entityCreateOptionAction",
    alias: "Umb.EntityCreateOptionAction.MediaType.Default",
    name: "Default Media Type Entity Create Option Action",
    weight: 1200,
    api: () => import("./default-media-type-create-option-action-B1kh7-pU.js"),
    forEntityTypes: [r, o],
    meta: {
      icon: "icon-picture",
      label: "#content_mediatype"
    }
  }
], Ri = [
  {
    type: "entityCreateOptionAction",
    kind: "folder",
    alias: "Umb.EntityCreateOptionAction.MediaType.Folder",
    name: "Media Type Folder Entity Create Option Action",
    forEntityTypes: [r, o],
    meta: {
      icon: "icon-folder",
      label: "#create_folder",
      description: "#create_folderDescription",
      folderRepositoryAlias: E
    }
  }
], fi = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Umb.EntityAction.MediaType.Create",
    name: "Create Media Type Entity Action",
    weight: 1200,
    forEntityTypes: [n, r, o]
  },
  // TODO: Deprecated: Will be removed in 17.0.0
  {
    type: "modal",
    alias: "Umb.Modal.MediaTypeCreateOptions",
    name: "Media Type Create Options Modal",
    element: () => import("./media-type-create-options-modal.element-Bf7MqsFz.js")
  },
  ...Ui,
  ...Ri
], bi = [
  {
    type: "repository",
    alias: L,
    name: "Move Media Type Repository",
    api: () => import("./media-type-move.repository-nHNwQHaQ.js")
  }
], Si = [
  {
    type: "entityAction",
    kind: "moveTo",
    alias: "Umb.EntityAction.MediaType.MoveTo",
    name: "Move Media Type Entity Action",
    forEntityTypes: [n],
    meta: {
      treeRepositoryAlias: T,
      moveRepositoryAlias: L,
      treeAlias: U,
      foldersOnly: !0
    }
  },
  ...bi
], ui = [
  {
    type: "repository",
    alias: w,
    name: "Duplicate Media Type Repository",
    api: () => import("./media-type-duplicate.repository-B6vj3V1C.js")
  }
], ki = [
  {
    type: "entityAction",
    kind: "duplicateTo",
    alias: "Umb.EntityAction.MediaType.DuplicateTo",
    name: "Duplicate Document To Entity Action",
    forEntityTypes: [n],
    meta: {
      duplicateRepositoryAlias: w,
      treeAlias: U,
      treeRepositoryAlias: T,
      foldersOnly: !0
    }
  },
  ...ui
], Oi = [
  {
    type: "repository",
    alias: te,
    name: "Export Media Type Repository",
    api: () => import("./media-type-export.repository-CM32IJJV.js")
  }
], Ci = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Export",
    name: "Export Media Type Entity Action",
    forEntityTypes: [n],
    api: () => import("./media-type-export.action-DgXaPUln.js"),
    meta: {
      icon: "icon-download-alt",
      label: "#actions_export",
      additionalOptions: !0
    }
  },
  ...Oi
], hi = [
  {
    type: "repository",
    alias: ae,
    name: "Import Media Type Repository",
    api: () => import("./media-type-import.repository-CMsl0c45.js")
  }
], Pi = [
  {
    type: "modal",
    alias: "Umb.Modal.MediaType.Import",
    name: "Media Type Import Modal",
    element: () => import("./media-type-import-modal.element-hM23yXkU.js")
  }
], Bi = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.MediaType.Import",
    name: "Export Media Type Entity Action",
    forEntityTypes: [r],
    api: () => import("./media-type-import.action-CN7GYVci.js"),
    meta: {
      icon: "icon-page-up",
      label: "#actions_import",
      additionalOptions: !0
    }
  },
  ...hi,
  ...Pi
], Di = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Umb.EntityAction.MediaType.Delete",
    name: "Delete Media Type Entity Action",
    forEntityTypes: [n],
    meta: {
      detailRepositoryAlias: Y,
      itemRepositoryAlias: $
    }
  },
  ...fi,
  ...Si,
  ...ki,
  ...Ci,
  ...Bi
], gi = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Umb.MenuItem.MediaTypes",
    name: "Media Types Menu Item",
    weight: 800,
    meta: {
      label: "Media Types",
      treeAlias: U,
      menus: ["Umb.Menu.StructureSettings"]
    }
  },
  {
    type: "workspaceContext",
    name: "Media Type Menu Structure Workspace Context",
    alias: "Umb.Context.MediaType.Menu.Structure",
    api: () => import("./media-type-menu-structure.context-QG9YNPSZ.js"),
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.MediaType"
      }
    ]
  },
  {
    type: "workspaceFooterApp",
    kind: "menuBreadcrumb",
    alias: "Umb.WorkspaceFooterApp.MediaType.Breadcrumb",
    name: "Media Type Breadcrumb Workspace Footer App",
    conditions: [
      {
        alias: i,
        match: "Umb.Workspace.MediaType"
      }
    ]
  }
], Li = [
  {
    type: "repository",
    alias: Y,
    name: "Media Types Repository",
    api: () => import("./media-type-detail.repository-C1YWBdOX.js")
  },
  {
    type: "store",
    alias: oe,
    name: "Media Type Store",
    api: () => import("./media-type-detail.store-CAE1FprF.js")
  }
], wi = [
  {
    type: "repository",
    alias: $,
    name: "Media Type Item Repository",
    api: () => import("./media-type-item.repository-B_IcOEo0.js")
  },
  {
    type: "itemStore",
    alias: ne,
    name: "Media Type Item Store",
    api: () => import("./media-type-item.store-d2pBwE_G.js")
  }
], $i = [
  {
    type: "repository",
    alias: v,
    name: "Media Type Composition Repository",
    api: () => import("./media-type-composition.repository-BZyDt7xr.js")
  }
], Yi = [...Li, ...wi, ...$i], vi = [
  {
    type: "repository",
    alias: E,
    name: "Media Type Folder Repository",
    api: () => import("./media-type-folder.repository-Ms98Gjbq.js")
  },
  {
    type: "store",
    alias: se,
    name: "Media Type Folder Store",
    api: () => import("./media-type-folder.store-kEUrQYGV.js")
  }
], Ni = [
  {
    type: "workspace",
    kind: "routable",
    alias: f,
    name: "Media Type Folder Workspace",
    api: () => import("./media-type-folder-workspace.context-DjYvxtF3.js"),
    meta: {
      entityType: o
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MediaType.Folder.Submit",
    name: "Submit Media Type Folder Workspace Action",
    api: S,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: f
      }
    ]
  }
], Wi = [
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Umb.EntityAction.MediaType.Folder.Update",
    name: "Rename Media Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: E
    }
  },
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: "Umb.EntityAction.MediaType.Folder.Delete",
    name: "Delete Media Type Folder Entity Action",
    forEntityTypes: [o],
    meta: {
      folderRepositoryAlias: E
    }
  },
  ...vi,
  ...Ni
], Fi = [
  {
    type: "collectionAction",
    kind: "create",
    name: "Media Type Tree Item Children Collection Create Action",
    alias: "Umb.CollectionAction.MediaTypeTreeItemChildren.Create",
    conditions: [
      {
        alias: s,
        match: u
      }
    ]
  }
], Vi = [
  {
    type: "repository",
    alias: N,
    name: "Media Type Tree Item Children Collection Repository",
    api: () => import("./media-type-tree-item-children-collection.repository-DWYIssyG.js")
  }
], xi = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.MediaType.TreeItem.Table",
    name: "Media Type Tree Item Table Collection View",
    element: () => import("./media-type-tree-item-table-collection-view.element-D9c5QBD-.js"),
    weight: 300,
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: s,
        match: u
      }
    ]
  }
], Hi = [
  {
    type: "collection",
    kind: "default",
    alias: u,
    name: "Media Type Tree Item Children Collection",
    meta: {
      repositoryAlias: N
    }
  },
  ...Fi,
  ...Vi,
  ...xi
], Ki = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.MediaType.Tree.ReloadChildrenOf",
    name: "Reload Media Type Tree Item Children Entity Action",
    forEntityTypes: [n, r, o]
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.WorkspaceView.MediaType.TreeItemChildrenCollection",
    name: "Media Type Tree Item Children Collection Workspace View",
    meta: {
      label: "Folder",
      pathname: "folder",
      icon: "icon-folder",
      collectionAlias: "Umb.Collection.MediaType.TreeItemChildren"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        oneOf: [re, f]
      }
    ]
  },
  ...Hi
], Gi = [
  {
    type: "repository",
    alias: T,
    name: "Media Type Tree Repository",
    api: () => import("./media-type-tree.repository-CE4lYOre.js")
  },
  {
    type: "treeStore",
    alias: pe,
    name: "Media Type Tree Store",
    api: () => import("./media-type-tree.store-DM_JSknO.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: U,
    name: "Media Type Tree",
    meta: {
      repositoryAlias: T
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.MediaType",
    name: "Media Type Tree Item",
    forEntityTypes: [n, r, o]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.MediaType.Root",
    name: "Media Type Root Workspace",
    meta: {
      entityType: r,
      headline: "#treeHeaders_mediaTypes"
    }
  },
  ...Wi,
  ...Ki
], ji = [
  {
    type: "workspace",
    kind: "routable",
    alias: d,
    name: "Media Type Workspace",
    api: () => import("./media-type-workspace.context-B9HhUIQv.js"),
    meta: {
      entityType: "media-type"
    }
  },
  {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    alias: "Umb.WorkspaceView.MediaType.Design",
    name: "Media Type Workspace Design View",
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line",
      compositionRepositoryAlias: v
    },
    conditions: [
      {
        alias: i,
        match: d
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.MediaType.Structure",
    name: "Media Type Workspace Structure View",
    element: () => import("./media-type-workspace-view-structure.element-CAPMmBUz.js"),
    weight: 800,
    meta: {
      label: "#contentTypeEditor_structure",
      pathname: "structure",
      icon: "icon-mindmap"
    },
    conditions: [
      {
        alias: i,
        match: d
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.MediaType.Save",
    name: "Save Media Type Workspace Action",
    api: S,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: i,
        match: d
      }
    ]
  }
], qi = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.MediaTypePicker",
  name: "Media Type Picker Property Editor UI",
  element: () => import("./property-editor-ui-media-type-picker.element-_qq7DpxF.js"),
  meta: {
    label: "Media Type Picker",
    icon: "icon-media-dashed-line",
    group: "advanced",
    settings: {
      properties: [
        {
          alias: "showOpenButton",
          label: "Show open button",
          description: "Opens the node in a dialog",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, zi = [qi], Ji = [
  {
    name: "Media Type Search Provider",
    alias: "Umb.SearchProvider.MediaType",
    type: "searchProvider",
    api: () => import("./media-type.search-provider-Byid2vl7.js"),
    weight: 500,
    meta: {
      label: "Media Types"
    }
  },
  {
    name: "Media Type Search Result Item ",
    alias: "Umb.SearchResultItem.MediaType",
    type: "searchResultItem",
    forEntityTypes: [n]
  }
], Xi = [
  ...Di,
  ...gi,
  ...Yi,
  ...Gi,
  ...ji,
  ...zi,
  ...Ji
], Qi = [
  {
    type: "repository",
    alias: me,
    name: "Imaging Repository",
    api: () => import("./imaging.repository-C1w8u3qE.js")
  },
  {
    type: "store",
    alias: le,
    name: "Imaging Store",
    api: () => import("./imaging.store-COwLNIg-.js")
  }
], bt = [
  ...Ii,
  ..._i,
  ...Xi,
  ...Qi
];
export {
  bt as manifests
};
//# sourceMappingURL=manifests.js.map
