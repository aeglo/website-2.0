import { Box } from "@chakra-ui/react";
import React from "react";
import { SocialMedias } from "./SocialMedias";

interface MobileMediaOverlayProps {}

export const MobileMediaOverlay: React.FC<MobileMediaOverlayProps> = ({}) => {
  return (
    <Box justifyItems="center" display={{ base: "grid", md: "none" }}>
      <SocialMedias direction="row" />
    </Box>
  );
};
