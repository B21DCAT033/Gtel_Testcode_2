import { A as L, l as m, B as n, n as B, p as i, k as r, m as C, r as c, h as P, s as b, u as p, o as N, j as g, q as Y, i as d, v as l, t as f, x as u, w as h, g as x, y as z, z as y, e as K, d as W, c as X, b as H, U as V, f as v, C as F, D as w, a as k, E as j, E as q, b as G } from "../input-upload-field.element-DpMbvzUB.js";
import { f as Z, m as J, U as Q, a as __, o as E_, p as A_, b as I_, g as a_, l as M_, h as s_, k as t_, i as e_, j as T_, n as R_, c as o_, t as O_, r as U_, s as D_, u as S_, v as L_, q as m_, w as n_, x as B_, d as i_, e as r_, y as C_, z as c_, A as P_ } from "../dropzone.element-DyItP5Bd.js";
import { UmbMediaReferenceRepository as p_ } from "../media-reference.repository-CcP6oL9P.js";
import { U as g_, a as Y_ } from "../media-url.repository-DUerHiJb.js";
import { getProcessedImageUrl as R } from "@umbraco-cms/backoffice/utils";
import { U as l_ } from "../media-audit-log.repository-aXbdezOC.js";
async function e(_, I, a) {
  const M = _.dom.getSize(I), s = _.options.get("maxImageSize");
  if (s && s > 0) {
    const E = o(s, M.w, M.h);
    if (_.dom.setAttribs(I, { width: Math.round(E.width), height: Math.round(E.height) }), a) {
      const A = await R(a, {
        width: E.width,
        height: E.height
      });
      _.dom.setAttrib(I, "data-mce-src", A);
    }
    _.execCommand("mceAutoResize", !1);
  }
}
function o(_, I, a) {
  const M = { width: I, height: a }, s = _, E = _;
  let A = 0;
  return I > s && (A = s / I, M.width = s, M.height = a * A, a = a * A, I = I * A), a > E && (A = E / a, M.height = E, M.width = I * A, I = I * A), M;
}
async function U(_, I) {
  (I ?? _.getContent()).search(/src=["']blob:.*?["']/gi) !== -1 && ((await _.uploadImages()).forEach((E) => {
    if (E.status === !1)
      return;
    const A = E.element, t = A.getAttribute("src"), T = sessionStorage.getItem(`tinymce__${t}`);
    _.dom.setAttrib(A, "data-tmpimg", T), e(_, A);
  }), _.dom.select('img[src^="blob:"]:not([data-tmpimg])').forEach((E) => {
    const A = _.dom.getAttrib(E, "src"), t = sessionStorage.getItem(`tinymce__${A}`);
    t && (e(_, E), _.dom.setAttrib(E, "data-tmpimg", t));
  }));
}
export {
  Z as UMB_BULK_MOVE_MEDIA_REPOSITORY_ALIAS,
  J as UMB_BULK_TRASH_MEDIA_REPOSITORY_ALIAS,
  L as UMB_CREATE_MEDIA_WORKSPACE_PATH_PATTERN,
  m as UMB_DROPZONE_MEDIA_TYPE_PICKER_MODAL,
  n as UMB_EDIT_MEDIA_WORKSPACE_PATH_PATTERN,
  B as UMB_IMAGE_CROPPER_EDITOR_MODAL,
  i as UMB_MEDIA_CAPTION_ALT_TEXT_MODAL,
  Q as UMB_MEDIA_COLLECTION_ALIAS,
  r as UMB_MEDIA_COLLECTION_CONTEXT,
  __ as UMB_MEDIA_COLLECTION_REPOSITORY_ALIAS,
  C as UMB_MEDIA_CREATE_OPTIONS_MODAL,
  E_ as UMB_MEDIA_DETAIL_REPOSITORY_ALIAS,
  A_ as UMB_MEDIA_DETAIL_STORE_ALIAS,
  c as UMB_MEDIA_DETAIL_STORE_CONTEXT,
  P as UMB_MEDIA_ENTITY_TYPE,
  I_ as UMB_MEDIA_GRID_COLLECTION_VIEW_ALIAS,
  b as UMB_MEDIA_ITEM_REPOSITORY_ALIAS,
  p as UMB_MEDIA_ITEM_STORE_CONTEXT,
  a_ as UMB_MEDIA_MENU_ALIAS,
  N as UMB_MEDIA_PICKER_MODAL,
  g as UMB_MEDIA_PLACEHOLDER_ENTITY_TYPE,
  M_ as UMB_MEDIA_RECYCLE_BIN_REPOSITORY_ALIAS,
  s_ as UMB_MEDIA_RECYCLE_BIN_ROOT_ENTITY_TYPE,
  t_ as UMB_MEDIA_RECYCLE_BIN_TREE_ALIAS,
  e_ as UMB_MEDIA_RECYCLE_BIN_TREE_REPOSITORY_ALIAS,
  T_ as UMB_MEDIA_RECYCLE_BIN_TREE_STORE_ALIAS,
  Y as UMB_MEDIA_RECYCLE_BIN_TREE_STORE_CONTEXT,
  R_ as UMB_MEDIA_REFERENCE_REPOSITORY_ALIAS,
  d as UMB_MEDIA_ROOT_ENTITY_TYPE,
  l as UMB_MEDIA_SEARCH_PROVIDER_ALIAS,
  f as UMB_MEDIA_STORE_ALIAS,
  o_ as UMB_MEDIA_TABLE_COLLECTION_VIEW_ALIAS,
  O_ as UMB_MEDIA_TREE_ALIAS,
  u as UMB_MEDIA_TREE_PICKER_MODAL,
  U_ as UMB_MEDIA_TREE_REPOSITORY_ALIAS,
  D_ as UMB_MEDIA_TREE_STORE_ALIAS,
  h as UMB_MEDIA_TREE_STORE_CONTEXT,
  S_ as UMB_MEDIA_URL_REPOSITORY_ALIAS,
  L_ as UMB_MEDIA_URL_STORE_ALIAS,
  g_ as UMB_MEDIA_URL_STORE_CONTEXT,
  m_ as UMB_MEDIA_VALIDATION_REPOSITORY_ALIAS,
  x as UMB_MEDIA_VARIANT_CONTEXT,
  n_ as UMB_MEDIA_WORKSPACE_ALIAS,
  z as UMB_MEDIA_WORKSPACE_CONTEXT,
  y as UMB_MEDIA_WORKSPACE_PATH,
  B_ as UMB_MEMBER_DETAIL_MODEL_VARIANT_SCAFFOLD,
  i_ as UMB_MOVE_MEDIA_REPOSITORY_ALIAS,
  r_ as UMB_SORT_CHILDREN_OF_MEDIA_REPOSITORY_ALIAS,
  C_ as UmbDropzoneElement,
  c_ as UmbDropzoneManager,
  P_ as UmbDropzoneSubmittedEvent,
  K as UmbFocalPointChangeEvent,
  W as UmbImageCropChangeEvent,
  X as UmbInputImageCropperElement,
  H as UmbInputMediaElement,
  V as UmbInputRichMediaElement,
  v as UmbInputUploadFieldElement,
  l_ as UmbMediaAuditLogRepository,
  F as UmbMediaDetailRepository,
  w as UmbMediaItemRepository,
  k as UmbMediaPickerInputContext,
  p_ as UmbMediaReferenceRepository,
  j as UmbMediaSearchProvider,
  Y_ as UmbMediaUrlRepository,
  q as api,
  G as element,
  o as scaleToMaxSize,
  e as sizeImageInEditor,
  U as uploadBlobImages
};
//# sourceMappingURL=index.js.map
