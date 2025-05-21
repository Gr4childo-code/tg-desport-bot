'use client';

import { useStore } from '@/shared/providers/StoreProvider';
import { useEffect } from 'react';
import UsersList from '@/shared/components/Users/ui/UsersList/UsersList';
import { TUser } from '@/shared/components/Users/types/user';

type Props = {
  user: TUser;
  users?: TUser[];
};
const UserListWrapper = ({ user }: Props) => {
  const { userStore } = useStore();

  useEffect(() => {
    console.log('user1', user);

    if (user?.id) {
      userStore.setUser(user);
    }
  }, [user, userStore]);

  return <UsersList />;
};

export default UserListWrapper;
