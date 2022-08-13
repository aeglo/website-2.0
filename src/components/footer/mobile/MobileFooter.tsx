import { Box, Text, Link, VStack, Stack } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import { AegloLocale } from "../../../i18n";
import { SocialMedias } from "../../medias/SocialMedias";
import { MobileCoordinates } from "./MobileCoordinates";
export const MobileFooter = () => {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;

  return (
    <Box bgColor="darkSection" color="darkSection" pt={"24px"} pb={"24px"} display={{ base: "grid", md: "none" }}>
      <VStack spacing={"24px"}>
        <MobileCoordinates />
        <Stack spacing={"8px"}>
          <Text fontSize="20px" fontWeight="medium" color="white" align={"center"}>
            {t("footer.follow")}
          </Text>
          <SocialMedias direction="row" color="white" />
        </Stack>
        <Stack spacing={0}>
          <Text fontSize="16px" fontWeight="medium" color="white" align={"center"}>
            {t("footer.madeBy")}:
          </Text>
          <Link
            fontSize="16px"
            fontWeight="medium"
            color="secondary.default"
            textAlign={"center"}
            href="https://www.linkedin.com/in/laurent-aubin-84a907152/"
            isExternal
          >
            Laurent Aubin
          </Link>
          <Link
            fontSize="16px"
            fontWeight="medium"
            color="secondary.default"
            textAlign={"center"}
            href="https://www.linkedin.com/in/cduchesne-1/"
            isExternal
          >
            Christophe Duchesne
          </Link>
          <Link
            fontSize="16px"
            fontWeight="medium"
            color="secondary.default"
            textAlign={"center"}
            href="https://www.linkedin.com/in/fabienpoulin/"
            isExternal
          >
            Fabien Poulin
          </Link>
        </Stack>
        <Text fontSize="12px" fontWeight="normal" color="white" align={"center"} mt={"48px"}>
          © Copyright 2022 AEGLO - {t("footer.copyright")}
        </Text>
      </VStack>
    </Box>
  );
};
