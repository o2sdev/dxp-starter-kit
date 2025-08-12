import { CMS } from '@dxp/configs.integrations';

import { QuickLinksBlock } from './quick-links.model';

export const mapQuickLinks = (cms: CMS.Model.QuickLinksBlock.QuickLinksBlock, _locale: string): QuickLinksBlock => {
    return {
        __typename: 'QuickLinksBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        description: cms.description,
        items: cms.items,
    };
};
