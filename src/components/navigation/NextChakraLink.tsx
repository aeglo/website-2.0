import { HTMLChakraProps, Link as ChakraLink, ThemingProps } from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

export interface NextChakraLinkProps extends HTMLChakraProps<"a">, ThemingProps<"Link"> {
  href: string;
  nextLinkProps?: NextLinkProps;
}

export const NextChakraLink: React.FC<NextChakraLinkProps> = ({ href, nextLinkProps, children, ...props }: NextChakraLinkProps) => {
  return (
    <NextLink href={href} passHref {...nextLinkProps}>
      <ChakraLink {...props} as="a">
        {children}
      </ChakraLink>
    </NextLink>
  );
};
