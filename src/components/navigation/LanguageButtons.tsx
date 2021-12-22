import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface LanguageButtonsProps {}

export const LanguageButtons: React.FC<LanguageButtonsProps> = ({}) => {
  const router = useRouter();
  const { locale: currentLocale, locales, pathname, asPath, query } = router;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {currentLocale.toUpperCase()}
      </MenuButton>
      <MenuList>
        {locales.map((locale) => (
          <MenuItem key={locale} onClick={() => router.push({ pathname, query }, asPath, { locale: locale })}>
            {locale.toUpperCase()}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
