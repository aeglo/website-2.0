import {
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Link,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../layout/Layout';

export default function Partners() {
  return (
    <>
      <Head>
        <title>AEGLO - Partenaires</title>
        <meta
          name="description"
          content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc."
        />
        <meta
          name="keywords"
          content="aeglo, genie, logiciel, software, engineering, association, étudiant, étudiante, université, laval"
        />
        <meta property="og:title" content="AEGLO - Partenaires" />
        <meta
          property="og:description"
          content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc."
        />
        <meta property="og:url" content="http://aeglo.ift.ulaval.ca/" />
        <meta property="og:site_name" content="AEGLO" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://aeglo.ift.ulaval.ca/site_preview.png"
        />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero
          img="partners_banner.jpeg"
          title="Partenaires"
          subtitle="Nous tenons à remercier les commanditaires de l'AEGLO qui soutiennent les étudiants et étudiantes en génie logiciel lors de leur parcours universitaire"
        />
        <Flex
          px={{ base: '3rem', lg: '8rem' }}
          py="6.25rem"
          direction="column"
          gap="6.25rem"
        >
          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Partenaires Platine
          </Heading>
          <Grid w="100%" templateColumns="repeat(1, auto)" gap="4rem">
            <Center>
              <GridItem>
                <Link
                  as={NextLink}
                  href="https://www.dialoginsight.com/"
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                >
                  <Img src="/partners/dialog_insight_logo.png" />
                </Link>
              </GridItem>
            </Center>
          </Grid>

          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Partenaires Or
          </Heading>
          <Grid w="100%" templateColumns="repeat(1, auto)" gap="4rem">
            <Center>
              <GridItem>
                <Link
                  as={NextLink}
                  href="https://www.lahaiegf.com/"
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                >
                  <Img src="/partners/lahaie_logo.png" />
                </Link>
              </GridItem>
            </Center>
          </Grid>

          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Partenaires Argent
          </Heading>
          <Grid
            w="100%"
            alignSelf="center"
            templateColumns={{ base: 'repeat(1, auto)', lg: 'repeat(3, auto)' }}
            gap="4rem"
          >
            <Center>
              <GridItem>
                <Link
                  as={NextLink}
                  href="https://www.desjardins.com/"
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                >
                  <Img src="/partners/desjardins_logo.svg" />
                </Link>
              </GridItem>
            </Center>
            <Center>
              <GridItem>
                <Link
                  as={NextLink}
                  href="https://www.bell.ca/"
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                >
                  <Img src="/partners/bell_logo.png" />
                </Link>
              </GridItem>
            </Center>
            <Center>
              <GridItem>
                <Link
                  as={NextLink}
                  href="https://snipcart.com/"
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                >
                  <Img src="/partners/snipcart_logo.png" />
                </Link>
              </GridItem>
            </Center>
          </Grid>

          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Partenaires Bronze
          </Heading>
          <Text
            fontSize={{ base: '1.125rem', lg: '1.5rem' }}
            fontWeight="bold"
            alignSelf="center"
            maxW="40rem"
            textAlign="center"
          >
            Nous n&apos;avons aucun partenaire bronze pour l&apos;instant.
            Consultez notre
            {' '}
            <Link
              as={NextLink}
              href="/files/PlanDePartenariat_AEGLO.pdf"
              color="secondary.default"
              isExternal
            >
              plan de partenariat
            </Link>
            {' '}
            afin de savoir quels bénéfices sont inclus et devenez notre premier
            partenaire bronze.
          </Text>

          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign="center"
            alignSelf="center"
            maxW="51rem"
          >
            Vous voulez devenir partenaire?
          </Heading>
          <Link
            as={NextLink}
            href="/files/PlanDePartenariat_AEGLO.pdf"
            fontSize={{ base: '1.125rem', lg: '1.5rem' }}
            fontWeight="bold"
            alignSelf="center"
            color="secondary.default"
            textAlign="center"
            _hover={{ textDecoration: 'none' }}
            isExternal
          >
            {'Consultez notre plan de partenariat ->'}
          </Link>
        </Flex>
      </Layout>
    </>
  );
}
