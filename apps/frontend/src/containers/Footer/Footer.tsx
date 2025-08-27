'use client';

import { ChevronDownIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import React from 'react';

import { Models } from '@dxp/framework/modules';

import { cn } from '@dxp/ui/lib/utils';

import { Image } from '@dxp/ui/components/Image';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@dxp/ui/elements/collapsible';
import { Link } from '@dxp/ui/elements/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@dxp/ui/elements/navigation-menu';
import { Separator } from '@dxp/ui/elements/separator';
import { Typography } from '@dxp/ui/elements/typography';

import { Link as NextLink } from '@/i18n';

import { FooterProps } from './Footer.types';

export const Footer: React.FC<FooterProps> = ({ data }) => {
    const locale = useLocale();

    const navigationItemClass = cn(
        navigationMenuTriggerStyle(),
        'data-active:bg-transparent data-active:underline underline-offset-4 hover:!bg-transparent hover:underline',
    );

    const mobileNavigationItemClass = cn(navigationMenuTriggerStyle(), navigationItemClass, 'justify-start');

    const getUrl = (item: Models.Navigation.NavigationGroup) => {
        if (item.url) {
            return item.url;
        }

        const lvl1Item = item.items?.[0];
        if (lvl1Item) {
            if (lvl1Item.__typename === 'NavigationItem') {
                return lvl1Item.url || '/';
            }
        }

        if (item.items?.[0]?.__typename === 'NavigationGroup') {
            const lvl2Item = item.items?.[0]?.items?.[0];
            if (lvl2Item?.__typename === 'NavigationItem') {
                return lvl2Item.url || '/';
            }
        }

        return '/';
    };

    const DesktopNavigationLink = ({
        href,
        children,
        className,
        active,
    }: {
        href: string;
        children: React.ReactNode;
        className?: string;
        active?: boolean;
    }) => {
        return (
            <NavigationMenuLink asChild active={active}>
                <NextLink href={href} locale={locale} className={cn(navigationItemClass, className)}>
                    {children}
                </NextLink>
            </NavigationMenuLink>
        );
    };

    const DesktopNavigationItem = ({
        item,
        className,
        active,
    }: {
        item: Models.Navigation.NavigationItem;
        className?: string;
        active?: boolean;
    }) => {
        return (
            <NavigationMenuItem key={item.url}>
                <DesktopNavigationLink href={item.url ?? '/'} className={className} active={active}>
                    {item.label}
                </DesktopNavigationLink>
            </NavigationMenuItem>
        );
    };

    const CollapsibleItemTemplate = ({
        item,
        children,
    }: {
        item: Models.Navigation.NavigationGroup;
        children: React.ReactNode;
    }) => {
        return (
            <Collapsible>
                <div className="flex items-center justify-between">
                    <Link className={cn(mobileNavigationItemClass, 'flex-1')} asChild>
                        <NextLink href={item.url || '/'}>{item.title}</NextLink>
                    </Link>

                    <CollapsibleTrigger className="p-1.5 data-[state=open]:rotate-180 transition-transform duration-200 border border-border">
                        <ChevronDownIcon className="h-6 w-6" />
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="p-0 overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up flex flex-col gap-2">
                    {children}
                </CollapsibleContent>
            </Collapsible>
        );
    };

    const MobileNavigationItem = ({ item }: { item: Models.Navigation.NavigationItem }) => {
        return (
            <li key={item.label} className="w-full list-none">
                <Link asChild>
                    <NextLink href={item.url ?? '/'} locale={locale} className={mobileNavigationItemClass}>
                        {item.label}
                    </NextLink>
                </Link>
            </li>
        );
    };

    const NavigationGroup = ({ item }: { item: Models.Navigation.NavigationGroup }) => {
        return (
            <li key={item.title} className="w-full list-none">
                <CollapsibleItemTemplate item={item}>
                    <ul className="flex flex-col items-start gap-2 w-full pt-2 pl-3">
                        {item.items.map((item) => {
                            switch (item.__typename) {
                                case 'NavigationItem':
                                    return <MobileNavigationItem item={item} key={item.label} />;
                                case 'NavigationGroup':
                                    return (
                                        <li key={item.title} className="w-full list-none">
                                            <Collapsible>
                                                <div className="flex items-center justify-between">
                                                    <Link className={mobileNavigationItemClass} asChild>
                                                        <NextLink href={item.url || '/'}>{item.title}</NextLink>
                                                    </Link>

                                                    <CollapsibleTrigger className="p-1.5 data-[state=open]:rotate-180 transition-transform duration-200 border border-border">
                                                        <ChevronDownIcon className="h-6 w-6" />
                                                    </CollapsibleTrigger>
                                                </div>
                                                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up flex flex-col gap-2 p-0">
                                                    <ul className="flex flex-col items-start gap-2 w-full pt-2 pl-3">
                                                        {item.items.map((item) => {
                                                            if (item.__typename !== 'NavigationItem') {
                                                                return null;
                                                            }
                                                            return (
                                                                <MobileNavigationItem item={item} key={item.label} />
                                                            );
                                                        })}
                                                    </ul>

                                                    <Separator className="w-full" />
                                                </CollapsibleContent>
                                            </Collapsible>
                                        </li>
                                    );
                            }
                        })}
                    </ul>

                    <Separator className="w-full" />
                </CollapsibleItemTemplate>
            </li>
        );
    };

    return (
        <footer className="flex flex-col bg-footer-background">
            <Separator />
            <div className="w-full m-auto max-w-7xl flex flex-row justify-between px-4 md:px-6 py-4 md:py-6">
                <div className="flex gap-8 items-center justify-between w-full md:justify-start">
                    <Link href="/" aria-label={data.logoLabel}>
                        {data.logo?.url && (
                            <Image
                                src={data.logo.url}
                                alt={data.logo.alt}
                                width={data.logo.width}
                                height={data.logo.height}
                            />
                        )}
                    </Link>
                    <Typography variant="body" className="text-footer-muted">
                        {data.copyright}
                    </Typography>
                </div>
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-3">
                            {data.items.map((item) => {
                                switch (item.__typename) {
                                    case 'NavigationItem':
                                        return <DesktopNavigationItem item={item} key={item.label} />;
                                    case 'NavigationGroup':
                                        return (
                                            <DesktopNavigationItem
                                                item={{
                                                    label: item.title ?? '',
                                                    url: getUrl(item),
                                                    __typename: 'NavigationItem',
                                                }}
                                                key={item.title}
                                                active={false}
                                            />
                                        );
                                }
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <Separator />
            <div className="w-full m-auto max-w-7xl flex flex-col md:hidden">
                <Collapsible className="flex flex-col gap-2 p-2">
                    <CollapsibleItemTemplate item={data as unknown as Models.Navigation.NavigationGroup}>
                        <Collapsible className="flex flex-col gap-2 pt-2 pl-3">
                            <ul className="flex flex-col gap-2">
                                {data.items.map((item) => {
                                    switch (item.__typename) {
                                        case 'NavigationItem':
                                            return <MobileNavigationItem item={item} key={item.label} />;
                                        case 'NavigationGroup':
                                            return <NavigationGroup item={item} key={item.title} />;
                                    }
                                })}
                            </ul>
                        </Collapsible>
                    </CollapsibleItemTemplate>
                </Collapsible>
                <Separator />
            </div>
        </footer>
    );
};
