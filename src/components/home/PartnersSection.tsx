import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { PartnersList } from "./partners/PartnersList";

export interface Partner {
  name: string;
  imageUrl: string;
  websiteUrl: string;
}

interface PartnersSectionProps {
  title: string;
  partners: Partner[];
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ title, partners }) => {
  return (
    <Box id="partners">
      <Heading>{title}</Heading>
      <PartnersList partners={partners} />
    </Box>
  );
};
