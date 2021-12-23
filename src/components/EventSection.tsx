import { Heading } from "@chakra-ui/layout";
import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { EventList } from "./events/EventList";

interface EventSectionProps {
  title: string;
  eventItems: Event[];
}

export interface Event {
  date: Date;
  time: string;
  title: string;
  location: string;
}

export const EventSection: React.FC<EventSectionProps> = ({ title, eventItems }) => {
  return (
    <Box id="home" paddingTop={{ base: 0, md: "10vh" }}>
      <Stack direction="column" paddingX={{ base: "5vw", md: "25%" }} textAlign="center">
        <Heading>{title}</Heading>
        <EventList events={eventItems} />
      </Stack>
    </Box>
  );
};
