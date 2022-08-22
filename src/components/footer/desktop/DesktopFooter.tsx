import { Box, Stack, Text, Link } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import { AegloLocale } from "../../../i18n";
import { SocialMedias } from "../../medias/SocialMedias";
import { DesktopNav } from "../../navigation/desktop/DesktopNav";
import { NavigationItem } from "../../navigation/NavBar";
import { DesktopCoordinates } from "./DesktopCoordinates";

export const DesktopFooter = () => {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;

  const NAV_ITEMS: Array<NavigationItem> = [
    {
      label: t("navigation.home"),
      href: "/"
    },
    {
      label: t("navigation.members"),
      href: "/members"
    },
    {
      label: t("navigation.partners"),
      href: "/partners"
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
    <Box bgColor="darkSection" color="darkSection" pl={"128px"} pr={"128px"} pt={"64px"} pb={"24px"} display={{ base: "none", md: "grid" }}>
      <Stack direction={"row"} justify={"space-between"}>
        <Stack spacing={"91px"}>
          <DesktopCoordinates />
          <DesktopNav navigationItems={NAV_ITEMS} textColor="white" hoverColor="secondary.default" />
        </Stack>
        <Stack justify={"end"} spacing={"16px"}>
          <Text fontSize="20px" fontWeight="medium" color="white" align={"right"}>
            {t("footer.follow")}
          </Text>
          <SocialMedias direction="row" color="white" />
          <Stack justify={"right"} spacing={0} mt={"8px"}>
            <Text fontSize="20px" fontWeight="medium" color="white" align={"right"}>
              {t("footer.madeBy")}:
            </Text>
            <Link
              fontSize="20px"
              fontWeight="medium"
              color="secondary.default"
              textAlign={"right"}
              href="https://www.linkedin.com/in/laurent-aubin-84a907152/"
              isExternal
            >
              Laurent Aubin
            </Link>
            <Link
              fontSize="20px"
              fontWeight="medium"
              color="secondary.default"
              textAlign={"right"}
              href="https://www.linkedin.com/in/cduchesne-1/"
              isExternal
            >
              Christophe Duchesne
            </Link>
            <Link
              fontSize="20px"
              fontWeight="medium"
              color="secondary.default"
              textAlign={"right"}
              href="https://www.linkedin.com/in/fabienpoulin/"
              isExternal
            >
              Fabien Poulin
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Text fontSize="16px" fontWeight="normal" color="white" align={"center"} mt={"81px"}>
        © Copyright 2022 AEGLO - {t("footer.copyright")}
      </Text>
    </Box>
  );
};
