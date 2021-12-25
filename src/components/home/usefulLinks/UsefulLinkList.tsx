import { Box, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import { UsefulLink } from "../UsefulLinksSection";

interface UsefulLinkListProps {
  links: UsefulLink[];
}

export const UsefulLinkList: React.FC<UsefulLinkListProps> = ({ links }) => {
  return (
    <Box>
      {links.map((link) => (
        <Link href={link.href} isExternal>
          <Button>{link.name}</Button>
        </Link>
      ))}
    </Box>
  );
};
