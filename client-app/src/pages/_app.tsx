import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";

export default function AervioApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
