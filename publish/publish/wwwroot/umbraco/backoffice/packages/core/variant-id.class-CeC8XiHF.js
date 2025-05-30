import "@umbraco-cms/backoffice/external/uui";
import "@umbraco-cms/backoffice/event";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/external/dompurify";
import "@umbraco-cms/backoffice/class-api";
import { U as i } from "./deprecation-SeDYTswO.js";
function p(s) {
  return new i({
    deprecated: "Method `variantPropertiesObjectToString` is deprecated",
    removeInVersion: "17",
    solution: "Use UmbVariantId to make this conversion"
  }).warn(), (s.culture || u) + (s.segment ? `_${s.segment}` : "");
}
const u = "invariant";
class t {
  constructor(e, n) {
    this.culture = null, this.segment = null, this.culture = (e === u ? null : e) ?? null, this.segment = n ?? null;
  }
  static Create(e) {
    return Object.freeze(new t(e.culture, e.segment));
  }
  static CreateFromPartial(e) {
    return Object.freeze(new t(e.culture, e.segment));
  }
  static CreateInvariant() {
    return Object.freeze(new t(null, null));
  }
  static FromString(e) {
    const n = e.split("_"), l = n[0] === u ? null : n[0], r = n[1] ?? null;
    return Object.freeze(new t(l, r));
  }
  compare(e) {
    return this.equal(new t(e.culture, e.segment));
  }
  equal(e) {
    return this.culture === e.culture && this.segment === e.segment;
  }
  toString() {
    return (this.culture || u) + (this.segment ? `_${this.segment}` : "");
  }
  toCultureString() {
    return this.culture || u;
  }
  toSegmentString() {
    return this.segment || "";
  }
  isCultureInvariant() {
    return this.culture === null;
  }
  isSegmentInvariant() {
    return this.segment === null;
  }
  isInvariant() {
    return this.culture === null && this.segment === null;
  }
  clone() {
    return new t(null, this.segment);
  }
  toObject() {
    return { culture: this.culture, segment: this.segment };
  }
  toSegmentInvariant() {
    return Object.freeze(new t(this.culture, null));
  }
  toCultureInvariant() {
    return Object.freeze(new t(null, this.segment));
  }
  toCulture(e) {
    return Object.freeze(new t(e, this.segment));
  }
  toSegment(e) {
    return Object.freeze(new t(this.culture, e));
  }
  toVariant(e, n) {
    return Object.freeze(new t(e ? this.culture : null, n ? this.segment : null));
  }
  // TODO: needs localization option:
  // TODO: Consider if this should be handled else where, it does not seem like the responsibility of this class, since it contains wordings:
  toDifferencesString(e, n = "Invariant", l = "Unsegmented") {
    let r = "";
    return e.culture !== this.culture && (r = n), e.segment !== this.segment && (r = (r !== "" ? " " : "") + l), r;
  }
}
export {
  u as U,
  t as a,
  p as v
};
//# sourceMappingURL=variant-id.class-CeC8XiHF.js.map
