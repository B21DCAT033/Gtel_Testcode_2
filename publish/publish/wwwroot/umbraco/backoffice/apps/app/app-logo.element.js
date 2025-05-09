var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UMB_APP_CONTEXT } from './app.context.js';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { customElement, html, nothing, state } from '@umbraco-cms/backoffice/external/lit';
let UmbAppLogoElement = class UmbAppLogoElement extends UmbLitElement {
    constructor() {
        super();
        this.consumeContext(UMB_APP_CONTEXT, (instance) => {
            this._logoUrl = `${instance.getServerUrl()}/umbraco/management/api/v1/security/back-office/graphics/logo`;
        });
    }
    /**
     * Do not use shadow DOM for this element.
     * @returns {this} The element instance.
     */
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this._logoUrl) {
            return nothing;
        }
        return html `<img .src=${this._logoUrl} aria-hidden="true" loading="eager" alt="logo" style="height: 100%" />`;
    }
};
__decorate([
    state()
], UmbAppLogoElement.prototype, "_logoUrl", void 0);
UmbAppLogoElement = __decorate([
    customElement('umb-app-logo')
], UmbAppLogoElement);
export { UmbAppLogoElement };
