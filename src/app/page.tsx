import UserListWrapper from '@/shared/components/Users/ui/components/UsersWrapper/UsersWrapper';

const Page = async () => {
  const { userProfile } = await import('@/shared/lib/user.mock');

  return <UserListWrapper user={userProfile} />;
};

export default Page;
