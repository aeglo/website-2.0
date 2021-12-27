import { AspectRatio, Box, Img, Stack, VStack, Text, Link } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import { AegloLocale } from "../../../i18n";

export const MobileCoordinates = () => {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;

  return (
    <Box>
      <VStack justify="center">
        <AspectRatio width="128px">
          <Img src="images/aeglo_logo.png" fallbackSrc="images/aeglo_logo.png" alt="Aeglo logo" />
        </AspectRatio>
        <Stack direction="column" spacing={0}>
          <Text fontSize="20px" fontWeight="bold" color="white" align="center">
            AEGLO - Université Laval
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="white" align="center">
            {t("footer.address")},
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="white" align="center">
            Université Laval, G1V 0A6
          </Text>
          <Stack direction="row" justify="center">
            <Text fontSize="16px" fontWeight="bold" color="white" align="center">
              {t("footer.email")}:{" "}
            </Text>
            <Link fontSize="16px" fontWeight="normal" color="secondary.default" href="mailto:aeglo@aeglo.ift.ulaval.ca" align="center">
              aeglo@aeglo.ift.ulaval.ca
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Box>
  );
};
