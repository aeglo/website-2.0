import { Link, Stack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";
import { DiscordIcon } from "./icons/DiscordIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

interface SocialMediasProps {}

interface SocialMedia {
  href: string;
  icon: React.ReactNode;
}

export const SocialMedias: React.FC<SocialMediasProps> = ({}) => {
  const SOCIAL_MEDIAS: Array<SocialMedia> = [
    {
      href: "https://discord.gg/3VenuWm",
      icon: <DiscordIcon />
    },
    {
      href: "https://www.facebook.com/AEGLO-101893238568874/",
      icon: <FacebookIcon />
    },
    {
      href: "https://www.linkedin.com/company/19022634",
      icon: <LinkedInIcon />
    },
    {
      href: "https://github.com/aeglo",
      icon: <GithubIcon />
    }
  ];

  return (
    <Box sx={{ position: "sticky", top: "25%" }} marginLeft="80%" marginRight="32px">
      <Stack direction="column" marginLeft="auto" marginRight="16px">
        {SOCIAL_MEDIAS.map((media) => (
          <Link key={media.href} href={media.href} isExternal>
            {media.icon}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
