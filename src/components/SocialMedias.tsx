import { Link, Stack } from "@chakra-ui/layout";
import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { DiscordIcon } from "./icons/DiscordIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

interface SocialMediasProps {}

interface SocialMedia {
  name: string;
  href: string;
  icon: any;
}

export const SocialMedias: React.FC<SocialMediasProps> = ({}) => {
  const SOCIAL_MEDIAS: Array<SocialMedia> = [
    {
      name: "Discord",
      href: "https://discord.gg/3VenuWm",
      icon: <DiscordIcon boxSize={8} />
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/AEGLO-101893238568874/",
      icon: <FacebookIcon boxSize={8} />
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/19022634",
      icon: <LinkedInIcon boxSize={8} />
    },
    {
      name: "Github",
      href: "https://github.com/aeglo",
      icon: <GithubIcon boxSize={12} />
    }
  ];

  return (
    <Box sx={{ position: "sticky", top: "25%" }} marginLeft="80%" marginRight="32px">
      <Stack direction="column" marginLeft="auto" marginRight="16px" spacing={4}>
        {SOCIAL_MEDIAS.map((media) => (
          <Link key={media.name} href={media.href} isExternal>
            <IconButton
              aria-label={media.name}
              icon={media.icon}
              borderRadius="50%"
              padding={6}
              boxSize={16}
              backgroundColor="black"
              _hover={{ backgroundColor: "secondary" }}
            />
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
