import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import { AegloLocale } from "../../i18n";

interface NavigationButtonsProps {}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({}) => {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;

  return (
    <Flex>
      <Text>{t("navigation.home")}</Text>
      <Text>{t("navigation.members")}</Text>
      <Text>{t("navigation.partners")}</Text>
      <Text>{t("navigation.pedagogy")}</Text>
      <Text>{t("navigation.chart")}</Text>
      <Text>{t("navigation.contact")}</Text>
    </Flex>
  );
};
