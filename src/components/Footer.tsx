import {
  AspectRatio,
  Box,
  Flex,
  Img,
  Link,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import SocialMedias from './SocialMedias';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bgColor="darkSection"
      py={{ base: '3.125rem', lg: '6.25rem' }}
      px={{ base: '1.5rem', lg: '8rem' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align={{ base: 'center', lg: 'flex-start' }}
      >
        <Stack spacing="5.625rem">
          <Flex>
            <Stack direction={{ base: 'column', lg: 'row' }} align="center">
              <AspectRatio width="8rem">
                <Img src="aeglo_logo.png" alt="AEGLO Logo" />
              </AspectRatio>
              <Stack
                direction="column"
                spacing={0}
                align={{ base: 'center', lg: 'flex-start' }}
              >
                <Text fontSize="1.25rem" fontWeight="bold" color="white">
                  AEGLO - Université Laval
                </Text>
                <Text fontSize="1rem" fontWeight="normal" color="white">
                  Pavillon Alexandre Vachon - Local 00113,
                </Text>
                <Text fontSize="1rem" fontWeight="normal" color="white">
                  Université Laval, G1V 0A6
                </Text>
                <Stack direction="row" justify="left">
                  <Text fontSize="1rem" fontWeight="bold" color="white">
                    {'Courriel: '}
                  </Text>
                  <Link
                    as={NextLink}
                    fontSize="1rem"
                    fontWeight="normal"
                    color="secondary.default"
                    href="mailto:aeglo@aeglo.ift.ulaval.ca"
                  >
                    aeglo@aeglo.ift.ulaval.ca
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Flex>
          <Show above="lg">
            <Stack direction="row" spacing="1.5rem">
              <Link
                as={NextLink}
                fontSize="1.25rem"
                fontWeight="medium"
                color="white"
                href="/"
                _hover={{ textDecoration: 'none', color: 'secondary.default' }}
                _active={{ color: 'secondary.default' }}
              >
                Accueil
              </Link>
              <Link
                as={NextLink}
                fontSize="1.25rem"
                fontWeight="medium"
                color="white"
                href="/executif"
                _hover={{ textDecoration: 'none', color: 'secondary.default' }}
                _active={{ color: 'secondary.default' }}
              >
                Exécutif
              </Link>
              <Link
                as={NextLink}
                fontSize="1.25rem"
                fontWeight="medium"
                color="white"
                href="/partenaires"
                _hover={{ textDecoration: 'none', color: 'secondary.default' }}
                _active={{ color: 'secondary.default' }}
              >
                Partenaires
              </Link>
              <Link
                as={NextLink}
                fontSize="1.25rem"
                fontWeight="medium"
                color="white"
                href="/pedagogie"
                _hover={{ textDecoration: 'none', color: 'secondary.default' }}
                _active={{ color: 'secondary.default' }}
              >
                Pédagogie
              </Link>
              <Link
                as={NextLink}
                fontSize="1.25rem"
                fontWeight="medium"
                color="white"
                href="/files/charte.pdf"
                _hover={{ textDecoration: 'none', color: 'secondary.default' }}
                _active={{ color: 'secondary.default' }}
                isExternal
              >
                Charte
              </Link>
              <Link
                as={NextLink}
                fontSize="1.25rem"
                fontWeight="medium"
                color="white"
                href="/contact"
                _hover={{ textDecoration: 'none', color: 'secondary.default' }}
                _active={{ color: 'secondary.default' }}
              >
                Contact
              </Link>
            </Stack>
          </Show>
        </Stack>

        <Stack
          justify={{ base: 'start', lg: 'end' }}
          spacing="1rem"
          align={{ base: 'center', lg: 'end' }}
          pt={{ base: '2.25rem', lg: 0 }}
        >
          <Text
            fontSize={{ base: '1rem', lg: '1.25rem' }}
            fontWeight="medium"
            color="white"
            align="right"
          >
            Suivez-nous
          </Text>
          <SocialMedias direction="row" color="white" />
          <Stack justify="right" spacing={0}>
            <Text
              fontSize={{ base: '1rem', lg: '1.25rem' }}
              fontWeight="medium"
              color="white"
              align={{ base: 'center', lg: 'end' }}
            >
              Réalisé par:
            </Text>
            <Link
              as={NextLink}
              fontSize={{ base: '1rem', lg: '1.25rem' }}
              fontWeight="medium"
              color="secondary.default"
              textAlign={{ base: 'center', lg: 'end' }}
              href="https://www.linkedin.com/in/laurent-aubin-84a907152/"
              isExternal
            >
              Laurent Aubin
            </Link>
            <Link
              as={NextLink}
              fontSize={{ base: '1rem', lg: '1.25rem' }}
              fontWeight="medium"
              color="secondary.default"
              textAlign={{ base: 'center', lg: 'end' }}
              href="https://www.linkedin.com/in/cduchesne-1/"
              isExternal
            >
              Christophe Duchesne
            </Link>
            <Link
              as={NextLink}
              fontSize={{ base: '1rem', lg: '1.25rem' }}
              fontWeight="medium"
              color="secondary.default"
              textAlign={{ base: 'center', lg: 'end' }}
              href="https://www.linkedin.com/in/fabienpoulin/"
              isExternal
            >
              Fabien Poulin
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Text
        fontSize="1rem"
        fontWeight="normal"
        color="white"
        align="center"
        mt={{ base: '3.125rem', lg: '6.25rem' }}
      >
        {`© Copyright ${currentYear} AEGLO - Tous droits réservés`}
      </Text>
    </Box>
  );
}
