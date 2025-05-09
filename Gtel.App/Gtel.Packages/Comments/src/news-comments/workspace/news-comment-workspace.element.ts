
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import {
    customElement,
    html,
    LitElement
} from '@umbraco-cms/backoffice/external/lit';
import { UmbRoute } from '@umbraco-cms/backoffice/router';
import { NewsCommentWorkspaceContext } from './news-comment-workspace.context.js';
import { CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT } from './news-comment-workspace.context-token.js';

@customElement('cms-workspace-news-comment')
export default class NewsCommentWorkspaceElement extends UmbElementMixin(LitElement) {
    private _routes: UmbRoute[] = [
        {
            path: 'list',
            component: () => import('./news-comment-list.element.js'),
            setup: (_component, _info) => {
            }
        },
        {
          path: 'view/:id',
          component: () => import('./news-comment-view.element.js'),
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

    #workspaceContext?: NewsCommentWorkspaceContext;

    constructor() {
        super();

        this.consumeContext(CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT, (instance) => {
          this.#workspaceContext = instance;
        });
    }

    override render() {
        return html`<umb-router-slot .routes=${this._routes}></umb-router-slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'cms-workspace-news-comment': NewsCommentWorkspaceElement;
    }
}
