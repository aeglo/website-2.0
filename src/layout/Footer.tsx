import { Box, Stack } from "@chakra-ui/react";
import { DesktopFooter } from "../components/footer/desktop/DesktopFooter";
import { MobileFooter } from "../components/footer/mobile/MobileFooter";


export const Footer = () => {

  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};
