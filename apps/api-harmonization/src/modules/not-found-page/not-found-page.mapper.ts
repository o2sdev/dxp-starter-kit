import { CMS } from '@dxp/configs.integrations';

import { NotFoundPage } from './not-found-page.model';

export const mapNotFoundPage = (notFoundPage: CMS.Model.NotFoundPage.NotFoundPage): NotFoundPage => {
    return {
        title: notFoundPage.title,
        description: notFoundPage.description,
        urlLabel: notFoundPage.urlLabel,
        url: notFoundPage.url,
    };
};
