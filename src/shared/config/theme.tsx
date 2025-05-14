import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  cssVariables: true,

  palette: {
    background: {
      default: '#f8f8f8',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#242323',
      secondary: '#b2b2b2;',
    },
    error: {
      main: '#fb471f',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    desportMain: {
      main: '#0053da',
      light: '#3379ff',
      dark: '#003bb3',
      contrastText: '#fff',
    },

    desportSecondary: {
      main: '#111c4e',
      light: '#3e4a7d',
      dark: '#0b0f29',
      contrastText: '#fff',
    },

    desportThird: {
      main: '#b6e74d',
      light: '#d1f283',
      dark: '#81b436',
      contrastText: '#000',
    },
  },
  shadows: {
    ...createTheme().shadows,
    2: '0px 9px 35px 0px rgba(0, 0, 0, 0.05)',
  },

  transitions: {
    duration: {
      short: 0.15,
      standard: 0.3,
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1400,
      xl: 1536,
    },
  },
});
