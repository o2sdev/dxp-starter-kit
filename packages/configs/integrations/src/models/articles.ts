import { Config, Integration } from '@dxp/integrations.mocked/integration';

import { ApiConfig } from '@dxp/framework/modules';

export const ArticlesIntegrationConfig: ApiConfig['integrations']['articles'] = Config.articles!;

export import Service = Integration.Articles.Service;
export import Request = Integration.Articles.Request;
export import Model = Integration.Articles.Model;
