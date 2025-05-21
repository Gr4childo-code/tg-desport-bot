'use client';

import React, { memo, useMemo } from 'react';
import { Container, styled } from '@mui/material';

import User from '../User';
import Title from '../../../Core/Title/Title';
import { useStore } from '@/shared/providers/StoreProvider';

const StyledContainer = styled(Container)(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '0',
}));

const UsersList = () => {
  const { userStore } = useStore();

  const { user } = userStore;

  return (
    <>
      <Title>Мой перерыв</Title>
      <StyledContainer>{user?.id && <User key={user.id} user={user} />}</StyledContainer>

      <Title>Перерывы сотрудников</Title>
      <StyledContainer>
        {/* {employees.map((user) => (
          <User key={user.id} user={user} />
        ))} */}
      </StyledContainer>
    </>
  );
};

export default memo(UsersList);
