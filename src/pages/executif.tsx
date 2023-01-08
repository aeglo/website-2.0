import {
  Flex, Heading, Img, Link, Stack, Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper';
import Hero from '../components/Hero';
import Layout from '../layout/Layout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import executives from '../data/executives';

export async function getStaticProps() {
  return {
    props: {
      data: executives,
    },
  };
}

interface Exec {
  name: string;
  title: string;
  email: string;
  desc: string;
  img: string;
}

export default function Executive({ data }: { data: Exec[] }) {
  return (
    <>
      <Head>
        <title>AEGLO - Exécutif</title>
        <meta
          name="description"
          content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc."
        />
        <meta
          name="keywords"
          content="aeglo, genie, logiciel, software, engineering, association, étudiant, étudiante, université, laval"
        />
        <meta property="og:title" content="AEGLO - Exécutif" />
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
          img="aeglo_executif.jpeg"
          title="Exécutif"
          subtitle="Une merveilleuse équipe présente pour vous épauler et vous organiser de super activités!"
        />
        <Flex
          px={{ base: '1.5rem', lg: '8rem' }}
          py="6.25rem"
          direction="column"
        >
          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Rencontrez le comité exécutif
          </Heading>
          <Text
            fontSize={{ base: '1.25rem', lg: '1.5rem' }}
            fontWeight="bold"
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Psst. Pour tous leur écrire, utilises l&apos;adresse:
            {' '}
            <Link
              as={NextLink}
              href="mailto:ca-aeglo-fsg@listes.ulaval.ca"
              color="secondary.default"
              isExternal
            >
              ca-aeglo-fsg@listes.ulaval.ca
            </Link>
          </Text>
        </Flex>
        <Swiper
          navigation
          effect="fade"
          slidesPerView={1}
          loop
          modules={[Navigation, EffectFade]}
        >
          {data.map((executive) => (
            <SwiperSlide key={executive.title}>
              <Flex
                direction={{ base: 'column-reverse', lg: 'row' }}
                pb={{ base: 0, sm: '6.25rem' }}
                px={{ base: '1.5rem', lg: '8rem' }}
                justify={{ base: 'center', lg: 'space-betweem' }}
                gap="3rem"
                bgColor="white"
              >
                <Flex direction="column" justify="center">
                  <Stack>
                    <Text
                      fontSize={{ base: '1.25rem', lg: '2.25rem' }}
                      fontWeight="bold"
                      textAlign={{ base: 'center', lg: 'end' }}
                    >
                      {executive.title}
                    </Text>
                    <Heading
                      fontSize={{ base: '1.5rem', lg: '3.25rem' }}
                      textAlign={{ base: 'center', lg: 'end' }}
                    >
                      {executive.name.toUpperCase()}
                    </Heading>
                    <Link
                      as={NextLink}
                      href={`mailto:${executive.email}`}
                      fontSize={{ base: '1.25rem', lg: '2.25rem' }}
                      fontWeight="bold"
                      color="secondary.default"
                      textAlign={{ base: 'center', lg: 'end' }}
                      isExternal
                    >
                      {executive.email}
                    </Link>
                    <Text
                      fontSize={{ base: '1.25rem', lg: '2rem' }}
                      textAlign={{ base: 'left', lg: 'end' }}
                      h={{ base: '22rem', sm: 'auto' }}
                    >
                      {executive.desc}
                    </Text>
                  </Stack>
                </Flex>
                <Img
                  maxW={{ base: '100%', lg: '751px' }}
                  maxH="894px"
                  alignContent="center"
                  src={executive.img}
                  alt={executive.name}
                  objectFit="cover"
                  objectPosition="top"
                />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Layout>
    </>
  );
}
