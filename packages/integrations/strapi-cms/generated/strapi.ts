/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLError, print } from 'graphql';
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    ComponentContentDynamicZoneInput: { input: any; output: any };
    DateTime: { input: any; output: any };
    FooterItemsDynamicZoneInput: { input: any; output: any };
    HeaderItemsDynamicZoneInput: { input: any; output: any };
    I18NLocaleCode: { input: any; output: any };
    JSON: { input: any; output: any };
    PageTemplateDynamicZoneInput: { input: any; output: any };
};

export type AppConfig = {
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<AppConfig>>;
    localizations_connection?: Maybe<AppConfigRelationResponseCollection>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    signedInFooter?: Maybe<Footer>;
    signedInHeader?: Maybe<Header>;
    signedOutFooter?: Maybe<Footer>;
    signedOutHeader?: Maybe<Header>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AppConfigInput = {
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    signedInFooter?: InputMaybe<Scalars['ID']['input']>;
    signedInHeader?: InputMaybe<Scalars['ID']['input']>;
    signedOutFooter?: InputMaybe<Scalars['ID']['input']>;
    signedOutHeader?: InputMaybe<Scalars['ID']['input']>;
};

export type AppConfigRelationResponseCollection = {
    nodes: Array<AppConfig>;
};

export type Article = {
    SEO: ComponentSeoSeo;
    content: ComponentComponentsArticle;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<Article>>;
    localizations_connection?: Maybe<ArticleRelationResponseCollection>;
    parent?: Maybe<Page>;
    permissions?: Maybe<ComponentSeoUserRoles>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    slug: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArticleLocalizationsArgs = {
    filters?: InputMaybe<ArticleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleLocalizations_ConnectionArgs = {
    filters?: InputMaybe<ArticleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleEntityResponseCollection = {
    nodes: Array<Article>;
    pageInfo: Pagination;
};

export type ArticleFiltersInput = {
    SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
    and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
    content?: InputMaybe<ComponentComponentsArticleFiltersInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    locale?: InputMaybe<StringFilterInput>;
    localizations?: InputMaybe<ArticleFiltersInput>;
    not?: InputMaybe<ArticleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
    parent?: InputMaybe<PageFiltersInput>;
    permissions?: InputMaybe<ComponentSeoUserRolesFiltersInput>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
    SEO?: InputMaybe<ComponentSeoSeoInput>;
    content?: InputMaybe<ComponentComponentsArticleInput>;
    parent?: InputMaybe<Scalars['ID']['input']>;
    permissions?: InputMaybe<ComponentSeoUserRolesInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleRelationResponseCollection = {
    nodes: Array<Article>;
};

export type Author = {
    avatar: Array<Maybe<UploadFile>>;
    avatar_connection?: Maybe<UploadFileRelationResponseCollection>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<Author>>;
    localizations_connection?: Maybe<AuthorRelationResponseCollection>;
    name: Scalars['String']['output'];
    position?: Maybe<Scalars['String']['output']>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthorAvatarArgs = {
    filters?: InputMaybe<UploadFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorAvatar_ConnectionArgs = {
    filters?: InputMaybe<UploadFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorLocalizationsArgs = {
    filters?: InputMaybe<AuthorFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorLocalizations_ConnectionArgs = {
    filters?: InputMaybe<AuthorFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorEntityResponseCollection = {
    nodes: Array<Author>;
    pageInfo: Pagination;
};

export type AuthorFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    locale?: InputMaybe<StringFilterInput>;
    localizations?: InputMaybe<AuthorFiltersInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<AuthorFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
    position?: InputMaybe<StringFilterInput>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
    avatar?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    name?: InputMaybe<Scalars['String']['input']>;
    position?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AuthorRelationResponseCollection = {
    nodes: Array<Author>;
};

export type BooleanFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
    contains?: InputMaybe<Scalars['Boolean']['input']>;
    containsi?: InputMaybe<Scalars['Boolean']['input']>;
    endsWith?: InputMaybe<Scalars['Boolean']['input']>;
    eq?: InputMaybe<Scalars['Boolean']['input']>;
    eqi?: InputMaybe<Scalars['Boolean']['input']>;
    gt?: InputMaybe<Scalars['Boolean']['input']>;
    gte?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
    lt?: InputMaybe<Scalars['Boolean']['input']>;
    lte?: InputMaybe<Scalars['Boolean']['input']>;
    ne?: InputMaybe<Scalars['Boolean']['input']>;
    nei?: InputMaybe<Scalars['Boolean']['input']>;
    not?: InputMaybe<BooleanFilterInput>;
    notContains?: InputMaybe<Scalars['Boolean']['input']>;
    notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
    notNull?: InputMaybe<Scalars['Boolean']['input']>;
    null?: InputMaybe<Scalars['Boolean']['input']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
    startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
    components: Array<Maybe<Component>>;
    components_connection?: Maybe<ComponentRelationResponseCollection>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    description: Scalars['String']['output'];
    documentId: Scalars['ID']['output'];
    icon: Scalars['String']['output'];
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<Category>>;
    localizations_connection?: Maybe<CategoryRelationResponseCollection>;
    name: Scalars['String']['output'];
    parent?: Maybe<Page>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    slug: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryComponentsArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryComponents_ConnectionArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryLocalizationsArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryLocalizations_ConnectionArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntityResponseCollection = {
    nodes: Array<Category>;
    pageInfo: Pagination;
};

export type CategoryFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
    components?: InputMaybe<ComponentFiltersInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    icon?: InputMaybe<StringFilterInput>;
    locale?: InputMaybe<StringFilterInput>;
    localizations?: InputMaybe<CategoryFiltersInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<CategoryFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
    parent?: InputMaybe<PageFiltersInput>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
    components?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    description?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    parent?: InputMaybe<Scalars['ID']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
    nodes: Array<Category>;
};

export type Component = {
    content: Array<Maybe<ComponentContentDynamicZone>>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    layout: ComponentLayoutSection;
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<Component>>;
    localizations_connection?: Maybe<ComponentRelationResponseCollection>;
    name: Scalars['String']['output'];
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ComponentLocalizationsArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLocalizations_ConnectionArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsArticle = {
    author?: Maybe<Author>;
    category?: Maybe<Category>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    sections: Array<Maybe<ComponentContentArticleSection>>;
};

export type ComponentComponentsArticleSectionsArgs = {
    filters?: InputMaybe<ComponentContentArticleSectionFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsArticleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentComponentsArticleFiltersInput>>>;
    author?: InputMaybe<AuthorFiltersInput>;
    category?: InputMaybe<CategoryFiltersInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentComponentsArticleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentComponentsArticleFiltersInput>>>;
    sections?: InputMaybe<ComponentContentArticleSectionFiltersInput>;
};

export type ComponentComponentsArticleInput = {
    author?: InputMaybe<Scalars['ID']['input']>;
    category?: InputMaybe<Scalars['ID']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    sections?: InputMaybe<Array<InputMaybe<ComponentContentArticleSectionInput>>>;
};

export type ComponentComponentsArticleList = {
    articles_to_show?: Maybe<Scalars['Int']['output']>;
    category?: Maybe<Category>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    pages: Array<Maybe<Page>>;
    pages_connection?: Maybe<PageRelationResponseCollection>;
    parent?: Maybe<Page>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsArticleListPagesArgs = {
    filters?: InputMaybe<PageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsArticleListPages_ConnectionArgs = {
    filters?: InputMaybe<PageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsArticleSearch = {
    id: Scalars['ID']['output'];
    inputLabel?: Maybe<Scalars['String']['output']>;
    noResults: ComponentContentBanner;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsBentoGrid = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    items?: Maybe<Array<Maybe<ComponentContentCardWithImage>>>;
    preTitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsBentoGridItemsArgs = {
    filters?: InputMaybe<ComponentContentCardWithImageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsCategory = {
    category?: Maybe<Category>;
    id: Scalars['ID']['output'];
    parent?: Maybe<Page>;
};

export type ComponentComponentsCategoryList = {
    categories: Array<Maybe<Category>>;
    categories_connection?: Maybe<CategoryRelationResponseCollection>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    parent?: Maybe<Page>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsCategoryListCategoriesArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsCategoryListCategories_ConnectionArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsCtaSection = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<UploadFile>;
    inverted: Scalars['Boolean']['output'];
    links?: Maybe<Array<Maybe<ComponentContentLink>>>;
    preTitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsCtaSectionLinksArgs = {
    filters?: InputMaybe<ComponentContentLinkFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsDocumentList = {
    description?: Maybe<Scalars['String']['output']>;
    documents?: Maybe<Array<Maybe<ComponentContentFile>>>;
    id: Scalars['ID']['output'];
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsDocumentListDocumentsArgs = {
    filters?: InputMaybe<ComponentContentFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsFaq = {
    banner?: Maybe<ComponentContentBanner>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    oneColumn: Scalars['Boolean']['output'];
    preTitle?: Maybe<Scalars['String']['output']>;
    sections?: Maybe<Array<Maybe<ComponentContentFaqSection>>>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsFaqSectionsArgs = {
    filters?: InputMaybe<ComponentContentFaqSectionFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsFeatureSection = {
    description?: Maybe<Scalars['String']['output']>;
    featureList?: Maybe<Array<Maybe<ComponentContentFeatureItem>>>;
    iconBorder: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<UploadFile>;
    inverted: Scalars['Boolean']['output'];
    links?: Maybe<Array<Maybe<ComponentContentLink>>>;
    preTitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsFeatureSectionFeatureListArgs = {
    filters?: InputMaybe<ComponentContentFeatureItemFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsFeatureSectionLinksArgs = {
    filters?: InputMaybe<ComponentContentLinkFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsFeatureSectionGrid = {
    description?: Maybe<Scalars['String']['output']>;
    featureList?: Maybe<Array<Maybe<ComponentContentFeatureItem>>>;
    iconBorder: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    inverted: Scalars['Boolean']['output'];
    preTitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsFeatureSectionGridFeatureListArgs = {
    filters?: InputMaybe<ComponentContentFeatureItemFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsHeroSection = {
    description?: Maybe<Scalars['String']['output']>;
    headingType?: Maybe<Enum_Componentcomponentsherosection_Headingtype>;
    highlightedText?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<UploadFile>;
    inverted: Scalars['Boolean']['output'];
    links?: Maybe<Array<Maybe<ComponentContentLink>>>;
    preTitle?: Maybe<Scalars['String']['output']>;
    subtitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsHeroSectionLinksArgs = {
    filters?: InputMaybe<ComponentContentLinkFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsMediaSection = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    links?: Maybe<Array<Maybe<ComponentContentLink>>>;
    media?: Maybe<UploadFile>;
    preTitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsMediaSectionLinksArgs = {
    filters?: InputMaybe<ComponentContentLinkFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsPricingSection = {
    description?: Maybe<Scalars['String']['output']>;
    headingType: Enum_Componentcomponentspricingsection_Headingtype;
    id: Scalars['ID']['output'];
    pricingList?: Maybe<Array<Maybe<ComponentContentPricingCard>>>;
    subtitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsPricingSectionPricingListArgs = {
    filters?: InputMaybe<ComponentContentPricingCardFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentComponentsQuickLinks = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    items: Array<Maybe<ComponentContentLink>>;
    preTitle?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentComponentsQuickLinksItemsArgs = {
    filters?: InputMaybe<ComponentContentLinkFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentAlertBox = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    title: Scalars['String']['output'];
};

export type ComponentContentArticleSection = {
    content: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentArticleSectionFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentArticleSectionFiltersInput>>>;
    content?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentArticleSectionFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentArticleSectionFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentArticleSectionInput = {
    content?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentContentBadge = {
    id: Scalars['ID']['output'];
    label?: Maybe<Scalars['String']['output']>;
    variant: Enum_Componentcontentbadge_Variant;
};

export type ComponentContentBadgeFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentBadgeFiltersInput>>>;
    label?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentBadgeFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentBadgeFiltersInput>>>;
    variant?: InputMaybe<StringFilterInput>;
};

export type ComponentContentBanner = {
    altDescription?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    link?: Maybe<ComponentContentLink>;
    title: Scalars['String']['output'];
};

export type ComponentContentCardWithImage = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<UploadFile>;
    link?: Maybe<ComponentContentLink>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentCardWithImageFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentCardWithImageFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    link?: InputMaybe<ComponentContentLinkFiltersInput>;
    not?: InputMaybe<ComponentContentCardWithImageFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentCardWithImageFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentDynamicZone =
    | ComponentComponentsArticle
    | ComponentComponentsArticleList
    | ComponentComponentsArticleSearch
    | ComponentComponentsBentoGrid
    | ComponentComponentsCategory
    | ComponentComponentsCategoryList
    | ComponentComponentsCtaSection
    | ComponentComponentsDocumentList
    | ComponentComponentsFaq
    | ComponentComponentsFeatureSection
    | ComponentComponentsFeatureSectionGrid
    | ComponentComponentsHeroSection
    | ComponentComponentsMediaSection
    | ComponentComponentsPricingSection
    | ComponentComponentsQuickLinks
    | Error;

export type ComponentContentFaqSection = {
    id: Scalars['ID']['output'];
    items: Array<Maybe<ComponentContentMessage>>;
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentFaqSectionItemsArgs = {
    filters?: InputMaybe<ComponentContentMessageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentFaqSectionFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentFaqSectionFiltersInput>>>;
    items?: InputMaybe<ComponentContentMessageFiltersInput>;
    not?: InputMaybe<ComponentContentFaqSectionFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentFaqSectionFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentFeatureItem = {
    description?: Maybe<Scalars['String']['output']>;
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentFeatureItemFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentFeatureItemFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    icon?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentFeatureItemFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentFeatureItemFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentFieldMapping = {
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    values: Array<Maybe<ComponentContentKeyValue>>;
};

export type ComponentContentFieldMappingValuesArgs = {
    filters?: InputMaybe<ComponentContentKeyValueFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentFile = {
    file: UploadFile;
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    title: Scalars['String']['output'];
};

export type ComponentContentFileFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentFileFiltersInput>>>;
    icon?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentFileFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentFileFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentIconWithText = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentIconWithTextFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentIconWithTextFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentIconWithTextFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentIconWithTextFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentInformationCard = {
    altMessage?: Maybe<Scalars['String']['output']>;
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    link?: Maybe<ComponentContentLink>;
    message?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};

export type ComponentContentKeyValue = {
    id: Scalars['ID']['output'];
    key: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type ComponentContentKeyValueFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentKeyValueFiltersInput>>>;
    key?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentKeyValueFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentKeyValueFiltersInput>>>;
    value?: InputMaybe<StringFilterInput>;
};

export type ComponentContentKeyword = {
    id: Scalars['ID']['output'];
    keyword: Scalars['String']['output'];
};

export type ComponentContentKeywordFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentKeywordFiltersInput>>>;
    keyword?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentKeywordFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentKeywordFiltersInput>>>;
};

export type ComponentContentKeywordInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
    keyword?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentContentLink = {
    description?: Maybe<Scalars['String']['output']>;
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    label: Scalars['String']['output'];
    page?: Maybe<Page>;
    url?: Maybe<Scalars['String']['output']>;
    variant?: Maybe<Enum_Componentcontentlink_Variant>;
};

export type ComponentContentLinkFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentLinkFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    icon?: InputMaybe<StringFilterInput>;
    label?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentLinkFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentLinkFiltersInput>>>;
    page?: InputMaybe<PageFiltersInput>;
    url?: InputMaybe<StringFilterInput>;
    variant?: InputMaybe<StringFilterInput>;
};

export type ComponentContentListWithIcons = {
    icons: Array<Maybe<ComponentContentIconWithText>>;
    id: Scalars['ID']['output'];
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentListWithIconsIconsArgs = {
    filters?: InputMaybe<ComponentContentIconWithTextFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentMessage = {
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    title: Scalars['String']['output'];
};

export type ComponentContentMessageFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentMessageFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentMessageFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentMessageFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentMessageSimple = {
    content?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    title: Scalars['String']['output'];
};

export type ComponentContentMessageSimpleInput = {
    content?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentContentNavigationGroup = {
    id: Scalars['ID']['output'];
    items: Array<Maybe<ComponentContentNavigationItem>>;
    title: Scalars['String']['output'];
};

export type ComponentContentNavigationGroupItemsArgs = {
    filters?: InputMaybe<ComponentContentNavigationItemFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentNavigationItem = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    label: Scalars['String']['output'];
    page?: Maybe<Page>;
    url?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentNavigationItemFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentNavigationItemFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    label?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentNavigationItemFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentNavigationItemFiltersInput>>>;
    page?: InputMaybe<PageFiltersInput>;
    url?: InputMaybe<StringFilterInput>;
};

export type ComponentContentPrice = {
    currency: Enum_Componentcontentprice_Currency;
    id: Scalars['ID']['output'];
    period?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['Float']['output']>;
};

export type ComponentContentPriceFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentPriceFiltersInput>>>;
    currency?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentContentPriceFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentPriceFiltersInput>>>;
    period?: InputMaybe<StringFilterInput>;
    value?: InputMaybe<FloatFilterInput>;
};

export type ComponentContentPricingCard = {
    description?: Maybe<Scalars['String']['output']>;
    featureList?: Maybe<Array<Maybe<ComponentContentFeatureItem>>>;
    featureListTitle?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<UploadFile>;
    isPromoted: Scalars['Boolean']['output'];
    links?: Maybe<Array<Maybe<ComponentContentLink>>>;
    price?: Maybe<ComponentContentPrice>;
    tags?: Maybe<Array<Maybe<ComponentContentBadge>>>;
    title: Scalars['String']['output'];
};

export type ComponentContentPricingCardFeatureListArgs = {
    filters?: InputMaybe<ComponentContentFeatureItemFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentPricingCardLinksArgs = {
    filters?: InputMaybe<ComponentContentLinkFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentPricingCardTagsArgs = {
    filters?: InputMaybe<ComponentContentBadgeFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentContentPricingCardFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentContentPricingCardFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    featureList?: InputMaybe<ComponentContentFeatureItemFiltersInput>;
    featureListTitle?: InputMaybe<StringFilterInput>;
    isPromoted?: InputMaybe<BooleanFilterInput>;
    links?: InputMaybe<ComponentContentLinkFiltersInput>;
    not?: InputMaybe<ComponentContentPricingCardFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentContentPricingCardFiltersInput>>>;
    price?: InputMaybe<ComponentContentPriceFiltersInput>;
    tags?: InputMaybe<ComponentContentBadgeFiltersInput>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentRichTextWithTitle = {
    content: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    title: Scalars['String']['output'];
};

export type ComponentEntityResponseCollection = {
    nodes: Array<Component>;
    pageInfo: Pagination;
};

export type ComponentFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    layout?: InputMaybe<ComponentLayoutSectionFiltersInput>;
    locale?: InputMaybe<StringFilterInput>;
    localizations?: InputMaybe<ComponentFiltersInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ComponentInput = {
    content?: InputMaybe<Array<Scalars['ComponentContentDynamicZoneInput']['input']>>;
    layout?: InputMaybe<ComponentLayoutSectionInput>;
    name?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComponentLabelsActions = {
    apply: Scalars['String']['output'];
    cancel: Scalars['String']['output'];
    clear: Scalars['String']['output'];
    clickToSelect: Scalars['String']['output'];
    close: Scalars['String']['output'];
    delete: Scalars['String']['output'];
    details: Scalars['String']['output'];
    edit: Scalars['String']['output'];
    hide: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    logIn: Scalars['String']['output'];
    logOut: Scalars['String']['output'];
    off: Scalars['String']['output'];
    on: Scalars['String']['output'];
    payOnline: Scalars['String']['output'];
    renew: Scalars['String']['output'];
    reorder: Scalars['String']['output'];
    save: Scalars['String']['output'];
    settings: Scalars['String']['output'];
    show: Scalars['String']['output'];
    showAllArticles: Scalars['String']['output'];
    showLess: Scalars['String']['output'];
    showMore: Scalars['String']['output'];
    trackOrder: Scalars['String']['output'];
};

export type ComponentLabelsActionsInput = {
    apply?: InputMaybe<Scalars['String']['input']>;
    cancel?: InputMaybe<Scalars['String']['input']>;
    clear?: InputMaybe<Scalars['String']['input']>;
    clickToSelect?: InputMaybe<Scalars['String']['input']>;
    close?: InputMaybe<Scalars['String']['input']>;
    delete?: InputMaybe<Scalars['String']['input']>;
    details?: InputMaybe<Scalars['String']['input']>;
    edit?: InputMaybe<Scalars['String']['input']>;
    hide?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    logIn?: InputMaybe<Scalars['String']['input']>;
    logOut?: InputMaybe<Scalars['String']['input']>;
    off?: InputMaybe<Scalars['String']['input']>;
    on?: InputMaybe<Scalars['String']['input']>;
    payOnline?: InputMaybe<Scalars['String']['input']>;
    renew?: InputMaybe<Scalars['String']['input']>;
    reorder?: InputMaybe<Scalars['String']['input']>;
    save?: InputMaybe<Scalars['String']['input']>;
    settings?: InputMaybe<Scalars['String']['input']>;
    show?: InputMaybe<Scalars['String']['input']>;
    showAllArticles?: InputMaybe<Scalars['String']['input']>;
    showLess?: InputMaybe<Scalars['String']['input']>;
    showMore?: InputMaybe<Scalars['String']['input']>;
    trackOrder?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLabelsDates = {
    id: Scalars['ID']['output'];
    today: Scalars['String']['output'];
    yesterday: Scalars['String']['output'];
};

export type ComponentLabelsDatesInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
    today?: InputMaybe<Scalars['String']['input']>;
    yesterday?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLabelsErrors = {
    id: Scalars['ID']['output'];
    requestError: ComponentContentMessageSimple;
};

export type ComponentLabelsErrorsInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
    requestError?: InputMaybe<ComponentContentMessageSimpleInput>;
};

export type ComponentLabelsMedia = {
    id: Scalars['ID']['output'];
    mute: Scalars['String']['output'];
    pause: Scalars['String']['output'];
    play: Scalars['String']['output'];
    unmute: Scalars['String']['output'];
};

export type ComponentLabelsMediaInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
    mute?: InputMaybe<Scalars['String']['input']>;
    pause?: InputMaybe<Scalars['String']['input']>;
    play?: InputMaybe<Scalars['String']['input']>;
    unmute?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLabelsValidation = {
    id: Scalars['ID']['output'];
    isOptional: Scalars['String']['output'];
    isRequired: Scalars['String']['output'];
};

export type ComponentLabelsValidationInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
    isOptional?: InputMaybe<Scalars['String']['input']>;
    isRequired?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLayoutSection = {
    background: Enum_Componentlayoutsection_Background;
    id: Scalars['ID']['output'];
    spacing: Enum_Componentlayoutsection_Spacing;
    variant: Enum_Componentlayoutsection_Variant;
};

export type ComponentLayoutSectionFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentLayoutSectionFiltersInput>>>;
    background?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentLayoutSectionFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentLayoutSectionFiltersInput>>>;
    spacing?: InputMaybe<StringFilterInput>;
    variant?: InputMaybe<StringFilterInput>;
};

export type ComponentLayoutSectionInput = {
    background?: InputMaybe<Enum_Componentlayoutsection_Background>;
    id?: InputMaybe<Scalars['ID']['input']>;
    spacing?: InputMaybe<Enum_Componentlayoutsection_Spacing>;
    variant?: InputMaybe<Enum_Componentlayoutsection_Variant>;
};

export type ComponentRelationResponseCollection = {
    nodes: Array<Component>;
};

export type ComponentSeoMetadata = {
    date?: Maybe<Scalars['DateTime']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSeoSeo = {
    description: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    image?: Maybe<UploadFile>;
    keywords?: Maybe<Array<Maybe<ComponentContentKeyword>>>;
    noFollow: Scalars['Boolean']['output'];
    noIndex: Scalars['Boolean']['output'];
    title: Scalars['String']['output'];
};

export type ComponentSeoSeoKeywordsArgs = {
    filters?: InputMaybe<ComponentContentKeywordFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSeoSeoFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    keywords?: InputMaybe<ComponentContentKeywordFiltersInput>;
    noFollow?: InputMaybe<BooleanFilterInput>;
    noIndex?: InputMaybe<BooleanFilterInput>;
    not?: InputMaybe<ComponentSeoSeoFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentSeoSeoInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Scalars['ID']['input']>;
    keywords?: InputMaybe<Array<InputMaybe<ComponentContentKeywordInput>>>;
    noFollow?: InputMaybe<Scalars['Boolean']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSeoUserRoles = {
    id: Scalars['ID']['output'];
    roles?: Maybe<Scalars['JSON']['output']>;
};

export type ComponentSeoUserRolesFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentSeoUserRolesFiltersInput>>>;
    not?: InputMaybe<ComponentSeoUserRolesFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentSeoUserRolesFiltersInput>>>;
    roles?: InputMaybe<JsonFilterInput>;
};

export type ComponentSeoUserRolesInput = {
    id?: InputMaybe<Scalars['ID']['input']>;
    roles?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentTemplatesOneColumn = {
    id: Scalars['ID']['output'];
    mainSlot: Array<Maybe<Component>>;
    mainSlot_connection?: Maybe<ComponentRelationResponseCollection>;
};

export type ComponentTemplatesOneColumnMainSlotArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesOneColumnMainSlot_ConnectionArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesTwoColumn = {
    bottomSlot: Array<Maybe<Component>>;
    bottomSlot_connection?: Maybe<ComponentRelationResponseCollection>;
    id: Scalars['ID']['output'];
    leftSlot: Array<Maybe<Component>>;
    leftSlot_connection?: Maybe<ComponentRelationResponseCollection>;
    rightSlot: Array<Maybe<Component>>;
    rightSlot_connection?: Maybe<ComponentRelationResponseCollection>;
    topSlot: Array<Maybe<Component>>;
    topSlot_connection?: Maybe<ComponentRelationResponseCollection>;
};

export type ComponentTemplatesTwoColumnBottomSlotArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesTwoColumnBottomSlot_ConnectionArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesTwoColumnLeftSlotArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesTwoColumnLeftSlot_ConnectionArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesTwoColumnRightSlotArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesTwoColumnRightSlot_ConnectionArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesTwoColumnTopSlotArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTemplatesTwoColumnTopSlot_ConnectionArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ConfigurableTexts = {
    actions: ComponentLabelsActions;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    dates: ComponentLabelsDates;
    documentId: Scalars['ID']['output'];
    errors: ComponentLabelsErrors;
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<ConfigurableTexts>>;
    localizations_connection?: Maybe<ConfigurableTextsRelationResponseCollection>;
    media: ComponentLabelsMedia;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    validation: ComponentLabelsValidation;
};

export type ConfigurableTextsInput = {
    actions?: InputMaybe<ComponentLabelsActionsInput>;
    dates?: InputMaybe<ComponentLabelsDatesInput>;
    errors?: InputMaybe<ComponentLabelsErrorsInput>;
    media?: InputMaybe<ComponentLabelsMediaInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    validation?: InputMaybe<ComponentLabelsValidationInput>;
};

export type ConfigurableTextsRelationResponseCollection = {
    nodes: Array<ConfigurableTexts>;
};

export type DateTimeFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    contains?: InputMaybe<Scalars['DateTime']['input']>;
    containsi?: InputMaybe<Scalars['DateTime']['input']>;
    endsWith?: InputMaybe<Scalars['DateTime']['input']>;
    eq?: InputMaybe<Scalars['DateTime']['input']>;
    eqi?: InputMaybe<Scalars['DateTime']['input']>;
    gt?: InputMaybe<Scalars['DateTime']['input']>;
    gte?: InputMaybe<Scalars['DateTime']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    lt?: InputMaybe<Scalars['DateTime']['input']>;
    lte?: InputMaybe<Scalars['DateTime']['input']>;
    ne?: InputMaybe<Scalars['DateTime']['input']>;
    nei?: InputMaybe<Scalars['DateTime']['input']>;
    not?: InputMaybe<DateTimeFilterInput>;
    notContains?: InputMaybe<Scalars['DateTime']['input']>;
    notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    notNull?: InputMaybe<Scalars['Boolean']['input']>;
    null?: InputMaybe<Scalars['Boolean']['input']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
    documentId: Scalars['ID']['output'];
};

export enum Enum_Componentcomponentsherosection_Headingtype {
    H1 = 'h1',
    H2 = 'h2',
}

export enum Enum_Componentcomponentspricingsection_Headingtype {
    H1 = 'h1',
    H2 = 'h2',
}

export enum Enum_Componentcontentbadge_Variant {
    Default = 'default',
    Destructive = 'destructive',
    Outline = 'outline',
    Secondary = 'secondary',
}

export enum Enum_Componentcontentlink_Variant {
    Destructive = 'destructive',
    Ghost = 'ghost',
    Link = 'link',
    Outline = 'outline',
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary',
}

export enum Enum_Componentcontentprice_Currency {
    Eur = 'EUR',
    Gbp = 'GBP',
    Pln = 'PLN',
    Usd = 'USD',
}

export enum Enum_Componentlayoutsection_Background {
    Brand = 'brand',
    Dark = 'dark',
    Light = 'light',
    None = 'none',
}

export enum Enum_Componentlayoutsection_Spacing {
    Large = 'large',
    Medium = 'medium',
    None = 'none',
    Small = 'small',
}

export enum Enum_Componentlayoutsection_Variant {
    Full = 'full',
    Narrow = 'narrow',
    Wide = 'wide',
}

export type Error = {
    code: Scalars['String']['output'];
    message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
    alternativeText?: InputMaybe<Scalars['String']['input']>;
    caption?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    contains?: InputMaybe<Scalars['Float']['input']>;
    containsi?: InputMaybe<Scalars['Float']['input']>;
    endsWith?: InputMaybe<Scalars['Float']['input']>;
    eq?: InputMaybe<Scalars['Float']['input']>;
    eqi?: InputMaybe<Scalars['Float']['input']>;
    gt?: InputMaybe<Scalars['Float']['input']>;
    gte?: InputMaybe<Scalars['Float']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    lt?: InputMaybe<Scalars['Float']['input']>;
    lte?: InputMaybe<Scalars['Float']['input']>;
    ne?: InputMaybe<Scalars['Float']['input']>;
    nei?: InputMaybe<Scalars['Float']['input']>;
    not?: InputMaybe<FloatFilterInput>;
    notContains?: InputMaybe<Scalars['Float']['input']>;
    notContainsi?: InputMaybe<Scalars['Float']['input']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    notNull?: InputMaybe<Scalars['Boolean']['input']>;
    null?: InputMaybe<Scalars['Boolean']['input']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
    copyright: Scalars['String']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    items: Array<Maybe<FooterItemsDynamicZone>>;
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<Footer>>;
    localizations_connection?: Maybe<FooterRelationResponseCollection>;
    logo: UploadFile;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    title: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterLocalizationsArgs = {
    filters?: InputMaybe<FooterFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterLocalizations_ConnectionArgs = {
    filters?: InputMaybe<FooterFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterEntityResponseCollection = {
    nodes: Array<Footer>;
    pageInfo: Pagination;
};

export type FooterFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
    copyright?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    locale?: InputMaybe<StringFilterInput>;
    localizations?: InputMaybe<FooterFiltersInput>;
    not?: InputMaybe<FooterFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    title?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FooterInput = {
    copyright?: InputMaybe<Scalars['String']['input']>;
    items?: InputMaybe<Array<Scalars['FooterItemsDynamicZoneInput']['input']>>;
    logo?: InputMaybe<Scalars['ID']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type FooterItemsDynamicZone = ComponentContentNavigationGroup | ComponentContentNavigationItem | Error;

export type FooterRelationResponseCollection = {
    nodes: Array<Footer>;
};

export type GenericMorph =
    | AppConfig
    | Article
    | Author
    | Category
    | Component
    | ComponentComponentsArticle
    | ComponentComponentsArticleList
    | ComponentComponentsArticleSearch
    | ComponentComponentsBentoGrid
    | ComponentComponentsCategory
    | ComponentComponentsCategoryList
    | ComponentComponentsCtaSection
    | ComponentComponentsDocumentList
    | ComponentComponentsFaq
    | ComponentComponentsFeatureSection
    | ComponentComponentsFeatureSectionGrid
    | ComponentComponentsHeroSection
    | ComponentComponentsMediaSection
    | ComponentComponentsPricingSection
    | ComponentComponentsQuickLinks
    | ComponentContentAlertBox
    | ComponentContentArticleSection
    | ComponentContentBadge
    | ComponentContentBanner
    | ComponentContentCardWithImage
    | ComponentContentFaqSection
    | ComponentContentFeatureItem
    | ComponentContentFieldMapping
    | ComponentContentFile
    | ComponentContentIconWithText
    | ComponentContentInformationCard
    | ComponentContentKeyValue
    | ComponentContentKeyword
    | ComponentContentLink
    | ComponentContentListWithIcons
    | ComponentContentMessage
    | ComponentContentMessageSimple
    | ComponentContentNavigationGroup
    | ComponentContentNavigationItem
    | ComponentContentPrice
    | ComponentContentPricingCard
    | ComponentContentRichTextWithTitle
    | ComponentLabelsActions
    | ComponentLabelsDates
    | ComponentLabelsErrors
    | ComponentLabelsMedia
    | ComponentLabelsValidation
    | ComponentLayoutSection
    | ComponentSeoMetadata
    | ComponentSeoSeo
    | ComponentSeoUserRoles
    | ComponentTemplatesOneColumn
    | ComponentTemplatesTwoColumn
    | ConfigurableTexts
    | Footer
    | Header
    | I18NLocale
    | Mapping
    | NotFoundPage
    | Page
    | ReviewWorkflowsWorkflow
    | ReviewWorkflowsWorkflowStage
    | UploadFile
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsUser;

export type Header = {
    closeMobileMenuLabel: Scalars['String']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    items: Array<Maybe<HeaderItemsDynamicZone>>;
    languageSwitcherLabel: Scalars['String']['output'];
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<Header>>;
    localizations_connection?: Maybe<HeaderRelationResponseCollection>;
    logo: UploadFile;
    notification?: Maybe<Page>;
    openMobileMenuLabel: Scalars['String']['output'];
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    showContextSwitcher?: Maybe<Scalars['Boolean']['output']>;
    title: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    userInfo?: Maybe<Page>;
};

export type HeaderLocalizationsArgs = {
    filters?: InputMaybe<HeaderFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeaderLocalizations_ConnectionArgs = {
    filters?: InputMaybe<HeaderFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeaderEntityResponseCollection = {
    nodes: Array<Header>;
    pageInfo: Pagination;
};

export type HeaderFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<HeaderFiltersInput>>>;
    closeMobileMenuLabel?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    languageSwitcherLabel?: InputMaybe<StringFilterInput>;
    locale?: InputMaybe<StringFilterInput>;
    localizations?: InputMaybe<HeaderFiltersInput>;
    not?: InputMaybe<HeaderFiltersInput>;
    notification?: InputMaybe<PageFiltersInput>;
    openMobileMenuLabel?: InputMaybe<StringFilterInput>;
    or?: InputMaybe<Array<InputMaybe<HeaderFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    showContextSwitcher?: InputMaybe<BooleanFilterInput>;
    title?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    userInfo?: InputMaybe<PageFiltersInput>;
};

export type HeaderInput = {
    closeMobileMenuLabel?: InputMaybe<Scalars['String']['input']>;
    items?: InputMaybe<Array<Scalars['HeaderItemsDynamicZoneInput']['input']>>;
    languageSwitcherLabel?: InputMaybe<Scalars['String']['input']>;
    logo?: InputMaybe<Scalars['ID']['input']>;
    notification?: InputMaybe<Scalars['ID']['input']>;
    openMobileMenuLabel?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    showContextSwitcher?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    userInfo?: InputMaybe<Scalars['ID']['input']>;
};

export type HeaderItemsDynamicZone = ComponentContentNavigationGroup | ComponentContentNavigationItem | Error;

export type HeaderRelationResponseCollection = {
    nodes: Array<Header>;
};

export type I18NLocale = {
    code?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
    nodes: Array<I18NLocale>;
    pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
    code?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<I18NLocaleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    contains?: InputMaybe<Scalars['ID']['input']>;
    containsi?: InputMaybe<Scalars['ID']['input']>;
    endsWith?: InputMaybe<Scalars['ID']['input']>;
    eq?: InputMaybe<Scalars['ID']['input']>;
    eqi?: InputMaybe<Scalars['ID']['input']>;
    gt?: InputMaybe<Scalars['ID']['input']>;
    gte?: InputMaybe<Scalars['ID']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    lt?: InputMaybe<Scalars['ID']['input']>;
    lte?: InputMaybe<Scalars['ID']['input']>;
    ne?: InputMaybe<Scalars['ID']['input']>;
    nei?: InputMaybe<Scalars['ID']['input']>;
    not?: InputMaybe<IdFilterInput>;
    notContains?: InputMaybe<Scalars['ID']['input']>;
    notContainsi?: InputMaybe<Scalars['ID']['input']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    notNull?: InputMaybe<Scalars['Boolean']['input']>;
    null?: InputMaybe<Scalars['Boolean']['input']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    contains?: InputMaybe<Scalars['Int']['input']>;
    containsi?: InputMaybe<Scalars['Int']['input']>;
    endsWith?: InputMaybe<Scalars['Int']['input']>;
    eq?: InputMaybe<Scalars['Int']['input']>;
    eqi?: InputMaybe<Scalars['Int']['input']>;
    gt?: InputMaybe<Scalars['Int']['input']>;
    gte?: InputMaybe<Scalars['Int']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    lt?: InputMaybe<Scalars['Int']['input']>;
    lte?: InputMaybe<Scalars['Int']['input']>;
    ne?: InputMaybe<Scalars['Int']['input']>;
    nei?: InputMaybe<Scalars['Int']['input']>;
    not?: InputMaybe<IntFilterInput>;
    notContains?: InputMaybe<Scalars['Int']['input']>;
    notContainsi?: InputMaybe<Scalars['Int']['input']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    notNull?: InputMaybe<Scalars['Boolean']['input']>;
    null?: InputMaybe<Scalars['Boolean']['input']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    contains?: InputMaybe<Scalars['JSON']['input']>;
    containsi?: InputMaybe<Scalars['JSON']['input']>;
    endsWith?: InputMaybe<Scalars['JSON']['input']>;
    eq?: InputMaybe<Scalars['JSON']['input']>;
    eqi?: InputMaybe<Scalars['JSON']['input']>;
    gt?: InputMaybe<Scalars['JSON']['input']>;
    gte?: InputMaybe<Scalars['JSON']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    lt?: InputMaybe<Scalars['JSON']['input']>;
    lte?: InputMaybe<Scalars['JSON']['input']>;
    ne?: InputMaybe<Scalars['JSON']['input']>;
    nei?: InputMaybe<Scalars['JSON']['input']>;
    not?: InputMaybe<JsonFilterInput>;
    notContains?: InputMaybe<Scalars['JSON']['input']>;
    notContainsi?: InputMaybe<Scalars['JSON']['input']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    notNull?: InputMaybe<Scalars['Boolean']['input']>;
    null?: InputMaybe<Scalars['Boolean']['input']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
    startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mapping = {
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MappingEntityResponseCollection = {
    nodes: Array<Mapping>;
    pageInfo: Pagination;
};

export type MappingFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<MappingFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<MappingFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<MappingFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MappingInput = {
    name?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Mutation = {
    /** Change user password. Confirm with the current password. */
    changePassword?: Maybe<UsersPermissionsLoginPayload>;
    createArticle?: Maybe<Article>;
    createAuthor?: Maybe<Author>;
    createCategory?: Maybe<Category>;
    createComponent?: Maybe<Component>;
    createFooter?: Maybe<Footer>;
    createHeader?: Maybe<Header>;
    createMapping?: Maybe<Mapping>;
    createPage?: Maybe<Page>;
    createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
    createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
    /** Create a new role */
    createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
    /** Create a new user */
    createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    deleteAppConfig?: Maybe<DeleteMutationResponse>;
    deleteArticle?: Maybe<DeleteMutationResponse>;
    deleteAuthor?: Maybe<DeleteMutationResponse>;
    deleteCategory?: Maybe<DeleteMutationResponse>;
    deleteComponent?: Maybe<DeleteMutationResponse>;
    deleteConfigurableTexts?: Maybe<DeleteMutationResponse>;
    deleteFooter?: Maybe<DeleteMutationResponse>;
    deleteHeader?: Maybe<DeleteMutationResponse>;
    deleteMapping?: Maybe<DeleteMutationResponse>;
    deleteNotFoundPage?: Maybe<DeleteMutationResponse>;
    deletePage?: Maybe<DeleteMutationResponse>;
    deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
    deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
    deleteUploadFile?: Maybe<UploadFile>;
    /** Delete an existing role */
    deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
    /** Delete an existing user */
    deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    /** Confirm an email users email address */
    emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
    /** Request a reset password token */
    forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
    login: UsersPermissionsLoginPayload;
    /** Register a user */
    register: UsersPermissionsLoginPayload;
    /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
    resetPassword?: Maybe<UsersPermissionsLoginPayload>;
    updateAppConfig?: Maybe<AppConfig>;
    updateArticle?: Maybe<Article>;
    updateAuthor?: Maybe<Author>;
    updateCategory?: Maybe<Category>;
    updateComponent?: Maybe<Component>;
    updateConfigurableTexts?: Maybe<ConfigurableTexts>;
    updateFooter?: Maybe<Footer>;
    updateHeader?: Maybe<Header>;
    updateMapping?: Maybe<Mapping>;
    updateNotFoundPage?: Maybe<NotFoundPage>;
    updatePage?: Maybe<Page>;
    updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
    updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
    updateUploadFile: UploadFile;
    /** Update an existing role */
    updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
    /** Update an existing user */
    updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};

export type MutationChangePasswordArgs = {
    currentPassword: Scalars['String']['input'];
    password: Scalars['String']['input'];
    passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreateArticleArgs = {
    data: ArticleInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateAuthorArgs = {
    data: AuthorInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateCategoryArgs = {
    data: CategoryInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateComponentArgs = {
    data: ComponentInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateFooterArgs = {
    data: FooterInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateHeaderArgs = {
    data: HeaderInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateMappingArgs = {
    data: MappingInput;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreatePageArgs = {
    data: PageInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowArgs = {
    data: ReviewWorkflowsWorkflowInput;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
    data: ReviewWorkflowsWorkflowStageInput;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateUsersPermissionsRoleArgs = {
    data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
    data: UsersPermissionsUserInput;
};

export type MutationDeleteAppConfigArgs = {
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteArticleArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteAuthorArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteCategoryArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteComponentArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteConfigurableTextsArgs = {
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteFooterArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteHeaderArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteMappingArgs = {
    documentId: Scalars['ID']['input'];
};

export type MutationDeleteNotFoundPageArgs = {
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePageArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
    documentId: Scalars['ID']['input'];
};

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
    documentId: Scalars['ID']['input'];
};

export type MutationDeleteUploadFileArgs = {
    id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
    id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
    id: Scalars['ID']['input'];
};

export type MutationEmailConfirmationArgs = {
    confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
    email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
    input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
    input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
    code: Scalars['String']['input'];
    password: Scalars['String']['input'];
    passwordConfirmation: Scalars['String']['input'];
};

export type MutationUpdateAppConfigArgs = {
    data: AppConfigInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateArticleArgs = {
    data: ArticleInput;
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateAuthorArgs = {
    data: AuthorInput;
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateCategoryArgs = {
    data: CategoryInput;
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateComponentArgs = {
    data: ComponentInput;
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateConfigurableTextsArgs = {
    data: ConfigurableTextsInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateFooterArgs = {
    data: FooterInput;
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateHeaderArgs = {
    data: HeaderInput;
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateMappingArgs = {
    data: MappingInput;
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateNotFoundPageArgs = {
    data: NotFoundPageInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdatePageArgs = {
    data: PageInput;
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
    data: ReviewWorkflowsWorkflowInput;
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
    data: ReviewWorkflowsWorkflowStageInput;
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateUploadFileArgs = {
    id: Scalars['ID']['input'];
    info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
    data: UsersPermissionsRoleInput;
    id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
    data: UsersPermissionsUserInput;
    id: Scalars['ID']['input'];
};

export type NotFoundPage = {
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    description: Scalars['String']['output'];
    documentId: Scalars['ID']['output'];
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<NotFoundPage>>;
    localizations_connection?: Maybe<NotFoundPageRelationResponseCollection>;
    page?: Maybe<Page>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    title: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    urlLabel: Scalars['String']['output'];
};

export type NotFoundPageInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['ID']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    urlLabel?: InputMaybe<Scalars['String']['input']>;
};

export type NotFoundPageRelationResponseCollection = {
    nodes: Array<NotFoundPage>;
};

export type Page = {
    SEO: ComponentSeoSeo;
    child?: Maybe<Page>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    hasOwnTitle: Scalars['Boolean']['output'];
    locale?: Maybe<Scalars['String']['output']>;
    localizations: Array<Maybe<Page>>;
    localizations_connection?: Maybe<PageRelationResponseCollection>;
    parent?: Maybe<Page>;
    permissions?: Maybe<ComponentSeoUserRoles>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    showBreadcrumbs: Scalars['Boolean']['output'];
    slug: Scalars['String']['output'];
    template: Array<Maybe<PageTemplateDynamicZone>>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageLocalizationsArgs = {
    filters?: InputMaybe<PageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageLocalizations_ConnectionArgs = {
    filters?: InputMaybe<PageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageEntityResponseCollection = {
    nodes: Array<Page>;
    pageInfo: Pagination;
};

export type PageFiltersInput = {
    SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
    and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
    child?: InputMaybe<PageFiltersInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    hasOwnTitle?: InputMaybe<BooleanFilterInput>;
    locale?: InputMaybe<StringFilterInput>;
    localizations?: InputMaybe<PageFiltersInput>;
    not?: InputMaybe<PageFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
    parent?: InputMaybe<PageFiltersInput>;
    permissions?: InputMaybe<ComponentSeoUserRolesFiltersInput>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    showBreadcrumbs?: InputMaybe<BooleanFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
    SEO?: InputMaybe<ComponentSeoSeoInput>;
    child?: InputMaybe<Scalars['ID']['input']>;
    hasOwnTitle?: InputMaybe<Scalars['Boolean']['input']>;
    parent?: InputMaybe<Scalars['ID']['input']>;
    permissions?: InputMaybe<ComponentSeoUserRolesInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    showBreadcrumbs?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    template?: InputMaybe<Array<Scalars['PageTemplateDynamicZoneInput']['input']>>;
};

export type PageRelationResponseCollection = {
    nodes: Array<Page>;
};

export type PageTemplateDynamicZone = ComponentTemplatesOneColumn | ComponentTemplatesTwoColumn | Error;

export type Pagination = {
    page: Scalars['Int']['output'];
    pageCount: Scalars['Int']['output'];
    pageSize: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type PaginationArg = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    pageSize?: InputMaybe<Scalars['Int']['input']>;
    start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationStatus {
    Draft = 'DRAFT',
    Published = 'PUBLISHED',
}

export type Query = {
    appConfig?: Maybe<AppConfig>;
    article?: Maybe<Article>;
    articles: Array<Maybe<Article>>;
    articles_connection?: Maybe<ArticleEntityResponseCollection>;
    author?: Maybe<Author>;
    authors: Array<Maybe<Author>>;
    authors_connection?: Maybe<AuthorEntityResponseCollection>;
    categories: Array<Maybe<Category>>;
    categories_connection?: Maybe<CategoryEntityResponseCollection>;
    category?: Maybe<Category>;
    component?: Maybe<Component>;
    components: Array<Maybe<Component>>;
    components_connection?: Maybe<ComponentEntityResponseCollection>;
    configurableTexts?: Maybe<ConfigurableTexts>;
    footer?: Maybe<Footer>;
    footers: Array<Maybe<Footer>>;
    footers_connection?: Maybe<FooterEntityResponseCollection>;
    header?: Maybe<Header>;
    headers: Array<Maybe<Header>>;
    headers_connection?: Maybe<HeaderEntityResponseCollection>;
    i18NLocale?: Maybe<I18NLocale>;
    i18NLocales: Array<Maybe<I18NLocale>>;
    i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
    mapping?: Maybe<Mapping>;
    mappings: Array<Maybe<Mapping>>;
    mappings_connection?: Maybe<MappingEntityResponseCollection>;
    me?: Maybe<UsersPermissionsMe>;
    notFoundPage?: Maybe<NotFoundPage>;
    page?: Maybe<Page>;
    pages: Array<Maybe<Page>>;
    pages_connection?: Maybe<PageEntityResponseCollection>;
    reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
    reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
    reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
    reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
    reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
    reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
    uploadFile?: Maybe<UploadFile>;
    uploadFiles: Array<Maybe<UploadFile>>;
    uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
    usersPermissionsRole?: Maybe<UsersPermissionsRole>;
    usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
    usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
    usersPermissionsUser?: Maybe<UsersPermissionsUser>;
    usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
    usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryAppConfigArgs = {
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryArticleArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryArticlesArgs = {
    filters?: InputMaybe<ArticleFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryArticles_ConnectionArgs = {
    filters?: InputMaybe<ArticleFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryAuthorArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryAuthorsArgs = {
    filters?: InputMaybe<AuthorFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryAuthors_ConnectionArgs = {
    filters?: InputMaybe<AuthorFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryCategoriesArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryCategories_ConnectionArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryCategoryArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryComponentArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryComponentsArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryComponents_ConnectionArgs = {
    filters?: InputMaybe<ComponentFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryConfigurableTextsArgs = {
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryFooterArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryFootersArgs = {
    filters?: InputMaybe<FooterFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryFooters_ConnectionArgs = {
    filters?: InputMaybe<FooterFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryHeaderArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryHeadersArgs = {
    filters?: InputMaybe<HeaderFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryHeaders_ConnectionArgs = {
    filters?: InputMaybe<HeaderFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocaleArgs = {
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocalesArgs = {
    filters?: InputMaybe<I18NLocaleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocales_ConnectionArgs = {
    filters?: InputMaybe<I18NLocaleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryMappingArgs = {
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type QueryMappingsArgs = {
    filters?: InputMaybe<MappingFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryMappings_ConnectionArgs = {
    filters?: InputMaybe<MappingFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryNotFoundPageArgs = {
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryPageArgs = {
    documentId: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryPagesArgs = {
    filters?: InputMaybe<PageFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryPages_ConnectionArgs = {
    filters?: InputMaybe<PageFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowArgs = {
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStageArgs = {
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStagesArgs = {
    filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
    filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowsArgs = {
    filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
    filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFileArgs = {
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFilesArgs = {
    filters?: InputMaybe<UploadFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFiles_ConnectionArgs = {
    filters?: InputMaybe<UploadFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoleArgs = {
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRolesArgs = {
    filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoles_ConnectionArgs = {
    filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUserArgs = {
    documentId: Scalars['ID']['input'];
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsersArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsers_ConnectionArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
    contentTypes: Scalars['JSON']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
    stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
    stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReviewWorkflowsWorkflowStagesArgs = {
    filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
    filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
    nodes: Array<ReviewWorkflowsWorkflow>;
    pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
    contentTypes?: InputMaybe<JsonFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
    stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
    contentTypes?: InputMaybe<Scalars['JSON']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
    stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
    color?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
    nodes: Array<ReviewWorkflowsWorkflowStage>;
    pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
    color?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
    color?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
    nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type StringFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    containsi?: InputMaybe<Scalars['String']['input']>;
    endsWith?: InputMaybe<Scalars['String']['input']>;
    eq?: InputMaybe<Scalars['String']['input']>;
    eqi?: InputMaybe<Scalars['String']['input']>;
    gt?: InputMaybe<Scalars['String']['input']>;
    gte?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    lt?: InputMaybe<Scalars['String']['input']>;
    lte?: InputMaybe<Scalars['String']['input']>;
    ne?: InputMaybe<Scalars['String']['input']>;
    nei?: InputMaybe<Scalars['String']['input']>;
    not?: InputMaybe<StringFilterInput>;
    notContains?: InputMaybe<Scalars['String']['input']>;
    notContainsi?: InputMaybe<Scalars['String']['input']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    notNull?: InputMaybe<Scalars['Boolean']['input']>;
    null?: InputMaybe<Scalars['Boolean']['input']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
    alternativeText?: Maybe<Scalars['String']['output']>;
    caption?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    ext?: Maybe<Scalars['String']['output']>;
    formats?: Maybe<Scalars['JSON']['output']>;
    hash: Scalars['String']['output'];
    height?: Maybe<Scalars['Int']['output']>;
    mime: Scalars['String']['output'];
    name: Scalars['String']['output'];
    previewUrl?: Maybe<Scalars['String']['output']>;
    provider: Scalars['String']['output'];
    provider_metadata?: Maybe<Scalars['JSON']['output']>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    related?: Maybe<Array<Maybe<GenericMorph>>>;
    size: Scalars['Float']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    url: Scalars['String']['output'];
    width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
    nodes: Array<UploadFile>;
    pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
    alternativeText?: InputMaybe<StringFilterInput>;
    and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
    caption?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    ext?: InputMaybe<StringFilterInput>;
    formats?: InputMaybe<JsonFilterInput>;
    hash?: InputMaybe<StringFilterInput>;
    height?: InputMaybe<IntFilterInput>;
    mime?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UploadFileFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
    previewUrl?: InputMaybe<StringFilterInput>;
    provider?: InputMaybe<StringFilterInput>;
    provider_metadata?: InputMaybe<JsonFilterInput>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    size?: InputMaybe<FloatFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    url?: InputMaybe<StringFilterInput>;
    width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
    nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
    ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
    ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
    identifier: Scalars['String']['input'];
    password: Scalars['String']['input'];
    provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
    jwt?: Maybe<Scalars['String']['output']>;
    user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
    blocked?: Maybe<Scalars['Boolean']['output']>;
    confirmed?: Maybe<Scalars['Boolean']['output']>;
    documentId: Scalars['ID']['output'];
    email?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    role?: Maybe<UsersPermissionsMeRole>;
    username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
    ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
    action: Scalars['String']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    role?: Maybe<UsersPermissionsRole>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
    action?: InputMaybe<StringFilterInput>;
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
    nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
    username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    documentId: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    permissions: Array<Maybe<UsersPermissionsPermission>>;
    permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    users: Array<Maybe<UsersPermissionsUser>>;
    users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
    filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRolePermissions_ConnectionArgs = {
    filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsers_ConnectionArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
    nodes: Array<UsersPermissionsRole>;
    pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
    permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    type?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
    users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
    ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
    blocked?: Maybe<Scalars['Boolean']['output']>;
    confirmed?: Maybe<Scalars['Boolean']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    documentId: Scalars['ID']['output'];
    email: Scalars['String']['output'];
    provider?: Maybe<Scalars['String']['output']>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    role?: Maybe<UsersPermissionsRole>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
    data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
    nodes: Array<UsersPermissionsUser>;
    pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
    blocked?: InputMaybe<BooleanFilterInput>;
    confirmed?: InputMaybe<BooleanFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    documentId?: InputMaybe<IdFilterInput>;
    email?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UsersPermissionsUserFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
    provider?: InputMaybe<StringFilterInput>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
    blocked?: InputMaybe<Scalars['Boolean']['input']>;
    confirmed?: InputMaybe<Scalars['Boolean']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
    provider?: InputMaybe<Scalars['String']['input']>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    role?: InputMaybe<Scalars['ID']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
    nodes: Array<UsersPermissionsUser>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
    ComponentContentDynamicZone:
        | (Omit<ComponentComponentsArticle, 'author' | 'category'> & {
              author?: Maybe<_RefType['Author']>;
              category?: Maybe<_RefType['Category']>;
          })
        | (Omit<ComponentComponentsArticleList, 'category' | 'pages' | 'pages_connection' | 'parent'> & {
              category?: Maybe<_RefType['Category']>;
              pages: Array<Maybe<_RefType['Page']>>;
              pages_connection?: Maybe<_RefType['PageRelationResponseCollection']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentComponentsArticleSearch, 'noResults'> & { noResults: _RefType['ComponentContentBanner'] })
        | (Omit<ComponentComponentsBentoGrid, 'items'> & {
              items?: Maybe<Array<Maybe<_RefType['ComponentContentCardWithImage']>>>;
          })
        | (Omit<ComponentComponentsCategory, 'category' | 'parent'> & {
              category?: Maybe<_RefType['Category']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentComponentsCategoryList, 'categories' | 'categories_connection' | 'parent'> & {
              categories: Array<Maybe<_RefType['Category']>>;
              categories_connection?: Maybe<_RefType['CategoryRelationResponseCollection']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentComponentsCtaSection, 'image' | 'links'> & {
              image?: Maybe<_RefType['UploadFile']>;
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
          })
        | (Omit<ComponentComponentsDocumentList, 'documents'> & {
              documents?: Maybe<Array<Maybe<_RefType['ComponentContentFile']>>>;
          })
        | (Omit<ComponentComponentsFaq, 'banner'> & { banner?: Maybe<_RefType['ComponentContentBanner']> })
        | (Omit<ComponentComponentsFeatureSection, 'image' | 'links'> & {
              image?: Maybe<_RefType['UploadFile']>;
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
          })
        | ComponentComponentsFeatureSectionGrid
        | (Omit<ComponentComponentsHeroSection, 'image' | 'links'> & {
              image?: Maybe<_RefType['UploadFile']>;
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
          })
        | (Omit<ComponentComponentsMediaSection, 'links' | 'media'> & {
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
              media?: Maybe<_RefType['UploadFile']>;
          })
        | (Omit<ComponentComponentsPricingSection, 'pricingList'> & {
              pricingList?: Maybe<Array<Maybe<_RefType['ComponentContentPricingCard']>>>;
          })
        | (Omit<ComponentComponentsQuickLinks, 'items'> & { items: Array<Maybe<_RefType['ComponentContentLink']>> })
        | Error;
    FooterItemsDynamicZone:
        | (Omit<ComponentContentNavigationGroup, 'items'> & {
              items: Array<Maybe<_RefType['ComponentContentNavigationItem']>>;
          })
        | (Omit<ComponentContentNavigationItem, 'page'> & { page?: Maybe<_RefType['Page']> })
        | Error;
    GenericMorph:
        | (Omit<
              AppConfig,
              | 'localizations'
              | 'localizations_connection'
              | 'signedInFooter'
              | 'signedInHeader'
              | 'signedOutFooter'
              | 'signedOutHeader'
          > & {
              localizations: Array<Maybe<_RefType['AppConfig']>>;
              localizations_connection?: Maybe<_RefType['AppConfigRelationResponseCollection']>;
              signedInFooter?: Maybe<_RefType['Footer']>;
              signedInHeader?: Maybe<_RefType['Header']>;
              signedOutFooter?: Maybe<_RefType['Footer']>;
              signedOutHeader?: Maybe<_RefType['Header']>;
          })
        | (Omit<Article, 'SEO' | 'content' | 'localizations' | 'localizations_connection' | 'parent'> & {
              SEO: _RefType['ComponentSeoSeo'];
              content: _RefType['ComponentComponentsArticle'];
              localizations: Array<Maybe<_RefType['Article']>>;
              localizations_connection?: Maybe<_RefType['ArticleRelationResponseCollection']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<Author, 'avatar' | 'avatar_connection' | 'localizations' | 'localizations_connection'> & {
              avatar: Array<Maybe<_RefType['UploadFile']>>;
              avatar_connection?: Maybe<_RefType['UploadFileRelationResponseCollection']>;
              localizations: Array<Maybe<_RefType['Author']>>;
              localizations_connection?: Maybe<_RefType['AuthorRelationResponseCollection']>;
          })
        | (Omit<
              Category,
              'components' | 'components_connection' | 'localizations' | 'localizations_connection' | 'parent'
          > & {
              components: Array<Maybe<_RefType['Component']>>;
              components_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
              localizations: Array<Maybe<_RefType['Category']>>;
              localizations_connection?: Maybe<_RefType['CategoryRelationResponseCollection']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<Component, 'content' | 'localizations' | 'localizations_connection'> & {
              content: Array<Maybe<_RefType['ComponentContentDynamicZone']>>;
              localizations: Array<Maybe<_RefType['Component']>>;
              localizations_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
          })
        | (Omit<ComponentComponentsArticle, 'author' | 'category'> & {
              author?: Maybe<_RefType['Author']>;
              category?: Maybe<_RefType['Category']>;
          })
        | (Omit<ComponentComponentsArticleList, 'category' | 'pages' | 'pages_connection' | 'parent'> & {
              category?: Maybe<_RefType['Category']>;
              pages: Array<Maybe<_RefType['Page']>>;
              pages_connection?: Maybe<_RefType['PageRelationResponseCollection']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentComponentsArticleSearch, 'noResults'> & { noResults: _RefType['ComponentContentBanner'] })
        | (Omit<ComponentComponentsBentoGrid, 'items'> & {
              items?: Maybe<Array<Maybe<_RefType['ComponentContentCardWithImage']>>>;
          })
        | (Omit<ComponentComponentsCategory, 'category' | 'parent'> & {
              category?: Maybe<_RefType['Category']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentComponentsCategoryList, 'categories' | 'categories_connection' | 'parent'> & {
              categories: Array<Maybe<_RefType['Category']>>;
              categories_connection?: Maybe<_RefType['CategoryRelationResponseCollection']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentComponentsCtaSection, 'image' | 'links'> & {
              image?: Maybe<_RefType['UploadFile']>;
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
          })
        | (Omit<ComponentComponentsDocumentList, 'documents'> & {
              documents?: Maybe<Array<Maybe<_RefType['ComponentContentFile']>>>;
          })
        | (Omit<ComponentComponentsFaq, 'banner'> & { banner?: Maybe<_RefType['ComponentContentBanner']> })
        | (Omit<ComponentComponentsFeatureSection, 'image' | 'links'> & {
              image?: Maybe<_RefType['UploadFile']>;
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
          })
        | ComponentComponentsFeatureSectionGrid
        | (Omit<ComponentComponentsHeroSection, 'image' | 'links'> & {
              image?: Maybe<_RefType['UploadFile']>;
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
          })
        | (Omit<ComponentComponentsMediaSection, 'links' | 'media'> & {
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
              media?: Maybe<_RefType['UploadFile']>;
          })
        | (Omit<ComponentComponentsPricingSection, 'pricingList'> & {
              pricingList?: Maybe<Array<Maybe<_RefType['ComponentContentPricingCard']>>>;
          })
        | (Omit<ComponentComponentsQuickLinks, 'items'> & { items: Array<Maybe<_RefType['ComponentContentLink']>> })
        | ComponentContentAlertBox
        | ComponentContentArticleSection
        | ComponentContentBadge
        | (Omit<ComponentContentBanner, 'link'> & { link?: Maybe<_RefType['ComponentContentLink']> })
        | (Omit<ComponentContentCardWithImage, 'image' | 'link'> & {
              image?: Maybe<_RefType['UploadFile']>;
              link?: Maybe<_RefType['ComponentContentLink']>;
          })
        | ComponentContentFaqSection
        | ComponentContentFeatureItem
        | ComponentContentFieldMapping
        | (Omit<ComponentContentFile, 'file'> & { file: _RefType['UploadFile'] })
        | ComponentContentIconWithText
        | (Omit<ComponentContentInformationCard, 'link'> & { link?: Maybe<_RefType['ComponentContentLink']> })
        | ComponentContentKeyValue
        | ComponentContentKeyword
        | (Omit<ComponentContentLink, 'page'> & { page?: Maybe<_RefType['Page']> })
        | ComponentContentListWithIcons
        | ComponentContentMessage
        | ComponentContentMessageSimple
        | (Omit<ComponentContentNavigationGroup, 'items'> & {
              items: Array<Maybe<_RefType['ComponentContentNavigationItem']>>;
          })
        | (Omit<ComponentContentNavigationItem, 'page'> & { page?: Maybe<_RefType['Page']> })
        | ComponentContentPrice
        | (Omit<ComponentContentPricingCard, 'image' | 'links'> & {
              image?: Maybe<_RefType['UploadFile']>;
              links?: Maybe<Array<Maybe<_RefType['ComponentContentLink']>>>;
          })
        | ComponentContentRichTextWithTitle
        | ComponentLabelsActions
        | ComponentLabelsDates
        | ComponentLabelsErrors
        | ComponentLabelsMedia
        | ComponentLabelsValidation
        | ComponentLayoutSection
        | ComponentSeoMetadata
        | (Omit<ComponentSeoSeo, 'image'> & { image?: Maybe<_RefType['UploadFile']> })
        | ComponentSeoUserRoles
        | (Omit<ComponentTemplatesOneColumn, 'mainSlot' | 'mainSlot_connection'> & {
              mainSlot: Array<Maybe<_RefType['Component']>>;
              mainSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
          })
        | (Omit<
              ComponentTemplatesTwoColumn,
              | 'bottomSlot'
              | 'bottomSlot_connection'
              | 'leftSlot'
              | 'leftSlot_connection'
              | 'rightSlot'
              | 'rightSlot_connection'
              | 'topSlot'
              | 'topSlot_connection'
          > & {
              bottomSlot: Array<Maybe<_RefType['Component']>>;
              bottomSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
              leftSlot: Array<Maybe<_RefType['Component']>>;
              leftSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
              rightSlot: Array<Maybe<_RefType['Component']>>;
              rightSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
              topSlot: Array<Maybe<_RefType['Component']>>;
              topSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
          })
        | ConfigurableTexts
        | (Omit<Footer, 'items' | 'localizations' | 'localizations_connection' | 'logo'> & {
              items: Array<Maybe<_RefType['FooterItemsDynamicZone']>>;
              localizations: Array<Maybe<_RefType['Footer']>>;
              localizations_connection?: Maybe<_RefType['FooterRelationResponseCollection']>;
              logo: _RefType['UploadFile'];
          })
        | (Omit<
              Header,
              'items' | 'localizations' | 'localizations_connection' | 'logo' | 'notification' | 'userInfo'
          > & {
              items: Array<Maybe<_RefType['HeaderItemsDynamicZone']>>;
              localizations: Array<Maybe<_RefType['Header']>>;
              localizations_connection?: Maybe<_RefType['HeaderRelationResponseCollection']>;
              logo: _RefType['UploadFile'];
              notification?: Maybe<_RefType['Page']>;
              userInfo?: Maybe<_RefType['Page']>;
          })
        | I18NLocale
        | Mapping
        | (Omit<NotFoundPage, 'localizations' | 'localizations_connection' | 'page'> & {
              localizations: Array<Maybe<_RefType['NotFoundPage']>>;
              localizations_connection?: Maybe<_RefType['NotFoundPageRelationResponseCollection']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<Page, 'SEO' | 'child' | 'localizations' | 'localizations_connection' | 'parent' | 'template'> & {
              SEO: _RefType['ComponentSeoSeo'];
              child?: Maybe<_RefType['Page']>;
              localizations: Array<Maybe<_RefType['Page']>>;
              localizations_connection?: Maybe<_RefType['PageRelationResponseCollection']>;
              parent?: Maybe<_RefType['Page']>;
              template: Array<Maybe<_RefType['PageTemplateDynamicZone']>>;
          })
        | ReviewWorkflowsWorkflow
        | ReviewWorkflowsWorkflowStage
        | (Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<_RefType['GenericMorph']>>> })
        | UsersPermissionsPermission
        | UsersPermissionsRole
        | UsersPermissionsUser;
    HeaderItemsDynamicZone:
        | (Omit<ComponentContentNavigationGroup, 'items'> & {
              items: Array<Maybe<_RefType['ComponentContentNavigationItem']>>;
          })
        | (Omit<ComponentContentNavigationItem, 'page'> & { page?: Maybe<_RefType['Page']> })
        | Error;
    PageTemplateDynamicZone:
        | (Omit<ComponentTemplatesOneColumn, 'mainSlot' | 'mainSlot_connection'> & {
              mainSlot: Array<Maybe<_RefType['Component']>>;
              mainSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
          })
        | (Omit<
              ComponentTemplatesTwoColumn,
              | 'bottomSlot'
              | 'bottomSlot_connection'
              | 'leftSlot'
              | 'leftSlot_connection'
              | 'rightSlot'
              | 'rightSlot_connection'
              | 'topSlot'
              | 'topSlot_connection'
          > & {
              bottomSlot: Array<Maybe<_RefType['Component']>>;
              bottomSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
              leftSlot: Array<Maybe<_RefType['Component']>>;
              leftSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
              rightSlot: Array<Maybe<_RefType['Component']>>;
              rightSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
              topSlot: Array<Maybe<_RefType['Component']>>;
              topSlot_connection?: Maybe<_RefType['ComponentRelationResponseCollection']>;
          })
        | Error;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    AppConfig: ResolverTypeWrapper<
        Omit<
            AppConfig,
            | 'localizations'
            | 'localizations_connection'
            | 'signedInFooter'
            | 'signedInHeader'
            | 'signedOutFooter'
            | 'signedOutHeader'
        > & {
            localizations: Array<Maybe<ResolversTypes['AppConfig']>>;
            localizations_connection?: Maybe<ResolversTypes['AppConfigRelationResponseCollection']>;
            signedInFooter?: Maybe<ResolversTypes['Footer']>;
            signedInHeader?: Maybe<ResolversTypes['Header']>;
            signedOutFooter?: Maybe<ResolversTypes['Footer']>;
            signedOutHeader?: Maybe<ResolversTypes['Header']>;
        }
    >;
    AppConfigInput: AppConfigInput;
    AppConfigRelationResponseCollection: ResolverTypeWrapper<
        Omit<AppConfigRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['AppConfig']> }
    >;
    Article: ResolverTypeWrapper<
        Omit<Article, 'SEO' | 'content' | 'localizations' | 'localizations_connection' | 'parent'> & {
            SEO: ResolversTypes['ComponentSeoSeo'];
            content: ResolversTypes['ComponentComponentsArticle'];
            localizations: Array<Maybe<ResolversTypes['Article']>>;
            localizations_connection?: Maybe<ResolversTypes['ArticleRelationResponseCollection']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    ArticleEntityResponseCollection: ResolverTypeWrapper<
        Omit<ArticleEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Article']> }
    >;
    ArticleFiltersInput: ArticleFiltersInput;
    ArticleInput: ArticleInput;
    ArticleRelationResponseCollection: ResolverTypeWrapper<
        Omit<ArticleRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Article']> }
    >;
    Author: ResolverTypeWrapper<
        Omit<Author, 'avatar' | 'avatar_connection' | 'localizations' | 'localizations_connection'> & {
            avatar: Array<Maybe<ResolversTypes['UploadFile']>>;
            avatar_connection?: Maybe<ResolversTypes['UploadFileRelationResponseCollection']>;
            localizations: Array<Maybe<ResolversTypes['Author']>>;
            localizations_connection?: Maybe<ResolversTypes['AuthorRelationResponseCollection']>;
        }
    >;
    AuthorEntityResponseCollection: ResolverTypeWrapper<
        Omit<AuthorEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Author']> }
    >;
    AuthorFiltersInput: AuthorFiltersInput;
    AuthorInput: AuthorInput;
    AuthorRelationResponseCollection: ResolverTypeWrapper<
        Omit<AuthorRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Author']> }
    >;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    BooleanFilterInput: BooleanFilterInput;
    Category: ResolverTypeWrapper<
        Omit<
            Category,
            'components' | 'components_connection' | 'localizations' | 'localizations_connection' | 'parent'
        > & {
            components: Array<Maybe<ResolversTypes['Component']>>;
            components_connection?: Maybe<ResolversTypes['ComponentRelationResponseCollection']>;
            localizations: Array<Maybe<ResolversTypes['Category']>>;
            localizations_connection?: Maybe<ResolversTypes['CategoryRelationResponseCollection']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    CategoryEntityResponseCollection: ResolverTypeWrapper<
        Omit<CategoryEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Category']> }
    >;
    CategoryFiltersInput: CategoryFiltersInput;
    CategoryInput: CategoryInput;
    CategoryRelationResponseCollection: ResolverTypeWrapper<
        Omit<CategoryRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Category']> }
    >;
    Component: ResolverTypeWrapper<
        Omit<Component, 'content' | 'localizations' | 'localizations_connection'> & {
            content: Array<Maybe<ResolversTypes['ComponentContentDynamicZone']>>;
            localizations: Array<Maybe<ResolversTypes['Component']>>;
            localizations_connection?: Maybe<ResolversTypes['ComponentRelationResponseCollection']>;
        }
    >;
    ComponentComponentsArticle: ResolverTypeWrapper<
        Omit<ComponentComponentsArticle, 'author' | 'category'> & {
            author?: Maybe<ResolversTypes['Author']>;
            category?: Maybe<ResolversTypes['Category']>;
        }
    >;
    ComponentComponentsArticleFiltersInput: ComponentComponentsArticleFiltersInput;
    ComponentComponentsArticleInput: ComponentComponentsArticleInput;
    ComponentComponentsArticleList: ResolverTypeWrapper<
        Omit<ComponentComponentsArticleList, 'category' | 'pages' | 'pages_connection' | 'parent'> & {
            category?: Maybe<ResolversTypes['Category']>;
            pages: Array<Maybe<ResolversTypes['Page']>>;
            pages_connection?: Maybe<ResolversTypes['PageRelationResponseCollection']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    ComponentComponentsArticleSearch: ResolverTypeWrapper<
        Omit<ComponentComponentsArticleSearch, 'noResults'> & { noResults: ResolversTypes['ComponentContentBanner'] }
    >;
    ComponentComponentsBentoGrid: ResolverTypeWrapper<
        Omit<ComponentComponentsBentoGrid, 'items'> & {
            items?: Maybe<Array<Maybe<ResolversTypes['ComponentContentCardWithImage']>>>;
        }
    >;
    ComponentComponentsCategory: ResolverTypeWrapper<
        Omit<ComponentComponentsCategory, 'category' | 'parent'> & {
            category?: Maybe<ResolversTypes['Category']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    ComponentComponentsCategoryList: ResolverTypeWrapper<
        Omit<ComponentComponentsCategoryList, 'categories' | 'categories_connection' | 'parent'> & {
            categories: Array<Maybe<ResolversTypes['Category']>>;
            categories_connection?: Maybe<ResolversTypes['CategoryRelationResponseCollection']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    ComponentComponentsCtaSection: ResolverTypeWrapper<
        Omit<ComponentComponentsCtaSection, 'image' | 'links'> & {
            image?: Maybe<ResolversTypes['UploadFile']>;
            links?: Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>;
        }
    >;
    ComponentComponentsDocumentList: ResolverTypeWrapper<
        Omit<ComponentComponentsDocumentList, 'documents'> & {
            documents?: Maybe<Array<Maybe<ResolversTypes['ComponentContentFile']>>>;
        }
    >;
    ComponentComponentsFaq: ResolverTypeWrapper<
        Omit<ComponentComponentsFaq, 'banner'> & { banner?: Maybe<ResolversTypes['ComponentContentBanner']> }
    >;
    ComponentComponentsFeatureSection: ResolverTypeWrapper<
        Omit<ComponentComponentsFeatureSection, 'image' | 'links'> & {
            image?: Maybe<ResolversTypes['UploadFile']>;
            links?: Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>;
        }
    >;
    ComponentComponentsFeatureSectionGrid: ResolverTypeWrapper<ComponentComponentsFeatureSectionGrid>;
    ComponentComponentsHeroSection: ResolverTypeWrapper<
        Omit<ComponentComponentsHeroSection, 'image' | 'links'> & {
            image?: Maybe<ResolversTypes['UploadFile']>;
            links?: Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>;
        }
    >;
    ComponentComponentsMediaSection: ResolverTypeWrapper<
        Omit<ComponentComponentsMediaSection, 'links' | 'media'> & {
            links?: Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>;
            media?: Maybe<ResolversTypes['UploadFile']>;
        }
    >;
    ComponentComponentsPricingSection: ResolverTypeWrapper<
        Omit<ComponentComponentsPricingSection, 'pricingList'> & {
            pricingList?: Maybe<Array<Maybe<ResolversTypes['ComponentContentPricingCard']>>>;
        }
    >;
    ComponentComponentsQuickLinks: ResolverTypeWrapper<
        Omit<ComponentComponentsQuickLinks, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentContentLink']>> }
    >;
    ComponentContentAlertBox: ResolverTypeWrapper<ComponentContentAlertBox>;
    ComponentContentArticleSection: ResolverTypeWrapper<ComponentContentArticleSection>;
    ComponentContentArticleSectionFiltersInput: ComponentContentArticleSectionFiltersInput;
    ComponentContentArticleSectionInput: ComponentContentArticleSectionInput;
    ComponentContentBadge: ResolverTypeWrapper<ComponentContentBadge>;
    ComponentContentBadgeFiltersInput: ComponentContentBadgeFiltersInput;
    ComponentContentBanner: ResolverTypeWrapper<
        Omit<ComponentContentBanner, 'link'> & { link?: Maybe<ResolversTypes['ComponentContentLink']> }
    >;
    ComponentContentCardWithImage: ResolverTypeWrapper<
        Omit<ComponentContentCardWithImage, 'image' | 'link'> & {
            image?: Maybe<ResolversTypes['UploadFile']>;
            link?: Maybe<ResolversTypes['ComponentContentLink']>;
        }
    >;
    ComponentContentCardWithImageFiltersInput: ComponentContentCardWithImageFiltersInput;
    ComponentContentDynamicZone: ResolverTypeWrapper<
        ResolversUnionTypes<ResolversTypes>['ComponentContentDynamicZone']
    >;
    ComponentContentDynamicZoneInput: ResolverTypeWrapper<Scalars['ComponentContentDynamicZoneInput']['output']>;
    ComponentContentFaqSection: ResolverTypeWrapper<ComponentContentFaqSection>;
    ComponentContentFaqSectionFiltersInput: ComponentContentFaqSectionFiltersInput;
    ComponentContentFeatureItem: ResolverTypeWrapper<ComponentContentFeatureItem>;
    ComponentContentFeatureItemFiltersInput: ComponentContentFeatureItemFiltersInput;
    ComponentContentFieldMapping: ResolverTypeWrapper<ComponentContentFieldMapping>;
    ComponentContentFile: ResolverTypeWrapper<
        Omit<ComponentContentFile, 'file'> & { file: ResolversTypes['UploadFile'] }
    >;
    ComponentContentFileFiltersInput: ComponentContentFileFiltersInput;
    ComponentContentIconWithText: ResolverTypeWrapper<ComponentContentIconWithText>;
    ComponentContentIconWithTextFiltersInput: ComponentContentIconWithTextFiltersInput;
    ComponentContentInformationCard: ResolverTypeWrapper<
        Omit<ComponentContentInformationCard, 'link'> & { link?: Maybe<ResolversTypes['ComponentContentLink']> }
    >;
    ComponentContentKeyValue: ResolverTypeWrapper<ComponentContentKeyValue>;
    ComponentContentKeyValueFiltersInput: ComponentContentKeyValueFiltersInput;
    ComponentContentKeyword: ResolverTypeWrapper<ComponentContentKeyword>;
    ComponentContentKeywordFiltersInput: ComponentContentKeywordFiltersInput;
    ComponentContentKeywordInput: ComponentContentKeywordInput;
    ComponentContentLink: ResolverTypeWrapper<
        Omit<ComponentContentLink, 'page'> & { page?: Maybe<ResolversTypes['Page']> }
    >;
    ComponentContentLinkFiltersInput: ComponentContentLinkFiltersInput;
    ComponentContentListWithIcons: ResolverTypeWrapper<ComponentContentListWithIcons>;
    ComponentContentMessage: ResolverTypeWrapper<ComponentContentMessage>;
    ComponentContentMessageFiltersInput: ComponentContentMessageFiltersInput;
    ComponentContentMessageSimple: ResolverTypeWrapper<ComponentContentMessageSimple>;
    ComponentContentMessageSimpleInput: ComponentContentMessageSimpleInput;
    ComponentContentNavigationGroup: ResolverTypeWrapper<
        Omit<ComponentContentNavigationGroup, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentContentNavigationItem']>>;
        }
    >;
    ComponentContentNavigationItem: ResolverTypeWrapper<
        Omit<ComponentContentNavigationItem, 'page'> & { page?: Maybe<ResolversTypes['Page']> }
    >;
    ComponentContentNavigationItemFiltersInput: ComponentContentNavigationItemFiltersInput;
    ComponentContentPrice: ResolverTypeWrapper<ComponentContentPrice>;
    ComponentContentPriceFiltersInput: ComponentContentPriceFiltersInput;
    ComponentContentPricingCard: ResolverTypeWrapper<
        Omit<ComponentContentPricingCard, 'image' | 'links'> & {
            image?: Maybe<ResolversTypes['UploadFile']>;
            links?: Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>;
        }
    >;
    ComponentContentPricingCardFiltersInput: ComponentContentPricingCardFiltersInput;
    ComponentContentRichTextWithTitle: ResolverTypeWrapper<ComponentContentRichTextWithTitle>;
    ComponentEntityResponseCollection: ResolverTypeWrapper<
        Omit<ComponentEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Component']> }
    >;
    ComponentFiltersInput: ComponentFiltersInput;
    ComponentInput: ComponentInput;
    ComponentLabelsActions: ResolverTypeWrapper<ComponentLabelsActions>;
    ComponentLabelsActionsInput: ComponentLabelsActionsInput;
    ComponentLabelsDates: ResolverTypeWrapper<ComponentLabelsDates>;
    ComponentLabelsDatesInput: ComponentLabelsDatesInput;
    ComponentLabelsErrors: ResolverTypeWrapper<ComponentLabelsErrors>;
    ComponentLabelsErrorsInput: ComponentLabelsErrorsInput;
    ComponentLabelsMedia: ResolverTypeWrapper<ComponentLabelsMedia>;
    ComponentLabelsMediaInput: ComponentLabelsMediaInput;
    ComponentLabelsValidation: ResolverTypeWrapper<ComponentLabelsValidation>;
    ComponentLabelsValidationInput: ComponentLabelsValidationInput;
    ComponentLayoutSection: ResolverTypeWrapper<ComponentLayoutSection>;
    ComponentLayoutSectionFiltersInput: ComponentLayoutSectionFiltersInput;
    ComponentLayoutSectionInput: ComponentLayoutSectionInput;
    ComponentRelationResponseCollection: ResolverTypeWrapper<
        Omit<ComponentRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Component']> }
    >;
    ComponentSeoMetadata: ResolverTypeWrapper<ComponentSeoMetadata>;
    ComponentSeoSeo: ResolverTypeWrapper<
        Omit<ComponentSeoSeo, 'image'> & { image?: Maybe<ResolversTypes['UploadFile']> }
    >;
    ComponentSeoSeoFiltersInput: ComponentSeoSeoFiltersInput;
    ComponentSeoSeoInput: ComponentSeoSeoInput;
    ComponentSeoUserRoles: ResolverTypeWrapper<ComponentSeoUserRoles>;
    ComponentSeoUserRolesFiltersInput: ComponentSeoUserRolesFiltersInput;
    ComponentSeoUserRolesInput: ComponentSeoUserRolesInput;
    ComponentTemplatesOneColumn: ResolverTypeWrapper<
        Omit<ComponentTemplatesOneColumn, 'mainSlot' | 'mainSlot_connection'> & {
            mainSlot: Array<Maybe<ResolversTypes['Component']>>;
            mainSlot_connection?: Maybe<ResolversTypes['ComponentRelationResponseCollection']>;
        }
    >;
    ComponentTemplatesTwoColumn: ResolverTypeWrapper<
        Omit<
            ComponentTemplatesTwoColumn,
            | 'bottomSlot'
            | 'bottomSlot_connection'
            | 'leftSlot'
            | 'leftSlot_connection'
            | 'rightSlot'
            | 'rightSlot_connection'
            | 'topSlot'
            | 'topSlot_connection'
        > & {
            bottomSlot: Array<Maybe<ResolversTypes['Component']>>;
            bottomSlot_connection?: Maybe<ResolversTypes['ComponentRelationResponseCollection']>;
            leftSlot: Array<Maybe<ResolversTypes['Component']>>;
            leftSlot_connection?: Maybe<ResolversTypes['ComponentRelationResponseCollection']>;
            rightSlot: Array<Maybe<ResolversTypes['Component']>>;
            rightSlot_connection?: Maybe<ResolversTypes['ComponentRelationResponseCollection']>;
            topSlot: Array<Maybe<ResolversTypes['Component']>>;
            topSlot_connection?: Maybe<ResolversTypes['ComponentRelationResponseCollection']>;
        }
    >;
    ConfigurableTexts: ResolverTypeWrapper<ConfigurableTexts>;
    ConfigurableTextsInput: ConfigurableTextsInput;
    ConfigurableTextsRelationResponseCollection: ResolverTypeWrapper<ConfigurableTextsRelationResponseCollection>;
    DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
    DateTimeFilterInput: DateTimeFilterInput;
    DeleteMutationResponse: ResolverTypeWrapper<DeleteMutationResponse>;
    ENUM_COMPONENTCOMPONENTSHEROSECTION_HEADINGTYPE: Enum_Componentcomponentsherosection_Headingtype;
    ENUM_COMPONENTCOMPONENTSPRICINGSECTION_HEADINGTYPE: Enum_Componentcomponentspricingsection_Headingtype;
    ENUM_COMPONENTCONTENTBADGE_VARIANT: Enum_Componentcontentbadge_Variant;
    ENUM_COMPONENTCONTENTLINK_VARIANT: Enum_Componentcontentlink_Variant;
    ENUM_COMPONENTCONTENTPRICE_CURRENCY: Enum_Componentcontentprice_Currency;
    ENUM_COMPONENTLAYOUTSECTION_BACKGROUND: Enum_Componentlayoutsection_Background;
    ENUM_COMPONENTLAYOUTSECTION_SPACING: Enum_Componentlayoutsection_Spacing;
    ENUM_COMPONENTLAYOUTSECTION_VARIANT: Enum_Componentlayoutsection_Variant;
    Error: ResolverTypeWrapper<Error>;
    FileInfoInput: FileInfoInput;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    FloatFilterInput: FloatFilterInput;
    Footer: ResolverTypeWrapper<
        Omit<Footer, 'items' | 'localizations' | 'localizations_connection' | 'logo'> & {
            items: Array<Maybe<ResolversTypes['FooterItemsDynamicZone']>>;
            localizations: Array<Maybe<ResolversTypes['Footer']>>;
            localizations_connection?: Maybe<ResolversTypes['FooterRelationResponseCollection']>;
            logo: ResolversTypes['UploadFile'];
        }
    >;
    FooterEntityResponseCollection: ResolverTypeWrapper<
        Omit<FooterEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Footer']> }
    >;
    FooterFiltersInput: FooterFiltersInput;
    FooterInput: FooterInput;
    FooterItemsDynamicZone: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['FooterItemsDynamicZone']>;
    FooterItemsDynamicZoneInput: ResolverTypeWrapper<Scalars['FooterItemsDynamicZoneInput']['output']>;
    FooterRelationResponseCollection: ResolverTypeWrapper<
        Omit<FooterRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Footer']> }
    >;
    GenericMorph: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['GenericMorph']>;
    Header: ResolverTypeWrapper<
        Omit<Header, 'items' | 'localizations' | 'localizations_connection' | 'logo' | 'notification' | 'userInfo'> & {
            items: Array<Maybe<ResolversTypes['HeaderItemsDynamicZone']>>;
            localizations: Array<Maybe<ResolversTypes['Header']>>;
            localizations_connection?: Maybe<ResolversTypes['HeaderRelationResponseCollection']>;
            logo: ResolversTypes['UploadFile'];
            notification?: Maybe<ResolversTypes['Page']>;
            userInfo?: Maybe<ResolversTypes['Page']>;
        }
    >;
    HeaderEntityResponseCollection: ResolverTypeWrapper<
        Omit<HeaderEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Header']> }
    >;
    HeaderFiltersInput: HeaderFiltersInput;
    HeaderInput: HeaderInput;
    HeaderItemsDynamicZone: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['HeaderItemsDynamicZone']>;
    HeaderItemsDynamicZoneInput: ResolverTypeWrapper<Scalars['HeaderItemsDynamicZoneInput']['output']>;
    HeaderRelationResponseCollection: ResolverTypeWrapper<
        Omit<HeaderRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Header']> }
    >;
    I18NLocale: ResolverTypeWrapper<I18NLocale>;
    I18NLocaleCode: ResolverTypeWrapper<Scalars['I18NLocaleCode']['output']>;
    I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
    I18NLocaleFiltersInput: I18NLocaleFiltersInput;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    IDFilterInput: IdFilterInput;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    IntFilterInput: IntFilterInput;
    JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
    JSONFilterInput: JsonFilterInput;
    Mapping: ResolverTypeWrapper<Mapping>;
    MappingEntityResponseCollection: ResolverTypeWrapper<MappingEntityResponseCollection>;
    MappingFiltersInput: MappingFiltersInput;
    MappingInput: MappingInput;
    Mutation: ResolverTypeWrapper<{}>;
    NotFoundPage: ResolverTypeWrapper<
        Omit<NotFoundPage, 'localizations' | 'localizations_connection' | 'page'> & {
            localizations: Array<Maybe<ResolversTypes['NotFoundPage']>>;
            localizations_connection?: Maybe<ResolversTypes['NotFoundPageRelationResponseCollection']>;
            page?: Maybe<ResolversTypes['Page']>;
        }
    >;
    NotFoundPageInput: NotFoundPageInput;
    NotFoundPageRelationResponseCollection: ResolverTypeWrapper<
        Omit<NotFoundPageRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['NotFoundPage']> }
    >;
    Page: ResolverTypeWrapper<
        Omit<Page, 'SEO' | 'child' | 'localizations' | 'localizations_connection' | 'parent' | 'template'> & {
            SEO: ResolversTypes['ComponentSeoSeo'];
            child?: Maybe<ResolversTypes['Page']>;
            localizations: Array<Maybe<ResolversTypes['Page']>>;
            localizations_connection?: Maybe<ResolversTypes['PageRelationResponseCollection']>;
            parent?: Maybe<ResolversTypes['Page']>;
            template: Array<Maybe<ResolversTypes['PageTemplateDynamicZone']>>;
        }
    >;
    PageEntityResponseCollection: ResolverTypeWrapper<
        Omit<PageEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Page']> }
    >;
    PageFiltersInput: PageFiltersInput;
    PageInput: PageInput;
    PageRelationResponseCollection: ResolverTypeWrapper<
        Omit<PageRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['Page']> }
    >;
    PageTemplateDynamicZone: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PageTemplateDynamicZone']>;
    PageTemplateDynamicZoneInput: ResolverTypeWrapper<Scalars['PageTemplateDynamicZoneInput']['output']>;
    Pagination: ResolverTypeWrapper<Pagination>;
    PaginationArg: PaginationArg;
    PublicationStatus: PublicationStatus;
    Query: ResolverTypeWrapper<{}>;
    ReviewWorkflowsWorkflow: ResolverTypeWrapper<ReviewWorkflowsWorkflow>;
    ReviewWorkflowsWorkflowEntityResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowEntityResponseCollection>;
    ReviewWorkflowsWorkflowFiltersInput: ReviewWorkflowsWorkflowFiltersInput;
    ReviewWorkflowsWorkflowInput: ReviewWorkflowsWorkflowInput;
    ReviewWorkflowsWorkflowStage: ResolverTypeWrapper<ReviewWorkflowsWorkflowStage>;
    ReviewWorkflowsWorkflowStageEntityResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
    ReviewWorkflowsWorkflowStageFiltersInput: ReviewWorkflowsWorkflowStageFiltersInput;
    ReviewWorkflowsWorkflowStageInput: ReviewWorkflowsWorkflowStageInput;
    ReviewWorkflowsWorkflowStageRelationResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    StringFilterInput: StringFilterInput;
    UploadFile: ResolverTypeWrapper<
        Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>> }
    >;
    UploadFileEntityResponseCollection: ResolverTypeWrapper<
        Omit<UploadFileEntityResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['UploadFile']> }
    >;
    UploadFileFiltersInput: UploadFileFiltersInput;
    UploadFileRelationResponseCollection: ResolverTypeWrapper<
        Omit<UploadFileRelationResponseCollection, 'nodes'> & { nodes: Array<ResolversTypes['UploadFile']> }
    >;
    UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
    UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
    UsersPermissionsLoginInput: UsersPermissionsLoginInput;
    UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
    UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
    UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
    UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
    UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
    UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
    UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
    UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
    UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
    UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
    UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
    UsersPermissionsRoleInput: UsersPermissionsRoleInput;
    UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
    UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
    UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
    UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
    UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
    UsersPermissionsUserInput: UsersPermissionsUserInput;
    UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    AppConfig: Omit<
        AppConfig,
        | 'localizations'
        | 'localizations_connection'
        | 'signedInFooter'
        | 'signedInHeader'
        | 'signedOutFooter'
        | 'signedOutHeader'
    > & {
        localizations: Array<Maybe<ResolversParentTypes['AppConfig']>>;
        localizations_connection?: Maybe<ResolversParentTypes['AppConfigRelationResponseCollection']>;
        signedInFooter?: Maybe<ResolversParentTypes['Footer']>;
        signedInHeader?: Maybe<ResolversParentTypes['Header']>;
        signedOutFooter?: Maybe<ResolversParentTypes['Footer']>;
        signedOutHeader?: Maybe<ResolversParentTypes['Header']>;
    };
    AppConfigInput: AppConfigInput;
    AppConfigRelationResponseCollection: Omit<AppConfigRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['AppConfig']>;
    };
    Article: Omit<Article, 'SEO' | 'content' | 'localizations' | 'localizations_connection' | 'parent'> & {
        SEO: ResolversParentTypes['ComponentSeoSeo'];
        content: ResolversParentTypes['ComponentComponentsArticle'];
        localizations: Array<Maybe<ResolversParentTypes['Article']>>;
        localizations_connection?: Maybe<ResolversParentTypes['ArticleRelationResponseCollection']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    ArticleEntityResponseCollection: Omit<ArticleEntityResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Article']>;
    };
    ArticleFiltersInput: ArticleFiltersInput;
    ArticleInput: ArticleInput;
    ArticleRelationResponseCollection: Omit<ArticleRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Article']>;
    };
    Author: Omit<Author, 'avatar' | 'avatar_connection' | 'localizations' | 'localizations_connection'> & {
        avatar: Array<Maybe<ResolversParentTypes['UploadFile']>>;
        avatar_connection?: Maybe<ResolversParentTypes['UploadFileRelationResponseCollection']>;
        localizations: Array<Maybe<ResolversParentTypes['Author']>>;
        localizations_connection?: Maybe<ResolversParentTypes['AuthorRelationResponseCollection']>;
    };
    AuthorEntityResponseCollection: Omit<AuthorEntityResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Author']>;
    };
    AuthorFiltersInput: AuthorFiltersInput;
    AuthorInput: AuthorInput;
    AuthorRelationResponseCollection: Omit<AuthorRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Author']>;
    };
    Boolean: Scalars['Boolean']['output'];
    BooleanFilterInput: BooleanFilterInput;
    Category: Omit<
        Category,
        'components' | 'components_connection' | 'localizations' | 'localizations_connection' | 'parent'
    > & {
        components: Array<Maybe<ResolversParentTypes['Component']>>;
        components_connection?: Maybe<ResolversParentTypes['ComponentRelationResponseCollection']>;
        localizations: Array<Maybe<ResolversParentTypes['Category']>>;
        localizations_connection?: Maybe<ResolversParentTypes['CategoryRelationResponseCollection']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    CategoryEntityResponseCollection: Omit<CategoryEntityResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Category']>;
    };
    CategoryFiltersInput: CategoryFiltersInput;
    CategoryInput: CategoryInput;
    CategoryRelationResponseCollection: Omit<CategoryRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Category']>;
    };
    Component: Omit<Component, 'content' | 'localizations' | 'localizations_connection'> & {
        content: Array<Maybe<ResolversParentTypes['ComponentContentDynamicZone']>>;
        localizations: Array<Maybe<ResolversParentTypes['Component']>>;
        localizations_connection?: Maybe<ResolversParentTypes['ComponentRelationResponseCollection']>;
    };
    ComponentComponentsArticle: Omit<ComponentComponentsArticle, 'author' | 'category'> & {
        author?: Maybe<ResolversParentTypes['Author']>;
        category?: Maybe<ResolversParentTypes['Category']>;
    };
    ComponentComponentsArticleFiltersInput: ComponentComponentsArticleFiltersInput;
    ComponentComponentsArticleInput: ComponentComponentsArticleInput;
    ComponentComponentsArticleList: Omit<
        ComponentComponentsArticleList,
        'category' | 'pages' | 'pages_connection' | 'parent'
    > & {
        category?: Maybe<ResolversParentTypes['Category']>;
        pages: Array<Maybe<ResolversParentTypes['Page']>>;
        pages_connection?: Maybe<ResolversParentTypes['PageRelationResponseCollection']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    ComponentComponentsArticleSearch: Omit<ComponentComponentsArticleSearch, 'noResults'> & {
        noResults: ResolversParentTypes['ComponentContentBanner'];
    };
    ComponentComponentsBentoGrid: Omit<ComponentComponentsBentoGrid, 'items'> & {
        items?: Maybe<Array<Maybe<ResolversParentTypes['ComponentContentCardWithImage']>>>;
    };
    ComponentComponentsCategory: Omit<ComponentComponentsCategory, 'category' | 'parent'> & {
        category?: Maybe<ResolversParentTypes['Category']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    ComponentComponentsCategoryList: Omit<
        ComponentComponentsCategoryList,
        'categories' | 'categories_connection' | 'parent'
    > & {
        categories: Array<Maybe<ResolversParentTypes['Category']>>;
        categories_connection?: Maybe<ResolversParentTypes['CategoryRelationResponseCollection']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    ComponentComponentsCtaSection: Omit<ComponentComponentsCtaSection, 'image' | 'links'> & {
        image?: Maybe<ResolversParentTypes['UploadFile']>;
        links?: Maybe<Array<Maybe<ResolversParentTypes['ComponentContentLink']>>>;
    };
    ComponentComponentsDocumentList: Omit<ComponentComponentsDocumentList, 'documents'> & {
        documents?: Maybe<Array<Maybe<ResolversParentTypes['ComponentContentFile']>>>;
    };
    ComponentComponentsFaq: Omit<ComponentComponentsFaq, 'banner'> & {
        banner?: Maybe<ResolversParentTypes['ComponentContentBanner']>;
    };
    ComponentComponentsFeatureSection: Omit<ComponentComponentsFeatureSection, 'image' | 'links'> & {
        image?: Maybe<ResolversParentTypes['UploadFile']>;
        links?: Maybe<Array<Maybe<ResolversParentTypes['ComponentContentLink']>>>;
    };
    ComponentComponentsFeatureSectionGrid: ComponentComponentsFeatureSectionGrid;
    ComponentComponentsHeroSection: Omit<ComponentComponentsHeroSection, 'image' | 'links'> & {
        image?: Maybe<ResolversParentTypes['UploadFile']>;
        links?: Maybe<Array<Maybe<ResolversParentTypes['ComponentContentLink']>>>;
    };
    ComponentComponentsMediaSection: Omit<ComponentComponentsMediaSection, 'links' | 'media'> & {
        links?: Maybe<Array<Maybe<ResolversParentTypes['ComponentContentLink']>>>;
        media?: Maybe<ResolversParentTypes['UploadFile']>;
    };
    ComponentComponentsPricingSection: Omit<ComponentComponentsPricingSection, 'pricingList'> & {
        pricingList?: Maybe<Array<Maybe<ResolversParentTypes['ComponentContentPricingCard']>>>;
    };
    ComponentComponentsQuickLinks: Omit<ComponentComponentsQuickLinks, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentContentLink']>>;
    };
    ComponentContentAlertBox: ComponentContentAlertBox;
    ComponentContentArticleSection: ComponentContentArticleSection;
    ComponentContentArticleSectionFiltersInput: ComponentContentArticleSectionFiltersInput;
    ComponentContentArticleSectionInput: ComponentContentArticleSectionInput;
    ComponentContentBadge: ComponentContentBadge;
    ComponentContentBadgeFiltersInput: ComponentContentBadgeFiltersInput;
    ComponentContentBanner: Omit<ComponentContentBanner, 'link'> & {
        link?: Maybe<ResolversParentTypes['ComponentContentLink']>;
    };
    ComponentContentCardWithImage: Omit<ComponentContentCardWithImage, 'image' | 'link'> & {
        image?: Maybe<ResolversParentTypes['UploadFile']>;
        link?: Maybe<ResolversParentTypes['ComponentContentLink']>;
    };
    ComponentContentCardWithImageFiltersInput: ComponentContentCardWithImageFiltersInput;
    ComponentContentDynamicZone: ResolversUnionTypes<ResolversParentTypes>['ComponentContentDynamicZone'];
    ComponentContentDynamicZoneInput: Scalars['ComponentContentDynamicZoneInput']['output'];
    ComponentContentFaqSection: ComponentContentFaqSection;
    ComponentContentFaqSectionFiltersInput: ComponentContentFaqSectionFiltersInput;
    ComponentContentFeatureItem: ComponentContentFeatureItem;
    ComponentContentFeatureItemFiltersInput: ComponentContentFeatureItemFiltersInput;
    ComponentContentFieldMapping: ComponentContentFieldMapping;
    ComponentContentFile: Omit<ComponentContentFile, 'file'> & { file: ResolversParentTypes['UploadFile'] };
    ComponentContentFileFiltersInput: ComponentContentFileFiltersInput;
    ComponentContentIconWithText: ComponentContentIconWithText;
    ComponentContentIconWithTextFiltersInput: ComponentContentIconWithTextFiltersInput;
    ComponentContentInformationCard: Omit<ComponentContentInformationCard, 'link'> & {
        link?: Maybe<ResolversParentTypes['ComponentContentLink']>;
    };
    ComponentContentKeyValue: ComponentContentKeyValue;
    ComponentContentKeyValueFiltersInput: ComponentContentKeyValueFiltersInput;
    ComponentContentKeyword: ComponentContentKeyword;
    ComponentContentKeywordFiltersInput: ComponentContentKeywordFiltersInput;
    ComponentContentKeywordInput: ComponentContentKeywordInput;
    ComponentContentLink: Omit<ComponentContentLink, 'page'> & { page?: Maybe<ResolversParentTypes['Page']> };
    ComponentContentLinkFiltersInput: ComponentContentLinkFiltersInput;
    ComponentContentListWithIcons: ComponentContentListWithIcons;
    ComponentContentMessage: ComponentContentMessage;
    ComponentContentMessageFiltersInput: ComponentContentMessageFiltersInput;
    ComponentContentMessageSimple: ComponentContentMessageSimple;
    ComponentContentMessageSimpleInput: ComponentContentMessageSimpleInput;
    ComponentContentNavigationGroup: Omit<ComponentContentNavigationGroup, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentContentNavigationItem']>>;
    };
    ComponentContentNavigationItem: Omit<ComponentContentNavigationItem, 'page'> & {
        page?: Maybe<ResolversParentTypes['Page']>;
    };
    ComponentContentNavigationItemFiltersInput: ComponentContentNavigationItemFiltersInput;
    ComponentContentPrice: ComponentContentPrice;
    ComponentContentPriceFiltersInput: ComponentContentPriceFiltersInput;
    ComponentContentPricingCard: Omit<ComponentContentPricingCard, 'image' | 'links'> & {
        image?: Maybe<ResolversParentTypes['UploadFile']>;
        links?: Maybe<Array<Maybe<ResolversParentTypes['ComponentContentLink']>>>;
    };
    ComponentContentPricingCardFiltersInput: ComponentContentPricingCardFiltersInput;
    ComponentContentRichTextWithTitle: ComponentContentRichTextWithTitle;
    ComponentEntityResponseCollection: Omit<ComponentEntityResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Component']>;
    };
    ComponentFiltersInput: ComponentFiltersInput;
    ComponentInput: ComponentInput;
    ComponentLabelsActions: ComponentLabelsActions;
    ComponentLabelsActionsInput: ComponentLabelsActionsInput;
    ComponentLabelsDates: ComponentLabelsDates;
    ComponentLabelsDatesInput: ComponentLabelsDatesInput;
    ComponentLabelsErrors: ComponentLabelsErrors;
    ComponentLabelsErrorsInput: ComponentLabelsErrorsInput;
    ComponentLabelsMedia: ComponentLabelsMedia;
    ComponentLabelsMediaInput: ComponentLabelsMediaInput;
    ComponentLabelsValidation: ComponentLabelsValidation;
    ComponentLabelsValidationInput: ComponentLabelsValidationInput;
    ComponentLayoutSection: ComponentLayoutSection;
    ComponentLayoutSectionFiltersInput: ComponentLayoutSectionFiltersInput;
    ComponentLayoutSectionInput: ComponentLayoutSectionInput;
    ComponentRelationResponseCollection: Omit<ComponentRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Component']>;
    };
    ComponentSeoMetadata: ComponentSeoMetadata;
    ComponentSeoSeo: Omit<ComponentSeoSeo, 'image'> & { image?: Maybe<ResolversParentTypes['UploadFile']> };
    ComponentSeoSeoFiltersInput: ComponentSeoSeoFiltersInput;
    ComponentSeoSeoInput: ComponentSeoSeoInput;
    ComponentSeoUserRoles: ComponentSeoUserRoles;
    ComponentSeoUserRolesFiltersInput: ComponentSeoUserRolesFiltersInput;
    ComponentSeoUserRolesInput: ComponentSeoUserRolesInput;
    ComponentTemplatesOneColumn: Omit<ComponentTemplatesOneColumn, 'mainSlot' | 'mainSlot_connection'> & {
        mainSlot: Array<Maybe<ResolversParentTypes['Component']>>;
        mainSlot_connection?: Maybe<ResolversParentTypes['ComponentRelationResponseCollection']>;
    };
    ComponentTemplatesTwoColumn: Omit<
        ComponentTemplatesTwoColumn,
        | 'bottomSlot'
        | 'bottomSlot_connection'
        | 'leftSlot'
        | 'leftSlot_connection'
        | 'rightSlot'
        | 'rightSlot_connection'
        | 'topSlot'
        | 'topSlot_connection'
    > & {
        bottomSlot: Array<Maybe<ResolversParentTypes['Component']>>;
        bottomSlot_connection?: Maybe<ResolversParentTypes['ComponentRelationResponseCollection']>;
        leftSlot: Array<Maybe<ResolversParentTypes['Component']>>;
        leftSlot_connection?: Maybe<ResolversParentTypes['ComponentRelationResponseCollection']>;
        rightSlot: Array<Maybe<ResolversParentTypes['Component']>>;
        rightSlot_connection?: Maybe<ResolversParentTypes['ComponentRelationResponseCollection']>;
        topSlot: Array<Maybe<ResolversParentTypes['Component']>>;
        topSlot_connection?: Maybe<ResolversParentTypes['ComponentRelationResponseCollection']>;
    };
    ConfigurableTexts: ConfigurableTexts;
    ConfigurableTextsInput: ConfigurableTextsInput;
    ConfigurableTextsRelationResponseCollection: ConfigurableTextsRelationResponseCollection;
    DateTime: Scalars['DateTime']['output'];
    DateTimeFilterInput: DateTimeFilterInput;
    DeleteMutationResponse: DeleteMutationResponse;
    Error: Error;
    FileInfoInput: FileInfoInput;
    Float: Scalars['Float']['output'];
    FloatFilterInput: FloatFilterInput;
    Footer: Omit<Footer, 'items' | 'localizations' | 'localizations_connection' | 'logo'> & {
        items: Array<Maybe<ResolversParentTypes['FooterItemsDynamicZone']>>;
        localizations: Array<Maybe<ResolversParentTypes['Footer']>>;
        localizations_connection?: Maybe<ResolversParentTypes['FooterRelationResponseCollection']>;
        logo: ResolversParentTypes['UploadFile'];
    };
    FooterEntityResponseCollection: Omit<FooterEntityResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Footer']>;
    };
    FooterFiltersInput: FooterFiltersInput;
    FooterInput: FooterInput;
    FooterItemsDynamicZone: ResolversUnionTypes<ResolversParentTypes>['FooterItemsDynamicZone'];
    FooterItemsDynamicZoneInput: Scalars['FooterItemsDynamicZoneInput']['output'];
    FooterRelationResponseCollection: Omit<FooterRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Footer']>;
    };
    GenericMorph: ResolversUnionTypes<ResolversParentTypes>['GenericMorph'];
    Header: Omit<
        Header,
        'items' | 'localizations' | 'localizations_connection' | 'logo' | 'notification' | 'userInfo'
    > & {
        items: Array<Maybe<ResolversParentTypes['HeaderItemsDynamicZone']>>;
        localizations: Array<Maybe<ResolversParentTypes['Header']>>;
        localizations_connection?: Maybe<ResolversParentTypes['HeaderRelationResponseCollection']>;
        logo: ResolversParentTypes['UploadFile'];
        notification?: Maybe<ResolversParentTypes['Page']>;
        userInfo?: Maybe<ResolversParentTypes['Page']>;
    };
    HeaderEntityResponseCollection: Omit<HeaderEntityResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Header']>;
    };
    HeaderFiltersInput: HeaderFiltersInput;
    HeaderInput: HeaderInput;
    HeaderItemsDynamicZone: ResolversUnionTypes<ResolversParentTypes>['HeaderItemsDynamicZone'];
    HeaderItemsDynamicZoneInput: Scalars['HeaderItemsDynamicZoneInput']['output'];
    HeaderRelationResponseCollection: Omit<HeaderRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Header']>;
    };
    I18NLocale: I18NLocale;
    I18NLocaleCode: Scalars['I18NLocaleCode']['output'];
    I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
    I18NLocaleFiltersInput: I18NLocaleFiltersInput;
    ID: Scalars['ID']['output'];
    IDFilterInput: IdFilterInput;
    Int: Scalars['Int']['output'];
    IntFilterInput: IntFilterInput;
    JSON: Scalars['JSON']['output'];
    JSONFilterInput: JsonFilterInput;
    Mapping: Mapping;
    MappingEntityResponseCollection: MappingEntityResponseCollection;
    MappingFiltersInput: MappingFiltersInput;
    MappingInput: MappingInput;
    Mutation: {};
    NotFoundPage: Omit<NotFoundPage, 'localizations' | 'localizations_connection' | 'page'> & {
        localizations: Array<Maybe<ResolversParentTypes['NotFoundPage']>>;
        localizations_connection?: Maybe<ResolversParentTypes['NotFoundPageRelationResponseCollection']>;
        page?: Maybe<ResolversParentTypes['Page']>;
    };
    NotFoundPageInput: NotFoundPageInput;
    NotFoundPageRelationResponseCollection: Omit<NotFoundPageRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['NotFoundPage']>;
    };
    Page: Omit<Page, 'SEO' | 'child' | 'localizations' | 'localizations_connection' | 'parent' | 'template'> & {
        SEO: ResolversParentTypes['ComponentSeoSeo'];
        child?: Maybe<ResolversParentTypes['Page']>;
        localizations: Array<Maybe<ResolversParentTypes['Page']>>;
        localizations_connection?: Maybe<ResolversParentTypes['PageRelationResponseCollection']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
        template: Array<Maybe<ResolversParentTypes['PageTemplateDynamicZone']>>;
    };
    PageEntityResponseCollection: Omit<PageEntityResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Page']>;
    };
    PageFiltersInput: PageFiltersInput;
    PageInput: PageInput;
    PageRelationResponseCollection: Omit<PageRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['Page']>;
    };
    PageTemplateDynamicZone: ResolversUnionTypes<ResolversParentTypes>['PageTemplateDynamicZone'];
    PageTemplateDynamicZoneInput: Scalars['PageTemplateDynamicZoneInput']['output'];
    Pagination: Pagination;
    PaginationArg: PaginationArg;
    Query: {};
    ReviewWorkflowsWorkflow: ReviewWorkflowsWorkflow;
    ReviewWorkflowsWorkflowEntityResponseCollection: ReviewWorkflowsWorkflowEntityResponseCollection;
    ReviewWorkflowsWorkflowFiltersInput: ReviewWorkflowsWorkflowFiltersInput;
    ReviewWorkflowsWorkflowInput: ReviewWorkflowsWorkflowInput;
    ReviewWorkflowsWorkflowStage: ReviewWorkflowsWorkflowStage;
    ReviewWorkflowsWorkflowStageEntityResponseCollection: ReviewWorkflowsWorkflowStageEntityResponseCollection;
    ReviewWorkflowsWorkflowStageFiltersInput: ReviewWorkflowsWorkflowStageFiltersInput;
    ReviewWorkflowsWorkflowStageInput: ReviewWorkflowsWorkflowStageInput;
    ReviewWorkflowsWorkflowStageRelationResponseCollection: ReviewWorkflowsWorkflowStageRelationResponseCollection;
    String: Scalars['String']['output'];
    StringFilterInput: StringFilterInput;
    UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['GenericMorph']>>> };
    UploadFileEntityResponseCollection: Omit<UploadFileEntityResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['UploadFile']>;
    };
    UploadFileFiltersInput: UploadFileFiltersInput;
    UploadFileRelationResponseCollection: Omit<UploadFileRelationResponseCollection, 'nodes'> & {
        nodes: Array<ResolversParentTypes['UploadFile']>;
    };
    UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
    UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
    UsersPermissionsLoginInput: UsersPermissionsLoginInput;
    UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
    UsersPermissionsMe: UsersPermissionsMe;
    UsersPermissionsMeRole: UsersPermissionsMeRole;
    UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
    UsersPermissionsPermission: UsersPermissionsPermission;
    UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
    UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
    UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
    UsersPermissionsRole: UsersPermissionsRole;
    UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
    UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
    UsersPermissionsRoleInput: UsersPermissionsRoleInput;
    UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
    UsersPermissionsUser: UsersPermissionsUser;
    UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
    UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
    UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
    UsersPermissionsUserInput: UsersPermissionsUserInput;
    UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
};

export type AppConfigResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['AppConfig'] = ResolversParentTypes['AppConfig'],
> = {
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<Array<Maybe<ResolversTypes['AppConfig']>>, ParentType, ContextType>;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['AppConfigRelationResponseCollection']>,
        ParentType,
        ContextType
    >;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    signedInFooter?: Resolver<Maybe<ResolversTypes['Footer']>, ParentType, ContextType>;
    signedInHeader?: Resolver<Maybe<ResolversTypes['Header']>, ParentType, ContextType>;
    signedOutFooter?: Resolver<Maybe<ResolversTypes['Footer']>, ParentType, ContextType>;
    signedOutHeader?: Resolver<Maybe<ResolversTypes['Header']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppConfigRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['AppConfigRelationResponseCollection'] = ResolversParentTypes['AppConfigRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['AppConfig']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article'],
> = {
    SEO?: Resolver<ResolversTypes['ComponentSeoSeo'], ParentType, ContextType>;
    content?: Resolver<ResolversTypes['ComponentComponentsArticle'], ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<
        Array<Maybe<ResolversTypes['Article']>>,
        ParentType,
        ContextType,
        RequireFields<ArticleLocalizationsArgs, 'pagination' | 'sort'>
    >;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['ArticleRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ArticleLocalizations_ConnectionArgs, 'pagination' | 'sort'>
    >;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    permissions?: Resolver<Maybe<ResolversTypes['ComponentSeoUserRoles']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ArticleEntityResponseCollection'] = ResolversParentTypes['ArticleEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ArticleRelationResponseCollection'] = ResolversParentTypes['ArticleRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author'],
> = {
    avatar?: Resolver<
        Array<Maybe<ResolversTypes['UploadFile']>>,
        ParentType,
        ContextType,
        RequireFields<AuthorAvatarArgs, 'pagination' | 'sort'>
    >;
    avatar_connection?: Resolver<
        Maybe<ResolversTypes['UploadFileRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<AuthorAvatar_ConnectionArgs, 'pagination' | 'sort'>
    >;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<
        Array<Maybe<ResolversTypes['Author']>>,
        ParentType,
        ContextType,
        RequireFields<AuthorLocalizationsArgs, 'pagination' | 'sort'>
    >;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['AuthorRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<AuthorLocalizations_ConnectionArgs, 'pagination' | 'sort'>
    >;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['AuthorEntityResponseCollection'] = ResolversParentTypes['AuthorEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['AuthorRelationResponseCollection'] = ResolversParentTypes['AuthorRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category'],
> = {
    components?: Resolver<
        Array<Maybe<ResolversTypes['Component']>>,
        ParentType,
        ContextType,
        RequireFields<CategoryComponentsArgs, 'pagination' | 'sort'>
    >;
    components_connection?: Resolver<
        Maybe<ResolversTypes['ComponentRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<CategoryComponents_ConnectionArgs, 'pagination' | 'sort'>
    >;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<
        Array<Maybe<ResolversTypes['Category']>>,
        ParentType,
        ContextType,
        RequireFields<CategoryLocalizationsArgs, 'pagination' | 'sort'>
    >;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['CategoryRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<CategoryLocalizations_ConnectionArgs, 'pagination' | 'sort'>
    >;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['CategoryEntityResponseCollection'] = ResolversParentTypes['CategoryEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['CategoryRelationResponseCollection'] = ResolversParentTypes['CategoryRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Component'] = ResolversParentTypes['Component'],
> = {
    content?: Resolver<Array<Maybe<ResolversTypes['ComponentContentDynamicZone']>>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    layout?: Resolver<ResolversTypes['ComponentLayoutSection'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<
        Array<Maybe<ResolversTypes['Component']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentLocalizationsArgs, 'pagination' | 'sort'>
    >;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['ComponentRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentLocalizations_ConnectionArgs, 'pagination' | 'sort'>
    >;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsArticleResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsArticle'] = ResolversParentTypes['ComponentComponentsArticle'],
> = {
    author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
    category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    sections?: Resolver<
        Array<Maybe<ResolversTypes['ComponentContentArticleSection']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsArticleSectionsArgs, 'pagination' | 'sort'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsArticleListResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsArticleList'] = ResolversParentTypes['ComponentComponentsArticleList'],
> = {
    articles_to_show?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    pages?: Resolver<
        Array<Maybe<ResolversTypes['Page']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsArticleListPagesArgs, 'pagination' | 'sort'>
    >;
    pages_connection?: Resolver<
        Maybe<ResolversTypes['PageRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsArticleListPages_ConnectionArgs, 'pagination' | 'sort'>
    >;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsArticleSearchResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsArticleSearch'] = ResolversParentTypes['ComponentComponentsArticleSearch'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    inputLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    noResults?: Resolver<ResolversTypes['ComponentContentBanner'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsBentoGridResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsBentoGrid'] = ResolversParentTypes['ComponentComponentsBentoGrid'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    items?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentCardWithImage']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsBentoGridItemsArgs, 'pagination' | 'sort'>
    >;
    preTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsCategoryResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsCategory'] = ResolversParentTypes['ComponentComponentsCategory'],
> = {
    category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsCategoryListResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsCategoryList'] = ResolversParentTypes['ComponentComponentsCategoryList'],
> = {
    categories?: Resolver<
        Array<Maybe<ResolversTypes['Category']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsCategoryListCategoriesArgs, 'pagination' | 'sort'>
    >;
    categories_connection?: Resolver<
        Maybe<ResolversTypes['CategoryRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsCategoryListCategories_ConnectionArgs, 'pagination' | 'sort'>
    >;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsCtaSectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsCtaSection'] = ResolversParentTypes['ComponentComponentsCtaSection'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    inverted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    links?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsCtaSectionLinksArgs, 'pagination' | 'sort'>
    >;
    preTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsDocumentListResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsDocumentList'] = ResolversParentTypes['ComponentComponentsDocumentList'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    documents?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentFile']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsDocumentListDocumentsArgs, 'pagination' | 'sort'>
    >;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsFaqResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentComponentsFaq'] = ResolversParentTypes['ComponentComponentsFaq'],
> = {
    banner?: Resolver<Maybe<ResolversTypes['ComponentContentBanner']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    oneColumn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    preTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sections?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentFaqSection']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsFaqSectionsArgs, 'pagination' | 'sort'>
    >;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsFeatureSectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsFeatureSection'] = ResolversParentTypes['ComponentComponentsFeatureSection'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    featureList?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentFeatureItem']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsFeatureSectionFeatureListArgs, 'pagination' | 'sort'>
    >;
    iconBorder?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    inverted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    links?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsFeatureSectionLinksArgs, 'pagination' | 'sort'>
    >;
    preTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsFeatureSectionGridResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsFeatureSectionGrid'] = ResolversParentTypes['ComponentComponentsFeatureSectionGrid'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    featureList?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentFeatureItem']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsFeatureSectionGridFeatureListArgs, 'pagination' | 'sort'>
    >;
    iconBorder?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    inverted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    preTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsHeroSectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsHeroSection'] = ResolversParentTypes['ComponentComponentsHeroSection'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    headingType?: Resolver<
        Maybe<ResolversTypes['ENUM_COMPONENTCOMPONENTSHEROSECTION_HEADINGTYPE']>,
        ParentType,
        ContextType
    >;
    highlightedText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    inverted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    links?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsHeroSectionLinksArgs, 'pagination' | 'sort'>
    >;
    preTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsMediaSectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsMediaSection'] = ResolversParentTypes['ComponentComponentsMediaSection'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    links?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsMediaSectionLinksArgs, 'pagination' | 'sort'>
    >;
    media?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    preTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsPricingSectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsPricingSection'] = ResolversParentTypes['ComponentComponentsPricingSection'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    headingType?: Resolver<
        ResolversTypes['ENUM_COMPONENTCOMPONENTSPRICINGSECTION_HEADINGTYPE'],
        ParentType,
        ContextType
    >;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    pricingList?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentPricingCard']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsPricingSectionPricingListArgs, 'pagination' | 'sort'>
    >;
    subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentComponentsQuickLinksResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentComponentsQuickLinks'] = ResolversParentTypes['ComponentComponentsQuickLinks'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    items?: Resolver<
        Array<Maybe<ResolversTypes['ComponentContentLink']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentComponentsQuickLinksItemsArgs, 'pagination' | 'sort'>
    >;
    preTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentAlertBoxResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentAlertBox'] = ResolversParentTypes['ComponentContentAlertBox'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentArticleSectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentArticleSection'] = ResolversParentTypes['ComponentContentArticleSection'],
> = {
    content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentBadgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentContentBadge'] = ResolversParentTypes['ComponentContentBadge'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    variant?: Resolver<ResolversTypes['ENUM_COMPONENTCONTENTBADGE_VARIANT'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentBannerResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentContentBanner'] = ResolversParentTypes['ComponentContentBanner'],
> = {
    altDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    link?: Resolver<Maybe<ResolversTypes['ComponentContentLink']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentCardWithImageResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentCardWithImage'] = ResolversParentTypes['ComponentContentCardWithImage'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    link?: Resolver<Maybe<ResolversTypes['ComponentContentLink']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentDynamicZoneResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentDynamicZone'] = ResolversParentTypes['ComponentContentDynamicZone'],
> = {
    __resolveType: TypeResolveFn<
        | 'ComponentComponentsArticle'
        | 'ComponentComponentsArticleList'
        | 'ComponentComponentsArticleSearch'
        | 'ComponentComponentsBentoGrid'
        | 'ComponentComponentsCategory'
        | 'ComponentComponentsCategoryList'
        | 'ComponentComponentsCtaSection'
        | 'ComponentComponentsDocumentList'
        | 'ComponentComponentsFaq'
        | 'ComponentComponentsFeatureSection'
        | 'ComponentComponentsFeatureSectionGrid'
        | 'ComponentComponentsHeroSection'
        | 'ComponentComponentsMediaSection'
        | 'ComponentComponentsPricingSection'
        | 'ComponentComponentsQuickLinks'
        | 'Error',
        ParentType,
        ContextType
    >;
};

export interface ComponentContentDynamicZoneInputScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['ComponentContentDynamicZoneInput'], any> {
    name: 'ComponentContentDynamicZoneInput';
}

export type ComponentContentFaqSectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentFaqSection'] = ResolversParentTypes['ComponentContentFaqSection'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    items?: Resolver<
        Array<Maybe<ResolversTypes['ComponentContentMessage']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentContentFaqSectionItemsArgs, 'pagination' | 'sort'>
    >;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentFeatureItemResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentFeatureItem'] = ResolversParentTypes['ComponentContentFeatureItem'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentFieldMappingResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentFieldMapping'] = ResolversParentTypes['ComponentContentFieldMapping'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    values?: Resolver<
        Array<Maybe<ResolversTypes['ComponentContentKeyValue']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentContentFieldMappingValuesArgs, 'pagination' | 'sort'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentFileResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentContentFile'] = ResolversParentTypes['ComponentContentFile'],
> = {
    file?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentIconWithTextResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentIconWithText'] = ResolversParentTypes['ComponentContentIconWithText'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentInformationCardResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentInformationCard'] = ResolversParentTypes['ComponentContentInformationCard'],
> = {
    altMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    link?: Resolver<Maybe<ResolversTypes['ComponentContentLink']>, ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentKeyValueResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentKeyValue'] = ResolversParentTypes['ComponentContentKeyValue'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentKeywordResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentKeyword'] = ResolversParentTypes['ComponentContentKeyword'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    keyword?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentLinkResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentContentLink'] = ResolversParentTypes['ComponentContentLink'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    variant?: Resolver<Maybe<ResolversTypes['ENUM_COMPONENTCONTENTLINK_VARIANT']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentListWithIconsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentListWithIcons'] = ResolversParentTypes['ComponentContentListWithIcons'],
> = {
    icons?: Resolver<
        Array<Maybe<ResolversTypes['ComponentContentIconWithText']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentContentListWithIconsIconsArgs, 'pagination' | 'sort'>
    >;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentMessageResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentMessage'] = ResolversParentTypes['ComponentContentMessage'],
> = {
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentMessageSimpleResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentMessageSimple'] = ResolversParentTypes['ComponentContentMessageSimple'],
> = {
    content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentNavigationGroupResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentNavigationGroup'] = ResolversParentTypes['ComponentContentNavigationGroup'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    items?: Resolver<
        Array<Maybe<ResolversTypes['ComponentContentNavigationItem']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentContentNavigationGroupItemsArgs, 'pagination' | 'sort'>
    >;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentNavigationItemResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentNavigationItem'] = ResolversParentTypes['ComponentContentNavigationItem'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentPriceResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentContentPrice'] = ResolversParentTypes['ComponentContentPrice'],
> = {
    currency?: Resolver<ResolversTypes['ENUM_COMPONENTCONTENTPRICE_CURRENCY'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentPricingCardResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentPricingCard'] = ResolversParentTypes['ComponentContentPricingCard'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    featureList?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentFeatureItem']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentContentPricingCardFeatureListArgs, 'pagination' | 'sort'>
    >;
    featureListTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    isPromoted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    links?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentLink']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentContentPricingCardLinksArgs, 'pagination' | 'sort'>
    >;
    price?: Resolver<Maybe<ResolversTypes['ComponentContentPrice']>, ParentType, ContextType>;
    tags?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentBadge']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentContentPricingCardTagsArgs, 'pagination' | 'sort'>
    >;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentRichTextWithTitleResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentContentRichTextWithTitle'] = ResolversParentTypes['ComponentContentRichTextWithTitle'],
> = {
    content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentEntityResponseCollection'] = ResolversParentTypes['ComponentEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Component']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLabelsActionsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentLabelsActions'] = ResolversParentTypes['ComponentLabelsActions'],
> = {
    apply?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    cancel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    clear?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    clickToSelect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    close?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    delete?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    details?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    edit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hide?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    logIn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    logOut?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    off?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    on?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    payOnline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    renew?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    reorder?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    save?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    settings?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    show?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    showAllArticles?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    showLess?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    showMore?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    trackOrder?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLabelsDatesResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentLabelsDates'] = ResolversParentTypes['ComponentLabelsDates'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    today?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    yesterday?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLabelsErrorsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentLabelsErrors'] = ResolversParentTypes['ComponentLabelsErrors'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    requestError?: Resolver<ResolversTypes['ComponentContentMessageSimple'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLabelsMediaResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentLabelsMedia'] = ResolversParentTypes['ComponentLabelsMedia'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    mute?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    pause?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    play?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    unmute?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLabelsValidationResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentLabelsValidation'] = ResolversParentTypes['ComponentLabelsValidation'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isOptional?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    isRequired?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLayoutSectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentLayoutSection'] = ResolversParentTypes['ComponentLayoutSection'],
> = {
    background?: Resolver<ResolversTypes['ENUM_COMPONENTLAYOUTSECTION_BACKGROUND'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    spacing?: Resolver<ResolversTypes['ENUM_COMPONENTLAYOUTSECTION_SPACING'], ParentType, ContextType>;
    variant?: Resolver<ResolversTypes['ENUM_COMPONENTLAYOUTSECTION_VARIANT'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentRelationResponseCollection'] = ResolversParentTypes['ComponentRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Component']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoMetadataResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentSeoMetadata'] = ResolversParentTypes['ComponentSeoMetadata'],
> = {
    date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoSeoResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentSeoSeo'] = ResolversParentTypes['ComponentSeoSeo'],
> = {
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    keywords?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ComponentContentKeyword']>>>,
        ParentType,
        ContextType,
        RequireFields<ComponentSeoSeoKeywordsArgs, 'pagination' | 'sort'>
    >;
    noFollow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    noIndex?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoUserRolesResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentSeoUserRoles'] = ResolversParentTypes['ComponentSeoUserRoles'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    roles?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTemplatesOneColumnResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentTemplatesOneColumn'] = ResolversParentTypes['ComponentTemplatesOneColumn'],
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    mainSlot?: Resolver<
        Array<Maybe<ResolversTypes['Component']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesOneColumnMainSlotArgs, 'pagination' | 'sort'>
    >;
    mainSlot_connection?: Resolver<
        Maybe<ResolversTypes['ComponentRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesOneColumnMainSlot_ConnectionArgs, 'pagination' | 'sort'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTemplatesTwoColumnResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentTemplatesTwoColumn'] = ResolversParentTypes['ComponentTemplatesTwoColumn'],
> = {
    bottomSlot?: Resolver<
        Array<Maybe<ResolversTypes['Component']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesTwoColumnBottomSlotArgs, 'pagination' | 'sort'>
    >;
    bottomSlot_connection?: Resolver<
        Maybe<ResolversTypes['ComponentRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesTwoColumnBottomSlot_ConnectionArgs, 'pagination' | 'sort'>
    >;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    leftSlot?: Resolver<
        Array<Maybe<ResolversTypes['Component']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesTwoColumnLeftSlotArgs, 'pagination' | 'sort'>
    >;
    leftSlot_connection?: Resolver<
        Maybe<ResolversTypes['ComponentRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesTwoColumnLeftSlot_ConnectionArgs, 'pagination' | 'sort'>
    >;
    rightSlot?: Resolver<
        Array<Maybe<ResolversTypes['Component']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesTwoColumnRightSlotArgs, 'pagination' | 'sort'>
    >;
    rightSlot_connection?: Resolver<
        Maybe<ResolversTypes['ComponentRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesTwoColumnRightSlot_ConnectionArgs, 'pagination' | 'sort'>
    >;
    topSlot?: Resolver<
        Array<Maybe<ResolversTypes['Component']>>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesTwoColumnTopSlotArgs, 'pagination' | 'sort'>
    >;
    topSlot_connection?: Resolver<
        Maybe<ResolversTypes['ComponentRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTemplatesTwoColumnTopSlot_ConnectionArgs, 'pagination' | 'sort'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableTextsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ConfigurableTexts'] = ResolversParentTypes['ConfigurableTexts'],
> = {
    actions?: Resolver<ResolversTypes['ComponentLabelsActions'], ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    dates?: Resolver<ResolversTypes['ComponentLabelsDates'], ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    errors?: Resolver<ResolversTypes['ComponentLabelsErrors'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<Array<Maybe<ResolversTypes['ConfigurableTexts']>>, ParentType, ContextType>;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['ConfigurableTextsRelationResponseCollection']>,
        ParentType,
        ContextType
    >;
    media?: Resolver<ResolversTypes['ComponentLabelsMedia'], ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    validation?: Resolver<ResolversTypes['ComponentLabelsValidation'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableTextsRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ConfigurableTextsRelationResponseCollection'] = ResolversParentTypes['ConfigurableTextsRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['ConfigurableTexts']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
    name: 'DateTime';
}

export type DeleteMutationResponseResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DeleteMutationResponse'] = ResolversParentTypes['DeleteMutationResponse'],
> = {
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error'],
> = {
    code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Footer'] = ResolversParentTypes['Footer'],
> = {
    copyright?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    items?: Resolver<Array<Maybe<ResolversTypes['FooterItemsDynamicZone']>>, ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<
        Array<Maybe<ResolversTypes['Footer']>>,
        ParentType,
        ContextType,
        RequireFields<FooterLocalizationsArgs, 'pagination' | 'sort'>
    >;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['FooterRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<FooterLocalizations_ConnectionArgs, 'pagination' | 'sort'>
    >;
    logo?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['FooterEntityResponseCollection'] = ResolversParentTypes['FooterEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Footer']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterItemsDynamicZoneResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['FooterItemsDynamicZone'] = ResolversParentTypes['FooterItemsDynamicZone'],
> = {
    __resolveType: TypeResolveFn<
        'ComponentContentNavigationGroup' | 'ComponentContentNavigationItem' | 'Error',
        ParentType,
        ContextType
    >;
};

export interface FooterItemsDynamicZoneInputScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['FooterItemsDynamicZoneInput'], any> {
    name: 'FooterItemsDynamicZoneInput';
}

export type FooterRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['FooterRelationResponseCollection'] = ResolversParentTypes['FooterRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Footer']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericMorphResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GenericMorph'] = ResolversParentTypes['GenericMorph'],
> = {
    __resolveType: TypeResolveFn<
        | 'AppConfig'
        | 'Article'
        | 'Author'
        | 'Category'
        | 'Component'
        | 'ComponentComponentsArticle'
        | 'ComponentComponentsArticleList'
        | 'ComponentComponentsArticleSearch'
        | 'ComponentComponentsBentoGrid'
        | 'ComponentComponentsCategory'
        | 'ComponentComponentsCategoryList'
        | 'ComponentComponentsCtaSection'
        | 'ComponentComponentsDocumentList'
        | 'ComponentComponentsFaq'
        | 'ComponentComponentsFeatureSection'
        | 'ComponentComponentsFeatureSectionGrid'
        | 'ComponentComponentsHeroSection'
        | 'ComponentComponentsMediaSection'
        | 'ComponentComponentsPricingSection'
        | 'ComponentComponentsQuickLinks'
        | 'ComponentContentAlertBox'
        | 'ComponentContentArticleSection'
        | 'ComponentContentBadge'
        | 'ComponentContentBanner'
        | 'ComponentContentCardWithImage'
        | 'ComponentContentFaqSection'
        | 'ComponentContentFeatureItem'
        | 'ComponentContentFieldMapping'
        | 'ComponentContentFile'
        | 'ComponentContentIconWithText'
        | 'ComponentContentInformationCard'
        | 'ComponentContentKeyValue'
        | 'ComponentContentKeyword'
        | 'ComponentContentLink'
        | 'ComponentContentListWithIcons'
        | 'ComponentContentMessage'
        | 'ComponentContentMessageSimple'
        | 'ComponentContentNavigationGroup'
        | 'ComponentContentNavigationItem'
        | 'ComponentContentPrice'
        | 'ComponentContentPricingCard'
        | 'ComponentContentRichTextWithTitle'
        | 'ComponentLabelsActions'
        | 'ComponentLabelsDates'
        | 'ComponentLabelsErrors'
        | 'ComponentLabelsMedia'
        | 'ComponentLabelsValidation'
        | 'ComponentLayoutSection'
        | 'ComponentSeoMetadata'
        | 'ComponentSeoSeo'
        | 'ComponentSeoUserRoles'
        | 'ComponentTemplatesOneColumn'
        | 'ComponentTemplatesTwoColumn'
        | 'ConfigurableTexts'
        | 'Footer'
        | 'Header'
        | 'I18NLocale'
        | 'Mapping'
        | 'NotFoundPage'
        | 'Page'
        | 'ReviewWorkflowsWorkflow'
        | 'ReviewWorkflowsWorkflowStage'
        | 'UploadFile'
        | 'UsersPermissionsPermission'
        | 'UsersPermissionsRole'
        | 'UsersPermissionsUser',
        ParentType,
        ContextType
    >;
};

export type HeaderResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Header'] = ResolversParentTypes['Header'],
> = {
    closeMobileMenuLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    items?: Resolver<Array<Maybe<ResolversTypes['HeaderItemsDynamicZone']>>, ParentType, ContextType>;
    languageSwitcherLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<
        Array<Maybe<ResolversTypes['Header']>>,
        ParentType,
        ContextType,
        RequireFields<HeaderLocalizationsArgs, 'pagination' | 'sort'>
    >;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['HeaderRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<HeaderLocalizations_ConnectionArgs, 'pagination' | 'sort'>
    >;
    logo?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType>;
    notification?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    openMobileMenuLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    showContextSwitcher?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    userInfo?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['HeaderEntityResponseCollection'] = ResolversParentTypes['HeaderEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Header']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderItemsDynamicZoneResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['HeaderItemsDynamicZone'] = ResolversParentTypes['HeaderItemsDynamicZone'],
> = {
    __resolveType: TypeResolveFn<
        'ComponentContentNavigationGroup' | 'ComponentContentNavigationItem' | 'Error',
        ParentType,
        ContextType
    >;
};

export interface HeaderItemsDynamicZoneInputScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['HeaderItemsDynamicZoneInput'], any> {
    name: 'HeaderItemsDynamicZoneInput';
}

export type HeaderRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['HeaderRelationResponseCollection'] = ResolversParentTypes['HeaderRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Header']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale'],
> = {
    code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface I18NLocaleCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['I18NLocaleCode'], any> {
    name: 'I18NLocaleCode';
}

export type I18NLocaleEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['I18NLocaleEntityResponseCollection'] = ResolversParentTypes['I18NLocaleEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
    name: 'JSON';
}

export type MappingResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mapping'] = ResolversParentTypes['Mapping'],
> = {
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MappingEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['MappingEntityResponseCollection'] = ResolversParentTypes['MappingEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Mapping']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
    changePassword?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsLoginPayload']>,
        ParentType,
        ContextType,
        RequireFields<MutationChangePasswordArgs, 'currentPassword' | 'password' | 'passwordConfirmation'>
    >;
    createArticle?: Resolver<
        Maybe<ResolversTypes['Article']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateArticleArgs, 'data' | 'status'>
    >;
    createAuthor?: Resolver<
        Maybe<ResolversTypes['Author']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateAuthorArgs, 'data' | 'status'>
    >;
    createCategory?: Resolver<
        Maybe<ResolversTypes['Category']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateCategoryArgs, 'data' | 'status'>
    >;
    createComponent?: Resolver<
        Maybe<ResolversTypes['Component']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateComponentArgs, 'data' | 'status'>
    >;
    createFooter?: Resolver<
        Maybe<ResolversTypes['Footer']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateFooterArgs, 'data' | 'status'>
    >;
    createHeader?: Resolver<
        Maybe<ResolversTypes['Header']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateHeaderArgs, 'data' | 'status'>
    >;
    createMapping?: Resolver<
        Maybe<ResolversTypes['Mapping']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateMappingArgs, 'data' | 'status'>
    >;
    createPage?: Resolver<
        Maybe<ResolversTypes['Page']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreatePageArgs, 'data' | 'status'>
    >;
    createReviewWorkflowsWorkflow?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateReviewWorkflowsWorkflowArgs, 'data' | 'status'>
    >;
    createReviewWorkflowsWorkflowStage?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateReviewWorkflowsWorkflowStageArgs, 'data' | 'status'>
    >;
    createUsersPermissionsRole?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsCreateRolePayload']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateUsersPermissionsRoleArgs, 'data'>
    >;
    createUsersPermissionsUser?: Resolver<
        ResolversTypes['UsersPermissionsUserEntityResponse'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateUsersPermissionsUserArgs, 'data'>
    >;
    deleteAppConfig?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        Partial<MutationDeleteAppConfigArgs>
    >;
    deleteArticle?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteArticleArgs, 'documentId'>
    >;
    deleteAuthor?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteAuthorArgs, 'documentId'>
    >;
    deleteCategory?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteCategoryArgs, 'documentId'>
    >;
    deleteComponent?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteComponentArgs, 'documentId'>
    >;
    deleteConfigurableTexts?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        Partial<MutationDeleteConfigurableTextsArgs>
    >;
    deleteFooter?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteFooterArgs, 'documentId'>
    >;
    deleteHeader?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteHeaderArgs, 'documentId'>
    >;
    deleteMapping?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteMappingArgs, 'documentId'>
    >;
    deleteNotFoundPage?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        Partial<MutationDeleteNotFoundPageArgs>
    >;
    deletePage?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeletePageArgs, 'documentId'>
    >;
    deleteReviewWorkflowsWorkflow?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteReviewWorkflowsWorkflowArgs, 'documentId'>
    >;
    deleteReviewWorkflowsWorkflowStage?: Resolver<
        Maybe<ResolversTypes['DeleteMutationResponse']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteReviewWorkflowsWorkflowStageArgs, 'documentId'>
    >;
    deleteUploadFile?: Resolver<
        Maybe<ResolversTypes['UploadFile']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteUploadFileArgs, 'id'>
    >;
    deleteUsersPermissionsRole?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsDeleteRolePayload']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteUsersPermissionsRoleArgs, 'id'>
    >;
    deleteUsersPermissionsUser?: Resolver<
        ResolversTypes['UsersPermissionsUserEntityResponse'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteUsersPermissionsUserArgs, 'id'>
    >;
    emailConfirmation?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsLoginPayload']>,
        ParentType,
        ContextType,
        RequireFields<MutationEmailConfirmationArgs, 'confirmation'>
    >;
    forgotPassword?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsPasswordPayload']>,
        ParentType,
        ContextType,
        RequireFields<MutationForgotPasswordArgs, 'email'>
    >;
    login?: Resolver<
        ResolversTypes['UsersPermissionsLoginPayload'],
        ParentType,
        ContextType,
        RequireFields<MutationLoginArgs, 'input'>
    >;
    register?: Resolver<
        ResolversTypes['UsersPermissionsLoginPayload'],
        ParentType,
        ContextType,
        RequireFields<MutationRegisterArgs, 'input'>
    >;
    resetPassword?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsLoginPayload']>,
        ParentType,
        ContextType,
        RequireFields<MutationResetPasswordArgs, 'code' | 'password' | 'passwordConfirmation'>
    >;
    updateAppConfig?: Resolver<
        Maybe<ResolversTypes['AppConfig']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateAppConfigArgs, 'data' | 'status'>
    >;
    updateArticle?: Resolver<
        Maybe<ResolversTypes['Article']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateArticleArgs, 'data' | 'documentId' | 'status'>
    >;
    updateAuthor?: Resolver<
        Maybe<ResolversTypes['Author']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateAuthorArgs, 'data' | 'documentId' | 'status'>
    >;
    updateCategory?: Resolver<
        Maybe<ResolversTypes['Category']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCategoryArgs, 'data' | 'documentId' | 'status'>
    >;
    updateComponent?: Resolver<
        Maybe<ResolversTypes['Component']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateComponentArgs, 'data' | 'documentId' | 'status'>
    >;
    updateConfigurableTexts?: Resolver<
        Maybe<ResolversTypes['ConfigurableTexts']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateConfigurableTextsArgs, 'data' | 'status'>
    >;
    updateFooter?: Resolver<
        Maybe<ResolversTypes['Footer']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateFooterArgs, 'data' | 'documentId' | 'status'>
    >;
    updateHeader?: Resolver<
        Maybe<ResolversTypes['Header']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateHeaderArgs, 'data' | 'documentId' | 'status'>
    >;
    updateMapping?: Resolver<
        Maybe<ResolversTypes['Mapping']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMappingArgs, 'data' | 'documentId' | 'status'>
    >;
    updateNotFoundPage?: Resolver<
        Maybe<ResolversTypes['NotFoundPage']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateNotFoundPageArgs, 'data' | 'status'>
    >;
    updatePage?: Resolver<
        Maybe<ResolversTypes['Page']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdatePageArgs, 'data' | 'documentId' | 'status'>
    >;
    updateReviewWorkflowsWorkflow?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateReviewWorkflowsWorkflowArgs, 'data' | 'documentId' | 'status'>
    >;
    updateReviewWorkflowsWorkflowStage?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateReviewWorkflowsWorkflowStageArgs, 'data' | 'documentId' | 'status'>
    >;
    updateUploadFile?: Resolver<
        ResolversTypes['UploadFile'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateUploadFileArgs, 'id'>
    >;
    updateUsersPermissionsRole?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsUpdateRolePayload']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateUsersPermissionsRoleArgs, 'data' | 'id'>
    >;
    updateUsersPermissionsUser?: Resolver<
        ResolversTypes['UsersPermissionsUserEntityResponse'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateUsersPermissionsUserArgs, 'data' | 'id'>
    >;
};

export type NotFoundPageResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['NotFoundPage'] = ResolversParentTypes['NotFoundPage'],
> = {
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<Array<Maybe<ResolversTypes['NotFoundPage']>>, ParentType, ContextType>;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['NotFoundPageRelationResponseCollection']>,
        ParentType,
        ContextType
    >;
    page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    urlLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotFoundPageRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['NotFoundPageRelationResponseCollection'] = ResolversParentTypes['NotFoundPageRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['NotFoundPage']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page'],
> = {
    SEO?: Resolver<ResolversTypes['ComponentSeoSeo'], ParentType, ContextType>;
    child?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    hasOwnTitle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    localizations?: Resolver<
        Array<Maybe<ResolversTypes['Page']>>,
        ParentType,
        ContextType,
        RequireFields<PageLocalizationsArgs, 'pagination' | 'sort'>
    >;
    localizations_connection?: Resolver<
        Maybe<ResolversTypes['PageRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLocalizations_ConnectionArgs, 'pagination' | 'sort'>
    >;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
    permissions?: Resolver<Maybe<ResolversTypes['ComponentSeoUserRoles']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    showBreadcrumbs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    template?: Resolver<Array<Maybe<ResolversTypes['PageTemplateDynamicZone']>>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageEntityResponseCollection'] = ResolversParentTypes['PageEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageRelationResponseCollection'] = ResolversParentTypes['PageRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTemplateDynamicZoneResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageTemplateDynamicZone'] = ResolversParentTypes['PageTemplateDynamicZone'],
> = {
    __resolveType: TypeResolveFn<
        'ComponentTemplatesOneColumn' | 'ComponentTemplatesTwoColumn' | 'Error',
        ParentType,
        ContextType
    >;
};

export interface PageTemplateDynamicZoneInputScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['PageTemplateDynamicZoneInput'], any> {
    name: 'PageTemplateDynamicZoneInput';
}

export type PaginationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination'],
> = {
    page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
    appConfig?: Resolver<
        Maybe<ResolversTypes['AppConfig']>,
        ParentType,
        ContextType,
        RequireFields<QueryAppConfigArgs, 'status'>
    >;
    article?: Resolver<
        Maybe<ResolversTypes['Article']>,
        ParentType,
        ContextType,
        RequireFields<QueryArticleArgs, 'documentId' | 'status'>
    >;
    articles?: Resolver<
        Array<Maybe<ResolversTypes['Article']>>,
        ParentType,
        ContextType,
        RequireFields<QueryArticlesArgs, 'pagination' | 'sort' | 'status'>
    >;
    articles_connection?: Resolver<
        Maybe<ResolversTypes['ArticleEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryArticles_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    author?: Resolver<
        Maybe<ResolversTypes['Author']>,
        ParentType,
        ContextType,
        RequireFields<QueryAuthorArgs, 'documentId' | 'status'>
    >;
    authors?: Resolver<
        Array<Maybe<ResolversTypes['Author']>>,
        ParentType,
        ContextType,
        RequireFields<QueryAuthorsArgs, 'pagination' | 'sort' | 'status'>
    >;
    authors_connection?: Resolver<
        Maybe<ResolversTypes['AuthorEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryAuthors_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    categories?: Resolver<
        Array<Maybe<ResolversTypes['Category']>>,
        ParentType,
        ContextType,
        RequireFields<QueryCategoriesArgs, 'pagination' | 'sort' | 'status'>
    >;
    categories_connection?: Resolver<
        Maybe<ResolversTypes['CategoryEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryCategories_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    category?: Resolver<
        Maybe<ResolversTypes['Category']>,
        ParentType,
        ContextType,
        RequireFields<QueryCategoryArgs, 'documentId' | 'status'>
    >;
    component?: Resolver<
        Maybe<ResolversTypes['Component']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentArgs, 'documentId' | 'status'>
    >;
    components?: Resolver<
        Array<Maybe<ResolversTypes['Component']>>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentsArgs, 'pagination' | 'sort' | 'status'>
    >;
    components_connection?: Resolver<
        Maybe<ResolversTypes['ComponentEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponents_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    configurableTexts?: Resolver<
        Maybe<ResolversTypes['ConfigurableTexts']>,
        ParentType,
        ContextType,
        RequireFields<QueryConfigurableTextsArgs, 'status'>
    >;
    footer?: Resolver<
        Maybe<ResolversTypes['Footer']>,
        ParentType,
        ContextType,
        RequireFields<QueryFooterArgs, 'documentId' | 'status'>
    >;
    footers?: Resolver<
        Array<Maybe<ResolversTypes['Footer']>>,
        ParentType,
        ContextType,
        RequireFields<QueryFootersArgs, 'pagination' | 'sort' | 'status'>
    >;
    footers_connection?: Resolver<
        Maybe<ResolversTypes['FooterEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryFooters_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    header?: Resolver<
        Maybe<ResolversTypes['Header']>,
        ParentType,
        ContextType,
        RequireFields<QueryHeaderArgs, 'documentId' | 'status'>
    >;
    headers?: Resolver<
        Array<Maybe<ResolversTypes['Header']>>,
        ParentType,
        ContextType,
        RequireFields<QueryHeadersArgs, 'pagination' | 'sort' | 'status'>
    >;
    headers_connection?: Resolver<
        Maybe<ResolversTypes['HeaderEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryHeaders_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    i18NLocale?: Resolver<
        Maybe<ResolversTypes['I18NLocale']>,
        ParentType,
        ContextType,
        RequireFields<QueryI18NLocaleArgs, 'documentId' | 'status'>
    >;
    i18NLocales?: Resolver<
        Array<Maybe<ResolversTypes['I18NLocale']>>,
        ParentType,
        ContextType,
        RequireFields<QueryI18NLocalesArgs, 'pagination' | 'sort' | 'status'>
    >;
    i18NLocales_connection?: Resolver<
        Maybe<ResolversTypes['I18NLocaleEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryI18NLocales_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    mapping?: Resolver<
        Maybe<ResolversTypes['Mapping']>,
        ParentType,
        ContextType,
        RequireFields<QueryMappingArgs, 'documentId' | 'status'>
    >;
    mappings?: Resolver<
        Array<Maybe<ResolversTypes['Mapping']>>,
        ParentType,
        ContextType,
        RequireFields<QueryMappingsArgs, 'pagination' | 'sort' | 'status'>
    >;
    mappings_connection?: Resolver<
        Maybe<ResolversTypes['MappingEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryMappings_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
    notFoundPage?: Resolver<
        Maybe<ResolversTypes['NotFoundPage']>,
        ParentType,
        ContextType,
        RequireFields<QueryNotFoundPageArgs, 'status'>
    >;
    page?: Resolver<
        Maybe<ResolversTypes['Page']>,
        ParentType,
        ContextType,
        RequireFields<QueryPageArgs, 'documentId' | 'status'>
    >;
    pages?: Resolver<
        Array<Maybe<ResolversTypes['Page']>>,
        ParentType,
        ContextType,
        RequireFields<QueryPagesArgs, 'pagination' | 'sort' | 'status'>
    >;
    pages_connection?: Resolver<
        Maybe<ResolversTypes['PageEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryPages_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    reviewWorkflowsWorkflow?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>,
        ParentType,
        ContextType,
        RequireFields<QueryReviewWorkflowsWorkflowArgs, 'documentId' | 'status'>
    >;
    reviewWorkflowsWorkflowStage?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>,
        ParentType,
        ContextType,
        RequireFields<QueryReviewWorkflowsWorkflowStageArgs, 'documentId' | 'status'>
    >;
    reviewWorkflowsWorkflowStages?: Resolver<
        Array<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>>,
        ParentType,
        ContextType,
        RequireFields<QueryReviewWorkflowsWorkflowStagesArgs, 'pagination' | 'sort' | 'status'>
    >;
    reviewWorkflowsWorkflowStages_connection?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflowStageEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryReviewWorkflowsWorkflowStages_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    reviewWorkflowsWorkflows?: Resolver<
        Array<Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>>,
        ParentType,
        ContextType,
        RequireFields<QueryReviewWorkflowsWorkflowsArgs, 'pagination' | 'sort' | 'status'>
    >;
    reviewWorkflowsWorkflows_connection?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflowEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryReviewWorkflowsWorkflows_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    uploadFile?: Resolver<
        Maybe<ResolversTypes['UploadFile']>,
        ParentType,
        ContextType,
        RequireFields<QueryUploadFileArgs, 'documentId' | 'status'>
    >;
    uploadFiles?: Resolver<
        Array<Maybe<ResolversTypes['UploadFile']>>,
        ParentType,
        ContextType,
        RequireFields<QueryUploadFilesArgs, 'pagination' | 'sort' | 'status'>
    >;
    uploadFiles_connection?: Resolver<
        Maybe<ResolversTypes['UploadFileEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryUploadFiles_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    usersPermissionsRole?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsRole']>,
        ParentType,
        ContextType,
        RequireFields<QueryUsersPermissionsRoleArgs, 'documentId' | 'status'>
    >;
    usersPermissionsRoles?: Resolver<
        Array<Maybe<ResolversTypes['UsersPermissionsRole']>>,
        ParentType,
        ContextType,
        RequireFields<QueryUsersPermissionsRolesArgs, 'pagination' | 'sort' | 'status'>
    >;
    usersPermissionsRoles_connection?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsRoleEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryUsersPermissionsRoles_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
    usersPermissionsUser?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsUser']>,
        ParentType,
        ContextType,
        RequireFields<QueryUsersPermissionsUserArgs, 'documentId' | 'status'>
    >;
    usersPermissionsUsers?: Resolver<
        Array<Maybe<ResolversTypes['UsersPermissionsUser']>>,
        ParentType,
        ContextType,
        RequireFields<QueryUsersPermissionsUsersArgs, 'pagination' | 'sort' | 'status'>
    >;
    usersPermissionsUsers_connection?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsUserEntityResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryUsersPermissionsUsers_ConnectionArgs, 'pagination' | 'sort' | 'status'>
    >;
};

export type ReviewWorkflowsWorkflowResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ReviewWorkflowsWorkflow'] = ResolversParentTypes['ReviewWorkflowsWorkflow'],
> = {
    contentTypes?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    stageRequiredToPublish?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>, ParentType, ContextType>;
    stages?: Resolver<
        Array<Maybe<ResolversTypes['ReviewWorkflowsWorkflowStage']>>,
        ParentType,
        ContextType,
        RequireFields<ReviewWorkflowsWorkflowStagesArgs, 'pagination' | 'sort'>
    >;
    stages_connection?: Resolver<
        Maybe<ResolversTypes['ReviewWorkflowsWorkflowStageRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<ReviewWorkflowsWorkflowStages_ConnectionArgs, 'pagination' | 'sort'>
    >;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ReviewWorkflowsWorkflowEntityResponseCollection'] = ResolversParentTypes['ReviewWorkflowsWorkflowEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['ReviewWorkflowsWorkflow']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ReviewWorkflowsWorkflowStage'] = ResolversParentTypes['ReviewWorkflowsWorkflowStage'],
> = {
    color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    workflow?: Resolver<Maybe<ResolversTypes['ReviewWorkflowsWorkflow']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ReviewWorkflowsWorkflowStageEntityResponseCollection'] = ResolversParentTypes['ReviewWorkflowsWorkflowStageEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['ReviewWorkflowsWorkflowStage']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ReviewWorkflowsWorkflowStageRelationResponseCollection'] = ResolversParentTypes['ReviewWorkflowsWorkflowStageRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['ReviewWorkflowsWorkflowStage']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile'],
> = {
    alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    related?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>>, ParentType, ContextType>;
    size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UploadFileEntityResponseCollection'] = ResolversParentTypes['UploadFileEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UploadFileRelationResponseCollection'] = ResolversParentTypes['UploadFileRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['UploadFile']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsCreateRolePayloadResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsCreateRolePayload'] = ResolversParentTypes['UsersPermissionsCreateRolePayload'],
> = {
    ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsDeleteRolePayloadResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsDeleteRolePayload'] = ResolversParentTypes['UsersPermissionsDeleteRolePayload'],
> = {
    ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsLoginPayloadResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload'],
> = {
    jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe'],
> = {
    blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
    username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeRoleResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole'],
> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPasswordPayloadResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsPasswordPayload'] = ResolversParentTypes['UsersPermissionsPasswordPayload'],
> = {
    ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission'],
> = {
    action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['UsersPermissionsPermission']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole'],
> = {
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    permissions?: Resolver<
        Array<Maybe<ResolversTypes['UsersPermissionsPermission']>>,
        ParentType,
        ContextType,
        RequireFields<UsersPermissionsRolePermissionsArgs, 'pagination' | 'sort'>
    >;
    permissions_connection?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<UsersPermissionsRolePermissions_ConnectionArgs, 'pagination' | 'sort'>
    >;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    users?: Resolver<
        Array<Maybe<ResolversTypes['UsersPermissionsUser']>>,
        ParentType,
        ContextType,
        RequireFields<UsersPermissionsRoleUsersArgs, 'pagination' | 'sort'>
    >;
    users_connection?: Resolver<
        Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>,
        ParentType,
        ContextType,
        RequireFields<UsersPermissionsRoleUsers_ConnectionArgs, 'pagination' | 'sort'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUpdateRolePayloadResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsUpdateRolePayload'] = ResolversParentTypes['UsersPermissionsUpdateRolePayload'],
> = {
    ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser'],
> = {
    blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    documentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsUserEntityResponse'] = ResolversParentTypes['UsersPermissionsUserEntityResponse'],
> = {
    data?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsUserEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsUserEntityResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserRelationResponseCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['UsersPermissionsUserRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsUserRelationResponseCollection'],
> = {
    nodes?: Resolver<Array<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    AppConfig?: AppConfigResolvers<ContextType>;
    AppConfigRelationResponseCollection?: AppConfigRelationResponseCollectionResolvers<ContextType>;
    Article?: ArticleResolvers<ContextType>;
    ArticleEntityResponseCollection?: ArticleEntityResponseCollectionResolvers<ContextType>;
    ArticleRelationResponseCollection?: ArticleRelationResponseCollectionResolvers<ContextType>;
    Author?: AuthorResolvers<ContextType>;
    AuthorEntityResponseCollection?: AuthorEntityResponseCollectionResolvers<ContextType>;
    AuthorRelationResponseCollection?: AuthorRelationResponseCollectionResolvers<ContextType>;
    Category?: CategoryResolvers<ContextType>;
    CategoryEntityResponseCollection?: CategoryEntityResponseCollectionResolvers<ContextType>;
    CategoryRelationResponseCollection?: CategoryRelationResponseCollectionResolvers<ContextType>;
    Component?: ComponentResolvers<ContextType>;
    ComponentComponentsArticle?: ComponentComponentsArticleResolvers<ContextType>;
    ComponentComponentsArticleList?: ComponentComponentsArticleListResolvers<ContextType>;
    ComponentComponentsArticleSearch?: ComponentComponentsArticleSearchResolvers<ContextType>;
    ComponentComponentsBentoGrid?: ComponentComponentsBentoGridResolvers<ContextType>;
    ComponentComponentsCategory?: ComponentComponentsCategoryResolvers<ContextType>;
    ComponentComponentsCategoryList?: ComponentComponentsCategoryListResolvers<ContextType>;
    ComponentComponentsCtaSection?: ComponentComponentsCtaSectionResolvers<ContextType>;
    ComponentComponentsDocumentList?: ComponentComponentsDocumentListResolvers<ContextType>;
    ComponentComponentsFaq?: ComponentComponentsFaqResolvers<ContextType>;
    ComponentComponentsFeatureSection?: ComponentComponentsFeatureSectionResolvers<ContextType>;
    ComponentComponentsFeatureSectionGrid?: ComponentComponentsFeatureSectionGridResolvers<ContextType>;
    ComponentComponentsHeroSection?: ComponentComponentsHeroSectionResolvers<ContextType>;
    ComponentComponentsMediaSection?: ComponentComponentsMediaSectionResolvers<ContextType>;
    ComponentComponentsPricingSection?: ComponentComponentsPricingSectionResolvers<ContextType>;
    ComponentComponentsQuickLinks?: ComponentComponentsQuickLinksResolvers<ContextType>;
    ComponentContentAlertBox?: ComponentContentAlertBoxResolvers<ContextType>;
    ComponentContentArticleSection?: ComponentContentArticleSectionResolvers<ContextType>;
    ComponentContentBadge?: ComponentContentBadgeResolvers<ContextType>;
    ComponentContentBanner?: ComponentContentBannerResolvers<ContextType>;
    ComponentContentCardWithImage?: ComponentContentCardWithImageResolvers<ContextType>;
    ComponentContentDynamicZone?: ComponentContentDynamicZoneResolvers<ContextType>;
    ComponentContentDynamicZoneInput?: GraphQLScalarType;
    ComponentContentFaqSection?: ComponentContentFaqSectionResolvers<ContextType>;
    ComponentContentFeatureItem?: ComponentContentFeatureItemResolvers<ContextType>;
    ComponentContentFieldMapping?: ComponentContentFieldMappingResolvers<ContextType>;
    ComponentContentFile?: ComponentContentFileResolvers<ContextType>;
    ComponentContentIconWithText?: ComponentContentIconWithTextResolvers<ContextType>;
    ComponentContentInformationCard?: ComponentContentInformationCardResolvers<ContextType>;
    ComponentContentKeyValue?: ComponentContentKeyValueResolvers<ContextType>;
    ComponentContentKeyword?: ComponentContentKeywordResolvers<ContextType>;
    ComponentContentLink?: ComponentContentLinkResolvers<ContextType>;
    ComponentContentListWithIcons?: ComponentContentListWithIconsResolvers<ContextType>;
    ComponentContentMessage?: ComponentContentMessageResolvers<ContextType>;
    ComponentContentMessageSimple?: ComponentContentMessageSimpleResolvers<ContextType>;
    ComponentContentNavigationGroup?: ComponentContentNavigationGroupResolvers<ContextType>;
    ComponentContentNavigationItem?: ComponentContentNavigationItemResolvers<ContextType>;
    ComponentContentPrice?: ComponentContentPriceResolvers<ContextType>;
    ComponentContentPricingCard?: ComponentContentPricingCardResolvers<ContextType>;
    ComponentContentRichTextWithTitle?: ComponentContentRichTextWithTitleResolvers<ContextType>;
    ComponentEntityResponseCollection?: ComponentEntityResponseCollectionResolvers<ContextType>;
    ComponentLabelsActions?: ComponentLabelsActionsResolvers<ContextType>;
    ComponentLabelsDates?: ComponentLabelsDatesResolvers<ContextType>;
    ComponentLabelsErrors?: ComponentLabelsErrorsResolvers<ContextType>;
    ComponentLabelsMedia?: ComponentLabelsMediaResolvers<ContextType>;
    ComponentLabelsValidation?: ComponentLabelsValidationResolvers<ContextType>;
    ComponentLayoutSection?: ComponentLayoutSectionResolvers<ContextType>;
    ComponentRelationResponseCollection?: ComponentRelationResponseCollectionResolvers<ContextType>;
    ComponentSeoMetadata?: ComponentSeoMetadataResolvers<ContextType>;
    ComponentSeoSeo?: ComponentSeoSeoResolvers<ContextType>;
    ComponentSeoUserRoles?: ComponentSeoUserRolesResolvers<ContextType>;
    ComponentTemplatesOneColumn?: ComponentTemplatesOneColumnResolvers<ContextType>;
    ComponentTemplatesTwoColumn?: ComponentTemplatesTwoColumnResolvers<ContextType>;
    ConfigurableTexts?: ConfigurableTextsResolvers<ContextType>;
    ConfigurableTextsRelationResponseCollection?: ConfigurableTextsRelationResponseCollectionResolvers<ContextType>;
    DateTime?: GraphQLScalarType;
    DeleteMutationResponse?: DeleteMutationResponseResolvers<ContextType>;
    Error?: ErrorResolvers<ContextType>;
    Footer?: FooterResolvers<ContextType>;
    FooterEntityResponseCollection?: FooterEntityResponseCollectionResolvers<ContextType>;
    FooterItemsDynamicZone?: FooterItemsDynamicZoneResolvers<ContextType>;
    FooterItemsDynamicZoneInput?: GraphQLScalarType;
    FooterRelationResponseCollection?: FooterRelationResponseCollectionResolvers<ContextType>;
    GenericMorph?: GenericMorphResolvers<ContextType>;
    Header?: HeaderResolvers<ContextType>;
    HeaderEntityResponseCollection?: HeaderEntityResponseCollectionResolvers<ContextType>;
    HeaderItemsDynamicZone?: HeaderItemsDynamicZoneResolvers<ContextType>;
    HeaderItemsDynamicZoneInput?: GraphQLScalarType;
    HeaderRelationResponseCollection?: HeaderRelationResponseCollectionResolvers<ContextType>;
    I18NLocale?: I18NLocaleResolvers<ContextType>;
    I18NLocaleCode?: GraphQLScalarType;
    I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
    JSON?: GraphQLScalarType;
    Mapping?: MappingResolvers<ContextType>;
    MappingEntityResponseCollection?: MappingEntityResponseCollectionResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    NotFoundPage?: NotFoundPageResolvers<ContextType>;
    NotFoundPageRelationResponseCollection?: NotFoundPageRelationResponseCollectionResolvers<ContextType>;
    Page?: PageResolvers<ContextType>;
    PageEntityResponseCollection?: PageEntityResponseCollectionResolvers<ContextType>;
    PageRelationResponseCollection?: PageRelationResponseCollectionResolvers<ContextType>;
    PageTemplateDynamicZone?: PageTemplateDynamicZoneResolvers<ContextType>;
    PageTemplateDynamicZoneInput?: GraphQLScalarType;
    Pagination?: PaginationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    ReviewWorkflowsWorkflow?: ReviewWorkflowsWorkflowResolvers<ContextType>;
    ReviewWorkflowsWorkflowEntityResponseCollection?: ReviewWorkflowsWorkflowEntityResponseCollectionResolvers<ContextType>;
    ReviewWorkflowsWorkflowStage?: ReviewWorkflowsWorkflowStageResolvers<ContextType>;
    ReviewWorkflowsWorkflowStageEntityResponseCollection?: ReviewWorkflowsWorkflowStageEntityResponseCollectionResolvers<ContextType>;
    ReviewWorkflowsWorkflowStageRelationResponseCollection?: ReviewWorkflowsWorkflowStageRelationResponseCollectionResolvers<ContextType>;
    UploadFile?: UploadFileResolvers<ContextType>;
    UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
    UploadFileRelationResponseCollection?: UploadFileRelationResponseCollectionResolvers<ContextType>;
    UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
    UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
    UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
    UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
    UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
    UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
    UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
    UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
    UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
    UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
    UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
    UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
    UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
    UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
    UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
};

export type ArticleSimpleFragment = {
    documentId: string;
    slug: string;
    locale?: string;
    createdAt?: any;
    updatedAt?: any;
    publishedAt?: any;
    permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any };
    SEO: {
        title: string;
        noIndex: boolean;
        noFollow: boolean;
        description: string;
        keywords?: Array<{ keyword: string }>;
        image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    };
    parent?: {
        slug: string;
        SEO: { title: string };
        parent?: { slug: string; SEO: { title: string }; parent?: { slug: string; SEO: { title: string } } };
    };
    content: {
        __typename: 'ComponentComponentsArticle';
        id: string;
        author?: {
            name: string;
            position?: string;
            avatar: Array<{ url: string; alternativeText?: string; width?: number; height?: number; name: string }>;
        };
        category?: { documentId: string; slug: string; name: string };
    };
};

export type ArticleFragment = {
    documentId: string;
    slug: string;
    locale?: string;
    createdAt?: any;
    updatedAt?: any;
    publishedAt?: any;
    content: {
        __typename: 'ComponentComponentsArticle';
        id: string;
        sections: Array<{ __typename: 'ComponentContentArticleSection'; id: string; title?: string; content: string }>;
        author?: {
            name: string;
            position?: string;
            avatar: Array<{ url: string; alternativeText?: string; width?: number; height?: number; name: string }>;
        };
        category?: { documentId: string; slug: string; name: string };
    };
    permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any };
    SEO: {
        title: string;
        noIndex: boolean;
        noFollow: boolean;
        description: string;
        keywords?: Array<{ keyword: string }>;
        image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    };
    parent?: {
        slug: string;
        SEO: { title: string };
        parent?: { slug: string; SEO: { title: string }; parent?: { slug: string; SEO: { title: string } } };
    };
};

export type CategoryFragment = {
    __typename: 'Category';
    documentId: string;
    slug: string;
    createdAt?: any;
    updatedAt?: any;
    name: string;
    description: string;
    icon: string;
    parent?: { slug: string; SEO: { title: string } };
};

export type GetArticleQueryVariables = Exact<{
    slug: Scalars['String']['input'];
    locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GetArticleQuery = {
    articles: Array<{
        documentId: string;
        slug: string;
        locale?: string;
        createdAt?: any;
        updatedAt?: any;
        publishedAt?: any;
        content: {
            __typename: 'ComponentComponentsArticle';
            id: string;
            sections: Array<{
                __typename: 'ComponentContentArticleSection';
                id: string;
                title?: string;
                content: string;
            }>;
            author?: {
                name: string;
                position?: string;
                avatar: Array<{ url: string; alternativeText?: string; width?: number; height?: number; name: string }>;
            };
            category?: { documentId: string; slug: string; name: string };
        };
        permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any };
        SEO: {
            title: string;
            noIndex: boolean;
            noFollow: boolean;
            description: string;
            keywords?: Array<{ keyword: string }>;
            image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
        };
        parent?: {
            slug: string;
            SEO: { title: string };
            parent?: { slug: string; SEO: { title: string }; parent?: { slug: string; SEO: { title: string } } };
        };
    }>;
};

export type GetArticlesQueryVariables = Exact<{
    locale: Scalars['I18NLocaleCode']['input'];
    slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
    category?: InputMaybe<Scalars['String']['input']>;
    dateFrom?: InputMaybe<Scalars['DateTime']['input']>;
    dateTo?: InputMaybe<Scalars['DateTime']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;

export type GetArticlesQuery = {
    articles_connection?: { pageInfo: { total: number } };
    articles: Array<{
        documentId: string;
        slug: string;
        locale?: string;
        createdAt?: any;
        updatedAt?: any;
        publishedAt?: any;
        permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any };
        SEO: {
            title: string;
            noIndex: boolean;
            noFollow: boolean;
            description: string;
            keywords?: Array<{ keyword: string }>;
            image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
        };
        parent?: {
            slug: string;
            SEO: { title: string };
            parent?: { slug: string; SEO: { title: string }; parent?: { slug: string; SEO: { title: string } } };
        };
        content: {
            __typename: 'ComponentComponentsArticle';
            id: string;
            author?: {
                name: string;
                position?: string;
                avatar: Array<{ url: string; alternativeText?: string; width?: number; height?: number; name: string }>;
            };
            category?: { documentId: string; slug: string; name: string };
        };
    }>;
};

export type GetCategoriesQueryVariables = Exact<{
    id?: InputMaybe<Scalars['String']['input']>;
    locale: Scalars['I18NLocaleCode']['input'];
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetCategoriesQuery = {
    categories_connection?: { pageInfo: { total: number } };
    categories: Array<{
        __typename: 'Category';
        documentId: string;
        slug: string;
        createdAt?: any;
        updatedAt?: any;
        name: string;
        description: string;
        icon: string;
        parent?: { slug: string; SEO: { title: string } };
    }>;
};

export type AppConfigFragment = {
    documentId: string;
    header?: { documentId: string };
    footer?: { documentId: string };
};

export type ComponentFragment = {
    __typename: 'Component';
    documentId: string;
    layout: {
        spacing: Enum_Componentlayoutsection_Spacing;
        background: Enum_Componentlayoutsection_Background;
        variant: Enum_Componentlayoutsection_Variant;
    };
    content: Array<
        | { __typename: 'ComponentComponentsArticle' }
        | { __typename: 'ComponentComponentsArticleList' }
        | { __typename: 'ComponentComponentsArticleSearch' }
        | { __typename: 'ComponentComponentsBentoGrid' }
        | { __typename: 'ComponentComponentsCategory' }
        | { __typename: 'ComponentComponentsCategoryList' }
        | { __typename: 'ComponentComponentsCtaSection' }
        | { __typename: 'ComponentComponentsDocumentList' }
        | { __typename: 'ComponentComponentsFaq' }
        | { __typename: 'ComponentComponentsFeatureSection' }
        | { __typename: 'ComponentComponentsFeatureSectionGrid' }
        | { __typename: 'ComponentComponentsHeroSection' }
        | { __typename: 'ComponentComponentsMediaSection' }
        | { __typename: 'ComponentComponentsPricingSection' }
        | { __typename: 'ComponentComponentsQuickLinks' }
        | { __typename: 'Error' }
    >;
};

export type FooterFragment = {
    documentId: string;
    title: string;
    copyright: string;
    logo: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    items: Array<
        | {
              __typename: 'ComponentContentNavigationGroup';
              title: string;
              items: Array<{
                  __typename: 'ComponentContentNavigationItem';
                  id: string;
                  url?: string;
                  label: string;
                  description?: string;
                  page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
              }>;
          }
        | {
              __typename: 'ComponentContentNavigationItem';
              id: string;
              url?: string;
              label: string;
              description?: string;
              page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
          }
        | {}
    >;
};

export type HeaderFragment = {
    documentId: string;
    title: string;
    showContextSwitcher?: boolean;
    languageSwitcherLabel: string;
    openMobileMenuLabel: string;
    closeMobileMenuLabel: string;
    logo: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    items: Array<
        | {
              __typename: 'ComponentContentNavigationGroup';
              title: string;
              items: Array<{
                  __typename: 'ComponentContentNavigationItem';
                  id: string;
                  url?: string;
                  label: string;
                  description?: string;
                  page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
              }>;
          }
        | {
              __typename: 'ComponentContentNavigationItem';
              id: string;
              url?: string;
              label: string;
              description?: string;
              page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
          }
        | {}
    >;
    notification?: { slug: string; SEO: { title: string } };
    userInfo?: { slug: string; SEO: { title: string } };
};

export type NotFoundPageFragment = {
    title: string;
    description: string;
    url?: string;
    urlLabel: string;
    page?: { slug: string };
};

export type PageFragment = {
    documentId: string;
    slug: string;
    locale?: string;
    createdAt?: any;
    updatedAt?: any;
    publishedAt?: any;
    hasOwnTitle: boolean;
    showBreadcrumbs: boolean;
    permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any };
    SEO: {
        title: string;
        noIndex: boolean;
        noFollow: boolean;
        description: string;
        keywords?: Array<{ keyword: string }>;
        image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    };
    parent?: {
        slug: string;
        SEO: { title: string };
        parent?: { slug: string; SEO: { title: string }; parent?: { slug: string; SEO: { title: string } } };
    };
    template: Array<
        | {
              __typename: 'ComponentTemplatesOneColumn';
              mainSlot: Array<{
                  __typename: 'Component';
                  documentId: string;
                  layout: {
                      spacing: Enum_Componentlayoutsection_Spacing;
                      background: Enum_Componentlayoutsection_Background;
                      variant: Enum_Componentlayoutsection_Variant;
                  };
                  content: Array<
                      | { __typename: 'ComponentComponentsArticle' }
                      | { __typename: 'ComponentComponentsArticleList' }
                      | { __typename: 'ComponentComponentsArticleSearch' }
                      | { __typename: 'ComponentComponentsBentoGrid' }
                      | { __typename: 'ComponentComponentsCategory' }
                      | { __typename: 'ComponentComponentsCategoryList' }
                      | { __typename: 'ComponentComponentsCtaSection' }
                      | { __typename: 'ComponentComponentsDocumentList' }
                      | { __typename: 'ComponentComponentsFaq' }
                      | { __typename: 'ComponentComponentsFeatureSection' }
                      | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                      | { __typename: 'ComponentComponentsHeroSection' }
                      | { __typename: 'ComponentComponentsMediaSection' }
                      | { __typename: 'ComponentComponentsPricingSection' }
                      | { __typename: 'ComponentComponentsQuickLinks' }
                      | { __typename: 'Error' }
                  >;
              }>;
          }
        | {
              __typename: 'ComponentTemplatesTwoColumn';
              topSlot: Array<{
                  __typename: 'Component';
                  documentId: string;
                  layout: {
                      spacing: Enum_Componentlayoutsection_Spacing;
                      background: Enum_Componentlayoutsection_Background;
                      variant: Enum_Componentlayoutsection_Variant;
                  };
                  content: Array<
                      | { __typename: 'ComponentComponentsArticle' }
                      | { __typename: 'ComponentComponentsArticleList' }
                      | { __typename: 'ComponentComponentsArticleSearch' }
                      | { __typename: 'ComponentComponentsBentoGrid' }
                      | { __typename: 'ComponentComponentsCategory' }
                      | { __typename: 'ComponentComponentsCategoryList' }
                      | { __typename: 'ComponentComponentsCtaSection' }
                      | { __typename: 'ComponentComponentsDocumentList' }
                      | { __typename: 'ComponentComponentsFaq' }
                      | { __typename: 'ComponentComponentsFeatureSection' }
                      | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                      | { __typename: 'ComponentComponentsHeroSection' }
                      | { __typename: 'ComponentComponentsMediaSection' }
                      | { __typename: 'ComponentComponentsPricingSection' }
                      | { __typename: 'ComponentComponentsQuickLinks' }
                      | { __typename: 'Error' }
                  >;
              }>;
              leftSlot: Array<{
                  __typename: 'Component';
                  documentId: string;
                  layout: {
                      spacing: Enum_Componentlayoutsection_Spacing;
                      background: Enum_Componentlayoutsection_Background;
                      variant: Enum_Componentlayoutsection_Variant;
                  };
                  content: Array<
                      | { __typename: 'ComponentComponentsArticle' }
                      | { __typename: 'ComponentComponentsArticleList' }
                      | { __typename: 'ComponentComponentsArticleSearch' }
                      | { __typename: 'ComponentComponentsBentoGrid' }
                      | { __typename: 'ComponentComponentsCategory' }
                      | { __typename: 'ComponentComponentsCategoryList' }
                      | { __typename: 'ComponentComponentsCtaSection' }
                      | { __typename: 'ComponentComponentsDocumentList' }
                      | { __typename: 'ComponentComponentsFaq' }
                      | { __typename: 'ComponentComponentsFeatureSection' }
                      | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                      | { __typename: 'ComponentComponentsHeroSection' }
                      | { __typename: 'ComponentComponentsMediaSection' }
                      | { __typename: 'ComponentComponentsPricingSection' }
                      | { __typename: 'ComponentComponentsQuickLinks' }
                      | { __typename: 'Error' }
                  >;
              }>;
              rightSlot: Array<{
                  __typename: 'Component';
                  documentId: string;
                  layout: {
                      spacing: Enum_Componentlayoutsection_Spacing;
                      background: Enum_Componentlayoutsection_Background;
                      variant: Enum_Componentlayoutsection_Variant;
                  };
                  content: Array<
                      | { __typename: 'ComponentComponentsArticle' }
                      | { __typename: 'ComponentComponentsArticleList' }
                      | { __typename: 'ComponentComponentsArticleSearch' }
                      | { __typename: 'ComponentComponentsBentoGrid' }
                      | { __typename: 'ComponentComponentsCategory' }
                      | { __typename: 'ComponentComponentsCategoryList' }
                      | { __typename: 'ComponentComponentsCtaSection' }
                      | { __typename: 'ComponentComponentsDocumentList' }
                      | { __typename: 'ComponentComponentsFaq' }
                      | { __typename: 'ComponentComponentsFeatureSection' }
                      | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                      | { __typename: 'ComponentComponentsHeroSection' }
                      | { __typename: 'ComponentComponentsMediaSection' }
                      | { __typename: 'ComponentComponentsPricingSection' }
                      | { __typename: 'ComponentComponentsQuickLinks' }
                      | { __typename: 'Error' }
                  >;
              }>;
              bottomSlot: Array<{
                  __typename: 'Component';
                  documentId: string;
                  layout: {
                      spacing: Enum_Componentlayoutsection_Spacing;
                      background: Enum_Componentlayoutsection_Background;
                      variant: Enum_Componentlayoutsection_Variant;
                  };
                  content: Array<
                      | { __typename: 'ComponentComponentsArticle' }
                      | { __typename: 'ComponentComponentsArticleList' }
                      | { __typename: 'ComponentComponentsArticleSearch' }
                      | { __typename: 'ComponentComponentsBentoGrid' }
                      | { __typename: 'ComponentComponentsCategory' }
                      | { __typename: 'ComponentComponentsCategoryList' }
                      | { __typename: 'ComponentComponentsCtaSection' }
                      | { __typename: 'ComponentComponentsDocumentList' }
                      | { __typename: 'ComponentComponentsFaq' }
                      | { __typename: 'ComponentComponentsFeatureSection' }
                      | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                      | { __typename: 'ComponentComponentsHeroSection' }
                      | { __typename: 'ComponentComponentsMediaSection' }
                      | { __typename: 'ComponentComponentsPricingSection' }
                      | { __typename: 'ComponentComponentsQuickLinks' }
                      | { __typename: 'Error' }
                  >;
              }>;
          }
        | { __typename: 'Error' }
    >;
};

export type RolesFragment = { __typename: 'ComponentSeoUserRoles'; roles?: any };

type Template_ComponentTemplatesOneColumn_Fragment = {
    __typename: 'ComponentTemplatesOneColumn';
    mainSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
};

type Template_ComponentTemplatesTwoColumn_Fragment = {
    __typename: 'ComponentTemplatesTwoColumn';
    topSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
    leftSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
    rightSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
    bottomSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
};

type Template_Error_Fragment = { __typename: 'Error' };

export type TemplateFragment =
    | Template_ComponentTemplatesOneColumn_Fragment
    | Template_ComponentTemplatesTwoColumn_Fragment
    | Template_Error_Fragment;

export type ArticleListComponentFragment = {
    __typename: 'ComponentComponentsArticleList';
    id: string;
    title?: string;
    description?: string;
    articles_to_show?: number;
    pages: Array<{ slug: string }>;
    category?: { slug: string };
    parent?: { slug: string };
};

export type ArticleSearchComponentFragment = {
    __typename: 'ComponentComponentsArticleSearch';
    id: string;
    title?: string;
    inputLabel?: string;
    noResults: { title: string; description?: string };
};

export type BentoGridComponentFragment = {
    __typename: 'ComponentComponentsBentoGrid';
    id: string;
    preTitle?: string;
    title?: string;
    description?: string;
    items?: Array<{
        title?: string;
        description?: string;
        image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
        link?: {
            label: string;
            url?: string;
            description?: string;
            icon?: string;
            variant?: Enum_Componentcontentlink_Variant;
            page?: { slug: string; SEO: { title: string; description: string } };
        };
    }>;
};

export type CategoryComponentFragment = {
    __typename: 'ComponentComponentsCategory';
    id: string;
    category?: {
        slug: string;
        name: string;
        description: string;
        components: Array<{
            __typename: 'Component';
            documentId: string;
            layout: {
                spacing: Enum_Componentlayoutsection_Spacing;
                background: Enum_Componentlayoutsection_Background;
                variant: Enum_Componentlayoutsection_Variant;
            };
            content: Array<
                | { __typename: 'ComponentComponentsArticle' }
                | { __typename: 'ComponentComponentsArticleList' }
                | { __typename: 'ComponentComponentsArticleSearch' }
                | { __typename: 'ComponentComponentsBentoGrid' }
                | { __typename: 'ComponentComponentsCategory' }
                | { __typename: 'ComponentComponentsCategoryList' }
                | { __typename: 'ComponentComponentsCtaSection' }
                | { __typename: 'ComponentComponentsDocumentList' }
                | { __typename: 'ComponentComponentsFaq' }
                | { __typename: 'ComponentComponentsFeatureSection' }
                | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                | { __typename: 'ComponentComponentsHeroSection' }
                | { __typename: 'ComponentComponentsMediaSection' }
                | { __typename: 'ComponentComponentsPricingSection' }
                | { __typename: 'ComponentComponentsQuickLinks' }
                | { __typename: 'Error' }
            >;
        }>;
    };
    parent?: { slug: string };
};

export type CategoryListComponentFragment = {
    __typename: 'ComponentComponentsCategoryList';
    id: string;
    title?: string;
    description?: string;
    categories: Array<{ slug: string }>;
    parent?: { slug: string };
};

export type CtaSectionComponentFragment = {
    __typename: 'ComponentComponentsCtaSection';
    id: string;
    preTitle?: string;
    title?: string;
    description?: string;
    inverted: boolean;
    image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    links?: Array<{
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    }>;
};

export type FaqComponentFragment = {
    __typename: 'ComponentComponentsFaq';
    id: string;
    title?: string;
    preTitle?: string;
    description?: string;
    oneColumn: boolean;
    sections?: Array<{ title?: string; items: Array<{ title: string; description: string }> }>;
    banner?: {
        title: string;
        description?: string;
        altDescription?: string;
        link?: {
            label: string;
            url?: string;
            description?: string;
            icon?: string;
            variant?: Enum_Componentcontentlink_Variant;
            page?: { slug: string; SEO: { title: string; description: string } };
        };
    };
};

export type FeatureSectionComponentFragment = {
    __typename: 'ComponentComponentsFeatureSection';
    id: string;
    preTitle?: string;
    title?: string;
    description?: string;
    inverted: boolean;
    iconBorder: boolean;
    featureList?: Array<{ title?: string; description?: string; icon?: string }>;
    image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    links?: Array<{
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    }>;
};

export type FeatureSectionGridComponentFragment = {
    __typename: 'ComponentComponentsFeatureSectionGrid';
    id: string;
    preTitle?: string;
    title?: string;
    description?: string;
    inverted: boolean;
    iconBorder: boolean;
    featureList?: Array<{ title?: string; description?: string; icon?: string }>;
};

export type HeroSectionComponentFragment = {
    __typename: 'ComponentComponentsHeroSection';
    id: string;
    preTitle?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    highlightedText?: string;
    inverted: boolean;
    headingType?: Enum_Componentcomponentsherosection_Headingtype;
    image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    links?: Array<{
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    }>;
};

export type MediaSectionComponentFragment = {
    __typename: 'ComponentComponentsMediaSection';
    id: string;
    preTitle?: string;
    title?: string;
    description?: string;
    media?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    links?: Array<{
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    }>;
};

export type PricingSectionComponentFragment = {
    __typename: 'ComponentComponentsPricingSection';
    id: string;
    title?: string;
    subtitle?: string;
    description?: string;
    headingTypePricing: Enum_Componentcomponentspricingsection_Headingtype;
    pricingList?: Array<{
        title: string;
        description?: string;
        isPromoted: boolean;
        featureListTitle?: string;
        image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
        price?: { value?: number; currency: Enum_Componentcontentprice_Currency; period?: string };
        tags?: Array<{ label?: string; variant: Enum_Componentcontentbadge_Variant }>;
        links?: Array<{
            label: string;
            url?: string;
            description?: string;
            icon?: string;
            variant?: Enum_Componentcontentlink_Variant;
            page?: { slug: string; SEO: { title: string; description: string } };
        }>;
        featureList?: Array<{ title?: string; description?: string; icon?: string }>;
    }>;
};

export type QuickLinksComponentFragment = {
    __typename: 'ComponentComponentsQuickLinks';
    id: string;
    preTitle?: string;
    title?: string;
    description?: string;
    quickLinks: Array<{
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    }>;
};

export type BadgeFragment = { label?: string; variant: Enum_Componentcontentbadge_Variant };

export type BannerFragment = {
    title: string;
    description?: string;
    altDescription?: string;
    link?: {
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    };
};

export type CardWithImageFragment = {
    title?: string;
    description?: string;
    image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    link?: {
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    };
};

export type FeatureItemFragment = { title?: string; description?: string; icon?: string };

export type InformationCardFragment = {
    title: string;
    icon?: string;
    message?: string;
    altMessage?: string;
    link?: {
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    };
};

export type LinkFragment = {
    label: string;
    url?: string;
    description?: string;
    icon?: string;
    variant?: Enum_Componentcontentlink_Variant;
    page?: { slug: string; SEO: { title: string; description: string } };
};

export type MediaFragment = { url: string; alternativeText?: string; width?: number; height?: number; name: string };

export type NavigationGroupFragment = {
    __typename: 'ComponentContentNavigationGroup';
    title: string;
    items: Array<{
        __typename: 'ComponentContentNavigationItem';
        id: string;
        url?: string;
        label: string;
        description?: string;
        page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
    }>;
};

export type NavigationItemFragment = {
    __typename: 'ComponentContentNavigationItem';
    id: string;
    url?: string;
    label: string;
    description?: string;
    page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
};

export type PriceFragment = { value?: number; currency: Enum_Componentcontentprice_Currency; period?: string };

export type PricingCardFragment = {
    title: string;
    description?: string;
    isPromoted: boolean;
    featureListTitle?: string;
    image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    price?: { value?: number; currency: Enum_Componentcontentprice_Currency; period?: string };
    tags?: Array<{ label?: string; variant: Enum_Componentcontentbadge_Variant }>;
    links?: Array<{
        label: string;
        url?: string;
        description?: string;
        icon?: string;
        variant?: Enum_Componentcontentlink_Variant;
        page?: { slug: string; SEO: { title: string; description: string } };
    }>;
    featureList?: Array<{ title?: string; description?: string; icon?: string }>;
};

export type SeoFragment = {
    title: string;
    noIndex: boolean;
    noFollow: boolean;
    description: string;
    keywords?: Array<{ keyword: string }>;
    image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
};

export type LayoutSectionFragment = {
    spacing: Enum_Componentlayoutsection_Spacing;
    background: Enum_Componentlayoutsection_Background;
    variant: Enum_Componentlayoutsection_Variant;
};

export type OneColumnTemplateFragment = {
    mainSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
};

export type TwoColumnTemplateFragment = {
    topSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
    leftSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
    rightSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
    bottomSlot: Array<{
        __typename: 'Component';
        documentId: string;
        layout: {
            spacing: Enum_Componentlayoutsection_Spacing;
            background: Enum_Componentlayoutsection_Background;
            variant: Enum_Componentlayoutsection_Variant;
        };
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | { __typename: 'ComponentComponentsArticleList' }
            | { __typename: 'ComponentComponentsArticleSearch' }
            | { __typename: 'ComponentComponentsBentoGrid' }
            | { __typename: 'ComponentComponentsCategory' }
            | { __typename: 'ComponentComponentsCategoryList' }
            | { __typename: 'ComponentComponentsCtaSection' }
            | { __typename: 'ComponentComponentsDocumentList' }
            | { __typename: 'ComponentComponentsFaq' }
            | { __typename: 'ComponentComponentsFeatureSection' }
            | { __typename: 'ComponentComponentsFeatureSectionGrid' }
            | { __typename: 'ComponentComponentsHeroSection' }
            | { __typename: 'ComponentComponentsMediaSection' }
            | { __typename: 'ComponentComponentsPricingSection' }
            | { __typename: 'ComponentComponentsQuickLinks' }
            | { __typename: 'Error' }
        >;
    }>;
};

export type GetAppConfigQueryVariables = Exact<{
    locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GetAppConfigQuery = {
    appConfig?: { documentId: string; header?: { documentId: string }; footer?: { documentId: string } };
    configurableTexts?: {
        errors: { requestError: { title: string; content?: string } };
        dates: { today: string; yesterday: string };
        actions: {
            showMore: string;
            showLess: string;
            show: string;
            hide: string;
            edit: string;
            save: string;
            cancel: string;
            delete: string;
            logOut: string;
            settings: string;
            renew: string;
            details: string;
        };
    };
    i18NLocales: Array<{ code?: string }>;
};

export type GetComponentQueryVariables = Exact<{
    id: Scalars['ID']['input'];
    locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GetComponentQuery = {
    component?: {
        name: string;
        content: Array<
            | { __typename: 'ComponentComponentsArticle' }
            | {
                  __typename: 'ComponentComponentsArticleList';
                  id: string;
                  title?: string;
                  description?: string;
                  articles_to_show?: number;
                  pages: Array<{ slug: string }>;
                  category?: { slug: string };
                  parent?: { slug: string };
              }
            | {
                  __typename: 'ComponentComponentsArticleSearch';
                  id: string;
                  title?: string;
                  inputLabel?: string;
                  noResults: { title: string; description?: string };
              }
            | {
                  __typename: 'ComponentComponentsBentoGrid';
                  id: string;
                  preTitle?: string;
                  title?: string;
                  description?: string;
                  items?: Array<{
                      title?: string;
                      description?: string;
                      image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
                      link?: {
                          label: string;
                          url?: string;
                          description?: string;
                          icon?: string;
                          variant?: Enum_Componentcontentlink_Variant;
                          page?: { slug: string; SEO: { title: string; description: string } };
                      };
                  }>;
              }
            | {
                  __typename: 'ComponentComponentsCategory';
                  id: string;
                  category?: {
                      slug: string;
                      name: string;
                      description: string;
                      components: Array<{
                          __typename: 'Component';
                          documentId: string;
                          layout: {
                              spacing: Enum_Componentlayoutsection_Spacing;
                              background: Enum_Componentlayoutsection_Background;
                              variant: Enum_Componentlayoutsection_Variant;
                          };
                          content: Array<
                              | { __typename: 'ComponentComponentsArticle' }
                              | { __typename: 'ComponentComponentsArticleList' }
                              | { __typename: 'ComponentComponentsArticleSearch' }
                              | { __typename: 'ComponentComponentsBentoGrid' }
                              | { __typename: 'ComponentComponentsCategory' }
                              | { __typename: 'ComponentComponentsCategoryList' }
                              | { __typename: 'ComponentComponentsCtaSection' }
                              | { __typename: 'ComponentComponentsDocumentList' }
                              | { __typename: 'ComponentComponentsFaq' }
                              | { __typename: 'ComponentComponentsFeatureSection' }
                              | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                              | { __typename: 'ComponentComponentsHeroSection' }
                              | { __typename: 'ComponentComponentsMediaSection' }
                              | { __typename: 'ComponentComponentsPricingSection' }
                              | { __typename: 'ComponentComponentsQuickLinks' }
                              | { __typename: 'Error' }
                          >;
                      }>;
                  };
                  parent?: { slug: string };
              }
            | {
                  __typename: 'ComponentComponentsCategoryList';
                  id: string;
                  title?: string;
                  description?: string;
                  categories: Array<{ slug: string }>;
                  parent?: { slug: string };
              }
            | {
                  __typename: 'ComponentComponentsCtaSection';
                  id: string;
                  preTitle?: string;
                  title?: string;
                  description?: string;
                  inverted: boolean;
                  image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
                  links?: Array<{
                      label: string;
                      url?: string;
                      description?: string;
                      icon?: string;
                      variant?: Enum_Componentcontentlink_Variant;
                      page?: { slug: string; SEO: { title: string; description: string } };
                  }>;
              }
            | { __typename: 'ComponentComponentsDocumentList' }
            | {
                  __typename: 'ComponentComponentsFaq';
                  id: string;
                  title?: string;
                  preTitle?: string;
                  description?: string;
                  oneColumn: boolean;
                  sections?: Array<{ title?: string; items: Array<{ title: string; description: string }> }>;
                  banner?: {
                      title: string;
                      description?: string;
                      altDescription?: string;
                      link?: {
                          label: string;
                          url?: string;
                          description?: string;
                          icon?: string;
                          variant?: Enum_Componentcontentlink_Variant;
                          page?: { slug: string; SEO: { title: string; description: string } };
                      };
                  };
              }
            | {
                  __typename: 'ComponentComponentsFeatureSection';
                  id: string;
                  preTitle?: string;
                  title?: string;
                  description?: string;
                  inverted: boolean;
                  iconBorder: boolean;
                  featureList?: Array<{ title?: string; description?: string; icon?: string }>;
                  image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
                  links?: Array<{
                      label: string;
                      url?: string;
                      description?: string;
                      icon?: string;
                      variant?: Enum_Componentcontentlink_Variant;
                      page?: { slug: string; SEO: { title: string; description: string } };
                  }>;
              }
            | {
                  __typename: 'ComponentComponentsFeatureSectionGrid';
                  id: string;
                  preTitle?: string;
                  title?: string;
                  description?: string;
                  inverted: boolean;
                  iconBorder: boolean;
                  featureList?: Array<{ title?: string; description?: string; icon?: string }>;
              }
            | {
                  __typename: 'ComponentComponentsHeroSection';
                  id: string;
                  preTitle?: string;
                  title?: string;
                  subtitle?: string;
                  description?: string;
                  highlightedText?: string;
                  inverted: boolean;
                  headingType?: Enum_Componentcomponentsherosection_Headingtype;
                  image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
                  links?: Array<{
                      label: string;
                      url?: string;
                      description?: string;
                      icon?: string;
                      variant?: Enum_Componentcontentlink_Variant;
                      page?: { slug: string; SEO: { title: string; description: string } };
                  }>;
              }
            | {
                  __typename: 'ComponentComponentsMediaSection';
                  id: string;
                  preTitle?: string;
                  title?: string;
                  description?: string;
                  media?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
                  links?: Array<{
                      label: string;
                      url?: string;
                      description?: string;
                      icon?: string;
                      variant?: Enum_Componentcontentlink_Variant;
                      page?: { slug: string; SEO: { title: string; description: string } };
                  }>;
              }
            | {
                  __typename: 'ComponentComponentsPricingSection';
                  id: string;
                  title?: string;
                  subtitle?: string;
                  description?: string;
                  headingTypePricing: Enum_Componentcomponentspricingsection_Headingtype;
                  pricingList?: Array<{
                      title: string;
                      description?: string;
                      isPromoted: boolean;
                      featureListTitle?: string;
                      image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
                      price?: { value?: number; currency: Enum_Componentcontentprice_Currency; period?: string };
                      tags?: Array<{ label?: string; variant: Enum_Componentcontentbadge_Variant }>;
                      links?: Array<{
                          label: string;
                          url?: string;
                          description?: string;
                          icon?: string;
                          variant?: Enum_Componentcontentlink_Variant;
                          page?: { slug: string; SEO: { title: string; description: string } };
                      }>;
                      featureList?: Array<{ title?: string; description?: string; icon?: string }>;
                  }>;
              }
            | {
                  __typename: 'ComponentComponentsQuickLinks';
                  id: string;
                  preTitle?: string;
                  title?: string;
                  description?: string;
                  quickLinks: Array<{
                      label: string;
                      url?: string;
                      description?: string;
                      icon?: string;
                      variant?: Enum_Componentcontentlink_Variant;
                      page?: { slug: string; SEO: { title: string; description: string } };
                  }>;
              }
            | { __typename: 'Error' }
        >;
    };
    configurableTexts?: {
        dates: { today: string; yesterday: string };
        actions: {
            showMore: string;
            showLess: string;
            show: string;
            hide: string;
            edit: string;
            save: string;
            cancel: string;
            delete: string;
            logOut: string;
            settings: string;
            renew: string;
            details: string;
            reorder: string;
            clickToSelect: string;
            payOnline: string;
            close: string;
            trackOrder: string;
            showAllArticles: string;
            on: string;
            off: string;
        };
        errors: { requestError: { title: string; content?: string } };
        media: { play: string; pause: string; mute: string; unmute: string };
    };
};

export type GetFooterQueryVariables = Exact<{
    locale: Scalars['I18NLocaleCode']['input'];
    id: Scalars['ID']['input'];
}>;

export type GetFooterQuery = {
    footer?: {
        documentId: string;
        title: string;
        copyright: string;
        logo: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
        items: Array<
            | {
                  __typename: 'ComponentContentNavigationGroup';
                  title: string;
                  items: Array<{
                      __typename: 'ComponentContentNavigationItem';
                      id: string;
                      url?: string;
                      label: string;
                      description?: string;
                      page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
                  }>;
              }
            | {
                  __typename: 'ComponentContentNavigationItem';
                  id: string;
                  url?: string;
                  label: string;
                  description?: string;
                  page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
              }
            | {}
        >;
    };
};

export type GetHeaderQueryVariables = Exact<{
    locale: Scalars['I18NLocaleCode']['input'];
    id: Scalars['ID']['input'];
}>;

export type GetHeaderQuery = {
    header?: {
        documentId: string;
        title: string;
        showContextSwitcher?: boolean;
        languageSwitcherLabel: string;
        openMobileMenuLabel: string;
        closeMobileMenuLabel: string;
        logo: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
        items: Array<
            | {
                  __typename: 'ComponentContentNavigationGroup';
                  title: string;
                  items: Array<{
                      __typename: 'ComponentContentNavigationItem';
                      id: string;
                      url?: string;
                      label: string;
                      description?: string;
                      page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
                  }>;
              }
            | {
                  __typename: 'ComponentContentNavigationItem';
                  id: string;
                  url?: string;
                  label: string;
                  description?: string;
                  page?: { slug: string; permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any } };
              }
            | {}
        >;
        notification?: { slug: string; SEO: { title: string } };
        userInfo?: { slug: string; SEO: { title: string } };
    };
    configurableTexts?: { actions: { close: string } };
};

export type GetLocalesQueryVariables = Exact<{ [key: string]: never }>;

export type GetLocalesQuery = { i18NLocales: Array<{ code?: string }> };

export type GetNotFoundPageQueryVariables = Exact<{
    locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GetNotFoundPageQuery = {
    notFoundPage?: { title: string; description: string; url?: string; urlLabel: string; page?: { slug: string } };
};

export type GetPageQueryVariables = Exact<{
    slug: Scalars['String']['input'];
    locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GetPageQuery = {
    pages: Array<{
        documentId: string;
        slug: string;
        locale?: string;
        createdAt?: any;
        updatedAt?: any;
        publishedAt?: any;
        hasOwnTitle: boolean;
        showBreadcrumbs: boolean;
        permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any };
        SEO: {
            title: string;
            noIndex: boolean;
            noFollow: boolean;
            description: string;
            keywords?: Array<{ keyword: string }>;
            image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
        };
        parent?: {
            slug: string;
            SEO: { title: string };
            parent?: { slug: string; SEO: { title: string }; parent?: { slug: string; SEO: { title: string } } };
        };
        template: Array<
            | {
                  __typename: 'ComponentTemplatesOneColumn';
                  mainSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
              }
            | {
                  __typename: 'ComponentTemplatesTwoColumn';
                  topSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
                  leftSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
                  rightSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
                  bottomSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
              }
            | { __typename: 'Error' }
        >;
    }>;
};

export type GetPagesQueryVariables = Exact<{
    locale: Scalars['I18NLocaleCode']['input'];
}>;

export type GetPagesQuery = {
    pages: Array<{
        documentId: string;
        slug: string;
        locale?: string;
        createdAt?: any;
        updatedAt?: any;
        publishedAt?: any;
        hasOwnTitle: boolean;
        showBreadcrumbs: boolean;
        permissions?: { __typename: 'ComponentSeoUserRoles'; roles?: any };
        SEO: {
            title: string;
            noIndex: boolean;
            noFollow: boolean;
            description: string;
            keywords?: Array<{ keyword: string }>;
            image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
        };
        parent?: {
            slug: string;
            SEO: { title: string };
            parent?: { slug: string; SEO: { title: string }; parent?: { slug: string; SEO: { title: string } } };
        };
        template: Array<
            | {
                  __typename: 'ComponentTemplatesOneColumn';
                  mainSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
              }
            | {
                  __typename: 'ComponentTemplatesTwoColumn';
                  topSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
                  leftSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
                  rightSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
                  bottomSlot: Array<{
                      __typename: 'Component';
                      documentId: string;
                      layout: {
                          spacing: Enum_Componentlayoutsection_Spacing;
                          background: Enum_Componentlayoutsection_Background;
                          variant: Enum_Componentlayoutsection_Variant;
                      };
                      content: Array<
                          | { __typename: 'ComponentComponentsArticle' }
                          | { __typename: 'ComponentComponentsArticleList' }
                          | { __typename: 'ComponentComponentsArticleSearch' }
                          | { __typename: 'ComponentComponentsBentoGrid' }
                          | { __typename: 'ComponentComponentsCategory' }
                          | { __typename: 'ComponentComponentsCategoryList' }
                          | { __typename: 'ComponentComponentsCtaSection' }
                          | { __typename: 'ComponentComponentsDocumentList' }
                          | { __typename: 'ComponentComponentsFaq' }
                          | { __typename: 'ComponentComponentsFeatureSection' }
                          | { __typename: 'ComponentComponentsFeatureSectionGrid' }
                          | { __typename: 'ComponentComponentsHeroSection' }
                          | { __typename: 'ComponentComponentsMediaSection' }
                          | { __typename: 'ComponentComponentsPricingSection' }
                          | { __typename: 'ComponentComponentsQuickLinks' }
                          | { __typename: 'Error' }
                      >;
                  }>;
              }
            | { __typename: 'Error' }
        >;
    }>;
};

export const RolesFragmentDoc = gql`
    fragment Roles on ComponentSeoUserRoles {
        __typename
        roles
    }
`;
export const MediaFragmentDoc = gql`
    fragment Media on UploadFile {
        url
        alternativeText
        width
        height
        name
    }
`;
export const SeoFragmentDoc = gql`
    fragment Seo on ComponentSeoSeo {
        title
        noIndex
        noFollow
        description
        keywords {
            keyword
        }
        image {
            ...Media
        }
    }
    ${MediaFragmentDoc}
`;
export const ArticleSimpleFragmentDoc = gql`
    fragment ArticleSimple on Article {
        documentId
        slug
        permissions {
            ...Roles
        }
        locale
        createdAt
        updatedAt
        publishedAt
        documentId
        SEO {
            ...Seo
        }
        parent {
            slug
            SEO {
                title
            }
            parent {
                slug
                SEO {
                    title
                }
                parent {
                    slug
                    SEO {
                        title
                    }
                }
            }
        }
        content {
            id
            __typename
            author {
                name
                position
                avatar {
                    ...Media
                }
            }
            category {
                documentId
                slug
                name
            }
        }
    }
    ${RolesFragmentDoc}
    ${SeoFragmentDoc}
    ${MediaFragmentDoc}
`;
export const ArticleFragmentDoc = gql`
    fragment Article on Article {
        ...ArticleSimple
        content {
            sections {
                id
                __typename
                title
                content
            }
        }
    }
    ${ArticleSimpleFragmentDoc}
`;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
        documentId
        __typename
        slug
        createdAt
        updatedAt
        name
        description
        icon
        parent {
            slug
            SEO {
                title
            }
        }
    }
`;
export const AppConfigFragmentDoc = gql`
    fragment AppConfig on AppConfig {
        documentId
        header: signedInHeader {
            documentId
        }
        footer: signedInFooter {
            documentId
        }
    }
`;
export const NavigationItemFragmentDoc = gql`
    fragment NavigationItem on ComponentContentNavigationItem {
        __typename
        id
        url
        label
        description
        page {
            ... on Page {
                slug
                permissions {
                    ...Roles
                }
            }
        }
    }
    ${RolesFragmentDoc}
`;
export const NavigationGroupFragmentDoc = gql`
    fragment NavigationGroup on ComponentContentNavigationGroup {
        __typename
        title
        items {
            ... on ComponentContentNavigationItem {
                ...NavigationItem
            }
        }
    }
    ${NavigationItemFragmentDoc}
`;
export const FooterFragmentDoc = gql`
    fragment Footer on Footer {
        documentId
        title
        logo {
            ...Media
        }
        items {
            ... on ComponentContentNavigationGroup {
                ...NavigationGroup
            }
            ... on ComponentContentNavigationItem {
                ...NavigationItem
            }
        }
        copyright
    }
    ${MediaFragmentDoc}
    ${NavigationGroupFragmentDoc}
    ${NavigationItemFragmentDoc}
`;
export const HeaderFragmentDoc = gql`
    fragment Header on Header {
        documentId
        title
        logo {
            ...Media
        }
        items {
            ... on ComponentContentNavigationGroup {
                ...NavigationGroup
            }
            ... on ComponentContentNavigationItem {
                ...NavigationItem
            }
        }
        notification {
            slug
            SEO {
                title
            }
        }
        showContextSwitcher
        languageSwitcherLabel
        userInfo {
            slug
            SEO {
                title
            }
        }
        openMobileMenuLabel
        closeMobileMenuLabel
    }
    ${MediaFragmentDoc}
    ${NavigationGroupFragmentDoc}
    ${NavigationItemFragmentDoc}
`;
export const NotFoundPageFragmentDoc = gql`
    fragment NotFoundPage on NotFoundPage {
        title
        description
        url
        urlLabel
        page {
            slug
        }
    }
`;
export const LayoutSectionFragmentDoc = gql`
    fragment LayoutSection on ComponentLayoutSection {
        spacing
        background
        variant
    }
`;
export const ComponentFragmentDoc = gql`
    fragment Component on Component {
        __typename
        documentId
        layout {
            ...LayoutSection
        }
        content {
            __typename
        }
    }
    ${LayoutSectionFragmentDoc}
`;
export const OneColumnTemplateFragmentDoc = gql`
    fragment OneColumnTemplate on ComponentTemplatesOneColumn {
        mainSlot {
            ...Component
        }
    }
    ${ComponentFragmentDoc}
`;
export const TwoColumnTemplateFragmentDoc = gql`
    fragment TwoColumnTemplate on ComponentTemplatesTwoColumn {
        topSlot {
            ...Component
        }
        leftSlot {
            ...Component
        }
        rightSlot {
            ...Component
        }
        bottomSlot {
            ...Component
        }
    }
    ${ComponentFragmentDoc}
`;
export const PageFragmentDoc = gql`
    fragment Page on Page {
        documentId
        slug
        permissions {
            ...Roles
        }
        locale
        createdAt
        updatedAt
        publishedAt
        documentId
        hasOwnTitle
        showBreadcrumbs
        SEO {
            ...Seo
        }
        parent {
            slug
            SEO {
                title
            }
            parent {
                slug
                SEO {
                    title
                }
                parent {
                    slug
                    SEO {
                        title
                    }
                }
            }
        }
        template {
            __typename
            ... on ComponentTemplatesOneColumn {
                ...OneColumnTemplate
            }
            ... on ComponentTemplatesTwoColumn {
                ...TwoColumnTemplate
            }
        }
    }
    ${RolesFragmentDoc}
    ${SeoFragmentDoc}
    ${OneColumnTemplateFragmentDoc}
    ${TwoColumnTemplateFragmentDoc}
`;
export const TemplateFragmentDoc = gql`
    fragment Template on PageTemplateDynamicZone {
        __typename
        ... on ComponentTemplatesOneColumn {
            ...OneColumnTemplate
        }
        ... on ComponentTemplatesTwoColumn {
            ...TwoColumnTemplate
        }
    }
    ${OneColumnTemplateFragmentDoc}
    ${TwoColumnTemplateFragmentDoc}
`;
export const ArticleListComponentFragmentDoc = gql`
    fragment ArticleListComponent on ComponentComponentsArticleList {
        __typename
        id
        title
        description
        articles_to_show
        pages {
            slug
        }
        category {
            slug
        }
        parent {
            slug
        }
    }
`;
export const ArticleSearchComponentFragmentDoc = gql`
    fragment ArticleSearchComponent on ComponentComponentsArticleSearch {
        __typename
        id
        title
        inputLabel
        noResults {
            title
            description
        }
    }
`;
export const LinkFragmentDoc = gql`
    fragment Link on ComponentContentLink {
        label
        url
        page {
            slug
            SEO {
                title
                description
            }
        }
        description
        icon
        variant
    }
`;
export const CardWithImageFragmentDoc = gql`
    fragment CardWithImage on ComponentContentCardWithImage {
        title
        description
        image {
            ...Media
        }
        link {
            ...Link
        }
    }
    ${MediaFragmentDoc}
    ${LinkFragmentDoc}
`;
export const BentoGridComponentFragmentDoc = gql`
    fragment BentoGridComponent on ComponentComponentsBentoGrid {
        __typename
        id
        preTitle
        title
        description
        items {
            ...CardWithImage
        }
    }
    ${CardWithImageFragmentDoc}
`;
export const CategoryComponentFragmentDoc = gql`
    fragment CategoryComponent on ComponentComponentsCategory {
        __typename
        id
        category {
            slug
            name
            description
            components {
                ...Component
            }
        }
        parent {
            slug
        }
    }
    ${ComponentFragmentDoc}
`;
export const CategoryListComponentFragmentDoc = gql`
    fragment CategoryListComponent on ComponentComponentsCategoryList {
        __typename
        id
        title
        description
        categories {
            slug
        }
        parent {
            slug
        }
    }
`;
export const CtaSectionComponentFragmentDoc = gql`
    fragment CtaSectionComponent on ComponentComponentsCtaSection {
        __typename
        id
        preTitle
        title
        description
        inverted
        image {
            ...Media
        }
        links {
            ...Link
        }
    }
    ${MediaFragmentDoc}
    ${LinkFragmentDoc}
`;
export const BannerFragmentDoc = gql`
    fragment Banner on ComponentContentBanner {
        title
        description
        altDescription
        link {
            ...Link
        }
    }
    ${LinkFragmentDoc}
`;
export const FaqComponentFragmentDoc = gql`
    fragment FaqComponent on ComponentComponentsFaq {
        __typename
        id
        title
        preTitle
        description
        sections {
            title
            items {
                title
                description
            }
        }
        banner {
            ... on ComponentContentBanner {
                ...Banner
            }
        }
        oneColumn
    }
    ${BannerFragmentDoc}
`;
export const FeatureItemFragmentDoc = gql`
    fragment FeatureItem on ComponentContentFeatureItem {
        title
        description
        icon
    }
`;
export const FeatureSectionComponentFragmentDoc = gql`
    fragment FeatureSectionComponent on ComponentComponentsFeatureSection {
        __typename
        id
        preTitle
        title
        description
        featureList {
            ...FeatureItem
        }
        inverted
        image {
            ...Media
        }
        links {
            ...Link
        }
        iconBorder
    }
    ${FeatureItemFragmentDoc}
    ${MediaFragmentDoc}
    ${LinkFragmentDoc}
`;
export const FeatureSectionGridComponentFragmentDoc = gql`
    fragment FeatureSectionGridComponent on ComponentComponentsFeatureSectionGrid {
        __typename
        id
        preTitle
        title
        description
        featureList {
            ...FeatureItem
        }
        inverted
        iconBorder
    }
    ${FeatureItemFragmentDoc}
`;
export const HeroSectionComponentFragmentDoc = gql`
    fragment HeroSectionComponent on ComponentComponentsHeroSection {
        __typename
        id
        preTitle
        title
        subtitle
        description
        highlightedText
        inverted
        image {
            ...Media
        }
        links {
            ...Link
        }
        headingType
    }
    ${MediaFragmentDoc}
    ${LinkFragmentDoc}
`;
export const MediaSectionComponentFragmentDoc = gql`
    fragment MediaSectionComponent on ComponentComponentsMediaSection {
        __typename
        id
        preTitle
        title
        description
        media {
            ...Media
        }
        links {
            ...Link
        }
    }
    ${MediaFragmentDoc}
    ${LinkFragmentDoc}
`;
export const PriceFragmentDoc = gql`
    fragment Price on ComponentContentPrice {
        value
        currency
        period
    }
`;
export const BadgeFragmentDoc = gql`
    fragment Badge on ComponentContentBadge {
        label
        variant
    }
`;
export const PricingCardFragmentDoc = gql`
    fragment PricingCard on ComponentContentPricingCard {
        title
        image {
            ...Media
        }
        description
        price {
            ...Price
        }
        isPromoted
        tags {
            ...Badge
        }
        links {
            ...Link
        }
        featureListTitle
        featureList {
            ...FeatureItem
        }
    }
    ${MediaFragmentDoc}
    ${PriceFragmentDoc}
    ${BadgeFragmentDoc}
    ${LinkFragmentDoc}
    ${FeatureItemFragmentDoc}
`;
export const PricingSectionComponentFragmentDoc = gql`
    fragment PricingSectionComponent on ComponentComponentsPricingSection {
        __typename
        id
        title
        subtitle
        description
        headingTypePricing: headingType
        pricingList {
            ...PricingCard
        }
    }
    ${PricingCardFragmentDoc}
`;
export const QuickLinksComponentFragmentDoc = gql`
    fragment QuickLinksComponent on ComponentComponentsQuickLinks {
        __typename
        id
        preTitle
        title
        description
        quickLinks: items {
            ...Link
        }
    }
    ${LinkFragmentDoc}
`;
export const InformationCardFragmentDoc = gql`
    fragment InformationCard on ComponentContentInformationCard {
        title
        icon
        message
        altMessage
        link {
            ...Link
        }
    }
    ${LinkFragmentDoc}
`;
export const GetArticleDocument = gql`
    query getArticle($slug: String!, $locale: I18NLocaleCode!) {
        articles(locale: $locale, filters: { slug: { eq: $slug } }) {
            ...Article
        }
    }
    ${ArticleFragmentDoc}
`;
export const GetArticlesDocument = gql`
    query getArticles(
        $locale: I18NLocaleCode!
        $slugs: [String]
        $category: String
        $dateFrom: DateTime
        $dateTo: DateTime
        $limit: Int
        $offset: Int
        $sort: [String]
    ) {
        articles_connection {
            pageInfo {
                total
            }
        }
        articles(
            filters: {
                slug: { in: $slugs }
                updatedAt: { gte: $dateFrom, lte: $dateTo }
                content: { category: { slug: { eq: $category } } }
            }
            pagination: { limit: $limit, start: $offset }
            sort: $sort
            locale: $locale
        ) {
            ...ArticleSimple
        }
    }
    ${ArticleSimpleFragmentDoc}
`;
export const GetCategoriesDocument = gql`
    query getCategories($id: String, $locale: I18NLocaleCode!, $limit: Int, $offset: Int) {
        categories_connection {
            pageInfo {
                total
            }
        }
        categories(locale: $locale, filters: { slug: { eq: $id } }, pagination: { limit: $limit, start: $offset }) {
            ...Category
        }
    }
    ${CategoryFragmentDoc}
`;
export const GetAppConfigDocument = gql`
    query getAppConfig($locale: I18NLocaleCode!) {
        appConfig(locale: $locale) {
            ...AppConfig
        }
        configurableTexts {
            errors {
                requestError {
                    title
                    content
                }
            }
            dates {
                today
                yesterday
            }
            actions {
                showMore
                showLess
                show
                hide
                edit
                save
                cancel
                delete
                logOut
                settings
                renew
                details
            }
        }
        i18NLocales {
            code
        }
    }
    ${AppConfigFragmentDoc}
`;
export const GetComponentDocument = gql`
    query getComponent($id: ID!, $locale: I18NLocaleCode!) {
        component(documentId: $id, locale: $locale) {
            name
            content {
                __typename
                ... on ComponentComponentsFaq {
                    ...FaqComponent
                }
                ... on ComponentComponentsQuickLinks {
                    ...QuickLinksComponent
                }
                ... on ComponentComponentsCategoryList {
                    ...CategoryListComponent
                }
                ... on ComponentComponentsArticleList {
                    ...ArticleListComponent
                }
                ... on ComponentComponentsCategory {
                    ...CategoryComponent
                }
                ... on ComponentComponentsArticleSearch {
                    ...ArticleSearchComponent
                }
                ... on ComponentComponentsHeroSection {
                    ...HeroSectionComponent
                }
                ... on ComponentComponentsMediaSection {
                    ...MediaSectionComponent
                }
                ... on ComponentComponentsFeatureSection {
                    ...FeatureSectionComponent
                }
                ... on ComponentComponentsFeatureSectionGrid {
                    ...FeatureSectionGridComponent
                }
                ... on ComponentComponentsCtaSection {
                    ...CtaSectionComponent
                }
                ... on ComponentComponentsBentoGrid {
                    ...BentoGridComponent
                }
                ... on ComponentComponentsPricingSection {
                    ...PricingSectionComponent
                }
            }
        }
        configurableTexts(locale: $locale) {
            dates {
                today
                yesterday
            }
            actions {
                showMore
                showLess
                show
                hide
                edit
                save
                cancel
                delete
                logOut
                settings
                renew
                details
                reorder
                clickToSelect
                payOnline
                close
                trackOrder
                showAllArticles
                on
                off
            }
            errors {
                requestError {
                    title
                    content
                }
            }
            media {
                play
                pause
                mute
                unmute
            }
        }
    }
    ${FaqComponentFragmentDoc}
    ${QuickLinksComponentFragmentDoc}
    ${CategoryListComponentFragmentDoc}
    ${ArticleListComponentFragmentDoc}
    ${CategoryComponentFragmentDoc}
    ${ArticleSearchComponentFragmentDoc}
    ${HeroSectionComponentFragmentDoc}
    ${MediaSectionComponentFragmentDoc}
    ${FeatureSectionComponentFragmentDoc}
    ${FeatureSectionGridComponentFragmentDoc}
    ${CtaSectionComponentFragmentDoc}
    ${BentoGridComponentFragmentDoc}
    ${PricingSectionComponentFragmentDoc}
`;
export const GetFooterDocument = gql`
    query getFooter($locale: I18NLocaleCode!, $id: ID!) {
        footer(locale: $locale, documentId: $id) {
            ...Footer
        }
    }
    ${FooterFragmentDoc}
`;
export const GetHeaderDocument = gql`
    query getHeader($locale: I18NLocaleCode!, $id: ID!) {
        header(locale: $locale, documentId: $id) {
            ...Header
        }
        configurableTexts {
            actions {
                close
            }
        }
    }
    ${HeaderFragmentDoc}
`;
export const GetLocalesDocument = gql`
    query getLocales {
        i18NLocales {
            code
        }
    }
`;
export const GetNotFoundPageDocument = gql`
    query getNotFoundPage($locale: I18NLocaleCode!) {
        notFoundPage(locale: $locale) {
            ...NotFoundPage
        }
    }
    ${NotFoundPageFragmentDoc}
`;
export const GetPageDocument = gql`
    query getPage($slug: String!, $locale: I18NLocaleCode!) {
        pages(filters: { slug: { endsWith: $slug } }, pagination: { limit: 1 }, locale: $locale) {
            ...Page
        }
    }
    ${PageFragmentDoc}
`;
export const GetPagesDocument = gql`
    query getPages($locale: I18NLocaleCode!) {
        pages(locale: $locale, pagination: { limit: 1000 }) {
            ...Page
        }
    }
    ${PageFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string,
    variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const GetArticleDocumentString = print(GetArticleDocument);
const GetArticlesDocumentString = print(GetArticlesDocument);
const GetCategoriesDocumentString = print(GetCategoriesDocument);
const GetAppConfigDocumentString = print(GetAppConfigDocument);
const GetComponentDocumentString = print(GetComponentDocument);
const GetFooterDocumentString = print(GetFooterDocument);
const GetHeaderDocumentString = print(GetHeaderDocument);
const GetLocalesDocumentString = print(GetLocalesDocument);
const GetNotFoundPageDocumentString = print(GetNotFoundPageDocument);
const GetPageDocumentString = print(GetPageDocument);
const GetPagesDocumentString = print(GetPagesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        getArticle(
            variables: GetArticleQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetArticleQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetArticleQuery>(GetArticleDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getArticle',
                'query',
                variables,
            );
        },
        getArticles(
            variables: GetArticlesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetArticlesQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetArticlesQuery>(GetArticlesDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getArticles',
                'query',
                variables,
            );
        },
        getCategories(
            variables: GetCategoriesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetCategoriesQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetCategoriesQuery>(GetCategoriesDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getCategories',
                'query',
                variables,
            );
        },
        getAppConfig(
            variables: GetAppConfigQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetAppConfigQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetAppConfigQuery>(GetAppConfigDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getAppConfig',
                'query',
                variables,
            );
        },
        getComponent(
            variables: GetComponentQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetComponentQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetComponentQuery>(GetComponentDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getComponent',
                'query',
                variables,
            );
        },
        getFooter(
            variables: GetFooterQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetFooterQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetFooterQuery>(GetFooterDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getFooter',
                'query',
                variables,
            );
        },
        getHeader(
            variables: GetHeaderQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetHeaderQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetHeaderQuery>(GetHeaderDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getHeader',
                'query',
                variables,
            );
        },
        getLocales(
            variables?: GetLocalesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetLocalesQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetLocalesQuery>(GetLocalesDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getLocales',
                'query',
                variables,
            );
        },
        getNotFoundPage(
            variables: GetNotFoundPageQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetNotFoundPageQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetNotFoundPageQuery>(GetNotFoundPageDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getNotFoundPage',
                'query',
                variables,
            );
        },
        getPage(
            variables: GetPageQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetPageQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetPageQuery>(GetPageDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getPage',
                'query',
                variables,
            );
        },
        getPages(
            variables: GetPagesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetPagesQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetPagesQuery>(GetPagesDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getPages',
                'query',
                variables,
            );
        },
    };
}
export type Sdk = ReturnType<typeof getSdk>;
