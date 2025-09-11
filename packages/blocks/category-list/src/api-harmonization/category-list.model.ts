import { Articles, CMS } from '@dxp/configs.integrations';
import { Models as ApiModels } from '@dxp/utils.api-harmonization';

export class CategoryListBlock extends ApiModels.Block.Block {
    __typename!: 'CategoryListBlock';
    title!: CMS.Model.CategoryListBlock.CategoryListBlock['title'];
    description?: CMS.Model.CategoryListBlock.CategoryListBlock['description'];
    items!: Articles.Model.Category[];
}
