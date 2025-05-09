
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import {
    customElement,
    html,
    LitElement
} from '@umbraco-cms/backoffice/external/lit';
import { UmbRoute } from '@umbraco-cms/backoffice/router';
import { ApplicationInformationWorkspaceContext } from './application-information-workspace.context.js';
import { CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION } from './application-information-workspace.context-token.js';

@customElement('cms-workspace-application-information')
export default class ApplicationInformationWorkspaceElement extends UmbElementMixin(LitElement) {
    private _routes: UmbRoute[] = [
        {
            path: 'list',
            component: () => import('./application-information-list.element.js'),
            setup: (_component, _info) => {
            }
        },
        {
          path: 'view/:id',
          component: () => import('./application-information-view.element.js'),
          setup: (_component, info) => {
            this.#workspaceContext?.load(info.match.params.id);
          }
        },
        {
            path: '',
            redirectTo: 'list'
        },
        {
            path: `**`,
            component: async () => (await import('@umbraco-cms/backoffice/router')).UmbRouteNotFoundElement
        }
    ];

    #workspaceContext?: ApplicationInformationWorkspaceContext;

    constructor() {
        super();

        this.consumeContext(CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION, (instance) => {
          this.#workspaceContext = instance;
        });
    }

    override render() {
        return html`<umb-router-slot .routes=${this._routes}></umb-router-slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'cms-workspace-application-information': ApplicationInformationWorkspaceElement;
    }
}
