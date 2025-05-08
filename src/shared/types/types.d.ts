import { PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomPalette {
    desportMain: PaletteColor;
    desportSecondary: PaletteColor;
    desportThird: PaletteColor;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Palette extends CustomPalette {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface PaletteOptions extends CustomPalette {}
}
