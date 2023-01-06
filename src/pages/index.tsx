import React from 'react';
import Head from 'next/head';
import Layout from '../layout/Layout';
import Hero from '../components/Hero';
import SocialMedias from '../components/SocialMedias';

export default function Home() {
  return (
    <>
      <Head>
        <title>AEGLO - Accueil</title>
        <meta name="description" content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc." />
        <meta name="keywords" content="aeglo, genie, logiciel, software, engineering, association, étudiant, étudiante, université, laval" />
        <meta property="og:title" content="AEGLO - Accueil" />
        <meta property="og:description" content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc." />
        <meta property="og:url" content="http://aeglo.ift.ulaval.ca/" />
        <meta property="og:site_name" content="AEGLO" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://aeglo.ift.ulaval.ca/site_preview.png" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero img="home_banner.jpeg" title="AEGLO" subtitle={"Association des étudiants et étudiantes en\ngénie logiciel de l'Université Laval"}>
          <SocialMedias direction="row" color="white" />
        </Hero>
      </Layout>
    </>
  );
}
