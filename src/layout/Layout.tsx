import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/navigation/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
