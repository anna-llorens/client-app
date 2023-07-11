import ReactMounted from "@/components/react-mounted";
import { theme } from "@/config";
import createEmotionCache from "@/config/create-emotion-cache";
import { ApolloProvider } from "@apollo/client";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { appWithTranslation } from "next-i18next";
import client from "../../apollo-client";
import "../globals.css";

function App({ Component, pageProps }: any) {
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

export default appWithTranslation(App);
