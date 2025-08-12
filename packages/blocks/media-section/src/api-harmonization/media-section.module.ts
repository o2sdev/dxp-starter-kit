import { CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { MediaSectionController } from './media-section.controller';
import { MediaSectionService } from './media-section.service';

@Module({})
export class MediaSectionBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: MediaSectionBlockModule,
            providers: [
                MediaSectionService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [MediaSectionController],
            exports: [MediaSectionService],
        };
    }
}
