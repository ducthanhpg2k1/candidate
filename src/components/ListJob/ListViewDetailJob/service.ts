import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { privateRequest, request } from '@api/request';

const serviceGetDetailJob = async (id: string) => {
  return await privateRequest(request.get, API_PATH.GET_DETAIL_JOB(id));
};

export const useGetDetailJob = () => {
  const { data, loading, run } = useRequest(
    async (id: string) => {
      return await serviceGetDetailJob(id);
    },
    {
      manual: true,
    },
  );

  return {
    dataDetailJob: data,
    loading,
    run,
  };
};
