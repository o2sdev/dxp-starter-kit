import { ApiConfig, Auth, Search } from '@dxp/framework/modules';

import { Service as ArticlesService } from './modules/articles';
import { Service as AuthService } from './modules/auth';
import { Service as CacheService } from './modules/cache';
import { Service as CmsService } from './modules/cms';
import { Service as SearchService } from './modules/search';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        name: 'mocked',
        service: CmsService,
        imports: [Auth.Module],
    },
    articles: {
        name: 'mocked',
        service: ArticlesService,
        imports: [Search.Module],
    },
    cache: {
        name: 'mocked',
        service: CacheService,
    },
    search: {
        name: 'mocked',
        service: SearchService,
    },
    auth: {
        name: 'mocked',
        service: AuthService,
    },
};
