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
    name: "Épluchette de blé d'Inde",
    date: {
      day: 21,
      month: 9,
      year: 2024,
    },
    time: '16h30',
    location: 'Base de plein air de Sainte-Foy',
    link: 'https://evelya.co/universite-laval/genie-logiciel/epluchette-de-bledinde-de-l-aeglo-4372?fbclid=IwY2xjawFMHF5leHRuA2FlbQIxMQABHRAxNNZ2dR3olBaQbyQ3cTWuo7kXkb-QOFPBmTm8cNnHv0_JRW3PWkDczw_aem_oQugMXeATMtl36uJCjUzAw',
  },
];

export default events;
