import { Box, Link, Stack } from "@chakra-ui/layout";
import { Button, Center } from "@chakra-ui/react";
import React from "react";
import { UsefulLink } from "../UsefulLinksSection";

interface UsefulLinkListProps {
  links: UsefulLink[];
}

export const UsefulLinkList: React.FC<UsefulLinkListProps> = ({ links }) => {
  return (
    <Center>
      <Stack direction={{ base: "column", md: "row" }} wrap="wrap" spacing={{ base: 4, md: 6 }}>
        {links.map((link) => (
          <Link href={link.href} isExternal backgroundColor="lightGrey">
            <Button whiteSpace="normal" borderRadius={0} backgroundColor="lightGrey" _hover={{}}>
              {link.name}
            </Button>
          </Link>
        ))}
      </Stack>
    </Center>
  );
};
