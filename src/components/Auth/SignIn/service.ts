import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { request } from '@api/request';

interface IOptionsRequest {
  onSuccess?: (r: any) => void;
  onError?: (e: any) => void;
}

export const useLoginEmail = (options?: IOptionsRequest) => {
  return useRequest(
    ({ username, password }: { username?: number; password?: string; fcm_token?: any }) => {
      return request.post(API_PATH.AUTH_LOGIN, {
        data: {
          username,
          password,
        },
      });
    },
    {
      manual: true,
      ...options,
    },
  );
};
