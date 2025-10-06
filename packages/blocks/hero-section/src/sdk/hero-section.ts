import { Models } from '@dxp/utils.api-harmonization';
import { Utils } from '@dxp/utils.frontend';

import { Sdk } from '@dxp/framework/sdk';

import { Model, Request } from '../api-harmonization/hero-section.client';
import { URL } from '../api-harmonization/hero-section.url';

const API_URL = URL;

export const heroSection = (sdk: Sdk) => ({
    blocks: {
        getHeroSection: (
            query: Request.GetHeroSectionBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.HeroSectionBlock> =>
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
