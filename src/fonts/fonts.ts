import localFont from 'next/font/local';

export const GilroyMedium = localFont({
  src: [
    {
      path: './static-fonts/gilroy-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const Gilroy = localFont({
  src: [
    {
      path: './static-fonts/gilroy-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const GilroyBold = localFont({
  src: [
    {
      path: './static-fonts/gilroy-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});
