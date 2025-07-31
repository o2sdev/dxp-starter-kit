import { Config, Integration } from '@dxp/integrations.mocked/integration';

import { ApiConfig } from '@dxp/framework/modules';

export const AuthIntegrationConfig: ApiConfig['integrations']['auth'] = Config.auth!;

export import Service = Integration.Auth.Service;
export import Model = Integration.Auth.Model;
export import Guard = Integration.Auth.Guard;
