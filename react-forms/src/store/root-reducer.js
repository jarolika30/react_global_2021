import { combineReducers } from 'redux';
import { getActiveMovieReducer, getAllMovieReducer } from '../reducers';

const createRootReducer = () => {
  return combineReducers({ movies: getAllMovieReducer, activeMovie: getActiveMovieReducer })
};

export default createRootReducer;