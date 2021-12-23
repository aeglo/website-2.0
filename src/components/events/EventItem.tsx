import { Text, Box } from "@chakra-ui/layout";
import { Flex, VStack, Heading, HStack, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { capsFirst } from "../../utils";
import { Event } from "../EventSection";

interface EventItemProps {
  event: Event;
  key: any;
}

export const EventItem: React.FC<EventItemProps> = ({ event, key }) => {
  return (
    <Flex
      key={key}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      justifyContent="space-between"
      flexDirection="column"
      overflow="hidden"
      color="gray.300"
      bg="base.d100"
      rounded={5}
      flex={1}
      p={5}
    >
      <VStack mb={6}>
        <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="left" w="full" mb={2}>
          {capsFirst(event.title)}
        </Heading>
        <Text w="full">{capsFirst(event.date)}</Text>
      </VStack>
    </Flex>
  );
};
