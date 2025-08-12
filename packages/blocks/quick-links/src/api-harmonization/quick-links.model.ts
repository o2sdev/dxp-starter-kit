import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';

export class QuickLinksBlock extends Models.Block.Block {
    __typename!: 'QuickLinksBlock';
    preTitle?: CMS.Model.QuickLinksBlock.QuickLinksBlock['preTitle'];
    title?: CMS.Model.QuickLinksBlock.QuickLinksBlock['title'];
    description?: CMS.Model.QuickLinksBlock.QuickLinksBlock['description'];
    items?: CMS.Model.QuickLinksBlock.QuickLinksBlock['items'];
}
