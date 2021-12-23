import { AspectRatio, Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MobileMediaOverlay } from "./medias/MobileMediaOverlay";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <Box id="home" paddingTop={{ base: 0, md: "10vh" }}>
      <Stack direction="column" paddingX={{ base: "5vw", md: "25%" }} textAlign="center">
        <Heading fontSize={{ base: "4xl", md: "6xl" }}>{title}</Heading>
        <Text marginTop="2vh" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" textAlign="center" marginX={100}>
          {subtitle}
        </Text>
        <MobileMediaOverlay />
      </Stack>

      <AspectRatio width="90vw" ratio={16 / 8}>
        <Image src="images/background_home.png" alt="Home image" />
      </AspectRatio>
    </Box>
  );
};
