/* eslint-disable require-await */
import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { privateRequest, request } from '@api/request';

const serviceGetListJob = async (page?: number) => {
  const params = {
    page: page || 1,
  };
  return await privateRequest(request.get, API_PATH.GET_LIST_JOB, {
    params,
  });
};

export const useGetListJob = () => {
  const { data, loading, run } = useRequest(
    async (page?: number) => {
      return serviceGetListJob(page);
    },
    {
      manual: false,
    },
  );
  const onChange = (page?: number) => {
    run(page);
  };
  return {
    run,
    dataListJob: data,
    loading,
    onChange,
  };
};
