import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function LocaleMenu() {
  const [currentLocale, setCurrentLocale] = useState('fr');
  return (
    <Menu>
      <MenuButton as={Button} background="none" rightIcon={<ChevronDownIcon />}>
        {currentLocale.toUpperCase()}
      </MenuButton>
      <MenuList>
        <MenuItem color="main" onClick={() => setCurrentLocale('en')}>
          EN
        </MenuItem>
        <MenuItem color="main" onClick={() => setCurrentLocale('fr')}>
          FR
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
