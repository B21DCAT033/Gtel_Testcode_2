export interface ApplicationInformationSearchInput {
    filter: string | undefined;
    sorting: string | undefined;
    skipCount: number;
    maxResultCount: number;
}

export interface ApplicationInformationDto {
    id: number;
    jobPostingKey: string | undefined;
    fullName: string | undefined;
    email: string | undefined;
    telephone: string | undefined;
    address: string | undefined;
    message: string | undefined;
    fileId: number | undefined;
    fileKey: string | undefined;
    fileUrl: string | undefined;
    fileName: string | undefined;
    fileType: string | undefined;
    fileContentType: string | undefined;
}


export interface GetApplicationInformationForViewDto {
    applicationInformation: ApplicationInformationDto;    
    jobPostingUrl: string | undefined;
    jobPostingTitle: string | undefined;
}