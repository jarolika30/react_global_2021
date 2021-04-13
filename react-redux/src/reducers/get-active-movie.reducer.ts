import { handleActions } from 'redux-actions';
import { InitialMovie } from '../../mocksData/initialMovie';
import { getActiveMovie } from '../actions';

export const getActiveMovieReducer = handleActions(
  {
    [`${getActiveMovie}`]: (state, { payload }) => payload
  },
  InitialMovie
)
