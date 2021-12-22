import { Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { NavigationItem } from "../NavBar";
import { MobileNavItem } from "./MobileNavItem";

interface MobileNavProps {
  navigationItems: NavigationItem[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ navigationItems }) => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {navigationItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
