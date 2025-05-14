import React, { memo, useMemo } from 'react';
import { Container, styled } from '@mui/material';
import { ModelUserList } from '../../../lib/user.mock';
import User from '../User';
import Title from '../../../../Core/Title/Title';

const StyledContainer = styled(Container)(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '0',
}));

const UserList = () => {
  const [currentUser, employees] = useMemo(() => {
    const currentUser = ModelUserList.filter((item) => item.id === 1);
    const employees = ModelUserList.filter((item) => item.id !== 1);
    return [currentUser, employees];
  }, [ModelUserList]);

  return (
    <>
      <Title>Мой перерыв</Title>
      <StyledContainer>
        {currentUser.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </StyledContainer>

      <Title>Перерывы сотрудников</Title>
      <StyledContainer>
        {employees.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </StyledContainer>
    </>
  );
};

export default memo(UserList);
