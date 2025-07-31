import { Config, Integration } from '@dxp/integrations.mocked/integration';

import { ApiConfig } from '@dxp/framework/modules';

export const CacheIntegrationConfig: ApiConfig['integrations']['cache'] = Config.cache!;

export import Service = Integration.Cache.Service;
