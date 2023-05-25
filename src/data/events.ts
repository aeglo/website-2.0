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
    name: 'Rentrée et début des initiations',
    date: {
      day: 5,
      month: 9,
      year: 2023,
    },
    time: '8h30',
    location: 'Université laval',
    link: '',
  },
  {
    name: 'Début de la semaine de lecture',
    date: {
      day: 30,
      month: 10,
      year: 2023,
    },
    time: '8h30',
    location: 'Université laval',
    link: '',
  },
];

export default events;
