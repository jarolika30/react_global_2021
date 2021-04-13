import { filterItems } from '../../mocksData/filterBy';

export const compareByRating = (a, b) => {
  if (a.vote_average < b.vote_average) {
    return -1;
  }
  if (a.vote_average > b.vote_average) {
    return 1;
  }

  return 0;
}

export const compareByRelease = (a, b) => {
  return new Date(a.release_date) - new Date(b.release_date);
}

export const compareByGanre = (a, b) => {
  const genresA = a.genres[0].toLowerCase();
  const genresB = b.genres[0].toLowerCase();

  return (genresA).localeCompare(genresB);
}

export const compareByField = (films, field) => {
  const filteredFilms = films;

  if (field === filterItems[0]) {
    filteredFilms.sort(compareByRelease);
  } else if (field === filterItems[1]) {
    filteredFilms.sort(compareByGanre);
  } else if (field === filterItems[2]) {
    filteredFilms.sort(compareByRating);
  }

  console.log('filtered:', filteredFilms);

  return filteredFilms;
}
