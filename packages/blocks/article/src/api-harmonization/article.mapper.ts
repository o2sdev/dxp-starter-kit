import { Articles } from '@dxp/configs.integrations';
import { Utils } from '@dxp/utils.api-harmonization';

import { CMS } from '@dxp/framework/modules';

import { ArticleBlock } from './article.model';

export const mapArticle = (
    cms: CMS.Model.AppConfig.AppConfig,
    article: Articles.Model.Article,
    locale: string,
    timezone: string,
): ArticleBlock => {
    return {
        __typename: 'ArticleBlock',
        id: article.id,
        data: {
            ...article,
            createdAt: Utils.Date.formatDateRelative(
                article.createdAt,
                locale,
                cms.labels.dates.today,
                cms.labels.dates.yesterday,
                timezone,
            ),
            updatedAt: Utils.Date.formatDateRelative(
                article.updatedAt,
                locale,
                cms.labels.dates.today,
                cms.labels.dates.yesterday,
                timezone,
            ),
        },
    };
};
