import { CMS } from '@dxp/configs.integrations';

import { HeroBannerBlock } from './hero-banner.model';

export const mapHeroBanner = (cms: CMS.Model.HeroBannerBlock.HeroBannerBlock): HeroBannerBlock => {
    return {
        __typename: 'HeroBannerBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        description: cms.description,
        image: cms.image,
        links: cms.links,
    };
};
