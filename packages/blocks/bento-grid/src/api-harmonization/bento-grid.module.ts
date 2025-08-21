import { CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { BentoGridController } from './bento-grid.controller';
import { BentoGridService } from './bento-grid.service';

@Module({})
export class BentoGridBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: BentoGridBlockModule,
            providers: [
                BentoGridService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [BentoGridController],
            exports: [BentoGridService],
        };
    }
}
