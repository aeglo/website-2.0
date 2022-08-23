import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Partner } from "../../pages/partners";
import { PartnersList } from "./partners/PartnersList";

interface PartnersSectionProps {
  title: string;
  partners: Partner[];
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ title, partners }) => {
  return (
    <Box id="partners" textAlign="center" paddingX={{ base: 8, md: 48 }}>
      <Stack marginY={{ base: "128px", md: "196px" }}>
        <Heading marginY={12}>{title}</Heading>
        <PartnersList partners={partners} />
      </Stack>
    </Box>
  );
};
