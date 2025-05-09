export interface NewsCommentSearchInput {
    filter: string | undefined;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}

export interface NewsCommentDto {
    id: number;
    newsUmbracoKey: string | undefined;
    name: string | undefined;
    email: string | undefined;
    message: string | undefined;
    isApproved: boolean | undefined;
    approvedBy: string | undefined;
    approvedDate: string | Date | undefined;
}

export interface GetNewsCommentForViewDto {
    newsComment: NewsCommentDto;
    newsUrl: string | undefined;
    newsTitle: string | undefined;
}

export interface DeleteNewsCommentInput {
    id: number;
    currentUserName: string | undefined;
    CurrentUserId: number | undefined;
}

export interface ApproveNewsCommentInput {
    id: number;
    currentUserName: string | undefined;
    CurrentUserId: number | undefined;
}

export interface RejectNewsCommentInput {
    id: number;
    currentUserName: string | undefined;
    CurrentUserId: number | undefined;
}