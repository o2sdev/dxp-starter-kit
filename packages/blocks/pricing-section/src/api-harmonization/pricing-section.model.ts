import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';

export class PricingSectionBlock extends Models.Block.Block {
    __typename!: 'PricingSectionBlock';
    title?: CMS.Model.PricingSectionBlock.PricingSectionBlock['title'];
    subtitle?: CMS.Model.PricingSectionBlock.PricingSectionBlock['subtitle'];
    description?: CMS.Model.PricingSectionBlock.PricingSectionBlock['description'];
    pricingList?: CMS.Model.PricingSectionBlock.PricingSectionBlock['pricingList'];
}
