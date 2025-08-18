'use client';

import React from 'react';

import { Models } from '@dxp/framework/modules';

import { cn } from '@dxp/ui/lib/utils';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@dxp/ui/elements/navigation-menu';
import { Typography } from '@dxp/ui/elements/typography';

import { Link as NextLink, usePathname } from '@/i18n';

import { DesktopNavigationProps } from './DesktopNavigation.types';

export function DesktopNavigation({ logoSlot, localeSlot, items }: DesktopNavigationProps) {
    const pathname = usePathname();

    const activeNavigationGroup = items.find((item) => {
        if (item.__typename === 'NavigationGroup') {
            return item.items
                .filter((item) => item.__typename === 'NavigationItem')
                .some((item) => {
                    if (pathname !== '/') {
                        return item.url !== '/' && item.url && pathname.startsWith(item.url);
                    }

                    return item.url && pathname.startsWith(item.url);
                });
        }

        return item.url && pathname.includes(item.url);
    });

    const navigationItemClass = cn(navigationMenuTriggerStyle());

    const getUrl = (item: Models.Navigation.NavigationGroup) => {
        if (item.items[0]?.__typename === 'NavigationItem') {
            return item.items[0].url;
        } else if (item.items[0]?.items[0]?.__typename === 'NavigationItem') {
            return item.items[0]?.items[0]?.url;
        }

        return '/';
    };

    const NavigationLink = ({
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
            <NavigationMenuLink asChild active={active} className={cn(navigationItemClass, className)}>
                <NextLink href={href}>{children}</NextLink>
            </NavigationMenuLink>
        );
    };

    const NavigationItem = ({
        item,
        className,
        active,
    }: {
        item: Models.Navigation.NavigationItem;
        className?: string;
        active?: boolean;
    }) => {
        return (
            <NavigationMenuItem key={item.label}>
                <NavigationLink href={item.url || '/'} className={className} active={active}>
                    {item.label}
                </NavigationLink>
            </NavigationMenuItem>
        );
    };

    const NavigationGroup = ({ item, className }: { item: Models.Navigation.NavigationGroup; className?: string }) => {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className={cn(navigationItemClass, className)}>
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[350px] lg:w-[600px] lg:grid-cols-[1fr_1fr] p-2">
                        {item.items.map((item) => {
                            if (item.__typename !== 'NavigationItem') {
                                return null;
                            }

                            return (
                                <li key={item.label} className="w-full h-full">
                                    <NavigationLink
                                        href={item.url || '/'}
                                        className="px-4 py-2 min-h-16 h-full w-full !justify-start items-start"
                                    >
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="body" className="text-navbar-primary">
                                                {item.label}
                                            </Typography>
                                            {item.description && (
                                                <Typography variant="small" className="text-muted-foreground">
                                                    {item.description}
                                                </Typography>
                                            )}
                                        </div>
                                    </NavigationLink>
                                </li>
                            );
                        })}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    };

    return (
        <nav className="w-full">
            {/* Top Navigation Bar */}
            <div className="w-full bg-navbar-background">
                <div className="w-full m-auto max-w-7xl flex justify-between py-6 px-6">
                    {/* Left Section */}
                    <div className="flex gap-6">
                        {logoSlot}

                        <NavigationMenu>
                            <NavigationMenuList className="flex gap-3">
                                {items.map((item) => {
                                    switch (item.__typename) {
                                        case 'NavigationItem':
                                            return <NavigationItem item={item} key={item.label} active={false} />;
                                        case 'NavigationGroup':
                                            return (
                                                <NavigationItem
                                                    item={{
                                                        label: item.title,
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

                    {/* Right Section */}
                    <div className="flex gap-4">
                        {/* Language Selector */}
                        {localeSlot}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            {activeNavigationGroup?.__typename === 'NavigationGroup' && (
                <div className="w-full bg-navbar-sub-background">
                    <div className="w-full m-auto max-w-7xl py-2 px-6">
                        <NavigationMenu className="">
                            <NavigationMenuList className="flex gap-3">
                                {activeNavigationGroup?.items.map((item) => {
                                    switch (item.__typename) {
                                        case 'NavigationItem':
                                            return (
                                                <NavigationItem
                                                    item={item}
                                                    key={item.label}
                                                    active={pathname === item.url}
                                                    className="!text-base !text-navbar-sub-foreground hover:!text-navbar-sub-foreground hover:!bg-navbar-sub-accent"
                                                />
                                            );
                                        case 'NavigationGroup':
                                            return (
                                                <NavigationGroup
                                                    item={item}
                                                    key={item.title}
                                                    className="!text-base !text-navbar-sub-foreground hover:!text-navbar-sub-foreground hover:!bg-navbar-sub-accent"
                                                />
                                            );
                                    }
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            )}
        </nav>
    );
}
