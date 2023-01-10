import React from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
  useTheme,
  VStack,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import NextLink from 'next/link';
import Layout from '../layout/Layout';
import Hero from '../components/Hero';
import SocialMedias from '../components/SocialMedias';
import 'swiper/css';
import 'swiper/css/navigation';
import executives from '../data/executives';
import partners from '../data/partners';
import events from '../data/events';
import getWeekdayFromDate from '../utils/getWeekdayFromDate';
import getMonthFromDate from '../utils/getMonthFromDate';
import links from '../data/links';

export async function getStaticProps() {
  return {
    props: {
      activities: events.slice(0, 3),
      execs: executives,
      sponsors: partners,
      urls: links,
    },
  };
}

interface Event {
  name: string;
  date: {
    day: number;
    month: number;
    year: number;
  };
  time: string;
  location: string;
  link: string;
}

interface Exec {
  name: string;
  title: string;
  email: string;
  desc: string;
  img: string;
}

interface Partner {
  name: string;
  logo: string;
  website: string;
  plan: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Special';
}

interface UsefulLink {
  name: string;
  url: string;
}

interface Category {
  title: string;
  links: UsefulLink[];
}

export default function Home({
  activities,
  execs,
  sponsors,
  urls,
}: {
  activities: Event[];
  execs: Exec[];
  sponsors: Partner[];
  urls: Category[];
}) {
  const { breakpoints } = useTheme();
  const [isGreaterThanSm] = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const [isGreaterThanLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const [isGreaterThanXl] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  let slidesPerView = 1;

  if (isGreaterThanXl) {
    slidesPerView = 5;
  } else if (isGreaterThanLg) {
    slidesPerView = 3;
  } else if (isGreaterThanSm) {
    slidesPerView = 2;
  }

  return (
    <>
      <Head>
        <title>AEGLO - Accueil</title>
        <meta
          name="description"
          content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc."
        />
        <meta
          name="keywords"
          content="aeglo, genie, logiciel, software, engineering, association, étudiant, étudiante, université, laval"
        />
        <meta property="og:title" content="AEGLO - Accueil" />
        <meta
          property="og:description"
          content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc."
        />
        <meta property="og:url" content="https://aeglo.ift.ulaval.ca/" />
        <meta property="og:site_name" content="AEGLO" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://aeglo.ift.ulaval.ca/site_preview.png"
        />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero
          img="home_banner.jpeg"
          title="AEGLO"
          subtitle={
            "Association des étudiants et étudiantes en\ngénie logiciel de l'Université Laval"
          }
        >
          <SocialMedias direction="row" color="white" />
        </Hero>
        <Flex
          px={{ base: '3rem', lg: '8rem' }}
          py="6.25rem"
          direction="column"
          align={{ base: 'center', lg: 'start' }}
          gap="6.25rem"
        >
          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Événements à venir
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="6rem">
            {activities.map((activity) => (
              <Flex
                key={activity.name}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                justifyContent="left"
                flexDirection="column"
                overflow="hidden"
                color="black"
                backgroundColor="base.d100"
                rounded="1.8rem"
                padding="2.25rem"
              >
                <Stack>
                  <Text
                    color="secondary.default"
                    fontSize={{ base: '1rem', lg: '2rem' }}
                  >
                    {getWeekdayFromDate(
                      new Date(
                        activity.date.year,
                        activity.date.month - 1,
                        activity.date.day,
                      ),
                      'fr',
                    )}
                  </Text>
                  <Heading fontSize={{ base: '2.25rem', lg: '4rem' }}>
                    {new Date(
                      activity.date.year,
                      activity.date.month - 1,
                      activity.date.day,
                    ).getDate()}
                  </Heading>
                  <Heading fontSize={{ base: '2.25rem', lg: '4rem' }}>
                    {getMonthFromDate(
                      new Date(
                        activity.date.year,
                        activity.date.month - 1,
                        activity.date.day,
                      ),
                      'fr',
                    )}
                  </Heading>
                  <Text
                    fontSize={{ base: '1.25rem', lg: '2.25rem' }}
                    fontWeight="semibold"
                  >
                    {activity.time}
                  </Text>
                  <Link
                    as={NextLink}
                    href={activity.link}
                    color="secondary.default"
                    fontSize={{ base: '1.5rem', lg: '3.25rem' }}
                    fontWeight="semibold"
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    {activity.name}
                  </Link>
                  <Text
                    fontSize={{ base: '1.25rem', lg: '2.25rem' }}
                    fontWeight="semibold"
                  >
                    {activity.location}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>

        <Flex
          bgColor="darkSection"
          px={{ base: '3rem', lg: '8rem' }}
          py="6.25rem"
          direction="column"
          align={{ base: 'center', lg: 'start' }}
          gap="6.25rem"
        >
          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
            color="white"
          >
            Représentants
          </Heading>
          <Box w="100%">
            <Swiper
              navigation
              loop
              modules={[Navigation]}
              slidesPerView={slidesPerView}
              cssMode
            >
              {execs.map((exec) => (
                <SwiperSlide key={exec.title}>
                  <VStack>
                    <Img
                      src={exec.img}
                      alt={`${exec.name} avatar`}
                      borderRadius="full"
                      boxSize="13rem"
                      objectFit="cover"
                      objectPosition="top"
                    />
                    <Text
                      fontSize="1.5rem"
                      fontWeight="semibold"
                      color="white"
                      textAlign={{ base: 'center', lg: 'start' }}
                    >
                      {exec.name}
                    </Text>
                    <Text fontSize="1rem" fontWeight="semibold" color="white">
                      {exec.title}
                    </Text>
                    <Link
                      as={NextLink}
                      href={`mailto:${exec.email}`}
                      fontSize="1rem"
                      fontWeight="semibold"
                      color="secondary.default"
                      isExternal
                    >
                      {exec.email}
                    </Link>
                  </VStack>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Flex>

        <Flex
          px={{ base: '3rem', lg: '8rem' }}
          py="6.25rem"
          direction="column"
          align={{ base: 'center', lg: 'start' }}
          gap="6.25rem"
        >
          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Nos partenaires
          </Heading>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            flexWrap="wrap"
            spacing="3rem"
            justify="center"
          >
            {sponsors.map((sponsor) => (
              <Link
                key={sponsor.name}
                as={NextLink}
                href={sponsor.website}
                maxWidth={{ base: '100%', lg: '40%' }}
                alignSelf="center"
                _hover={{ textDecoration: 'none' }}
                isExternal
              >
                <Img src={sponsor.logo} alt={sponsor.name} />
              </Link>
            ))}
          </Stack>
        </Flex>

        <Flex
          px={{ base: '3rem', lg: '8rem' }}
          py="6.25rem"
          direction="column"
          align={{ base: 'center', lg: 'start' }}
          gap="6.25rem"
        >
          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Liens utiles
          </Heading>
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            alignSelf="center"
            align="center"
            mb="6.25rem"
          >
            <TabList justifyItems="center" overflow={{ base: 'scoll', lg: '' }}>
              {urls.map((tab) => (
                <Tab key={tab.title}>{tab.title}</Tab>
              ))}
            </TabList>
            <TabPanels marginTop="2rem">
              {urls.map((tab) => (
                <TabPanel key={tab.title}>
                  <Center>
                    <Stack
                      direction={{ base: 'column', lg: 'row' }}
                      wrap="wrap"
                      justify="center"
                    >
                      {tab.links.map((link) => (
                        <Box key={link.name} mb={{ lg: '1rem' }}>
                          <Link
                            as={NextLink}
                            href={link.url}
                            isExternal
                            backgroundColor="lightGrey"
                          >
                            <Button
                              whiteSpace="normal"
                              borderRadius={0}
                              backgroundColor="lightGrey"
                              _hover={{}}
                            >
                              {link.name}
                            </Button>
                          </Link>
                        </Box>
                      ))}
                    </Stack>
                  </Center>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Flex>
      </Layout>
    </>
  );
}
