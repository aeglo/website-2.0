import { Box, Heading } from "@chakra-ui/react";
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
      <Heading marginY={12}>{title}</Heading>
      <PartnersList partners={partners} />
    </Box>
  );
};
