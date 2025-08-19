import { CMS } from '@dxp/configs.integrations';

import { PricingSectionBlock } from './pricing-section.model';

export const mapPricingSection = (
    cms: CMS.Model.PricingSectionBlock.PricingSectionBlock,
    _locale: string,
): PricingSectionBlock => {
    return {
        __typename: 'PricingSectionBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        description: cms.description,
        pricingList: cms.pricingList,
    };
};
