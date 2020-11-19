import "../styles/index.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo/apolloClient";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
