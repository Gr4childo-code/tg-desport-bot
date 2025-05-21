import { makeAutoObservable } from 'mobx';
import { TUser } from '../components/Users/types/user';

const initialUser = {
  user: null,
};

class UserStore {
  user: TUser = initialUser.user;

  constructor() {
    makeAutoObservable(this);
  }
  setUser = (userData: TUser) => {
    this.user = userData;
    console.log(this.user);
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
