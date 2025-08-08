import * as CtaSection from '@dxp/blocks.cta-section/api-harmonization';
import * as Faq from '@dxp/blocks.faq/api-harmonization';
import * as FeatureSection from '@dxp/blocks.feature-section/api-harmonization';
import * as HeroBanner from '@dxp/blocks.hero-banner/api-harmonization';

// BLOCK IMPORT

import { CMS, Models } from '@dxp/framework/modules';

export class Init {
    locales!: {
        value: string;
        label: string;
    }[];
    common!: PageCommon;
    labels!: Labels;
}

export type Labels = CMS.Model.AppConfig.Labels;
export class Page {
    data?: PageData;
    meta!: Metadata;
}

export class NotFound {
    common!: PageCommon;
}

export class Metadata {
    seo!: Models.SEO.Page;
    locales!: string[];
}

export class Breadcrumb {
    slug!: string;
    label!: string;
}

export class PageCommon {
    header!: CMS.Model.Header.Header;
    footer!: CMS.Model.Footer.Footer;
}

export class PageData {
    alternativeUrls!: {
        [key: string]: string;
    };
    template!: CMS.Model.Page.PageTemplate;
    hasOwnTitle!: boolean;
    breadcrumbs!: Breadcrumb[];
}

export type Blocks =
    // BLOCK REGISTER
    | CtaSection.Model.CtaSectionBlock['__typename']
    | FeatureSection.Model.FeatureSectionBlock['__typename']
    | Faq.Model.FaqBlock['__typename']
    | HeroBanner.Model.HeroBannerBlock['__typename'];
