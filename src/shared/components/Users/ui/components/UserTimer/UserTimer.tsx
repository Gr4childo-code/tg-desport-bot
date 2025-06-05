import React from 'react';
import { Box, Typography, alpha, styled } from '@mui/material';
import { useUserTimer } from '../../../hook/useUserTimer';

export const ProgressBarContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '6px',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  borderRadius: '0 0 14px 14px',
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  transform: 'translateX(4px)',
}));

interface UserTimerProps {
  initialTime: number;
}

const TimerText = styled(Typography)(() => ({
  fontSize: '0.8rem',
  fontFamily: 'GilroyBold',
  borderRadius: '20px',
  padding: '8px 16px 6px 16px',
  lineHeight: '1',
  textAlign: 'center',
  width: 'fit-content',
}));

const ProgressBarFill = ({ progress, color }: { progress: number; color: string }) => (
  <Box
    style={{
      height: '100%',
      backgroundColor: color,
      width: `${progress}%`,
      transition: 'width 0.3s ease',
      transformOrigin: 'right center',
    }}
  />
);

export const UserTimer: React.FC<UserTimerProps> = ({ initialTime }) => {
  const { progress, progressBgColor, progressTextColor, formattedTime } = useUserTimer(initialTime);

  const timerSx = {
    backgroundColor: progressBgColor,
    color: progressTextColor,
  };

  return (
    <>
      <TimerText sx={timerSx}>{formattedTime}</TimerText>
      <ProgressBarContainer>
        <ProgressBarFill progress={progress} color={progressBgColor} />
      </ProgressBarContainer>
    </>
  );
};

export default UserTimer;
