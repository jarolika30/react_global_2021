import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import { apiHost } from '../../mocksData/constants';

export const getAllMovieAction = createAction('GET_ALL_MOVIE');

export const getAllMovies = () => (dispatch: Dispatch) => {
  const url = 'movies';

  fetch(`${apiHost}/${url}`)
  .then(res => res.json())
    .then(movieData => {
      const { data } = movieData;

      dispatch(getAllMovieAction(data));
    })
    .catch(err => {
      throw Error(err);
    });
}
