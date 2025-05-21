import { getUserProfile, getUsersList } from '@/shared/components/Users/api';
import UserListWrapper from '@/shared/components/Users/ui/components/UsersWrapper/UsersWrapper';

const Page = async () => {
  const userProfile = await getUserProfile();
  const usersList = await getUsersList();
  return <UserListWrapper user={userProfile} users={usersList} />;
};

export default Page;
