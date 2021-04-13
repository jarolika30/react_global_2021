import { handleActions } from 'redux-actions';
import { compareByField } from '../utils';
import { 
  getAllMovieAction, 
  deleteMovieAction, 
  createMovieAction, 
  updateMovieAction,
  sortByFieldAction
 } from '../actions';

export const getAllMovieReducer = handleActions(
  {
    [`${getAllMovieAction}`]: (state, { payload }) => {
      return [...payload];
    },
    [`${deleteMovieAction}`]: (state, { payload }) => {
      const films = state.filter(el => el.id !== payload);

      return [...films];
    },
    [`${createMovieAction}`]: (state, { payload }) => {
      return [...state, payload];
    },
    [`${updateMovieAction}`]: (state, { payload }) => {
      const films = state.map(el => {
        if (el.id !== payload.id) {
          return el
        } else return payload;
      });

      return [...films];
    },
    [`${sortByFieldAction}`]: (state, { payload }) => {
      const films = compareByField(state, payload);

      return [...films];
    }
  },
  []
);
