import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapPricingCard } from '../content/cms.pricing-card.mapper';

export const mapPricingSectionBlock = (
    data: GetComponentQuery,
    baseUrl: string,
): CMS.Model.PricingSectionBlock.PricingSectionBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsPricingSection':
            return {
                id: component.id,
                title: component.title,
                subtitle: component.subtitle,
                description: component.description,
                headingType: component.headingTypePricing,
                pricingList: component.pricingList?.map((item) => ({
                    ...mapPricingCard(item, baseUrl),
                })),
            };
    }

    throw new NotFoundException();
};
