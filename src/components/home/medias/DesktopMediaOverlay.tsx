import { Box } from "@chakra-ui/react";
import React from "react";
import { SocialMedias } from "./SocialMedias";

interface DesktopMediaOverlayProps {}

export const DesktopMediaOverlay: React.FC<DesktopMediaOverlayProps> = ({}) => {
  return (
    <Box position="absolute" height="100%" right="10%" zIndex={2}>
      <Box sx={{ position: "sticky", top: "25%" }} display={{ base: "none", md: "grid" }}>
        <SocialMedias direction="column" />
      </Box>
    </Box>
  );
};
