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
  representatives: {
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
  };
  pedagogy: {
    title: string;
    subtitle: string;
    comity: {
      title: string;
      description: string;
    };
    reprensentative: {
      title: string;
      description: string;
    };
    documents: {
      title: string;
      description: string;
    };
    problem: {
      title: string;
      description: string;
    };
  };
  footer: {
    address: string;
    email: string;
    follow: string;
    madeBy: string;
  };
}
