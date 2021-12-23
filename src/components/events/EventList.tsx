import React from "react";
import { Event } from "../EventSection";
import { EventItem } from "./EventItem";

interface EventListProps {
  events: Event[];
}

export const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <EventItem event={event} />
      ))}
    </>
  );
};
