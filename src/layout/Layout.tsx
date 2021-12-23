import React from "react";
import { Footer } from "../components/Footer";
import { DesktopMediaOverlay } from "../components/medias/DesktopMediaOverlay";
import NavBar from "../components/navigation/NavBar";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <DesktopMediaOverlay />
      {children}
      <Footer />
    </>
  );
};
