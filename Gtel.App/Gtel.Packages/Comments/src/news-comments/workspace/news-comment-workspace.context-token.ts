import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { NewsCommentWorkspaceContext } from './news-comment-workspace.context';
import { CMS_WORKSPACE_CONTEXT_NEWSCOMMENT } from '../../constants';

export const CMS_WORKSPACE_CONTEXT_TOKEN_NEWSCOMMENT = new UmbContextToken<NewsCommentWorkspaceContext>(
	'UmbWorkspaceContext',
	CMS_WORKSPACE_CONTEXT_NEWSCOMMENT
);
