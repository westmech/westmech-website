'use client';

import { SessionProvider } from "next-auth/react";

// wrapper for next auth user session
export const AuthProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>
};

