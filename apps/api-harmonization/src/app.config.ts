import { Articles, Auth, CMS, Cache, Search } from '@dxp/configs.integrations';

import { ApiConfig } from '@dxp/framework/modules';

export const AppConfig: ApiConfig = {
    integrations: {
        cms: CMS.CmsIntegrationConfig,
        articles: Articles.ArticlesIntegrationConfig,
        cache: Cache.CacheIntegrationConfig,
        auth: Auth.AuthIntegrationConfig,
        search: Search.SearchIntegrationConfig,
    },
};
