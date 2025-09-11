import { Articles, CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { CategoryListController } from './category-list.controller';
import { CategoryListService } from './category-list.service';

@Module({})
export class CategoryListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CategoryListBlockModule,
            providers: [
                CategoryListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Articles.Service,
                    useExisting: Framework.Articles.Service,
                },
            ],
            controllers: [CategoryListController],
            exports: [CategoryListService],
        };
    }
}
