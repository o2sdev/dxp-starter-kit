import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import type { Preview } from '@storybook/nextjs';
import { createRouter } from '@storybook/nextjs/router.mock';
import { createNavigation } from '@storybook/nextjs/navigation.mock';
import { withThemeByClassName } from '@storybook/addon-themes';

import { GlobalProvider } from '@dxp/ui/providers/GlobalProvider';
import { AppSpinner } from '@dxp/ui/components/AppSpinner';
import { Toaster } from '@dxp/ui/elements/toaster';
import { TooltipProvider } from '@dxp/ui/elements/tooltip';

import { globalProviderConfig, globalProviderCurrentTheme, globalProviderLabels, globalProviderThemes } from './data';

import '../apps/frontend/src/styles/global.css';
import messages from '../apps/frontend/src/i18n/messages/en.json'

createRouter({});
createNavigation({});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
    decorators: [
        withThemeByClassName({
            themes: {
                default: 'theme-default',
                personal: 'theme-personal',
                business: 'theme-business',
                dark: 'theme-dark',
            },
            defaultTheme: 'default',
        }),
        (Story) => {
            return(
                <NextIntlClientProvider locale="en" messages={messages}>
                    <GlobalProvider config={globalProviderConfig} labels={globalProviderLabels} themes={globalProviderThemes} currentTheme={globalProviderCurrentTheme} locale="en">
                        <TooltipProvider>
                            <Story />

                            <Toaster />
                            <AppSpinner />
                        </TooltipProvider>
                    </GlobalProvider>
                </NextIntlClientProvider>
            )
        }
    ]
};

export default preview;
