import { ApiServices } from '@/api/ApiServices';
import { TUser } from './types/user';
// import { TUser } from './types/user';

export const getUserProfile = async (): Promise<TUser> => {
  try {
    const { data } = await ApiServices().get<TUser>('/userProfile');
    return data;
  } catch (err: any) {
    throw err;
  }
};

export const getUsersList = async (): Promise<TUser[]> => {
  try {
    const { data } = await ApiServices().get<TUser[]>('/userList');

    return data;
  } catch (err: any) {
    throw err;
  }
};
