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
