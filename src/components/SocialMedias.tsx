import { Stack, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import DiscordIcon from '../icons/DiscordIcon';
import FacebookIcon from '../icons/FacebookIcon';
import GithubIcon from '../icons/GithubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';

interface SocialMediasProps {
  direction: 'row' | 'column';
  color: 'main' | 'white';
}

interface SocialMedia {
  name: string;
  href: string;
  icon: any;
}

export default function SocialMedias({ direction, color }: SocialMediasProps) {
  const SOCIAL_MEDIAS: Array<SocialMedia> = [
    {
      name: 'Discord',
      href: 'https://discord.gg/3VenuWm',
      icon: <DiscordIcon boxSize={8} color={color === 'main' ? 'white' : 'darkSection'} />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/AEGLO-101893238568874/',
      icon: <FacebookIcon boxSize={7} color={color === 'main' ? 'white' : 'darkSection'} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/19022634',
      icon: <LinkedInIcon boxSize={6} color={color === 'main' ? 'white' : 'darkSection'} />,
    },
    {
      name: 'Github',
      href: 'https://github.com/aeglo',
      icon: <GithubIcon boxSize={10} color={color === 'main' ? 'white' : 'darkSection'} />,
    },
  ];

  return (
    <Stack direction={direction} spacing={4}>
      {SOCIAL_MEDIAS.map((media) => (
        <Link as={NextLink} key={media.name} href={media.href} isExternal>
          <IconButton
            aria-label={media.name}
            icon={media.icon}
            borderRadius="full"
            padding={6}
            boxSize={8}
            backgroundColor={color}
            _hover={{ backgroundColor: 'secondary.default' }}
            _focus={{ backgroundColor: 'secondary.default' }}
          />
        </Link>
      ))}
    </Stack>
  );
}
