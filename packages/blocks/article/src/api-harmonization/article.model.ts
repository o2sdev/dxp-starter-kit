import { Articles } from '@dxp/configs.integrations';
import { Models as ApiModels } from '@dxp/utils.api-harmonization';

export class ArticleBlock extends ApiModels.Block.Block {
    __typename!: 'ArticleBlock';
    data!: Articles.Model.Article;
}
