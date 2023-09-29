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
    plan: 'Platinum',
  },
  {
    name: 'Coveo',
    logo: '/partners/Logo Coveo.webp',
    website: 'https://www.coveo.com/fr',
    plan: 'Gold',
  },
  {
    name: 'Guru',
    logo: '/partners/guru_logo.png',
    website: 'https://www.guruenergy.com/',
    plan: 'Special',
  },
];

export default partners;
