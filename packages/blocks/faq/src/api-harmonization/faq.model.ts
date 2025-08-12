import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';

export class FaqBlock extends Models.Block.Block {
    __typename!: 'FaqBlock';
    preTitle?: CMS.Model.FaqBlock.FaqBlock['preTitle'];
    title!: CMS.Model.FaqBlock.FaqBlock['title'];
    description?: CMS.Model.FaqBlock.FaqBlock['description'];
    sections!: CMS.Model.FaqBlock.FaqBlock['sections'];
    banner?: CMS.Model.FaqBlock.FaqBoxWithButton;
    oneColumn?: CMS.Model.FaqBlock.FaqBlock['oneColumn'];
}
