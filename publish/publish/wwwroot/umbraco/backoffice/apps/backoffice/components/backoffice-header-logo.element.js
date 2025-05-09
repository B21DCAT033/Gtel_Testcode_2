var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UMB_BACKOFFICE_CONTEXT } from '../backoffice.context.js';
import { isCurrentUserAnAdmin } from '@umbraco-cms/backoffice/current-user';
import { css, html, customElement, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import { UMB_APP_CONTEXT } from '@umbraco-cms/backoffice/app';
import { UMB_MODAL_MANAGER_CONTEXT } from '@umbraco-cms/backoffice/modal';
import { UMB_NEWVERSION_MODAL, UMB_SYSINFO_MODAL } from '@umbraco-cms/backoffice/sysinfo';
let UmbBackofficeHeaderLogoElement = class UmbBackofficeHeaderLogoElement extends UmbLitElement {
    #appContext;
    #backofficeContext;
    constructor() {
        super();
        this._isUserAdmin = false;
        this._serverUpgradeCheck = null;
        this._serverUrl = '';
        this.consumeContext(UMB_BACKOFFICE_CONTEXT, (context) => {
            this.observe(context.version, (version) => {
                if (!version)
                    return;
                this._version = version;
            }, '_observeVersion');
            this.#backofficeContext = context;
        });
        this.consumeContext(UMB_APP_CONTEXT, (context) => {
            this.#appContext = context;
            this._serverUrl = context.getServerUrl();
        });
    }
    async firstUpdated() {
        this.#isAdmin();
    }
    async #isAdmin() {
        this._isUserAdmin = await isCurrentUserAnAdmin(this);
        if (this._isUserAdmin) {
            this._serverUpgradeCheck = this.#backofficeContext ? await this.#backofficeContext.serverUpgradeCheck() : null;
        }
    }
    render() {
        return html `
			<uui-button id="logo" look="primary" label="Logo" compact popovertarget="logo-popover">
				<umb-app-logo id="logo-img"></umb-app-logo>
			</uui-button>
			<uui-popover-container id="logo-popover" placement="bottom-start">
				<umb-popover-layout>
					<div id="modal">
						<img
							aria-hidden="true"
							src="${this._serverUrl}/umbraco/management/api/v1/security/back-office/graphics/login-logo-alternative"
							alt="logo"
							width="300"
							height="82"
							loading="lazy" />
						<span>${this._version}</span>

						${this._serverUpgradeCheck
            ? html `<uui-button
									@click=${this.#openNewVersion}
									color="positive"
									label=${this.localize.term('general_newVersionAvailable')}></uui-button>`
            : ''}

						<a href="https://umbraco.com" target="_blank" rel="noopener">Umbraco.com</a>

						<uui-button @click=${this.#openSystemInformation} look="secondary" label="System information"></uui-button>
					</div>
				</umb-popover-layout>
			</uui-popover-container>
		`;
    }
    async #openSystemInformation() {
        const modalManager = await this.getContext(UMB_MODAL_MANAGER_CONTEXT);
        modalManager
            .open(this, UMB_SYSINFO_MODAL)
            .onSubmit()
            .catch(() => { });
    }
    async #openNewVersion() {
        if (!this._serverUpgradeCheck)
            return;
        const modalManager = await this.getContext(UMB_MODAL_MANAGER_CONTEXT);
        modalManager
            .open(this, UMB_NEWVERSION_MODAL, {
            data: {
                comment: this._serverUpgradeCheck.comment,
                downloadUrl: this._serverUpgradeCheck.url,
            },
        })
            .onSubmit()
            .catch(() => { });
    }
    static { this.styles = [
        UmbTextStyles,
        css `
			#logo {
				display: var(--umb-header-logo-display, inline);
				--uui-button-padding-top-factor: 1;
				--uui-button-padding-bottom-factor: 0.5;
				margin-right: var(--uui-size-space-2);
				--uui-button-background-color: transparent;
			}

			#logo-img {
				display: block;
				height: var(--uui-size-10);
			}

			#modal {
				padding: var(--uui-size-space-6);
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: var(--uui-size-space-3);
				min-width: var(--uui-size-100);
			}
		`,
    ]; }
};
__decorate([
    state()
], UmbBackofficeHeaderLogoElement.prototype, "_version", void 0);
__decorate([
    state()
], UmbBackofficeHeaderLogoElement.prototype, "_isUserAdmin", void 0);
__decorate([
    state()
], UmbBackofficeHeaderLogoElement.prototype, "_serverUpgradeCheck", void 0);
__decorate([
    state()
], UmbBackofficeHeaderLogoElement.prototype, "_serverUrl", void 0);
UmbBackofficeHeaderLogoElement = __decorate([
    customElement('umb-backoffice-header-logo')
], UmbBackofficeHeaderLogoElement);
export { UmbBackofficeHeaderLogoElement };
