import { CMS } from '@dxp/configs.integrations';

import { FaqBlock } from './faq.model';

export const mapFaq = (cms: CMS.Model.FaqBlock.FaqBlock): FaqBlock => {
    return {
        __typename: 'FaqBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        description: cms.description,
        sections: cms.sections,
        banner: cms.banner,
        oneColumn: cms.oneColumn,
    };
};
