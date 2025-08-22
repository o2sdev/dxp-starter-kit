import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapFile } from '../content/cms.file.mapper';

export const mapDocumentListBlock = (
    data: GetComponentQuery,
    baseUrl: string,
): CMS.Model.DocumentListBlock.DocumentListBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsDocumentList':
            return {
                id: component.id,
                title: component.title,
                description: component.description,
                documents: component.documents?.map((item) => ({
                    ...mapFile(item, baseUrl),
                })),
            };
    }

    throw new NotFoundException();
};
