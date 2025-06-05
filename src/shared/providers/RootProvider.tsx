import { PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { muiTheme } from '../config/theme';
import { GlobalFontStyles } from './GlobalFontStyles';
import { StoreProvider } from './StoreProvider';
import { TelegramProvider } from './TelegramProvider';

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider>
      <TelegramProvider>
        <AppRouterCacheProvider>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <GlobalFontStyles />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </TelegramProvider>
    </StoreProvider>
  );
};

export default RootProvider;
