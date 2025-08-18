import { CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { FeatureSectionGridController } from './feature-section-grid.controller';
import { FeatureSectionGridService } from './feature-section-grid.service';

@Module({})
export class FeatureSectionGridBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: FeatureSectionGridBlockModule,
            providers: [
                FeatureSectionGridService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [FeatureSectionGridController],
            exports: [FeatureSectionGridService],
        };
    }
}
