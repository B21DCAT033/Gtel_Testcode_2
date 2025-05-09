import { UmbControllerBase } from '@umbraco-cms/backoffice/class-api';
import { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbObjectState } from '@umbraco-cms/backoffice/observable-api';
import { UmbWorkspaceContext } from '@umbraco-cms/backoffice/workspace';
import { CMS_ENTITY_TYPE_APPLICATIONINFORMATION, CMS_WORKSPACE_APPLICATIONINFORMATION_ALIAS } from '../../constants';
import { ApplicationInformationDto } from '../models';
import { ApplicationInformationService } from '../services/application-information.service';
import { NAME_OF_COMMENTS_SERVICES } from '../../common/consts/enum';
import { CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION } from './application-information-workspace.context-token';
import { UMB_AUTH_CONTEXT } from '@umbraco-cms/backoffice/auth';

export class ApplicationInformationWorkspaceContext extends UmbControllerBase implements UmbWorkspaceContext {
    public readonly workspaceAlias: string = CMS_WORKSPACE_APPLICATIONINFORMATION_ALIAS;

    #data = new UmbObjectState<ApplicationInformationDto | undefined>(undefined);
    data = this.#data.asObservable();

    #applicationInformationService!: ApplicationInformationService;
    #auth?: typeof UMB_AUTH_CONTEXT.TYPE;

    constructor(host: UmbControllerHost) {
        super(host, CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION.toString());
        this.provideContext(CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION, this);
        this.consumeContext(UMB_AUTH_CONTEXT, (instance) => {
            this.#auth = instance;
          });
        // this.#initApplicationInformationService();
    }

    override hostConnected(): void {
        super.hostConnected();
        // Khởi tạo service ngay sau khi controller được kết nối
        this.#initApplicationInformationService();
    }

    protected resetState(): void {
        this.#data.setValue(undefined);
    }

    async #initApplicationInformationService() {
        this.#applicationInformationService = new ApplicationInformationService(NAME_OF_COMMENTS_SERVICES.APPLICATIONINFORMATION);
    }

    async create() {
        this.resetState();
    }

    async load(unique: string) {
        this.resetState();
        const accessToken = await this.#auth?.getLatestToken();
        if (accessToken) {
            const response = await this.#applicationInformationService?.requestByUnique(+unique, accessToken);
            if (response.ok) {
                const result = await response.json();
                this.#data.setValue(result);
            } else {
                console.error('HTTP Error:', response.status);
            }
        }
    }

    getEntityType() {
        return CMS_ENTITY_TYPE_APPLICATIONINFORMATION;
    }
}

export { ApplicationInformationWorkspaceContext as api };
