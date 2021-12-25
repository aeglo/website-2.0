import { Box, Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import { UsefulLinkTabs } from "./usefulLinks/UsefulLinkTabs";

export interface UsefulLink {
  name: string;
  href: string;
}

export interface UsefulLinkTab {
  title: string;
  links: UsefulLink[];
}

interface UsefulLinksSectionProps {
  title: string;
  subtitle: string;
  tabs: UsefulLinkTab[];
}

export const UsefulLinksSection: React.FC<UsefulLinksSectionProps> = ({ title, subtitle, tabs }) => {
  return (
    <Box id="partners" textAlign="center" paddingX={{ base: 0, md: 48 }} marginY={32}>
      <Heading marginY={4}>{title}</Heading>
      <Text fontSize="xl" fontWeight="semibold" marginBottom={12}>
        {subtitle}
      </Text>
      <UsefulLinkTabs tabs={tabs} />
    </Box>
  );
};
