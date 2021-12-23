import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <Box id="home" justify="start" height="40vh" paddingX={{ base: "5vw", md: "25%" }} paddingTop={{ base: 0, md: "10vh" }}>
      <Heading fontSize="4xl">{title}</Heading>
      <Text marginTop="2vh" fontWeight="semibold">
        {subtitle}
      </Text>
    </Box>
  );
  // TODO Add photoshopped picture
};
