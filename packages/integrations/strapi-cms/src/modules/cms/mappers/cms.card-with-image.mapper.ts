import { Models } from '@dxp/framework/modules';

import { CardWithImageFragment } from '@/generated/strapi';

import { mapLink } from './cms.link.mapper';
import { mapMedia } from './cms.media.mapper';

export const mapCardWithImage = (
    component: CardWithImageFragment,
    baseUrl: string,
): Models.CardWithImage.CardWithImage => {
    return {
        title: component.title,
        description: component.description,
        image: component.image && mapMedia(component.image, baseUrl),
        link: component.link && mapLink(component.link),
    };
};
