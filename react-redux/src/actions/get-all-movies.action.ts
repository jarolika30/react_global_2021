import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import { apiHost, SUCCESS_CREATED_CODE, SUCCESS_STATUS_CODE } from '../../mocksData/constants';
import { IMovie } from '../selectors/interfaces/IMovie';
import { compareByRelease } from '../utils';

export const getAllMovieAction = createAction('GET_ALL_MOVIE');
export const deleteMovieAction = createAction('DELETE_MOVIE');
export const createMovieAction = createAction('CREATE_MOVIE');
export const updateMovieAction = createAction('UPDATE_MOVIE');
export const sortByFieldAction = createAction('SORT_BY_FIELD');

export const getAllMovies = () => (dispatch: Dispatch) => {
  const url = 'movies';

  fetch(`${apiHost}/${url}`)
  .then(res => res.json())
    .then(movieData => {
      const { data } = movieData;

      data.sort(compareByRelease);
      dispatch(getAllMovieAction(data));
    })
    .catch(err => {
      throw Error(err);
    });
}

export const deleteMovie = (id: number) => (dispatch: Dispatch) => {
  const url = `movies/${id}`;

  fetch(`${apiHost}/${url}`,
  {
    method: 'DELETE',
  })
    .then(res => {
      if (res) dispatch(deleteMovieAction(id)); 
    })
    .catch(error => error);
};

export const createMovie = (movie: any) => (dispatch: Dispatch) => {
  fetch(`${apiHost}/movies`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(movie)
  })
    .then(res => {
      if (res.status === SUCCESS_CREATED_CODE) return res.json();
    })
    .then(data => {
      if (data) dispatch(createMovieAction(data));
    })
    .catch(error => error);
}

export const updateMovie = (movie: IMovie) => (dispatch: Dispatch) => {
  fetch(`${apiHost}/movies`,
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(movie)
  })
    .then(res => {
      if (res.status === SUCCESS_STATUS_CODE) dispatch(updateMovieAction(movie)); 
    })
    .catch(error => error);
}

