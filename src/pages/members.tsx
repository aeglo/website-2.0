import { I18nProps, useI18n } from "next-rosetta";
import { AegloLocale } from "../i18n";
import useSystemTheme from "react-use-system-theme";
import Head from "next/head";
import { Layout } from "../layout/Layout";
import { Hero } from "../components/Hero";
import { GetStaticProps } from "next";
import { AspectRatio, Link, Image, Box, Stack, Heading } from "@chakra-ui/react";
import useMembers from "../hooks/useMembers";
import { useRouter } from "next/router";
import { MembersList } from "../components/members/MembersList";

export interface Member {
    asset: string,
    job: string,
    name: string,
    email: string,
    description: string
}

const Members = () => {
    const { locale } = useRouter();
    const i18n = useI18n<AegloLocale>();
    const { t } = i18n;

    const members = useMembers(locale);

    const systemTheme = useSystemTheme();

    return (
        <>
            <Head>
                <title>{"AEGLO - " + t("navigation.members")}</title>
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
                <Hero title={t("members.title")} subtitle={t("members.subtitle")} />
                <Link fontSize={{ base: "16px", md: "20px" }} fontWeight="bold" textAlign="center" marginX={100} color="secondary.default" href="mailto:ca-aeglo-fsg@listes.ulaval.ca">
                    ca-aeglo-fsg@listes.ulaval.ca
                </Link>
                <AspectRatio width="100%" ratio={16 / 8}>
                    <Image mt={8} src="images/full_ca.png" alt="All representatives" />
                </AspectRatio>
                <Box id="home" paddingTop={{ base: 0, md: "10vh" }}>
                    <Stack direction="column" textAlign="center" marginTop={{ base: "128px", md: "196px" }}>
                        <Heading marginBottom={8}>{t("members.jobs")}</Heading>
                        <MembersList members={members} />
                    </Stack>
                </Box>
            </Layout>
        </>
    );
}

export default Members;

export const getStaticProps: GetStaticProps<I18nProps<AegloLocale>> = async (context) => {
    const locale = context.locale || context.defaultLocale;
    const { table = {} } = await import(`../i18n/${locale}`);
    return { props: { table } };
};