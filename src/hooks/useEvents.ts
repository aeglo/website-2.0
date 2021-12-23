interface RawEvent {
  date: string;
  titleFR: string;
  titleEN: string;
  timeFR: string;
  timeEN: string;
  location: string;
}

const useEvents = (locale: string) => {
  const events: RawEvent[] = require("../data/events.json");

  // TODO refactor ca ptetre c'est pas tant nice
  switch (locale) {
    case "fr":
      return events.map((event) => ({ date: new Date(event.date), title: event.titleFR, time: event.timeFR, location: event.location }));

    case "en":
      return events.map((event) => ({ date: new Date(event.date), title: event.titleEN, time: event.timeEN, location: event.location }));

    default:
      return [];
  }
};

export default useEvents;
