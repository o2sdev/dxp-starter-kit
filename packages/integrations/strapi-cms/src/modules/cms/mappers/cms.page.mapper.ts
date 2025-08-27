import { NotFoundException } from '@nestjs/common';

import { CMS } from '@dxp/framework/modules';

import { ComponentFragment, LayoutSectionFragment, PageFragment, TemplateFragment } from '@/generated/strapi';

import { mapRoles } from '@/modules/cms/mappers/content/cms.roles.mapper';

export const mapPage = (data: PageFragment): CMS.Model.Page.Page => {
    const template = mapTemplate(data.template[0]);

    if (!template) throw new NotFoundException();

    return {
        id: data.documentId,
        slug: data.slug,
        permissions: mapRoles(data.permissions),
        locale: data.locale!,
        template: template,
        updatedAt: data.updatedAt,
        createdAt: data.createdAt,
        seo: {
            title: data.SEO!.title,
            noIndex: data.SEO!.noIndex,
            noFollow: data.SEO!.noFollow,
            description: data.SEO!.description,
            keywords: data.SEO!.keywords?.map((keyword) => keyword.keyword) || [],
            image: data.SEO!.image
                ? {
                      ...data.SEO!.image,
                      alt: data.SEO!.image?.alternativeText || '',
                  }
                : undefined,
        },
        theme: data.theme?.name,
        hasOwnTitle: data.hasOwnTitle,
        showBreadcrumbs: data.showBreadcrumbs,
        parent: {
            slug: data.parent?.slug ?? '',
            seo: {
                title: data.parent?.SEO!.title ?? '',
            },
            parent: {
                slug: data.parent?.parent?.slug ?? '',
                seo: {
                    title: data.parent?.parent?.SEO!.title ?? '',
                },
                parent: {
                    slug: data.parent?.parent?.parent?.slug ?? '',
                    seo: {
                        title: data.parent?.parent?.parent?.SEO!.title ?? '',
                    },
                },
            },
        },
        redirect: data.redirect?.slug,
    };
};

export const mapAlternativePages = (data: PageFragment): CMS.Model.Page.Page => {
    const template = mapTemplate(data.template[0]);

    if (!template) throw new NotFoundException();

    return {
        id: data.documentId,
        slug: data.slug,
        permissions: mapRoles(data.permissions),
        locale: data.locale!,
        template: template,
        updatedAt: data.updatedAt,
        createdAt: data.createdAt,
        seo: {
            title: data.SEO!.title,
            noIndex: data.SEO!.noIndex,
            noFollow: data.SEO!.noFollow,
            description: data.SEO!.description,
            keywords: data.SEO!.keywords?.map((keyword) => keyword.keyword) || [],
            image: data.SEO!.image
                ? {
                      ...data.SEO!.image,
                      alt: data.SEO!.image?.alternativeText || '',
                  }
                : undefined,
        },
        hasOwnTitle: data.hasOwnTitle,
        showBreadcrumbs: data.showBreadcrumbs,
        parent: {
            slug: data.parent?.slug ?? '',
            seo: {
                title: data.parent?.SEO!.title ?? '',
            },
            parent: {
                slug: data.parent?.parent?.slug ?? '',
                seo: {
                    title: data.parent?.parent?.SEO!.title ?? '',
                },
                parent: {
                    slug: data.parent?.parent?.parent?.slug ?? '',
                    seo: {
                        title: data.parent?.parent?.parent?.SEO!.title ?? '',
                    },
                },
            },
        },
    };
};

const mapTemplate = (template?: TemplateFragment): CMS.Model.Page.PageTemplate => {
    if (!template) throw new NotFoundException();

    switch (template.__typename) {
        case 'ComponentTemplatesOneColumn':
            return {
                __typename: 'OneColumnTemplate',
                slots: {
                    main: mapSlot(template.mainSlot),
                },
            };
        case 'ComponentTemplatesTwoColumn':
            return {
                __typename: 'TwoColumnTemplate',
                slots: {
                    top: mapSlot(template.topSlot),
                    left: mapSlot(template.leftSlot),
                    right: mapSlot(template.rightSlot),
                    bottom: mapSlot(template.bottomSlot),
                },
            };
    }

    throw new NotFoundException();
};

export const mapSlot = (slot: ComponentFragment[]): CMS.Model.Page.SlotBlock[] => {
    return slot.reduce((acc, component) => {
        const __typename = mapComponent(component);

        if (!__typename) return acc;

        return [
            ...acc,
            {
                __typename,
                id: component.documentId,
                layout: mapLayout(component.layout),
            },
        ];
    }, [] as CMS.Model.Page.SlotBlock[]);
};

const mapLayout = (layout: LayoutSectionFragment): CMS.Model.Page.LayoutSection => {
    return {
        spacing: layout.spacing,
        background: layout.background,
        variant: layout.variant,
        theme: layout.theme?.name,
    };
};

// TODO: check where component names should be defined, currently they are placed in the api-harmonization so we cannot access them here
const mapComponent = (component: ComponentFragment) => {
    switch (component.content[0]?.__typename) {
        case 'ComponentComponentsFaq':
            return 'FaqBlock';
        case 'ComponentComponentsQuickLinks':
            return 'QuickLinksBlock';
        case 'ComponentComponentsCategoryList':
            return 'CategoryListBlock';
        case 'ComponentComponentsArticleList':
            return 'ArticleListBlock';
        case 'ComponentComponentsCategory':
            return 'CategoryBlock';
        case 'ComponentComponentsArticle':
            return 'ArticleBlock';
        case 'ComponentComponentsArticleSearch':
            return 'ArticleSearchBlock';
        case 'ComponentComponentsHeroSection':
            return 'HeroSectionBlock';
        case 'ComponentComponentsMediaSection':
            return 'MediaSectionBlock';
        case 'ComponentComponentsFeatureSection':
            return 'FeatureSectionBlock';
        case 'ComponentComponentsFeatureSectionGrid':
            return 'FeatureSectionGridBlock';
        case 'ComponentComponentsCtaSection':
            return 'CtaSectionBlock';
        case 'ComponentComponentsBentoGrid':
            return 'BentoGridBlock';
        case 'ComponentComponentsPricingSection':
            return 'PricingSectionBlock';
        case 'ComponentComponentsDocumentList':
            return 'DocumentListBlock';
    }
};
