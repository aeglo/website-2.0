import {
  Heading, Stack, VStack, Text, AspectRatio,
} from '@chakra-ui/react';
import React from 'react';

interface GoogleMapProps {
  mapsApiKey: string;
}

export default function GoogleMap({ mapsApiKey }: GoogleMapProps) {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing="2rem"
      mt={{ base: '8rem', lg: 0 }}
      alignItems="start"
    >
      <VStack>
        <Heading
          color="secondary.default"
          fontSize={{ base: '2rem', lg: '2.25rem' }}
          textAlign={{ base: 'left', lg: 'right' }}
        >
          AEGLO - UNIVERSITÉ LAVAL
        </Heading>
        <Text
          fontSize={{ base: '1rem', lg: '1.5rem' }}
          fontWeight="bold"
          whiteSpace="pre-line"
          textAlign={{ base: 'left', lg: 'right' }}
          alignSelf="start"
        >
          {
            'Pavillon Alexandre Vachon - Local 00113,\nUniversité Laval, G1V 0A6'
          }
        </Text>
      </VStack>
      <AspectRatio
        ratio={16 / 9}
        width={{ base: 'full', lg: '25rem' }}
        height={{ base: 'full', lg: '25rem' }}
      >
        <iframe
          title="aeglo_map"
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:EjExMDQ1IEF2LiBkZSBsYSBNw6lkZWNpbmUsIFF1w6liZWMsIFFDIEcxViwgQ2FuYWRhIlESTwo0CjIJzRz1vcWWuEwRmqMVYOgQiIAaHgsQ7sHuoQEaFAoSCZXIwj7QlrhMEVXc7ti4VBInDBCVCCoUChIJ4VGv48WWuEwRopeCL3Coavo&key=${mapsApiKey}`}
        />
      </AspectRatio>
    </Stack>
  );
}
