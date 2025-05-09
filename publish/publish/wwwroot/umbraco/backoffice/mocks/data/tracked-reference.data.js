export const items = [
    {
        $type: 'DocumentReferenceResponseModel',
        id: 'simple-document-id',
        name: 'Simple Document',
        published: true,
        documentType: {
            alias: 'blogPost',
            icon: 'icon-document',
            name: 'Simple Document Type',
        },
    },
    {
        $type: 'DocumentReferenceResponseModel',
        id: '1234',
        name: 'Image Block',
        published: true,
        documentType: {
            alias: 'imageBlock',
            icon: 'icon-settings',
            name: 'Image Block',
        },
    },
    {
        $type: 'MediaReferenceResponseModel',
        id: 'media-id',
        name: 'Simple Media',
        mediaType: {
            alias: 'image',
            icon: 'icon-picture',
            name: 'Image',
        },
    },
    {
        $type: 'DefaultReferenceResponseModel',
        id: 'default-id',
        name: 'Some other reference',
        type: 'Default',
        icon: 'icon-bug',
    },
];
