import { Flex, Heading } from "@chakra-ui/react";

export const Hero = () => (
  <Flex justifyContent="center" alignItems="center" height="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
    <Heading fontSize="6vw">Bienvenue sur le site de l'AEGLO</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "with-chakra-ui-typescript"
};
