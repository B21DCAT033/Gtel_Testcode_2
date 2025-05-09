import { a as o } from "./base-CzBFGKJV.js";
import { umbEmbeddedMedia as n } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_EMBEDDED_MEDIA_MODAL as d } from "@umbraco-cms/backoffice/embedded-media";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
class b extends o {
  constructor() {
    super(...arguments), this.isActive = (i) => i.isActive(n.name) === !0;
  }
  async execute(i) {
    const e = {
      constrain: !1,
      height: 240,
      width: 360,
      url: ""
    }, a = i?.getAttributes(n.name);
    a && (e.constrain = a["data-embed-constrain"], e.height = a["data-embed-height"], e.width = a["data-embed-width"], e.url = a["data-embed-url"]);
    const r = (await this.getContext(s)).open(this, d, { data: e });
    if (!r) return;
    const t = await r.onSubmit().catch(() => {
    });
    t && i?.commands.setEmbeddedMedia({
      markup: t.markup,
      url: t.url,
      constrain: t.constrain,
      height: t.height?.toString(),
      width: t.width?.toString()
    });
  }
}
export {
  b as default
};
//# sourceMappingURL=embedded-media.tiptap-toolbar-api-DSCdxIiE.js.map
