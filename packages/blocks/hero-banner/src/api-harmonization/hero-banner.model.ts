import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';

export class HeroBannerBlock extends Models.Block.Block {
    __typename!: 'HeroBannerBlock';
    preTitle?: CMS.Model.HeroBannerBlock.HeroBannerBlock['preTitle'];
    title!: CMS.Model.HeroBannerBlock.HeroBannerBlock['title'];
    highlightedText?: CMS.Model.HeroBannerBlock.HeroBannerBlock['highlightedText'];
    subtitle!: CMS.Model.HeroBannerBlock.HeroBannerBlock['subtitle'];
    description!: CMS.Model.HeroBannerBlock.HeroBannerBlock['description'];
    image!: CMS.Model.HeroBannerBlock.HeroBannerBlock['image'];
    links!: CMS.Model.HeroBannerBlock.HeroBannerBlock['links'];
    headingType?: CMS.Model.HeroBannerBlock.HeroBannerBlock['headingType'];
    inverted?: CMS.Model.HeroBannerBlock.HeroBannerBlock['inverted'];
    labels!: CMS.Model.HeroBannerBlock.HeroBannerBlock['labels'];
}
