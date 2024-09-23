export const API_PATH = {
  // Auth
  AUTH_LOGIN: '/postLogin',

  GET_LIST_JOB: '/api/v1/recruitments/news',

  GET_DETAIL_JOB: (id: string) => `/recruitments/${id}`,

  MASTER_DATA: '/api/v1/master-data',

  JOB_CATEGORY_POSITION: '/api/v1/recruitments/job-categories/job-category-position',
};
