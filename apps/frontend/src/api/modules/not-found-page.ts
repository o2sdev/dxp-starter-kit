import { Modules } from '@dxp/api-harmonization';
import { URL } from '@dxp/api-harmonization/modules/not-found-page/not-found-page.url';
import { Models } from '@dxp/utils.api-harmonization';

import { Sdk } from '@dxp/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = URL;

export const notFoundPage = (sdk: Sdk) => ({
    modules: {
        getNotFoundPage: (
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.NotFoundPage.Model.NotFoundPage> => {
            return sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
            });
        },
    },
});
