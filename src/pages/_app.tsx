import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";
import "../globals.css";
import ReactMounted from "@/components/react-mounted";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "@/config";
import createEmotionCache from "@/config/create-emotion-cache";

export default function App({ Component, pageProps }: any) {
  return (
    <ApolloProvider client={client}>
      <CacheProvider value={createEmotionCache()}>
        <ReactMounted>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Component {...pageProps} />
          </ThemeProvider>
        </ReactMounted>
      </CacheProvider>
    </ApolloProvider>
  );
}
