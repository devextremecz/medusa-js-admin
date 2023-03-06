import { useMemo } from 'react';

import { useAdminGetSession } from 'medusa-react';

export const useIsMe = (userId: string | undefined) => {
  const { user } = useAdminGetSession();

  return useMemo(() => {
    return user?.id === userId;
  }, [user, userId]);
};
