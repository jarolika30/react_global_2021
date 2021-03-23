import { createSelector } from 'reselect';
import { IAllMovieState } from './interfaces/IAllMovieState';

export const getAllMovieSelector = createSelector(
  (state: IAllMovieState) => state.movies, movies => movies
);