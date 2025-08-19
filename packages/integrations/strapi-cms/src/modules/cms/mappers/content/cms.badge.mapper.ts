import { Models } from '@dxp/framework/modules';

import { BadgeFragment } from '@/generated/strapi';

export const mapBadge = (component?: BadgeFragment): Models.Badge.Badge | undefined => {
    if (!component) return undefined;

    return {
        label: component.label!,
        variant: component.variant,
    };
};
