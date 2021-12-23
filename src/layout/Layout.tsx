import React from "react";
import { Footer } from "../components/Footer";
import NavBar from "../components/navigation/NavBar";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
