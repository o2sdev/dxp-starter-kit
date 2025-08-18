import { Config, Integration } from '@dxp/integrations.strapi-cms/integration';

import { ApiConfig } from '@dxp/framework/modules';

export const CmsIntegrationConfig: ApiConfig['integrations']['cms'] = Config.cms!;

export import Service = Integration.CMS.Service;
export import Request = Integration.CMS.Request;
export import Model = Integration.CMS.Model;
