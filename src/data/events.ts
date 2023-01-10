interface Event {
  name: string;
  date: string;
  time: string;
  location: string;
  link: string;
}

// Limited to 3 events in the code
// Date string format: DD-MM-YYYY
const events: Event[] = [
  {
    name: 'La meilleure soirée de votre vie!!!',
    date: '01-10-2023',
    time: '19h00',
    location: 'Cafétéria du Pouliot',
    link: 'https://fb.me/e/4dwA3WOk4',
  },
];

export default events;
