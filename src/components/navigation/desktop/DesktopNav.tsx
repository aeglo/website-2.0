import { useColorModeValue, Stack, Box, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import React from "react";
import { NavigationItem } from "../NavBar";
import { NextChakraLink } from "../NextChakraLink";

interface DesktopNavProps {
  navigationItems: NavigationItem[];
  textColor: string;
  hoverColor: string;
}

export const DesktopNav = ({ navigationItems, textColor, hoverColor }: DesktopNavProps) => {
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
                color={textColor}
                target={navItem.target}
                _hover={{
                  textDecoration: "none",
                  color: hoverColor,
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
