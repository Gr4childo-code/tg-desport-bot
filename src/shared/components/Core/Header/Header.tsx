'use client';

import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Image from 'next/image';
import { userProfile } from '@/mock/user.mock';
import { styled } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '',
  backgroundColor: theme.palette.background.paper,
  height: '70px',
  borderRadius: '20px',
}));

const StyledToolBar = styled(Toolbar)(({}) => ({
  width: '100%',
  justifyContent: 'space-between',
}));

const Header = () => {
  return (
    <StyledContainer>
      <StyledToolBar disableGutters>
        <Image src="logo.svg" width={65} height={58} alt="logo" priority />
        <Avatar alt="Avatar profile" src={userProfile.avatar} />
      </StyledToolBar>
    </StyledContainer>
  );
};
export default Header;
