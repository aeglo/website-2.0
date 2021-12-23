import { Box } from "@chakra-ui/react";
import React from "react";
import { SocialMedias } from "./SocialMedias";

interface DesktopMediaOverlayProps {}

export const DesktopMediaOverlay: React.FC<DesktopMediaOverlayProps> = ({}) => {
  return (
    <Box sx={{ position: "sticky", top: "25%" }} marginLeft="90%" marginRight="32px" display={{ base: "none", md: "grid" }}>
      <SocialMedias direction="column" />
    </Box>
  );
};
