import { Box, Heading, Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import React from "react";

interface ProblemSolvingSectionProps {
  title: string;
  subtitle: string;
}

export const ProblemSolvingSection: React.FC<ProblemSolvingSectionProps> = ({ title, subtitle }) => {
  return (
    <Center marginTop={16} background="main">
      <Box height="789px" paddingTop={"128px"} textAlign="center" paddingX="20vw">
        <Heading fontSize="52px" color="white">
          {title}
        </Heading>
        <Text fontSize="24px" color="white" fontWeight={"bold"} marginTop={"48px"}>
          {subtitle}
        </Text>
      </Box>
    </Center>
  );
};
