import { UmbNetworkConnectionStatusManager } from './network-connection-status.manager.js';
import { UmbContextBase } from '@umbraco-cms/backoffice/class-api';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
export class UmbAppContext extends UmbContextBase {
    #serverUrl;
    #backofficePath;
    #serverConnection;
    #backgroundImage;
    set backgroundImage(value) {
        this.#backgroundImage = value;
    }
    get backgroundImage() {
        return this.#backgroundImage;
    }
    #gtelLogoImage;
    set gtelLogoImage(value) {
        this.#gtelLogoImage = value;
    }
    get gtelLogoImage() {
        return this.#gtelLogoImage;
    }
    #gtelBrandImage;
    set gtelBrandImage(value) {
        this.#gtelBrandImage = value;
    }
    get gtelBrandImage() {
        return this.#gtelBrandImage;
    }
    #showSettingMenu;
    set showSettingMenu(value) {
        this.#showSettingMenu = value;
    }
    get showSettingMenu() {
        return this.#showSettingMenu;
    }
    #showPackageMenu;
    set showPackageMenu(value) {
        this.#showPackageMenu = value;
    }
    get showPackageMenu() {
        return this.#showPackageMenu;
    }
    #showMemberMenu;
    set showMemberMenu(value) {
        this.#showMemberMenu = value;
    }
    get showMemberMenu() {
        return this.#showMemberMenu;
    }
    constructor(host, config) {
        super(host, UMB_APP_CONTEXT);
        this.#serverUrl = config.serverUrl;
        this.#backofficePath = config.backofficePath;
        this.#serverConnection = config.serverConnection;
        new UmbNetworkConnectionStatusManager(this);
    }
    getBackofficePath() {
        return this.#backofficePath;
    }
    getServerUrl() {
        return this.#serverUrl;
    }
    getServerConnection() {
        return this.#serverConnection;
    }
}
export const UMB_APP_CONTEXT = new UmbContextToken('UmbAppContext');
