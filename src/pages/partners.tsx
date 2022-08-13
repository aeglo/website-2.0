import { I18nProps, useI18n } from "next-rosetta";
import { useRouter } from "next/router";
import { AegloLocale } from "../i18n";
import useSystemTheme from "react-use-system-theme";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Layout } from "../layout/Layout";
import { PartnersBlock } from "../components/partners/PartnersBlock";
import { usePartners } from "../hooks/usePartners";
import { Box, Heading, Stack, Text, Link } from "@chakra-ui/react";

export interface Partner {
    name: string;
    asset: string,
    website: string,
    linkedin: string,
    descriptionFR: string,
    descriptionEN: string,
    plan: 'Platinum' | 'Gold' | 'Silver' | 'Bronze'
}

const Partners = () => {
    const { locale } = useRouter();
    const i18n = useI18n<AegloLocale>();
    const { t } = i18n;

    const systemTheme = useSystemTheme();

    const { platinumPartners, goldPartners, silverPartners, bronzePartners } = usePartners();

    return (
        <>
            <Head>
                <title>{"AEGLO - " + t("navigation.partners")}</title>
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
                <Box id="home" paddingTop={{ base: 0, md: "10vh" }}>
                    <Stack direction="column" paddingX={{ base: "5vw", md: "25%" }} textAlign="center" marginBottom={"24px"}>
                        <Heading fontSize={{ base: "36px", md: "52px" }}>{t("partners.title")}</Heading>
                        <Text marginTop="2vh" fontSize={{ base: "16px", md: "20px" }} fontWeight="bold" textAlign="center" marginX={100}>
                            {t("partners.subtitle") + ' '}
                            <Link fontSize={{ base: "16px", md: "20px" }} fontWeight="bold" textAlign="center" color="secondary.default" href="http://aeglo.ift.ulaval.ca/files/PlanDePartenariat_AEGLO.pdf" isExternal>
                                {t("partners.partnershipPlan")}
                            </Link>
                            {'.'}
                        </Text>
                    </Stack>
                </Box>
                <Box id="partners" textAlign="center" paddingX={{ base: 8, md: 48 }} display="flex" flexDirection="column">
                    <Heading fontSize={{ base: "36px", md: "52px" }} mt={24} mb={10} >{t("plans.platinum")}</Heading>
                    <PartnersBlock partners={platinumPartners} backgroundColor={'#D3D6D8'} />
                    <Heading fontSize={{ base: "36px", md: "52px" }} mt={24} mb={10}>{t("plans.gold")}</Heading>
                    <PartnersBlock partners={goldPartners} backgroundColor={'#D4AF37'} />
                    <Heading fontSize={{ base: "36px", md: "52px" }} mt={24} mb={10}>{t("plans.silver")}</Heading>
                    <PartnersBlock partners={silverPartners} backgroundColor={'#C4CACE'} />
                    <Heading fontSize={{ base: "36px", md: "52px" }} mt={24} mb={10}>{t("plans.bronze")}</Heading>
                    <PartnersBlock partners={bronzePartners} backgroundColor={'#A97142'} />
                    <Box h={24} />
                </Box>
            </Layout>
        </>
    );
};

export default Partners;

export const getStaticProps: GetStaticProps<I18nProps<AegloLocale>> = async (context) => {
    const locale = context.locale || context.defaultLocale;
    const { table = {} } = await import(`../i18n/${locale}`);
    return { props: { table } };
};