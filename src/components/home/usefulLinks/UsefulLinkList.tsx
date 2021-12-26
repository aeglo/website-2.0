import { Box, Link, Stack } from "@chakra-ui/layout";
import { Button, Center } from "@chakra-ui/react";
import React from "react";
import { UsefulLink } from "../UsefulLinksSection";
import { LinkItem } from "./LinkItem";

interface UsefulLinkListProps {
  links: UsefulLink[];
}

export const UsefulLinkList: React.FC<UsefulLinkListProps> = ({ links }) => {
  return (
    <Center>
      <Stack direction={{ base: "column", md: "row" }} wrap="wrap" justify={"center"}>
        {links.map((link) => (
          <LinkItem href={link.href} name={link.name}/>
        ))}
      </Stack>
    </Center>
  );
};
