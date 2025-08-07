import { CMS } from '@dxp/configs.integrations';

import { HeroBannerBlock } from './hero-banner.model';

export const mapHeroBanner = (cms: CMS.Model.HeroBannerBlock.HeroBannerBlock): HeroBannerBlock => {
    return {
        __typename: 'HeroBannerBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        highlightedText: cms.highlightedText,
        subtitle: cms.subtitle,
        description: cms.description,
        image: cms.image,
        links: cms.links,
        headingType: cms.headingType,
        inverted: cms.inverted,
        labels: cms.labels,
    };
};
