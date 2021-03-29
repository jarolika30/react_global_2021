import { createSelector } from 'reselect';
import { IActiveMovieState } from './interfaces/IActiveMovieState';

export const getActiveMovieSelector = createSelector(
  (state: IActiveMovieState) => state.activeMovie, activeMovie => activeMovie
);