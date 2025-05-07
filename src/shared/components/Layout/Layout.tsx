'use client';

import React, { PropsWithChildren } from 'react';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { GilroyBold, GilroyMedium, Gilroy } from '@/fonts/fonts';
import classNames from 'classnames';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={classNames(GilroyBold, GilroyMedium, Gilroy)}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
