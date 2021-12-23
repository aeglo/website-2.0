import { Box, Heading, Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import React from "react";

interface ProblemSolvingSectionProps {
  title: string;
  subtitle: string;
}

export const ProblemSolvingSection: React.FC<ProblemSolvingSectionProps> = ({ title, subtitle }) => {
  return (
    <Center marginTop={16} background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(77,56,56,1) 100%, rgba(0,212,255,1) 100%);">
      <Box height="60vh" paddingTop={16} textAlign="center" paddingX="20vw">
        <Heading fontSize="4xl" color="white">
          {title}
        </Heading>
        <Text fontSize="xl" color="white" marginTop={4}>
          {subtitle}
        </Text>
      </Box>
    </Center>
  );
};
