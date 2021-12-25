import { Box, Flex, Text } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import { DesktopNav } from "../components/navigation/desktop/DesktopNav";
import { NavigationItem } from "../components/navigation/NavigationItem";
import { AegloLocale } from "../i18n";


export const Footer = () => {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;

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
      bg="darkSection"
      color="darkSection"
      minH={"425px"}
      align={"center"}
      >
        <Flex flex={{ base: 1 }} justify="left">
          <Flex display={{ base: "none", md: "flex" }} ml={145}>
            <DesktopNav navigationItems={NAV_ITEMS} textColor="white" hoverColor="secondary" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
