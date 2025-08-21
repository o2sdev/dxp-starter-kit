import { CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { DocumentListController } from './document-list.controller';
import { DocumentListService } from './document-list.service';

@Module({})
export class DocumentListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: DocumentListBlockModule,
            providers: [
                DocumentListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [DocumentListController],
            exports: [DocumentListService],
        };
    }
}

