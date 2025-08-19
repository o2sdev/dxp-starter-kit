import { Models } from '@dxp/framework/modules';

import { PriceFragment } from '@/generated/strapi';

export const mapPrice = (component?: PriceFragment): Models.Price.Price | undefined => {
    if (!component) return undefined;

    return {
        value: component.value!,
        currency: component.currency,
        period: component.period,
    };
};
