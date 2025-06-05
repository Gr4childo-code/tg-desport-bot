'use client';

import React, { PropsWithChildren } from 'react';

import RootProvider from '@/shared/providers/RootProvider';
import { Box, styled } from '@mui/material';
import Footer from '../Footer/Footer';

const StyledBox = styled(Box)(() => ({
  margin: '0 auto',
  padding: '10px',
}));

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <RootProvider>
      <StyledBox>
        {children}
        <Footer />
      </StyledBox>
    </RootProvider>
  );
};

export default Layout;
