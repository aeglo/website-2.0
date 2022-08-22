import { Heading, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";

interface ProblemSolvingSectionProps {
  title: string;
  subtitle: string;
}

export const ProblemSolvingSection: React.FC<ProblemSolvingSectionProps> = ({ title, subtitle }) => {
  return (
    <Flex height="789px" marginTop={16} paddingTop={"128px"} textAlign="center" paddingX={"20vw"} flexDir={"column"} backgroundColor={"main"}>
      <Heading fontSize={{ base: "36px", md: "52px" }} color="white">
        {title}
      </Heading>
      <Text style={{ whiteSpace: 'pre-line'}} fontSize={{ base: "16px", md: "24px" }} color="white" fontWeight={"bold"} marginTop={"48px"} overflow={"none"}>
        {subtitle}
      </Text>
    </Flex>
  );
};
