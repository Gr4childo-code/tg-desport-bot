'use client';

import { useStore } from '@/shared/providers/StoreProvider';
import { useEffect } from 'react';
import UsersList from '@/shared/components/Users/ui/UsersList/UsersList';
import { TUser } from '@/shared/components/Users/types/user';

type Props = {
  user: TUser;
  users?: TUser[];
};
const UserListWrapper = ({ user, users }: Props) => {
  const { userStore } = useStore();

  useEffect(() => {
    if (user) {
      userStore.setUser(user);
    }

    if (users && users.length > 0) {
      userStore.setUsersList(users);
    }
  }, [user, users, userStore]);

  return <UsersList />;
};

export default UserListWrapper;
