import { handleActions } from 'redux-actions';
import { getAllMovieAction } from '../actions';

export const getAllMovieReducer = handleActions(
  {
    [`${getAllMovieAction}`]: (state, { payload }) => {
      return [...payload];
    }
  },
  []
);