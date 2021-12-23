import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <Box id="home" justify="start" height="40vh" paddingX="25%" paddingTop="10vh">
      <Heading fontSize="2vw">{title}</Heading>
      <Text marginTop="2vh" fontWeight="semibold">
        {subtitle}
      </Text>
    </Box>
  );
};
