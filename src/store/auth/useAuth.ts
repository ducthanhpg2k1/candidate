/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-console */
/* eslint-disable require-await */
import { useRouter } from 'next/router';

import { ROUTE_PATH } from '@utils/common';

import { deleteAuthCookies, getAccessToken, setAuthCookies } from '.';

export interface IAuth {
  loading?: boolean;
  token: string | null;
  refreshToken?: string | null;
  expiredTime: number;
  isRegister?: boolean;
}

export const useAuth = () => {
  const router = useRouter();

  const onLogout = async () => {
    try {
      deleteAuthCookies();
      localStorage.clear();
      router.push(ROUTE_PATH.SIGN_IN);
    } catch (error) {
      console.log('Logout error', error);
    }
  };

  const onLogin = (data: IAuth) => {
    try {
      setAuthCookies({
        token: `${data.token}`,
        refreshToken: data.refreshToken || '',
        expiredTime: data.expiredTime,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isLogin: !!getAccessToken(),
    onLogin,
    onLogout,
  };
};
