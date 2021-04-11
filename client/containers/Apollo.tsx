import React, { ReactElement } from "react";
import { apiBaseUri } from '../config/client.config';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function Apollo({ children }: { children: ReactElement }) {
    const apolloClient = new ApolloClient({
        uri: apiBaseUri,
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={ apolloClient }>
            { children }
        </ApolloProvider>
    )
}
