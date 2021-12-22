import { Flex, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex>
      <Text>AEGLO</Text>
      <Text marginLeft="auto">Conseil d'administration</Text>
      <Text>Charte</Text>
      <Text>Aide</Text>
      <Text marginRight="8">Contact</Text>
    </Flex>
  );
};
