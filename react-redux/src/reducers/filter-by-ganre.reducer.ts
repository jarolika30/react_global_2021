import { handleActions } from 'redux-actions';
import { filterByGanreAction } from '../actions';

export const filterByGanreReducer = handleActions(
  {
    [`${filterByGanreAction}`]: (state, { payload }) => payload
  },
  'All'
)
