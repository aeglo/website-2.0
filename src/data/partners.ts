interface Partner {
  name: string;
  logo: string;
  website: string;
  plan: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
}

const partners: Partner[] = [
  {
    name: 'Dialog Insight',
    logo: '/partners/dialog_insight_logo.png',
    website: 'https://www.dialoginsight.com/',
    plan: 'Platinum',
  },
  {
    name: 'Lahaie Gestion Financière',
    logo: '/partners/lahaie_logo.png',
    website: 'https://www.lahaiegf.com/',
    plan: 'Gold',
  },
  {
    name: 'Desjardins',
    logo: '/partners/desjardins_logo.svg',
    website: 'https://www.desjardins.com/',
    plan: 'Silver',
  },
  {
    name: 'Bell',
    logo: '/partners/bell_logo.png',
    website: 'https://www.bell.ca/',
    plan: 'Silver',
  },
  {
    name: 'Snipcart',
    logo: '/partners/snipcart_logo.png',
    website: 'https://snipcart.com/',
    plan: 'Silver',
  },
];

export default partners;
