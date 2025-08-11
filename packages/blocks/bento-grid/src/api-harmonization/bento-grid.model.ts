import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';

export class BentoGridBlock extends Models.Block.Block {
    __typename!: 'BentoGridBlock';
    preTitle?: CMS.Model.BentoGridBlock.BentoGridBlock['preTitle'];
    title?: CMS.Model.BentoGridBlock.BentoGridBlock['title'];
    description?: CMS.Model.BentoGridBlock.BentoGridBlock['description'];
    items!: CMS.Model.BentoGridBlock.BentoGridBlock['items'];
}
