import { Type } from '@nestjs/common';

import { Articles, Auth, CMS, Cache, Search } from './';

export interface ApiConfig {
    integrations: {
        cms: {
            name: string;
            service: typeof CMS.Service;
            controller?: typeof CMS.Controller;
            imports?: Type[];
        };
        articles: {
            name: string;
            service: typeof Articles.Service;
            controller?: typeof Articles.Controller;
            imports?: Type[];
        };
        cache: {
            name: string;
            service: typeof Cache.Service;
            imports?: Type[];
        };
        search: {
            name: string;
            service?: typeof Search.Service;
            controller?: typeof Search.Controller;
            imports?: Type[];
        };
        auth: {
            name: string;
            service: typeof Auth.Service;
            imports?: Type[];
        };
    };
}
