import { Heading, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { RepList } from "./reps/RepList";

export interface Representative {
  name: string;
  role: string;
  pictureUrl: string;
  email: string;
}

interface RepresentativesSecionProps {
  title: string;
  subtitle: string;
  reps: Representative[];
}

export const RepresentativesSecion: React.FC<RepresentativesSecionProps> = ({ title, subtitle, reps }) => {
  return (
    <HStack>
      <Heading>{title}</Heading>
      <Text>{subtitle}</Text>
      <RepList reps={reps} />
    </HStack>
  );
};
