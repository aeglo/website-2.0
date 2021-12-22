import { Flex } from "@chakra-ui/react";
import { LanguageButtons } from "./LanguageButtons";
import { Logo } from "./Logo";
import { NavigationButtons } from "./NavigationButtons";

export const Navbar = () => {
  return (
    <Flex>
      <Logo />
      <NavigationButtons />
      <LanguageButtons />
    </Flex>
  );
};
