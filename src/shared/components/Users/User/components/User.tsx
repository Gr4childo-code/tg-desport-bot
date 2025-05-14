'use client';

import React, { FC, memo } from 'react';
import { Avatar, CardContent, styled, Typography, Box } from '@mui/material';

import { TUser } from '../../types/user';
import UserTimer from './UserTimer/UserTimer';

const StyledCard = styled(CardContent)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '11px',
  borderRadius: '14px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
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
const User: FC<Props> = memo(({ user }) => {
  const parsedTime = Number(user.time_left);
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

export default memo(User);
