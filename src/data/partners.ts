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
    website: 'https://www.lahaiegf.com/',
    plan: 'Platinum',
  },
  {
    name: 'Bell',
    logo: '/partners/bell_logo.png',
    website: 'https://www.bell.ca/',
    plan: 'Silver',
  },
  {
    name: 'Guru',
    logo: '/partners/guru_logo.png',
    website: 'https://www.guruenergy.com/',
    plan: 'Special',
  },
];

export default partners;
