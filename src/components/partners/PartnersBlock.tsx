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
    <Flex h="648px">
      {partners.length ? (partners.map((partner, index) => (
        <PartnerItem partner={partner} itemKey={index + partner.name} backgroundColor={backgroundColor} />
      ))) : (<NoPartner backgroundColor={backgroundColor}/>)}
    </Flex>
  );
};