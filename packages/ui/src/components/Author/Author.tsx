import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@dxp/ui/elements/avatar';
import { Typography } from '@dxp/ui/elements/typography';

import { AuthorProps } from './Author.types';

export const Author: React.FC<Readonly<AuthorProps>> = ({ name, avatar, position }) => {
    return (
        <div className="flex items-center gap-2">
            <Avatar>
                <AvatarImage src={avatar} />
                <AvatarFallback name={name} />
            </Avatar>
            <div className="flex flex-col gap-1">
                <Typography variant="subtitle">{name}</Typography>
                {position && (
                    <Typography variant="small" className="text-muted-foreground">
                        {position}
                    </Typography>
                )}
            </div>
        </div>
    );
};
