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
    name: "Soirée film d'horreur",
    date: {
      day: 30,
      month: 10,
      year: 2023,
    },
    time: '20h00',
    location: 'Pavillon Alexandre-Vachon',
    link: '',
  },
  {
    name: 'Randonnée des bigs brains',
    date: {
      day: 4,
      month: 11,
      year: 2023,
    },
    time: '8h00',
    location: 'À déterminer',
    link: '',
  },
  {
    name: 'Soirée jeux de société',
    date: {
      day: 14,
      month: 11,
      year: 2023,
    },
    time: '20h00',
    location: 'Pavillon Alexandre-Vachon',
    link: '',
  },
];

export default events;
