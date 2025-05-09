import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { ApplicationInformationWorkspaceContext } from './application-information-workspace.context';
import { CMS_WORKSPACE_CONTEXT_APPLICATIONINFORMATION } from '../../constants';

export const CMS_WORKSPACE_CONTEXT_TOKEN_APPLICATIONINFORMATION = new UmbContextToken<ApplicationInformationWorkspaceContext>(
	'UmbWorkspaceContext',
	CMS_WORKSPACE_CONTEXT_APPLICATIONINFORMATION
);
