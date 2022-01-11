import { Avatar } from "@chakra-ui/avatar";
import { Flex, Link, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import { EmailIcon } from "../../icons/EmailIcon";
import { Representative } from "../RepresentativesSection";

interface RepItemProps {
  rep: Representative;
  key?: any;
}

export const RepItem: React.FC<RepItemProps> = ({ rep }) => {
  return (
    <VStack marginTop={8}>
      <Avatar src={rep.pictureUrl} boxSize={32} />
      <Text fontSize="xl" fontWeight="semibold">
        {rep.name}
      </Text>
      <Text marginTop="0 !important">{rep.role}</Text>
      <Link href={`mailto:${rep.email}`} color="secondary" display="flex" marginTop="0 !important">
        <EmailIcon />
        <Text marginLeft={2}>{rep.email}</Text>
      </Link>
    </VStack>
  );
};
