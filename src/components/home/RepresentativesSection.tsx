import { Heading, Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import React from "react";
import { RepList } from "./reps/RepList";

export interface Representative {
  name: string;
  role: string;
  pictureUrl: string;
  email: string;
}

interface RepresentativesSectionProps {
  title: string;
  subtitle: string;
  reps: Representative[];
}

export const RepresentativesSecion: React.FC<RepresentativesSectionProps> = ({ title, subtitle, reps }) => {
  return (
    <VStack id="representatives" backgroundColor="dark" color="white">
      <Heading marginTop={8}>{title}</Heading>
      <Text fontSize="lg" fontWeight="semibold" marginBottom={8}>
        {subtitle}
      </Text>
      <RepList reps={reps} />
    </VStack>
  );
};
