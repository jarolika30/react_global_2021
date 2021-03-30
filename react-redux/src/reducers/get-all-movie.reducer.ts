import { handleActions } from 'redux-actions';
import { getAllMovieAction, deleteMovieAction } from '../actions';

export const getAllMovieReducer = handleActions(
  {
    [`${getAllMovieAction}`]: (state, { payload }) => {
      return [...payload];
    },
    [`${deleteMovieAction}`]: (state, { payload }) => {
      const films = state.filter(el => el.id !== payload);
      return [...films];
    }
  },
  []
);
