import { Avatar } from "@chakra-ui/avatar";
import { Heading, VStack, Text } from "@chakra-ui/layout";
import React from "react";
import { Section } from "../../pages/pedagogy";

interface SectionProps {
  section: Section;
}

export const SectionItem: React.FC<SectionProps> = ({ section }) => {
  return (
    <VStack maxWidth={{ base: "100%", md: "25%" }}>
      <Avatar icon={section.icon} backgroundColor="secondary" boxSize={24} />
      <Heading>{section.title}</Heading>
      <Text>{section.description}</Text>
    </VStack>
  );
};
