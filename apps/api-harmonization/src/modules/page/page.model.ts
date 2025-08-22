import * as BentoGrid from '@dxp/blocks.bento-grid/api-harmonization';
import * as CtaSection from '@dxp/blocks.cta-section/api-harmonization';
import * as DocumentList from '@dxp/blocks.document-list/api-harmonization';
import * as Faq from '@dxp/blocks.faq/api-harmonization';
import * as FeatureSectionGrid from '@dxp/blocks.feature-section-grid/api-harmonization';
import * as FeatureSection from '@dxp/blocks.feature-section/api-harmonization';
import * as HeroSection from '@dxp/blocks.hero-section/api-harmonization';
import * as MediaSection from '@dxp/blocks.media-section/api-harmonization';
import * as PricingSection from '@dxp/blocks.pricing-section/api-harmonization';
import * as QuickLinks from '@dxp/blocks.quick-links/api-harmonization';

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
    showBreadcrumbs!: boolean;
    breadcrumbs!: Breadcrumb[];
}

export type Blocks =
    // BLOCK REGISTER
    | DocumentList.Model.DocumentListBlock['__typename']
    | PricingSection.Model.PricingSectionBlock['__typename']
    | FeatureSectionGrid.Model.FeatureSectionGridBlock['__typename']
    | HeroSection.Model.HeroSectionBlock['__typename']
    | QuickLinks.Model.QuickLinksBlock['__typename']
    | MediaSection.Model.MediaSectionBlock['__typename']
    | BentoGrid.Model.BentoGridBlock['__typename']
    | CtaSection.Model.CtaSectionBlock['__typename']
    | FeatureSection.Model.FeatureSectionBlock['__typename']
    | Faq.Model.FaqBlock['__typename'];
