import { Models } from '@dxp/utils.frontend';

export interface BreadcrumbsProps {
    breadcrumbs?: BreadcrumbItem[];
    LinkComponent: Models.Link.LinkComponent;
}

export interface BreadcrumbItem {
    label: string;
    slug?: string;
}
