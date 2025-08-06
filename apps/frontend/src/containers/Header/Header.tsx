'use client';

import React from 'react';

import { Image } from '@dxp/ui/components/Image';

import { Link } from '@dxp/ui/elements/link';

import { Link as NextLink } from '@/i18n';

import { LocaleSwitcher } from '../Toolbar/LocaleSwitcher';

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { HeaderProps } from './Header.types';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';

export const Header: React.FC<HeaderProps> = ({ data, alternativeUrls, children }) => {
    const LogoSlot = (
        <Link asChild>
            {/*TODO: get label from API*/}
            <NextLink href="/" aria-label={'go to home'}>
                {data.logo?.url && (
                    <Image src={data.logo.url} alt={data.logo.alt} width={data.logo.width} height={data.logo.height} />
                )}
            </NextLink>
        </Link>
    );

    const LocaleSlot = () => {
        return <LocaleSwitcher label={data.languageSwitcherLabel} alternativeUrls={alternativeUrls} />;
    };

    return (
        <header className="flex flex-col gap-4">
            <>
                <div className="md:block hidden">
                    <DesktopNavigation logoSlot={LogoSlot} localeSlot={<LocaleSlot />} items={data.items} />
                </div>
                <div className="md:hidden">
                    <MobileNavigation
                        logoSlot={LogoSlot}
                        localeSlot={<LocaleSlot />}
                        items={data.items}
                        title={data.title}
                        mobileMenuLabel={data.mobileMenuLabel}
                    />
                </div>
            </>
            {children}
        </header>
    );
};
