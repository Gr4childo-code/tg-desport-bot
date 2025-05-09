import { Avatar, CardContent, styled, Typography } from '@mui/material';
import { TUser } from '../types/user';
import { useState, useEffect } from 'react';
import { formatTime } from '../utils/utils';

type UserProps = {
  user: TUser;
};

const StyledCard = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '10px',
  borderRadius: '20px',
  backgroundColor: theme.palette.background.paper,
  '&:last-child': {
    paddingBottom: '10px',
  },
}));

const StyledName = styled(Typography)(({}) => ({
  fontSize: '1',
  fontFamily: 'Gilroy',
}));

const TimerText = styled(Typography)(() => ({
  fontSize: '0.9rem',
  marginLeft: 'auto',
  fontFamily: 'GilroyBold',
}));

const User = ({ user }: UserProps) => {
  const [timeLeft, setTimeLeft] = useState(Number(user.time_left) || 0);

  useEffect(() => {
    setTimeLeft(Number(user.time_left) || 0);
  }, [user.time_left]);

  useEffect(() => {
    if (!timeLeft || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <StyledCard>
      <Avatar alt={user.first_name} src={user.photo_url} />
      <StyledName>
        {user.first_name} {user.last_name}
      </StyledName>
      <TimerText>{formatTime(timeLeft)}</TimerText>

      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </StyledCard>
  );
};
export default User;
