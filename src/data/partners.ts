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
    name: 'LFX Cabinet de services financiers',
    logo: '/partners/LFX_logo.jpg',
    website: 'https://www.teamlfx.com/',
    plan: 'Gold',
  },

  {
    name: 'Coveo',
    logo: '/partners/Logo Coveo.webp',
    website: 'https://www.coveo.com/fr',
    plan: 'Gold',
  },
  {
    name: 'Fondation Previan',
    logo: '/partners/previan_logo.png',
    website: 'https://previan.com/fr/fondation/',
    plan: 'Silver',
  },
  {
    name: 'Innovmetric',
    logo: '/partners/innovmetric_logo.png',
    website: 'https://www.innovmetric.com/fr',
    plan: 'Silver',
  },
  {
    name: 'Pizza Salvatoré',
    logo: '/partners/salvatore_logo.png',
    website: 'https://salvatore.com/fr/',
    plan: 'Special',
  },
  {
    name: 'Guru',
    logo: '/partners/guru_logo.png',
    website: 'https://www.guruenergy.com/',
    plan: 'Special',
  },
];

export default partners;
