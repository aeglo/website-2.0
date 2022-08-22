import { Link, Text } from "@chakra-ui/layout";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import getMonthFromDate from "../../../utils/getMonthFromDate";
import getWeekdayFromDate from "../../../utils/getWeekdayFromDate";
import { Event } from "../EventSection";

interface EventItemProps {
  event: Event;
  key: any;
  locale: string;
}

export const EventItem: React.FC<EventItemProps> = ({ event, key, locale }) => {
  const eventDay = getWeekdayFromDate(event.date, locale);
  const eventDate = `${event.date.getDate()} ${getMonthFromDate(event.date, locale)}`;

  console.log(event.link);

  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      justifyContent="left"
      flexDirection="column"
      overflow="hidden"
      color="black"
      backgroundColor="base.d100"
      rounded={20}
      flex={1}
      padding={5}
      margin={4}
    >
      <VStack marginBottom={6}>
        <Text color="secondary.default" fontSize="xl">
          {eventDay}
        </Text>

        <Heading fontSize="4xl">{eventDate}</Heading>

        <Text fontSize="lg" fontWeight="semibold">
          {event.time}
        </Text>

        <Link key={key} href={event.link} isExternal>
          <Heading color="secondary.default" fontSize="5xl">
            {event.title}
          </Heading>
        </Link>

        <Text fontSize="lg" fontWeight="semibold">
          {event.location}
        </Text>
      </VStack>
    </Flex>
  );
};
