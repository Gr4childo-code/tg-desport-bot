import { TUser } from '@/shared/components/Users/types/user';

export interface IInitialUserStore {
  user: TUser | null;
  usersList: TUser[] | null;
}
