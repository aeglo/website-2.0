import { Event } from "../components/home/EventSection";

interface EventDto {
  date: string;
  titleFR: string;
  titleEN: string;
  timeFR: string;
  timeEN: string;
  location: string;
  link: string;
}

const useEvents = (locale: string): Event[] => {
  const events: EventDto[] = require("../data/events.json");

  // TODO refactor ca ptetre c'est pas tant nice
  switch (locale) {
    case "fr":
      return events.map((event) => ({
        date: new Date(event.date),
        title: event.titleFR,
        time: event.timeFR,
        location: event.location,
        link: event.link
      }));

    case "en":
      return events.map((event) => ({
        date: new Date(event.date),
        title: event.titleEN,
        time: event.timeEN,
        location: event.location,
        link: event.link
      }));

    default:
      return [];
  }
};

export default useEvents;
