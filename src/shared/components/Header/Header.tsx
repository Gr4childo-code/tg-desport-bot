'use client';

import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Image from 'next/image';
import { userProfile } from '@/mock/user.mock';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <Container className={styles.Header}>
      <Toolbar disableGutters className={styles.Header__toolbar}>
        <Image src="logo.svg" width={65} height={58} alt="logo" />

        <Avatar alt="Avatar profile" src={userProfile.avatar} />
      </Toolbar>
    </Container>
  );
};
export default Header;
