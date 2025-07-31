import { Config, Integration } from '@dxp/integrations.mocked/integration';

import { ApiConfig } from '@dxp/framework/modules';

export const SearchIntegrationConfig: ApiConfig['integrations']['search'] = Config.search!;

export import Service = Integration.Search.Service;
