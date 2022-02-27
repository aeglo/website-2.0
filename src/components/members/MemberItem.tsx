import { VStack, Text, Link, Box } from "@chakra-ui/react";
import { Member } from "../../pages/members";

interface MemberItemProps {
  member: Member;
  key: any;
}

export const MemberItem = ({ member, key }: MemberItemProps) => {

  return (
    <Box
      w="100%"
      h={{ base: "596px", md: "1496px" }}
      justifyContent="left"
      flexDirection="column"
      overflow="hidden"
      color="black"
      backgroundImage={`url(${member.asset})`}
      backgroundSize="cover"
      backgroundPosition="center top"
      backgroundColor="#1b1f2b38"
      backgroundBlendMode="overlay"
      position="relative"
    >
      <VStack position="absolute" bottom={0} right={0} pb={{ base: "24px", md: "72px" }} pr={{ base: "36px", md: "128px" }} alignItems="end">
        <Text color="white" fontSize={{ base: "14px", md: "36px" }} fontWeight={"bold"}>
          {member.job}
        </Text>

        <Text color="white" fontSize={{ base: "24px", md: "52px" }} fontWeight={"bold"}>
          {member.name.toUpperCase()}
        </Text>

        <Link key={key} fontSize={{ base: "14px", md: "36px" }} fontWeight="bold" color="secondary.default" href="mailto:${member.email}">
        {member.email}
        </Link>

        <Text color="white" fontSize={{ base: "14px", md: "36px" }} fontWeight={"bold"} textAlign="right" maxW="1000px">
          {member.description}
        </Text>
      </VStack>
    </Box>
  );
};