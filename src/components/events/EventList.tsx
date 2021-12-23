import React from "react";
import { Event } from "../EventSection";
import EventCarousel from "./EventCarousel";
import { EventItem } from "./EventItem";

interface EventListProps {
  events: Event[];
}

export const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <EventCarousel gap={32}>
      {events.map((event, index) => (
        <EventItem event={event} key={index} />
      ))}
    </EventCarousel>
  );
};
