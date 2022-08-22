import React from "react";
import { Event } from "../EventSection";
import EventCarousel from "./EventCarousel";
import { EventItem } from "./EventItem";

interface EventListProps {
  events: Event[];
  locale: string;
}

export const EventList: React.FC<EventListProps> = ({ events, locale }) => {
  return (
    <EventCarousel>
      {events.map((event, index) => (
        <EventItem key={index} event={event} locale={locale} />
      ))}
    </EventCarousel>
  );
};
