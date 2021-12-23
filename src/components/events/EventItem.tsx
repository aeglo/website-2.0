import { Text, Box } from "@chakra-ui/layout";
import { Flex, VStack, Heading, HStack, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { getMonthFromDate, getWeekdayFromDate } from "../../utils";
import { Event } from "../EventSection";

interface EventItemProps {
  event: Event;
  key: any;
  locale: string;
}

export const EventItem: React.FC<EventItemProps> = ({ event, key, locale }) => {
  const eventDay = getWeekdayFromDate(event.date, locale);
  const eventDate = `${event.date.getDate()} ${getMonthFromDate(event.date, locale)}`;

  return (
    <Flex
      key={key}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      justifyContent="left"
      flexDirection="column"
      overflow="hidden"
      color="black"
      backgroundColor="base.d100"
      rounded={20}
      flex={1}
      padding={5}
    >
      <VStack marginBottom={6}>
        <Text color="secondary" fontSize="xl">
          {eventDay}
        </Text>
        <Heading fontSize="4xl">{eventDate}</Heading>
        <Text fontSize="lg" fontWeight="semibold">
          {event.time}
        </Text>
        <Heading color="secondary" fontSize="5xl">
          {event.title}
        </Heading>
        <Text fontSize="lg" fontWeight="semibold">
          {event.location}
        </Text>
      </VStack>
    </Flex>
  );
};
