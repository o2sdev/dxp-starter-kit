import { Models } from '@dxp/utils.api-harmonization';
import { Utils } from '@dxp/utils.frontend';

import { Sdk } from '@dxp/framework/sdk';

import { Model, Request } from '../api-harmonization/document-list.client';
import { URL } from '../api-harmonization/document-list.url';

const API_URL = URL;

export const documentList = (sdk: Sdk) => ({
    blocks: {
        getDocumentList: (
            query: Request.GetDocumentListBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.DocumentListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: query,
            }),
    },
});
