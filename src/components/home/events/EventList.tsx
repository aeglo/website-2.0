import React from "react";
import { Event } from "../EventSection";
import ItemCarousel from "../../ItemCarousel";
import { EventItem } from "./EventItem";

interface EventListProps {
  events: Event[];
  locale: string;
}

export const EventList: React.FC<EventListProps> = ({ events, locale }) => {
  return (
    <ItemCarousel gap={32}>
      {events.map((event, index) => (
        <EventItem key={index} event={event} locale={locale} />
      ))}
    </ItemCarousel>
  );
};
