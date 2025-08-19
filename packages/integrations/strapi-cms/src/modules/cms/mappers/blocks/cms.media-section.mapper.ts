import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapLink } from '@/modules/cms/mappers/content/cms.link.mapper';

import { mapMedia } from '../content/cms.media.mapper';

export const mapMediaSectionBlock = (
    data: GetComponentQuery,
    baseUrl: string,
): CMS.Model.MediaSectionBlock.MediaSectionBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsMediaSection':
            return {
                id: component.id,
                preTitle: component.preTitle,
                title: component.title,
                description: component.description,
                media: mapMedia(component.media, baseUrl),
                links: component.links?.map((item) => ({
                    ...mapLink(item)!,
                })),
                labels: {
                    play: configurableTexts.media.play,
                    pause: configurableTexts.media.pause,
                    mute: configurableTexts.media.mute,
                    unmute: configurableTexts.media.unmute,
                },
            };
    }

    throw new NotFoundException();
};
