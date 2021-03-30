import { combineReducers } from 'redux';
import { getActiveMovieReducer, getAllMovieReducer, filterByGanreReducer } from '../reducers';

const createRootReducer = () => {
  return combineReducers({ movies: getAllMovieReducer, activeMovie: getActiveMovieReducer, activeLink: filterByGanreReducer })
};

export default createRootReducer;
