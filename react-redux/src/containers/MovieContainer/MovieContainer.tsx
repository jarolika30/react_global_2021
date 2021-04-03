import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import MainContainer from '../MainContainer';
import { InitialMovie } from '../../../mocksData/initialMovie';
import { getAllMovies } from '../../actions';
import { 
  getAllMoviesSelector, 
  filterByGanreSelector
} from '../../selectors';

import './MovieContainer.css';

export default function MovieContainer() {
  const dispatch = useDispatch();
  const [activeMovie, setActiveMovie] = useState(InitialMovie);
  const allMovies = useSelector(getAllMoviesSelector);
  const [movies, setMovies] = useState(allMovies);
  const filterByGanre = useSelector(filterByGanreSelector);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  useEffect(() => {
    setMovies(allMovies);
  }, [allMovies]);

  useEffect(() => {
    const films = filterByGanre !== 'All' ? allMovies.filter(movie => movie.genres.includes(filterByGanre)) : allMovies;

    setMovies(films);
  }, [filterByGanre]);

  return (
      <div className="app">
        <Header activeFilm={activeMovie} handleClickMovie={setActiveMovie} />
        <div className="content">
          <MainContainer films={movies} handleClickMovie={setActiveMovie} activeFilm={activeMovie} />
        </div>
        <Footer/>
      </div>
  );
}
