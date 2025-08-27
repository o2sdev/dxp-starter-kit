'use client';

import React from 'react';

import { useGlobalContext } from '@dxp/ui/providers/GlobalProvider';

import { Image } from '@dxp/ui/components/Image';

import { Link } from '@dxp/ui/elements/link';

import { Link as NextLink } from '@/i18n';

import { LocaleSwitcher } from '../Toolbar/LocaleSwitcher';

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { HeaderProps } from './Header.types';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';

export const Header: React.FC<HeaderProps> = ({ data, alternativeUrls, children }) => {
    const { themes } = useGlobalContext();

    let logo = data.logo;

    if (themes.current) {
        logo = themes.available[themes.current]?.logo;
    }

    const LogoSlot = (
        <Link asChild>
            <NextLink href="/" aria-label={data.logoLabel}>
                {logo?.url && <Image src={logo.url} alt={logo.alt} width={logo.width} height={logo.height} />}
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
