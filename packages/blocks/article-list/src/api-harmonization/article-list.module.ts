import { Articles, CMS } from '@dxp/configs.integrations';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@dxp/framework/modules';

import { ArticleListController } from './article-list.controller';
import { ArticleListService } from './article-list.service';

@Module({})
export class ArticleListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: ArticleListBlockModule,
            providers: [
                ArticleListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Articles.Service,
                    useExisting: Framework.Articles.Service,
                },
            ],
            controllers: [ArticleListController],
            exports: [ArticleListService],
        };
    }
}
