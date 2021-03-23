export const isDevelopment =
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === undefined ||
  false;

export const apiHost: string = isDevelopment ? 'http://localhost:4000' : '';