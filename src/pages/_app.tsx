import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";
import "../globals.css";

export default function App({ Component, pageProps }: any) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
