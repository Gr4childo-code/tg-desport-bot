'use client';

import { BottomNavigation, BottomNavigationAction, Paper, styled } from '@mui/material';
import { useState } from 'react';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const StyledPaper = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'fixed',
  bottom: 10,
  left: 0,
  right: 0,
  padding: '10px',
}));

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: theme.shadows[2],
}));
const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  '& .MuiBottomNavigationAction-label': {
    fontFamily: 'Gilroy',
    '&.Mui-selected ': {
      color: theme.palette.desportMain.main,
    },
  },
  '&.Mui-selected ': {
    color: theme.palette.desportMain.main,
  },
}));

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <StyledPaper>
      <StyledBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <StyledBottomNavigationAction label="Расписание" icon={<CalendarTodayOutlinedIcon />} />
        <StyledBottomNavigationAction label="Заказы" icon={<LocalGroceryStoreOutlinedIcon />} />
      </StyledBottomNavigation>
    </StyledPaper>
  );
};

export default Footer;
