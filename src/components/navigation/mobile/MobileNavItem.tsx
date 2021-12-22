import { Flex, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { NavigationItem } from "../NavBar";
import { NextChakraLink } from "../NextChakraLink";

interface MobileNavItemProps {}

export const MobileNavItem: React.FC<MobileNavItemProps> = ({ label, href }: NavigationItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none"
        }}
      >
        <NextChakraLink href={href}>
          <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
            {label}
          </Text>
        </NextChakraLink>
      </Flex>
    </Stack>
  );
};
