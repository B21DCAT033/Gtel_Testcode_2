var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, nothing, customElement, property } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
/**
 * A full page error element that can be used either solo or for instance as the error 500 page and BootFailed
 */
let UmbAppErrorElement = class UmbAppErrorElement extends UmbLitElement {
    constructor() {
        super();
        /**
         * Hide the back button
         * @attr
         */
        this.hideBackButton = false;
        this.#renderProblemDetails = (problemDetails) => html `
		<p><strong>${problemDetails.title}</strong></p>
		<p>${problemDetails.detail}</p>
		<pre>${problemDetails.stack}</pre>
	`;
        this.#renderErrorObj = (error) => html `
		<p><strong>${error.name}</strong></p>
		<p>${error.message}</p>
		<pre>${error.stack}</pre>
	`;
        this.#generateErrorFromSearchParams();
    }
    /**
     * Generates an error from the search params before the properties are set
     */
    #generateErrorFromSearchParams() {
        const searchParams = new URLSearchParams(window.location.search);
        const flow = searchParams.get('flow');
        if (flow === 'external-login-callback') {
            this.errorHeadline = this.localize.term('errors_externalLoginError');
            console.log('External login error', searchParams.get('error'));
            const status = searchParams.get('status');
            // "Status" is controlled by Umbraco and is a string
            if (status) {
                switch (status) {
                    case 'unauthorized':
                        this.errorMessage = this.localize.term('errors_unauthorized');
                        break;
                    case 'user-not-found':
                        this.errorMessage = this.localize.term('errors_userNotFound');
                        break;
                    case 'external-info-not-found':
                        this.errorMessage = this.localize.term('errors_externalInfoNotFound');
                        break;
                    case 'failed':
                        this.errorMessage = this.localize.term('errors_externalLoginFailed');
                        break;
                    default:
                        this.errorMessage = this.localize.term('errors_defaultError');
                        break;
                }
            }
            return;
        }
        if (flow === 'external-login') {
            /**
             * "Error" is controlled by OpenID and is a string
             * @see https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1
             */
            const error = searchParams.get('error');
            this.errorHeadline = this.localize.term('errors_externalLoginError');
            switch (error) {
                case 'access_denied':
                    this.errorMessage = this.localize.term('openidErrors_accessDenied');
                    break;
                case 'invalid_request':
                    this.errorMessage = this.localize.term('openidErrors_invalidRequest');
                    break;
                case 'invalid_client':
                    this.errorMessage = this.localize.term('openidErrors_invalidClient');
                    break;
                case 'invalid_grant':
                    this.errorMessage = this.localize.term('openidErrors_invalidGrant');
                    break;
                case 'unauthorized_client':
                    this.errorMessage = this.localize.term('openidErrors_unauthorizedClient');
                    break;
                case 'unsupported_grant_type':
                    this.errorMessage = this.localize.term('openidErrors_unsupportedGrantType');
                    break;
                case 'invalid_scope':
                    this.errorMessage = this.localize.term('openidErrors_invalidScope');
                    break;
                case 'server_error':
                    this.errorMessage = this.localize.term('openidErrors_serverError');
                    break;
                case 'temporarily_unavailable':
                    this.errorMessage = this.localize.term('openidErrors_temporarilyUnavailable');
                    break;
                default:
                    this.errorMessage = this.localize.term('errors_defaultError');
                    break;
            }
            // Set the error object with the original error parameters from the search params
            let detail = searchParams.get('error_description');
            const errorUri = searchParams.get('error_uri');
            if (errorUri) {
                detail = `${detail} (${errorUri})`;
            }
            this.error = { title: `External error code: ${error}`, detail };
            return;
        }
    }
    #renderProblemDetails;
    #renderErrorObj;
    #isProblemDetails(error) {
        return typeof error === 'object' && error !== null && 'detail' in error && 'title' in error;
    }
    #isError(error) {
        return typeof error === 'object' && error !== null && error instanceof Error;
    }
    #renderError(error) {
        if (this.#isProblemDetails(error)) {
            return this.#renderProblemDetails(error);
        }
        else if (this.#isError(error)) {
            return this.#renderErrorObj(error);
        }
        return nothing;
    }
    render() {
        return html `
			<div id="background"></div>

			<div id="logo">
				<umb-app-logo></umb-app-logo>
			</div>

			<div id="container" class="uui-text">
				<uui-box id="box" headline-variant="h1">
					${this.hideBackButton
            ? nothing
            : html `
								<uui-button
									slot="header-actions"
									label=${this.localize.term('general_back')}
									look="secondary"
									@click=${() => (location.href = '')}></uui-button>
							`}
					<div slot="headline">
						${this.errorHeadline
            ? this.errorHeadline
            : html ` <umb-localize key="errors_defaultError">An unknown failure has occured</umb-localize> `}
					</div>
					<div id="message">${this.errorMessage}</div>
					${this.error
            ? html `
								<details>
									<summary><umb-localize key="general_details">Details</umb-localize></summary>
									${this.#renderError(this.error)}
								</details>
							`
            : nothing}
				</uui-box>
			</div>
		`;
    }
    static { this.styles = [
        UmbTextStyles,
        css `
			#background {
				position: fixed;
				overflow: hidden;
				background-position: 50%;
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url('/umbraco/backoffice/assets/installer-illustration.svg');
				width: 100vw;
				height: 100vh;
			}

			#logo {
				position: fixed;
				top: var(--uui-size-space-5);
				left: var(--uui-size-space-5);
				height: 30px;
			}

			#container {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100vw;
				height: 100vh;
			}

			#box {
				width: 400px;
				max-width: 80vw;
			}

			#message {
				margin-bottom: var(--uui-size-space-3);
			}

			details {
				padding: var(--uui-size-space-2) var(--uui-size-space-3);
				background: var(--uui-color-surface-alt);
			}

			details summary {
				cursor: pointer;
			}

			pre {
				width: 100%;
				overflow: auto;
			}
		`,
    ]; }
};
__decorate([
    property()
], UmbAppErrorElement.prototype, "errorHeadline", void 0);
__decorate([
    property()
], UmbAppErrorElement.prototype, "errorMessage", void 0);
__decorate([
    property()
], UmbAppErrorElement.prototype, "error", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-back-button' })
], UmbAppErrorElement.prototype, "hideBackButton", void 0);
UmbAppErrorElement = __decorate([
    customElement('umb-app-error')
], UmbAppErrorElement);
export { UmbAppErrorElement };
export default UmbAppErrorElement;
