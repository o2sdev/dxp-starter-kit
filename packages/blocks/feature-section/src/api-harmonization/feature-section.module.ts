import { CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { FeatureSectionController } from './feature-section.controller';
import { FeatureSectionService } from './feature-section.service';

@Module({})
export class FeatureSectionBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: FeatureSectionBlockModule,
            providers: [
                FeatureSectionService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [FeatureSectionController],
            exports: [FeatureSectionService],
        };
    }
}

