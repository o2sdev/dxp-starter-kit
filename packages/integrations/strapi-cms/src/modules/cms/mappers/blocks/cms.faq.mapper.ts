import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapLink } from '../content/cms.link.mapper';

export const mapFaqBlock = (data: GetComponentQuery): CMS.Model.FaqBlock.FaqBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsFaq':
            return {
                id: component.id,
                title: component.title,
                preTitle: component.preTitle,
                description: component.description,
                sections:
                    component.sections?.map((section) => ({
                        title: section.title,
                        items: section.items?.map((item) => ({
                            title: item.title,
                            content: item.description,
                        })),
                    })) || [],
                banner: component.banner
                    ? {
                          title: component.banner.title,
                          description: component.banner.description,
                          link: mapLink(component.banner.link),
                      }
                    : undefined,
                oneColumn: component.oneColumn,
            };
    }

    throw new NotFoundException();
};
