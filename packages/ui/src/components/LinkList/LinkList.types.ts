import { Models } from '@dxp/framework/modules';
import { Models as FrontendModels } from '@dxp/utils.frontend';

export type LinkListProps = {
    children?: React.ReactNode;
    links?: Models.Link.Link[];
    LinkComponent: FrontendModels.Link.LinkComponent;
    className?: string;
};
