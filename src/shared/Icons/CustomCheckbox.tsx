import { styled } from '@mui/material';

export const UncheckedCheckboxIcon = styled('div')(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  border: '2px solid #ccc',
  background: 'white',
}));

export const CheckedCheckboxIcon = styled('div')(({ theme }) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  border: `7px solid ${theme.palette.desportMain.main}`,
  background: 'white',
}));
