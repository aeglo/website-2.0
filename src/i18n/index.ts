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
    partners: string;
    linksTitle: string;
    linksSubtitle: string;
  };
  events: {
    title: string;
  };
  members: {
    title: string;
    subtitle: string;
    jobs: string;
  };
  partners: {
    title: string;
  };
  links: {
    title: string;
    subtitle: string;
  };
  pedagogy: {
    title: string;
    subtitle: string;
    comity: {
      title: string;
      description: string;
    };
    representative: {
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
  contact: {
    title: string;
    subtitle: string;
    location: {
      name: string;
      address: string;
    };
    form: {
      name: string;
      email: string;
      body: string;
      button: string;
      errorMessage: string;
    };
  };
  fourOFour: {
    title: string;
    subtitle: string;
    backHomeText: string;
    pageName: string;
  };
  footer: {
    address: string;
    email: string;
    follow: string;
    madeBy: string;
    copyright: string;
  };
}
