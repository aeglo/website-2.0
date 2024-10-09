interface Executive {
  name: string;
  title: string;
  email: string;
  desc: string;
  img: string;
}

const executives: Executive[] = [
  {
    name: 'Kim St-Pierre',
    title: 'Président',
    email: 'president-aeglo@ift.ulaval.ca',
    desc: "Le président est responsable d'organiser et présider les rencontres du conseil d'administration. Il aide aussi les autres membres du CA et s'assure du bon déroulement des différents projets entrepris par l'association.",
    img: '/executives/Kim_St-Pierre.jpg',
  },
  {
    name: 'Nicolas_Lauzon',
    title: 'Secrétaire-trésorier(e)',
    email: 'tresorier.aeglo@ift.ulaval.ca',
    desc: "Le secrétaire-trésorier est chargé d'effectuer les procès-verbaux lors des rencontres du CA, de gérer l'argent de l'association et de maintenir l'inventaire du local de l'AEGLO.",
    img: '/executives/Nicolas_Lauzon.jpg',
  },
  {
    name: 'Lamine Gueye',
    title: 'Rep. aux communications',
    email: 'aeglo@aeglo.ift.ulaval.ca',
    desc: "Le représentant aux communications est responsable de transmettre l'information pertinente aux membres via les différentes plateformes. Il est aussi responsable de la boîte courriel de l'association et du site web.",
    img: '/executives/placeholder.png',
  },
  {
    name: 'Xavier Hamel',
    title: 'Rep. aux affaires pédagogiques',
    email: 'aeglo@aeglo.ift.ulaval.ca',
    desc: "Le représentant aux affaires pédagogiques effectue le pont entre le département et les étudiants du baccalauréat. Il est entre autres responsable du comité de programme qui s'assure de la qualité du programme. Il est aussi là pour épauler les membres au niveau pédagogique.",
    img: '/executives/Xavier_Hamel.jpeg',
  },
  {
    name: 'Sébastien Dubé',
    title: 'Rep. aux affaires socioculturelles',
    email: 'socioculturelle.aeglo@ift.ulaval.ca',
    desc: "Le représentant aux affaires socioculturelles est responsable d'organiser les différentes activités sociales de l'association.",
    img: '/executives/placeholder.png',
  },
  {
    name: 'Samuel Grenier',
    title: 'Rep. aux activités finissantes',
    email: 'finissants@aeglo.ca',
    desc: "Le représentant aux activités finissantes est responsable d'organiser les différentes activités de fin d'études des étudiants telles que le bal des finissants et la cérémonie du jonc.",
    img: '/executives/Samuel_Grenier.jpg',
  },
  {
    name: 'Zachary Mathieu',
    title: 'Rep. aux affaires externes',
    email: 'externe@aeglo.ca',
    desc: "Le représentant aux affaires externes représente les intérêts de l'AEGLO lors de rencontres du CA de l'AESGUL et lors des CAUCUS de la CADEUL. Il effectue aussi des rapports de ces rencontres et les transmet au CA de l'AEGLO.",
    img: '/executives/placeholder.png',
  },
  {
    name: 'Antoine Morin',
    title: 'Rep. génie logiciel',
    email: 'genielogiciel@aeglo.ca',
    desc: "Le représentant génie logiciel effectue le pont entre le conseil d'administration de l'AEGLO et celui de l'ASETIN.",
    img: '/executives/placeholder.png',
  },
  {
    name: 'Loïck Asselin Lucas',
    title: 'Rep. première année',
    email: 'aeglo@aeglo.ift.ulaval.ca',
    desc: "Le représentant première année représente les intérêts des nouveaux arrivants dans le baccalauréat et s'occupe de leur intégration.",
    img: '/executives/placeholder.png',
  },
  {
    name: 'Loïc Boutet',
    title: 'Rep. Commandites',
    email: 'commandite.aeglo@ift.ulaval.ca',
    desc: "Le représentant des commandites est l'intermédiaire entre l'association et les différents partenaires. Il s'occupe aussi d'organiser les différents événements impliquant les entreprises commanditaires.",
    img: '/executives/Loic_Boutet.jpg',
  },
];

export default executives;
