import React from "react";
import { Footer } from "../components/Footer";
import NavBar from "../components/navigation/NavBar";
import { SocialMedias } from "../components/SocialMedias";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SocialMedias />
      {children}
      <Footer />
    </>
  );
};
