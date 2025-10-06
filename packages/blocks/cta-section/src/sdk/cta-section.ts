import { Models } from '@dxp/utils.api-harmonization';
import { Utils } from '@dxp/utils.frontend';

import { Sdk } from '@dxp/framework/sdk';

import { Model, Request } from '../api-harmonization/cta-section.client';
import { URL } from '../api-harmonization/cta-section.url';

const API_URL = URL;

export const ctaSection = (sdk: Sdk) => ({
    blocks: {
        getCtaSection: (
            query: Request.GetCtaSectionBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.CtaSectionBlock> =>
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
