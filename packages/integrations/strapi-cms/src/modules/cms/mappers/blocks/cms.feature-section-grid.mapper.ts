import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapFeatureItem } from '../cms.feature-item.mapper';

export const mapFeatureSectionGridBlock = (
    data: GetComponentQuery,
): CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsFeatureSectionGrid':
            return {
                id: component.id,
                preTitle: component.preTitle,
                title: component.title,
                description: component.description,
                featureList: component.featureList?.map((item) => ({
                    ...mapFeatureItem(item)!,
                })),
                inverted: component.inverted,
                iconBorder: component.iconBorder,
            };
    }

    throw new NotFoundException();
};
