import { PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { muiTheme } from '../config/theme';
import { GlobalFontStyles } from './GlobalFontStyles';
import { StoreProvider } from './StoreProvider';

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <GlobalFontStyles />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  );
};

export default RootProvider;
