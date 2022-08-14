import { Flex } from "@chakra-ui/react";
import { Partner } from "../../pages/partners";
import { NoPartner } from "./NoPartner";
import { PartnerItem } from "./PartnerItem";

interface PartnersBlockProps {
  partners: Partner[];
  backgroundColor: string;
}

export const PartnersBlock = ({ partners, backgroundColor }: PartnersBlockProps) => {
  return (
    <Flex h="648px" w='100%' flexDirection={{ base: "column", md: "row" }}>
      {partners.length ? (partners.map((partner, index) => (
        <PartnerItem partner={partner} itemKey={index + partner.name} backgroundColor={backgroundColor} maxHeight={`${648 / partners.length}px`}/>
      ))) : (<NoPartner backgroundColor={backgroundColor}/>)}
    </Flex>
  );
};