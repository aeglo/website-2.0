import { Avatar } from "@chakra-ui/avatar";
import { Link, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import { Member } from "../../../pages/members";

interface MembersSectionItemProps {
  member: Member;
  itemKey: any;
}

export const MembersSectionItem: React.FC<MembersSectionItemProps> = ({ member, itemKey }) => {
  return (
    <VStack marginTop={8}>
      <Avatar src={member.asset} boxSize={40} />
      <Text fontSize="xl" fontWeight="semibold">
        {member.name}
      </Text>
      <Text>{member.job}</Text>
      <Link key={'membersSectionItem' + itemKey} href={`mailto:${member.email}`} color="secondary.default" display="flex">
        <Text>{member.email}</Text>
      </Link>
    </VStack>
  );
};