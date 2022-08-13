import { Image } from "@chakra-ui/image";
import { AspectRatio, Link } from "@chakra-ui/layout";
import React from "react";
import { Partner } from "../../../pages/partners";

interface PartnerItemProps {
  partner: Partner;
}

export const PartnerItem: React.FC<PartnerItemProps> = ({ partner }) => {
  return (
    <Link href={partner.website} key={partner.name} maxWidth={{ base: "100%", md: "40%" }} alignSelf={"center"}>
      <Image src={partner.asset} alt={partner.name} />
    </Link>
  );
};
