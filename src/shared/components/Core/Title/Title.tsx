import { styled } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const StyledTopography = styled('h1')(({ theme }) => ({
  fontSize: '1rem',
  fontFamily: 'GilroyBold',
  marginBottom: '1rem',
  color: theme.palette.text.primary,

  padding: '10px 20px',
  borderRadius: '20px',
  textTransform: 'uppercase',
  margin: '15px 0 7px 0 ',
}));
const Title = ({ children }: PropsWithChildren) => {
  return <StyledTopography>{children}</StyledTopography>;
};

export default Title;
