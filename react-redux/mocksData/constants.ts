export const isDevelopment =
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === undefined ||
  false;

export const apiHost: string = isDevelopment ? 'http://localhost:4000' : '';
export const SUCCESS_STATUS_CODE: number = 200;
export const SUCCESS_CREATED_CODE: number = 201;
export const PAGE_NOT_FOUND: number = 404;
