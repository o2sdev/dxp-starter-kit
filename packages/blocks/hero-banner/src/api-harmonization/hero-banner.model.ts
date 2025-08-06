import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';

export class HeroBannerBlock extends Models.Block.Block {
    __typename!: 'HeroBannerBlock';
    title!: CMS.Model.HeroBannerBlock.HeroBannerBlock['title'];
    subtitle!: CMS.Model.HeroBannerBlock.HeroBannerBlock['subtitle'];
    description!: CMS.Model.HeroBannerBlock.HeroBannerBlock['description'];
    image!: CMS.Model.HeroBannerBlock.HeroBannerBlock['image'];
    links!: CMS.Model.HeroBannerBlock.HeroBannerBlock['links'];
}
