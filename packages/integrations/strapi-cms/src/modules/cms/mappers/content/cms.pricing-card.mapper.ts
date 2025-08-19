import { Models } from '@dxp/framework/modules';

import { PricingCardFragment } from '@/generated/strapi';

import { mapBadge } from './cms.badge.mapper';
import { mapFeatureItem } from './cms.feature-item.mapper';
import { mapLink } from './cms.link.mapper';
import { mapMedia } from './cms.media.mapper';
import { mapPrice } from './cms.price.mapper';

export const mapPricingCard = (component: PricingCardFragment, baseUrl: string): Models.PricingCard.PricingCard => {
    return {
        title: component.title,
        image: component.image && mapMedia(component.image, baseUrl),
        description: component.description,
        price: component.price && mapPrice(component.price),
        isPromoted: component.isPromoted,
        tags: component.tags?.map((item) => ({
            ...mapBadge(item)!,
        })),
        links: component.links?.map((item) => ({
            ...mapLink(item)!,
        })),
        featureListTitle: component.featureListTitle,
        featureList: component.featureList?.map((item) => ({
            ...mapFeatureItem(item)!,
        })),
    };
};
