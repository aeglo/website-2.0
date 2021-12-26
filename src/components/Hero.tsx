import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <>
      <Box id="home" paddingTop={{ base: 0, md: "10vh" }}>
        <Stack direction="column" paddingX={{ base: "5vw", md: "25%" }} textAlign="center" marginBottom={"24px"}>
          <Heading fontSize={{ base: "36px", md: "52px" }}>{title}</Heading>
          <Text marginTop="2vh" fontSize={{ base: "16px", md: "20px" }} fontWeight="bold" textAlign="center" marginX={100}>
            {subtitle}
          </Text>
        </Stack>
      </Box>
    </>
  );
};
