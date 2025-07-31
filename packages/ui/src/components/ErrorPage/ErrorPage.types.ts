import { Models } from '@dxp/utils.frontend';

export type ErrorPageProps = {
    errorType: string;
    title: string;
    description: string;
    link: {
        url: string;
        label: string;
    };
    LinkComponent: Models.Link.LinkComponent;
};
