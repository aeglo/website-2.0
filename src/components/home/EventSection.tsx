import { Heading } from "@chakra-ui/layout";
import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { EventList } from "./events/EventList";

interface EventSectionProps {
  title: string;
  eventItems: Event[];
  locale: string;
}

export interface Event {
  date: Date;
  time: string;
  title: string;
  location: string;
  link: string;
}

export const EventSection: React.FC<EventSectionProps> = ({ title, eventItems, locale }) => {
  return (
    <Box id="home" paddingTop={{ base: 0, md: "10vh" }}>
      <Stack direction="column" paddingX={{ base: "5vw", md: "25%" }} textAlign="center" marginY={{base: "128px", md: "196px"}}>
        <Heading marginBottom={8}>{title}</Heading>
        <EventList events={eventItems} locale={locale} />
      </Stack>
    </Box>
  );
};
