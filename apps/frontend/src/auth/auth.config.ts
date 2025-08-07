import type { AdapterSession } from '@auth/core/adapters';
import type { Account, DefaultSession, Profile } from '@auth/core/types';
import * as Auth from '@dxp/integrations.mocked/auth';
import { Session, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import { useSession } from 'next-auth/react';

const DEFAULT_ROLE = process.env.AUTH_DEFAULT_USER_ROLE!;

type JwtCallbackParams = {
    token: JWT;
    user: User | AdapterUser;
    account?: Account | null;
    profile?: Profile;
    trigger?: 'signIn' | 'signUp' | 'update';
    session?: Session;
};

type SessionCallbackParams = ({
    session: {
        user: AdapterUser;
    } & AdapterSession;
    user: AdapterUser;
} & {
    session: Session;
    token: JWT;
}) & {
    newSession: Session;
    trigger?: 'update';
};

export const DefaultAuthProvider = Auth.ProviderName;

export const Adapter = Auth.Adapter;

export const Providers = Auth.Providers;

export const onSignOut = Auth.signOut;

export async function updateOrganization(session: ReturnType<typeof useSession>) {
    return Auth.updateOrganization(session);
}

export const jwtCallback = async (params: JwtCallbackParams): Promise<JWT | null> => {
    return Auth.jwtCallback(() => Promise.resolve(), params, DEFAULT_ROLE);
};

export const sessionCallback = async (params: SessionCallbackParams): Promise<DefaultSession | Session> => {
    return Auth.sessionCallback(params);
};
