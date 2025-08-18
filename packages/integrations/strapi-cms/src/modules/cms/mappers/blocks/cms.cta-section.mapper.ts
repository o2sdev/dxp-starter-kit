import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapLink } from '@/modules/cms/mappers/cms.link.mapper';

import { mapMedia } from '../cms.media.mapper';

export const mapCtaSectionBlock = (
    data: GetComponentQuery,
    baseUrl: string,
): CMS.Model.CtaSectionBlock.CtaSectionBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsCtaSection':
            return {
                id: component.id,
                preTitle: component.preTitle,
                title: component.title,
                description: component.description,
                inverted: component.inverted,
                image: mapMedia(component.image, baseUrl),
                links: component.links?.map((item) => ({
                    ...mapLink(item)!,
                })),
                labels: {
                    showMore: configurableTexts.actions.showMore,
                },
            };
    }

    throw new NotFoundException();
};
