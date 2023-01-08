interface Event {
  name: string;
  date: string;
  time: string;
  location: string;
  link: string;
}

// Limited to 3 events in the code
const events: Event[] = [
  {
    name: 'La meilleure soirée de votre vie!!!',
    date: '2023-01-10',
    time: '19h00',
    location: 'Cafétéria du Pouliot',
    link: 'https://fb.me/e/4dwA3WOk4',
  },
];

export default events;
