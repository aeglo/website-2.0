import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { DesktopMediaOverlay } from "./home/medias/DesktopMediaOverlay";
import { MobileMediaOverlay } from "./home/medias/MobileMediaOverlay";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <>
      <DesktopMediaOverlay />
      <Box id="home" paddingTop={{ base: 0, md: "10vh" }} marginBottom={16}>
        <Stack direction="column" paddingX={{ base: "5vw", md: "25%" }} textAlign="center">
          <Heading fontSize={{ base: "4xl", md: "6xl" }}>{title}</Heading>
          <Text marginTop="2vh" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" textAlign="center" marginX={100}>
            {subtitle}
          </Text>
          <MobileMediaOverlay />
        </Stack>
      </Box>
    </>
  );
};
