import type { GetStaticProps } from "next";
import { I18nProps, useI18n } from "next-rosetta";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSystemTheme from "react-use-system-theme";
import { Hero } from "../components/Hero";
import { FileIcon } from "../components/icons/FileIcon";
import { UserIcon } from "../components/icons/UserIcon";
import { UsersThreeIcon } from "../components/icons/UsersThreeIcon";
import { ProblemSolvingSection } from "../components/pedagogy/ProblemSolvingSection";
import { SectionItem } from "../components/pedagogy/SectionItem";
import { SectionList } from "../components/pedagogy/SectionList";
import type { AegloLocale } from "../i18n";
import { Layout } from "../layout/Layout";

export interface Section {
  title: string;
  description: string;
  icon: any;
}

const Pedagogy = () => {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;

  const systemTheme = useSystemTheme();

  const SECTIONS: Array<Section> = [
    {
      title: t("pedagogy.comity.title"),
      description: t("pedagogy.comity.description"),
      icon: <UsersThreeIcon boxSize={16} />
    },
    {
      title: t("pedagogy.reprensentative.title"),
      description: t("pedagogy.reprensentative.description"),
      icon: <UserIcon boxSize={16} />
    },
    {
      title: t("pedagogy.documents.title"),
      description: t("pedagogy.documents.description"),
      icon: <FileIcon boxSize={16} />
    }
  ];

  return (
    <>
      <Head>
        <title>{"AEGLO - " + t("navigation.pedagogy")}</title>
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
        <Hero title={t("pedagogy.title")} subtitle={t("pedagogy.subtitle")} />
        <SectionList sections={SECTIONS} />
        <ProblemSolvingSection title={t("pedagogy.problem.title")} subtitle={t("pedagogy.problem.description")} />
      </Layout>
    </>
  );
};

export default Pedagogy;

export const getStaticProps: GetStaticProps<I18nProps<AegloLocale>> = async (context) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return { props: { table } };
};
