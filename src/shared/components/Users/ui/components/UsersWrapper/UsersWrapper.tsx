'use client';

import { useStore } from '@/shared/providers/StoreProvider';
import { useEffect } from 'react';
import UsersList from '@/shared/components/Users/ui/components/UsersList/UsersList';
import { TUser } from '@/shared/components/Users/types/user';
import { useTelegram } from '@/shared/providers/TelegramProvider';

type Props = {
  currentUser: TUser;
  users?: TUser[];
};
const UserListWrapper = ({ currentUser, users }: Props) => {
  const { userStore } = useStore();
  const { user } = useTelegram();

  useEffect(() => {
    if (user) {
      userStore.setUser(user);
    } else {
      userStore.setUser(currentUser);
    }

    if (users && users.length > 0) {
      userStore.setUsersList(users);
    }
  }, [user, users, userStore]);

  return <UsersList />;
};

export default UserListWrapper;
