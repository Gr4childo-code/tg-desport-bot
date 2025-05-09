export type TUsers = User[];

export type TUser = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
  username: string;
  is_premium: boolean;
  photo_url: string;
  time_left?: string;
};
