import { Image } from "@chakra-ui/image";
import { AspectRatio, Link } from "@chakra-ui/layout";
import React from "react";
import { Partner } from "../PartnersSection";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem: React.FC<PartnerItemProps> = ({ partner }) => {
  return (
    <Link href={partner.websiteUrl} key={partner.name} maxWidth={{ base: "100%", md: "40%" }}>
      <Image src={partner.imageUrl} alt={partner.name} />
    </Link>
  );
};
