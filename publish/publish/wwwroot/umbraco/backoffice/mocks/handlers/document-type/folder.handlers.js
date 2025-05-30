const { rest } = window.MockServiceWorker;
import { umbDocumentTypeMockDb } from '../../data/document-type/document-type.db.js';
import { UMB_SLUG } from './slug.js';
import { umbracoPath } from '@umbraco-cms/backoffice/utils';
export const folderHandlers = [
    rest.post(umbracoPath(`${UMB_SLUG}/folder`), async (req, res, ctx) => {
        const requestBody = await req.json();
        if (!requestBody)
            return res(ctx.status(400, 'no body found'));
        const id = umbDocumentTypeMockDb.folder.create(requestBody);
        return res(ctx.status(201), ctx.set({
            Location: req.url.href + '/' + id,
            'Umb-Generated-Resource': id,
        }));
    }),
    rest.get(umbracoPath(`${UMB_SLUG}/folder/:id`), (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        const response = umbDocumentTypeMockDb.folder.read(id);
        return res(ctx.status(200), ctx.json(response));
    }),
    rest.put(umbracoPath(`${UMB_SLUG}/folder/:id`), async (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400, 'no id found'));
        const requestBody = await req.json();
        if (!requestBody)
            return res(ctx.status(400, 'no body found'));
        umbDocumentTypeMockDb.folder.update(id, requestBody);
        return res(ctx.status(200));
    }),
    rest.delete(umbracoPath(`${UMB_SLUG}/folder/:id`), (req, res, ctx) => {
        const id = req.params.id;
        if (!id)
            return res(ctx.status(400));
        umbDocumentTypeMockDb.folder.delete(id);
        return res(ctx.status(200));
    }),
];
