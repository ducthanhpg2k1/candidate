export const API_PATH = {
  // Auth
  AUTH_LOGIN: '/postLogin',

  GET_LIST_JOB: '/api/v1/recruitments/news',

  GET_DETAIL_JOB: (id: string) => `/recruitments/${id}`,
};
