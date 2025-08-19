import { configuration } from '@dxp/api-harmonization/config/configuration';
import * as BentoGrid from '@dxp/blocks.bento-grid/api-harmonization';
import * as CtaSection from '@dxp/blocks.cta-section/api-harmonization';
import * as Faq from '@dxp/blocks.faq/api-harmonization';
import * as FeatureSectionGrid from '@dxp/blocks.feature-section-grid/api-harmonization';
import * as FeatureSection from '@dxp/blocks.feature-section/api-harmonization';
import * as HeroSection from '@dxp/blocks.hero-section/api-harmonization';
import * as MediaSection from '@dxp/blocks.media-section/api-harmonization';
import * as PricingSection from '@dxp/blocks.pricing-section/api-harmonization';
import * as QuickLinks from '@dxp/blocks.quick-links/api-harmonization';
// BLOCK IMPORT

import { Auth } from '@dxp/configs.integrations';
import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, Reflector } from '@nestjs/core';

import { LoggerModule, LoggerService } from '@o2s/utils.logger';

import { Articles, Auth as AuthModule, CMS, Cache, Search } from '@dxp/framework/modules';

import { AppConfig } from './app.config';
import { AppService } from './app.service';
import { ContextHeadersMiddleware } from './middleware/context-headers.middleware';
import { NotFoundPageModule } from './modules/not-found-page/not-found-page.module';
import { PageModule } from './modules/page/page.module';
import { RoutesModule } from './modules/routes/routes.module';

export const CMSBaseModule = CMS.Module.register(AppConfig);
export const CacheBaseModule = Cache.Module.register(AppConfig);
export const ArticlesBaseModule = Articles.Module.register(AppConfig);
export const SearchBaseModule = Search.Module.register(AppConfig);
export const AuthModuleBaseModule = AuthModule.Module.register(AppConfig);

@Module({
    imports: [
        HttpModule,
        LoggerModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            ignoreEnvFile: process.env.NODE_ENV !== 'development',
            envFilePath: `.env.local`,
        }),

        CMSBaseModule,
        CacheBaseModule,
        ArticlesBaseModule,
        SearchBaseModule,
        AuthModuleBaseModule,

        PageModule.register(AppConfig),
        RoutesModule.register(AppConfig),
        NotFoundPageModule.register(AppConfig),

        Faq.Module.register(AppConfig),
        FeatureSection.Module.register(AppConfig),
        CtaSection.Module.register(AppConfig),
        BentoGrid.Module.register(AppConfig),
        MediaSection.Module.register(AppConfig),
        QuickLinks.Module.register(AppConfig),
        HeroSection.Module.register(AppConfig),
        FeatureSectionGrid.Module.register(AppConfig),
        PricingSection.Module.register(AppConfig),
        // BLOCK REGISTER
    ],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useFactory: (reflector: Reflector, logger: LoggerService) => new Auth.Guard(reflector, logger),
            inject: [Reflector, LoggerService],
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ContextHeadersMiddleware).forRoutes('*');
    }
}
