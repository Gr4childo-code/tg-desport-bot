import { makeAutoObservable, extendObservable } from 'mobx';

import { IInitialUserStore } from './types/storeUser';
import { TUser } from '../components/Users/types/user';

const initialUser: IInitialUserStore = {
  user: null,
  usersList: null,
};

class UserStore {
  user = initialUser.user;
  usersList = initialUser.usersList;

  constructor() {
    makeAutoObservable(this);
  }
  setUser = (userData: TUser) => {
    this.user = extendObservable({}, userData); // делаем объект реактивным
  };
  setUsersList = (userData: TUser[]) => {
    this.usersList = userData;
  };
  setUserBreak = (timerLeft: string) => {
    if (this.user !== null) {
      this.user = {
        ...this.user,
        time_left: timerLeft,
      };
    }
  };
}

const userStore = new UserStore();
export default userStore;
