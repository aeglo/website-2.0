import { ChakraProvider } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import { I18nProvider } from "next-rosetta";
import { AppProps } from "next/app";
import theme from "../theme/theme";
import Fonts from "../theme/fonts";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <I18nProvider table={pageProps.table}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </I18nProvider>
    </ChakraProvider>
  );
}

export default MyApp;
