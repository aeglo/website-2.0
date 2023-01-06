import {
  Box, Fade, Flex, Heading, Text,
} from '@chakra-ui/react';
import React from 'react';

interface HeroProps {
  img: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function Hero({
  img, title, subtitle, children,
}: HeroProps) {
  return (
    <Box
      w="100%"
      h="100vh"
      bgImg={`linear-gradient(rgba(27, 31, 43, 0.79), rgba(27, 31, 43, 0.79)), url(${img})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={{ base: '1.5rem', lg: '8rem' }}
    >
      <Fade in>
        <Heading fontSize={{ base: '3.125rem', lg: '7rem' }} color="white" textAlign={{ base: 'center', lg: 'start' }}>
          {title.toUpperCase()}
        </Heading>
      </Fade>
      <Fade in>
        <Text fontSize={{ base: '1.25rem', lg: '1.5rem' }} fontWeight="bold" color="white" maxW={{ base: '100%', lg: '44rem' }} whiteSpace="pre-line" textAlign={{ base: 'center', lg: 'start' }}>{subtitle}</Text>
      </Fade>
      <Fade in>
        <Flex justify={{ base: 'center', lg: 'start' }} mt="1rem">{children}</Flex>
      </Fade>
    </Box>
  );
}
