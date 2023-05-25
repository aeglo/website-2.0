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

const events: Event[] = [
  {
    name: 'Assemblée générale',
    date: {
      day: 27,
      month: 3,
      year: 2023,
    },
    time: '12h00',
    location: 'Pavillon Alexandre-Vachon',
    link: 'https://fb.me/e/3tiAdy9US',
  },
];

export default events;
