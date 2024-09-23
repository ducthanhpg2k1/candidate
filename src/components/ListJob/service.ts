/* eslint-disable require-await */
import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { privateRequest, request } from '@api/request';

interface IFilters {
  keyword_search: string;
  job_category_id: string;
  type_of_work_id: string;
  area_ids: string;
}
const serviceGetListJob = async (page?: number, filter?: IFilters) => {
  const params = {
    page: page || 1,
    keyword_search: filter?.keyword_search || '',
    job_category_id: filter?.job_category_id || '',
    type_of_work_id: filter?.type_of_work_id || '',
    area_ids: filter?.area_ids || '',
  };
  return await privateRequest(request.get, API_PATH.GET_LIST_JOB, {
    params,
  });
};

export const useGetListJob = () => {
  const { data, loading, run } = useRequest(
    async (page?: number, filter?: IFilters) => {
      return serviceGetListJob(page, filter);
    },
    {
      manual: false,
    },
  );
  const onChange = (page?: number, filter?: IFilters) => {
    run(page, filter);
  };
  return {
    run,
    dataListJob: data,
    loading,
    onChange,
  };
};

const serviceGetMasterData = async () => {
  const params = {
    'resources[fields]': {},
    'resources[provinces]': {},
    'resources[type_of_works]': {},
  };
  return await privateRequest(request.get, API_PATH.MASTER_DATA, {
    params,
  });
};

export const useGetMasterData = () => {
  const { data, loading, run } = useRequest(
    async () => {
      return serviceGetMasterData();
    },
    {
      manual: false,
    },
  );

  return {
    run,
    masterData: data,
    loading,
  };
};

const serviceGetJobCategoryPosition = async () => {
  return await privateRequest(request.get, API_PATH.JOB_CATEGORY_POSITION, {});
};

export const useGetJobCategoryPosition = () => {
  const { data, loading, run } = useRequest(
    async () => {
      return serviceGetJobCategoryPosition();
    },
    {
      manual: false,
    },
  );

  return {
    run,
    dataJobCategory: data,
    loading,
  };
};
