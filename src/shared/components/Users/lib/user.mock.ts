import { TUsers } from '../types/user';

export const ModelUserList: TUsers = [
  {
    id: 1,
    is_bot: false,
    first_name: 'John',
    last_name: 'Doe',
    username: 'johndoe',
    is_premium: false,
    photo_url: 'https://example.com/photo.jpg',
    time_left: '0',
  },
  {
    id: 2,
    is_bot: true,
    first_name: 'Jane',
    last_name: 'Doe',
    username: 'janedoe',
    is_premium: true,
    photo_url: 'https://example.com/photo.jpg',
    time_left: '900',
  },
  {
    id: 3,
    is_bot: false,
    first_name: 'Bob',
    last_name: 'Smith',
    username: 'bobsmith',
    is_premium: false,
    photo_url: 'https://example.com/photo.jpg',
    time_left: '3600',
  },
];
