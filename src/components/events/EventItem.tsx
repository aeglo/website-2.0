import React from "react";
import { Event } from "../EventSection";

interface EventItemProps {
  event: Event;
}

export const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return <div>{event.time}</div>;
};
