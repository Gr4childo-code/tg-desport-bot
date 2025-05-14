'use client';

import React, { PropsWithChildren } from 'react';
// import Header from '@/shared/components/Core/Header/Header';

import RootProvider from '@/shared/providers/RootProvider';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const StyledBox = styled(Box)(() => ({
  margin: '0 auto',
  padding: '10px',
}));
const Footer = dynamic(() => import('@/shared/components/Core/Footer/Footer'), { ssr: false });
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <RootProvider>
      <StyledBox>
        {/* <Header /> */}
        {children}
        <Footer />
      </StyledBox>
    </RootProvider>
  );
};

export default Layout;
