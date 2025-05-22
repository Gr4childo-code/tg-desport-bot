import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';

const UserSkeleton = () => {
  return (
    <Box
      sx={{
        padding: '11px',
        borderRadius: '14px',
        backgroundColor: 'background.paper',
        boxShadow: 2,
        marginBottom: '.25rem',
        height: '90px',
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Box
          sx={{
            position: 'relative',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Skeleton variant="rectangular" width={60} height={60} />
        </Box>

        <Box>
          <Skeleton variant="text">
            <Typography variant="h6">Имя Фамилия</Typography>
          </Skeleton>
          <Skeleton variant="text" width={80} height={24}>
            <Typography variant="body2">00:00:00</Typography>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
};

export default UserSkeleton;
