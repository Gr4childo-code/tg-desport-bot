'use client';

import React, { memo } from 'react';
import { Container, styled } from '@mui/material';

import User from '../User';
import Title from '../../../Core/Title/Title';
import { useStore } from '@/shared/providers/StoreProvider';
import { observer } from 'mobx-react-lite';
import { TUser } from '../../types/user';
const StyledContainer = styled(Container)(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '0',
}));

const UsersList = observer(() => {
  const { userStore } = useStore();

  const { user, usersList } = userStore;

  return (
    <>
      <Title>Мой перерыв</Title>
      <StyledContainer>{user?.id && <User key={user.id} user={user} />}</StyledContainer>

      <Title>Перерывы сотрудников</Title>
      <StyledContainer>{usersList && usersList?.length > 0 && <MemoUsersList usersList={usersList} />}</StyledContainer>
    </>
  );
});

const MemoUsersList = observer(({ usersList }: { usersList: TUser[] }) => (
  <>
    {usersList.map((user) => (
      <User key={user.id} user={user} />
    ))}
  </>
));

export default memo(UsersList);
