interface Partner {
  name: string;
  logo: string;
  website: string;
  plan: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Special';
}

const partners: Partner[] = [
  {
    name: 'Dialog Insight',
    logo: '/partners/dialog_insight_logo.png',
    website: 'https://www.dialoginsight.com/',
    plan: 'Platinum',
  },
  {
    name: 'Ingenia Groupe Finance',
    logo: '/partners/ingenia_logo.png',
    website: 'https://ingeniagf.ca/',
    plan: 'Platinum',
  },
  {
    name: 'Innovmetric',
    logo: '/partners/innovmetric_logo.png',
    website: 'https://www.innovmetric.com/fr',
    plan: 'Silver',
  },
  {
    name: 'Mirego',
    logo: '/partners/mirego_logo.png',
    website: 'https://www.mirego.com/fr',
    plan: 'Silver',
  },
  {
    name: 'Bell',
    logo: '/partners/bell_logo.png',
    website: 'https://www.bell.ca/Accueil',
    plan: 'Silver',
  },
  {
    name: 'Pizza Salvatoré',
    logo: '/partners/salvatore_logo.png',
    website: 'https://salvatore.com/fr/',
    plan: 'Special',
  },
];

export default partners;
