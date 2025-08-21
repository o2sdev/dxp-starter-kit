import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';

export class DocumentListBlock extends Models.Block.Block {
    __typename!: 'DocumentListBlock';
    title!: CMS.Model.DocumentListBlock.DocumentListBlock['title'];
    description?: CMS.Model.DocumentListBlock.DocumentListBlock['description'];
    documents?: CMS.Model.DocumentListBlock.DocumentListBlock['documents'];
}
