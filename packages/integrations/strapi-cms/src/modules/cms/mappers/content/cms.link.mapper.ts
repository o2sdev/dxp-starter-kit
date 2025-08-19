import { Models } from '@dxp/framework/modules';

import { LinkFragment } from '@/generated/strapi';

export const mapLink = (component?: LinkFragment): Models.Link.Link | undefined => {
    if (!component) return undefined;

    return {
        label: component.label,
        description: component.description,
        url: (component.page?.slug || component.url)!,
        icon: component.icon,
    };
};
