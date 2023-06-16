import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";
import "../globals.css";
import ReactMounted from "@/components/react-mounted";

export default function App({ Component, pageProps }: any) {
  return (
    <ApolloProvider client={client}>
      <ReactMounted>
        <Component {...pageProps} />
      </ReactMounted>
    </ApolloProvider>
  );
}
