import { CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { HeroBannerController } from './hero-banner.controller';
import { HeroBannerService } from './hero-banner.service';

@Module({})
export class HeroBannerBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: HeroBannerBlockModule,
            providers: [
                HeroBannerService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [HeroBannerController],
            exports: [HeroBannerService],
        };
    }
}
