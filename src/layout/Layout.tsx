import React from "react";
import { Footer } from "./Footer";
import NavBar from "../components/navigation/NavBar";
import { Stack } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Stack spacing={0}>
      <NavBar />
      {children}
      <Footer />
    </Stack>
  );
};
