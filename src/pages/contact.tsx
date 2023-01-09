import { Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import ContactUsForm from '../components/contact/ContactUsForm';
import GoogleMap from '../components/contact/GoogleMap';
import Hero from '../components/Hero';
import Layout from '../layout/Layout';

export async function getStaticProps() {
  return {
    props: {
      publicKey: process.env.EMAIL_PUBLIC_KEY,
      serviceId: process.env.EMAIL_SERVICE,
      templateId: process.env.EMAIL_TEMPLATE,
      mapsApiKey: process.env.MAPS_API_KEY,
    },
  };
}

interface ContactProps {
  publicKey: string;
  serviceId: string;
  templateId: string;
  mapsApiKey: string;
}

export default function Contact({
  publicKey, serviceId, templateId, mapsApiKey,
}: ContactProps) {
  return (
    <>
      <Head>
        <title>AEGLO - Contact</title>
        <meta
          name="description"
          content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc."
        />
        <meta
          name="keywords"
          content="aeglo, genie, logiciel, software, engineering, association, étudiant, étudiante, université, laval"
        />
        <meta property="og:title" content="AEGLO - Contact" />
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
          img="vachon.jpeg"
          title="Contact"
          subtitle="Vous n'avez pas trouvé la réponse à votre recherche ou vous désirez simplement communiquer avec nous?"
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
            Pour nous joindre
          </Heading>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justify="space-between"
          >
            <ContactUsForm
              publicKey={publicKey}
              serviceId={serviceId}
              templateId={templateId}
            />
            <GoogleMap mapsApiKey={mapsApiKey} />
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
