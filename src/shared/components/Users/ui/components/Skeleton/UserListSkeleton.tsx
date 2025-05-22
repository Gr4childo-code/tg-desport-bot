import React from 'react';
import UserSkeleton from './UserSkeleton';

const UserListSkeleton = ({ count = 3 }) => {
  const skeletonArray = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      {skeletonArray.map((key) => (
        <UserSkeleton key={key} />
      ))}
    </>
  );
};

export default UserListSkeleton;
