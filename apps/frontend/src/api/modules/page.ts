import { Modules } from '@dxp/api-harmonization';
import { Models } from '@dxp/utils.api-harmonization';

import { Sdk } from '@dxp/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Modules.Page.URL;

export const page = (sdk: Sdk) => ({
    modules: {
        getInit: (
            params: Modules.Page.Request.GetInitQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.Page.Model.Init> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/init`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: params,
            }),
        getPage: (
            params: Modules.Page.Request.GetPageQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.Page.Model.Page> =>
            sdk.makeRequest({
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
                params: params,
            }),
    },
});
