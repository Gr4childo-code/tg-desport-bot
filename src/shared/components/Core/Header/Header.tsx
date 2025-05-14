'use client';

// import Image from 'next/image';
import { BottomNavigation, BottomNavigationAction, Paper, Box, styled } from '@mui/material';
import { useState } from 'react';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'fixed',
  bottom: 10,
  left: 0,
  right: 0,
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
}));

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: theme.shadows[2],
  display: 'flex',
  width: 'auto',
  backgroundColor: '#fff',
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  '& .MuiBottomNavigationAction-label': {
    fontFamily: 'Gilroy',
    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
  },
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <StyledPaper>
      <Box display="flex" alignItems="center" gap={2} px={2}>
        {/* <Box sx={{ width: 65, height: 58 }}>
          <Image src="/logo.svg" width={65} height={58} alt="logo" priority />
        </Box> */}

        <StyledBottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <StyledBottomNavigationAction label="Перерывы" icon={<AccessAlarmIcon />} />
          <StyledBottomNavigationAction label="Заказы" icon={<LocalGroceryStoreOutlinedIcon />} />
        </StyledBottomNavigation>
      </Box>
    </StyledPaper>
  );
};

export default Footer;
