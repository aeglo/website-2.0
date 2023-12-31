interface Event {
  name: string;
  date: {
    day: number;
    month: number;
    year: number;
  };
  time: string;
  location: string;
  link: string;
}

// Limited to 3 events in the code
const events: Event[] = [
  {
    name: 'Soirée IGLOo iGLOo',
    date: {
      day: 4,
      month: 10,
      year: 2023,
    },
    time: '20h00',
    location: 'Le Marshall',
    link: 'https://www.facebook.com/event_invite/3X9fytkvu/',
  },
  {
    name: 'Assemblée générale',
    date: {
      day: 11,
      month: 10,
      year: 2023,
    },
    time: '12h30',
    location: 'Pavillon Alexandre-Vachon',
    link: '',
  },
];

export default events;
