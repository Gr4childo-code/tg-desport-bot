'use client';

import Image from 'next/image';
import { Paper, Box, styled, Container } from '@mui/material';
import ModalTime from '@shared/components/ModalTime/ModalTime';

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  position: 'fixed',
  bottom: 10,
  left: 0,
  right: 0,
  padding: '10px',
  display: 'flex',
  boxShadow: 'none',
  zIndex: 1401,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: 0,
  },
}));

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  backgroundColor: theme.palette.background.default,
  padding: '10px',
  boxShadow: theme.shadows[2],
  borderRadius: '20px',
}));

const StyledInnerBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  width: '100%',
  maxHeight: '77px',
});

const Footer = () => {
  return (
    <StyledPaper>
      <StyledContainer>
        <StyledInnerBox>
          <StyledBoxContainer>
            <Image src="/logo.svg" width={65} height={56} alt="logo" priority />
          </StyledBoxContainer>
          <ModalTime />
        </StyledInnerBox>
      </StyledContainer>
    </StyledPaper>
  );
};

export default Footer;
