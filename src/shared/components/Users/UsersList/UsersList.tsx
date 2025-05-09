import { Container, styled } from '@mui/material';
import { ModelUserList } from '../lib/user.mock';
import User from '../User/User';

const StyledContainer = styled(Container)(({}) => ({
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '0',
}));

const UserList = () => {
  return (
    <>
      {/* <h1>Users List</h1> */}
      <StyledContainer>
        {ModelUserList.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </StyledContainer>
    </>
  );
};

export default UserList;
