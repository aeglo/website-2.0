import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import AegloLogo from '../icons/AegloLogo';
import LocaleMenu from './LocaleMenu';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollListener = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 0) {
      if (!isScrolled) {
        setIsScrolled(true);
      }
    } else {
      setIsScrolled(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [scrollListener]);

  return (
    <Box
      bg={isScrolled ? 'white' : 'transparent'}
      color={isScrolled ? 'main' : 'white'}
      boxShadow={
        isScrolled ? '0 0.25rem 1rem -1rem rgba(0, 0, 0, 0.75)' : 'none'
      }
      w="100%"
      position="fixed"
      top="0"
      zIndex="100"
      transition="all 0.3s ease-in-out"
    >
      <Flex
        py={isScrolled ? '1rem' : '4rem'}
        px={{ base: '1.5rem', lg: '8rem' }}
        align="center"
        justify="space-between"
      >
        <Flex>
          <IconButton
            onClick={onOpen}
            variant="ghost"
            aria-label="Menu"
            icon={(
              <HamburgerIcon
                w={{ base: '24px', lg: '40px' }}
                h={{ base: '24px', lg: '40px' }}
              />
            )}
            _hover={{ color: 'secondary.default' }}
            _active={{ color: 'secondary.default' }}
          />
        </Flex>

        <Flex ml={{ lg: '3rem' }}>
          <Link as={NextLink} href="/">
            <AegloLogo
              w={{ base: '137.74px', lg: '169px' }}
              h={{ base: '36.15px', lg: '44.35px' }}
              color={isScrolled ? 'main' : 'white'}
            />
          </Link>
        </Flex>

        <Flex flex={{ lg: 1 }} justify="flex-end">
          <LocaleMenu />
        </Flex>
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen} isFullHeight>
        <DrawerOverlay />
        <DrawerContent py="4rem" px={{ base: '1.5rem', lg: '8rem' }}>
          <Flex>
            <IconButton
              onClick={onClose}
              variant="ghost"
              aria-label="Close Menu"
              icon={(
                <CloseIcon
                  w={{ base: '24px', lg: '40px' }}
                  h={{ base: '24px', lg: '40px' }}
                />
              )}
              _hover={{ color: 'secondary.default' }}
              _active={{ color: 'secondary.default' }}
            />
          </Flex>
          <Flex direction="column" mt={{ base: '2rem', lg: '4rem' }}>
            <Link
              as={NextLink}
              href="/"
              color="main"
              _hover={{ textDecoration: 'none', color: 'secondary.default' }}
            >
              <Heading>Accueil</Heading>
            </Link>
            <Link
              as={NextLink}
              href="/"
              mt={{ base: '2rem', lg: '4rem' }}
              color="main"
              _hover={{ textDecoration: 'none', color: 'secondary.default' }}
            >
              <Heading>Exécutif</Heading>
            </Link>
            <Link
              as={NextLink}
              href="/"
              mt={{ base: '2rem', lg: '4rem' }}
              color="main"
              _hover={{ textDecoration: 'none', color: 'secondary.default' }}
            >
              <Heading>Partenaires</Heading>
            </Link>
            <Link
              as={NextLink}
              href="/"
              mt={{ base: '2rem', lg: '4rem' }}
              color="main"
              _hover={{ textDecoration: 'none', color: 'secondary.default' }}
            >
              <Heading>Pédagogie</Heading>
            </Link>
            <Link
              as={NextLink}
              href="/"
              mt={{ base: '2rem', lg: '4rem' }}
              color="main"
              _hover={{ textDecoration: 'none', color: 'secondary.default' }}
            >
              <Heading>Charte</Heading>
            </Link>
            <Link
              as={NextLink}
              href="/"
              mt={{ base: '2rem', lg: '4rem' }}
              color="main"
              _hover={{ textDecoration: 'none', color: 'secondary.default' }}
            >
              <Heading>Contact</Heading>
            </Link>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
