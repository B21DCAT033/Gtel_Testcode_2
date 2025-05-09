var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UMB_APP_CONTEXT } from '@umbraco-cms/backoffice/app';
import { css, customElement, html, ifDefined } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
let UmbBackofficeHeaderElement = class UmbBackofficeHeaderElement extends UmbLitElement {
    #appContext;
    constructor() {
        super();
        this.consumeContext(UMB_APP_CONTEXT, (context) => {
            this.#appContext = context;
        });
    }
    render() {
        return html `
			<div id="appPreHeader">
				<a id="app-brand-wrapper" href="/section/content/dashboard">
					<img id="app-brand" src=${this.#appContext.gtelBrandImage} alt="Gtel brand" />
				</a>
				<div id="app-title">${this.localize.term('gtelPortal_bannerText')}</div>
				<div class="background-video-overlay">
					<video id="intro-video" autoplay muted loop playsinline webkit-playsinline>
						<source src="/backoffice/videos/TechnologyVideo.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div id="appHeader" class="ps-16 ps-sm-0">
				<!-- <umb-backoffice-header-logo></umb-backoffice-header-logo> -->
				<umb-backoffice-header-sections id="sections"></umb-backoffice-header-sections>
				<umb-backoffice-header-apps></umb-backoffice-header-apps>
			</div>
		`;
    }
    static { this.styles = [
        css `
			:host {
				width: 100%;
			}

			#appPreHeader {
				position: relative;
				display: flex;
				align-items: var(--gtel-pre-header-align-brand, center);
				justify-content: var(--gtel-pre-header-justify-brand, start);
				height: var(--gtel-pre-header-height, 64px);
				padding: var(--gtel-pre-header-padding);
			}

			#app-brand-wrapper {
				position: relative;
				display: flex;
				align-items: center;
				margin: var(--gtel-brand-wrapper-margin, 0 2rem);
				text-decoration: none;
				z-index: 1;
			}

			#app-brand {
				height: var(--gtel-brand-height, 64px);
			}

			#app-title {
				position: absolute;
				display: none;
				text-align: center;
				width: 100%;
				font-family: 'Montserrat', sans-serif;
				font-size: var(--gtel-title-font-size, 1.8rem);
				font-weight: var(--gtel-title-font-weight, 700);
				color: var(--gtel-title-color, #fff);
				text-transform: var(--gtel-title-text-transform, uppercase);

				animation-name: fade-slightly;
				animation-iteration-count: infinite;
				animation-duration: 5s;
			}

			@media only screen and (min-width: 800px) {
				#app-title {
					display: block;
				}
			}

			.background-video-overlay {
				position: absolute;
				width: 100%;
				z-index: -1;
			}

			.background-video-overlay:before {
				position: absolute;
				content: '';
				/* background-image: -webkit-gradient(linear, left top, right top, from(rgba(3, 25, 116, 0.45)), to(rgba(25, 52, 167, 0.4))); */
				background-image: linear-gradient(90deg, rgba(3, 25, 116, 0.45), rgba(25, 52, 167, 0.4));
				width: 100%;
				height: 100%;
			}

			#intro-video {
				width: 100%;
			}

			#appHeader {
				position: relative;
				background-color: var(--umb-header-background-color, var(--uui-color-header-surface));
				background-image: url('/backoffice/img/hero-bg-4.jpg');
				background-size: cover;
				background-repeat: no-repeat;
				background-position: 100% 95%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 var(--uui-size-space-5);
			}

			#appHeader:before {
				position: absolute;
				content: '';
				background-image: -webkit-gradient(linear, left top, right top, from(#031974), to(#0125c1));
				background-image: linear-gradient(90deg, #031974, #0125c1);
				opacity: 0.9;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
			}

			#sections {
				flex: 1 1 auto;
			}

			@keyframes fade-slightly {
				0% {
					opacity: 0.666;
				}

				50% {
					opacity: 1;
				}

				100% {
					opacity: 0.666;
				}
			}
		`,
        css `
			.ps-13 {
				padding-left: 3.25rem !important;
			}

			.ps-14 {
				padding-left: 3.5rem !important;
			}

			.ps-15 {
				padding-left: 3.75rem !important;
			}

			.ps-16 {
				padding-left: 4rem !important;
			}

			@media (min-width: 576px) {
				.ps-sm-0 {
					padding-left: 0 !important;
				}
			}
		`,
    ]; }
};
UmbBackofficeHeaderElement = __decorate([
    customElement('umb-backoffice-header')
], UmbBackofficeHeaderElement);
export { UmbBackofficeHeaderElement };
