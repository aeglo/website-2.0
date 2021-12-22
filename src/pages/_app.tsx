import { ChakraProvider } from "@chakra-ui/react";
import { I18nProvider } from "next-rosetta";

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <I18nProvider table={pageProps.table}>
        <Component {...pageProps} />
      </I18nProvider>
    </ChakraProvider>
  );
}

export default MyApp;
