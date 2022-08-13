import { Box, Flex, Stack, VStack } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import React from "react";
import { Partner } from "../../../pages/partners";
import { PartnerItem } from "./PartnerItem";

interface PartnersListProps {
  partners: Partner[];
}

export const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} flexWrap="wrap" spacing={12} justify={"center"} mb={{base: "128px", md: "196px"}}>
      {partners.map((partner) => (
        <PartnerItem partner={partner} />
      ))}
    </Stack>
  );
};
