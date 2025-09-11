import { Articles, CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({})
export class CategoryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CategoryBlockModule,
            providers: [
                CategoryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Articles.Service,
                    useExisting: Framework.Articles.Service,
                },
            ],
            controllers: [CategoryController],
            exports: [CategoryService],
        };
    }
}
