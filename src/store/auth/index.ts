import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const getAccessToken = (res?: any, req?: any) => {
  if (res && req) {
    return getCookie('accessToken', { req, res });
  }
  return getCookie('accessToken') || '';
};

export const getRefreshToken = (res?: any, req?: any) => {
  if (res && req) {
    return getCookie('accessRefreshToken', { req, res });
  }
  return getCookie('accessRefreshToken') || '';
};

export const setAuthCookies = (
  {
    token,
    refreshToken,
    expiredTime,
    isMsLogin,
  }: {
    token: string;
    refreshToken: string;
    expiredTime?: number;
    isMsLogin?: boolean;
  },
  reqOnServer?: any,
) => {
  setCookie('accessToken', token, {
    maxAge: 2_147_483_647,
    res: reqOnServer?.res,
    req: reqOnServer?.req,
  });
  setCookie('accessRefreshToken', refreshToken, {
    maxAge: 2_147_483_647,
    res: reqOnServer?.res,
    req: reqOnServer?.req,
  });
  setCookie('tokenExpiredTime', expiredTime, {
    maxAge: 2_147_483_647,
    res: reqOnServer?.res,
    req: reqOnServer?.req,
  });
  setCookie('isMsLogin', isMsLogin);
};

export const deleteAuthCookies = () => {
  deleteCookie('accessToken');
  deleteCookie('accessRefreshToken');
  deleteCookie('tokenExpiredTime');
  deleteCookie('ismsLogin');
};
