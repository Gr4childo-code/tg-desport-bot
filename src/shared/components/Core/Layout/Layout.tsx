'use client';

import React, { PropsWithChildren } from 'react';
import Header from '@/shared/components/Core/Header/Header';
import Footer from '@/shared/components/Core/Footer/Footer';

import RootProvider from '@/shared/providers/RootProvider';
import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(() => ({
  margin: '0 auto',
  padding: '10px',
}));

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <RootProvider>
      <StyledBox>
        <Header />
        {children}
        <Footer />
      </StyledBox>
    </RootProvider>
  );
};

export default Layout;
