import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapLink } from '@/modules/cms/mappers/content/cms.link.mapper';

import { mapFeatureItem } from '../content/cms.feature-item.mapper';
import { mapMedia } from '../content/cms.media.mapper';

export const mapFeatureSectionBlock = (
    data: GetComponentQuery,
    baseUrl: string,
): CMS.Model.FeatureSectionBlock.FeatureSectionBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsFeatureSection':
            return {
                id: component.id,
                preTitle: component.preTitle,
                title: component.title,
                description: component.description,
                featureList: component.featureList?.map((item) => ({
                    ...mapFeatureItem(item)!,
                })),
                inverted: component.inverted,
                image: mapMedia(component.image, baseUrl),
                links: component.links?.map((item) => ({
                    ...mapLink(item)!,
                })),
                labels: {
                    showMore: configurableTexts.actions.showMore,
                },
                iconBorder: component.iconBorder,
            };
    }

    throw new NotFoundException();
};
