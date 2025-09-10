import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { InformativeCard } from '@dxp/ui/components/Cards/InformativeCard';
import { ContentSection } from '@dxp/ui/components/ContentSection';
import { DynamicIconProps } from '@dxp/ui/components/DynamicIcon';

import { CategoryListPureProps } from './CategoryList.types';

export const CategoryListPure: React.FC<Readonly<CategoryListPureProps>> = ({ routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    return (
        <ContentSection title={component.title} description={component.description} LinkComponent={LinkComponent}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {component.items.map((item) => (
                    <li key={item.id} className="w-full">
                        <InformativeCard
                            title={item.title}
                            description={item.description}
                            href={item.slug}
                            icon={{
                                name: item.icon as DynamicIconProps['name'],
                                size: 24,
                            }}
                            LinkComponent={LinkComponent}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
