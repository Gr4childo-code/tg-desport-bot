import { Box, SxProps, Theme, Typography, alpha, styled, useTheme } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import { formatTime } from '@shared/components/Users/utils/utils';
const ProgressBarContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '4px',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  borderRadius: '0 0 14px 14px',
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  transform: 'translateX(4px)',
}));

const ProgressBarFill = ({ progress, color }: { progress: number; color: string }) => {
  return (
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
};

const TimerText = styled(Typography)(() => ({
  fontSize: '0.8rem',
  fontFamily: 'GilroyBold',
  borderRadius: '20px',
  padding: '8px 16px 6px 16px',
  lineHeight: '1',
  textAlign: 'center',
  width: 'fit-content',
}));

const UserTimer: FC<{ initialTime: number }> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const theme = useTheme();

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

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  const progress = useMemo(() => {
    return initialTime > 0 ? ((initialTime - timeLeft) / initialTime) * 100 : 100;
  }, [timeLeft, initialTime]);

  const progressBgColor = useMemo(() => {
    if (timeLeft <= 0) return theme.palette.desportMain.main;
    if (timeLeft <= 60) return theme.palette.error.main;
    return theme.palette.desportThird?.main || '#ccc';
  }, [timeLeft, theme.palette]);

  const progressTextColor = useMemo(() => {
    if (timeLeft <= 0 || timeLeft <= 60) return theme.palette.common.white;
    return theme.palette.desportMain?.main || '#000';
  }, [timeLeft, theme.palette]);

  const timerSx = useMemo<SxProps<Theme>>(
    () => ({
      backgroundColor: progressBgColor,
      color: progressTextColor,
    }),
    [progressBgColor, progressTextColor]
  );

  return (
    <>
      <TimerText sx={timerSx}>{timeLeft > 0 ? formatTime(timeLeft) : 'Работает'}</TimerText>

      <ProgressBarContainer>
        <ProgressBarFill progress={progress} color={progressBgColor} />
      </ProgressBarContainer>
    </>
  );
};

export default UserTimer;
