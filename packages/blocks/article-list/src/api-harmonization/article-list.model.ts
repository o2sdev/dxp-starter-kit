import { Articles, CMS } from '@dxp/configs.integrations';
import { Models as ApiModels } from '@dxp/utils.api-harmonization';

import { Models } from '@dxp/framework/modules';

export class ArticleListBlock extends ApiModels.Block.Block {
    __typename!: 'ArticleListBlock';
    title!: CMS.Model.ArticleListBlock.ArticleListBlock['title'];
    description!: CMS.Model.ArticleListBlock.ArticleListBlock['description'];
    categoryLink?: Models.Link.Link;
    items!: Articles.Model.Articles;
}
