import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapCardWithImage } from '../content/cms.card-with-image.mapper';

export const mapBentoGridBlock = (
    data: GetComponentQuery,
    baseUrl: string,
): CMS.Model.BentoGridBlock.BentoGridBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsBentoGrid':
            return {
                id: component.id,
                preTitle: component.preTitle,
                title: component.title,
                description: component.description,
                items: component.items?.map((item) => ({
                    ...mapCardWithImage(item, baseUrl),
                })),
            };
    }

    throw new NotFoundException();
};
