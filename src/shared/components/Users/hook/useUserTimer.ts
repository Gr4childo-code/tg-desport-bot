'use client';

import { useMemo, useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { formatTime } from '@shared/components/Users/utils/utils';

export const useUserTimer = (initialTime: number) => {
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

  const formattedTime = timeLeft > 0 ? formatTime(timeLeft) : 'Работает';

  return {
    timeLeft,
    progress,
    progressBgColor,
    progressTextColor,
    formattedTime,
  };
};
