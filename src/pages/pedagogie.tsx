import {
  Avatar,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import Hero from '../components/Hero';
import FileIcon from '../icons/FileIcon';
import ThreeUsersIcon from '../icons/ThreeUsersIcon';
import UserIcon from '../icons/UserIcon';
import Layout from '../layout/Layout';

export default function Pedagogy() {
  return (
    <>
      <Head>
        <title>AEGLO - Pédagogie</title>
        <meta
          name="description"
          content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc."
        />
        <meta
          name="keywords"
          content="aeglo, genie, logiciel, software, engineering, association, étudiant, étudiante, université, laval"
        />
        <meta property="og:title" content="AEGLO - Pédagogie" />
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
          img="pedagogy_banner.jpeg"
          title="Pédagogie"
          subtitle="L'AEGLO est aussi présente pour épauler les étudiants du programme au niveau pédagogique. Vous avez une question? Contactez votre représentant aux affaires pédagogiques."
        />
        <Flex
          px={{ base: '1.5rem', lg: '8rem' }}
          py="6.25rem"
          direction="column"
          gap="6.25rem"
        >
          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
          >
            Les services offerts
          </Heading>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing="2.25rem"
            align="center"
          >
            <Avatar
              icon={
                <ThreeUsersIcon boxSize={{ base: '8.5rem', lg: '22.75rem' }} />
              }
              bgColor="secondary.default"
              boxSize={{ base: '15rem', lg: '40rem' }}
            />
            <VStack spacing="1.25rem" align={{ base: 'center', lg: 'start' }}>
              <Heading
                fontSize={{ base: '1.5rem', lg: '3.5rem' }}
                textAlign={{ base: 'center', lg: 'start' }}
              >
                Comité de programme
              </Heading>
              <Text
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                textAlign={{ base: 'justify', lg: 'start' }}
              >
                Le comité de programme a pour rôle de s&apos;assurer de la
                qualité du programme d&apos;étude. Il est composé du directeur
                du programme, de professeurs, de chargés de cours et
                d&apos;étudiants. Les étudiants du Comité sont choisis selon les
                dispositions prévues dans la charte de l&apos;AEGLO. Plus de
                détails sont fournis dans le règlement des études de
                l&apos;Université Laval.
              </Text>
            </VStack>
          </Stack>
          <Stack
            direction={{ base: 'column', lg: 'row-reverse' }}
            spacing="2.25rem"
            align="center"
          >
            <Avatar
              icon={<UserIcon boxSize={{ base: '8.5rem', lg: '22.75rem' }} />}
              bgColor="secondary.default"
              boxSize={{ base: '15rem', lg: '40rem' }}
            />
            <VStack spacing="1.25rem" align={{ base: 'center', lg: 'end' }}>
              <Heading
                fontSize={{ base: '1.5rem', lg: '3.5rem' }}
                textAlign={{ base: 'center', lg: 'end' }}
              >
                Représentant aux affaires pédagogiques
              </Heading>
              <Text
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                textAlign={{ base: 'justify', lg: 'end' }}
              >
                Une bonne partie du rôle du rep. pédago. consiste à promouvoir
                les intérêts des étudiants au sein du comité de programme. Son
                mandat est de veiller à ce que le programme, notamment
                l&apos;offre de cours, soit le plus cohérent possible avec les
                impératifs du génie logiciel dans la recherche, les orientations
                pédagogiques, les besoins du marché du travail, les attentes des
                étudiants et la réglementation universitaire. N&apos;hésitez pas
                à le contacter pour toute question concernant ce mandat ou non,
                il vous orientera le cas échéant vers la ressource appropriée.
              </Text>
            </VStack>
          </Stack>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing="2.25rem"
            align="center"
          >
            <Avatar
              icon={<FileIcon boxSize={{ base: '8.5rem', lg: '22.75rem' }} />}
              bgColor="secondary.default"
              boxSize={{ base: '15rem', lg: '40rem' }}
            />
            <VStack spacing="1.25rem" align={{ base: 'center', lg: 'start' }}>
              <Heading
                fontSize={{ base: '1.5rem', lg: '3.5rem' }}
                textAlign={{ base: 'center', lg: 'start' }}
              >
                Documents utiles
              </Heading>
              <Text
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                textAlign={{ base: 'justify', lg: 'start' }}
              >
                Voici une liste de documents pour ceux et celles qui souhaitent
                s&apos;informer d&apos;avantage:
              </Text>
              <Link
                alignSelf="start"
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                as={NextLink}
                href="https://www.ulaval.ca/sites/default/files/notre-universite/direction-gouv/Documents%20officiels/R%C3%A8glements/Reglement_des_etudes.pdf"
                color="secondary.default"
                isExternal
              >
                - Le règlement des études
              </Link>
              <Link
                alignSelf="start"
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                as={NextLink}
                href="https://ombudsman.ulaval.ca/mieux-connaitre-lombudsman/declaration-des-droits-des-etudiants/"
                color="secondary.default"
                isExternal
              >
                - La déclaration des droits des étudiants et des étudiantes
              </Link>
              <Link
                alignSelf="start"
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                as={NextLink}
                href="https://www.ulaval.ca/notre-universite/direction-et-gouvernance/bureau-du-secretaire-general/documents-officiels"
                color="secondary.default"
                isExternal
              >
                - Règlements et documents officiels de l&apos;Université Laval
              </Link>
              <Link
                alignSelf="start"
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                as={NextLink}
                href="https://www.fsg.ulaval.ca/espace-facultaire/etudiants-actuels/reglements-et-documents-officiels/"
                color="secondary.default"
                isExternal
              >
                - Règlements et documents officiels de la Faculté des Sciences
                et de Génie
              </Link>
              <Link
                alignSelf="start"
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                as={NextLink}
                href="https://www.ift.ulaval.ca/departement-et-professeurs/reglements-et-documents-officiels/"
                color="secondary.default"
                isExternal
              >
                - Règlements et documents officiels du département
                d&apos;informatique et de génie logiciel
              </Link>
              <Link
                alignSelf="start"
                fontSize={{ base: '0.875rem', lg: '1.5rem' }}
                fontWeight="medium"
                as={NextLink}
                href="https://www.cadeul.com/bde/"
                color="secondary.default"
                isExternal
              >
                - Le bureau des droits étudiants
              </Link>
            </VStack>
          </Stack>
        </Flex>
        <Flex
          px={{ base: '1.5rem', lg: '8rem' }}
          py="6.25rem"
          direction="column"
          gap="6.25rem"
          bgColor="main"
        >
          <Heading
            fontSize={{ base: '2.25rem', lg: '5.625rem' }}
            textAlign={{ base: 'center', lg: 'start' }}
            color="white"
          >
            Traitement d&apos;une problématique
          </Heading>
          <Flex direction="column" gap="1rem">
            <Text
              fontSize={{ base: '0.875rem', lg: '1.5rem' }}
              fontWeight="medium"
              color="white"
              textAlign={{ base: 'justify', lg: 'start' }}
            >
              Tout d&apos;abord, il s&apos;agit de tenir compte de tous les
              aspects du problème, autant de votre point de vue que celui de
              toutes les parties concernées. Ensuite, définir les démarches à
              entreprendre.
            </Text>
            <Text
              fontSize={{ base: '0.875rem', lg: '1.5rem' }}
              fontWeight="medium"
              color="white"
              textAlign={{ base: 'justify', lg: 'start' }}
            >
              - Les démarches personnelles de l&apos;étudiant sont à prioriser
              dans la mesure du possible. En effet, vous êtes celui qui est le
              plus apte à résoudre votre problème, car vous êtes directement
              affecté.
            </Text>
            <Text
              fontSize={{ base: '0.875rem', lg: '1.5rem' }}
              fontWeight="medium"
              color="white"
              textAlign={{ base: 'justify', lg: 'start' }}
            >
              - Il s&apos;agit ensuite de trouver la bonne ressource, votre rep.
              pédago. peut vous y aider.
            </Text>
            <Text
              fontSize={{ base: '0.875rem', lg: '1.5rem' }}
              fontWeight="medium"
              color="white"
              textAlign={{ base: 'justify', lg: 'start' }}
            >
              - Les discussions à l&apos;amiable sont à privilégier.
            </Text>
            <Text
              fontSize={{ base: '0.875rem', lg: '1.5rem' }}
              fontWeight="medium"
              color="white"
              textAlign={{ base: 'justify', lg: 'start' }}
            >
              - S&apos;assurer de respecter toutes les personnes impliquées.
            </Text>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
