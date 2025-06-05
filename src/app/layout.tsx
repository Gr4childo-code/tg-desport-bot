import Layout from '@/shared/components/Core/Layout/Layout';
import '@/shared/styles/globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
