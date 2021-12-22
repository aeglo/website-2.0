import type { GetStaticProps } from "next";
import { I18nProps, useI18n } from "next-rosetta";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Hero } from "../components/Hero";
import type { AegloLocale } from "../i18n";
import { Layout } from "../layout/Layout";

const Index = () => {
  const { locale, locales, asPath } = useRouter();
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;

  return (
    <Layout>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />
    </Layout>
  );
};
export default Index;

export const getStaticProps: GetStaticProps<I18nProps<AegloLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } };
};
