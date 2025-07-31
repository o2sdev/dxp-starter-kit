import type { Account, Profile } from '@auth/core/types';
import jwt from 'jsonwebtoken';
import { Session, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';

import { refreshAccessToken } from './auth.refreshAccessToken';

type JwtCallbackParams = {
    token: JWT;
    user: User | AdapterUser;
    account?: Account | null;
    profile?: Profile;
    trigger?: 'signIn' | 'signUp' | 'update';
    session?: Session['user'];
};

export const jwtCallback = async (
    getCustomer: (id: string | undefined, accessToken: string) => Promise<void>,
    { token, user, trigger, session }: JwtCallbackParams,
    defaultRole: string,
): Promise<JWT | null> => {
    // Sign in so we fetch customer data and save it on token
    if (trigger === 'signIn') {
        token.role = user.role || defaultRole;
        token.id = user.id;
        await updateCustomerToken(getCustomer, token, user?.defaultCustomerId);
    }
    // Update means that user wants to change customer. Normally you don't want to do this.
    // Instead, you should call your IAM service to change customer and then refresh the access token.
    else if (trigger === 'update') {
        await updateCustomerToken(getCustomer, token, session?.customer?.id);
    }
    // Since we don't have any IAM to provide an access token, we just sign it with our own token
    token.accessToken = signUserToken(token);

    if (Date.now() >= token.accessTokenExpires) {
        return refreshAccessToken(token);
    }
    return { ...token, ...user };
};

async function updateCustomerToken(
    _getCustomer: (id: string | undefined, accessToken: string) => Promise<void>,
    _token: JWT,
    _customerId?: string,
) {
    return Promise.resolve();
}

function signUserToken(token: JWT): string {
    return jwt.sign(
        {
            name: token.name,
            email: token.email,
            role: token.role,
            customer: token?.customer
                ? {
                      id: token.customer.id,
                      roles: token.customer.roles,
                      name: token.customer.name,
                  }
                : undefined,
        },
        'secret',
    );
}
