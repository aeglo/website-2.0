import { useColorModeValue, Stack, Box, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import React from "react";
import { NavigationItem } from "../NavBar";
import { NextChakraLink } from "../NextChakraLink";

interface DesktopNavProps {
  navigationItems: NavigationItem[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navigationItems }: DesktopNavProps) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {navigationItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NextChakraLink
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color="main"
                target={navItem.target}
                _hover={{
                  textDecoration: "none",
                  color: "secondary.default"
                }}
              >
                {navItem.label}
              </NextChakraLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
