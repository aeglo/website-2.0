import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Collapse, Flex, IconButton, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import React from "react";
import { AegloLocale } from "../../i18n";
import { DesktopNav } from "./desktop/DesktopNav";
import { LanguageButtons } from "./LanguageButtons";
import { Logo } from "./Logo";
import { MobileNav } from "./mobile/MobileNav";

export interface NavigationItem {
  label: string;
  href?: string;
  target?: string;
}

export default function NavBar() {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;
  const { isOpen, onToggle } = useDisclosure();

  const NAV_ITEMS: Array<NavigationItem> = [
    {
      label: t("navigation.home"),
      href: "#home"
    },
    {
      label: t("navigation.members"),
      href: "#members"
    },
    {
      label: t("navigation.partners"),
      href: "#partners"
    },
    {
      label: t("navigation.pedagogy"),
      href: "/pedagogy"
    },
    {
      label: t("navigation.chart"),
      href: "https://aeglo.ift.ulaval.ca/files/charte.pdf",
      target: "_blank"
      // TODO Change this link to '/files/charte.pdf ?'
    },
    {
      label: t("navigation.contact"),
      href: "/contact"
    }
  ];

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Logo />
        <Flex flex={{ base: 1 }} justify="center">
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navigationItems={NAV_ITEMS} />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
          <LanguageButtons />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navigationItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}
