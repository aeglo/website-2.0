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
    name: 'La meilleure soirée de votre vie!!!',
    date: {
      day: 10,
      month: 1,
      year: 2023,
    },
    time: '19h00',
    location: 'Cafétéria du Pouliot',
    link: 'https://fb.me/e/4dwA3WOk4',
  },
];

export default events;
