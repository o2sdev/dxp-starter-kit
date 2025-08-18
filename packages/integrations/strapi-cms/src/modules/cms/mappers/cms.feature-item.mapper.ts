import { Models } from '@dxp/framework/modules';

import { FeatureItemFragment } from '@/generated/strapi';

export const mapFeatureItem = (component?: FeatureItemFragment): Models.FeatureItem.FeatureItem | undefined => {
    if (!component) return undefined;

    return {
        title: component.title!,
        description: component.description,
        icon: component.icon,
    };
};
