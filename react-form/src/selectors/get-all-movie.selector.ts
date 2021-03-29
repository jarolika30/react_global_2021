import { createSelector } from 'reselect';
import { IAllMovieState } from './interfaces/IAllMovieState';

export const getAllMoviesSelector = createSelector(
  (state: IAllMovieState) => state.movies, movies => movies
);
