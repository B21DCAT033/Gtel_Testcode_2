import { UmbControllerBase } from '@umbraco-cms/backoffice/class-api';
import { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbObjectState } from '@umbraco-cms/backoffice/observable-api';
import { UmbWorkspaceContext } from '@umbraco-cms/backoffice/workspace';
import { CMS_ENTITY_TYPE_NEWSCOMMENT, CMS_WORKSPACE_NEWSCOMMENT_ALIAS } from '../../constants';
import { NewsCommentDto } from '../models';
import { NewsCommentService } from '../services/news-comment.service';
import { NAME_OF_COMMENTS_SERVICES } from '../../common/consts/enum';
import { CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT } from './news-comment-workspace.context-token';
import { UMB_AUTH_CONTEXT } from '@umbraco-cms/backoffice/auth';

export class NewsCommentWorkspaceContext extends UmbControllerBase implements UmbWorkspaceContext {
    public readonly workspaceAlias: string = CMS_WORKSPACE_NEWSCOMMENT_ALIAS;

    #data = new UmbObjectState<NewsCommentDto | undefined>(undefined);
    data = this.#data.asObservable();

    #newsCommentService!: NewsCommentService;
    #auth?: typeof UMB_AUTH_CONTEXT.TYPE;

    constructor(host: UmbControllerHost) {
        super(host, CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT.toString());
        this.provideContext(CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT, this);

        this.consumeContext(UMB_AUTH_CONTEXT, (instance) => {
            this.#auth = instance;
        });
        // this.#initNewsCommentService();
    }

    override hostConnected(): void {
        super.hostConnected();
        // Khởi tạo service ngay sau khi controller được kết nối
        this.#initNewsCommentService();
    }

    protected resetState(): void {
        this.#data.setValue(undefined);
    }

    async #initNewsCommentService() {
        this.#newsCommentService = new NewsCommentService(NAME_OF_COMMENTS_SERVICES.NEWSCOMMENT);
    }

    async create() {
        this.resetState();
    }

    async load(unique: string) {
        this.resetState();
        const accessToken = await this.#auth?.getLatestToken();
        if (accessToken) {
            const response = await this.#newsCommentService?.requestByUnique(+unique, accessToken);
            if (response.ok) {
                const result = await response.json();
                this.#data.setValue(result);
            } else {
                console.error('HTTP Error:', response.status);
            }
        }
    }

    getEntityType() {
        return CMS_ENTITY_TYPE_NEWSCOMMENT;
    }
}

export { NewsCommentWorkspaceContext as api };
