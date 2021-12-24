import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { Partner } from "../PartnersSection";
import { PartnerItem } from "./PartnerItem";

interface PartnersListProps {
  partners: Partner[];
}

export const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  return (
    <Flex>
      {partners.map((partner) => (
        <PartnerItem partner={partner} />
      ))}
    </Flex>
  );
};
