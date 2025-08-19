import { CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { PricingSectionController } from './pricing-section.controller';
import { PricingSectionService } from './pricing-section.service';

@Module({})
export class PricingSectionBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: PricingSectionBlockModule,
            providers: [
                PricingSectionService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [PricingSectionController],
            exports: [PricingSectionService],
        };
    }
}
