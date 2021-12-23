import React from "react";
import { Text } from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";
import { AegloLogoFull } from "../icons/AegloLogoFull";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <NextChakraLink href="/">
      <AegloLogoFull boxSize={36} />
    </NextChakraLink>
  );
};
