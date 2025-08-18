import { ApiConfig, Cache } from '@dxp/framework/modules';

import { GraphqlModule } from '@/modules/graphql/graphql.module';

import { Service as ArticlesService } from './modules/articles';
import { Service as CmsService } from './modules/cms';

// MODULE_IMPORTS

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    articles: {
        name: 'strapi-cms',
        service: ArticlesService,
        imports: [GraphqlModule, Cache.Module],
    },
    cms: {
        name: 'strapi-cms',
        service: CmsService,
        imports: [GraphqlModule, Cache.Module],
    },
    // MODULE_EXPORTS
};
