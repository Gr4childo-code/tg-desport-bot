'use client';

import React, { FC } from 'react';
import { Avatar, CardContent, styled, Typography, Box } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { TUser } from '../types/user';

import { useUserTimer } from '../hook/useUserTimer';
import UserTimer from './components/UserTimer/UserTimer';

const StyledCard = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '11px',
  borderRadius: '14px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  position: 'relative',

  '&:last-child': {
    paddingBottom: '10px',
  },
}));

const StyledName = styled(Typography)({
  fontSize: '1.2rem',
  fontFamily: 'GilroyBold',
});

const AvatarContainer = styled(Box)({
  position: 'relative',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  fontFamily: 'GilroyBold',
  fontSize: '1.7rem',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}));

type Props = {
  user: TUser;
};

const User: FC<Props> = observer(({ user }) => {
  const parsedTime = Number(user.timeLeft);
  const validTime = !isNaN(parsedTime) ? parsedTime : 0;

  return (
    <StyledCard>
      <Box display={'flex'} alignItems={'center'} gap={2} sx={{ marginBottom: '16px' }}>
        <AvatarContainer>
          <StyledAvatar
            alt={user.first_name}
            src={user.photo_url}
            sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
            variant="square"
          />
        </AvatarContainer>

        <Box>
          <StyledName>
            {user.first_name} {user.last_name}
          </StyledName>
          <UserTimer initialTime={validTime} />
        </Box>
      </Box>
    </StyledCard>
  );
});

export default User;
