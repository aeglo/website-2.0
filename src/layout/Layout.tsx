import { Stack } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Stack spacing={0}>
      <NavBar />
      {children}
      <Footer />
    </Stack>
  );
}
