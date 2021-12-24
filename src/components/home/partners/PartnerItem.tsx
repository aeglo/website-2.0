import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/layout";
import React from "react";
import { Partner } from "../PartnersSection";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem: React.FC<PartnerItemProps> = ({ partner }) => {
  return (
    <Link href={partner.websiteUrl} key={partner.name}>
      <Image src={partner.imageUrl} alt={partner.name} />
    </Link>
  );
};
