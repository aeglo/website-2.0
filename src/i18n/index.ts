export interface AegloLocale {
  locale: string;
  navigation: {
    home: string;
    members: string;
    partners: string;
    pedagogy: string;
    chart: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    eventTitle: string;
    membersTitle: string;
    membersSubtitle: string;
    parterns: string;
    linksTitle: string;
    linksSubtitle: string;
  };
  events: {
    title: string;
  };
  members: {
    title: string;
    subtitle: string;
  };
  partners: {
    title: string;
  };
  links: {
    title: string;
    subtitle: string;
    main: {
      name: string;
      grid: string;
      department: string;
      facebook: string;
    };
    footer: {
      address: string;
      email: string;
      follow: string;
      madeBy: string;
    };
  };
}
