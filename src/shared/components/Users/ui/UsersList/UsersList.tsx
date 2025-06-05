'use client';

import React from 'react';
import { Container, styled } from '@mui/material';

import User from '../User';
import Title from '../../../Core/Title/Title';
import { useStore } from '@/shared/providers/StoreProvider';
import { observer } from 'mobx-react-lite';
import { TUser } from '../../types/user';
import UserSkeleton from '../components/Skeleton/UserSkeleton';
import UserListSkeleton from '../components/Skeleton/UserListSkeleton';
const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '0',
  [theme.breakpoints.up('sm')]: {
    padding: 0,
  },
}));

const UsersList = observer(() => {
  const { userStore } = useStore();

  const { user, usersList } = userStore;

  return (
    <StyledContainer>
      <Title>Мой перерыв</Title>

      <StyledContainer>{user?.id ? <User key={user.id} user={user} /> : <UserSkeleton />}</StyledContainer>

      <Title>Перерывы сотрудников</Title>
      <StyledContainer>
        {usersList && usersList?.length > 0 ? <MemoUsersList usersList={usersList} /> : <UserListSkeleton />}
      </StyledContainer>
    </StyledContainer>
  );
});

const MemoUsersList = observer(({ usersList }: { usersList: TUser[] }) => (
  <>
    {usersList.map((user) => (
      <User key={user.id} user={user} />
    ))}
  </>
));

export default UsersList;
