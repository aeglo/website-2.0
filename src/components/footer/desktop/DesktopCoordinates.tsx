import { AspectRatio, Stack, Img, Text, Link, Box, HStack } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import { AegloLocale } from "../../../i18n";

export const DesktopCoordinates = () => {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;

  return (
    <Box>
      <HStack>
        <AspectRatio width="128px">
          <Img src="images/aeglo_logo.png" fallbacksrc="images/aeglo_logo.png" alt="Aeglo logo" />
        </AspectRatio>
        <Stack direction="column" spacing={0}>
          <Text fontSize="20px" fontWeight="bold" color="white">
            AEGLO - Université Laval
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="white">
            {t("footer.address")},
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="white">
            Université Laval, G1V 0A6
          </Text>
          <Stack direction="row" justify="left">
            <Text fontSize="16px" fontWeight="bold" color="white">
              {t("footer.email")}:{" "}
            </Text>
            <Link fontSize="16px" fontWeight="normal" color="secondary.default" href="mailto:aeglo@aeglo.ift.ulaval.ca">
              aeglo@aeglo.ift.ulaval.ca
            </Link>
          </Stack>
        </Stack>
      </HStack>
    </Box>
  );
};
