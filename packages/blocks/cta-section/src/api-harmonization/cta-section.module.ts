import { CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { CtaSectionController } from './cta-section.controller';
import { CtaSectionService } from './cta-section.service';

@Module({})
export class CtaSectionBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CtaSectionBlockModule,
            providers: [
                CtaSectionService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [CtaSectionController],
            exports: [CtaSectionService],
        };
    }
}
