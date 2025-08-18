import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapLink } from '@/modules/cms/mappers/cms.link.mapper';

import { mapMedia } from '../cms.media.mapper';

export const mapHeroSectionBlock = (
    data: GetComponentQuery,
    baseUrl: string,
): CMS.Model.HeroSectionBlock.HeroSectionBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsHeroSection':
            return {
                id: component.id,
                preTitle: component.preTitle,
                title: component.title,
                highlightedText: component.highlightedText,
                subtitle: component.subtitle,
                description: component.description,
                image: mapMedia(component.image, baseUrl),
                links: component.links?.map((item) => ({
                    ...mapLink(item)!,
                })),
                headingType: component.headingType,
                inverted: component.inverted,
                labels: {
                    showMore: configurableTexts.actions.showMore,
                },
            };
    }

    throw new NotFoundException();
};
