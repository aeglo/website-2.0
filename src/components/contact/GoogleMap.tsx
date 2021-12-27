import { AspectRatio, Heading, HStack, Text, Stack, VStack, Box } from "@chakra-ui/react";
import React from "react";

interface GoogleMapProps {
  title: string;
  address: string;
}

// TODO Mettre la cle api dans un .env ?
export const GoogleMap: React.FC<GoogleMapProps> = ({ title, address }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} width="full">
      <VStack>
        <Heading color="secondary.default" fontSize={"36px"}>
          {title}
        </Heading>
        <Text fontSize="24px" fontWeight="bold" maxW={"393px"} textAlign={"left"}>
          {address}
        </Text>
      </VStack>
      <AspectRatio ratio={16 / 9} width={{ base: "full", md: "400px" }} height={{ base: "full", md: "400px" }}>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:EjExMDQ1IEF2LiBkZSBsYSBNw6lkZWNpbmUsIFF1w6liZWMsIFFDIEcxViwgQ2FuYWRhIlESTwo0CjIJzRz1vcWWuEwRmqMVYOgQiIAaHgsQ7sHuoQEaFAoSCZXIwj7QlrhMEVXc7ti4VBInDBCVCCoUChIJ4VGv48WWuEwRopeCL3Coavo&key=AIzaSyDf36AA2ti4UhThknwcYaIdK0kMKCuxzQc" />
      </AspectRatio>
    </Stack>
  );
};
