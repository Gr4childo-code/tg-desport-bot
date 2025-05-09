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

const StyledName = styled(Typography)({
  fontSize: '1rem',
  fontFamily: 'Gilroy',
});

const TimerText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  marginLeft: 'auto',
  fontFamily: 'GilroyBold',
  backgroundColor: theme.palette.desportMain.main,
  borderRadius: '20px',
  padding: '5px 10px',
}));

const User = ({ user }: UserProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const time = Number(user.time_left);
    return !isNaN(time) ? time : 0;
  });

  useEffect(() => {
    const time = Number(user.time_left);
    setTimeLeft(!isNaN(time) ? time : 0);
  }, [user.time_left]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <StyledCard>
      <Avatar alt={user.first_name} src={user.photo_url} />
      <StyledName>
        {user.first_name} {user.last_name}
      </StyledName>

      <TimerText
        sx={(theme) => ({ color: timeLeft > 0 ? theme.palette.background.default : theme.palette.desportThird.main })}
      >
        {timeLeft > 0 ? formatTime(timeLeft) : 'Работает'}
      </TimerText>
    </StyledCard>
  );
};
export default User;
