import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../layout/Layout';

export default function Executive() {
  return (
    <>
      <Head>
        <title>AEGLO - Exécutif</title>
        <meta name="description" content="Bienvenue sur le site officiel de l'AEGLO, votre association pour étudiants en Génie Logiciel. Vous trouverez ici les liens vers toutes les ressources importantes en lien avec le baccalauréat en Génie Logiciel à l'Université Laval ainsi que les événements, sorties, partys, etc." />
        <meta name="keywords" content="aeglo, genie, logiciel, software, engineering, association, étudiant, étudiante, université, laval" />
        <meta property="og:title" content="AEGLO - Exécutif" />
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
        <Hero img="aeglo_executif.jpeg" title="Exécutif" subtitle="Une merveilleuse équipe présente pour vous épauler et vous organiser de super activités!" />
      </Layout>
    </>
  );
}
