import { getUserProfile, getUsersList } from '@/shared/components/Users/api';
import UserListWrapper from '@/shared/components/Users/ui/components/UsersWrapper/UsersWrapper';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DE chill',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png' },
      { url: '/favicons/favicon-32x32.png' },
      { url: '/favicons/android-chrome-192x192.png' },
      { url: '/favicons/android-chrome-512x512.png' },
      { url: '/favicons/apple-touch-icon.png' },
    ],
  },
};

const Page = async () => {
  const userProfile = await getUserProfile();
  const usersList = await getUsersList();
  return <UserListWrapper currentUser={userProfile} users={usersList} />;
};

export default Page;
