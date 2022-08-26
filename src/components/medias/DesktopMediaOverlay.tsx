import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SocialMedias } from "./SocialMedias";

interface DesktopMediaOverlayProps { }

export const DesktopMediaOverlay: React.FC<DesktopMediaOverlayProps> = ({ }) => {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    let heightToHideFrom = 1000;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible &&
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Box position="absolute" height="100%" right="10%" zIndex={2}>
      {isVisible && (<Box sx={{ position: "sticky", top: "25%" }} display={{ base: "none", md: "grid" }}>
        <SocialMedias direction="column" color="main" />
      </Box>)}
    </Box>
  );
};
