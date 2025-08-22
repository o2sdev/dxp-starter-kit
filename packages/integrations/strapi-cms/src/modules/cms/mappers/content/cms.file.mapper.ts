import { Models } from '@dxp/framework/modules';

import { FileFragment } from '@/generated/strapi';

import { mapMedia } from './cms.media.mapper';

export const mapFile = (component: FileFragment, baseUrl: string): Models.Document.Document => {
    return {
        title: component.title,
        file: component.file && mapMedia(component.file, baseUrl)!,
        icon: component.icon,
    };
};
