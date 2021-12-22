import type { GetStaticProps } from "next";
import { I18nProps, useI18n } from "next-rosetta";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { Hero } from "../components/Hero";
import type { AegloLocale } from "../i18n";
import { Layout } from "../layout/Layout";
import useSystemTheme from 'react-use-system-theme';

const Index = () => {
  const { locale, locales, asPath } = useRouter();
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;
  const systemTheme = useSystemTheme();

  return (
    <>
      <Head>
        <title>{"AEGLO - " + t("navigation.home")}</title>
        {systemTheme !== 'dark' && (
          <>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon_dark/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon_dark/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon_dark/apple-touch-icon.png" />
            <link rel="manifest" href="/favicon_dark/site.webmanifest" />
            <meta name="theme-color" content="#ffffff" />
          </>
        )}
        {systemTheme === 'dark' && (
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
        <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      </Layout>
    </>
  );
};
export default Index;

export const getStaticProps: GetStaticProps<I18nProps<AegloLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } };
};
