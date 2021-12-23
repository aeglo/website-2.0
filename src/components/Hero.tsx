import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { DesktopMediaOverlay } from "./medias/DesktopMediaOverlay";
import { MobileMediaOverlay } from "./medias/MobileMediaOverlay";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <>
      <Box id="home" justify="start" height="40vh" paddingX={{ base: "5vw", md: "25%" }} paddingTop={{ base: 0, md: "10vh" }}>
        <Stack direction="column" textAlign="center">
          <Heading fontSize="6xl">{title}</Heading>
          <Text marginTop="2vh" fontSize="xl" fontWeight="semibold" textAlign="center" marginX={100}>
            {subtitle}
          </Text>
          <MobileMediaOverlay />
        </Stack>
      </Box>
    </>
  );
  // TODO Add photoshopped picture
};
