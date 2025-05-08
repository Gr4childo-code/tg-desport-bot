import { Gilroy, GilroyBold, GilroyMedium } from '@/fonts/fonts';
import { GlobalStyles } from '@mui/material';

export const GlobalFontStyles = () => (
  <GlobalStyles
    styles={{
      '@global': {
        body: {
          fontFamily: GilroyMedium,
        },
        '.Gilroy': {
          fontFamily: Gilroy,
        },
        '.GilroyBold': {
          fontFamily: GilroyBold,
        },
      },
    }}
  />
);
