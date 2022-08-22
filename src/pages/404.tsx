import { AspectRatio, Box, Heading, Img, Text, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { I18nProps, useI18n } from "next-rosetta";
import Head from "next/head";
import React from "react";
import useSystemTheme from "react-use-system-theme";
import { NextChakraLink } from "../components/navigation/NextChakraLink";
import { AegloLocale } from "../i18n";
import { Layout } from "../layout/Layout";

// TODO: Make it responsive for mobile
export default function Custom404() {
  const i18n = useI18n();
  const { t } = i18n;

  const systemTheme = useSystemTheme();

  return (
    <>
      <Head>
        <title>{"AEGLO - " + t("fourOFour.pageName")}</title>
        {systemTheme !== "dark" ? (
          <>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon_dark/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon_dark/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon_dark/apple-touch-icon.png" />
            <link rel="manifest" href="/favicon_dark/site.webmanifest" />
            <meta name="theme-color" content="#ffffff" />
          </>
        ) : (
          <>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon_light/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon_light/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon_light/apple-touch-icon.png" />
            <link rel="manifest" href="/favicon_light/site.webmanifest" />
            <meta name="theme-color" content="#ffffff" />
          </>
        )}
      </Head>
      <Layout>
        <Box paddingY="10vh">
          <VStack justify={"center"} alignContent={"center"}>
            <AspectRatio width={{ base: "370px", md: "676px" }} ratio={1.95} mb={"48px"}>
              <Img src={"images/404.png"} alt="404" />
            </AspectRatio>
            <Heading fontSize={{ base: "6xl", md: "8xl" }} fontWeight={"bold"} color={"main"}>
              {t("fourOFour.title")}
            </Heading>
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight={"medium"}
              color={"main"}
              textAlign={"center"}
              mt={"8px"}
              paddingX={{ base: 2, md: 0 }}
              maxW={{ base: "248px", md: "724px" }}
            >
              {t("fourOFour.subtitle")}
            </Text>
            <NextChakraLink href="/" style={{ textDecoration: 'none' }}>
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={"medium"} color={"secondary.default"} textAlign={"center"} mt={"24px"}>
                {t("fourOFour.backHomeText")}
              </Text>
            </NextChakraLink>
          </VStack>
        </Box>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<I18nProps<AegloLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } };
};
