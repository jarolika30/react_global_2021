import { createSelector } from 'reselect';

interface IActiveState {
  activeLink: string;
}

export const filterByGanreSelector = createSelector(
  (state: IActiveState) => state.activeLink, activeLink => activeLink
);
