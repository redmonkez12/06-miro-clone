"use client";

import { ConvexReactClient } from "convex/react";
import { PropsWithChildren } from "react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

type ConvexClientProviderProps = {

}

const contextUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(contextUrl);

export const ConvexClientProvider = ({ children }: PropsWithChildren<ConvexClientProviderProps>) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
