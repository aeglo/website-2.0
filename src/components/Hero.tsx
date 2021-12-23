import { Flex, Heading } from "@chakra-ui/react";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <Flex id="home" justifyContent="center" alignItems="center" height="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  );
};
