import { apiHost } from '../../mocksData/constants';

export const deleteMovie = (id: string) => {
  const url = `movies/${id}`;

  return fetch(`${apiHost}/${url}`,
  {
    method: 'DELETE',
  })
    .then(res => res.status)
    .catch(error => error);
};
