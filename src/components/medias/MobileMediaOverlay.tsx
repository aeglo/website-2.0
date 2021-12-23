import { Box } from "@chakra-ui/react";
import React from "react";
import { SocialMedias } from "./SocialMedias";

interface MobileMediaOverlayProps {}

export const MobileMediaOverlay: React.FC<MobileMediaOverlayProps> = ({}) => {
  return (
    <Box sx={{ position: "sticky", top: "25%" }} marginLeft="90%" marginRight="32px" display={{ base: "grid", md: "none" }}>
      <SocialMedias direction="row" />
    </Box>
  );
};
