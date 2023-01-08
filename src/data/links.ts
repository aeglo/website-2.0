interface Link {
  name: string;
  url: string;
}

interface Category {
  title: string;
  links: Link[];
}

const links: Category[] = [
  {
    title: 'Importants',
    links: [
      {
        name: 'Grille de cheminement',
        url: 'https://www.ift.ulaval.ca/programmes-et-cours/premier-cycle/grilles-de-cheminement-glo',
      },
      {
        name: "Département d'informatique et de génie logiciel",
        url: 'https://www.ift.ulaval.ca/accueil/',
      },
      {
        name: 'ASETIN - Association des étudiants en informatique',
        url: 'http://asetin.ift.ulaval.ca/',
      },
      {
        name: 'ASETIN - Groupe Facebook',
        url: 'https://www.facebook.com/groups/106548276034825/',
      },
      {
        name: 'Cheat Sheet',
        url: '/files/CheatSheet.pdf',
      },
    ],
  },
  {
    title: 'Activités',
    links: [
      {
        name: "CS Games - Compétition d'informatique de niveau international",
        url: 'http://csgames.org/',
      },
      {
        name: 'Festival de sciences et génie',
        url: 'https://www.facebook.com/FestivalSetG/',
      },
      {
        name: 'Jeux de génie',
        url: 'http://www.jdglaval.com/',
      },
      {
        name: "CQI - Compétition québécoise d'ingénierie",
        url: 'https://cqi-qec.qc.ca/2023/',
      },
      {
        name: 'Club de développement de jeux vidéo',
        url: 'http://gamedev.fsg.ulaval.ca/',
      },
      {
        name: 'Club de sécurité informatique',
        url: 'http://clubsecuriteinformatique.ift.ulaval.ca/',
      },
      {
        name: "Club d'intelligence artificielle",
        url: 'https://cia.ift.ulaval.ca/',
      },
      {
        name: 'Club éco-numérique',
        url: 'https://cen.ift.ulaval.ca/',
      },
    ],
  },
  {
    title: 'Affaires',
    links: [
      {
        name: 'AESGUL - Association des étudiants en sciences et génie',
        url: 'http://www.aesgul.com/',
      },
      {
        name: 'CADEUL',
        url: 'https://cadeul.com/',
      },
      {
        name: 'Faculté des sciences et de génie',
        url: 'https://www.fsg.ulaval.ca/',
      },
      {
        name: 'Service du développement professionnel',
        url: 'https://www.sdp.ulaval.ca/',
      },
      {
        name: 'Université Laval',
        url: 'https://www.ulaval.ca/',
      },
      {
        name: 'Demande de financement',
        url: '/files/FormulaireDemandeFinancementAEGLO.pdf',
      },
    ],
  },
  {
    title: 'Cours',
    links: [
      {
        name: 'Grille de cheminement',
        url: 'https://www.ift.ulaval.ca/programmes-et-cours/premier-cycle/grilles-de-cheminement-glo',
      },
    ],
  },
];

export default links;
